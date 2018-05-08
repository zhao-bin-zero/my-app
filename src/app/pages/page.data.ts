export class Navigation {
  constructor(
    private title: string,
    private url: string
  ) {}
}
export const NAVIGATION: Navigation[] = [
  new Navigation('首页', '/eggwifi/advertise/index'),
  new Navigation( '易哥游戏', '/eggwifi/advertise/egg-game')
];

export class LogoImg {
    logoImg: string;
    logoAlt: string;
}
export const LOGOIMG: LogoImg = { logoImg: 'assets/images/camera1.jpg', logoAlt: '北京易哥科技' }

export class ContactWay {
  imgSrc: string;
  imgAlt: string;
  imgTit: string;
}

export class ContactUs {
  title: string;
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  companyContactWay: ContactWay[];
}
export const CONTACTUS: ContactUs = {
  title: '联系我们',
  companyName: '北京易哥科技有限公司',
  companyAddress: '北京市朝阳区西大望路外企大厦A座707',
  companyPhone: '18618152453',
  companyEmail: '18618152453@163.com',
  companyContactWay: [
    {
      imgSrc: 'assets/images/camera1.jpg',
      imgAlt: 'qq',
      imgTit: '1920746358'
    }, {
      imgSrc: 'assets/images/camera1.jpg',
      imgAlt: 'weChat',
      imgTit: '1920746358'
    }, {
      imgSrc: 'assets/images/camera1.jpg',
      imgAlt: 'email',
      imgTit: '1920746358'
    }, {
      imgSrc: 'assets/images/camera1.jpg',
      imgAlt: 'phone',
      imgTit: '18618152453'
    }
  ]
};
