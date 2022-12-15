<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1(data-aos="fade-right") Herramientas para el acompañamiento psicosocial 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img01.png')
      .col-lg-8(data-aos="fade-right") 
        p Este apartado permitirá comprender los modelos y enfoques del acompañamiento psicosocial de Mi Familia, que contextualizan y orientan su estructura y apuestas metodológicas.
        p A partir de la lógica relacional y compleja del acompañamiento psicosocial planteada, se podrá relacionar la estructura, recursos y metodologías de Mi Familia con las perspectivas de intervención que permiten los enfoques ecosistémicos, de curso de vida e interseccionalidad. En esa línea, se acercará al reconocimiento del enfoque psicosocial y sus principales ejes de intervención, permitiendo una mayor comprensión de la estructura del acompañamiento psicosocial del programa, tal como se aprecia en el siguiente video.

    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/ttx5S5KULC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 4.1 ¿Cuáles son los principales enfoques y modelos que orientan el acompañamiento psicosocial que ofrece Mi Familia?

    .bg_02.mb-4
      .row.justify-content-center
        .col-lg-11(data-aos="fade-right")
          p El modelo de acompañamiento del programa Mi Familia incorpora una perspectiva de trabajo con énfasis en lo relacional para contribuir al fortalecimiento de las capacidades de las familias como corresponsables en la protección integral de niños, niñas y adolescentes y, a la prevención y mitigación de las violencias en su contra.
        .col-lg-1(data-aos="fade-left")
          figure
            img.img-t.m_left.mb-4(src='@/assets/curso/tema4/img02.svg')

    p.mb-0.mb-lg-5 El acompañamiento que se ofrece a través de Mi Familia tiene en cuenta la relación entre lo individual y lo colectivo y entre lo contextual y lo familiar, reconociendo la presencia de crisis y eventos que afectan a las familias en su curso de vida, así como de situaciones estructurales de pobreza e inequidad social que también limitan el desarrollo familiar y el de cada uno de sus integrantes. 

    .row.justify-content-center.mb-4(data-aos="zoom-in-down")
      .col-lg-8    
        .bloque-texto-a.color-secundario.p-4.p-md-5.d-none.d-lg-block
          .row.m-0.align-items-center.justify-content-between
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p.m-0 El acompañamiento a las familias con una perspectiva psicosocial centra sus esfuerzos en fortalecer recursos y capacidades en el ámbito de la vida familiar buscando su cohesión y su inclusión social y productiva; de esta forma, lo psicosocial da cuenta de la interacción entre lo psíquico y lo social, lo individual y lo colectivo.

    .row.justify-content-center.mb-4.mb-lg-5(data-aos="zoom-in-down")
      .col-lg-8
        .bloque-texto-g.color-primario.color_bloque.p-3.p-sm-4.p-md-5.m_bloque.d-lg-none.d-md-block
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img03.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.m-0 El acompañamiento a las familias con una perspectiva psicosocial centra sus esfuerzos en fortalecer recursos y capacidades en el ámbito de la vida familiar buscando su cohesión y su inclusión social y productiva; de esta forma, lo psicosocial da cuenta de la interacción entre lo psíquico y lo social, lo individual y lo colectivo.    
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img04.png')
      .col-lg-8(data-aos="fade-right") 
        p Es por esto, que para Mi Familia evidenciar y trabajar las relaciones entre los integrantes de la familia, es de vital importancia para lograr el fortalecimiento familiar.  Lo anterior se relaciona con lo expuesto por Villa Gómez (2012) quienes sostienen que el acompañamiento psicosocial familiar deriva “en unos métodos particulares, donde lo relacional y lo vincular, lo contextual y la interacción son fundamentales” (p. 356).
        p Siguiendo a Martín Baró (1983, 1990) y Villa Gómez (2012) señalan que un acompañamiento psicosocial es un ejercicio que cumple la función de bisagra entre lo social y lo individual. En este sentido se entiende que cada persona se construye en lo social, es decir, que no puede pensarse sino como sujeto social y en interacción con otros. Con esta misma lógica, las familias como sujetos colectivos, se construyen en relación con otros sistemas y de acuerdo con los parámetros culturales del contexto y del interior del sistema familiar. 
        p.text-bold Para estructurar el acompañamiento psicosocial que se ofrece a través de Mi Familia se tienen en cuenta tres enfoques principales: Ecosistémico, Curso de Vida e Interseccionalidad. 

    .row.mb-4.mb-lg-5
      .col-lg-2.col-md-4.col-7
        .bg_18.p-2
          p.m-0.text-white.text-bold Enfoque ecosistémico

    p.mb-4 El enfoque ecosistémico retoma elementos del modelo ecológico planteado por Bronfenbrenner (1987) donde se plantea que el desarrollo individual depende de factores ligados a uno o varios ambientes ecológicos, los cuales se conciben como un conjunto de estructuras seriadas, cada una de las cuales cabe dentro de la siguiente, tal como se explica a continuación.

    .bg_19.p-4.mb-5
      .row.justify-content-center
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5.t_img-info2.m_card-imginf3(data-aos="fade-down-right")
            template(v-slot:imagen)
              figure(data-aos="zoom-in-up")
                img.img-t.m-auto(src='@/assets/curso/tema4/img05.svg', alt='')

            .tarjeta.color1.p-4(x="62.4%" y="48%" numero="+")
              .h5.mb-3 Microsistema
              p Constituye el entorno más inmediato de la persona y determinan el desarrollo humano en forma íntima e inmediata. Se refieren a las interrelaciones personales cercanas y lo componen todos aquellos grupos de personas con las que se interactúa y que son influyentes en la conformación de la identidad individual y grupal como la familia, el grupo de amigos, la escuela, la comunidad religiosa, entre otros.
            
            .tarjeta.color1.p-4(x="95.5%" y="86%" numero="+")
              .h5.mb-3 Mesosistema
              p Se refieren a la interacción entre dos o más microsistemas en los que las personas participan activamente. Por ejemplo, cuando los padres coordinan sus esfuerzos con los docentes frente al proceso educativo de las niñas, los niños y los adolescentes.

            .tarjeta.color1.p-4(x="4.5%" y="68.6%" numero="+")
              .h5.mb-3 Exosistema
              p Se refieren a los sistemas ambientales en los que la persona en desarrollo no está incluida directamente, pero en los que se producen hechos que afectan su entorno o se ven afectados por lo que ocurre en él.  El clásico ejemplo es el lugar de trabajo de alguno de los padres al cual la niña, el niño o el adolescente no acude, pero que influye en las dinámicas de su sistema familiar.
          
            .tarjeta.color1.p-4(x="46.3%" y="7%" numero="+")
              .h5.mb-3 Macrosistema
              p Se refiere a las construcciones culturales o ideológicas que permean transversalmente a los demás sistemas con los que el individuo interactúa, y que son evidentes en los mensajes de las políticas públicas, los medios de comunicación, las redes sociales, entre otros.

    p Las interacciones entre estos sistemas son bidireccionales, en tanto producen transformaciones en unos y en otros. En este sentido, la familia y sus integrantes no son sujetos pasivos de la influencia de sistemas más amplios, sino que entran en interacción con ellos como sujetos activos y capaces que también pueden modificarlos.

    .row.justify-content-center.mb-4
      .col-lg-10
        .bg_20.p-4.ps-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.m-0.mt-5 El enfoque ecosistémico entiende a las familias como un sistema en interacción constante con su entorno. Desde esta perspectiva, las familias son más que la suma de sus integrantes e invita a centrar la mirada en las relaciones que se dan entre las personas y entre los distintos subsistemas que las conforman; asimismo, las reconoce como sistemas que dialogan e interactúan con sistemas externos, es decir, <b>no se pueden comprender de forma aislada, sino integradas en un contexto particular</b> (Bertalanffy, 1976).
            .col-lg-4
              figure(data-aos="zoom-in-up")
                img.img-t.m-auto(src='@/assets/curso/tema4/img06.svg', alt='')

    p.mb-4.mb-lg-5 Este enfoque conduce a una comprensión amplia de las familias, que tiene en cuenta sus realidades y su capacidad para desarrollarse, transformarse, decidir sobre sus propios asuntos e incidir en los entornos y contextos que habitan. Lo expuesto tiene implicaciones en el trabajo con las familias; evidencia la necesidad de involucrar y convocar a los actores e instituciones significativos para cada una de ellas, a la vez que exige una mirada amplia de las circunstancias que viven las familias y sus integrantes, así como de las formas de relacionamiento y los cambios que han experimentado a lo largo de su curso vital. 

    .row.mb-4
      .col-lg-2.col-md-4.col-6
        .bg_18.p-2.px-4
          p.m-0.text-white.text-bold Curso de vida

    p El curso de vida se puede comprender como trayectorias vitales dinámicas, es decir, que cambian constantemente. En este sentido, las familias conforman colectividades donde las trayectorias de sus integrantes son interdependientes y están en tránsito constante a lo largo de sus vidas (Blanco, 2011).

    .row.justify-content-center.mb-4
      .col-lg-10
        .bg_16-1.p-5.pe-lg-2
          .row.justify-content-center
            .col-lg-8
              p.m-0.mt-5 Las familias y las personas durante el curso de sus vidas atraviesan crisis o transiciones que representan un reto frente al desarrollo personal y familiar. Existen transiciones más o menos esperables, de acuerdo con la edad y el contexto histórico social (por ejemplo: salida del colegio, entrada al mundo del trabajo, entre otras) que cambian esas trayectorias vitales. Además de las transiciones esperadas, existen otros cambios de estado más abruptos o intensos como las crisis (separaciones, muertes, desempleo) o incluso eventos traumáticos (guerras, violencia sexual, violencia intrafamiliar).
            .col-lg-4
              figure(data-aos="zoom-in-up")
                img.img-t.m_top.m_left2(src='@/assets/curso/tema4/img07.png', alt='')

    p.mb-5 Resulta crucial para el acompañamiento familiar sostener esta mirada no solo sistémica sino también focalizada en las trayectorias vitales y sus cambios de estado. Para esto es básico que el profesional de acompañamiento familiar pueda reconocer la posibilidad de que estos eventos se presenten en la historia de vida de las familias e incluir en sus acciones de intervención, la creación de espacios donde las familias y sus integrantes tengan oportunidad de nombrar y comprender las crisis y los conflictos como parte de sus vidas, e incluso, como oportunidades de aprendizaje que promueven sus capacidades para afrontarlas y adaptarse a ellas.

    .row.mb-4
      .col-lg-2.col-md-4.col-6
        .bg_18.p-2.px-4
          p.m-0.text-white.text-bold Interseccionalidad

    p El Modelo de Enfoque Diferencial de Derechos (MEDD) del ICBF, adoptado mediante la Resolución 1264 del 2 de marzo de 2017, integra la perspectiva de la interseccionalidad como una de las bases para la atención a poblaciones históricamente discriminadas y vulneradas por condiciones de género, diversidad sexual, pertenencia étnica o discapacidad (ICBF, 2017, p.16). Este enfoque establece que la interacción de diversas condiciones afecta de manera particular a las personas y a las familias, más allá de las implicaciones específicas de cada variable.               
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .bg_21.p-4.ps-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in-up")
                img.img-t.m-auto(src='@/assets/curso/tema4/img08.svg', alt='')
            .col-lg-8.mb-4.mb-lg-0
              p.m-0.mt-5 Esto quiere decir que, por ejemplo, el sexismo y el racismo, analizadas por separado, no dan cuenta de las desigualdades particulares que pueden sufrir, por ejemplo, las mujeres negras (Crenshaw, 1991). Las categorías de sexo y raza generan formas particulares de discriminación y marginación a las mujeres negras, distintas a aquellas experimentadas por los hombres negros en razón de su raza y por las mujeres blancas, en razón de su género.

    p.mb-4.mb-lg-5 El concepto de interseccionalidad propone un marco de comprensión frente a diversas formas de discriminación, según los contextos particulares de cada persona y cada familia. Desde este enfoque, el territorio, el género, la diversidad sexual, la discapacidad, la edad, la etnicidad, entre múltiples variables, se deben considerar de manera relacional en la identificación y abordaje de las necesidades y realidades de las familias que reciben el acompañamiento.

    .bg_color1.p-4.mb-4.mb-lg-5
      .row.align-items-center
        .col-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          img.img-t.m-auto(src='@/assets/curso/tema4/img09.svg')
        .col-lg-10(data-aos="fade-left")
          p.m-0 En este sentido, la interseccionalidad no se refiere a una sumatoria de vulneraciones, sino al análisis y reconocimiento de la discriminación cruzada, que toma nuevas formas y manifestaciones cuando se relacionan en una misma familia o persona distintas características. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p A través del MEDD, el ICBF reconoce la necesidad de atención diferencial para las personas y las familias pertenecientes a los grupos étnicos, las mujeres, la población LGBTI y las personas con discapacidad y sus familias. La perspectiva de la interseccionalidad permite comprender cómo estas condiciones interactúan en las realidades de las familias, para brindar una atención más pertinente, participativa y efectiva. 
        p Por ello, vale la pena pensar en otras formas de diferenciación: la relación con el conflicto armado (víctimas, resistentes, desmovilizados/as), el estado civil, el ejercicio de algunos oficios o el estatus migrante son variables que en el contexto colombiano también pueden ser de gran importancia. <b>A continuación se desarrollan aspectos importantes a tener en cuenta en este tema.</b>
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img10.png')

    SlyderA(tipo="b").bg_17.p-4.py-5
      .row.justify-content-center
        .col-lg-5.mb-4.mb-lg-0
          p La perspectiva interseccional para el trabajo con las familias invita a adoptar una postura de atención constante, libre de prejuicios y dispuesta a aprender sobre las formas cómo las familias comprenden y experimentan las distintas desigualdades. En este sentido, la interseccionalidad se distancia de la necesidad de encajonar las condiciones sociales en etiquetas rígidas e inamovibles.                                     
        .col-lg-6(data-aos="fade-right") 
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema4/img11.png', alt='AvatarTop')

      .row.justify-content-center
        .col-lg-5.mb-4.mb-lg-0
          p Este ejercicio requiere que los y las profesionales de acompañamiento familiar se pregunten por sus propias condiciones sociales y sobre la manera cómo interactúan con los demás: al hacer parte de una sociedad específica, estamos atravesados por normas y condiciones presentes en nuestras relaciones y en este caso específico en la relación con las familias.                 
        .col-lg-6
          figure.mb-4
            img.img-t.mx-auto(src='@/assets/curso/tema4/img12.png', alt='AvatarTop')

      .row.justify-content-center
        .col-lg-5
          p Para la incorporación de la perspectiva de interseccionalidad en el acompañamiento familiar psicosocial es importante que exista por parte de los profesionales a cargo disposición a la escucha, para reconocer que otras personas viven realidades distintas y enfrentan barreras particulares debido a diferentes formas de marginación. 
          p Esto permitirá a los profesionales dimensionar la complejidad de las diferentes situaciones vividas por cada familia, sus retos y los elementos con los que cuenta para afrontarlos y los prevendrá de simplificar o minimizar algunas problemáticas.
        .col-lg-6
          figure.mb-4
            img.img-t.mx-auto(src='@/assets/curso/tema4/img13.png', alt='AvatarTop')
         
      .row.justify-content-center
        .col-lg-5.mb-4.mb-lg-0
          p Finalmente, esta perspectiva invita a fomentar la creación y fortalecimiento de redes de apoyo y solidaridad entre personas y familias con experiencias similares frente a las diferentes manifestaciones de la discriminación. Si bien, la discapacidad tiene un énfasis relevante en la implementación del programa Mi Familia, los profesionales pueden entenderla en relación con otras condiciones, como el género, la pertenencia étnica, ser migrante, entre otros, que permita el reconocimiento mutuo entre familias y, por ende, consolide redes de apoyo pertinentes.            
        .col-lg-6
          figure.mb-4
            img.img-t.mx-auto(src='@/assets/curso/tema4/img14.png', alt='AvatarTop')

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 4.2 ¿Cómo se estructura el acompañamiento familiar psicosocial?
    
    .bg_02-1.mb-4
      .row.justify-content-center
        .col-lg-11(data-aos="fade-right")
          p El acompañamiento psicosocial que ofrece Mi Familia se estructura retomando elementos del enfoque ecosistémico, del enfoque interseccional de derechos y del enfoque de curso de vida. El encuentro de estos tres caracteriza, ubica y limita el proceso del acompañamiento psicosocial donde participan tres actores principales: las familias en el centro del proceso, el profesional de acompañamiento y las herramientas metodológicas que dinamizan la interacción entre los dos primeros.
        .col-lg-1(data-aos="fade-left")
          figure
            img.img-t.m_left(src='@/assets/curso/tema3/img13.svg')

    p.mb-4.mb-lg-5 La siguiente figura representa los fundamentos del modelo de atención de Mi Familia. Este marco, compuesto de los elementos derivados de los enfoques señalados, orienta la forma como se comprende y se realiza la aproximación a las familias, el rol y la actitud del profesional de acompañamiento y, el tipo de herramientas metodológicas que se utilizan.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
      h5 Figura 7.
      span <em>Fundamentos del acompañamiento psicosocial del programa Mi Familia</em>

    .bg_color4.p-5.mb-5
      .row.justify-content-center.mb-4
        .col-lg-16
          figure(data-aos="zoom-in-up")
            img.img-t.m-auto(src='@/assets/curso/tema4/img15.svg', alt='')

    p.mb-4.mb-lg-5 El éxito del proceso de acompañamiento depende del nivel de presencia, relacionamiento y equilibrio entre los actores identificados. A medida que el acompañamiento avanza, la confianza generada entre las familias y los profesionales va construyendo un ambiente, en el cual surgen momentos y posibilidades de cambio y transformación que familias y profesionales identifican a través del uso de las herramientas metodológicas. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img16.png')
      .col-lg-8(data-aos="fade-right") 
        p El movimiento relacional entre los actores y elementos expuestos posibilita el desarrollo y fortalecimiento familiar, el cual será posible en la medida que las familias cuenten con los recursos materiales e inmateriales que afiancen su confianza para construir y asumir sus destinos y afrontar las crisis, de forma autónoma y participativa; los profesionales comprendan que el fortalecimiento y cambio familiar depende de una red compleja de variables ecosistémicas situadas tanto “dentro” de la familia (sus integrantes, sus capacidades y sus relaciones) como “fuera” de ella (en la presencia de recursos materiales e inmateriales y en las relaciones que puedan establecer con otras personas, sistemas e instituciones); así como que las herramientas metodológicas sean apropiadas y ajustadas por el profesional en función de las necesidades e intereses de las familias.

    .bg_color5.p-4.px-5
      p El programa Mi Familia cuenta con cartillas que contienen aspectos metodológicos y didácticos, que constituyen herramientas facilitadoras para orientar el desarrollo de cada uno de los temas considerados a través de visitas o encuentros. También, contempla la entrega a cada familia del ‘Plan Familiar’; herramienta que facilita el seguimiento del proceso de acompañamiento por parte de cada familia. El plan es una especie de cuaderno o diario del proceso que queda en poder de la familia, donde esta precisa los énfasis que resultan de su interés para cada sesión del ciclo básico, asimismo, identifica junto con el PAF las temáticas a trabajar en el ciclo de profundización.         


</template>

<script>
export default {
  name: 'Tema3',
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
