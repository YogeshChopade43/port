import { GitHubProject, GitHubUser } from "@/types/github";

const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_USERNAME = "YogeshChopade43";

export async function getGitHubProjects(): Promise<GitHubProject[]> {
  const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub projects: ${response.statusText}`);
  }
  
  const repos: GitHubProject[] = await response.json();
  
  // Filter to only include the Projects repository contents
  const projectsRepo = repos.find(repo => repo.name === "Projects");
  
  if (!projectsRepo) {
    throw new Error("Projects repository not found");
  }

  // Get the contents of the Projects repository
  const contentsResponse = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/Projects/contents`);
  
  if (!contentsResponse.ok) {
    throw new Error(`Failed to fetch project contents: ${contentsResponse.statusText}`);
  }
  
  const contents = await contentsResponse.json();
  
  // Filter out directories (projects) and create project objects
  const projects: GitHubProject[] = contents
    .filter((item: any) => item.type === "dir")
    .map((item: any) => ({
      id: item.sha,
      name: item.name,
      full_name: `${GITHUB_USERNAME}/Projects/${item.name}`,
      html_url: `https://github.com/${GITHUB_USERNAME}/Projects/tree/main/${encodeURIComponent(item.name)}`,
      description: null,
      created_at: projectsRepo.created_at,
      updated_at: projectsRepo.updated_at,
      pushed_at: projectsRepo.pushed_at,
      stargazers_count: projectsRepo.stargazers_count,
      forks_count: projectsRepo.forks_count,
      language: "Python",
      homepage: null,
    }));
  
  return projects;
}

export async function getGitHubUser(): Promise<GitHubUser> {
  const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub user: ${response.statusText}`);
  }
  
  return response.json();
}
