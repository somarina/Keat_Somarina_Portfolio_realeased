type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Keat Somarina | Full Stack Mobile Developer',
    fullName: 'Keat Somarina',
    email: 'somarinak@gmail.com',
  },
  hero: {
    name: 'Keat Somarina',
    p: ['I craft seamless Full Stack', 'Mobile applications and intuitive Web experiences'],
  },
  contact: {
    p: "Let's build something amazing together",
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'Tell me about your project...',
      },
    },
  },
  sections: {
    about: {
      p: '',
      h2: 'Service',
      content: `I'm a passionate Full Stack Mobile App Developer with a deep expertise in Flutter, React Native, React.js, and Node.js. I thrive on creating pixel-perfect, highly performant cross-platform mobile applications and scalable backend architectures. With a keen eye for beautiful UI/UX design and a strong foundation in modern software engineering, I collaborate closely with clients to transform their ambitious ideas into elegant, real-world solutions. Let's create an unforgettable digital experience together!`,
    },
    experience: {
      p: 'My professional journey',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'What clients say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'Featured works',
      h2: 'Projects.',
      content: `The following projects showcase my ability to build robust, full-stack mobile and web applications from the ground up. Each case study represents a unique challenge solved with elegant code, intuitive design, and scalable architecture. Feel free to explore the live demos and code repositories to see my craftsmanship in action.`,
    },
  },
};
