import { Component } from '@angular/core';

interface Project{
  name: string;
  description: string;
  technologies: string;
  githubLink: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsData: Project[] = [
    {
      name: 'Etsy Shop Automation',
      description: 'This is a sample project description.',
      technologies: '.NET',
      githubLink: 'https://github.com/yourusername/project2'
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2...',
      technologies: '.NET, Angular, SQL',
      githubLink: 'https://github.com/yourusername/project2'
    },
  ];
}

