import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dach Solutions';

  // Arreglo de servicios
  servicios = [
    {
      icono: 'bi-laptop',
      titulo: 'Desarrollo Web',
      descripcion: 'Creamos sitios web rápidos, responsivos y optimizados para cualquier dispositivo.'
    },
    {
      icono: 'bi-bar-chart-line',
      titulo: 'Marketing Digital',
      descripcion: 'Estrategias SEO y SEM ágiles para posicionar tu marca en los primeros lugares.'
    },
    {
      icono: 'bi-phone',
      titulo: 'Apps Móviles',
      descripcion: 'Desarrollo de aplicaciones nativas para iOS y Android.'
    }
  ];

  // Arreglo de Portafolio / Casos de éxito
  portafolio = [
    {
      imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      titulo: 'E-commerce Moda',
      detalle: 'Desarrollo de tienda online con pasarela de pagos y gestión de inventario automatizada.',
      enlace: '#'
    },
    {
      imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      titulo: 'App de Delivery',
      detalle: 'Aplicación móvil nativa para Android e iOS con rastreo satelital en tiempo real.',
      enlace: '#'
    },
    {
      imagen: 'https://images.unsplash.com/photo-1522881113593-9d18e8031d27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      titulo: 'Dashboard Analítico',
      detalle: 'Sistema web para la visualización de métricas y KPIs empresariales interactivos.',
      enlace: '#'
    }
  ];

  // Arreglo de productos
  productos = [
    {
      nombre: 'Dach CMS Pro',
      descripcion: 'Nuestro gestor de contenidos premium. Administra tu sitio web corporativo de forma sencilla e intuitiva.',
      boton: 'Comprar Licencia'
    },
    {
      nombre: 'Dach Analytics',
      descripcion: 'Software de análisis de datos en tiempo real para campañas de marketing en redes sociales.',
      boton: 'Suscripción Mensual'
    }
  ];
}
