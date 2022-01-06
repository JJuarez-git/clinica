import info from './info';
import { whatsappUrl } from '../utils/utils';

const footerData = {
   contacto: {
      title: 'Contacto',
      info: {
         movil: info.phone,
         email: info.email,
         localizacion: info.location
      }
   },
   rrss: {
      title: 'Redes Sociales',
      links: [
         {
            name: 'Facebook',
            url: '#',
            icon: 'assets/icons/facebook.svg'
         },
         {
            name: 'Instagram',
            url: 'https://www.instagram.com/clinicadentallillo/',
            icon: 'assets/icons/instagram.svg'
         },
         {
            name: 'WhatsApp',
            url: whatsappUrl('¡Hola! Me gustaría pedir cita.'),
            icon: 'assets/icons/whatsapp.svg'
         },
      ],
   },
   horario: {
      title: 'Horario',
      dias: [
         {
            dia: 'Lunes - Viernes',
            horas: '00:00 - 00:00'
         },
         {
            dia: 'Sábado',
            horas: '00:00 - 00:00'
         },
         {
            dia: 'Domingo',
            horas: 'Cerrado'
         }
      ]
   },
   
}

export default footerData