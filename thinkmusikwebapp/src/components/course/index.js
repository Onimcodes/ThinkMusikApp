import img1 from "../../assets/guitargirl.png";
import img2 from "../../assets/whitegirl.png";
import img3 from "../../assets/guitarguy.png";
import img4 from '../../assets/songsheet1.png'
import img5 from '../../assets/songsheet2.png'
import img6 from '../../assets/songsheet3.png'
import img7 from '../../assets/modal1.png'
import img8 from '../../assets/modal2.png'
const courseList = [
  {
    image: img1,
    title: "R & B Tutorial by Melanie ",
    about: "Beginner | 20 lessons",
  },
  {
    image: img2,
    title: "How to Play Triads by Daniey",
    about: "Advance | 20 lessons",
  },
  {
    image: img3,
    title: "Jimi Hendrix Licks by Melanie",
    about: "Intermediate | 20 lessons",
  },
];
const songSheets = [
    {
    image: img4,
    title: "Hallelujay by Dunsin Oyekan ",
    },
    {
    image: img5,
    title: "Hallelujay by Dunsin Oyekan ",
    },
    {
    image: img6,
    title: "Hallelujay by Dunsin Oyekan ",
    },
]

const modals = [
    {
        imgUrl : img7,
        heading: 'Invite a Friend ',
        subheading :'Share the great news with your friends by inviting them to join ThinkMusik. '
    },
    {
        imgUrl : img8,
        heading: 'Request for a Feature',
        subheading :'Request for a Feature '
    }
]
export { courseList, songSheets ,modals};
