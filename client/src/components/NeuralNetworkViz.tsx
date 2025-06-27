import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
  layer: number;
  active: boolean;
}

interface Connection {
  from: string;
  to: string;
  weight: number;
  active: boolean;
}

export default function NeuralNetworkViz() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    const layers = [3, 5, 4, 2]; // Input, Hidden1, Hidden2, Output
    const newNodes: Node[] = [];
    const newConnections: Connection[] = [];

    layers.forEach((nodeCount, layerIndex) => {
      for (let i = 0; i < nodeCount; i++) {
        const id = `${layerIndex}-${i}`;
        newNodes.push({
          id,
          x: (layerIndex / (layers.length - 1)) * 100,
          y: ((i + 1) / (nodeCount + 1)) * 100,
          layer: layerIndex,
          active: false,
        });

        // Create connections to next layer
        if (layerIndex < layers.length - 1) {
          for (let j = 0; j < layers[layerIndex + 1]; j++) {
            newConnections.push({
              from: id,
              to: `${layerIndex + 1}-${j}`,
              weight: Math.random(),
              active: false,
            });
          }
        }
      }
    });

    setNodes(newNodes);
    setConnections(newConnections);

    // Animate network activity
    const interval = setInterval(() => {
      setNodes(prev => 
        prev.map(node => ({
          ...node,
          active: Math.random() > 0.7
        }))
      );
      
      setConnections(prev =>
        prev.map(conn => ({
          ...conn,
          active: Math.random() > 0.8
        }))
      );
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 bg-gradient-to-r from-dark/50 to-primary/10 rounded-2xl overflow-hidden border border-primary/20">
      <svg className="w-full h-full">
        {/* Connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          
          if (!fromNode || !toNode) return null;

          return (
            <motion.line
              key={`${conn.from}-${conn.to}`}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke={conn.active ? "#6366F1" : "#1E293B"}
              strokeWidth={conn.active ? "2" : "1"}
              opacity={conn.active ? 0.8 : 0.3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: index * 0.05 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.active ? "8" : "6"}
            fill={node.active ? "#06B6D4" : "#334155"}
            stroke={node.active ? "#10B981" : "#475569"}
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </svg>
      
      {/* Network Labels */}
      <div className="absolute inset-0 flex justify-between items-end p-4 pointer-events-none">
        <div className="text-xs text-light-slate/60 font-jetbrains">Input</div>
        <div className="text-xs text-light-slate/60 font-jetbrains">Hidden Layers</div>
        <div className="text-xs text-light-slate/60 font-jetbrains">Output</div>
      </div>

      {/* Pulse overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}