import info from './info';
import { whatsappUrl } from '../utils/utils';

const footerData = {
   contacto: {
      title: 'Contacto',
      info: {
         tlfn: info.phone,
         movil: info.mobile,
         email: info.email,
         localizacion: info.location
      }
   },
   rrss: {
      title: 'Redes Sociales',
      links: [
         {
            name: 'Facebook',
            url: 'https://www.facebook.com/',
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
            dia: 'Miércoles',
            horas: '10:00 - 14:00 / 16:00 - 20:00'
         },
         {
            dia: 'Sábado',
            horas: '10:00 - 14:00'
         }
      ]
   },
   
}

export default footerData