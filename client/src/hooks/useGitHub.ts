import { useQuery } from "@tanstack/react-query";
import { getGitHubProjects, getGitHubUser } from "@/lib/github";

export function useGitHubProjects() {
  return useQuery({
    queryKey: ["/api/github/projects"],
    queryFn: getGitHubProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useGitHubUser() {
  return useQuery({
    queryKey: ["/api/github/user"],
    queryFn: getGitHubUser,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
