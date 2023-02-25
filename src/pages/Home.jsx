import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';
import Palette from '../styles/Palette';
import DivFlex from '../ui-components/Divflex';
import Heading from '../ui-components/Heading';
import Image from '../ui-components/Image';
import Main from '../ui-components/Main';
import TextHome from '../ui-components/TextHome';
import Footer from '../ui-components/Footer';

const Home = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('home');
  }, []);
  return (
    <Main homeheight={'100%'}>
      <Heading headcolor={`${Palette.main.primary}`} as={'h1'} size={'xl'}>
        {page}
      </Heading>
      <DivFlex variant="transparent" padding={'20px'} border={'0'}>
        <Image
          height={'400px'}
          src="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166204/1366_2000_exzuxa.jpg"
          alt="character"
        />
        <TextHome
          variant="transparent"
          color="white"
          padding={'50px'}
          text="Final Fantasy VII, es un videojuego de rol desarrollado y publicado por la empresa Square para la plataforma PlayStation. Publicado en 1997, se trata de la séptima entrega de la serie Final Fantasy y la primera de la saga en presentar gráficos tridimensionales, mostrando personajes completamente renderizados sobre escenarios prerrenderizados. El argumento de Final Fantasy VII se centra en el protagonista Cloud Strife, un mercenario que inicialmente se une al grupo ecoterrorista AVALANCHA para detener el control mundial de la corporación Shinra que está drenando la vida del planeta para usarla como fuente de energía. Conforme la historia avanza, Cloud y sus aliados se ven envueltos en un conflicto que representa una amenaza aún mayor para el mundo, enfrentándose a Sefirot, el antagonista principal del juego. El desarrollo de Final Fantasy VII comenzó en 1994. El juego fue inicialmente concebido para Super Nintendo Entertainment System, pero su desarrollo fue trasladado a Nintendo 64. Sin embargo, dado que los cartuchos de Nintendo 64 carecían de la capacidad de almacenamiento necesaria; Square decidió publicarlo para el sistema PlayStation en su lugar, ya que utiliza el CD-ROM como soporte de almacenamiento. Final Fantasy VII fue dirigido por Yoshinori Kitase, escrito por Kazushige Nojima y Kitase, y producido por Hironobu Sakaguchi. La música fue compuesta por el veterano de la saga Nobuo Uematsu, mientras que el antiguo diseñador de personajes, Yoshitaka Amano, fue reemplazado por Tetsuya Nomura. Ayudado de una gran precampaña publicitaria, Final Fantasy VII se convirtió en un éxito de crítica y comercial de inmediato. Fue originalmente lanzado para Sony PlayStation, en 1998 para Microsoft Windows, en 2009 para PlayStation Network, en 2012 para descarga digital en PC, y en 2013 para Steam. En 2014, fue publicado para dispositivos iOS y Android a través del servicio exclusivo japonés Dive In, aunque en iOS se publicó también a nivel mundial el 19 de agosto de 2015. El 5 de diciembre de 2015 se lanzó para PlayStation 4 aunque, en lugar de ser la versión original de PlayStation, se trata de una adaptación de la versión original para Microsoft Windows ha continuado vendiendo sólidamente con 13.9 millones de unidades contabilizadas a nivel mundial hasta marzo de 2022, convirtiéndolo en el título más vendido de la franquicia. Final Fantasy VII fue alabado por sus gráficos, sistema de juego, música e historia. La crítica se centró principalmente en arremeter contra su localización al inglés, sobre la que se realizaron las traducciones a otros idiomas que tampoco estuvieron exentas de crítica. Ha sido reconocido de manera retrospectiva como el juego que popularizó los videojuegos de rol japoneses fuera de su mercado natal, y por contribuir fuertemente al éxito de PlayStation. Ha sido frecuentemente posicionado entre los mejores juegos de la historia en diversas listas de videojuegos. La popularidad del juego provocó que Square produjera una serie de secuelas y precuelas englobadas en una recopilación de material multimedia conocida como Compilation of Final Fantasy VII. Tras una década de rumores y especulaciones, una nueva versión en alta definición completamente rehecha del juego fue anunciada en la Electronic Entertainment Expo 2015 para PlayStation 4, además de otras plataformas aún por confirmar. El desarrollo de esta adaptación correría a cargo del productor, director y escritor originales; Yoshinori Kitase, Tetsuya Nomura y Kazushige Nojima, respectivamente. Durante la E3 2019, se presentó el adelanto del juego Final Fantasy VII Remake, con todos los gráficos remasterizados y un nuevo sistema de juego, finalmente publicándose el 10 de abril de 2020."
        />
      </DivFlex>
      <Footer />
    </Main>
  );
};
export default Home;
