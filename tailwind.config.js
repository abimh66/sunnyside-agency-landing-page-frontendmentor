module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Barlow"],
        title: ["Fraunces"],
      },
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        softYellow: "hsl(51, 100%, 49%)",
        graphicDesign: "hsl(167, 40%, 24%)",
        photography: "hsl(198, 62%, 26%)",
        footer: "hsl(168, 34%, 41%)",
        greyBlue: "hsl(232, 10%, 55%)",
      },
      backgroundImage: {
        headerDesktop: 'url("../public/images/desktop-header.jpg")',
        headerMobile: 'url("../public/images/mobile-header.jpg")',
        transformDesktop: 'url("../public/images/desktop/image-transform.jpg")',
        transformMobile: 'url("../public/images/mobile/image-transform.jpg")',
        standDesktop: 'url("../public/images/desktop/image-stand-out.jpg")',
        standMobile: 'url("../public/images/mobile/image-stand-out.jpg")',
        graphicDesktop:
          'url("../public/images/desktop/image-graphic-design.jpg")',
        graphicMobile:
          'url("../public/images/mobile/image-graphic-design.jpg")',
        photoDesktop: 'url("../public/images/desktop/image-photography.jpg")',
        photoMobile: 'url("../public/images/mobile/image-photography.jpg")',
        coneDesktop: 'url("../public/images/desktop/image-gallery-cone.jpg")',
        coneMobile: 'url("../public/images/mobile/image-gallery-cone.jpg")',
        milkDesktop:
          'url("../public/images/desktop/image-gallery-milkbottles.jpg")',
        milkMobile:
          'url("../public/images/mobile/image-gallery-milkbottles.jpg")',
        orangeDesktop:
          'url("../public/images/desktop/image-gallery-orange.jpg")',
        orangeMobile: 'url("../public/images/mobile/image-gallery-orange.jpg")',
        sugarDesktop:
          'url("../public/images/desktop/image-gallery-sugarcubes.jpg")',
        sugarMobile:
          'url("../public/images/mobile/image-gallery-sugarcubes.jpg")',
      },
      gridTemplateRows: {
        mobile: "400px 480px 400px 480px 640px 640px",
        desktop: "repeat(3, 480px)",
      },
    },
  },
  plugins: [],
};
