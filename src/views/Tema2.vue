<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Población objetivo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Una vez se ha reconocido el propósito del programa Mi Familia, ahora se debe conocer la población sujeta de atención por el mismo y sus características socioeconómicas como elemento relevante a considerar en el desarrollo del acompañamiento psicosocial familiar.
        p Adicional a ello, en este apartado, se presenta información sobre los criterios de focalización de Mi Familia, según el tipo de acompañamiento psicosocial y algunas características sociodemográficas de las familias en riesgo o condición de vulnerabilidad que serán focalizadas y atendidas, lo cual permite lograr y acercamiento a sus realidades y particularidades, retos y posibilidades del acompañamiento familiar.
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img01.png')

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 2.1 ¿Cuál es la población objetivo del programa Mi Familia?

    .bg_08.mb-5
      .row.justify-content-center
        .col-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img02.svg')      
        .col-lg-11(data-aos="fade-left")
          p <b>El programa Mi Familia atiende de manera prioritaria a familias que enfrentan un alto riesgo de vulneración de derechos para los niños, niñas o adolescentes o familias en procesos de protección (restablecimiento de derechos o responsabilidad penal adolescente).</b> Las necesidades de acompañamiento familiar psicosocial varían en respuesta a las características e historia de cada familia. Por lo anterior, se identifican dos grandes grupos en la población objetivo:   
 
    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.mb-4.mb-lg-0.mb-sm-0(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img03.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5.flex-center-text
              .row.justify-content-center
                .col-lg-12.mb-4
                  .bg_09.p-2
                    h4.text-center.m-0 Acompañamiento preventivo
                p Corresponde a aquellas familias que enfrentan un riesgo significativo de vulneración de derechos de niños, niñas o adolescentes.

      .col-lg-4.col-sm-6(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img04.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5.flex-center-text
              .row.justify-content-center
                .col-lg-12.mb-4.align-self-center
                  .bg_09.p-2
                    h4.text-center.m-0 Acompañamiento intensivo
                p Representadas por familias cuyos niños, niñas, adolescentes o jóvenes están o han pasado por un proceso de restablecimiento de derechos o de responsabilidad penal adolescente. 

    p Teniendo en cuenta lo anterior, y retomando la idea de reconocer el acompañamiento familiar psicosocial que se ofrece a través de Mi Familia, como un proceso que refuerza los efectos e impactos de la oferta del ICBF, dirigida a los sujetos individuales, los criterios que se utilizan para identificar a la población objetivo del programa son: 

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down-right")
      .row.justify-content-center(titulo="Acompañamiento preventivo")
        .col-lg-11
          p En este acompañamiento se encuentran:
          p Familias con niños, niñas o adolescentes con discapacidad que estén o hayan estado en Procesos Administrativos de Restablecimiento de Derechos.
          p Familias con niños, niñas y adolescentes remitidas desde los servicios de Asistencia y Asesoría a la Niñez y a la Familia de los Centros Zonales del ICBF o desde los Equipos Móviles de Protección Integral.
          p Familias de niños, niñas y adolescentes beneficiarios de servicios o modalidades de Primera Infancia, Infancia, Adolescencia y Juventud o Nutrición.
          p Familias con niños, niñas y adolescentes remitidas a través de la articulación del ICBF con otras entidades del Sistema Nacional de Bienestar Familiar SNBF o del Sistema Nacional de Discapacidad SND por requerir proceso de acompañamiento y fortalecimiento familiar, entre otras.
          p <b> En la vigencia 2020, el 50,6 % de las familias beneficiarias de Mi Familia fueron identificadas a través de las modalidad y servicios de Primera Infancia del ICBF, lo que constituye un resultado importante en términos de la articulación y la complementariedad del programa con otros servicios del ICBF.</b>          

      .row.justify-content-center(titulo="Acompañamiento intensivo")
        .col-lg-11
          p Familias con niños, niñas, adolescentes y/o jóvenes que estén o hayan estado en las modalidades priorizadas de la Dirección de Protección y familias con niños, niñas, adolescentes o jóvenes con procesos de restablecimiento de derechos remitidos desde las Comisarias de Familia. 
          p Se priorizan las modalidades de la Dirección de Protección para reforzar los procesos con el acompañamiento psicosocial a las familias reconociéndolas como el sistema más significativo para el desarrollo. Se tiene en cuenta, además que en algunas modalidades y servicios de protección se dificulta adelantar procesos de fortalecimiento de capacidades familiares, en especial aquellos que implican la separación temporal del niño, niña o adolescente de su grupo familiar o la privación de la libertad.
          p <b>En la vigencia 2020, de las 64.169 familias beneficiarias de Mi Familia, 9.011, es decir el 12,5 %, estaban o habían estado en procesos de protección.</b>

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 2.2 ¿Cuáles son las principales características socioeconómicas de las familias que constituyen la población objetivo del programa Mi Familia?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img05.png')
      .col-lg-8(data-aos="fade-right") 
        p De acuerdo con lo presentado en el anterior apartado, las familias que constituyen la población objetivo de Mi Familia presentan en su historia situaciones donde los derechos de los niños, niñas y adolescentes no fueron garantizados o estuvieron en riesgo. De otro lado, al analizar su información socioeconómica se encuentra que presentan condiciones que las ponen en desventaja en relación con el promedio de las familias colombianas. 
        p Lo anterior, se concluye a partir del análisis de algunos de estos indicadores en las familias beneficiarias del programa Mi Familia en la vigencia 2020, los cuales se apreciarán a continuación.

    p En 2020, a través del programa Mi Familia se brindó acompañamiento a 64.166 familias en 201 municipios de los 32 departamentos del país y el Distrito Capital. De las familias atendidas, 29.355 contaban con información de Sisbén IV y de la Base Maestra del Departamento Nacional de Planeación (DNP). 
    p.mb-5 A partir de esta información, se observa de acuerdo con Angulo, Carrero, De Oro, Pacheco, & Villamizar (2021), los siguientes indicadores.

    .row.justify-content-center
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down-right")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img06.svg', alt='Texto que describa la imagen')

          .tarjeta.color1.p-4(x="49.9%" y="5.6%" numero="+")
            .h5.mb-3 Sisbén
            p El Sisbén IV permite clasificar a los hogares en cuatro categorías: pobres extremos, pobres moderados, vulnerables y no pobres. Previo a la pandemia, el 80% de las familias beneficiarias de Mi Familia se encontraba en condición de pobreza extrema o moderada. Solo un 2% era no pobre de acuerdo con este registro.
          
          .tarjeta.color1.p-4(x="84.1%" y="32%" numero="+")
            .h5.mb-3 IPM
            p El Índice Pobreza Multidimensional (IPM) complementa las medidas de pobreza por ingreso monetario y analiza las privaciones que enfrentan los hogares en cinco (5) dimensiones: condiciones educativas del hogar, condiciones de la niñez y juventud, trabajo, salud y, acceso a servicios públicos domiciliarios y condiciones de la vivienda.
            p En 2019, la pobreza multidimensional en Colombia fue del 17,5%; usando información del Sisbén IV, este índice fue del 31,6% para las familias beneficiarias de Mi Familia, dentro de estas, las que presentan peores condiciones son las familias con niños, niñas o adolescentes con discapacidad donde este índice es del 45%. 

          .tarjeta.color1.p-4(x="68.9%" y="71.4%" numero="+")
            .h5.mb-3 Estructura familiar
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-5.mb-4.mb-lg-0
                img.img-t.m-auto(src='@/assets/curso/tema2/img07.svg')
              .col-lg-7
                p Una alta proporción (51%) de las familias beneficiarias de Mi Familia son monoparentales, es decir, donde el jefe del hogar no tiene cónyuge. Esta proporción es mayor en las familias beneficiarias del modelo intensivo.
        
          .tarjeta.color1.p-4(x="31.2%" y="71.4%" numero="+")
            .h5.mb-3 Tipo de Jefatura
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-5.mb-4.mb-lg-0
                img.img-t.m-auto(src='@/assets/curso/tema2/img08.svg')
              .col-lg-7
                p La mayoría de las familias beneficiarias tienen jefatura femenina (63%), siendo más marcado (68%) en las familias de acompañamiento intensivo.

          .tarjeta.color1.p-4(x="15.8%" y="30.6%" numero="+")
            .h5.mb-3 Nivel  educativo
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-5.mb-4.mb-lg-0
                img.img-t.m-auto(src='@/assets/curso/tema2/img09.svg')
              .col-lg-7
                p Los jefes de hogar de las familias beneficiarias de Mi Familia son población joven con un bajo logro educativo. La edad promedio del jefe o jefa de hogar es de 24,3 años para las familias con acompañamiento preventivo y de 26,6 años para las familias de acompañamiento intensivo. Solo el 8,5% de los jefes o jefas de hogar o cónyuges realizó estudios superiores. 


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
