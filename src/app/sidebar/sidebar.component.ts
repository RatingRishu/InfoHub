import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

}

// import { Component } from '@angular/core';

// interface MenuItem {
//   id: number;
//   name: string;
//   link: string;
//   icon: string;
//   subItems: { name: string; link: string }[];
// }

// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.css']
// })
// export class SidebarComponent {
//   items: MenuItem[] = [
//     {
//       id: 1,
//       name: 'Frontend',
//       link: '/frontendTopics',
//       icon: 'fs-4 bi-house',
//       subItems: [
//         { name: 'Angular', link: 'frontendTopics/angular' },
//         { name: 'HTML', link: 'frontendTopics/html' },
//         { name: 'CSS', link: 'frontendTopics/css' },
//         { name: 'JavaScript', link: 'frontendTopics/javascript' },
//         { name: 'Bootstrap', link: 'frontendTopics/bootstrap' },
//         { name: 'React', link: 'frontendTopics/react' }
//       ]
//     },
//     {
//       id: 2,
//       name: 'Backend',
//       link: '/backend',
//       icon: 'fs-4 bi-speedometer2',
//       subItems: [
//         { name: 'Web API', link: 'backend/web-api' },
//         { name: 'Database', link: 'backend/database' }
//       ]
//     },
//     {
//       id: 3,
//       name: 'Libraries',
//       link: '/libraries',
//       icon: 'fs-4 bi-table',
//       subItems: [
//         { name: 'Bootstrap', link: 'libraries/bootstrap' },
//         { name: 'Tailwind', link: 'libraries/tailwind' }
//       ]
//     },
//     {
//       id: 4,
//       name: 'Resources',
//       link: '/resources',
//       icon: 'fs-4 bi-bootstrap',
//       subItems: [
//         { name: 'Item 1', link: 'resources/item1' },
//         { name: 'Item 2', link: 'resources/item2' }
//       ]
//     },
//     {
//       id: 5,
//       name: 'Cloud Computing',
//       link: '/cloud-computing',
//       icon: 'fs-4 bi-grid',
//       subItems: [
//         { name: 'Product 1', link: 'cloud-computing/product1' },
//         { name: 'Product 2', link: 'cloud-computing/product2' },
//         { name: 'Product 3', link: 'cloud-computing/product3' },
//         { name: 'Product 4', link: 'cloud-computing/product4' }
//       ]
//     },
//     {
//       id: 6,
//       name: 'Placement Prep',
//       link: '/placement-prep',
//       icon: 'fs-4 bi-people',
//       subItems: []
//     }
//   ];

//   filteredItems: MenuItem[] = [...this.items];

//   onSearch(term: string) {
//     if (term) {
//       this.filteredItems = this.items.filter(item =>
//         item.name.toLowerCase().includes(term.toLowerCase()) ||
//         item.subItems.some(subItem => subItem.name.toLowerCase().includes(term.toLowerCase()))
//       );
//     } else {
//       this.filteredItems = [...this.items];
//     }
//   }
// }
