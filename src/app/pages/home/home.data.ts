export class Slideshow {
  constructor(
    private slideHref: string,
    private slideUrl: string,
    private slideAlt: string
  ) {}
}
export const SLIDESHOW: Slideshow[] = [
  new Slideshow('#', 'assets/images/banner-A.jpg', '易联世界 移动生活')
];
// 了解更多
export class LearnMore {
  title: string;
  content: string;
  moreUrl: string;
}

export class OurServicesCard {
  cardImgSrc: string;
  cardTitle: string;
  cardContent: string;
}
export class OurServices {
  titleContent: TitleContent;
  card: OurServicesCard[];
}
export class AboutUs {
  titleContent: TitleContent;
  contentAss: string;
  contentList: Array<string>;
  imgSrc: string;
  imgAlt: string;
  moreurl: string;
}
export class OfficialPartner {
  titleContent: TitleContent;
  cooperativePartner: Array<string>;
}
export class TitleContent {
  title: string;
  titleEng: string;
  content: string;
}
export class HomeContent {
  learnMore: LearnMore;
  ourServices: OurServices;
  aboutUs: AboutUs;
  officialPartner: OfficialPartner;
}
export const HOMECONTENT: HomeContent = {
  // 易哥公司介绍
  learnMore: {
    title: '易哥公司介绍',
    content: '北京易哥科技有限公司是专注于提供移动数据互联解决方案的高新技术企业。旗下拥有,易哥游戏,易哥游戏加速器,易哥视频加速器,流量,提供跨运营商的移动互联数据解决方案。',
    moreUrl: '#'
  },
  ourServices: {
   titleContent: {
     title: '我们的服务',
     titleEng: 'our services',
     content: '我们相信：易哥游戏会给你带来无穷的娱乐享受,体验无限制,手游,TV游戏畅通互联。 我们相信：易哥游戏,视频加速可以很简单，一键超快链接，突破网络限制,畅快的征服,无时无处随时看。'
   },
    card: [{
      cardImgSrc: 'assets/images/service1.png',
      cardTitle: '易哥游戏',
      cardContent: '易哥提供精品的游戏,手机游戏,TV游戏给你完美的享受!\n'
    }, {
      cardImgSrc: 'assets/images/service2.png',
      cardTitle: '易哥游戏加速器',
      cardContent: '易哥游戏加速器针对网络游戏加速,解决外服游戏的延迟高、登录难、频掉线等问题，保证流畅的游戏环境。\n'
    }, {
      cardImgSrc: 'assets/images/service3.png',
      cardTitle: '易哥视频加速器',
      cardContent: '易哥视频加速器针对网络视频加速,一键超快链接，突破网络限制，视频无时无处随处看'
    }, {
      cardImgSrc: 'assets/images/service4.png',
      cardTitle: '易哥流量',
      cardContent: '为外国友人提供优质的访问网络服务。'
    }]
  },
  aboutUs: {
    titleContent: {
      title: '关于我们',
      titleEng: 'About us',
      content: '易哥科技成立于2014年3月，是一家专注于提供移动数据互联解决方案的高新技术企业，在游戏、游戏加速、视频加速、出入境流量领域都有所建树。我们秉承客户至上的宗旨，提供最优质的服务。',
    },
    contentAss: '易哥科技成立于是一家高级科技互联网公司易哥科技成立于是一家高级科技互联网公司易哥科技成立于是一家高级科技互联网',
    contentList: ['易哥科技成立于是一家高级科技互联网公司易哥科技成立于是', '易哥科技成立于是一家高级科技互联网公司易哥科技成立于是', '易哥科技成立于是一家高级科技互联网公司易哥科技成立于是'],
    imgSrc: 'assets/images/liaojie.jpg',
    imgAlt: '北京易哥科技',
    moreurl: '#'
  },
  officialPartner: {
    titleContent: {
      title: '我们的合作商',
      titleEng: 'Our clients',
      content: '易哥科技成立于是一家高级科技互联网公司易哥科技成立于是一家高级科技互联网公司易哥科技成立于是一家高级科技互联网',
    },
    cooperativePartner: [
      'assets/images/yidong.jpg',
      'assets/images/dianxin.jpg',
      'assets/images/liantong.jpg',
      'assets/images/ccn.jpg',
      'assets/images/youzhong.jpg',
      'assets/images/wangyi.png',
      'assets/images/tenxun.jpg',
      'assets/images/94pk.jpg'
    ]
  }
};

