tailwind.config = {
  theme: {
   extend: {
    colors: {
      navbarTextColor: '#2D4A68',
      navbarHoverColor: '#2F93FD',
      headerBannerHTextColor: '#001838',
      headerBannerPTextColor: '#486489',
      headerBannerBTextColor: '#37B865',
      aboutIconColor: '#247FFB',
      counterColor: '#003173',
      workborder: '#FFF2F2',
      choiceborder: '#FFD9D9',
      feedbackstar: '#FFC34C',
      footerbg: '#0B3A77',
      footerhtext: '#FEFEFE',
      slickpointColor: '#D9E8FF',
      footertext: 'rgba(254, 254, 254, 0.5);',
      fullbgColor: 'rgba(174, 174, 174, 0);',
      workslide: 'rgba(0, 0, 0, 0.5);',
      projectt: 'rgba(255, 255, 255, 0.6)',
      },
      maxWidth: {
      'navbarContainer': '1180px',
      'counterContainer': '1070px',
      'headerBannerTextContainer': '580px',
      'aboutusContainer': '1220px',
      },
      fontFamily: {
      'ops': ['Open Sans',],
      'pap': ['Paprika',],
      'nuni': ['Nunito',],
      },
      backgroundImage: {
        'headerbg': "url('./images/headbg.png')",
        'aboutusbg': "url('./images/aboutusbg.png')",
        'workbg': "url('./images/workbg.png')",
        'service': "url('./images/ServiceBg.png')",
      },
      boxShadow: {
        'workS': '0px 11px 23px -1px rgba(0,0,0,0.1);',
      },
    }
  }
}