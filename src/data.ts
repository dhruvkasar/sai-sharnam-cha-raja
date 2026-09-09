export const societyDetails = {
  name: "साई शरणम चा राजा",
  established: 2019,
  year: 2026,
  aagmanDate: "१३ सप्टेंबर २०२६ (रविवार)",
  sthapanaDate: "१४ सप्टेंबर २०२६ (सोमवार)",
  pujanDate: "१४ सप्टेंबर २०२६ (सोमवार)",
  pujanTime: "दुपारी ३:३० वाजता",
  visarjanDate: "२५ सप्टेंबर २०२६ (शुक्रवार)",
  sthapanaDay: "सोमवार, १४ सप्टेंबर २०२६",
  visarjanDay: "शुक्रवार, २५ सप्टेंबर २०२६",
  durationText: "१२ दिवस",
  address: "साई शरणम सोसायटी, कल्याण",
  contact: "+91 91377 95166",
  upiId: "mr.siddheshwagh17-2@okhdfcbank",
  instagram: {
    handle: "saisharnamcharaja",
    url: "https://www.instagram.com/saisharnamcharaja/"
  }
};

export interface CompetitionItem {
  id: number;
  day: number;
  dayLabel: string;
  date: string;
  time: string;
  title: string;
  englishTitle: string;
  audience: string;
  desc: string;
  note?: string;
  categoryBadge?: string;
  formUrl?: string;
}

export const competitionDays = [
  { day: 1, date: "१६ सप्टेंबर", dayLabel: "Day 1", time: "सायंकाळी ६:०० ते ८:०० मध्ये" },
  { day: 2, date: "१७ सप्टेंबर", dayLabel: "Day 2", time: "सायंकाळी ६:०० ते ८:०० मध्ये" },
  { day: 3, date: "१८ सप्टेंबर", dayLabel: "Day 3", time: "सायंकाळी ६:०० ते ८:०० मध्ये" },
  { day: 4, date: "१९ सप्टेंबर", dayLabel: "Day 4", time: "सायंकाळी ६:०० ते ८:०० मध्ये" },
  { day: 5, date: "२१ सप्टेंबर", dayLabel: "Day 5", time: "सायंकाळी ६:०० ते १०:०० मध्ये" },
  { day: 6, date: "२२ सप्टेंबर", dayLabel: "Day 6", time: "सायंकाळी ६:०० ते १०:०० मध्ये" },
  { day: 7, date: "२३ सप्टेंबर", dayLabel: "Day 7", time: "सायंकाळी ६:०० ते ८:०० मध्ये" },
  { day: 8, date: "२४ सप्टेंबर", dayLabel: "Day 8", time: "सायंकाळी ६:०० ते १०:०० मध्ये" }
];

