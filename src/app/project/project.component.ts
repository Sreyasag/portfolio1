import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      title: 'Kerala Tourism',
      image: 'f2.jpg',
      link: 'https://sreyasag.github.io/Kerala/',
      details:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero tenetur tempore itaque totam eum veniam, accusantium cumque ullam voluptas. Laboriosam, et reiciendis voluptatibus aut tempore magni animi dolores at.',
    },
    {
      title: 'Todo App',
      image: 'f2.jpg',
      link: 'https://sreyasag.github.io/todo/todo.html',
      details:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero tenetur tempore itaque totam eum veniam, accusantium cumque ullam voluptas. Laboriosam, et reiciendis voluptatibus aut tempore magni animi dolores at.',
    },
    {
      title: 'Project title',
      image: 'f2.jpg',
      link: ' ',
      details:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero tenetur tempore itaque totam eum veniam, accusantium cumque ullam voluptas. Laboriosam, et reiciendis voluptatibus aut tempore magni animi dolores at.',
    },
    {
      title: 'Project title',
      image: 'f2.jpg',
      link: ' ',
      details:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero tenetur tempore itaque totam eum veniam, accusantium cumque ullam voluptas. Laboriosam, et reiciendis voluptatibus aut tempore magni animi dolores at.',
    },
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
