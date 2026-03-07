import * as si from "simple-icons";

export interface Tool {
  name: string;
  url: string;
  svgPath: string;
}

export const tools: Tool[] = [
  { name: "WP/Woo", url: "https://wordpress.org", svgPath: si.siWordpress.path },
  
  { name: "Next.js", url: "https://nextjs.org", svgPath: si.siNextdotjs.path },
  { name: "React", url: "https://react.dev", svgPath: si.siReact.path },
  { name: "Laravel", url: "https://laravel.com", svgPath: si.siLaravel.path },
  { name: "PHP", url: "https://php.net", svgPath: si.siPhp.path },
  { name: "Node.js", url: "https://nodejs.org", svgPath: si.siNodedotjs.path },
  { name: "TypeScript", url: "https://typescriptlang.org", svgPath: si.siTypescript.path },
  { name: "Tailwind CSS", url: "https://tailwindcss.com", svgPath: si.siTailwindcss.path },
  { name: "Docker", url: "https://docker.com", svgPath: si.siDocker.path },
  { name: "Nginx", url: "https://nginx.org", svgPath: si.siNginx.path },
  { name: "Linux", url: "https://kernel.org", svgPath: si.siLinux.path },
  { name: "Git", url: "https://git-scm.com", svgPath: si.siGit.path },
  { name: "GitHub", url: "https://github.com", svgPath: si.siGithub.path },
  { name: "Nextcloud", url: "https://nextcloud.com", svgPath: si.siNextcloud.path },
  { name: "Python", url: "https://python.org", svgPath: si.siPython.path },
];