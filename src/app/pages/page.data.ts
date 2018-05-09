export class Navigation {
  constructor(
    private title: string,
    private url: string
  ) {}
}
export const NAVIGATION: Navigation[] = [
  new Navigation('首页', '/eggwifi/advertise/index'),
  // new Navigation( '易哥游戏', '/eggwifi/advertise/egg-game'),
  new Navigation( '易哥游戏', 'http://www.haves-cinda.com/game/#/')
];

export class LogoImg {
    logoImg: string;
    logoAlt: string;
}
export const LOGOIMG: LogoImg = { logoImg: 'assets/images/logo.png', logoAlt: '北京易哥科技' }

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
  companyPhone: '4008909313',
  companyEmail: 'tech@eggwifi.com',
  companyContactWay: [
    {
      imgSrc: 'assets/images/qq.png',
      imgAlt: 'qq',
      imgTit: 'QQ: 786114553'
    }, {
      imgSrc: 'assets/images/wx.png',
      imgAlt: 'weChat',
      imgTit: '微信号: AikesiBB'
    }, {
      imgSrc: 'assets/images/email.png',
      imgAlt: 'email',
      imgTit: '邮箱: tech@eggwifi.com'
    }, {
      imgSrc: 'assets/images/phone.png',
      imgAlt: 'phone',
      imgTit: '电话: 4008909313'
    }
  ]
};
