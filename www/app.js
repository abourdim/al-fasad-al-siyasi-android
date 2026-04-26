/* الفساد السياسي — POLITICAL CORRUPTION — app.js */
/* Based on "Al-Fasad Al-Siyasi" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الفساد السياسي',
    splashSub: 'في المجتمعات العربية والإسلامية',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة هود ١١: ١١٣',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabReform: 'الإصلاح',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الفساد السياسي',
    cardsDesc: '٢٠ بطاقة تكشف جذور الفساد وسبل مكافحته في ضوء الإسلام',
    reformTitle: 'طريق الإصلاح',
    reformDesc: 'كيف نبني مجتمعاً عادلاً خالياً من الفساد',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من الكتاب — بناء مواطن صالح',
    quizTitle: 'اختبر وعيك',
    quizDesc: 'هل تفهم جذور الفساد وسبل مكافحته؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية للعدل والإصلاح',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ فكرة اليوم',
    quizAgain: 'أعد الاختبار',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    quranLabel: 'القرآن الكريم',
    hadithLabel: 'الحديث الشريف',
    lessonLabel: '💡 الدرس',
    splashFeatures: [
      '٢٠ بطاقة عن الفساد السياسي',
      'طريق الإصلاح — حلول إسلامية',
      'عادات يومية لبناء مواطن صالح',
      'اختبار + أدعية'
    ],
  },
  en: {
    appTitle: 'Political Corruption',
    splashSub: 'In Arab and Islamic Societies',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Hud 11:113',
    tabHome: 'Home', tabCards: 'Cards', tabReform: 'Reform',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Political Corruption Cards',
    cardsDesc: '20 cards exposing the roots of corruption and how to fight it in the light of Islam',
    reformTitle: 'The Path of Reform',
    reformDesc: 'How to build a just society free from corruption',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by the book — building a righteous citizen',
    quizTitle: 'Test Your Awareness',
    quizDesc: 'Do you understand the roots of corruption and how to fight it?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Justice & Reform',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Insight',
    quizAgain: 'Retake Quiz',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    quranLabel: 'The Holy Quran',
    hadithLabel: 'Prophetic Hadith',
    lessonLabel: '💡 Lesson',
    splashFeatures: [
      '20 cards on political corruption',
      'The path of reform — Islamic solutions',
      'Daily habits for building good citizenship',
      'Quiz + duas'
    ],
  },
  fr: {
    appTitle: 'La Corruption Politique',
    splashSub: 'Dans les sociétés arabes et islamiques',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Hud 11:113',
    tabHome: 'Accueil', tabCards: 'Cartes', tabReform: 'Réforme',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes de la Corruption Politique',
    cardsDesc: '20 cartes exposant les racines de la corruption et comment la combattre à la lumière de l\'Islam',
    reformTitle: 'Le Chemin de la Réforme',
    reformDesc: 'Comment construire une société juste sans corruption',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspirées du livre — construire un citoyen vertueux',
    quizTitle: 'Testez Votre Conscience',
    quizDesc: 'Comprenez-vous les racines de la corruption et comment la combattre ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Justice et la Réforme',
    resetBtn: 'Réinitialiser',
    submitQuiz: 'Voir les Résultats',
    dailyLabel: '✨ Pensée du Jour',
    quizAgain: 'Refaire le Quiz',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours consécutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    quranLabel: 'Le Saint Coran',
    hadithLabel: 'Hadith Prophétique',
    lessonLabel: '💡 Leçon',
    splashFeatures: [
      '20 cartes sur la corruption politique',
      'Le chemin de la réforme — solutions islamiques',
      'Habitudes quotidiennes pour la citoyenneté',
      'Quiz + duas'
    ],
  }
};

// ═══════════════ CARDS DATA (20 cards) ═══════════════
const CARDS = [
  {
    id:1, emoji:'⚖️',
    ar:{title:'العدل أساس الملك',desc:'يشخّص الغزالي الفساد السياسي كسرطان دمّر الحضارة الإسلامية عبر القرون. العدل هو الركيزة الأولى لأي حكم ناجح. بدون عدل تسقط الدول مهما بلغت قوتها — لا نهضة تحت ظل ظالم.',quran:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',quranRef:'النحل ١٦: ٩٠',lesson:'العدل ليس خياراً بل واجب على كل حاكم ومحكوم'},
    en:{title:'Justice Is the Foundation of Rule',desc:'Al-Ghazali diagnoses: Justice is the first pillar of any successful governance. Without it, nations fall no matter how powerful they are.',quran:'"Indeed, God commands justice and good conduct"',quranRef:'An-Nahl 16:90',lesson:'Justice is not optional but a duty for every ruler and citizen'},
    fr:{title:'La Justice Est le Fondement du Pouvoir',desc:'Al-Ghazali diagnostique: La justice est le premier pilier de toute gouvernance réussie. Sans elle, les nations s\'effondrent peu importe leur puissance.',quran:'« Certes, Dieu commande la justice et la bienfaisance »',quranRef:'An-Nahl 16:90',lesson:'La justice n\'est pas optionnelle mais un devoir pour chaque gouvernant et citoyen'}
  },
  {
    id:2, emoji:'🏛️',
    ar:{title:'الشورى في الإسلام',desc:'يشخّص الغزالي: الشورى ليست زينة بل آلية حقيقية لصنع القرار. الحاكم الذي يستبد برأيه يسقط في فخ الفساد.',quran:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',quranRef:'الشورى ٤٢: ٣٨',lesson:'الشورى ضمانة ضد الاستبداد والفساد'},
    en:{title:'Consultation (Shura) in Islam',desc:'Al-Ghazali diagnoses: Consultation is not decoration but a real mechanism for decision-making. A ruler who monopolizes opinions falls into corruption.',quran:'"And their affairs are conducted by mutual consultation"',quranRef:'Ash-Shura 42:38',lesson:'Consultation is a guarantee against tyranny and corruption'},
    fr:{title:'La Consultation (Choura) en Islam',desc:'Al-Ghazali diagnostique: La consultation n\'est pas décorative mais un mécanisme réel de prise de décision. Un dirigeant qui monopolise les opinions tombe dans la corruption.',quran:'« Et leurs affaires se règlent par consultation mutuelle »',quranRef:'Ash-Shura 42:38',lesson:'La consultation est une garantie contre la tyrannie et la corruption'}
  },
  {
    id:3, emoji:'🔍',
    ar:{title:'المحاسبة والمراقبة',desc:'يشخّص الغزالي: كل مسؤول محاسب أمام الله ثم أمام الناس. غياب المحاسبة هو البيئة الخصبة للفساد.',quran:'كُلُّ نَفْسٍ بِمَا كَسَبَتْ رَهِينَةٌ',quranRef:'المدثر ٧٤: ٣٨',lesson:'المحاسبة ليست عداوة بل حماية للمجتمع'},
    en:{title:'Accountability and Oversight',desc:'Al-Ghazali diagnoses: Every official is accountable before God and then before the people. The absence of accountability is fertile ground for corruption.',quran:'"Every soul is held in pledge for what it earns"',quranRef:'Al-Muddathir 74:38',lesson:'Accountability is not hostility but protection for society'},
    fr:{title:'La Responsabilité et le Contrôle',desc:'Al-Ghazali diagnostique: Chaque responsable est redevable devant Dieu puis devant les gens. L\'absence de responsabilité est un terrain fertile pour la corruption.',quran:'« Chaque âme est otage de ce qu\'elle a acquis »',quranRef:'Al-Muddathir 74:38',lesson:'La responsabilité n\'est pas de l\'hostilité mais une protection pour la société'}
  },
  {
    id:4, emoji:'💰',
    ar:{title:'المال العام أمانة',desc:'يشخّص الغزالي: المال العام ليس ملكاً للحاكم بل أمانة يُسأل عنها. اختلاس المال العام من أكبر الكبائر.',quran:'إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا',quranRef:'النساء ٤: ٥٨',lesson:'حراسة المال العام واجب ديني قبل أن يكون قانونياً'},
    en:{title:'Public Funds Are a Trust',desc:'Al-Ghazali diagnoses: Public money does not belong to the ruler but is a trust they will be questioned about. Embezzling public funds is among the gravest sins.',quran:'"Indeed, God commands you to render trusts to their owners"',quranRef:'An-Nisa 4:58',lesson:'Guarding public funds is a religious duty before it is legal'},
    fr:{title:'Les Fonds Publics Sont un Dépôt',desc:'Al-Ghazali diagnostique: L\'argent public n\'appartient pas au dirigeant mais est un dépôt dont il sera questionné. Détourner les fonds publics est parmi les plus grands péchés.',quran:'« Certes, Dieu vous commande de remettre les dépôts à leurs propriétaires »',quranRef:'An-Nisa 4:58',lesson:'Protéger les fonds publics est un devoir religieux avant d\'être légal'}
  },
  {
    id:5, emoji:'🤝',
    ar:{title:'الرشوة سم المجتمع',desc:'يشخّص الغزالي: الرشوة تدمر العدل وتقتل الكفاءة وتنشر الفوضى. لعن رسول الله الراشي والمرتشي والرائش.',quran:'وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ',quranRef:'البقرة ٢: ١٨٨',lesson:'مقاومة الرشوة تبدأ من رفض دفعها وقبولها'},
    en:{title:'Bribery: Society\'s Poison',desc:'Al-Ghazali diagnoses: Bribery destroys justice, kills competence, and spreads chaos. The Prophet cursed the briber, the bribed, and the intermediary.',quran:'"And do not consume one another\'s wealth unjustly"',quranRef:'Al-Baqarah 2:188',lesson:'Fighting bribery starts with refusing to give or accept it'},
    fr:{title:'La Corruption : Poison de la Société',desc:'Al-Ghazali diagnostique: La corruption détruit la justice, tue la compétence et répand le chaos. Le Prophète a maudit le corrupteur, le corrompu et l\'intermédiaire.',quran:'« Et ne mangez pas vos biens entre vous injustement »',quranRef:'Al-Baqarah 2:188',lesson:'Combattre la corruption commence par refuser de la donner ou l\'accepter'}
  },
  {
    id:6, emoji:'👑',
    ar:{title:'الاستبداد أبو الفساد',desc:'يشخّص الغزالي: الاستبداد هو الأب الشرعي لكل أنواع الفساد. عندما يتركز القرار في يد واحدة، يغيب العدل.',quran:'وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ',quranRef:'هود ١١: ١١٣',lesson:'مقاومة الاستبداد واجب على كل مسلم'},
    en:{title:'Tyranny: The Father of Corruption',desc:'Al-Ghazali diagnoses: Tyranny is the legitimate father of all forms of corruption. When decision-making is concentrated in one hand, justice disappears.',quran:'"And do not incline toward those who do wrong, lest the Fire touch you"',quranRef:'Hud 11:113',lesson:'Resisting tyranny is a duty for every Muslim'},
    fr:{title:'La Tyrannie : Mère de la Corruption',desc:'Al-Ghazali diagnostique: La tyrannie est le père légitime de toutes les formes de corruption. Quand la décision est concentrée dans une seule main, la justice disparaît.',quran:'« Et ne vous penchez pas vers les injustes, sinon le Feu vous touchera »',quranRef:'Hud 11:113',lesson:'Résister à la tyrannie est un devoir pour chaque musulman'}
  },
  {
    id:7, emoji:'📜',
    ar:{title:'عمر بن الخطاب والعدل',desc:'عمر بن الخطاب رضي الله عنه ضرب أروع الأمثلة في العدل والمحاسبة. حاسب الولاة وراقب أموالهم وعزل من خان الأمانة.',quran:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ',quranRef:'النساء ٤: ١٣٥',lesson:'القائد العادل يحاسب نفسه قبل أن يحاسب غيره'},
    en:{title:'Umar ibn al-Khattab and Justice',desc:'Umar ibn al-Khattab set the finest examples in justice and accountability. He audited governors, monitored their wealth, and dismissed those who betrayed trust.',quran:'"O you who believe, be upholders of justice"',quranRef:'An-Nisa 4:135',lesson:'A just leader holds himself accountable before holding others'},
    fr:{title:'Omar ibn al-Khattab et la Justice',desc:'Omar ibn al-Khattab a donné les plus beaux exemples de justice et de responsabilité. Il contrôlait les gouverneurs, surveillait leurs richesses et destituait ceux qui trahissaient la confiance.',quran:'« Ô vous qui croyez, soyez fermes dans la justice »',quranRef:'An-Nisa 4:135',lesson:'Un leader juste se juge lui-même avant de juger les autres'}
  },
  {
    id:8, emoji:'🗳️',
    ar:{title:'حق الأمة في الاختيار',desc:'الأمة هي صاحبة السلطة الحقيقية. الحاكم وكيل عن الأمة وليس مالكاً لها.',quran:'وَشَاوِرْهُمْ فِي الْأَمْرِ',quranRef:'آل عمران ٣: ١٥٩',lesson:'اختيار الحاكم حق أصيل للأمة لا يجوز مصادرته'},
    en:{title:'The Nation\'s Right to Choose',desc:'The nation is the true holder of authority. The ruler is a representative of the nation, not its owner.',quran:'"And consult them in the matter"',quranRef:'Aal Imran 3:159',lesson:'Choosing the ruler is an inherent right of the nation that cannot be confiscated'},
    fr:{title:'Le Droit de la Nation de Choisir',desc:'La nation est la véritable détentrice de l\'autorité. Le dirigeant est un représentant de la nation, pas son propriétaire.',quran:'« Et consulte-les dans l\'affaire »',quranRef:'Aal Imran 3:159',lesson:'Choisir le dirigeant est un droit inhérent de la nation qui ne peut être confisqué'}
  },
  {
    id:9, emoji:'🎭',
    ar:{title:'النفاق السياسي',desc:'النفاق السياسي أخطر من النفاق الفردي. عندما يتظاهر الحاكم بالإصلاح وهو يسرق، يفقد الشعب الثقة في كل شيء.',quran:'وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ',quranRef:'البقرة ٢: ١١',lesson:'فضح النفاق السياسي مسؤولية كل مواطن'},
    en:{title:'Political Hypocrisy',desc:'Political hypocrisy is more dangerous than individual hypocrisy. When a ruler pretends to reform while stealing, people lose trust in everything.',quran:'"When told not to spread corruption on earth, they say we are only reformers"',quranRef:'Al-Baqarah 2:11',lesson:'Exposing political hypocrisy is every citizen\'s responsibility'},
    fr:{title:'L\'Hypocrisie Politique',desc:'L\'hypocrisie politique est plus dangereuse que l\'hypocrisie individuelle. Quand un dirigeant prétend réformer tout en volant, le peuple perd confiance en tout.',quran:'« Quand on leur dit ne semez pas la corruption, ils disent nous ne sommes que des réformateurs »',quranRef:'Al-Baqarah 2:11',lesson:'Dénoncer l\'hypocrisie politique est la responsabilité de chaque citoyen'}
  },
  {
    id:10, emoji:'⚔️',
    ar:{title:'الظلم مؤذن بخراب العمران',desc:'ابن خلدون أكد أن الظلم يدمر الحضارات. التاريخ شاهد: كل أمة ظلمت سقطت.',quran:'وَكَذَٰلِكَ أَخْذُ رَبِّكَ إِذَا أَخَذَ الْقُرَىٰ وَهِيَ ظَالِمَةٌ',quranRef:'هود ١١: ١٠٢',lesson:'الظلم ليس قوة بل بداية النهاية'},
    en:{title:'Oppression Heralds Civilization\'s Fall',desc:'Ibn Khaldun confirmed that oppression destroys civilizations. History testifies: every nation that oppressed eventually fell.',quran:'"Such is the seizure of your Lord when He seizes the towns while they are unjust"',quranRef:'Hud 11:102',lesson:'Oppression is not strength but the beginning of the end'},
    fr:{title:'L\'Oppression Annonce la Chute des Civilisations',desc:'Ibn Khaldoun a confirmé que l\'oppression détruit les civilisations. L\'histoire témoigne : chaque nation qui a opprimé a fini par tomber.',quran:'« Telle est la saisie de ton Seigneur quand Il saisit les cités injustes »',quranRef:'Hud 11:102',lesson:'L\'oppression n\'est pas une force mais le début de la fin'}
  },
  {
    id:11, emoji:'📢',
    ar:{title:'الأمر بالمعروف والنهي عن المنكر',desc:'السكوت عن الفساد مشاركة فيه. المسلم مطالب بمقاومة المنكر بيده ولسانه وقلبه.',quran:'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ',quranRef:'آل عمران ٣: ١١٠',lesson:'السكوت عن الظلم ظلم في حد ذاته'},
    en:{title:'Commanding Good and Forbidding Evil',desc:'Silence in the face of corruption is participation in it. Muslims must resist wrongdoing with their hand, tongue, and heart.',quran:'"You are the best nation produced for mankind; you enjoin good and forbid evil"',quranRef:'Aal Imran 3:110',lesson:'Silence in the face of injustice is itself injustice'},
    fr:{title:'Ordonner le Bien et Interdire le Mal',desc:'Le silence face à la corruption est une participation. Les musulmans doivent résister au mal par la main, la langue et le cœur.',quran:'« Vous êtes la meilleure nation suscitée pour les gens ; vous ordonnez le bien et interdisez le mal »',quranRef:'Aal Imran 3:110',lesson:'Le silence face à l\'injustice est lui-même une injustice'}
  },
  {
    id:12, emoji:'🏫',
    ar:{title:'التعليم سلاح ضد الفساد',desc:'الجهل هو حليف الفساد الأول. التعليم الحقيقي يصنع مواطنين واعين قادرين على محاسبة حكامهم.',quran:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',quranRef:'الزمر ٣٩: ٩',lesson:'تعليم الناس حقوقهم هو أول خطوة للإصلاح'},
    en:{title:'Education: A Weapon Against Corruption',desc:'Ignorance is corruption\'s first ally. True education creates aware citizens capable of holding their rulers accountable.',quran:'"Are those who know equal to those who do not know?"',quranRef:'Az-Zumar 39:9',lesson:'Teaching people their rights is the first step toward reform'},
    fr:{title:'L\'Éducation : Arme Contre la Corruption',desc:'L\'ignorance est le premier allié de la corruption. L\'éducation véritable crée des citoyens conscients capables de demander des comptes.',quran:'« Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ? »',quranRef:'Az-Zumar 39:9',lesson:'Enseigner aux gens leurs droits est le premier pas vers la réforme'}
  },
  {
    id:13, emoji:'🕌',
    ar:{title:'فصل الدين عن الأخلاق',desc:'من أخطر أسباب الفساد فصل الدين عن الحياة العامة. عندما يغيب الوازع الديني تنهار المنظومة الأخلاقية.',quran:'أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ وَمَنْ أَحْسَنُ مِنَ اللَّهِ حُكْمًا',quranRef:'المائدة ٥: ٥٠',lesson:'الأخلاق بدون إيمان بناء بلا أساس'},
    en:{title:'Separating Religion from Ethics',desc:'One of the most dangerous causes of corruption is separating religion from public life. When religious conscience disappears, the moral system collapses.',quran:'"Do they seek the judgment of ignorance? And who is better than God in judgment?"',quranRef:'Al-Ma\'idah 5:50',lesson:'Ethics without faith is a building without a foundation'},
    fr:{title:'Séparer la Religion de l\'Éthique',desc:'L\'une des causes les plus dangereuses de la corruption est la séparation de la religion de la vie publique. Quand la conscience religieuse disparaît, le système moral s\'effondre.',quran:'« Recherchent-ils le jugement de l\'ignorance ? Et qui est meilleur que Dieu en jugement ? »',quranRef:'Al-Ma\'idah 5:50',lesson:'L\'éthique sans foi est un bâtiment sans fondation'}
  },
  {
    id:14, emoji:'🌍',
    ar:{title:'الفساد ليس قدراً',desc:'يظن البعض أن الفساد طبيعة بشرية لا مفر منها. هذا خطأ. الإسلام أقام دولة نظيفة في عهد الخلفاء الراشدين.',quran:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',quranRef:'الرعد ١٣: ١١',lesson:'التغيير يبدأ من الداخل — من إرادة كل فرد'},
    en:{title:'Corruption Is Not Destiny',desc:'Some think corruption is an inescapable human nature. This is wrong. Islam established a clean state during the Rightly Guided Caliphs.',quran:'"Indeed, God will not change the condition of a people until they change what is in themselves"',quranRef:'Ar-Ra\'d 13:11',lesson:'Change starts from within — from each individual\'s will'},
    fr:{title:'La Corruption N\'est Pas une Fatalité',desc:'Certains pensent que la corruption est une nature humaine inévitable. C\'est faux. L\'Islam a établi un État propre sous les Califes Bien-Guidés.',quran:'« Certes, Dieu ne change pas la condition d\'un peuple tant qu\'il ne change pas ce qui est en lui-même »',quranRef:'Ar-Ra\'d 13:11',lesson:'Le changement commence de l\'intérieur — de la volonté de chaque individu'}
  },
  {
    id:15, emoji:'⛓️',
    ar:{title:'التبعية للغرب',desc:'التبعية الفكرية والسياسية للغرب أضعفت المجتمعات الإسلامية. الحل ليس في استيراد النماذج بل في بناء نموذج إسلامي أصيل.',quran:'وَلَن تَرْضَىٰ عَنكَ الْيَهُودُ وَلَا النَّصَارَىٰ حَتَّىٰ تَتَّبِعَ مِلَّتَهُمْ',quranRef:'البقرة ٢: ١٢٠',lesson:'الاستقلال الفكري أساس الاستقلال السياسي'},
    en:{title:'Dependence on the West',desc:'Intellectual and political dependence on the West has weakened Islamic societies. The solution is not importing models but building an authentic Islamic model.',quran:'"Never will the Jews or Christians be satisfied with you until you follow their way"',quranRef:'Al-Baqarah 2:120',lesson:'Intellectual independence is the foundation of political independence'},
    fr:{title:'La Dépendance Envers l\'Occident',desc:'La dépendance intellectuelle et politique envers l\'Occident a affaibli les sociétés islamiques. La solution n\'est pas d\'importer des modèles mais de construire un modèle islamique authentique.',quran:'« Ni les juifs ni les chrétiens ne seront satisfaits de toi tant que tu ne suivras pas leur voie »',quranRef:'Al-Baqarah 2:120',lesson:'L\'indépendance intellectuelle est le fondement de l\'indépendance politique'}
  },
  {
    id:16, emoji:'🧑‍⚖️',
    ar:{title:'استقلال القضاء',desc:'القضاء المستقل هو حارس العدالة. عندما يخضع القاضي للسلطة السياسية، يصبح الظلم مُقنّناً.',quran:'وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ',quranRef:'النساء ٤: ٥٨',lesson:'قاضٍ مستقل واحد خير من ألف قانون مكتوب'},
    en:{title:'Independence of the Judiciary',desc:'An independent judiciary is the guardian of justice. When judges submit to political authority, injustice becomes institutionalized.',quran:'"And when you judge between people, judge with justice"',quranRef:'An-Nisa 4:58',lesson:'One independent judge is better than a thousand written laws'},
    fr:{title:'L\'Indépendance du Pouvoir Judiciaire',desc:'Un pouvoir judiciaire indépendant est le gardien de la justice. Quand les juges se soumettent au pouvoir politique, l\'injustice devient institutionnalisée.',quran:'« Et quand vous jugez entre les gens, jugez avec justice »',quranRef:'An-Nisa 4:58',lesson:'Un juge indépendant vaut mieux que mille lois écrites'}
  },
  {
    id:17, emoji:'📰',
    ar:{title:'حرية التعبير والصحافة',desc:'حرية التعبير هي أداة الرقابة الشعبية. تكميم الأفواه يحمي الفاسدين ويقتل الإصلاح.',quran:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ',quranRef:'المائدة ٥: ٨',lesson:'صحافة حرة = حكومة نظيفة'},
    en:{title:'Freedom of Expression and Press',desc:'Freedom of expression is the tool of popular oversight. Silencing voices protects the corrupt and kills reform.',quran:'"O you who believe, be steadfast for God as witnesses in justice"',quranRef:'Al-Ma\'idah 5:8',lesson:'Free press = clean government'},
    fr:{title:'La Liberté d\'Expression et de la Presse',desc:'La liberté d\'expression est l\'outil du contrôle populaire. Bâillonner les voix protège les corrompus et tue la réforme.',quran:'« Ô vous qui croyez, soyez fermes pour Dieu comme témoins de justice »',quranRef:'Al-Ma\'idah 5:8',lesson:'Presse libre = gouvernement propre'}
  },
  {
    id:18, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'الفساد يبدأ من الأسرة',desc:'التربية الفاسدة تنتج مواطنين فاسدين. إصلاح الأسرة هو إصلاح المجتمع.',quran:'يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا',quranRef:'التحريم ٦٦: ٦',lesson:'إصلاح الأسرة هو أول لبنة في إصلاح المجتمع'},
    en:{title:'Corruption Starts in the Family',desc:'Corrupt upbringing produces corrupt citizens. Reforming the family means reforming society.',quran:'"O you who believe, protect yourselves and your families from a Fire"',quranRef:'At-Tahrim 66:6',lesson:'Reforming the family is the first brick in reforming society'},
    fr:{title:'La Corruption Commence dans la Famille',desc:'Une éducation corrompue produit des citoyens corrompus. Réformer la famille, c\'est réformer la société.',quran:'« Ô vous qui croyez, protégez-vous et vos familles d\'un Feu »',quranRef:'At-Tahrim 66:6',lesson:'Réformer la famille est la première brique de la réforme de la société'}
  },
  {
    id:19, emoji:'🌱',
    ar:{title:'الإصلاح التدريجي',desc:'الإصلاح الحقيقي لا يأتي بالثورات العنيفة بل بالعمل المتواصل والتربية الصالحة.',quran:'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',quranRef:'النحل ١٦: ١٢٥',lesson:'الإصلاح يحتاج صبراً وحكمة لا عنفاً وتسرعاً'},
    en:{title:'Gradual Reform',desc:'True reform does not come through violent revolutions but through continuous work and righteous upbringing.',quran:'"Invite to the way of your Lord with wisdom and good counsel"',quranRef:'An-Nahl 16:125',lesson:'Reform needs patience and wisdom, not violence and haste'},
    fr:{title:'La Réforme Graduelle',desc:'La vraie réforme ne vient pas par les révolutions violentes mais par le travail continu et l\'éducation vertueuse.',quran:'« Appelle au chemin de ton Seigneur avec sagesse et bonne exhortation »',quranRef:'An-Nahl 16:125',lesson:'La réforme a besoin de patience et de sagesse, pas de violence et de hâte'}
  },
  {
    id:20, emoji:'🕊️',
    ar:{title:'نحو مجتمع نظيف',desc:'المجتمع النظيف يبدأ من فرد نظيف. كل واحد منا مسؤول عن مقاومة الفساد في موقعه.',quran:'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ',quranRef:'التوبة ٩: ١٠٥',lesson:'كن أنت التغيير الذي تريد أن تراه في مجتمعك'},
    en:{title:'Toward a Clean Society',desc:'A clean society starts with a clean individual. Each one of us is responsible for fighting corruption in their own position.',quran:'"And say: Work, for God will see your work, and His Messenger, and the believers"',quranRef:'At-Tawbah 9:105',lesson:'Be the change you want to see in your society'},
    fr:{title:'Vers une Société Propre',desc:'Une société propre commence par un individu propre. Chacun de nous est responsable de combattre la corruption à son niveau.',quran:'« Et dis : Œuvrez, car Dieu verra vos œuvres, ainsi que Son Messager et les croyants »',quranRef:'At-Tawbah 9:105',lesson:'Soyez le changement que vous voulez voir dans votre société'}
  },
  {
    id:21, emoji:'🏫',
    ar:{title:'الفساد في التعليم',desc:'فساد التعليم من أخطر أنواع الفساد لأنه يصنع أجيالاً جاهلة خاضعة. حين يُفسد المنهج يُفسد العقل.',quran:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',quranRef:'الزمر ٣٩: ٩',lesson:'إصلاح التعليم هو إصلاح المستقبل'},
    en:{title:'Corruption in Education',desc:'Educational corruption is among the most dangerous because it produces ignorant, submissive generations. When the curriculum is corrupted, the mind is corrupted.',quran:'"Are those who know equal to those who do not know?"',quranRef:'Az-Zumar 39:9',lesson:'Reforming education means reforming the future'},
    fr:{title:'La Corruption dans l\'Éducation',desc:'La corruption éducative est parmi les plus dangereuses car elle produit des générations ignorantes et soumises. Quand le programme est corrompu, l\'esprit est corrompu.',quran:'« Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ? »',quranRef:'Az-Zumar 39:9',lesson:'Réformer l\'éducation, c\'est réformer l\'avenir'}
  },
  {
    id:22, emoji:'📺',
    ar:{title:'الفساد في الإعلام',desc:'الإعلام الفاسد يحوّل الحق باطلاً والباطل حقاً. يصنع أبطالاً مزيفين ويطمس صوت المظلومين.',quran:'وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ',quranRef:'البقرة ٢: ٤٢',lesson:'الإعلام النزيه مرآة المجتمع الصادقة'},
    en:{title:'Corruption in Media',desc:'Corrupt media turns truth into falsehood and falsehood into truth. It creates fake heroes and silences the voice of the oppressed.',quran:'"And do not mix truth with falsehood or conceal the truth while you know it"',quranRef:'Al-Baqarah 2:42',lesson:'Honest media is society\'s true mirror'},
    fr:{title:'La Corruption dans les Médias',desc:'Les médias corrompus transforment la vérité en mensonge et le mensonge en vérité. Ils créent de faux héros et étouffent la voix des opprimés.',quran:'« Et ne mêlez pas la vérité au mensonge et ne cachez pas la vérité alors que vous savez »',quranRef:'Al-Baqarah 2:42',lesson:'Les médias honnêtes sont le vrai miroir de la société'}
  },
  {
    id:23, emoji:'🛡️',
    ar:{title:'حماية المبلّغين عن الفساد',desc:'من يكشف الفساد بطل لا مجرم. حمايته واجب شرعي وقانوني. المجتمع الذي يعاقب كاشف الفساد يحمي الفاسدين.',quran:'وَالَّذِينَ إِذَا أَصَابَهُمُ الْبَغْيُ هُمْ يَنتَصِرُونَ',quranRef:'الشورى ٤٢: ٣٩',lesson:'حماية المبلّغ حماية للمجتمع كله'},
    en:{title:'Whistleblower Protection',desc:'Those who expose corruption are heroes, not criminals. Protecting them is a religious and legal duty. A society that punishes whistleblowers protects the corrupt.',quran:'"And those who, when tyranny strikes them, they defend themselves"',quranRef:'Ash-Shura 42:39',lesson:'Protecting whistleblowers protects the entire society'},
    fr:{title:'La Protection des Lanceurs d\'Alerte',desc:'Ceux qui dénoncent la corruption sont des héros, pas des criminels. Les protéger est un devoir religieux et légal. Une société qui punit les lanceurs d\'alerte protège les corrompus.',quran:'« Et ceux qui, lorsqu\'ils sont frappés par la tyrannie, se défendent »',quranRef:'Ash-Shura 42:39',lesson:'Protéger les lanceurs d\'alerte protège toute la société'}
  },
  {
    id:24, emoji:'🔍',
    ar:{title:'آليات الشفافية',desc:'الشفافية عدو الفساد الأول. حين تكون الحسابات مكشوفة والقرارات علنية يتراجع الفساد. الرقابة الشعبية أقوى من كل الأجهزة.',quran:'إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا',quranRef:'النساء ٤: ١',lesson:'الشفافية نور يطرد ظلمة الفساد'},
    en:{title:'Transparency Mechanisms',desc:'Transparency is corruption\'s primary enemy. When accounts are open and decisions are public, corruption retreats. Popular oversight is stronger than all agencies.',quran:'"Indeed, God is ever a Watcher over you"',quranRef:'An-Nisa 4:1',lesson:'Transparency is a light that drives away the darkness of corruption'},
    fr:{title:'Les Mécanismes de Transparence',desc:'La transparence est le premier ennemi de la corruption. Quand les comptes sont ouverts et les décisions publiques, la corruption recule. Le contrôle populaire est plus fort que toutes les agences.',quran:'« Dieu est certes un Observateur sur vous »',quranRef:'An-Nisa 4:1',lesson:'La transparence est une lumière qui chasse les ténèbres de la corruption'}
  },
  {
    id:25, emoji:'🌟',
    ar:{title:'قصص نجاح الإصلاح',desc:'التاريخ الإسلامي مليء بقصص إصلاح ناجحة. عمر بن عبد العزيز حوّل الخلافة من استبداد إلى عدل في سنتين. الإصلاح ممكن دائماً.',quran:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',quranRef:'الرعد ١٣: ١١',lesson:'الإصلاح يبدأ بإرادة صادقة وعمل مستمر'},
    en:{title:'Reform Success Stories',desc:'Islamic history is full of successful reform stories. Umar ibn Abd al-Aziz transformed the caliphate from tyranny to justice in two years. Reform is always possible.',quran:'"Indeed, God will not change the condition of a people until they change what is in themselves"',quranRef:'Ar-Ra\'d 13:11',lesson:'Reform begins with sincere will and continuous work'},
    fr:{title:'Histoires de Réussite des Réformes',desc:'L\'histoire islamique regorge d\'histoires de réformes réussies. Umar ibn Abd al-Aziz a transformé le califat de la tyrannie à la justice en deux ans. La réforme est toujours possible.',quran:'« Dieu ne change pas la condition d\'un peuple tant qu\'ils ne changent pas ce qui est en eux-mêmes »',quranRef:'Ar-Ra\'d 13:11',lesson:'La réforme commence par une volonté sincère et un travail continu'}
  },
  {
    id:26, emoji:'🏦',
    ar:{title:'الفساد المالي والبنوك',desc:'النظام المالي الفاسد يسهّل غسل الأموال وتهريبها. الشفافية المالية والرقابة المستقلة أساس محاربة الفساد المالي.',quran:'وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ',quranRef:'البقرة ٢: ١٨٨',lesson:'المال العام أمانة لا غنيمة'},
    en:{title:'Financial Corruption and Banks',desc:'A corrupt financial system facilitates money laundering and smuggling. Financial transparency and independent oversight are the foundation of fighting financial corruption.',quran:'"And do not consume one another\'s wealth unjustly"',quranRef:'Al-Baqarah 2:188',lesson:'Public funds are a trust, not spoils'},
    fr:{title:'La Corruption Financière et les Banques',desc:'Un système financier corrompu facilite le blanchiment d\'argent et la contrebande. La transparence financière et la surveillance indépendante sont le fondement de la lutte contre la corruption.',quran:'« Et ne mangez pas vos biens entre vous injustement »',quranRef:'Al-Baqarah 2:188',lesson:'Les fonds publics sont un dépôt, pas un butin'}
  },
  {
    id:27, emoji:'⚖️',
    ar:{title:'العدالة الانتقائية',desc:'أخطر أنواع الفساد القضائي هو العدالة الانتقائية: تطبيق القانون على الفقراء والضعفاء وتعطيله أمام الأقوياء.',quran:'يَا دَاوُودُ إِنَّا جَعَلْنَاكَ خَلِيفَةً فِي الْأَرْضِ فَاحْكُم بَيْنَ النَّاسِ بِالْحَقِّ',quranRef:'ص ٣٨: ٢٦',lesson:'القانون إما أن يطبّق على الجميع أو لا يُحترم من أحد'},
    en:{title:'Selective Justice',desc:'The most dangerous type of judicial corruption is selective justice: applying the law to the poor and weak while suspending it before the powerful.',quran:'"O David, indeed We have made you a successor upon the earth, so judge between the people in truth"',quranRef:'Sad 38:26',lesson:'The law must either apply to all or it will be respected by none'},
    fr:{title:'La Justice Sélective',desc:'Le type le plus dangereux de corruption judiciaire est la justice sélective : appliquer la loi aux pauvres et aux faibles tout en la suspendant devant les puissants.',quran:'« Ô David, Nous avons fait de toi un successeur sur terre, juge donc entre les gens en vérité »',quranRef:'Sad 38:26',lesson:'La loi doit soit s\'appliquer à tous, soit elle ne sera respectée par personne'}
  },
  {
    id:28, emoji:'🌐',
    ar:{title:'الفساد العابر للحدود',desc:'الفساد لم يعد محلياً. الأموال المنهوبة تُهرّب عبر الحدود وتُخفى في بنوك دولية. محاربة الفساد تحتاج تعاوناً دولياً.',quran:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ',quranRef:'المائدة ٥: ٢',lesson:'مكافحة الفساد مسؤولية عالمية مشتركة'},
    en:{title:'Cross-Border Corruption',desc:'Corruption is no longer local. Looted funds are smuggled across borders and hidden in international banks. Fighting corruption requires international cooperation.',quran:'"And cooperate in righteousness and piety, and do not cooperate in sin and aggression"',quranRef:'Al-Maidah 5:2',lesson:'Fighting corruption is a shared global responsibility'},
    fr:{title:'La Corruption Transfrontalière',desc:'La corruption n\'est plus locale. Les fonds pillés sont transférés à travers les frontières et cachés dans des banques internationales. Combattre la corruption nécessite une coopération internationale.',quran:'« Et coopérez dans la piété et la vertu, et ne coopérez pas dans le péché et l\'agression »',quranRef:'Al-Maidah 5:2',lesson:'La lutte contre la corruption est une responsabilité mondiale partagée'}
  },
  {
    id:29, emoji:'🗳️',
    ar:{title:'الفساد الانتخابي',desc:'تزوير الانتخابات وشراء الأصوات من أشد أنواع الفساد. الشورى الحقيقية تعني أن يختار الناس من يمثلهم بحرية.',quran:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',quranRef:'الشورى ٤٢: ٣٨',lesson:'الشورى الحقيقية لا تكون مع التزوير'},
    en:{title:'Electoral Corruption',desc:'Election rigging and vote buying are among the worst types of corruption. True consultation means people freely choose who represents them.',quran:'"And whose affair is determined by consultation among themselves"',quranRef:'Ash-Shura 42:38',lesson:'True consultation cannot coexist with fraud'},
    fr:{title:'La Corruption Électorale',desc:'La fraude électorale et l\'achat de voix sont parmi les pires types de corruption. La vraie consultation signifie que les gens choisissent librement qui les représente.',quran:'« Et dont l\'affaire est consultation entre eux »',quranRef:'Ash-Shura 42:38',lesson:'La vraie consultation ne peut coexister avec la fraude'}
  },
  {
    id:30, emoji:'📱',
    ar:{title:'التكنولوجيا ومكافحة الفساد',desc:'التكنولوجيا الحديثة سلاح ذو حدين: يمكن أن تُستخدم لكشف الفساد من خلال الشفافية الرقمية، أو لتعزيزه من خلال المراقبة والقمع.',quran:'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ',quranRef:'التوبة ٩: ١٠٥',lesson:'استخدم التكنولوجيا لنشر الحق لا لقمعه'},
    en:{title:'Technology and Fighting Corruption',desc:'Modern technology is a double-edged sword: it can be used to expose corruption through digital transparency, or to strengthen it through surveillance and repression.',quran:'"And say: Work, for God will see your work"',quranRef:'At-Tawbah 9:105',lesson:'Use technology to spread truth, not to suppress it'},
    fr:{title:'La Technologie et la Lutte Contre la Corruption',desc:'La technologie moderne est une arme à double tranchant : elle peut être utilisée pour exposer la corruption par la transparence numérique, ou pour la renforcer par la surveillance et la répression.',quran:'« Et dis : Œuvrez, car Dieu verra vos œuvres »',quranRef:'At-Tawbah 9:105',lesson:'Utilisez la technologie pour répandre la vérité, pas pour la supprimer'}
  },
  {
    id:31, emoji:'🎭',
    ar:{title:'الفساد الأخلاقي',desc:'الفساد لا يقتصر على المال والسياسة. الفساد الأخلاقي — الكذب والنفاق والتملق — هو الأرضية التي ينمو عليها كل فساد آخر.',quran:'يَا أَيُّهَا الَّذِينَ آمَنُوا لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ',quranRef:'الصف ٦١: ٢',lesson:'إصلاح الأخلاق هو إصلاح كل شيء'},
    en:{title:'Moral Corruption',desc:'Corruption is not limited to money and politics. Moral corruption — lying, hypocrisy, and flattery — is the ground on which all other corruption grows.',quran:'"O you who believe, why do you say what you do not do?"',quranRef:'As-Saff 61:2',lesson:'Reforming morals is reforming everything'},
    fr:{title:'La Corruption Morale',desc:'La corruption ne se limite pas à l\'argent et à la politique. La corruption morale — mensonge, hypocrisie et flatterie — est le terrain sur lequel toute autre corruption pousse.',quran:'« Ô vous qui croyez, pourquoi dites-vous ce que vous ne faites pas ? »',quranRef:'As-Saff 61:2',lesson:'Réformer les moeurs, c\'est réformer tout'}
  },
  {
    id:32, emoji:'🏥',
    ar:{title:'الفساد في القطاع الصحي',desc:'حين يُفسد القطاع الصحي يموت الفقراء لعدم قدرتهم على العلاج. الصحة حق لكل إنسان لا سلعة تُباع.',quran:'وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا',quranRef:'المائدة ٥: ٣٢',lesson:'صحة الإنسان أمانة لا تجارة'},
    en:{title:'Corruption in Healthcare',desc:'When the healthcare sector is corrupted, the poor die because they cannot afford treatment. Health is a right for every person, not a commodity to be sold.',quran:'"And whoever saves one, it is as if they have saved mankind entirely"',quranRef:'Al-Maidah 5:32',lesson:'Human health is a trust, not a business'},
    fr:{title:'La Corruption dans la Santé',desc:'Quand le secteur de la santé est corrompu, les pauvres meurent faute de pouvoir se soigner. La santé est un droit pour chaque personne, pas une marchandise.',quran:'« Et quiconque sauve une vie, c\'est comme s\'il avait sauvé l\'humanité entière »',quranRef:'Al-Maidah 5:32',lesson:'La santé humaine est un dépôt, pas un commerce'}
  },
  {
    id:33, emoji:'📖',
    ar:{title:'القرآن ومحاربة الفساد',desc:'القرآن مليء بالآيات التي تحذر من الفساد وتأمر بالإصلاح. قصص الأنبياء كلها صراع بين الإصلاح والفساد.',quran:'وَإِذَا تَوَلَّىٰ سَعَىٰ فِي الْأَرْضِ لِيُفْسِدَ فِيهَا',quranRef:'البقرة ٢: ٢٠٥',lesson:'القرآن كتاب إصلاح وعدل'},
    en:{title:'The Quran and Fighting Corruption',desc:'The Quran is filled with verses that warn against corruption and command reform. The stories of the prophets are all a struggle between reform and corruption.',quran:'"And when he turns away, he strives throughout the land to cause corruption therein"',quranRef:'Al-Baqarah 2:205',lesson:'The Quran is a book of reform and justice'},
    fr:{title:'Le Coran et la Lutte Contre la Corruption',desc:'Le Coran est rempli de versets qui mettent en garde contre la corruption et ordonnent la réforme. Les histoires des prophètes sont toutes une lutte entre réforme et corruption.',quran:'« Et quand il tourne le dos, il s\'efforce de semer le désordre sur terre »',quranRef:'Al-Baqarah 2:205',lesson:'Le Coran est un livre de réforme et de justice'}
  },
  {
    id:34, emoji:'👨‍⚖️',
    ar:{title:'القضاء في الإسلام',desc:'القضاء المستقل العادل من أهم مؤسسات الدولة الإسلامية. القاضي لا يخضع لأحد إلا لله والحق.',quran:'وَأَنِ احْكُم بَيْنَهُم بِمَا أَنزَلَ اللَّهُ وَلَا تَتَّبِعْ أَهْوَاءَهُمْ',quranRef:'المائدة ٥: ٤٩',lesson:'القاضي العادل في ظل الله يوم القيامة'},
    en:{title:'Judiciary in Islam',desc:'An independent and just judiciary is among the most important institutions of the Islamic state. The judge submits to no one but God and truth.',quran:'"And judge between them by what God has revealed and do not follow their inclinations"',quranRef:'Al-Maidah 5:49',lesson:'The just judge will be in God\'s shade on the Day of Judgment'},
    fr:{title:'La Justice en Islam',desc:'Un pouvoir judiciaire indépendant et juste est parmi les institutions les plus importantes de l\'État islamique. Le juge ne se soumet à personne sauf à Dieu et à la vérité.',quran:'« Et juge entre eux selon ce que Dieu a révélé et ne suis pas leurs passions »',quranRef:'Al-Maidah 5:49',lesson:'Le juge juste sera à l\'ombre de Dieu au Jour du Jugement'}
  },
  {
    id:35, emoji:'🌍',
    ar:{title:'الفساد والتنمية',desc:'الفساد يقتل التنمية. كل ريال يُسرق من المال العام هو مدرسة لم تُبنَ ومستشفى لم يُفتح وطريق لم يُعبَّد.',quran:'ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ',quranRef:'الروم ٣٠: ٤١',lesson:'لا تنمية حقيقية مع الفساد'},
    en:{title:'Corruption and Development',desc:'Corruption kills development. Every riyal stolen from public funds is a school unbuilt, a hospital unopened, and a road unpaved.',quran:'"Corruption has appeared throughout the land and sea by reason of what the hands of people have earned"',quranRef:'Ar-Rum 30:41',lesson:'There is no real development with corruption'},
    fr:{title:'La Corruption et le Développement',desc:'La corruption tue le développement. Chaque riyal volé des fonds publics est une école non construite, un hôpital non ouvert et une route non pavée.',quran:'« La corruption est apparue sur terre et en mer à cause de ce que les mains des gens ont acquis »',quranRef:'Ar-Rum 30:41',lesson:'Il n\'y a pas de vrai développement avec la corruption'}
  }
];

// ═══════════════ REFORM DATA ═══════════════
const REFORM_DATA = [
  { emoji:'🏗️',
    ar:{title:'بناء المؤسسات',problem:'غياب المؤسسات القوية يترك الباب مفتوحاً للفساد الفردي',solution:'بناء مؤسسات مستقلة للرقابة والمحاسبة — مستوحاة من نظام الحسبة في الإسلام',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ',verseRef:'المائدة ٥: ٢'},
    en:{title:'Building Institutions',problem:'The absence of strong institutions leaves the door open for individual corruption',solution:'Build independent institutions for oversight and accountability — inspired by the Hisbah system in Islam',verse:'"And cooperate in righteousness and piety, and do not cooperate in sin and aggression"',verseRef:'Al-Ma\'idah 5:2'},
    fr:{title:'Construire les Institutions',problem:'L\'absence d\'institutions fortes laisse la porte ouverte à la corruption individuelle',solution:'Construire des institutions indépendantes de contrôle et de responsabilité — inspirées du système Hisba en Islam',verse:'« Coopérez dans la piété et la vertu, et ne coopérez pas dans le péché et l\'agression »',verseRef:'Al-Ma\'idah 5:2'}
  },
  { emoji:'📖',
    ar:{title:'التربية على النزاهة',problem:'غياب التربية الأخلاقية ينتج أجيالاً لا تميز بين الحلال والحرام',solution:'تعليم الأطفال قيم الأمانة والعدل من الصغر — القدوة قبل الكلام',verse:'وَنَفْسٍ وَمَا سَوَّاهَا ۝ فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا',verseRef:'الشمس ٩١: ٧-٨'},
    en:{title:'Education in Integrity',problem:'The absence of moral education produces generations that cannot distinguish right from wrong',solution:'Teach children values of trustworthiness and justice from a young age — example before words',verse:'"And by the soul and He who proportioned it, then He inspired it with its wickedness and its righteousness"',verseRef:'Ash-Shams 91:7-8'},
    fr:{title:'L\'Éducation à l\'Intégrité',problem:'L\'absence d\'éducation morale produit des générations qui ne distinguent pas le bien du mal',solution:'Enseigner aux enfants les valeurs d\'honnêteté et de justice dès leur jeune âge — l\'exemple avant les mots',verse:'« Par l\'âme et Celui qui l\'a harmonisée, puis Lui a inspiré son immoralité et sa piété »',verseRef:'Ash-Shams 91:7-8'}
  },
  { emoji:'⚖️',
    ar:{title:'سيادة القانون',problem:'القانون يُطبّق على الضعيف ويُعطّل أمام القوي',solution:'تطبيق القانون على الجميع بلا استثناء — "لو أن فاطمة بنت محمد سرقت لقطعت يدها"',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ',verseRef:'النساء ٤: ١٣٥'},
    en:{title:'Rule of Law',problem:'The law is applied to the weak and suspended before the powerful',solution:'Apply the law to everyone without exception — as the Prophet said about equal justice for all',verse:'"O you who believe, be steadfast in justice, witnesses for God"',verseRef:'An-Nisa 4:135'},
    fr:{title:'L\'État de Droit',problem:'La loi est appliquée aux faibles et suspendue devant les puissants',solution:'Appliquer la loi à tous sans exception — comme le Prophète l\'a dit sur la justice égale pour tous',verse:'« Ô vous qui croyez, soyez fermes dans la justice, témoins pour Dieu »',verseRef:'An-Nisa 4:135'}
  },
  { emoji:'🤝',
    ar:{title:'المشاركة الشعبية',problem:'تهميش الشعب عن صنع القرار يولّد اليأس والسلبية',solution:'فتح قنوات المشاركة الحقيقية — الشورى الملزمة وليس الشكلية',verse:'وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ وَأَقَامُوا الصَّلَاةَ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'الشورى ٤٢: ٣٨'},
    en:{title:'Popular Participation',problem:'Marginalizing people from decision-making breeds despair and passivity',solution:'Open channels for real participation — binding consultation, not mere formality',verse:'"Those who responded to their Lord, established prayer, and whose affairs are consultation among them"',verseRef:'Ash-Shura 42:38'},
    fr:{title:'La Participation Populaire',problem:'Marginaliser les gens de la prise de décision engendre le désespoir et la passivité',solution:'Ouvrir des canaux de participation réelle — consultation contraignante, pas de simple formalité',verse:'« Ceux qui répondent à leur Seigneur, accomplissent la prière, et dont les affaires se règlent par consultation »',verseRef:'Ash-Shura 42:38'}
  },
  { emoji:'💪',
    ar:{title:'محاربة الفقر',problem:'الفقر يدفع الناس للقبول بالفساد من أجل البقاء',solution:'توزيع عادل للثروة — الزكاة والتكافل الاجتماعي نموذج إسلامي فريد',verse:'وَالَّذِينَ فِي أَمْوَالِهِمْ حَقٌّ مَّعْلُومٌ ۝ لِّلسَّائِلِ وَالْمَحْرُومِ',verseRef:'المعارج ٧٠: ٢٤-٢٥'},
    en:{title:'Fighting Poverty',problem:'Poverty pushes people to accept corruption in order to survive',solution:'Fair distribution of wealth — Zakat and social solidarity as a unique Islamic model',verse:'"And those in whose wealth is a recognized right for the beggar and the deprived"',verseRef:'Al-Ma\'arij 70:24-25'},
    fr:{title:'Combattre la Pauvreté',problem:'La pauvreté pousse les gens à accepter la corruption pour survivre',solution:'Distribution équitable des richesses — la Zakat et la solidarité sociale comme modèle islamique unique',verse:'« Et ceux dans les biens desquels il y a un droit reconnu pour le mendiant et le démuni »',verseRef:'Al-Ma\'arij 70:24-25'}
  },
  { emoji:'🛡️',
    ar:{title:'حماية المبلّغين',problem:'من يكشف الفساد يتعرض للانتقام والاضطهاد',solution:'حماية كل من يكشف الفساد قانونياً واجتماعياً — فهو يقوم بواجب شرعي',verse:'وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ',verseRef:'آل عمران ٣: ١٠٤'},
    en:{title:'Protecting Whistleblowers',problem:'Those who expose corruption face retaliation and persecution',solution:'Legally and socially protect everyone who exposes corruption — they are fulfilling a religious duty',verse:'"And let there be a group among you who invite to good, enjoin right, and forbid wrong"',verseRef:'Aal Imran 3:104'},
    fr:{title:'Protéger les Lanceurs d\'Alerte',problem:'Ceux qui dénoncent la corruption font face aux représailles et à la persécution',solution:'Protéger juridiquement et socialement ceux qui dénoncent la corruption — ils accomplissent un devoir religieux',verse:'« Que soit issue de vous une communauté qui appelle au bien, ordonne le convenable et interdit le blâmable »',verseRef:'Aal Imran 3:104'}
  },
  { emoji:'📡',
    ar:{title:'الإعلام والشفافية',problem:'الإعلام الموجّه يخفي الفساد ويجمّل وجه الفاسدين',solution:'دعم الإعلام المستقل وحرية الوصول للمعلومات هو أساس الشفافية',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ',verseRef:'النساء ٤: ١٣٥'},
    en:{title:'Media and Transparency',problem:'Directed media hides corruption and beautifies the faces of the corrupt',solution:'Supporting independent media and freedom of information access is the foundation of transparency',verse:'"O you who believe, be persistently standing firm in justice, witnesses for God"',verseRef:'An-Nisa 4:135'},
    fr:{title:'Les Médias et la Transparence',problem:'Les médias dirigés cachent la corruption et embellissent le visage des corrompus',solution:'Soutenir les médias indépendants et la liberté d\'accès à l\'information est le fondement de la transparence',verse:'« Ô vous qui croyez, soyez fermes dans la justice, témoins pour Dieu »',verseRef:'An-Nisa 4:135'}
  },
  { emoji:'🏛️',
    ar:{title:'استقلال القضاء',problem:'القضاء الخاضع للسلطة لا يحكم بالعدل بل بالأوامر',solution:'ضمان استقلالية القضاء وحمايته من التدخل السياسي — العدل لا يتجزأ',verse:'وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ',verseRef:'النساء ٤: ٥٨'},
    en:{title:'Judicial Independence',problem:'A judiciary subservient to power does not rule by justice but by orders',solution:'Guarantee judicial independence and protect it from political interference — justice is indivisible',verse:'"And when you judge between people, judge with justice"',verseRef:'An-Nisa 4:58'},
    fr:{title:'L\'Indépendance Judiciaire',problem:'Un pouvoir judiciaire soumis au pouvoir ne juge pas par la justice mais par les ordres',solution:'Garantir l\'indépendance judiciaire et la protéger de l\'ingérence politique — la justice est indivisible',verse:'« Et quand vous jugez entre les gens, jugez avec équité »',verseRef:'An-Nisa 4:58'}
  },
  { emoji:'🎓',
    ar:{title:'التعليم ضد الفساد',problem:'المناهج التعليمية لا تعلّم النزاهة ومقاومة الفساد',solution:'إدخال مفاهيم النزاهة والمساءلة والحوكمة الرشيدة في المناهج من الصغر',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ٩٦: ١'},
    en:{title:'Education Against Corruption',problem:'Educational curricula do not teach integrity and resistance to corruption',solution:'Introduce concepts of integrity, accountability, and good governance into curricula from a young age',verse:'"Read in the name of your Lord who created"',verseRef:'Al-Alaq 96:1'},
    fr:{title:'L\'Éducation Contre la Corruption',problem:'Les programmes éducatifs n\'enseignent pas l\'intégrité et la résistance à la corruption',solution:'Introduire les concepts d\'intégrité, de responsabilité et de bonne gouvernance dans les programmes dès le jeune âge',verse:'« Lis au nom de ton Seigneur qui a créé »',verseRef:'Al-Alaq 96:1'}
  }
];

// ═══════════════ HABITS ═══════════════
const HABITS = [
  { emoji:'📖', ar:{label:'قراءة آية عن العدل',source:'القرآن الكريم'}, en:{label:'Read a verse about justice',source:'The Holy Quran'}, fr:{label:'Lire un verset sur la justice',source:'Le Saint Coran'} },
  { emoji:'🤲', ar:{label:'دعاء للعدل والإصلاح',source:'أدعية مأثورة'}, en:{label:'Dua for justice and reform',source:'Prophetic duas'}, fr:{label:'Dua pour la justice et la réforme',source:'Duas prophétiques'} },
  { emoji:'🔍', ar:{label:'تأمل في أخلاقي مع المال العام',source:'محاسبة النفس'}, en:{label:'Reflect on my ethics with public resources',source:'Self-accountability'}, fr:{label:'Réfléchir à mon éthique avec les ressources publiques',source:'Auto-responsabilité'} },
  { emoji:'📢', ar:{label:'تحدث ضد ظلم رأيته',source:'الأمر بالمعروف'}, en:{label:'Speak against an injustice I witnessed',source:'Commanding good'}, fr:{label:'Parler contre une injustice que j\'ai vue',source:'Ordonner le bien'} },
  { emoji:'🤝', ar:{label:'ساعد شخصاً بدون مقابل',source:'التكافل الاجتماعي'}, en:{label:'Help someone without expecting return',source:'Social solidarity'}, fr:{label:'Aider quelqu\'un sans attendre de retour',source:'Solidarité sociale'} },
  { emoji:'📚', ar:{label:'تعلم شيئاً عن حقوقك',source:'التعليم'}, en:{label:'Learn something about your rights',source:'Education'}, fr:{label:'Apprendre quelque chose sur vos droits',source:'Éducation'} },
  { emoji:'🕌', ar:{label:'صلاة في وقتها',source:'العبادة'}, en:{label:'Pray on time',source:'Worship'}, fr:{label:'Prier à l\'heure',source:'Adoration'} },
  { emoji:'💡', ar:{label:'فكرة إصلاحية واحدة',source:'المبادرة'}, en:{label:'One reform idea',source:'Initiative'}, fr:{label:'Une idée de réforme',source:'Initiative'} },
  { emoji:'📺', ar:{label:'تابع خبراً عن محاربة الفساد',source:'الوعي'}, en:{label:'Follow anti-corruption news',source:'Awareness'}, fr:{label:'Suivre les nouvelles anti-corruption',source:'Sensibilisation'} },
  { emoji:'🛡️', ar:{label:'ادعم شخصاً يكافح الفساد',source:'التضامن'}, en:{label:'Support someone fighting corruption',source:'Solidarity'}, fr:{label:'Soutenir quelqu\'un qui combat la corruption',source:'Solidarité'} },
  { emoji:'🎓', ar:{label:'علّم طفلاً قيمة الأمانة',source:'التربية'}, en:{label:'Teach a child the value of honesty',source:'Education'}, fr:{label:'Enseigner à un enfant la valeur de l\'honnêteté',source:'Éducation'} },
  { emoji:'🤲', ar:{label:'ادعُ لنصرة المظلومين',source:'الدعاء'}, en:{label:'Pray for the victory of the oppressed',source:'Supplication'}, fr:{label:'Priez pour la victoire des opprimés',source:'Invocation'} },
  { emoji:'🔍', ar:{label:'ابحث عن قصة نجاح إصلاحية',source:'التعلم من التجارب'}, en:{label:'Research a reform success story',source:'Learning from experiences'}, fr:{label:'Recherchez une histoire de réussite réformiste',source:'Apprendre des expériences'} },
  { emoji:'⚖️', ar:{label:'كن عادلاً في حكمك على الناس اليوم',source:'العدالة اليومية'}, en:{label:'Be just in your judgment of people today',source:'Daily justice'}, fr:{label:'Soyez juste dans votre jugement des gens aujourd\'hui',source:'Justice quotidienne'} },
  { emoji:'📖', ar:{label:'قراءة آية عن العدل والإنصاف',source:'القرآن والإصلاح'}, en:{label:'Read a verse about justice and fairness',source:'Quran and reform'}, fr:{label:'Lire un verset sur la justice et l\'équité',source:'Coran et réforme'} },
  { emoji:'🌱', ar:{label:'ازرع فكرة إصلاحية في محيطك',source:'بذور التغيير'}, en:{label:'Plant a reform idea in your circle',source:'Seeds of change'}, fr:{label:'Plantez une idée de réforme dans votre entourage',source:'Graines du changement'} },
  { emoji:'🕌', ar:{label:'ادعُ الله في صلاتك لإصلاح الأمة',source:'الدعاء والإصلاح'}, en:{label:'Pray to God in your prayer for the Ummah\'s reform',source:'Supplication and reform'}, fr:{label:'Priez Dieu dans votre prière pour la réforme de la Oumma',source:'Invocation et réforme'} }
];

// ═══════════════ QUIZ ═══════════════
const QUIZ = [
  { ar:'هل تعتقد أن العدل أساس الحكم الناجح؟', en:'Do you believe justice is the foundation of successful governance?', fr:'Croyez-vous que la justice est le fondement d\'une gouvernance réussie ?' },
  { ar:'هل تسكت عن الظلم خوفاً من العواقب؟', en:'Do you stay silent about injustice out of fear?', fr:'Restez-vous silencieux face à l\'injustice par peur ?' },
  { ar:'هل تعتقد أن الشورى ضرورية في الحكم؟', en:'Do you believe consultation is essential in governance?', fr:'Croyez-vous que la consultation est essentielle dans la gouvernance ?' },
  { ar:'هل تقبل الرشوة لتسهيل أمورك؟', en:'Would you accept bribery to facilitate your affairs?', fr:'Accepteriez-vous la corruption pour faciliter vos affaires ?' },
  { ar:'هل تعلّم أطفالك قيم الأمانة والعدل؟', en:'Do you teach your children values of honesty and justice?', fr:'Enseignez-vous à vos enfants les valeurs d\'honnêteté et de justice ?' },
  { ar:'هل تشارك في الحياة العامة والقرارات المجتمعية؟', en:'Do you participate in public life and community decisions?', fr:'Participez-vous à la vie publique et aux décisions communautaires ?' },
  { ar:'هل تعتقد أن الإصلاح ممكن في مجتمعك؟', en:'Do you believe reform is possible in your society?', fr:'Croyez-vous que la réforme est possible dans votre société ?' },
  { ar:'هل تتابع أخبار المحاسبة ومكافحة الفساد؟', en:'Do you follow accountability and anti-corruption news?', fr:'Suivez-vous les nouvelles sur la responsabilité et la lutte contre la corruption ?' },
  { ar:'هل تعتقد أن الشفافية في المال العام واجب ديني قبل أن يكون قانونياً؟', en:'Do you believe transparency in public funds is a religious duty before a legal one?', fr:'Croyez-vous que la transparence des fonds publics est un devoir religieux avant d\'être légal ?' },
  { ar:'هل تدعم حماية من يكشف الفساد في مجتمعك؟', en:'Do you support protecting those who expose corruption in your community?', fr:'Soutenez-vous la protection de ceux qui dénoncent la corruption dans votre communauté ?' },
  { ar:'هل تعتقد أن إصلاح التعليم هو المفتاح الأول لمحاربة الفساد؟', en:'Do you believe reforming education is the first key to fighting corruption?', fr:'Croyez-vous que réformer l\'éducation est la première clé pour combattre la corruption ?' },
  { ar:'هل تعتقد أن الفساد الأخلاقي أخطر من الفساد المالي؟', en:'Do you believe moral corruption is more dangerous than financial corruption?', fr:'Croyez-vous que la corruption morale est plus dangereuse que la corruption financière ?' },
  { ar:'هل تستخدم التكنولوجيا في نشر الوعي بمخاطر الفساد؟', en:'Do you use technology to spread awareness about the dangers of corruption?', fr:'Utilisez-vous la technologie pour sensibiliser aux dangers de la corruption ?' },
  { ar:'هل تؤمن بأن الإصلاح التدريجي أفضل من الثورات العنيفة؟', en:'Do you believe gradual reform is better than violent revolutions?', fr:'Croyez-vous que la réforme graduelle est meilleure que les révolutions violentes ?' },
  { ar:'هل تقرأ القرآن كمنهج إصلاحي لمحاربة الفساد؟', en:'Do you read the Quran as a reformist methodology to fight corruption?', fr:'Lisez-vous le Coran comme une méthodologie réformiste pour combattre la corruption ?' },
  { ar:'هل تعتقد أن الفساد في القطاع الصحي من أخطر أنواع الفساد؟', en:'Do you believe corruption in healthcare is among the most dangerous types?', fr:'Croyez-vous que la corruption dans la santé est parmi les types les plus dangereux ?' },
  { ar:'هل تؤمن بأن القضاء المستقل ركيزة لمحاربة الفساد؟', en:'Do you believe an independent judiciary is a pillar of fighting corruption?', fr:'Croyez-vous qu\'un pouvoir judiciaire indépendant est un pilier de la lutte contre la corruption ?' }
];

// ═══════════════ DUAS ═══════════════
const DUAS = [
  { ar:{label:'دعاء طلب العدل',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَدْلَ وَالْإِنْصَافَ فِي الْقَوْلِ وَالْعَمَلِ',tr:'يا رب اجعلني عادلاً في كل شيء'}, en:{label:'Dua for Justice',text:'Allahumma inni as\'aluka al-adl wal-insaf fil qawl wal-amal',tr:'O God, I ask You for justice and fairness in word and deed'}, fr:{label:'Dua pour la Justice',text:'Allahumma inni as\'aluka al-adl wal-insaf fil qawl wal-amal',tr:'Ô Dieu, je Te demande la justice et l\'équité dans la parole et l\'action'} },
  { ar:{label:'دعاء ضد الظلم',text:'اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنَ الظُّلْمِ وَالْبَغْيِ وَالْعُدْوَانِ',tr:'يا رب احمنا من كل ظلم'}, en:{label:'Dua Against Oppression',text:'Allahumma inna na\'udhu bika min adh-dhulm wal-baghy wal-udwan',tr:'O God, we seek refuge in You from oppression, transgression, and aggression'}, fr:{label:'Dua Contre l\'Oppression',text:'Allahumma inna na\'udhu bika min adh-dhulm wal-baghy wal-udwan',tr:'Ô Dieu, nous cherchons refuge en Toi contre l\'oppression, la transgression et l\'agression'} },
  { ar:{label:'دعاء للحاكم العادل',text:'اللَّهُمَّ وَفِّقْ وُلَاةَ أُمُورِنَا لِمَا تُحِبُّ وَتَرْضَى',tr:'يا رب اهدِ حكامنا للعدل'}, en:{label:'Dua for Just Rulers',text:'Allahumma waffiq wulata umoorina lima tuhibbu wa tarda',tr:'O God, guide our leaders to what You love and are pleased with'}, fr:{label:'Dua pour des Dirigeants Justes',text:'Allahumma waffiq wulata umoorina lima tuhibbu wa tarda',tr:'Ô Dieu, guide nos dirigeants vers ce que Tu aimes et agrées'} },
  { ar:{label:'دعاء الإصلاح',text:'اللَّهُمَّ أَصْلِحْ أَحْوَالَ الْمُسْلِمِينَ وَوَحِّدْ كَلِمَتَهُمْ عَلَى الْحَقِّ',tr:'يا رب أصلح أمة محمد'}, en:{label:'Dua for Reform',text:'Allahumma aslih ahwal al-muslimeen wa wahhid kalimatahum alal haqq',tr:'O God, reform the affairs of Muslims and unite them upon truth'}, fr:{label:'Dua pour la Réforme',text:'Allahumma aslih ahwal al-muslimeen wa wahhid kalimatahum alal haqq',tr:'Ô Dieu, réforme les affaires des musulmans et unis-les sur la vérité'} },
  { ar:{label:'دعاء النصر على الظالمين',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢: ٢٥٠'}, en:{label:'Dua for Victory Over Oppressors',text:'Rabbana afrigh alayna sabran wa thabbit aqdamana wansurna alal qawmil kafireen',tr:'Our Lord, pour upon us patience and plant firmly our feet and give us victory (2:250)'}, fr:{label:'Dua pour la Victoire sur les Oppresseurs',text:'Rabbana afrigh alayna sabran wa thabbit aqdamana wansurna alal qawmil kafireen',tr:'Notre Seigneur, déverse sur nous la patience, affermis nos pieds et donne-nous la victoire (2:250)'} },
  { ar:{label:'دعاء حسن الخاتمة',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',tr:'البقرة ٢: ٢٠١'}, en:{label:'Dua for Good End',text:'Rabbana atina fid-dunya hasanatan wa fil akhirati hasanatan wa qina adhab an-nar',tr:'Our Lord, give us good in this world and good in the Hereafter and protect us from the Fire (2:201)'}, fr:{label:'Dua pour une Bonne Fin',text:'Rabbana atina fid-dunya hasanatan wa fil akhirati hasanatan wa qina adhab an-nar',tr:'Notre Seigneur, donne-nous le bien ici-bas et le bien dans l\'au-delà et protège-nous du Feu (2:201)'} },
  { ar:{label:'دعاء الأمانة',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخِيَانَةِ فَإِنَّهَا بِئْسَتِ الْبِطَانَةُ',tr:'اللهم أعوذ بك من الخيانة والفساد'}, en:{label:'Dua for Trustworthiness',text:'Allahumma inni a\'udhu bika min al-khiyanah fa innaha bi\'sat al-bitanah',tr:'O God, I seek refuge in You from betrayal, for it is the worst inner trait'}, fr:{label:'Dua pour la Fidélité',text:'Allahumma inni a\'udhu bika min al-khiyanah fa innaha bi\'sat al-bitanah',tr:'Ô Dieu, je cherche refuge en Toi contre la trahison, car c\'est le pire trait intérieur'} },
  { ar:{label:'دعاء النزاهة',text:'اللَّهُمَّ طَهِّرْ قَلْبِي مِنَ النِّفَاقِ وَعَمَلِي مِنَ الرِّيَاءِ',tr:'اللهم اجعلني نزيهاً في السر والعلن'}, en:{label:'Dua for Integrity',text:'Allahumma tahhir qalbi min an-nifaq wa amali min ar-riya',tr:'O God, purify my heart from hypocrisy and my deeds from showing off'}, fr:{label:'Dua pour l\'Intégrité',text:'Allahumma tahhir qalbi min an-nifaq wa amali min ar-riya',tr:'Ô Dieu, purifie mon coeur de l\'hypocrisie et mes actes de l\'ostentation'} }
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('fasad-lang') || 'ar';
const themes = ['steel', 'night', 'justice'];
const themeIcons = ['🏛️', '🌙', '⚖️'];
const themeNames = { steel:'Steel — فولاذي', night:'Night — ليلي', justice:'Justice — عدالة' };
let theme = localStorage.getItem('fasad-theme') || 'steel';
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  initSwipeGestures();
  initParticles();
  renderHome();
  renderCards();
  renderReform();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('fasad-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabReform', t.tabReform);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('reformTitle', t.reformTitle); set('reformDesc', t.reformDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderReform(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('fasad-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'🏛️',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة عن الفساد':lang==='fr'?'20 cartes':'20 cards'},
    {icon:'⚖️',tab:'reform',title:t.tabReform,desc:lang==='ar'?'طريق الإصلاح':lang==='fr'?'Chemin de la réforme':'Path of reform'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر وعيك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.quran}</div>
            <div class="verse-ref">${d.quranRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.lesson}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('cardsContainer')||{}).innerHTML= searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n${d.quran}\n💡 ${d.lesson}\n\n— الفساد السياسي | Political Corruption`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try { await navigator.clipboard.writeText(text); showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copié !' : 'Copied!'); } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: REFORM ═══════════════
function renderReform() {
  const t = T[lang];
  (document.getElementById('reformContainer')||{}).innerHTML= REFORM_DATA.map(r => {
    const d = r[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${r.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">${lang==='ar'?'😰 المشكلة':lang==='fr'?'😰 Le Problème':'😰 The Problem'}</span>
        ${d.problem}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${lang==='ar'?'⚖️ الحل الإسلامي':lang==='fr'?'⚖️ La Solution Islamique':'⚖️ The Islamic Solution'}</span>
        ${d.solution}
      </div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('fasad-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('fasad-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  (document.getElementById('habitsContainer')||{}).innerHTML= HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div><div class="habit-label">${d.label}</div><div class="habit-source">${d.source}</div></div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('fasad-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('fasad-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); }
}

function resetHabits() {
  localStorage.setItem('fasad-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Réinitialisé' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length, total = HABITS.length;
  const pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('fasad-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) { streakData.count++; }
    else if (prevState.date !== new Date().toDateString()) { streakData.count = prevState.done.length === HABITS.length ? 1 : 0; }
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('fasad-streak', JSON.stringify(streakData));
}

function getStreak() {
  return JSON.parse(localStorage.getItem('fasad-streak') || '{"count":0}').count;
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#455A64','#78909C','#B0BEC5','#37474F','#90A4AE','#CFD8DC','#607D8B'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180); ctx.fillStyle = p.color; ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display = 'none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  (document.getElementById('quizContainer')||{}).innerHTML= QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Répondez à toutes les questions' : 'Answer all questions');
    return;
  }
  const invertedQs = [1, 3]; // silence and bribery are bad
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => { score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v; });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji = '🌟'; title = lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc = lang==='ar'?'وعيك بقضايا الفساد عالٍ. استمر في نشر الوعي!':lang==='fr'?'Votre conscience de la corruption est élevée. Continuez !':'Your awareness of corruption is high. Keep spreading awareness!';
  } else if (pct >= 50) {
    emoji = '⚖️'; title = lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc = lang==='ar'?'أنت على الطريق الصحيح لكن هناك مجال لتطوير وعيك.':lang==='fr'?'Vous êtes sur la bonne voie mais il y a place pour améliorer votre conscience.':'You\'re on the right track but there\'s room to improve your awareness.';
  } else {
    emoji = '📢'; title = lang==='ar'?'حان وقت التغيير':lang==='fr'?'Il est temps de changer':'Time for Change';
    desc = lang==='ar'?'أنت بحاجة لمزيد من الوعي بقضايا الفساد. ابدأ بقراءة البطاقات.':lang==='fr'?'Vous avez besoin de plus de conscience. Commencez par lire les cartes.':'You need more awareness about corruption. Start by reading the cards.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${pct}%</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${desc}</div>
    <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"الفساد السياسي في المجتمعات العربية والإسلامية" يتناول الشيخ الغزالي فيه مشكلة الفساد السياسي بعمق، مبيناً جذوره وأسبابه ومظاهره في المجتمعات الإسلامية. يطرح الكتاب رؤية إسلامية شاملة للإصلاح السياسي مبنية على العدل والشورى والمحاسبة، مستشهداً بالقرآن الكريم والسنة النبوية ونماذج الخلفاء الراشدين.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "الفساد السياسي في المجتمعات العربية والإسلامية" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','مقدمة ابن خلدون'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending reform.',
      bookTitle: 'About the Book',
      bookDesc: '"Political Corruption in Arab and Islamic Societies" by Sheikh al-Ghazali deeply examines political corruption, exposing its roots, causes, and manifestations in Islamic societies. The book presents a comprehensive Islamic vision for political reform built on justice, consultation, and accountability, citing the Quran, Prophetic traditions, and the examples of the Rightly Guided Caliphs.',
      sourcesTitle: 'Sources',
      sources: ['"Political Corruption in Arab and Islamic Societies" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Ibn Khaldun\'s Muqaddimah'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tiré du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique égyptien, surnommé « Le Littéraire de la Prédication ». Auteur de plus de 94 livres. Diplômé d\'Al-Azhar, professeur à l\'Université Émir Abdelkader de Constantine (Algérie). Lauréat du Prix Roi Faysal. Connu pour le renouveau et la lutte contre la rigidité.',
      bookTitle: 'À Propos du Livre',
      bookDesc: '« La Corruption Politique dans les Sociétés Arabes et Islamiques » par Sheikh al-Ghazali examine en profondeur la corruption politique, exposant ses racines, causes et manifestations dans les sociétés islamiques. Le livre présente une vision islamique complète pour la réforme politique fondée sur la justice, la consultation et la responsabilité.',
      sourcesTitle: 'Sources',
      sources: ['« La Corruption Politique dans les Sociétés Arabes et Islamiques » — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','La Muqaddima d\'Ibn Khaldoun'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "الفساد السياسي" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة، ٦ حلول للإصلاح، تتبع العادات، اختبار ذاتي.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل بين البطاقات. اضغط Escape لإغلاق اللوحات.'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Political Corruption" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 cards, 6 reform solutions, habit tracker, self-quiz.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys to navigate between cards. Press Escape to close panels.'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« La Corruption Politique » par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalités',body:'Trois langues (AR/EN/FR), 3 thèmes, 20 cartes, 6 solutions de réforme, suivi habitudes, quiz.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les flèches pour naviguer entre les cartes. Échap pour fermer les panneaux.'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el));
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(() => {
      document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el));
    }, 100));
  });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const cardsPanel = document.getElementById('panel-cards');
      if (!cardsPanel || !cardsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (cards.length === 0) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home', 'cards', 'reform', 'habits', 'quiz', 'about'];
  document.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx) * 0.7) return;
    const currentTab = document.querySelector('.tab.active');
    if (!currentTab) return;
    const currentIdx = tabOrder.indexOf(currentTab.dataset.tab);
    const isRTL = document.documentElement.dir === 'rtl';
    let nextIdx;
    if (dx > 0) nextIdx = isRTL ? currentIdx + 1 : currentIdx - 1;
    else nextIdx = isRTL ? currentIdx - 1 : currentIdx + 1;
    nextIdx = Math.max(0, Math.min(tabOrder.length - 1, nextIdx));
    if (nextIdx !== currentIdx) {
      const nextTab = document.querySelector(`[data-tab="${tabOrder[nextIdx]}"]`);
      if (nextTab) nextTab.click();
    }
  }, { passive: true });
}

// ═══════════════ PARTICLES ═══════════════
function initParticles() {
  const canvas = document.createElement('canvas');
  canvas.className = 'particles-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let particles = [];
  const colors = ['rgba(69,90,100,0.12)', 'rgba(120,144,156,0.1)', 'rgba(176,190,197,0.08)', 'rgba(55,71,79,0.1)'];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  for (let i = 0; i < 20; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*4+2, vy:-(Math.random()*0.3+0.1), vx:(Math.random()-0.5)*0.2, color:colors[Math.floor(Math.random()*colors.length)] });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fillStyle = p.color; ctx.fill(); p.y += p.vy; p.x += p.vx; if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; } if (p.x < -10) p.x = canvas.width + 10; if (p.x > canvas.width + 10) p.x = -10; });
    requestAnimationFrame(draw);
  }
  draw();
}


// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 الفساد السياسي — الشيخ محمد الغزالي','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ اكتشف كنوز الكتاب'],
    en: ['📖 Political Corruption — Sheikh Mohammed Al-Ghazali','🏆 Earn points and badges','🌟 Try the Young Explorer mode','🤲 Remember to make dua','⭐ Discover the book\'s treasures'],
    fr: ['📖 Corruption Politique — Cheikh Mohammed Al-Ghazali','🏆 Gagnez des points et des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas le dua','⭐ Découvrez les trésors du livre']
  };
  const curLang = (typeof lang !== 'undefined' && lang) || document.documentElement.lang || 'ar';
  const items = tips[curLang] || tips.ar;
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  if (!ticker) return;
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// Auto-start ticker
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderTicker);
} else {
  renderTicker();
}
