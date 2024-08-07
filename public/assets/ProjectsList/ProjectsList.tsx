export type Projects = {
  id: number;
  category: string;
  title: string;
  img: string;
  altImg: string;
  dateFinished: string;
  liveView?: string;
  repository?: string;
};
const ProjectList: Projects[] = [
  {
    id: 1,
    category: "Blog",
    title: "First Website",
    img: "/projects/1.webp",
    altImg: "1.webp",
    dateFinished: "2018",
    liveView: "https://soethiono.blogspot.com/",
  },
  {
    id: 2,
    category: "Portfolio",
    title: "My First Portfolio",
    img: "/projects/2.webp",
    altImg: "2.webp",
    dateFinished: "2020",
    liveView: "https://irfankurniawansuthiono.github.io/projek-1/",
    repository: "https://github.com/irfankurniawansuthiono/projek-1",
  },
  {
    id: 3,
    category: "Portfolio",
    title: "My Second Portfolio",
    img: "/projects/3.webp",
    altImg: "3.webp",
    dateFinished: "2021",
    liveView: "https://irfankurniawansuthiono.github.io/",
    repository:
      "https://github.com/irfankurniawansuthiono/irfankurniawansuthiono.github.io",
  },
  {
    id: 4,
    category: "E-Learning",
    title: "BiimBel v1",
    img: "/projects/4.webp",
    altImg: "4.webp",
    dateFinished: "2022",
    liveView: "https://biimbel.netlify.app/",
    repository: "https://github.com/irfankurniawansuthiono/tugas-akhir-sem2",
  },
  {
    id: 5,
    category: "Game",
    title: "GTPS 7",
    img: "/projects/5.webp",
    altImg: "5.webp",
    dateFinished: "2022",
    liveView: "https://gtps7.vercel.app/",
    repository: "https://github.com/irfankurniawansuthiono/gtps7",
  },
  {
    id: 6,
    category: "Apps",
    title: "Book Shelf - DICODING",
    img: "/projects/6.webp",
    altImg: "6.webp",
    dateFinished: "2023",
    liveView: "https://book-shelf-apps-by-irfan.vercel.app/",
    repository:
      "https://github.com/irfankurniawansuthiono/book-shelf-apps-dicoding/tree/main",
  },
  {
    id: 7,
    category: "Apps",
    title: "Note - DICODING",
    img: "/projects/7.webp",
    altImg: "7.webp",
    dateFinished: "2023",
    liveView: "https://dicoding-note-app-submission.vercel.app/",
    repository:
      "https://github.com/irfankurniawansuthiono/dicoding-note-app-submission",
  },
  {
    id: 8,
    category: "Game",
    title: "GrowNet",
    img: "/projects/8.webp",
    altImg: "8.webp",
    dateFinished: "2023",
    liveView: "https://www.grownet.site/",
  },
  {
    id: 9,
    category: "Apps",
    title: "Note v2 - DICODING",
    img: "/projects/9.webp",
    altImg: "9.webp",
    dateFinished: "2023",
    liveView: "https://dicoding-menengah-submission1-hosting.vercel.app/",
    repository:
      "https://github.com/irfankurniawansuthiono/Dicoding_menegah_Submission_1",
  },
  {
    id: 10,
    category: "Apps",
    title: "Contact - DICODING",
    img: "/projects/10.webp",
    altImg: "10.webp",
    dateFinished: "2023",
    liveView: "https://contactappbyirfan.vercel.app/",
    repository:
      "https://github.com/irfankurniawansuthiono/dicoding-menengah-contact-app/tree/main",
  },
  {
    id: 11,
    category: "E-Learning",
    title: "BiimBel v2",
    img: "/projects/11.webp",
    altImg: "11.webp",
    dateFinished: "2023",
    liveView: "https://www.biimbel.my.id/",
    repository: "https://github.com/irfankurniawansuthiono/BiimBel-source-code",
  },
  {
    id: 12,
    category: "E-Learning",
    title: "BiimBel Admin v2",
    img: "/projects/12.webp",
    altImg: "12.webp",
    dateFinished: "2023",
    liveView: "https://admin.biimbel.my.id/",
    repository:
      "https://github.com/irfankurniawansuthiono/admin-biimbel-source-code",
  },
  {
    id: 13,
    category: "Apps",
    title: "Note v3 - DICODING",
    img: "/projects/13.webp",
    altImg: "13.webp",
    dateFinished: "2023",
    liveView: "https://dicoding-note-app-v3.vercel.app/",
    repository:
      "https://github.com/irfankurniawansuthiono/dicoding-menengah-note-app-v3-source-code",
  },
  {
    id: 14,
    category: "Portfolio",
    title: "My Third Portfolio",
    img: "/projects/14.webp",
    altImg: "14.webp",
    dateFinished: "2023",
    repository: "https://github.com/irfankurniawansuthiono/portfolio-v3",
  },
  {
    id: 15,
    category: "Mobile App",
    title: "To-Do List App",
    img: "/projects/NoPreview.webp",
    altImg: "15.webp",
    dateFinished: "2024",
  },
  {
    id: 16,
    category: "Portfolio",
    title: "Portfolio - NextJS",
    img: "/projects/14.webp",
    altImg: "16.webp",
    dateFinished: "2024",
    liveView: "https://irfanks.my.id/",
    repository: "https://github.com/irfankurniawansuthiono/portfolio-v3-nextjs",
  },
];

export default ProjectList;
