import info from '../mocks/info';

export const whatsappUrl = (message:string) =>  {
   let phoneNum = info.mobile.replace(/\s+/g, '')
   let encodedMsg = encodeURI(message)
   let uri = `https://wa.me/34${phoneNum}?text=${encodedMsg}`
   return uri
}