export const competitions: CompetitionItem[] = [
  // Day 1: १६ सप्टेंबर (6:00 PM to 8:00 PM)
  {
    id: 1,
    day: 1,
    dayLabel: "Day 1",
    date: "१६ सप्टेंबर",
    time: "सायंकाळी ६:०० ते ८:०० मध्ये",
    title: "चित्रकला स्पर्धा",
    englishTitle: "Drawing Competition",
    audience: "१ ते २, ३ ते ५, ६ ते १०",
    desc: "मुलांच्या कलागुणांना व कल्पकतेला वाव देणारी मनमोहक चित्रकला स्पर्धा.",
    categoryBadge: "चित्रकला",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScovZ2wXMu1oXFS5inIKcTlIjB9djsF7LjOpmcpdUT1WjQyYA/viewform?usp=header"
  },
  {
    id: 2,
    day: 1,
    dayLabel: "Day 1",
    date: "१६ सप्टेंबर",
    time: "सायंकाळी ६:०० ते ८:०० मध्ये",
    title: "चमचा गोटी",
    englishTitle: "Lemon and Spoon",
    audience: "१ ते २ (मुले आणि मुली), ३ ते ५ (मुले आणि मुली)",
    desc: "एकाग्रता आणि समतोलाची पारंपारिक व लोकप्रिय लिंबू चमचा शर्यत.",
    categoryBadge: "पारंपारिक खेळ",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdp7ac1A9d-hvwK5nwdpDmAyW2cbAQTO5ltdnVjNTz4MoTq5g/viewform?usp=header"
  },
  {
    id: 3,
    day: 1,
    dayLabel: "Day 1",
    date: "१६ सप्टेंबर",
    time: "सायंकाळी ६:०० ते ८:०० मध्ये",
    title: "बेडूक उड्या",
    englishTitle: "Frog Jump",
    audience: "ज्युनियर ते सिनिअर (मुले आणि मुली), १ ते २ (मुले आणि मुली)",
    desc: "लहान मुलांसाठी ऊर्जावान आणि मनसोक्त आनंदाची उड्यांची शर्यत.",
    categoryBadge: "बालखेळ",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfpQujgk0xJejmXDNETMx1JShVcC4QtPwLHmbSRyVMTRant4g/viewform?usp=header"
  },

  // Day 2: १७ सप्टेंबर (6:00 PM to 8:00 PM)
  {
    id: 4,
    day: 2,
    dayLabel: "Day 2",
    date: "१७ सप्टेंबर",
    time: "सायंकाळी ६:०० ते ८:०० मध्ये",
    title: "तीन पायाची शर्यत",
    englishTitle: "Three-Legged Race",
    audience: "१ ते २ (मुले आणि मुली), ३ ते ५ (मुले आणि मुली)",
    desc: "एकमेकांमधील ताळमेळ आणि मैत्रीची परीक्षा घेणारी रोमांचक शर्यत.",
    categoryBadge: "सांघिक खेळ",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfPupb51NG7iVPGNDlUg2Kv9JtMMLoKiX6pceTR0ojW1yqKaQ/viewform?usp=header"
  },
  {
    id: 5,
    day: 2,
    dayLabel: "Day 2",
    date: "१७ सप्टेंबर",
    time: "सायंकाळी ६:०० ते ८:०० मध्ये",
    title: "बुक बॅलन्सिंग",
    englishTitle: "Book Balancing",
    audience: "१ ते २ (मुले आणि मुली), ३ ते ५ (मुले आणि मुली)",
    desc: "डोक्यावर पुस्तक ठेवून अचूक समतोल साधत पुढे जाण्याची मजेदार स्पर्धा.",
    categoryBadge: "समतोल खेळ",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdXLStsspkmEBSmNP23wIE1BTeyV4G3jYywtSvVWtMjq44O-g/viewform?usp=header"
  },

  // Day 3: १८ सप्टेंबर (6:00 PM to 8:00 PM)
  {
    id: 6,
    day: 3,
    dayLabel: "Day 3",
    date: "१८ सप्टेंबर",
    time: "सायंकाळी ६:०० ते ८:०० मध्ये",
    title: "स्लो सायकल",
    englishTitle: "Slow Cycle",
    audience: "खुला गट - मुले आणि मुली (Open Category)",
    desc: "पाय खाली न टेकवता सर्वांत संथ गतीने सायकल चालवण्याची कौशल्यपूर्ण स्पर्धा.",
    categoryBadge: "कौशल्य स्पर्धा",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdMBPXmbYRWelMSd5dIVTg_ZhEkJBn2vbWXxTRF3pGmsCZDBQ/viewform?usp=header"
  },

  // Day 4: १९ सप्टेंबर (6:00 PM to 8:00 PM)
  {
    id: 7,
    day: 4,
    dayLabel: "Day 4",
    date: "१९ सप्टेंबर",
    time: "सायंकाळी ६:०० ते ८:०० मध्ये",
    title: "वक्तृत्व स्पर्धा",
    englishTitle: "Elocution Competition",
    audience: "खुला गट - मुले आणि मुली",
    desc: "प्रभावी विचार मांडणी आणि वक्तृत्व कौशल्याची प्रेरणादायी स्पर्धा.",
    categoryBadge: "वक्तृत्व",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScrlhwa8zDprhn7nL6SEWxTeEBf6Q-wLg7u3DSV-nisaSmL8g/viewform?usp=header"
  },
  {
    id: 8,
    day: 4,
    dayLabel: "Day 4",
    date: "१९ सप्टेंबर",
    time: "सायंकाळी ६:०० ते ८:०० मध्ये",
    title: "श्लोक पाठांतर स्पर्धा",
    englishTitle: "Shloka Recitation",
    audience: "ज्युनियर ते सिनिअर (मुले आणि मुली), १ ते २ (मुले आणि मुली), ३ ते ५ (मुले आणि मुली)",
    desc: "संस्कृत व मराठी श्लोकांचे सुस्पष्ट उच्चार व पाठांतर सादर करण्याची स्पर्धा.",
    categoryBadge: "संस्कृती व संस्कार",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScalAEPK4ZsWaqlPWEcHEGfNj-D95IpE5yGQRVv_S_0tmjVyQ/viewform?usp=header"
  },

  // Day 5: २१ सप्टेंबर (6:00 PM to 10:00 PM)
  {
    id: 9,
    day: 5,
    dayLabel: "Day 5",
    date: "२१ सप्टेंबर",
    time: "सायंकाळी ६:०० ते १०:०० मध्ये",
    title: "पाककला स्पर्धा",
    englishTitle: "Cooking Competition",
    audience: "महिला (Women)",
    desc: "स्वादिष्ट आणि नाविन्यपूर्ण खाद्यपदार्थांची चवदार पाककला स्पर्धा.",
    categoryBadge: "पाककला",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSerFf9a2z7xkrJfAyUlh5bnC96Ozewv4siPnrpKayh9KKSasQ/viewform?usp=header"
  },

  // Day 6: २२ सप्टेंबर (6:00 PM to 10:00 PM)
  {
    id: 10,
    day: 6,
    dayLabel: "Day 6",
    date: "२२ सप्टेंबर",
    time: "सायंकाळी ६:०० ते १०:०० मध्ये",
    title: "गायन स्पर्धा",
    englishTitle: "Singing Competition",
    audience: "मुले, मुली, महिला",
    desc: "भक्तीगीत, भावगीत व शास्त्रीय गायनाची सुमधुर सूर स्पर्धा.",
    categoryBadge: "संगीत",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdRNeufSUGF2YZEDUS6Dhx7xLDoMRYHiPhvyz4XevFPGPtkIg/viewform?usp=header"
  },
  {
    id: 11,
    day: 6,
    dayLabel: "Day 6",
    date: "२२ सप्टेंबर",
    time: "सायंकाळी ६:०० ते १०:०० मध्ये",
    title: "नृत्य स्पर्धा",
    englishTitle: "Dance Competition",
    audience: "मुले, मुली, महिला",
    desc: "पारंपारिक, लोकनृत्य व आधुनिक नृत्याची बहारदार रंगारंग स्पर्धा.",
    categoryBadge: "नृत्य",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeWtBsWvKlMkAVI9FLQZmgTkqvCShSGU-pfVmHpk8SBMwHY-w/viewform?usp=header"
  },

  // Day 7: २३ सप्टेंबर
  {
    id: 12,
    day: 7,
    dayLabel: "Day 7",
    date: "२३ सप्टेंबर",
    time: "सायंकाळी ६:०० ते ८:०० मध्ये",
    title: "फुग्यांची स्पर्धा",
    englishTitle: "Balloon Competition",
    audience: "६ ते ८ (मुले आणि मुली), ९ ते १० (मुले आणि मुली)",
    desc: "वेगवेगळ्या मनोरंजक व गमतीशीर फुग्यांच्या खेळांची स्पर्धा.",
    categoryBadge: "मनोरंजन",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScVW7HZurqUneS6edzmVM2F4QUshYkFicFyqN2WrKURW23boQ/viewform?usp=header"
  },

  // Day 8: २४ सप्टेंबर (6:00 PM to 10:00 PM)
  {
    id: 13,
    day: 8,
    dayLabel: "Day 8",
    date: "२४ सप्टेंबर",
    time: "सायंकाळी ६:०० ते १०:०० मध्ये",
    title: "संगीत खुर्ची",
    englishTitle: "Musical Chair",
    audience: "पुरुष (१० नंतरचे), महिला (१० नंतरचे)",
    desc: "संगीताच्या तालावर थरारक व चुरशीची सर्वप्रिय संगीत खुर्ची स्पर्धा.",
    categoryBadge: "पारंपारिक खेळ",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSde-WpGZ4Tt39l658gp-ylzlPkA7BelD--Ay7FAI2rj5OYGSQ/viewform?usp=header"
  },
  {
    id: 14,
    day: 8,
    dayLabel: "Day 8",
    date: "२४ सप्टेंबर",
    time: "सायंकाळी ६:०० ते १०:०० मध्ये",
    title: "वेशभूषा",
    englishTitle: "Fancy Dress",
    audience: "मुले, मुली, महिला, पुरुष",
    desc: "ऐतिहासिक, सामाजिक व पौराणिक पात्रांची सुंदर वेशभूषा स्पर्धा.",
    categoryBadge: "वेशभूषा",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe9yn5WsrRHhJotBzSVGFRxOVdm1MxBDHduS2_R28T1Z1TeyA/viewform?usp=header"
  }
];

