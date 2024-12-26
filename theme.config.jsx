const themeConfig = {
  settings: {
    title: "Pantaleone.net - Custom AI development, artwork and business performance consulting services",
    description: "At pantaleone.net you can lear about and purchase our latest services for AI agents, AI software and human + machine abstract artwork",
    SiteURL: "https://pantaleone.net",
    defaultSEO: {
      title: "Pantaleone.net - AI development, artwork and business performance consulting services",
      titleTemplate: '%s | Homepage',
      twitter: {
        handle: "@m_pantaleone",
        site: "Pantaleone AI",
        cardType: "summary_large_image",
      }
    }
  },
  // SocialLinks: [
  //   {
  //     name: "github",
  //     url: "https://github.com/pantaleone-ai",
  //   },
  //   {
  //     name: "twitter",
  //     url: "https://x.com/m_pantaleone"
  //   }
  // ],
  Logo: {
    logo: (
      <>
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
          <circle r="4" cx="8" cy="8" fill="white" />
        </svg>
        <span aria-label="logo" className="ml-3">pantaleone.net</span>
      </>
    ),
    target:"_self"
  },
  PrimaryNavigation: [
    {
      href: "/",
      title: "Shop",
      subNav: true,
      subNavigation: [
        {
          title: "AI Agents",
          href: "#",
          description: "Comming Soon",
        },
        {
          title: "AI Software",
          href: "#",
          description: "Comming Soon",
        },
        {
          title: "AI Artwork",
          href: "#",
          description:
            "Comming Soon",
        }
      ],
    },
    {
      title: "AI Projects",
      subNav: true,
      subNavigation: [
        {
          title: "Rapigent.com AI Agents",
          href: "https://rapigent.com",
          description: "Rapigent.com - AI Agents and Automated Workflows",
        },
        {
          title: "Random AI Experiments",
          href: "#",
          description: "Comming Soon",
        },
        {
          title: "Abstract Artwork and NFTs",
          href: "#",
          description:
            "Comming Soon",
        }
      ],
    },
    {
      href: "/posts",
      title: "Blog",
    },
    {
      href: "/about",
      title: "About",
    }
  ],
  SecondaryNavigation: [
    {
      href: "#",
      title: "Terms",
    },
    {
      href: "https://officialrajdeepsingh.dev/pages/privacy-policy",
      title: "Privacy",
    },
    {
      href: "#",
      title: "Copyrights"
    }
  ],
};
export default themeConfig;