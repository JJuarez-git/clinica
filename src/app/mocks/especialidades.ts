export interface Especialidad {
   title: string,
   info: string,
   img: string
}

export const especialidades: Especialidad[] = [
   {
      title: "Endodoncia",
      info: "Es un tratamiento que comúnmente se conoce como “matar el nervio”. En realidad, este tratamiento lo hacemos cuando las bacterias producidas por una caries o una fractura han llegado a la cámara pulpar, lo que conocemos como nervio. Es necesario retirar todo ese tejido pulpar junto con las bacterias que lo han contaminado, ya que si no podría producirse un absceso que va acompañado de mucho dolor.\n Por ello es necesario que el paciente venga a revisiones cada 6 meses, ya que si encontramos una caries hay que retirarla y obturarla antes de que llegue a la cámara pulpar.",
      img: 'assets/img/clinica/woman-smiling.jpg'
   },
   {
      title: "Peridoncia",
      info: "La periodontitis, también conocida como piorrea es la enfermedad que afecta a las encías. Consiste en que por una falta de cepillado o eficacia en él las bacterias se acumulan en forma de sarro debajo de las encías, provocando inflamación de éstas y pérdida progresiva de hueso, pudiendo hacer que los dientes se muevan e incluso que se pierdan.\n Tener unas encías sanas es muy importante, ya que sin ellas no hay dientes sanos. El tratamiento indicado para este tipo de enfermedad son los raspados y alisados radiculares, en donde se retira todo el cálculo, tanto subgingival como supragingival. Después hay que seguir unos mantenimientos para que las encías continúen sanas. Y en el caso de que haber perdido hueso, en ocasiones se puede recuperar con una sencilla cirugía.\n Recordemos que esta enfermedad no solo afecta a los dientes, también a los implantes, por eso es necesario tener siempre una buena higiene bucal. Para ello deberemos cepillarnos los dientes 3 veces al día e implementar los cepillos interdentales.",
      img: 'assets/img/clinica/woman-smiling.jpg'
   },
   {
      title: "Implantología",
      info: "Es la especialidad odontológica que se encarga de colocar los implantes para sustituir piezas ausentes que se han perdido por caries o por periodontitis. Los implantes están hechos del material sintético más compatible que hay con el ser humano, el titanio.\n Un implante está constituido por el propio implante que está dentro del hueso y la corona que va encima, para la cuál hay que esperar 3 meses después de la colocación del implante. Es una solución fija y con la cuál los pacientes están muy contentos.",
      img: 'assets/img/clinica/woman-smiling.jpg'
   },
   {
      title: "Odontopediatría",
      info: "Los dientes temporales también son muy importantes, a pesar de que la cultura popular no le haya dado tanta importancia. En estos dientes también se forman caries y es necesario retirarlas, ya que pueden infectar a los dientes permanentes que están debajo. Perder un diente temporal puede suponer que los dientes adyacentes se apiñen y no haya espacio para que erupcione el diente permanente, pudiendo ocasionar problemas de mordida.",
      img: 'assets/img/clinica/woman-smiling.jpg'
   },
   {
      title: "Ortodoncia",
      info: "Es la especialidad que se encarga no solo de alinear los dientes, si no también de corregir la mordida. La ortodoncia es muy importante para poder comer perfectamente, higienizarnos bien los dientes y además de la estética. Actualmente existen muchos sistemas de ortodoncia, siendo los más conocidos la aparatología multibrackets y el sistema de ortodoncia invisible.\n Dentro de la ortodoncia encontramos la rama de la ortopedia, que se encarga de corregir los problemas funcionales en niños menores de 12 años, corrigiendo la posición de los huesos para que puedan tener una buena masticación. Consiste en retrasar o adelantar tanto el maxilar como la mandíbula, corregir hábitos de deglución atípica o expandir el paladar.",
      img: 'assets/img/clinica/woman-smiling.jpg'
   },
   {
      title: "Estética Dental",
      info: "Una vez que se ha conseguido tener un nivel óptico de salud podemos conseguir estética dental que nos ayudarán a tener una mejor perspectiva de nosotros mismos. Los tratamientos que se pueden hacer van desde el blanqueamiento hasta carillas, dependiendo de si los dientes tienen solo alteración del color o también de forma.\n Incluso se ha incorporado recientemente el ácido hilaurónico para aumentar los labios, ya que la sonrisa no se compone solo de dientes, los labios son una parte muy importante de ésta.",
      img: 'assets/img/clinica/woman-smiling.jpg'
   }
]

export const getEspecialidadByTitle = (title: string) => {
   return especialidades.find(value => value.title.includes(title))
}