export const aartiTimings = [
  { time: "सकाळी १०:३०", desc: "नित्य सकाळची आरती व दर्शन" },
  { time: "संध्याकाळी ८:३०", desc: "नित्य सांज आरती व महाप्रसाद" }
];

export interface SpecialScheduleEvent {
  date: string;
  day: string;
  title: string;
  badge: string;
  desc: string;
  time: string;
  highlight?: boolean;
}

export const specialScheduleEvents: SpecialScheduleEvent[] = [
  {
    date: "१३ सप्टेंबर २०२६",
    day: "रविवार",
    title: "श्री गणेश आगमन सोहळा",
    badge: "महा आगमन",
    desc: "आपल्या लाडक्या 'साई शरणम चा राजा'चे ढोल-ताशांच्या गजरात व भक्तीमय वातावरणात वाजत-गाजत भव्य आगमन.",
    time: "१३ सप्टेंबर (रविवार)",
    highlight: true
  },
  {
    date: "१४ सप्टेंबर २०२६",
    day: "सोमवार",
    title: "श्री गणेश प्रतिष्ठापना व पूजन",
    badge: "स्थापना व पूजन",
    desc: "वेदमंत्रांच्या जयघोषात श्री गणेशाची विधिवत प्रतिष्ठापना व दुपारचे महापूजन सोहळा.",
    time: "१४ सप्टेंबर • दुपारी ३:३० वाजता",
    highlight: true
  },
  {
    date: "२४ सप्टेंबर २०२६",
    day: "गुरुवार",
    title: "श्री सत्यनारायण महापूजा",
    badge: "विशेष महापूजा",
    desc: "सोसायटीतील सर्व भाविकांसाठी सामूहिक श्री सत्यनारायण महापूजा व तीर्थप्रसाद सोहळा.",
    time: "सकाळी १०:३० वाजता"
  }
];

