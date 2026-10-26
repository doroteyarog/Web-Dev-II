import rogerImg from '../assets/who-framed-roger-rabbit.jpg';
import hookImg from '../assets/hook.jpg';
import lalaImg from '../assets/la-la-land.jpg';
import hiddenFiguresImg from '../assets/hidden-figures.jpg';
import palmSpringsImg from '../assets/palm-springs.jpg';
import barbieImg from '../assets/barbie.jpg';

export const movies = [
  {
    id: 1,
    title: 'Who Framed Roger Rabbit (1988)',
    description: 'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
    image: rogerImg,
    cardType: 'card-hero'
  },
  {
    id: 2,
    title: 'Hook (1991)',
    description: 'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
    image: hookImg,
    cardType: 'card-vertical'
  },
  {
    id: 3,
    title: 'La La Land (2016)',
    description: 'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
    image: lalaImg,
    cardType: 'card-vertical'
  },
  {
    id: 4,
    title: 'Hidden Figures (2016)',
    description: 'Three unsung heroes of NASA\'s space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.',
    image: hiddenFiguresImg,
    cardType: 'card-horizontal'
  },
  {
    id: 5,
    title: 'Palm Springs (2020)',
    description: 'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
    image: palmSpringsImg,
    cardType: 'card-horizontal'
  },
  {
    id: 6,
    title: 'Barbie (2023)',
    description: 'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
    image: barbieImg,
    cardType: 'card-horizontal'
  }
];