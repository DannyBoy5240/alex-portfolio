const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'BS, Nagoya University',
                degree: 'Nagoya, Japan',
                detail: 
                    "Bachelor's Degree in Computer Science from Carleton University\n\n" + 
                    "During the four-year college course, I focused on learning the web programming language including Frontend and Backend, and in the process completed the bachelor's thesis 'Improving website speed and a problem in network security' and won a bachelor's degree.",
                year: '2009-2013'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Softchoice',
                role: 'Senior Full-Stack Developer',
                url: 'https://www.softchoice.com/',
                desc: 
                    "- Took charge of spearheading the front-end development of a smart price recommendations platform utilized by prominent retail and eCommerce clients, leveraging React.\n" + 
                    "- Collaborated closely with cross-functional teams to seamlessly integrate third-party APIs and services, such as payment gateways and shipping providers.\n" + 
                    "- Created and sustained a robust, lightning-fast backend system using Node.js, Express, and MongoDB, designed to process millions of transactions daily while maintaining optimal performance.\n" + 
                    "- Deployed a streamlined continuous integration/continuous deployment (CI/CD) pipeline utilizing Travis and Jenkins, guaranteeing swift and dependable deployment of new functionalities and ,enhancements.\n" + 
                    "- Contributed to the development of a remarkably scalable customer relationship management (CRM) system, harnessing the power of Node.js, Express, MongoDB, and React. This cutting-edge system empowered sales teams to efficiently handle leads, monitor customer interactions, and collaborate on lucrative deals.\n" + 
                    "- Utilized the AWS Serverless Application Model (SAM) to successfully deploy serverless web applications, while seamlessly integrating Amazon S3 for efficient file storage and Amazon SES for reliable email notifications.\n",
                year: '10/2020 – 07/2023',
                location: ''
            },
            {
                id: 2,
                title: 'CourseStorm',
                role: 'Full Stack and Blockchain Developer',
                url: 'https://www.coursestorm.com/',
                desc: 
                    "- Created a diverse range of decentralized applications(dApps) across multiple Blockchain platforms, notably including a decentralized exchange (DEX) and a supply chain tracking application\n" + 
                    "- Utilized Ethereum Blockchain and the Solidity programming language to develop a highly secure dApp, facilitating seamless peer-to-peer transactions and seamless integration with an off-chain payment gateway.\n" + 
                    "- Implemented an array of smart contracts, encompassing multi-signature wallets, automated market makers, and token issuance contracts, employing Solidity, Rust, and Go.\n" + 
                    "- Constructed NFT minting sites, marketplaces, and staking platforms, supporting ERC-721 and ERC-1155 standards, while seamlessly integrating NFT functionality within dApps.\n" + 
                    "- Successfully implemented consensus algorithms such as PoW and PoS, and undertook the responsibility of crafting tokenomics for a novel cryptocurrency project. This encompassed designing the token model and formulating an economic model to determine initial token distribution and incentives.\n",
                year: '11/2018 – 08/2020',
                location: ''
            },
            {
                id: 3,
                title: 'Ekohe',
                role: 'Senior Frontend Developer',
                url: 'https://ekohe.com/',
                desc: 
                    "- Developed a robust React front-end admin dashboard, enabling sophisticated table data visualization with intuitive search functionalities.\n" + 
                    "- Adapted an existing website into a mobile-responsive version, ensuring compatibility across all platforms and browsers.\n" + 
                    "- Engineered a versatile notification utility with extensive capabilities for drafting, scheduling, and executing notifications. Additionally, integrated Webhooks to support customized client implementations.\n" + 
                    "- Spearheaded the front-end development efforts for an educational software product, utilizing the power of React and Redux frameworks.\n" + 
                    "- Fostered close collaboration with back-end developers to facilitate seamless integration and enhance the overall user experience. Developed APIs and implemented front-end caching mechanisms to optimize performance and alleviate server load.\n" + 
                    "- Collaborated with UX designers to translate web designs into user-friendly and responsive web pages. Developed reusable and modular components, and implemented design systems to ensure consistent aesthetics throughout the website.\n",
                year: '02/2016 – 10/2018',
                location: ''
            },
            {
                id: 4,
                title: 'Emerton',
                role: 'Junior Web Developer',
                url: 'https://www.emerton.co/',
                desc: 
                    "- Collaborated with a team of React developers to construct user interfaces and components, leveraging React, Redux, and other cutting-edge front-end technologies.\n" + 
                    "- Contributed to the front-end development of websites utilizing CMS platforms like WordPress or Shopify. Developed customized themes, implemented plugins, and optimized website performance.\n" + 
                    "- Conducted comprehensive research on emerging web technologies, offering valuable insights and recommendations on integrating them into web development projects.\n" + 
                    "- Developed and maintained well-organized code repositories using Git for version control, ensuring thorough documentation and efficient code management.\n" + 
                    "- Engaged closely with UX designers to effectively translate web designs into intuitive and responsive web pages.\n" + 
                    "- Engaged closely with UX designers to effectively translate web designs into intuitive and responsive web pages.\n",
                year: '05/2013 – 12/2015',
                location: ''
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