export interface CommitteeMember {
  name: string;
  role: string;
  englishRole: string;
  department: string;
  photoId?: string;
  initials: string;
  isPresident?: boolean;
  motive: string;
  instagram: {
    handle: string;
    url: string;
    followers: string;
    following: string;
  };
}

export const committee: CommitteeMember[] = [
  { 
    name: "सिद्धेश वाघ", 
    role: "अध्यक्ष", 
    englishRole: "President", 
    department: "समिती प्रमुख व मुख्य नियोजन", 
    photoId: "siddesh",
    initials: "सि. वा.",
    isPresident: true,
    motive: "सर्व भाविकांना एकत्र आणून 'साई शरणम चा राजा' उत्सव शिस्तबद्ध, पारंपारिक आणि अविस्मरणीय भव्यतेने साजरा करणे व सोसायटीत सामाजिक ऐक्य वृद्धिंगत करणे.",
    instagram: {
      handle: "_siddhu_5593_",
      url: "https://www.instagram.com/_siddhu_5593_/",
      followers: "353",
      following: "298"
    }
  },
  { 
    name: "भूषण चौधरी", 
    role: "कार्यकारी सदस्य", 
    englishRole: "Executive Member", 
    department: "व्यवस्थापन व समन्वय", 
    photoId: "bhushan",
    initials: "भू. चौ.",
    motive: "उत्सवातील सर्व कार्यक्रमांचे अचूक व शिस्तबद्ध नियोजन करून प्रत्येक भाविकाला सुलभ दर्शनाचा व प्रसादाचा लाभ मिळवून देणे.",
    instagram: {
      handle: "bhushan_chaudhari11",
      url: "https://www.instagram.com/bhushan_chaudhari11/",
      followers: "870",
      following: "396"
    }
  },
  { 
    name: "ध्रुव कासार", 
    role: "कार्यकारी सदस्य", 
    englishRole: "Executive Member", 
    department: "तांत्रिक व जनसंपर्क प्रमुख", 
    photoId: "dhruv",
    initials: "ध्रु. का.",
    motive: "आधुनिक डिजिटल तंत्रज्ञान, वेबसाइट आणि सोशल मीडियाच्या माध्यमातून मंडळाचा भक्तिमय वारसा आणि उत्सव जगभरातील भाविकांपर्यंत पोहोचवणे.",
    instagram: {
      handle: "dhruvvkasar",
      url: "https://www.instagram.com/dhruvvkasar/",
      followers: "234",
      following: "320"
    }
  },
  { 
    name: "मोहित वैष्णव", 
    role: "कार्यकारी सदस्य", 
    englishRole: "Executive Member", 
    department: "स्पर्धा व सांस्कृतिक संयोजन", 
    photoId: "mohit",
    initials: "मो. वै.",
    motive: "लहान मुलांपासून ज्येष्ठांपर्यंत सर्वांच्या कलागुणांना वाव देऊन विविध सांस्कृतिक स्पर्धांच्या माध्यमातून उत्सवात आनंद आणि चैतन्य निर्माण करणे.",
    instagram: {
      handle: "i__am__sai__18",
      url: "https://www.instagram.com/i__am__sai__18/",
      followers: "319",
      following: "269"
    }
  },
  { 
    name: "ओम चौधरी", 
    role: "कार्यकारी सदस्य", 
    englishRole: "Executive Member", 
    department: "आरती व महाप्रसाद व्यवस्था", 
    photoId: "om",
    initials: "ओ. चौ.",
    motive: "दहाही दिवस नित्य काकड आरती, सांज आरती आणि महाप्रसादाची चोख व पवित्र व्यवस्था ठेवून सर्व भाविकांची निस्वार्थ सेवेने सेवा करणे.",
    instagram: {
      handle: "om__0527",
      url: "https://www.instagram.com/om__0527/",
      followers: "144",
      following: "162"
    }
  },
  { 
    name: "आशिष भोसले", 
    role: "कार्यकारी सदस्य", 
    englishRole: "Executive Member", 
    department: "मंडप व सजावट व्यवस्था", 
    photoId: "aashish",
    initials: "आ. भो.",
    motive: "भव्य आणि नयनरम्य रामायण देखावा, आकर्षक विद्युत रोषणाई व मंडप सजावटीच्या माध्यमातून बाप्पाचे स्वागत उत्साहात करणे.",
    instagram: {
      handle: "__king__aashish__",
      url: "https://www.instagram.com/__king__aashish__/",
      followers: "137",
      following: "135"
    }
  },
  { 
    name: "मंथन विश्वकर्मा", 
    role: "कार्यकारी सदस्य", 
    englishRole: "Executive Member", 
    department: "सुरक्षा व स्वयंसेवक समन्वय", 
    photoId: "manthan",
    initials: "मं. वि.",
    motive: "उत्सवाच्या संपूर्ण कालावधीत चोख सुरक्षा, स्वयंसेवकांचे सुयोग्य मार्गदर्शन आणि महिला व बाळगोपाळांसाठी सुरक्षित वातावरण राखणे.",
    instagram: {
      handle: "manthan_122_",
      url: "https://www.instagram.com/manthan_122_/",
      followers: "6",
      following: "36"
    }
  },
  { 
    name: "ओम अव्हाड", 
    role: "कार्यकारी सदस्य", 
    englishRole: "Executive Member", 
    department: "कार्यक्रम व क्रीडा संयोजन", 
    photoId: "om_avhad",
    initials: "ओ. अ.",
    motive: "क्रीडा स्पर्धा आणि विविध मनोरंजक मैदानी खेळांच्या आयोजनातून सोसायटीतील तरुणाईला एकत्र आणून संघभावना वाढवणे.",
    instagram: {
      handle: "omavhadd_",
      url: "https://www.instagram.com/omavhadd_/",
      followers: "344",
      following: "202"
    }
  },
  { 
    name: "नचिकेत बोडके", 
    role: "कार्यकारी सदस्य", 
    englishRole: "Executive Member", 
    department: "उत्सव व्यवस्था व समन्वय", 
    photoId: "nachiket",
    initials: "न. बो.",
    motive: "मंडळाच्या प्रत्येक विभागातील कार्यकर्त्यांमध्ये सुसंवाद साधून अनंत चतुर्दशी विसर्जन मिरवणूक भव्य व शिस्तबद्ध रीतीने यशस्वी करणे.",
    instagram: {
      handle: "mr.nachiket_7",
      url: "https://www.instagram.com/mr.nachiket_7/",
      followers: "348",
      following: "303"
    }
  }
];

