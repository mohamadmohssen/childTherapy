// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Common Translations
    },
  },
  ar: {
    translation: {
      // Common Translations
      Test: "اختبار",
      "About Us": "معلومات عنا",
      "Contact Us": "اتصل بنا",

      // Header Translations
      "Welcome to RAISE": "RAISE مرحبًا بكم في ",
      "Your Partner for Diagnosing, Evaluating, and Following Up on Speech and Language Pathologies.":
        "شريكك في تشخيص وتقييم ومتابعة اضطرابات النطق واللغة.",
      "Discover more about us": "اكتشف المزيد عنا",

      // AttachedCards Translations
      "24 Hours Service": "خدمة 24 ساعة",
      "Get in touch": "ابق على تواصل",
      "You can contact us all the time": "يمكنك الاتصال بنا في أي وقت",
      Questions: "أسئلة",
      "Make Test": "قم بإجراء الاختبار",
      "Coming Soon": "قريبا",
      "New features": "ميزات جديدة",
      "Exciting new features are coming soon, including a variety of engaging questions!":
        "ميزات جديدة ومثيرة قادمة قريبًا، بما في ذلك مجموعة متنوعة من الأسئلة المثيرة!",

      // Testimonial Translations
      "We served over 5000+ Patients": "لقد خدمنا أكثر من 5000 مريض",
      "Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.":
        "دعونا نعرف المزيد عن كيفية مساعدتنا لأكثر من 5000 مريض في تلبية احتياجاتهم.",
      "Sarah M., Mother of a 4-year-old":
        "سارة م., أم لطفل يبلغ من العمر 4 سنوات",
      "Dr. Emily R., Speech-Language Pathologist":
        "د. إميلي ر., أخصائية أمراض النطق واللغة",
      "John D., Father of a 3-year-old":
        "جون د., أب لطفل يبلغ من العمر 3 سنوات",
      "As a parent, I was constantly worried about my child's speech development. This app provided me with an easy-to-use tool to assess my child's communication skills. The detailed classification and helpful resources have been a game-changer for our family. We now have a clear understanding of our child's needs and how to support their development.":
        "كوالد، كنت قلقًا باستمرار بشأن تطور نطق طفلي. قدم لي هذا التطبيق أداة سهلة الاستخدام لتقييم مهارات الاتصال لدى طفلي. كانت التصنيفات التفصيلية والموارد المفيدة نقطة تحول لعائلتنا. لدينا الآن فهم واضح لاحتياجات طفلي وكيفية دعم تطوره.",
      "As a speech therapist, I highly recommend this website to parents and caregivers. The questionnaire is thorough yet straightforward, and the classification results are incredibly accurate. It's a fantastic resource for early detection of speech and language disorders, allowing for timely intervention. The app has truly made a difference in the lives of many children I work with.":
        "بصفتي أخصائية نطق، أوصي بشدة بهذا الموقع للآباء ومقدمي الرعاية. الاستبيان شامل وبسيط، ونتائج التصنيف دقيقة للغاية. إنه مورد رائع للكشف المبكر عن اضطرابات النطق واللغة، مما يتيح التدخل في الوقت المناسب. لقد أحدث التطبيق فرقًا حقيقيًا في حياة العديد من الأطفال الذين أعمل معهم.",
      "This application has been a valuable tool for our family. The survey was simple to complete, and the results were insightful. The classifications helped us understand where our child stands and what steps to take next. The additional resources and tips provided are a wonderful bonus. I appreciate how the app empowers parents with knowledge and support.":
        "كان هذا التطبيق أداة قيمة لعائلتنا. كان الاستبيان سهل الإكمال، وكانت النتائج مثمرة. ساعدتنا التصنيفات في فهم موقف طفلنا والخطوات التي يجب اتخاذها بعد ذلك. الموارد والنصائح الإضافية المقدمة هي مكافأة رائعة. أقدر كيف يمكّن التطبيق الآباء من المعرفة والدعم.",

      //FAQ
      "Frequently Asked Questions": "الأسئلة المتكررة",
      "General Questions": "الأسئلة العامة",
      "What types of assessments and tools do you offer?":
        "ما أنواع التقييمات والأدوات التي تقدمونها؟",
      "We offer a wide range of diagnostic and evaluation tools in the field of speech and language therapy. We also offer manuals on therapy as well as other sources of information.":
        "نقدم مجموعة واسعة من الأدوات التشخيصية والتقييمية في مجال علاج النطق واللغة. نقدم أيضًا أدلة عن العلاج وكذلك مصادر معلومات أخرى.",
      "Who can benefit from your resources?": "من يمكنه الاستفادة من مواردكم؟",
      "Speech therapists, parents, special education teachers, caregivers, and other professionals working with individuals with speech or language disorders.":
        "أخصائيو علاج النطق، وأولياء الأمور، ومعلمو التعليم الخاص، ومقدمو الرعاية، وغيرهم من المتخصصين الذين يعملون مع الأفراد الذين يعانون من اضطرابات النطق أو اللغة.",
      "How do I know which products are right for my needs?":
        "كيف يمكنني معرفة المنتجات المناسبة لاحتياجاتي؟",
      "We provide product descriptions for each product launched on the website. Additionally, if you need any assistance in making your decision, our support team will help you out.":
        "نقدم أوصاف المنتجات لكل منتج يتم إطلاقه على الموقع الإلكتروني. بالإضافة إلى ذلك، إذا كنت بحاجة إلى أي مساعدة في اتخاذ قرارك، فإن فريق الدعم لدينا سيساعدك.",
      "If am a parent, can I use your materials/products at home?":
        "إذا كنت ولي أمر، هل يمكنني استخدام موادكم/منتجاتكم في المنزل؟",
      "Yes, we made sure that these materials are suitable for use at home. Materials come with instructions that make it easier for parents to guide their children while learning or practicing.":
        "نعم، تأكدنا من أن هذه المواد مناسبة للاستخدام في المنزل. تأتي المواد مع تعليمات تجعل من السهل على الآباء توجيه أطفالهم أثناء التعلم أو الممارسة.",
      "If am a specialist, how can I put your materials/products into practice in my current therapy sessions?":
        "إذا كنت أخصائي، كيف يمكنني تطبيق موادكم/منتجاتكم في جلسات العلاج الحالية الخاصة بي؟",
      "Our products enhance the existing methods of therapy you may already be using. They can be used as part of an assessment and during therapy sessions. Every product comes with instructions for application.":
        "تعزز منتجاتنا الطرق الموجودة للعلاج التي قد تكون تستخدمها بالفعل. يمكن استخدامها كجزء من التقييم وأثناء جلسات العلاج. كل منتج يأتي مع تعليمات للاستخدام.",
      "Research Use": "استخدام للأبحاث",
      "Can your materials be used for research purposes?":
        "هل يمكن استخدام موادكم لأغراض البحث؟",
      "Our products can be used for research purposes and can support research studies. However, written permission should be granted, and the conditions of use will be discussed per product. For further information, our team is ready to assist.":
        "يمكن استخدام منتجاتنا لأغراض البحث ويمكن أن تدعم الدراسات البحثية. ومع ذلك، يجب الحصول على إذن كتابي، وستتم مناقشة شروط الاستخدام لكل منتج. لمزيد من المعلومات، فإن فريقنا مستعد للمساعدة.",
      "Are there any specific guidelines for using your materials in research studies?":
        "هل هناك أي إرشادات محددة لاستخدام موادكم في الدراسات البحثية؟",
      "Specific guidelines will be defined for each product and can be requested by our support team. Of course, we request that you follow the recommended ethical guidelines and give appropriate credit to the authors.":
        "ستُحدد إرشادات محددة لكل منتج ويمكن طلبها من فريق الدعم لدينا. بالطبع، نطلب منك اتباع الإرشادات الأخلاقية الموصى بها وإعطاء الفضل المناسب للمؤلفين.",
      "How should I cite your materials/products in my research paper?":
        "كيف يجب أن أستشهد بموادكم/منتجاتكم في ورقة البحث الخاصة بي؟",
      "Each item has its citation format recommended by us. Where there is no format provided, please contact us on how to cite them correctly.":
        "كل عنصر له صيغة اقتباس موصى بها من قبلنا. في حال عدم توفر صيغة، يرجى الاتصال بنا لمعرفة كيفية الاقتباس الصحيح.",
      "Ordering and Shipping": "الطلب والشحن",
      "How do I place an order?": "كيف أضع طلب؟",
      "You can place an order directly through our website by adding items to your cart and proceeding to checkout.":
        "يمكنك وضع طلب مباشرة من خلال موقعنا الإلكتروني عن طريق إضافة العناصر إلى سلة التسوق الخاصة بك والمتابعة إلى الخروج.",
      "What payment methods do you accept?": "ما هي طرق الدفع التي تقبلونها؟",
      "We accept different types of payment like cards (debit/credit), PayPal and some other online options that are safe to use. We also, accept payments through OMT and WHISH inside Lebanon. For more information, please contact us.":
        "نقبل أنواعًا مختلفة من الدفع مثل البطاقات (الخصم/الائتمان)، بايبال وبعض الخيارات الأخرى عبر الإنترنت التي تكون آمنة للاستخدام. كما نقبل الدفع من خلال OMT وWHISH داخل لبنان. لمزيد من المعلومات، يرجى الاتصال بنا.",
      "Do you offer international shipping?": "هل تقدمون شحن دولي؟",
      "Currently, shipping services are available only in Lebanon.":
        "حاليًا، خدمات الشحن متاحة فقط في لبنان.",
      "How long will it take to receive my order?":
        "كم من الوقت سيستغرق لاستلام طلبي؟",
      "Delivery times differ depending on your address. Orders are typically processed within five to seven working days.":
        "تختلف أوقات التسليم حسب عنوانك. عادةً ما تتم معالجة الطلبات في غضون خمسة إلى سبعة أيام عمل.",
      "Product Support": "دعم المنتجات",
      "Can I get help with using the assessment tools?":
        "هل يمكنني الحصول على مساعدة في استخدام أدوات التقييم؟",
      "Yes, we offer detailed user manuals and descriptions for each product. Furthermore, our support team will always be there in case of any queries or assistance needed by the buyer.":
        "نعم، نقدم أدلة استخدام تفصيلية ووصفًا لكل منتج. علاوة على ذلك، سيكون فريق الدعم لدينا دائمًا موجودًا في حال وجود أي استفسارات أو مساعدة يحتاجها المشتري.",
      "Are your materials evidence-based?": "هل موادكم قائمة على الأدلة؟",
      "All our resources have been developed based on current research and best practices in speech-language therapy as well as the recommended guidelines. We also provide documentation regarding the validity and reliability of our products.":
        "تم تطوير جميع مواردنا بناءً على الأبحاث الحالية وأفضل الممارسات في علاج النطق واللغة وكذلك الإرشادات الموصى بها. نقدم أيضًا وثائق تتعلق بصحة وموثوقية منتجاتنا.",
      "Technical Support": "الدعم الفني",
      "What should I do if I face technical issues with the website?":
        "ماذا يجب أن أفعل إذا واجهت مشكلات فنية في الموقع؟",
      "Please contact us in case of any technical issues; we are always ready to assist.":
        "يرجى الاتصال بنا في حالة وجود أي مشكلات فنية؛ نحن دائمًا مستعدون للمساعدة.",

      //Auto increment bar
      "Happy People": "أشخاص سعداء",
      "Surgery Completed": "جراحات مكتملة",
      "Expert Doctors": "أطباء خبراء",

      // About Us
      "About Us": "معلومات عنا",
      "Welcome to RAISE – Your Partner for Diagnosing, Evaluating, and Following Up on Speech and Language Pathologies. Our major goal is to empower parents, caregivers, and specialists with diagnostic tools that are based on research to evaluate speech, language, and communication disorders. It is our hope that we can provide guidance during the therapy process while ensuring progress is monitored. Our team consists of experienced speech therapists and researchers who have more than 20 years of combined experience. To this end, we are committed to providing the necessary support and materials required to help people with communication disorders. We strive for quality in everything we do. Hence, our assessment tools as well as the products offered are carefully constructed and designed with the highest possible standards of accuracy and reliability. If you are a parent, a caregiver, or a specialist who seeks knowledge and skills in addressing speech and language pathologies, then you are home. Explore our website for a wide range of diagnostic and evaluation tools. If any questions arise or you need support, don’t hesitate to contact our team – we’re here to help!":
        "أهلاً بكم في موقع رائز!! شريكك ويدك اليمنى في عملية تشخيص، تقييم ،ومتابعة إضطرابات النطق واللغة.يكمن هدفنا الرئيسي في دعم الأهل، مقدمي الرعاية، والمتخصصين عبر توفير أدوات وروائز تشخيصية مقننة ومسندة علمياً لتقييم إضطرابات النطق، اللغة ،والتواصل. كما أننا نقدّم التوجيه المطلوب لمتابعة فعالية الأدوات.يتضمّن فريقنا مجموعة من الإختصاصيين في علاج النطق واللغة والباحثين ذوي خبرة تزيد عن العشرين عاماً. إننا ملتزمون بتقديم المواد، الأدوات والتحفيز اللازم لدعم الأشخاص الذين يعانون من إضطرات التواصل.نسعى لتحقيق أعلى معايير الجودة في كل ما نقوم به. لذلك، فإن الأدوات التقييمية والمواد التي نقدمها يتم تصميمها بعناية وبالإعتماد على معايير علمية ذات دقة وموثوقية. إذا كنت والد/ة، مقدم رعاية، أو متخصص يسعى لتطوير معرفته ومهاراته في معالجة اضطرابات النطق واللغة، فإنك في الموقع الإلكتروني المناسب.استكشف موقعنا لمعرفة المزيد عن مجموعة الأدوات التقييمية والتشخيصية التي نقدمها. في حال وجود أي أسئلة أو إستفسارات لا تتردد/ي في التواصل مع فريقنا – نحن هنا للمساعدة!",

      //Contact Us
      "Get in touch": "تواصل معنا",
      "Your message was sent, thank you!": "تم إرسال رسالتك، شكرًا لك!",
      "Full Name": "الاسم الكامل",
      "Email Address": "عنوان البريد الإلكتروني",
      Subject: "الموضوع",
      Message: "الرسالة",
      "Send Message": "أرسل رسالة",
      "Let's get in touch": "دعنا نتواصل",
      "We're open for any suggestion or just to have a chat":
        "نحن متاحون لأي اقتراح أو لمجرد الدردشة",
      Address: "العنوان",
      "Beirut - Airport Road - Al Atrash Center - 2 floor":
        "بيروت - طريق المطار - مركز الأطرش - الطابق الثاني",
      Phone: "الهاتف",
      Email: "البريد الإلكتروني",

      //Footer
      About: "معلومات عنا",
      "Quick Links": "روابط سريعة",
      "Our location": "موقعنا",
    },
  },
};

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Use saved language or default to English
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
