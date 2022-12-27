export default {
  global: {
    componenteFormativo: 'Acompañamiento psicosocial familiar',
    descripcionCurso:
      'El modelo de acompañamiento psicosocial del programa Mi Familia busca el fortalecimiento de las capacidades de las familias como agentes de transformación social, fundamentado en el marco normativo e institucional del ICBF.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marco normativo e institucional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué es el ICBF? ¿Cuáles son sus propósitos como entidad?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '¿Qué tipo de programas y servicios ofrece el ICBF?',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '¿Qué es Mi Familia?',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              '¿Cómo se articula Mi Familia con la misionalidad y oferta del ICBF?',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Población objetivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Cuál es la población del programa Mi Familia?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              '¿Cuáles son sus principales características socioeconómicas de las familias que constituyen la población objetivo del programa Mi Familia?',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Marco conceptual de Mi Familia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              '¿Cómo influyen las condiciones de las familias, en especial de los padres, madres y cuidadores en el desarrollo de niños, niñas y adolescentes?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              '¿Por qué se reconoce al programa Mi Familia como una oferta de carácter preventivo?',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              '¿Cuáles son los efectos esperados de Mi Familia en la población objetivo?',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              '¿Cuáles son las características principales del acompañamiento psicosocial de Mi Familia?',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas para el acompañamiento psicosocial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              '¿Cuáles son los principales enfoques y modelos que orientan el acompañamiento psicosocial que ofrece Mi Familia?',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              '¿Cómo se estructura el acompañamiento familiar psicosocial?',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2. ¿Qué tipo de programas y servicios ofrece el ICBF?',
      referencia: 'ICBF. (s.f.) Promoción y prevención – procesos misionales. ',
      tipo: 'Sitio web',
      link: 'https://www.icbf.gov.co/misionales/promocion-y-prevencion/familia',
    },
    {
      tema: '1.3. ¿Qué es mi Familia?',
      referencia: 'ICBF. (2020). Lineamiento técnico modalidad Mi Familia. ',
      tipo: 'Documento pdf',
      link:
        'https://www.icbf.gov.co/system/files/procesos/lm10.pp_lineamiento_tecnico_administrativo_modalidad_mi_familia_v2.pdf',
    },
    {
      tema: '3. Marco conceptual Mi Familia',
      referencia:
        'ICBF. (2022). Guía de Orientaciones Metodológicas Mi Familia.',
      tipo: 'Documento pdf',
      link:
        'https://www.icbf.gov.co/system/files/procesos/g1.mo18.pp_guia_orientaciones_metodologicas_modalidad_mi_familia_v3.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Curso de vida',
      significado:
        'Hace referencia a las trayectorias vitales las cuales por su esencia cambian constantemente.',
    },
    {
      termino: 'Ecosistémico',
      significado:
        'Plantea que el desarrollo individual depende de factores ligados a uno o varios ambientes ecológicos. Este enfoque conduce a una comprensión amplia de las familias, que tiene en cuenta sus realidades y su capacidad para desarrollarse, transformarse, decidir sobre sus propios asuntos e incidir en los entornos y contextos que habitan.',
    },
    {
      termino: 'ICBF',
      significado:
        'Entidad del estado colombiano que trabaja por la protección integral de la primera infancia, la niñez, la adolescencia y el bienestar de las familias en Colombia.',
    },
    {
      termino: 'Interseccionalidad',
      significado:
        'Perspectiva base para la atención a poblaciones. Se relaciona con el análisis y reconocimiento de la discriminación cruzada, que toma nuevas formas y manifestaciones cuando se relacionan en una misma familia o personas de distintas características.',
    },
    {
      termino: 'Mi Familia',
      significado:
        'Programa de acompañamiento familiar psicosocial que tiene como objetivo fortalecer las capacidades de las familias para promover el desarrollo integral de niños, niñas y adolescentes y reducir y mitigar los efectos de la violencia, el abuso o la negligencia en su contra.',
    },
    {
      termino: 'NNA',
      significado: 'Abreviatura de niños, niñas y adolescentes.',
    },
    {
      termino: 'PAF',
      significado: 'Abreviatura de Profesional de Acompañamiento Familiar.',
    },
    {
      termino: 'Proceso de protección',
      significado:
        'Es uno de los procesos misionales del ICBF que se enmarcan los servicios dirigidos al restablecimiento de los derechos de los niños, niñas, adolescentes y jóvenes en situación de amenaza, vulneración o en conflicto con la ley.',
    },
    {
      termino: 'Proceso de promoción y prevención',
      significado:
        'Es uno de los procesos misionales del ICBF que agrupa programas, modalidades, estrategias, planes y proyectos para la promoción de derechos y la prevención de vulneraciones en niños, niñas, adolescentes, jóvenes y familias, incorporando el enfoque diferencial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Angulo, J. P., Carrero, A. L., De Oro, K., Pacheco, M. A., & Villamizar, D. A. (2021). <em>Caracterización Socioeconómica de las Familias Beneficiarias del Programa Mi Familia</em>. Cruce base maestra - DNP. ICBF.',
      link: '',
    },
    {
      referencia:
        'Bertalanffy, L. V. (1976). <em>Teoría general de los sistemas. Fundamentos, desarrollo, aplicaciones</em>. Fondo de Cultura Económica.',
      link: '',
    },
    {
      referencia:
        'Blanco, M. (2011). El enfoque del curso de vida: orígenes y desarrollo. <em>Revista Latinoamericana de población</em>, 5(8), p,p, 5-31.',
      link: '',
    },
    {
      referencia:
        'Crenshaw, K. (1991). Interseccionalidad, política de identidad y violencia contra las mujeres de color. <em>Stanford Law Review</em>, 43(6), p,p. 1241-1299.',
      link: '',
    },
    {
      referencia:
        'Cuartas, J., Harker, A., & Moya, A. (2016). <em>Parenting, Scarcity and Violence: Theory and Evidence for Colombia</em>. Documentos CEDE. Universidad de los Andes.',
      link: '',
    },
    {
      referencia:
        'Cunha, F., & Heckman, J. (2007). The Technology of Skill Formation. <em>American Economic Review</em>, 97(2), p.p. 419-442.',
      link: '',
    },
    {
      referencia:
        'Decreto 987 de 2012. [Presidencia de la República]. Por el cual se modifica la estructura del Instituto Colombiano de Bienestar Familiar Cecilia de la Fuente de Lleras y se determinan las funciones de sus dependencias. 14 de mayo de 2012.',
      link: '',
    },
    {
      referencia:
        'DNP. (2015). <em>Tipologías de Familias en Colombia: Evolución 1993-2014. Documento de Trabajo No. 2016-1</em>. Observatorio de Políticas de las Familias - OPF.',
      link: '',
    },
    {
      referencia: 'ICBF. (2017). <em>Modelo Enfoque Diferencial</em>. ',
      link:
        'https://www.icbf.gov.co/sites/default/files/procesos/md1.de_modelo_de_enfoque_diferencial_de_derechos_medd_v1.pdf',
    },
    {
      referencia: 'ICBF. (2019). <em>Mapa Estratégico ICBF 2019-2022</em>. ',
      link:
        'https://www.icbf.gov.co/sites/default/files/mapa._estrategico_icbf_0.pdf',
    },
    {
      referencia:
        'ICBF. (2020). <em>Mapa Estratégico ICBF 2019 - 2022 - Versión 2</em>.',
      link: 'https://www.icbf.gov.co/system/files/mapa_estrategico_2020_v2.pdf',
    },
    {
      referencia:
        'ICBF. (2021). <em>Informe de Gestión ICBF 2020</em>. Instituto Colombiano de Bienestar Familiar, Bogotá, D.C.',
      link:
        'https://www.icbf.gov.co/sites/default/files/informe_de_gestion_icbf_2020.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Bienestar Familiar. (2020). <em>Lineamiento Técnico Modalidad Mi Familia.</em> ',
      link:
        'https://www.icbf.gov.co/system/files/procesos/lm10.pp_lineamiento_tecnico_administrativo_modalidad_mi_familia_v2.pdf',
    },
    {
      referencia:
        'Kuehlein, T. (2009). <em>Prevención cuaternaria, actividad del médico general.</em>',
      link: '',
    },
    {
      referencia:
        'Villa Gómez, J. D. (2012). La acción y el enfoque psicosocial de la intervención en contextos sociales: ¿podemos pasar de la moda a la precisión teórica, epistemológica y metodológica? <em>El Ágora USB</em>, 12(2), p.p. 349-365.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Daniel Polanco',
        cargo: 'Validación de diseño',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
