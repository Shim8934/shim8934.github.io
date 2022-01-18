module.exports = {
  title: `shim8934.github.io`,
  description: `Dev_noob의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://shim8934.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `Shim8934/shim8934.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'UA-217298065-1', // Google Analytics Tracking ID
  author: {
    name: `심기영`,
    bio: {
      role: `개발자`,
      description: ['주도적으로 해결하려는', '발전 욕구가 강한', '돕는 것을 좋아하는'],
      thumbnail: 'java.png', // Path to the image in the 'asset' folder
    },
    social: {
	    github: `https://github.com/Shim8934`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `shim8934@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.10.27 ~ 2021.12.04',
        activity: '행운 프로젝트',
        links: {
          github: 'https://github.com/Shim8934/AWSSetting',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'EKS를 활용한 무중단 배포 구현',
        description: 'Kubernetes를 활용한 CI/CD 경험에 중점을 둔 프로젝트입니다. Jenkins를 사용해 CI를, ArgoCD를 사용해 CD를 분담하였습니다. 더불어 AWS와 Kubernetes의 리소스 구성 경험을 축적할 수 있었습니다.',
        techStack: ['EKS', 'Kubernetes', 'SpringBoot', 'Java', 'Mysql','Shell Script'],
        thumbnailUrl: 'EKSProj.png',
        links: {
          post: '',
          github: 'https://github.com/Shim8934/AWSSetting',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],
  },
};
