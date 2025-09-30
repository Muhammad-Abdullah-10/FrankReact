// homePageData.js

const homePageData = {
   heroSection: {
    slides: [
      {
        title: "Airbnb Management Dubai",
        subtitle: "Premier property management for short-term rentals across Dubai",
        bannerImg: "src/assets/img/FrankPorter_main_baner_1.jpeg",
        buttons: [
          {
            text: "Manage My Property",
            link: "#",
            style: "blackButton"
          },
          {
            text: "Book Now",
            link: "#",
            style: "whiteButton"
          }
        ]
      },
      {
        title: "Airbnb Management Dubai",
        subtitle: "Premier property management for short-term rentals across Dubai",
        bannerImg: "src/assets/img/FrankPorter_main_baner_2.jpeg",
        buttons: [
          {
            text: "Manage My Property",
            link: "#",
            style: "blackButton"
          },
          {
            text: "Book Now",
            link: "#",
            style: "whiteButton"
          }
        ]
      },
      {
        title: "Airbnb Management Dubai",
        subtitle: "Premier property management for short-term rentals across Dubai",
        bannerImg: "src/assets/img/FrankPorter_main_baner_3.jpeg",
        buttons: [
          {
            text: "Manage My Property",
            link: "#",
            style: "blackButton"
          },
          {
            text: "Book Now",
            link: "#",
            style: "whiteButton"
          }
        ]
      }
    ]
  },
  formSection: {
    title: "Estimate your revenue",
    selects: [
      {
        name: "area",
        options: [
          { label: "Dubai", value: "Dubai" },
          { label: "Abu Dhabi", value: "Abu Dhabi" }
        ]
      },
      {
        name: "bedrooms",
        options: [
          { label: "1 Bedroom", value: "1 Bedroom" },
          { label: "2 Bedroom", value: "2 Bedroom" },
          { label: "3 Bedroom", value: "3 Bedroom" }
        ]
      },
      {
        name: "cars",
        options: [
          { label: "Volvo", value: "volvo" },
          { label: "Saab", value: "saab" },
          { label: "Mercedes", value: "mercedes" },
          { label: "Audi", value: "audi" }
        ]
      }
    ],
    button: {
      text: "Calculate",
      type: "submit",
      style: "blackButton"
    }
  },


  logoSection: {
    logos: [
      { src: "src/assets/img/news-logo/arabianBusiness.svg", alt: "Arabian Business" },
      { src: "src/assets/img/news-logo/forbesMiddleEast.svg", alt: "Forbes Middle East" },
      { src: "src/assets/img/news-logo/gulfNews.svg", alt: "Gulf News" },
      { src: "src/assets/img/news-logo/khaleejTimes.svg", alt: "Khaleej Times" },
      { src: "src/assets/img/news-logo/theNational.svg", alt: "The National" },
      { src: "src/assets/img/news-logo/arabianBusiness.svg", alt: "Arabian Business" },
      { src: "src/assets/img/news-logo/forbesMiddleEast.svg", alt: "Forbes Middle East" },
      { src: "src/assets/img/news-logo/zawya.svg", alt: "Zawya" },
      { src: "src/assets/img/news-logo/dubaiOne.svg", alt: "Dubai One" },
      { src: "src/assets/img/news-logo/theNational.svg", alt: "The National" }
    ],
    scrollDuration: "15s" 
    },

    dataImageContent: {
        leftSections: [
        {
            id: "L1",
            title: "Short Let Management",
            text: "At Primolux, we handle every detail of your short-term rental, from guest bookings and marketing to maintenance and cleaning. Maximize your property’s earning potential with our seamless, hassle-free management services tailored to meet your needs.",
            imgUrl: "src/assets/img/apartment-dining-room.jpeg",
        },
        {
            id: "L2",
            title: "We list your property on multiple hosting platform",
            text: "At Primolux, we ensure your property gets maximum exposure by listing it on the top short-term rental platforms, including Airbnb, Booking.com, and more. Our team optimizes your listings with professional photography, compelling descriptions, and competitive pricing strategies to attract high-quality guests. By reaching a broader audience, we enhance your property's visibility and boost occupancy rates, helping you achieve higher returns. We handle all the listing management details, from updates to calendar synchronization, ensuring a seamless experience across platforms, so you can enjoy stress-free earnings from your investment.",
            imgUrl: "src/assets/img//13_IMG_6481-HDR-Edit-1.png",
        },
        {
            id: "L3",
            title: "Short term rental Dubai: The facts and figures",
            text: "Dubai’s short-term rental market is booming, offering significant returns for property owners. With millions of tourists visiting annually, short-term rentals provide a lucrative opportunity, often yielding higher returns compared to traditional leasing. The average occupancy rate for short-term rentals in Dubai remains high, especially in prime locations like Downtown, Marina, and Palm Jumeirah. Property owners can expect occupancy rates between 70-90%, with average nightly rates fluctuating depending on seasonality and location. As Dubai continues to grow as a global destination, short-term rentals are becoming a preferred choice for maximizing real estate investment income.",
            imgUrl: "src/assets/img/02_1L1A1062-HDR_OK-min.jpeg",
        },
        ],

        rightSections: [
        {
            id: "R1",
            title: "About PrimoLux",
            text: "At Primolux, we specialize in providing comprehensive property management services designed to maximize your investment returns. Whether you're a homeowner or investor, our team of experts handles every aspect of short-term rentals, from guest bookings and marketing to property maintenance and cleaning. We aim to offer a seamless experience for both property owners and guests, ensuring top-notch service and hassle-free management. With a focus on enhancing property visibility and optimizing occupancy rates, Primolux is your trusted partner in elevating the potential of your real estate assets.",
            imgUrl: "src/assets/img/IMG_5197.jpeg",
        },
        {
            id: "R2",
            title: "Vacation Rental Management",
            text: "Primolux offers end-to-end vacation rental management services, ensuring your property is always guest-ready. From professional marketing and guest communication to cleaning and maintenance, we provide a stress-free experience while maximizing your rental income and occupancy rates.",
            imgUrl: "src/assets/img/table_flower.png",
        },
        ],
    },

   managementSection: {
  title: "How it Works ?",
  steps: [
    {
      title: "Management Support",
      description:
        "Primolux offers 24/7 management support, ensuring your property is well-maintained and guests receive top-tier service anytime.",
      icon: "src/assets/img/FrankPorter_step_1.svg"
    },
    {
      title: "Listing Management",
      description:
        "We optimize your property listings across major platforms to boost visibility, attract more bookings, and maximize occupancy.",
      icon: "src/assets/img/FrankPorter_step_3.svg"
    },
    {
      title: "Interior Design",
      description:
        "Our expert design team enhances your property’s appeal with stylish interiors that create a lasting impression on guests.",
      icon: "src/assets/img/Interior-design (1).svg"
    },
    {
      title: "Estimate Revenue",
      description:
        "We provide accurate revenue projections, helping you understand your property’s potential earnings and make informed investment decisions.",
      icon: "src/assets/img/noun-interior-design-3879270-1.svg"
    },
    {
      title: "Cleaning & Maintenance",
      description:
        "Primolux ensures your property is spotless and well-maintained between stays, providing guests with a clean, welcoming experience.",
      icon: "src/assets/img/clean.svg"
    }
  ]
},


  howItWorks: [
    {
      id: 1,
      title: "Get in Touch",
      text: "Reach out to Primolux to discuss your property and rental goals.",
      icon: "src/assets/img/Group-487-1.svg",
    },
    {
      id: 2,
      title: "Contract signed",
      text: "Sign the contract and let us take care of everything from here.",
      icon: "src/assets/img/Vector.svg",
    },
    {
      id: 3,
      title: "Initial inspection",
      text: "We conduct a thorough property inspection to assess its condition and readiness.",
      icon: "src/assets/img/FrankPorter_step_2.svg",
    },
    {
      id: 4,
      title: "Interior design",
      text: "Our team enhances your property’s interiors to increase guest appeal.",
      icon: "src/assets/img/Interior-design (1).svg",
    },
    {
      id: 5,
      title: "Maintenance works",
      text: "We handle any necessary repairs or upgrades to ensure your property is guest-ready.",
      icon: "src/assets/img/FrankPorter_step_5.svg",
    },
    {
      id: 6,
      title: "Photography and listing",
      text: "Professional photos are taken, and your property is listed across top rental platforms.",
      icon: "src/assets/img/listning-creation.svg",
    },
    {
      id: 7,
      title: "Guest management + app access",
      text: "We manage guest bookings and provide you with real-time updates via our app.",
      icon: "src/assets/img/pricing_request.svg",
    },
    {
      id: 8,
      title: "Relax and Count Your Dirhams",
      text: "Sit back and enjoy the steady income from your rental property!",
      icon: "src/assets/img/relax.svg",
    },
  ],

   homeClientsTestimonials: {
    heading: "What our clients say about us?",
    testimonials: [
      {
        name: "Sajna",
        role: "Owner",
        image: "src/assets/img/IMG_5197.jpeg",
        quote:
          "Really delighted to see my apartment beautifully furnished by Frank Porter team. Highly appreciate their instantaneous services and organized functioning. Hoping to have a great year ahead with the entire team."
      },
      {
        name: "Ahmed",
        role: "Investor",
        image: "src/assets/img/IMG_5198.jpeg",
        quote:
          "The team was highly professional and attentive. They managed everything smoothly and increased my property bookings substantially."
      },
      {
        name: "Fatima",
        role: "Owner",
        image: "src/assets/img/IMG_5199.jpeg",
        quote:
          "Fantastic service! My property looks amazing and guests love staying here. Communication is seamless and prompt."
      },
      {
        name: "Omar",
        role: "Host",
        image: "src/assets/img/IMG_5200.jpeg",
        quote:
          "Primolux exceeded my expectations. The listing optimization and guest management were top-notch, making my life much easier."
      },
      {
        name: "Leila",
        role: "Investor",
        image: "src/assets/img/IMG_5201.jpeg",
        quote:
          "I highly recommend their services. From interior design to maintenance, everything is handled professionally and efficiently."
      }
    ]
  },

  partners: [
    { id: 1, name: "Arabian Business", logo: "/news-logo/arabianBusiness.svg" },
    { id: 2, name: "Forbes Middle East", logo: "/news-logo/forbesMiddleEast.svg" },
    { id: 3, name: "Gulf News", logo: "/news-logo/gulfNews.svg" },
    { id: 4, name: "Khaleej Times", logo: "/news-logo/khaleejTimes.svg" },
  ],
};

export default homePageData;
