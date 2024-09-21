// Your quiz questions and answers here
const quizData = [
    {
        id: 1,
        question: "আমার প্রিয় পাঠ্য  বিষয়?",
        options: [
            { text: "বিজ্ঞান", score: 10 },
            { text: "গনিত", score: 10 },
            { text: "সাহিত্য", score: 10 },
            { text: "ইতিহাস", score: 10 },
            { text: "পড়ালেখা অপছন্দ", score: -5 }
        ]
    },
    {
        id: 2,
        question: "আমার শারীরিক সামর্থ্য?",
        options: [
            { text: "অত্যন্ত শক্তিশালী", score: 10 },
            { text: "বেশ শক্তিশালী", score: 7 },
            { text: "মোটামুটি ভাল", score: 5 },
            { text: "কিছুটা দুর্বল  ", score: 1 },
            { text: "বেশ দুর্বল", score: -5 }
        ]
    },

    {
        id: 3,
        question: "যা আমার অত্যন্ত পছন্দ",
        options: [
            { text: "বই পড়া", score: 10 },
            { text: "স্পোর্টস করা", score: 10 },
            { text: "স্পোর্টস দেখা ", score: -5 },
            { text: "ভ্রঘুরে বেড়ানো", score: 0 },
            { text: "খাওয়া ও ঘুম", score: -5 }
        ]
    },
    {
        id: 5,
        question: "খুব মন খারাপ হয় ",
        options: [
            { text: "স্কুলে যেতে না পারলে ", score: 10 },
            { text: "খেলা দেখায় বাঁধা এলে", score: -5 },
            { text: "ফোন ব্যবহারে বাঁধা এলে", score: -5 },
            { text: "খেলাধুলা করতে না পারলে ", score: 5 },
            { text: "বন্ধুদের সাথে সাক্ষাৎ না হলে", score: -5 }
        ]
    },

 /*   {
        id: 4,
        question: "নিচের কোন জন তোমার প্রিয় ব্যক্তিত্ব?",
        options: [
            { text: "তিনি একজন সাংবাদিক", score: 0 },
            { text: "তিনি একজন মহান নেতা", score: 0 },
            { text: "তিনি একজন বিজ্ঞানী", score: 0 },
            { text: "তিনি একজন সফল ব্যবসায়ী  ", score: 0 },
            { text: "তিনি একজন নামকরা শিল্পী", score: 0 },
            { text: "তিনি একজন বিখ্যাত খেলোয়াড়", score: 0 },
            { text: "তিনি একজন দার্শনিক", score: 0 },
            { text: "তিনি একজন উচ্চ পদস্ত অফিসার", score: 0 }
        ]
    },*/
/*    {
        id: 5,
        question: "কোনটি করতে না পারলে তীব্র কষ্ট বোধ হয়?",
        options: [
            { text: "পড়া লেখা", score: 10 },
            { text: "মোবাইল ব্যবহার", score: -5 },
            { text: "খেলাধুলা ", score: 5 },
            { text: "বন্ধুদের সাথে সময় দেওয়া", score: -5 }
        ]
    },*/
    {
        id: 6,
        question: "প্রিয় স্থান",
        options: [
            { text: "নিজ বাড়ি", score: 5 },
            { text: "নির্জনতা", score: 5 },
            { text: "পড়ার টেবিল", score: 10 },
            { text: "খেলার মাঠ", score: 10 },
            { text: "সোশ্যাল মিডিয়া", score: -5 }
        ]
    },
    {
        id: 7,
        question: "আমার বেশি ভয় হয় ",
        options: [
            { text: "ঊচু স্থানে উঠলে", score: -5 },
            { text: "অসফল হওয়ার  আশংকায়", score: 0 },
            { text: "পানিতে নামলে ", score: -5 },
            { text: "হেরে যাওয়ার লজ্জা", score: 10 },
            { text: "বাবা-মায়ের দুঃখ ", score: 10 }
        ]
    },
 /*   {
        id: 8,
        question: "তোমাকে কেমন পেশায় প্রতিষ্ঠিত দেখতে চান তোমার পিতামাতা?",
        options: [
            { text: "ডাক্তার ", score: 0 },
            { text: "ইঞ্জিনিয়ার", score: 0 },
            { text: "শিক্ষক", score: 0 },
            { text: "সরকারী কর্মকর্তা", score: 0 },
            { text: "শিল্পী", score: 0 },
            { text: "খেলোয়াড়", score: 0 },
            { text: "লেখক", score: 0 },
            { text: "বিচারক", score: 0 },
            { text: "রাজনীতিবিদ", score: 0 },
            { text: "সমাজসেবক", score: 0 },
            { text: "উদ্যোক্তা", score: 0 },
            { text: "গবেষক", score: 0 },
            { text: "সেনা অফিসার", score: 0 }
        ]
    },*/

    {
        id: 8,
        question: "যেখানে নাগরিকত্ব পেলে আনন্দিত হবো",
        options: [
            { text: "আমেরিকা", score: 0 },
            { text: "প্রাচ্য/মধ্যপ্রাচ্য", score: 0 },
            { text: "অস্ট্রেলিয়া", score: 0 },
            { text: "ইউরোপ", score: 0 },
            { text: "কোনটিই নয়", score: 10 }
        ]
    },
  /*  {
        id: 9,
        question: "সুযোগ পেলে ভবিষ্যতে তুমি কোন দেশেটিতে বাস করতে পছন্দ করবে? ",
        options: [
            { text: "আমেরিকা কিংবা কানাডা", score: 0 },
            { text: "মালেশিয়া, নিউজিল্যান্ড কিংবা অস্ট্রেলিয়া", score: 0 },
            { text: "ইউরোপের সমৃদ্ধ কোন দেশ", score: 0 },
            { text: "কোনটিই নয়", score: 10 }
        ]
    },
    */
    {
        id: 9,
        question: "তোমার মাধ্যমিকের ফলাফল কি ছিল?",
        options: [
            { text: "জিপিএ ৫", score: 10 },
            { text: "৫ হতে ৪.৫ এর মাঝে", score: 5 },
            { text: "৪.৫ হতে  ৪.০ এর মাঝে", score: 0 },
            { text: "জিপিএ ৪.০ এর নিচে ", score: -5 },
            { text: "এখনও নয় ", score: 0 }
        ]
    },
    {
        id: 10,
        question: "আমার উচ্চ মাধ্যমিকের ফলাফল",
        options: [
            { text: "জিপিএ ৫", score: 10 },
            { text: "৫ হতে ৪.৫ এর মাঝে ", score: 5 },
            { text: "৪.৫ হতে  ৪.০ এর মাঝে ", score: 0 },
            { text: "জিপিএ ৪.০ এর নিচে", score: -5 },
            { text: "এখনও নয়", score: 0 }
        ]
    },
    {
        id: 11,
        question: "গত বছরের পরীক্ষার  ফলাফল",
        options: [
            { text: "ক্লাসের প্রথম ", score: 10 },
            { text: "ক্লাসের প্রথম ৫ এর মাঝে ", score: 10 },
            { text: "ক্লাসের ৬ হতে ১০ জনের মাঝে ", score: 5 },
            { text: "ক্লাসের ১১ হতে ১৫  এর মাঝে", score: 0 },
            { text: "অন্যান্য", score: -5 },
        ]
    },
    {
        id: 12,
        question: "বন্ধুরা আমাকে মেনে চলে",
        options: [
            { text: "খুব ভালোভাবে", score: 10 },
            { text: "মোটামুটি", score: 8 },
            { text: "কিছুটা মেনে চলে", score: 5 },
            { text: "কম মেনে চলে", score: 0 },
            { text: "মেনে চনে না", score: -5 },
        ]
    },/*
    {
        id: 14,
        question: "পড়ালেখা করতে কতটা আনন্দিত থাকো?",
        options: [
            { text: "অত্যন্ত বেশি ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম আনন্দ", score: 0 },
            { text: "কষ্ট অনুভব হয়", score: -5 }
        ]
    },*/
    {
        id: 13,
        question: "উচ্চশিক্ষায় আমার আগ্রহ",
        options: [
            { text: "খুব বেশি", score: 10 },
            { text: "যথেষ্ট", score: 8 },
            { text: "মোটামুটি", score: 5 },
            { text: "অনেকটা কম", score: 0 },
            { text: "আগহ নেই", score: -5 }
        ]
    },
    {
        id: 14, /*15*/
        question: "মনে কর, তোমার অনেক অর্থ রয়েছে,  ভাল উচ্চতা আর খুব ভাল স্বাস্থের অধিকারী তুমি; মনে কর তুমি সব রকমের চাপ থেকে মুক্ত তাই নিজের প্রিয় একটি কাজের মাঝে তুমি জীবন কাটাতে চাও। এমন হলে তুমি কোন পেশাটি বেছে নিবে? ",
        options: [
            { text: "ডাক্তার ", score: 0 },
            { text: "ইঞ্জিনিয়ার", score: 0 },
            { text: "অধ্যাপক", score: 0 },
            { text: "প্রশাসক", score: 0 },
            { text: "শিল্পী", score: 0 },
            { text: "খেলোয়াড়", score: 0 },
            { text: "জার্নালিস্ট", score: 0 },
            { text: "লেখক", score: 0 },
            { text: "বিচারক", score: 0 },
            { text: "রাজনীতিবিদ", score: 0 },
            { text: "সমাজসেবক", score: 0 },
            { text: "উদ্যোক্তা", score: 0 },
            { text: "গবেষক", score: 0 },
            { text: "মোটিভেটর", score: 0 },
            { text: "সেনা অফিসার", score: 0 },
            { text: "বিজ্ঞানী", score: 0 },
        ]
    },
    {
        id: 15,
        question: "আমার মনোযোগ সক্ষমতা",
        options: [
            { text: "অত্যন্ত শক্তিশালী", score: 10 },
            { text: "শক্তিশালী", score: 8 },
            { text: "মোটামুটি", score: 5 },
            { text: "কিছুটা দুর্বল", score: 0 },
            { text: "খুবই দুর্বল", score: -5 },

        ]
    },
    {
        id: 16,
        question: "যাকে অনুকরণ করতে পছন্দ করি তিনি",
        options: [
            { text: "একজন শিল্পী", score: 10 },
            { text: "একজন  শিক্ষক", score: 10 },
            { text: "একজন খেলোয়াড়", score: -5 },
            { text: "একজন অফিসার", score: 0 },
            { text: "একজন ব্যবসায়ী", score: -5 },
            { text: "একজন লেখক", score: 10 },
            { text: "একজন নেতা", score: 10 },
            { text: "একজন বিজ্ঞানী", score: -5 }
        ]
    },
    {
        id: 17,
        question: "আমাকে নিয়ে বাবা-মায়ের স্বপ্ন",
        options: [
            { text: "ডাক্তার/ ইঞ্জিনিয়ার", score: 10 },
            { text: "শিক্ষক/ গবেষক", score: 10 },
            { text: "খেলোয়াড়/ শিল্পী", score: -5 },
            { text: "ব্যবসায়ী/ উদ্যোক্তা", score: 0 },
            { text: "রাজনিতিক/ সরকারী কর্মকর্তা", score: -5 }
        ]
    },
    {
        id: 18,
        question: "আমার সৃতিশক্তিতে কোন কিছু",
        options: [
            { text: "একবার দেখেই মনে রাখি", score: 10 },
            { text: "কয়েকবার দেখলে মনে থাকে", score: 5 },
            { text: "দ্রতই ভুলে যায়", score: -5 },
            { text: "গভীরভাবে দেখি না", score: -5 },
            { text: "মনে থাকে না", score: -5 }
            ]
    },
    {
        id: 18,
        question: "নতুন কিছু আবিস্কার করতে তোমার কতটা ভালো লাগে?",
        options: [
            { text: "অত্যন্ত বেশি", score: 10 },
            { text: "আগ্রহবোধ করি না", score: -5 },
            { text: "এসবে আমার খুব কম আগ্রহ", score: 5 },
            { text: "মোটামুটি ভাবে চেষ্টা করি ", score: 0 }
        ]
    },
    /*
    {
        id: 19,
        question: "জটিল কোন সমস্যা সমাধান করার সক্ষমতা কেমন?",
        options: [
            { text: "অত্যন্ত বেশি", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম", score: 0 },
            { text: "জানা নাই", score: -5 }
        ]
    }
    ,*/
    {
        id: 19,
        question: "একজন শ্রোতা হিসেবে আমি",
        options: [
            { text: "অত্যন্ত মনোযোগী", score: 10 },
            { text: "মোটামুটি মনোযোগী", score: 5 },
            { text: "কম মনোযোগী", score: 0 },
            { text: "শুনতে অপছন্দ", score: 5 },
            { text: "শুনতে বিরক্ত হই", score: -5 }
        ]
    },
    {
        id: 20,
        question: "পরিবারে আমার গুরুত্ব",
        options: [
            { text: "অত্যন্ত বেশি ", score: 10 },
            { text: "যথেস্ট বেশি", score: 8 },
            { text: "মোটামুটি", score: 5 },
            { text: "কিছুটা কম", score: 0 },
            { text: "গুরুত্ব দেয় না", score: -5 }
        ]
    },
    /*
    {
        id: 20,
        question: "শপিং করতে কেমন আনন্দ হয় তোমার?",
        options: [
            { text: "অত্যন্ত বেশি", score: -5 },
            { text: "মোটামুটি", score: 10 },
            { text: "ভালো লাগে না", score: 1 },
            { text: "শপিং করি না", score: 0 }
        ]
    },*/
    {
        id: 21,
        question: "সৃজনশীল কাজে আমার আগ্রহ",
        options: [
            { text: "অত্যন্ত বেশি", score: 10 },
            { text: "যথেষ্ট", score: 8 },
            { text: "আগ্রহ নেই", score: -5 },
            { text: "অল্পই চেষ্টা করি", score: 5 },
            { text: "চেষ্টা করি না", score: 0 }
        ]
    },    
   /*{
        id: 21,
        question: "অন্যদের সামনে নিজ বক্তব্য উপস্থাপনের সক্ষমতা কেমন বলে তোমার মনে হয়?",
        options: [
            { text: "অত্যন্ত ভাল ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "পারি না", score: -5 },
            { text: "কিছুটা ভয় লাগে", score: 0 }
        ]
    },*/
    {
        id: 22,
        question: "সমস্যা/রহস্য সমাধানে আমার আগ্রহ",
        options: [
            { text: "অত্যন্ত বেশি", score: 10 },
            { text: "যথেষ্ট বেশি", score: 8 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম", score: 0 },
            { text: "নাই", score: -5 }
        ]
    },
    {
        id: 23,
        question: "শপিং বা কেনাকাটায় আমার আনন্দ",
        options: [
            { text: "অত্যন্ত বেশি", score: -5 },
            { text: "অনেক", score: 0 },
            { text: "কিছুটা", score: 10 },
            { text: "আগ্রহ নেই", score: 0 },
            { text: "শপিং করি না", score: 0 }
        ]
    },
    {
        id: 24,
        question: "মানুষের মাঝে বক্তব্য দিতে আমি",
        options: [
            { text: "অত্যন্ত সাবলীল", score: 10 },
            { text: "যথেষ্ট ভাল", score: 8 },
            { text: "মোটামুটি", score: 5 },
            { text: "চেষ্টা করি না", score: -5 },
            { text: "অস্থির লাগে", score: -5 }
        ]
    },
    
    {
        id: 25,
        question: "পরিশ্রমী কাজে আমার ধৈর্য",
        options: [
            { text: "অত্যন্ত মজবুত", score: 10 },
            { text: "বেশ ভাল", score: 8 },
            { text: "মোটামুটি", score: 5 },
            { text: "ধৈর্য খুবই কম", score: -5 },
            { text: "কিছুটা কম", score: 0 }
        ]
    },
    {
        id: 26,
        question: "আমি চ্যালেঞ্জ গ্রহণে পছন্দ করি",
        options: [
            { text: "খুব বেশি", score: 10 },
            { text: "কিছুটা", score: 8 },
            { text: "মোটামুটি", score: 5 },
            { text: "পছন্দ করি না", score: -5 },
            { text: "খুব কম", score: 0 }
        ]
    },
    {
        id: 27,
        question: "ইংরেজিতে কথা বলার সক্ষমতা",
        options: [
            { text: "অত্যন্ত ভাল", score: 10 },
            { text: "যথেষ্ট ভাল", score: 8 },
            { text: "মোটামুটি", score: 5 },
            { text: "পারি না", score: -5 },
            { text: "কিছুটা দুর্বল", score: 0 }
        ]
    },
    {
        id: 28,
        question: "ইংরেজিতে লেখায় আমি",
        options: [
            { text: "অত্যন্ত ভাল", score: 10 },
            { text: "ভাল", score: 8 },
            { text: "মোটামুটি", score: 5 },
            { text: "খুব দুর্বল", score: -5 },
            { text: "কিছুটা দুর্বল", score: 0 }
        ]
    },
    {
        id: 29,
        question: "প্রতিযোগিতায় যেসব পুরস্কার পেয়েছি",
        options: [
            { text: "১ম বা ২য়", score: 10 },
            { text: "অংশগ্রহণ করি নাই", score: -5 },
            { text: "৩য় বা ৪র্থ", score: 5 },
            { text: "পুরস্কার পাই নাই", score: -5 },
            { text: "অন্যান্য", score: 0 }
        ]
    },
    {
        id: 30,
        question: "আমার অত্যন্ত প্রিয় এমন বন্ধুদের সংখ্যা",
        options: [
            { text: "৫ এর কম", score: 10 },
            { text: "৬ হতে ১০", score: 8 },
            { text: "১১ হতে ১৫", score: 5 },
            { text: "নাই", score: -5 },
            { text: "১৫ এর অধিক", score: 10 }
        ]
    },
    {
        id: 31,
        question: "যেকোন পরিবেশে নীরবতায় আমার",
        options: [
            { text: "অত্যন্ত আনন্দ হয়", score: 10 },
            { text: "বেশ ভাল লাগে", score: 5 },
            { text: "খারাপ বোধ হয়", score: -5 },
            { text: "আগ্রহ নেই", score: -5 },
            { text: "অস্বস্তি হয়", score: -5 }
        ]
    },
    {
        id: 32,
        question: "আমি যুক্তি ও আবেগ কে দেখি",
        options: [
            { text: "যুক্তিই শতভাগ মূল্যবান", score: 5 },
            { text: "যুক্তি আবেগের থেকে মূল্যবান", score: 10 },
            { text: "৫০% + ৫০%", score: 0 },
            { text: "আবেগ যুক্তির চেয়ে মূল্যবান", score: 0 },
            { text: "আবেগই সবথেকে মূল্যবান", score: -5 }
        ]
    },
    {
        id: 33,
        question: "আমি আত্মবিশ্বাসী",
        options: [
            { text: "শতভাগ আত্মবিশ্বাসী", score: 5 },
            { text: "আশিভাগ আত্মবিশ্বাসী", score: 10 },
            { text: "পঞ্চাশভাগ আত্মবিশ্বাসী", score: 7 },
            { text: "ত্রিশভাগ আত্মবিশ্বাসী", score: 0 },
            { text: "আত্মবিশ্বাসী নই", score: -5 }
        ]
    },
    {
        id: 34,
        question: "দলের মাঝে থাকতে আমি",
        options: [
            { text: "অত্যন্ত পছন্দ করি", score: 10 },
            { text: "পছন্দ করি", score: 10 },
            { text: "পছন্দ করি না", score: 0 },
            { text: "কিছুটা ভাল লাগে", score: 5 },
            { text: "অস্বস্তি হয়", score: -5 }
        ]
    },
    {
        id: 35,
        question: "কারও খারাপ মন্তব্যে আমার",
        options: [
            { text: "খুব কষ্ট হয়", score: 0 },
            { text: "মুষড়ে পড়ি", score: -5 },
            { text: "কিছুটা কষ্ট হয়", score: 10 },
            { text: "গুরুত্ব দিই না", score: -5 },
            { text: "অপমানিত লাগে", score: 0 }
        ]
    },
    {
        id: 36,
        question: "বন্ধুরা আমাকে সাহায্য করে",
        options: [
            { text: "সবসময়", score: 10 },
            { text: "মাঝে মাঝে", score: 5 },
            { text: "কদাচিৎ", score: 0 },
            { text: "প্রয়োজন হয় না", score: -5 },
            { text: "সাহায্য করে না", score: -10 }
        ]
    },
    {
        id: 37,
        question: "আত্মীয়স্বজন বলেন আমি",
        options: [
            { text: "খুব চুপচাপ স্বভাবের", score: 0 },
            { text: "কিছুটা চুপচাপ স্বভাবের", score: 0 },
            { text: "রাগী স্বভাবের", score: 0 },
            { text: "খুব আনন্দপ্রিয় স্বভাবের", score: 0 },
            { text: "লাজুক স্বভাবের", score: 0 }
        ]
    },
    {
        id: 38,
        question: "প্রতি রাতে আমি ঘুমায়",
        options: [
            { text: "১১ টার পূর্বে", score: 10 },
            { text: "১১:৩০ এর পূর্বে", score: 10 },
            { text: "১২ টার মাঝে", score: 5 },
            { text: "অনির্দিষ্ট সময়", score: -5 },
            { text: "১২ টার পর", score: 0 }
        ]
    },
    {
        id: 39,
        question: "দৈহিকভাবে পরিশ্রমী কাজে আমি",
        options: [
            { text: "অত্যন্ত শক্তিশালী", score: 10 },
            { text: "মোটামুটি শক্তিশালী", score: 8 },
            { text: "কিছুটা কম", score: 0 },
            { text: "দুর্বল", score: -5 },
            { text: "কষ্ট হয়", score: -5 }
        ]
    },
    {
        id: 40,
        question: "আমার প্রিয় শখ",
        options: [
            { text: "অ্যাডভেঞ্চার করা", score: 5 },
            { text: "খেলাধুলা করা", score: 10 },
            { text: "বই পড়া", score: 10 },
            { text: "স্মার্টফোনের ব্যবহার", score: -5 },
            { text: "খেলা দেখা", score: 0 }
        ]
    },
    {
        id: 41,
        question: "নতুনদের সাথে বন্ধুত্ব করতে",
        options: [
            { text: "পারি খুব সহজেই", score: 10 },
            { text: "পারি না", score: -5 },
            { text: "সময় লাগে", score: 5 },
            { text: "সতর্ক থাকি", score: 0 },
            { text: "আগ্রহবোধ করি না", score: -5 }
        ]
    },
    {
        id: 42,
        question: "আমি মানুষকে বিশ্বাস করি",
        options: [
            { text: "খুব বেশি", score: 0 },
            { text: "কম বিশ্বাস করি", score: 0 },
            { text: "সতর্কভাবে", score: 10 },
            { text: "সহজেই", score: 0 },
            { text: "বিশ্বাস করি না", score: -5 }
        ]
    },
    {
        id: 43,
        question: "নতুন পরিবেশ মানিয়ে নিতে পারি",
        options: [
            { text: "খুব সহজেই", score: 10 },
            { text: "কিছুটা সহজেই", score: 0 },
            { text: "কিছুটা কষ্ট হয়", score: 0 },
            { text: "খুব সমস্যা হয়", score: -5 },
            { text: "পারি না", score: -5 }
        ]
    },
    {
        id: 44,
        question: "বিশৃঙ্খলা দেখলে আমি",
        options: [
            { text: "বিরক্ত হই", score: 0 },
            { text: "রাগান্বিত হই", score: -5 },
            { text: "শান্ত থাকি", score: 5 },
            { text: "বুঝতে চেষ্টা করি", score: 10 },
            { text: "গুরুত্ব দিই না", score: 0 }
        ]
    },
    {
        id: 45,
        question: "কনসার্ট বা আনন্দের অনুষ্ঠান",
        options: [
            { text: "অত্যন্ত উপভোগ করি", score: -5 },
            { text: "কিছুটা উপভোগ করি", score: 10 },
            { text: "এড়িয়ে চলি", score: 0 },
            { text: "কিছুটা বিরক্ত লাগে", score: 0 },
            { text: "খুবই বিরক্ত হই", score: -5 }
        ]
    },
    {
        id: 46,
        question: "আমি বুঝি জ্ঞান-বুদ্ধিতে আমি",
        options: [
            { text: "অত্যন্ত বুদ্ধিমান", score: -5 },
            { text: "বুদ্ধিমান নই", score: 10 },
            { text: "কিছুটা বুদ্ধিমান", score: 0 },
            { text: "দুর্বল", score: 10 },
            { text: "খুবই দুর্বল", score: 0 }
        ]
    },
    {
        id: 47,
        question: "কাওকে উচিত কথা বা সত্য কথা বলার ক্ষেত্রে আমি",
        options: [
            { text: "সবসময় সত্য বলি", score: 0 },
            { text: "অন্যদের অনুভূতি নিয়ে চিন্তা করে বলি", score: 10 },
            { text: "কেও কষ্ট পেলেও আমিও সত্য বলি", score: 0 },
            { text: "কেও কষ্ট পেতে পারে তাই চুপ থাকি", score: 10 },
            { text: "কাওকে উচিত কথা বলাতে আগ্রহী নই", score: 0 }
        ]
    },
    {
        id: 48,
        question: "সফলতার জন্য যা সবথেকে বেশি দরকার",
        options: [
            { text: "শতভাগ কঠোর পরিশ্রম", score: 10 },
            { text: "রাষ্ট্র ও সামাজিক সিস্টেম", score: 0 },
            { text: "বন্ধু ও পরিবারের সহায়তা", score: 0 },
            { text: "ভাগ্য", score: 0 },
            { text: "সবগুলোই", score: 0 }
        ]
    },
    {
        id: 49,
        question: "অধিকাংশ মানুষ বিফল হয় যার মূল কারণ",
        options: [
            { text: "রাজনৈতিক সমস্যা", score: 0 },
            { text: "ভ্রান্ত সামাজিক ব্যবস্থা", score: 0 },
            { text: "চারপাশের অসহযোগিতা", score: 0 },
            { text: "দুর্ভাগ্যের কারণে", score: 0 },
            { text: "ব্যক্তির নিজের ভুল", score: 10 }
        ]
    },
    {
        id: 50,
        question: "বন্ধুদের প্রিয় জিনিস আমাকে ব্যবহার করতে দেয়",
        options: [
            { text: "প্রায়ই দেয়", score: 10 },
            { text: "মাঝে মাঝে", score: 5 },
            { text: "দেয় না", score: -5 },
            { text: "কদাচিৎ দেয়", score: 0 },
            { text: "বিশেষ অনুরোধে", score: 0 }
        ]
    }  
];


const additionalQuizData = [
    //New Questions
    {
        id: 51,
        question: "অবসরে আমি যেভাবে সময় ব্যবহার করতে চাই",
        options: [
            { label: "a", text: "ছবি আকা, সঙ্গীত করা, লেখালেখি বা সৃষ্টিশীল কাজ", score: 0 },
            { label: "b", text: "অজানা বিষয় জানা, রহস্যের সমাধান বা বই পড়া", score: 0 },
            { label: "c", text: "গল্প করা, বন্ধুদের সাথে মজা করা বা প্রতিযোগিতামূলক কাজ", score: 0 },
            { label: "d", text: "বেড়ানো, মজাদার খাবার উপভোগ বা বিশ্রাম", score: 0 }
        ]
    },
    {
        id: 52,
        question: "যা আমাকে সবথেকে বেশি আনন্দিত করে",
        options: [
            { label: "a", text: "প্রশংসা পেলে কিংবা অন্যদেরকে আকর্ষণ করতে পারলে", score: 0 },
            { label: "b", text: "বুদ্ধির খেলা, ধাঁধাঁ উন্মোচন কিংবা কোন সমস্যার সমাধান", score: 0 },
            { label: "c", text: "অন্যের উপকারের জন্য কিছু করতে পারলে", score: 0 },
            { label: "d", text: "নানা স্থানে ভ্রমণ ও নতুনদের সাথে পরিচয় হলে", score: 0 }
        ]
    },
    {
        id: 53,
        question: "জটিল কোন সমস্যার সম্মুখীন হলে আমি",
        options: [
            { label: "a", text: "গভীরভাবে চিন্তা করি তবে দ্রুত সমাধান করার চেষ্টা করি", score: 0 },
            { label: "b", text: "শান্ত থেকে যৌক্তিকতার মানদণ্ডে পরিকল্পনা সাজায়", score: 0 },
            { label: "c", text: "সিনিয়র বা জ্ঞানিদের পরামর্শ নিয়ে সিদ্ধান্ত নিই", score: 0 },
            { label: "d", text: "সময় নিয়ে সমস্যাটিকে বুঝতে চেষ্টা করি", score: 0 }
        ]
    },
    {
        id: 54,
        question: "যে বিষয়ে পড়া বা আলোচনা আমার ভালো লাগে",
        options: [
            { label: "a", text: "প্রতিযোগিতা, শিল্প বা সাহিত্যের বিষয়", score: 0 },
            { label: "b", text: "বৈজ্ঞানিক আবিষ্কার কিংবা গবেষণার বিষয়", score: 0 },
            { label: "c", text: "রাজনীতি, মানবাধিকার ও পরিবেশ বিষয়", score: 0 },
            { label: "d", text: "স্বাস্থ্য, খাদ্য, কিংবা উপভোগ্য বিষয়", score: 0 }
        ]
    },
    {
        id: 55,
        question: "যে কাজ আমার সবথেকে পছন্দের",
        options: [
            { label: "a", text: "শৈল্পিক কোন কাজ", score: 0 },
            { label: "b", text: "বিজ্ঞান ও প্রযুক্তি নিয়ে কাজ", score: 0 },
            { label: "c", text: "সামাজিক উন্নয়নের কাজ", score: 0 },
            { label: "d", text: "সত্যের অনুসন্ধান করার কাজ", score: 0 }
        ]
    },
    {
        id: 56,
        question: "যে কাজে আমি স্বেচ্ছাশ্রম দিতে চাই",
        options: [
            { label: "a", text: "সৃজনশীল উদ্যোগে", score: 0 },
            { label: "b", text: "বৈজ্ঞানিক গবেষণা", score: 0 },
            { label: "c", text: "জাতি ও দেশ গঠন", score: 0 },
            { label: "d", text: "অভিজ্ঞতা সঞ্চয়", score: 0 }
        ]
    },
    {
        id: 57,
        question: "আমার সবথেকে বেশি আগ্রহ",
        options: [
            { label: "a", text: "নতুন কিছু উদ্ভাবনে", score: 0 },
            { label: "b", text: "যুক্তিবাদী গবেষণায়", score: 0 },
            { label: "c", text: "সেবামূলক কাজে", score: 0 },
            { label: "d", text: "বিদেশ ভ্রমণ", score: 0 }
        ]
    },
    {
        id: 58,
        question: "আমার শখ",
        options: [
            { label: "a", text: "খেলাধুলা করা", score: 0 },
            { label: "b", text: "এডভেঞ্চার করা", score: 0 },
            { label: "c", text: "আড্ডা দেওয়া", score: 0 },
            { label: "d", text: "জ্ঞানার্জন", score: 0 }
        ]
    },
    {
        id: 59,
        question: "যাকিছু আমাকে বেশি আকর্ষণ করে",
        options: [
            { label: "a", text: "নতুন কিছু করা", score: 0 },
            { label: "b", text: "রহস্যের উন্মোচন", score: 0 },
            { label: "c", text: "জনকল্যাণ", score: 0 },
            { label: "d", text: "বন্ধুদের সাথে সময়", score: 0 }
        ]
    },
    {
        id: 60,
        question: "নিজেকে সবথেকে সফল অনুভব করবো যদি",
        options: [
            { label: "a", text: "যুগান্তকারী কিছু উদ্ভাবন করি", score: 0 },
            { label: "b", text: "সর্বোচ্চ সামাজিক আসন অর্জন করি", score: 0 },
            { label: "c", text: "দুঃখী মানুষদের সুখী করতে পারি", score: 0 },
            { label: "d", text: "চারপাশের মানুষেরা আমাকে ভালোবাসে", score: 0 }
        ]
    },
    {
        id: 61,
        question: "১৫ বছর পর আমি নিজেকে দেখতে চাই",
        options: [
            { label: "a", text: "একজন ধনী মানুষ", score: 0 },
            { label: "b", text: "একজন খ্যাতিমান ব্যক্তিত্ব", score: 0 },
            { label: "c", text: "একজন সংগঠক", score: 0 },
            { label: "d", text: "একজন জ্ঞানী মানুষ", score: 0 }
        ]
    }
    
];
// Merge the original quiz data with the additional quiz data
const mergedQuizData = [...quizData, ...additionalQuizData];
const quizContainer = document.getElementById('quiz');
const breakContainer = document.getElementById('break');
const footer = document.getElementById('footer');
const timeDisplay = document.getElementById('time');
const questionNumberDisplay = document.getElementById('current-question');

const userAnswers = []; //array to store user's selected answers

let currentQuestion = 0;
let round = 1;

// Function to load question
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomNumber = Math.random()
        const j = Math.floor(randomNumber * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let i = 0;
/*
function loadQuestion() {
    // Shuffle 
    //const shuffledQuizData = shuffleArray(mergedQuizData);
    const shuffledQuizData = mergedQuizData;

    const currentQuizData = shuffledQuizData[currentQuestion];
    const options = currentQuizData.options.map((option, index) => {
        return `<div class="option" onclick="checkAnswer(${index})">${option.text}</div>`;
    }).join('');

    quizContainer.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <div class="options">${options}</div>
    `;
    questionNumberDisplay.textContent = currentQuestion + 1;
    ++i;
    if (i === 14 || i === 28) {
        timeDisplay.style.display = 'none';
        breakTime();
    }
}
*/
function loadQuestion() {
    const currentQuizData = mergedQuizData[currentQuestion];
    const options = currentQuizData.options.map((option, index) => {
        return `<div class="option" onclick="checkAnswer(${index})">${option.text}</div>`;
    }).join('');

    quizContainer.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <div class="options">${options}</div>
    `;
    questionNumberDisplay.textContent = currentQuestion + 1;
}
/*
//break time
function breakTime() {

    time = 2;

    breakContainer.style.display = 'block';
    quizContainer.style.display = 'none';

    const intervalId = setInterval(() => {
        timeDisplay.style.display = 'none';
        breakContainer.innerHTML = `${time}`;
        time--; // Decrease time by 1 second

        if (time < 0) {
            clearInterval(intervalId); // Stop the timer when it reaches 0
            breakContainer.style.display = 'none';
            quizContainer.style.display = 'block';
            breakContainer.innerHTML = `Next round will start soon...`;
            startTimer(30);
            loadQuestion()
            ++round;
        }
    }, 1000);

}*/


// Function to start timer
let isTimeRunning = true;
function startTimer(time) {
    const intervalId = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--; // Decrease time by 1 second
        if (time < 0) {
            clearInterval(intervalId); // Stop the timer when it reaches 0

            // showResult();
        }
    }, 1000);
}

// Function to check answer
function checkAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex; // Storeselected answer
    currentQuestion++;
    if (currentQuestion < mergedQuizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to start the quiz
function startQuiz() {
    document.querySelector('.landing-page').style.display = 'none'; // Hide landing page
    document.querySelector('.wrapper').style.display = 'block'; // Show quiz section
    loadQuestion(); // Load the first question
    startTimer(600); // Start the timer
}

// Function to handle form submission and show landing page
function showLandingPage(event) {
    event.preventDefault(); // Prevent form submission
    const introSection = document.querySelector('.intro-section');
    introSection.style.display = 'none'; // Hide intro section
    // const landingPage = document.querySelector('.landing-page');
    // landingPage.style.display = 'flex'; // Show landing page
}
// Add an event listener to the form for form submission
document.getElementById('userInfoForm').addEventListener('submit', showLandingPage);

// Function to calculate score for a question
function calculateScore(questionIndex) {
    const selectedOptionIndex = userAnswers[questionIndex];
    const selectedOption = mergedQuizData[questionIndex].options[selectedOptionIndex];
    return selectedOption?.score;
}

// Function to calculate score based on selected options from additional questions
function calculateFavoredOccupation() {
    const optionCounts = {};
    additionalQuizData.forEach(question => {
        const selectedOptionIndex = userAnswers[question.id - 1]; // Question ID starts from 1
        if (selectedOptionIndex !== undefined) {
            const selectedOption = question.options[selectedOptionIndex];
            optionCounts[selectedOption.text] = (optionCounts[selectedOption.text] || 0) + 1;
        }
    });

    // Find the most selected option
    let maxOptionCount = 0;
    let favoredOption = '';
    for (const optionText in optionCounts) {
        if (optionCounts[optionText] > maxOptionCount) {
            maxOptionCount = optionCounts[optionText];
            favoredOption = optionText;
        }
    }

    return favoredOption;
}


function getAdviceText() {
    const adviceText = [];
    /*const adviceMapping = {
        1: "<br>* প্রতিদিন অন্তত কয়েক পৃষ্ঠা যে কোন ধরণের বই পড়ার অভ্যাস করতে হবে তোমাকে।<br>",
        2: "* প্রতিদিন অন্তত এক ঘণ্টা শারীরিকভাবে পরিশ্রমী ও ঘাম ঝরানোর মত যে কোন কাজ কিংবা ব্যায়াম করবে।<br>",
        5: "* তোমার মাঝে ডিজিটাল এডিকশনের প্রকট আশংকা রয়েছে, তাই শুধুমাত্র বিশেষ প্রয়োজন ব্যতিত ইন্টারনেটের ব্যবহার হতে দূরে থাকবে।<br>",
        6: "* দিনের অনেকটা সময় অযথায় কাটিয়ে দেওয়ার অভ্যাস রয়েছে তোমার মাঝে; সময়কে আরও  ভালোভাবে ব্যবহার করার অভ্যাস করবে।<br>",
        7: "* উচ্চতাভীতি ও পানিভীতি দূর করতে ভয়ের কাজটিই নিয়মিত চেষ্টা করতে হবে তোমায়। ভীতিকর কাজটিকে এত বেশি চর্চা করবে যেন তা তোমার দৈনিন্দন সাধারণ কাজের অংশ হয়ে যায়, তাহলে সহজেই তুমি ভয়কে জয় করে আরও  আত্মবিশ্বাসী হয়ে উঠতে পারবে।<br>",
        9: "* নিজের দেশ ও সমাজের বিষয়ে অনেকের মত তোমার মাঝেও কিছুটা হীনমন্যতা রয়েছে যা হতে তোমার উত্তরণ দরকার। ভেবে দেখ, এদেশের অধিকাংশ মানুষই গরীব অথচ তারা সৎ, পরিশ্রমী, সহযোগী আর  বন্ধুত্বপূর্ণ । এই দেশের প্রতি, এই মানুষদের প্রতি দায়িত্ব রয়েছে তোমার তাই মাঝে মাঝে গ্রামের মানুষের কাছে বেড়াতে যাও, দেশকে দেখ,দেশের ইতিহাসকে জানার চেষ্টা করো।<br>",
        12: "* এস এস সি ও এইচ এস সি পরীক্ষায় জিপিএ ৫ গ্রেড পাওয়ার জন্য সর্বোচ্চ পরিশ্রমে লেগে থাকতে হবে তোমায়। মনে রেখ, ভালো গ্রেডই তোমার পরিশ্রম করার মাপকাঠি আর ছাত্র জীবনে তোমার সম্মানের পরিচয়।<br>",
        13: "* বন্ধুদের কাজে আরও বেশি সহযোগী হও এবং তাদের সাথে আন্তরিক সম্পর্ক গড়ে তোলার কৌশল আয়ত্ব করতে চেষ্টা কর। তাদের সাথে বিতর্ক না করে তাদের মতামতকে সম্মান কর। সব সময় সঠিক কথা বলে নিজের জ্ঞান প্রচার করার চেয়ে তাদের সাথে সম্পর্ক গড়া ও সে সম্পর্ক রক্ষা করা অনেক লাভজনক।<br>",
        16: "* কোন একক কাজে গভীর মনোযোগ নিবদ্ধ করার কিছু বাস্তব ধর্মী ট্রেনিং নাও এবং সম্ভব হলে প্রতিদিন ২/৩ বার কয়েক মিনিটের জন্য মেডিটেশন চর্চা কর।<br>",
        17: "* মানুষকে তাদের কাজে যথাসম্ভব সাহায্য করার অভ্যাস করো; কেও না চাইলে নিজের মতামত দেওয়া থেকে বিরত থাকো। মতামত দেওয়ার ক্ষেত্রে সংক্ষেপে, অল্প কথায় যৌক্তিকভাবে এবং ধীরস্থির ভাবে কথা বলার অভ্যাস রপ্ত করবে।<br>",
        20: "* বাবা-মায়ের অর্থ দিয়ে শখ পূরণ করা তোমার আত্ম সম্মানের জন্য ক্ষতিকর, তাই শুধুমাত্র প্রয়োজনীয় কাজে অর্থ খরচের চেষ্টা করবে। অপচয় রোধ করার অভ্যাস করবে। শখ পূরণের জন্য নিজে উপার্জন করা পর্যন্ত অপেক্ষা কর, সেটাই তোমার মূল্যবোধের অংশ হওয়া উচিত।<br>",
        21: "* সংক্ষেপে এবং শুধু অর্থপূর্ণ কথা বলার অভ্যাস করবে। যা কিছু তোমার জানা নাই সে বিষয়ে চুপ থাকবে। আয়নার সামনে দাঁড়িয়ে নিজের প্রতিবিম্বের চোখের দিকে তাকিয়ে নিজের সাথে নিজেই কথা বলার অনুশীলন করবে; এইভাবে কোন একটা বিষয়ে নিজের মতামত উপস্থাপনের চর্চা তোমাকে বেশি আত্মবিশ্বাসী হতে সাহায্য করবে। তোমার যুক্তি তুমি উপস্থাপন করবে, সেখানে তোমাকে নিয়ে অন্যরা কি ভাবছে তা নিয়ে একেবারেই চিন্তা করবে না।<br>",
        24: "* নিজের বাড়িতে এবং সমমনা বন্ধুদের সাথে ইংরেজিতে কথা বলার চর্চা করবে। প্রথমে ভুল হবে কিন্তু তা বলে লজ্জা পেয়ে চর্চা বন্ধ করবে না। সম্ভব হলে কোন একটা বিষয়ের উপর ইংরেজিতে বক্তব্য দিবে আর সেটিকে রেকর্ড করে নিজেই নিজের দুর্বলতাগুলো চিহ্নিত করবে, এবং পুনরায় অনুশীলন করবে। ইংরেজি ভাষায় যে সব ডকুমেন্টারি কিংবা নিউজ রয়েছে তা শুনবে এবং দেখবে।<br>",
        30: "* রাত ১০ টার মাঝেই ঘুমিয়ে যাওয়া আর ভোর ৫ টার মাঝে জেগে উঠে দিন শুরু করার অভ্যাস করবে। প্রয়োজনে দুপুরে একটু ঘুমিয়ে নিবে।<br>"
    };*/
    const adviceMapping = {
        1: "<br>* অভ্যাসই ভালোলাগার পূর্বশর্ত, তাই প্রতিদিন যেকোনো ধরণের বই পড়ার ও কিছু কিছু লেখার অভ্যাস করতে হবে তোমাকে। লেখাপড়ার সাথে লেগে থাকতে হবে, তাহলেই লেখাপড়াতে আনন্দ পাবে। এমন সব বন্ধুদের সাথে মিশবে যারা লেখাপড়াতে তোমার চেয়ে ভালো করছে।  <br>",//1,4
        2: "* প্রতিদিন কমপক্ষে একঘণ্টা ঘাম ঝরানোর মত যেকোনো পরিশ্রমী কাজ কিংবা ব্যায়াম করবে এবং  অন্তত ১৫ মিনিট শরীরে খোলা রোদ লাগাবে। স্বাদ নয় বরং শরীরের জন্য উপকারী এমন সব পুষ্টিকর খাবার খাওয়ার অভ্যাস করবে। <br>",//2,234

        3: "* সময়কে সুনির্দিষ্ট  কাজে ব্যবহার করার সচেতন থাকার অভ্যাস করতে হবে তোমায় । প্রতিদিন নির্দিষ্ট সময়ে  ভোরে ঘুম থেকে জেগে দিন শুরু করবে। নিজেকে নিয়মের মাঝে চালনার অভ্যাস করতে হবে তোমায়। <br>",//3,23
        4: "* সময়কে সুনির্দিষ্ট  ও প্রয়োজনীয় কাজে ব্যবহারে সচেতন থাকার অভ্যাস করতে হবে তোমায়। পরিমিত এবং স্বাস্থকর খাবার গ্রহণের প্রতি আরও মনোযোগী এবং প্রতিদিন নির্দিষ্ট সময়ে  ভোর বেলায় ঘুম থেকে জেগে দিন শুরু করবে।  নিজেকে নিয়মের মাঝে চালনার অভ্যাস করতে হবে।<br>",//3,4
        5: "* তোমার মাঝেও ডিজিটাল এডিকশনের প্রকট আশংকা রয়েছে, তাই শুধুমাত্র বিশেষ প্রয়োজন ব্যতিত ইন্টারনেটের ব্যবহার ও টিভি দেখা হতে দূরে থাকা উচিত।<br>",//5,12
        6: "* আত্মসম্মানবোধে তুমি কিছুটা দুর্বল রয়েছ তাই নিজেকে এমন ভাবে গড়ে তোল যেন চারপাশের অন্যরা তোমার বন্ধু হতে আগ্রহী হয়ে ওঠে। <br>",//5,4
        7: "*  পরিশ্রমী ও আত্মবিশ্বাসী মানুষ হয়ে উঠতে অন্যদের কাজে সহযোগিতা করার অভ্যাস করো, তাহলে তারাও তোমার সহযোগী হয়ে উঠবে।<br>",//6,4
        8: "* উচ্চতাভীতি, অন্ধকারভীতি অসফল হওয়ার ভয় কিংবা পানিভীতি দূর করতে ভয়ের কাজটিই একটু একটু করে বাড়িয়ে দাও । ভীতিকর কাজটিকে এত বেশি চর্চা করো যেন তা তোমার দৈনিন্দন সাধারণ কাজের অংশ হয়ে যায়, তাহলে সহজেই তুমি ভয়কে জয় করে আরও  আত্মবিশ্বাসী হয়ে উঠতে পারবে। <br>",//7,012
        9: "* নিজ দেশের বিষয়ে হয়ত তোমার মাঝে কিছুটা হীনমন্যতা রয়েছে। কিন্তু বাংলাদেশের প্রতিটি অংশে যেমন তোমার অধিকার তেমনি এই দেশটিকে সুন্দর করে গড়ে তোলার জন্য তোমার দায়িত্বই সর্বাধিক। ভেবে দেখ, এদেশের অধিকাংশ মানুষই গরীব অথচ তারা সৎ, পরিশ্রমী, সহযোগী আর বন্ধুত্বপূর্ণ । মাঝে মাঝে কিছু সময় নিয়ে গ্রামে বেড়াতে যাও, প্রকৃতির মাঝে সময় কাটাও, দেশকে দেখ,দেশের ইতিহাসকে জানার চেষ্টা করো।<br>",//8,0123
        10: "* এস এস সি ও এইচ এস সি পরীক্ষায় জিপিএ ৫ গ্রেড পাওয়ার জন্য সর্বোচ্চ পরিশ্রমে লেগে থাকতে হবে তোমায়। মনে রেখ, ভালো গ্রেড পাওয়া তোমার আত্মসম্মান ও পরিশ্রম করার মাপকাঠি আর ছাত্রজীবনে তোমার একমাত্র মর্যাদার পরিচয়।<br>",//11,34
        11: "* বন্ধুদের প্রতি আরও বেশি সহযোগী হও এবং তাদের সাথে আন্তরিক সম্পর্ক গড়ে তোলার কৌশল  রপ্ত করে নাও। সবসময় সঠিক কথা বলে নিজেকে সঠিক প্রমাণ করার চেয়ে মানুষের সাথে সম্পর্ক গড়া ও সে সম্পর্কগুলো রক্ষা করাই তোমার ভবিষ্যৎ জীবনের জন্য অধিক লাভজনক। তাই, বন্ধুদের সাথে বিতর্কে না জড়িয়ে বরং তাদের মতামতকে সম্মান করো।<br>",//12,234
        12: "*  জীবনকে পরিপূর্ণভাবে জানার মধ্য দিয়েই  কেবল তুমি জীবন থেকে সর্বোচ্চ আনন্দটুকু উপভোগ করতে পারবে তাই বই পড়ার অভ্যাস করো; এই অভ্যাস তোমাকে সফল, আলোকিত ও প্রাণবন্ত মানুষ হতে সাহায্য করবে। <br>",//13,34
        13: "* কোন একটি কাজে গভীর মনোযোগ নিবদ্ধ করার বাস্তবধর্মী প্রশিক্ষণ নেওয়ার প্রয়োজন রয়েছে তোমার। মনোযোগ বৃদ্ধির অনেক উপায় রয়েছে, সেগুলো জেনে নিয়ে অনুশীলন করো; সম্ভব হলে প্রতিদিন ২/৩ বার কয়েক মিনিটের জন্য মেডিটেশন চর্চা করো।<br>",//15,234
        14: "* কোন কিছু দেখার সময় কিছুটা সময় নিয়ে বিয়য়ের ক্ষুদ্র ক্ষুদ্র অংশগুলোকে দেখার অভ্যাস করো এবং নিজের মনকে সেইসব ক্ষুদ্র বিষয়গুলো মনে রাখার জন্য অটোসাজেশন দেওয়ার চর্চা করো।<br>",//18,234
        15: "* আজ তুমি যা কিছু বলতে চলেছ, তোমার সেই বক্তব্য থেকে তুমি নতুন কিছুই অর্জন করতে পারবে না; কিন্তু তুমি যদি অন্যদের কথা মনোযোগ দিয়ে শুনো তবে নিশ্চিতভাবেই নতুন কিছু অভিজ্ঞতা ও জ্ঞান তুমি অর্জন করবে, তাই লাভবান হতে হলে একটিভ শ্রোতা হওয়ার  অভ্যাস করতে হবে তোমায়।<br>",//19,234
        16: "* অন্যদের কাজে যথাসম্ভব সাহায্য করার অভ্যাস করো। কথা বলার ক্ষেত্রে কেও চাইলেই কেবল নিজের মতামত দাও অন্যথায় মতামত দেওয়া থেকে বিরত থাকো। আপন ব্যক্তিত্বকে মজবুত করতে সংক্ষেপে, অল্প কথায় যৌক্তিকভাবে এবং ধীরস্থিরভাবে কথা বলার অভ্যাস রপ্ত করবে। তোমার ব্যক্তিত্বই তোমার পরিচয় তাই আপন ব্যক্তিত্বকে শক্তিশালী করে তোল। <br>",//20,234
        17: "* বাবা-মায়ের কষ্টার্জিত অর্থ দিয়ে শখ পূরণ করা শুধু দুর্বল ব্যক্তিত্বের পরিচয় তাই নয় বরং আত্মসম্মানের পক্ষে ক্ষতিকর, তাই শুধুমাত্র নিতান্ত প্রয়োজনেই কেবল বাবা-মায়ের থেকে নেওয়া অর্থটুকু খরচের অভ্যাস করবে। যেকোন শখ পূরণের জন্য নিজের উপার্জন পর্যন্ত অপেক্ষা করাটাই তোমার উন্নত ব্যক্তিত্বের মূল্যবোধ হওয়া উচিত।<br>",//23,01
        18: "* অন্যদের সম্মুখে নিজের মতামত সঠিকভাবে উপস্থাপনের দক্ষতা বৃদ্ধির জন্য কিছুটা সময় নিয়ে চিন্তা করে কথাগুলিকে গুছিয়ে নেওয়ার অভ্যাস করবে। আয়নার সামনে দাঁড়িয়ে অথবা  কাল্পনিক কোন স্রোতাকে উদ্দেশ্য করে যেকোন বিষয়ে বক্তব্য দেওয়ার অভ্যাস করতে হবে তোমায় আর এই অনুশীলন তোমাকে গুছিয়ে কথা বলায় চমৎকারভাবে আত্মবিশ্বাসী করবে।<br>",//24,3
        19: "* সংক্ষেপে এবং শুধু অর্থপূর্ণ কথা বলার অভ্যাস করবে। যা কিছু তোমার জানা নাই সে বিষয়ে চুপ থাকবে। আয়নার সামনে দাঁড়িয়ে নিজের প্রতিবিম্বের চোখের দিকে তাকিয়ে নিজের সাথে নিজেই কথা বলার অনুশীলন করবে; এইভাবে  নিজের মতামত ও বক্তব্য উপস্থাপনের চর্চা তোমাকে অনেক বেশি আত্মবিশ্বাসী হতে সাহায্য করবে। অত্যন্ত ভদ্রভাবে তোমার যুক্তি তুমি উপস্থাপন করবে, সেখানে  দর্শক বা শ্রোতাগণ তোমাকে নিয়ে  ভাবছে তা নিয়ে একেবারেই চিন্তা করবে না।<br>",//24,4
        20: "*  রহস্য গল্প, বীরত্বের গল্প আর ঐরুপ গল্প দিয়ে নির্মিত বই, কবিতা, নাটক, ডকুমেন্টরি কিংবা মুভি দেখবে।  সমস্যা যেখানে আছে সমাধান সেখানেই লুকিয়ে থাকে, তাই নিজেকে অন্যদের তুলনায় উচ্চ স্থানে প্রতিষ্ঠিত করতে অন্যরা যা কিছুর সমাধান করতে ভয় করে তুমি সেই ভয়কে জয়ের কাজ শুরু করো; রহস্য আর সমস্যা সমাধানে বন্ধুদের সাথে প্রতিযোগিতা করার গেইম খেলতে পারো। <br>",//26,234
        21: "* পরিবারের সদস্যদের সাথে কিংবা সমমনা বন্ধুদের সাথে ইংরেজিতে কথা বলার চর্চা করবে । প্রথম প্রথম হয়ত কিছু  ভুল  হবে কিন্তু  লজ্জা না পেয়ে চর্চা চালিয়ে যেতে হবে। সহজ কোন বিষয়ের উপর ইংরেজিতে বক্তব্য লিখে নিয়ে আয়নার সামনে নিজের প্রতিবিম্বের চোখের দিকে তাকিয়ে কথা বলার অভ্যাস করবে। মাঝে মাঝে নিজের বক্তব্য রেকর্ড করে নিজেই নিজের দুর্বলতাগুলো চিহ্নিত করবে, এবং ভুল শুধরে নিয়ে পুনরায় অনুশীলন করবে। ইংরেজি ভাষায় যেসব ডকুমেন্টারি কিংবা নিউজ রয়েছে তা শুনবে এবং দেখবে। নিশ্চিতভাবেই, এমন অভ্যাস কিছুদিনের মাঝে তোমাকে ইংরেজিতে কথা বলায় পারদর্শী করে তুলবে। <br>",//27,234
        22: "* জীবন সফলতার পেছনে হিউম্যান নেটওয়ার্কিং অত্যন্ত শক্তিশালী ভুমিকা রাখে তাই সফল হতে হলে তোমাকে অন্যদের সাথে সংযুক্ত থাকা ও তাদের পরিচালিত করার দক্ষতা অর্জন করতে হবে; মানুষের সাথে এমন ভাবে মিশবে যেন তারা স্বেচ্ছায় তোমার প্রতি সহযোগী হয়ে ওঠে। <br>",//36,234
        23: "* ব্যক্তিগত জীবন যাপনে শৃঙ্খলাই তোমার জীবন সফলতার দিক নির্ধারক তাই রাত ১০ টার মাঝেই ঘুমিয়ে যাওয়া আর ভোর ৫ টার মাঝে জেগে উঠে দিন শুরু করার অভ্যাস করবে; প্রয়োজনে দুপুরে একটু ঘুমিয়ে নিবে।<br>",//38,01234
        24: "* নিয়মিত ব্যায়াম করবে এবং সবসময় শারীরিকভাবে সক্রিয় থাকার জন্য কিছু কিছু পরিশ্রমী কাজে নিজেকে নিযুক্ত রাখবে। শক্তিশালী ব্যক্তিত্ব গঠনে অবশ্যই নিজেকে শারীরিকভাবে একজন শক্তিশালী মানুষ হিসেবে গড়ে তুলতে হবে তোমাকে। <br>"//39,234
    };
    adviceText.push("<br>");
    quizData.forEach((question, index) => {
        const selectedOptionIndex = userAnswers[index];
        const option = question.options[selectedOptionIndex];
        //adviceText.push("<br>");
        if (option) {
           /* if (index === 1 && selectedOptionIndex === 3) adviceText.push(adviceMapping[1]);
            if ((index === 2 && [1, 2, 3].includes(selectedOptionIndex))) adviceText.push(adviceMapping[2]);
            if (index === 5 && selectedOptionIndex === 1) adviceText.push(adviceMapping[5]);
            if (index === 6 && selectedOptionIndex === 3) adviceText.push(adviceMapping[6]);
            if ((index === 7 && [1, 2].includes(selectedOptionIndex))) adviceText.push(adviceMapping[7]);
            if ((index === 9 && [1, 2, 3].includes(selectedOptionIndex))) adviceText.push(adviceMapping[9]);
            if ((index === 12 && [1, 2, 3].includes(selectedOptionIndex))) adviceText.push(adviceMapping[12]);
            if ((index === 13 && [1, 2, 3].includes(selectedOptionIndex))) adviceText.push(adviceMapping[13]);
            if ((index === 16 && [1, 2, 3].includes(selectedOptionIndex))) adviceText.push(adviceMapping[16]);
            if ((index === 17 && [1, 2, 3].includes(selectedOptionIndex))) adviceText.push(adviceMapping[17]);
            if (index === 20 && selectedOptionIndex === 0) adviceText.push(adviceMapping[20]);
            if ((index === 21 && [1, 2, 3].includes(selectedOptionIndex))) adviceText.push(adviceMapping[21]);
            if ((index === 24 && [1, 2, 3].includes(selectedOptionIndex))) adviceText.push(adviceMapping[24]);
            if ((index === 30 && [1, 2, 3].includes(selectedOptionIndex))) adviceText.push(adviceMapping[30]);*/
            
            if (index === 1 && selectedOptionIndex === 4) adviceText.push(adviceMapping[1]);
            if ((index === 2 && [2,3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[2]);
            if ((index === 3 && [2,3].includes(selectedOptionIndex))) adviceText.push(adviceMapping[3]);
            if (index === 3 && selectedOptionIndex === 4) adviceText.push(adviceMapping[4]);
            if ((index === 5 && [1,2].includes(selectedOptionIndex))) adviceText.push(adviceMapping[5]);
            if (index === 5 && selectedOptionIndex === 4) adviceText.push(adviceMapping[6]);
            if (index === 6 && selectedOptionIndex === 4) adviceText.push(adviceMapping[7]);
            if ((index === 7 && [0,1,2].includes(selectedOptionIndex))) adviceText.push(adviceMapping[8]);
            if ((index === 8 && [0,1,2,3].includes(selectedOptionIndex))) adviceText.push(adviceMapping[9]);
            if ((index === 11 && [3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[10]);
            if ((index === 12 && [2,3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[11]);
            if ((index === 13 && [3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[12]);
            if ((index === 15 && [2,3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[13]);
            if ((index === 18 && [2,3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[14]);
            if ((index === 19 && [2,3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[15]);
            if ((index === 20 && [2,3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[16]);
            if ((index === 23 && [0,1].includes(selectedOptionIndex))) adviceText.push(adviceMapping[17]);
            if (index === 24 && selectedOptionIndex === 3) adviceText.push(adviceMapping[18]);
            if (index === 24 && selectedOptionIndex === 4) adviceText.push(adviceMapping[19]);
            if ((index === 26 && [2,3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[20]);
            if ((index === 27 && [2,3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[21]);
            if ((index === 36 && [2,3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[22]);
            if ((index === 38 && [0,1,2,3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[23]);
            if ((index === 39 && [2,3,4].includes(selectedOptionIndex))) adviceText.push(adviceMapping[24]);
        }
    });


    return adviceText.join('\n');
}

function showResult() {

    document.getElementById('footer').style.display = 'none';
    let totalScore = 0;
    for (let i = 0; i < mergedQuizData.length; i++) {
        totalScore += calculateScore(i) ? calculateScore(i) : 0;
    }

    const optionClickCounts = {};
    additionalQuizData.forEach(question => {
        const selectedOptionIndex = userAnswers[question.id - 1]; // Question ID starts from 1
        if (selectedOptionIndex !== undefined) {
            const selectedOption = question.options[selectedOptionIndex];
            optionClickCounts[selectedOption.text] = (optionClickCounts[selectedOption.text] || 0) + 1;
        }
    });

    const ocupation = ["ডাক্তার ", "ইঞ্জিনিয়ার", "অধ্যাপক", "প্রশাসক", "শিল্পী", "খেলোয়াড়", "জার্নালিস্ট", "লেখক", "বিচারক", "রাজনীতিবিদ", "সমাজসেবক", "উদ্যোক্তা", "গবেষক", "মোটিভেটর", "সেনা অফিসার", "বিজ্ঞানী"];
    var oc = ocupation[Math.floor(Math.random() * ocupation.length)];
    
    const userName = document.getElementById('name').value;
    const userPhone = document.getElementById('phone').value;
    // Logic to check score and option clicks
    // todo 
    document.querySelector('.intro-section').style.display = 'flex';
    document.querySelector('.wrapper').style.display = 'none';
    if (totalScore >= 145) {
        const optionLessThan6 = Object.values(optionClickCounts).some(count => count < 6);
        console.log(optionLessThan6)
        if (optionLessThan6) {
            // Display message with Restart Button
            quizContainer.innerHTML = ` প্রিয় ${userName} , তোমার মাঝে অফুরন্ত সম্ভাবনা রয়েছে।কিন্তু তোমার দেওয়া উত্তরগুলোতে কিছু  অসামঞ্জস্যতা পরিলক্ষিত হচ্ছে। তুমি এই এসেসমেন্ট সিটগুলো পুনরায় পূরণ কর।আমরা তোমাকে সহযোগিতা করতে চাইছি তবে আমাদের দেওয়া প্রশ্নগুলোর উত্তর দেওয়ার সময় তুমি নিজের অন্তরে উপস্থিত হওয়া প্রথম অনুভুতিটি দিয়ে পুনরায় উত্তর দাও। তুমি শুধু প্রশ্নগুলো পড়বে আর নিজের জন্য সবথেকে সত্য মনে হওয়া উত্তরটি বেছে নিবে। মনে রেখ, এখানে সঠিক কিংবা ভুল উত্তর বলে কিছু নেই, তুমি শুধু সততার সাথে আপন মনের প্রথম অনুভূতি থেকে উত্তরগুলো বেছে নেবে। <br> 
            <button onclick="location.reload()" class="dbtn">Restart</button>`;
        } else {
            /**advice**/
            quizContainer.innerHTML = `অনেক অনেক অভিনন্দন প্রিয় ${userName}, তুমি ঠিক পথেই এগিয়ে চলেছ। তোমার পেশাগত লক্ষ্য, তোমার জীবন যাপন এবং দৈনিন্দন অভ্যাসগুলো সঠিক ও পরিপূর্ণভাবে সামঞ্জস্যপূর্ণ। একজন সফল ${oc} হওয়ার জন্য সবথেকে উপযুক্ত তুমি তাই এই পেশাটিই তোমার লক্ষ্য হওয়া উচিত। এই লক্ষ্যটি অর্জন করলে তুমি নিজ পেশাতে একজন কিংবদন্তী সৃজনশীল মানুষ হতে পারবে। প্রিয় কাজে প্রিয় পেশায় তুমি সুখী মানুষদের একজন হয়ে জীবনকে অনেক বেশি উপভোগ করতে পারবে। ${oc} হওয়ার এই লক্ষ্য পূরণে তোমার মাঝে যে প্রবল অনুশক্তি ও সম্ভাবনা রয়েছে তা অর্জন করার জন্য তোমাকে নিচের পরামর্শগুলো মেনে চলতে অনুরোধ করছি। লক্ষ্য পূরণে তোমার প্রতি মহান স্রষ্টার পক্ষ হতে আসুক অফুরন্ত সাহায্য আর মানব কল্যাণের পথে তুমি এগিয়ে চল- এই দোয়া রইল। <br>
            ${getAdviceText()}
            <button " class="download-pdf-button dbtn" onclick="downloadPDF()">Download PDF</button>`;
        }
    } else {
        const optionMoreThan6 = Object.values(optionClickCounts).some(count => count >= 6);
        if (optionMoreThan6) {
            //advice
            // Display message  with download button
            quizContainer.innerHTML = ` প্রিয় ${userName}, তোমার মাঝে অফুরন্ত সম্ভাবনা রয়েছে। অনেক ক্ষেত্রে তুমি অত্যন্ত শক্তিশালী কিন্তু তোমার পেশাগত লক্ষ্যের সাথে তোমার জীবন যাপন এবং দৈনিন্দন অভ্যাসগুলো বেশ কিছুটা অসামঞ্জস্যপূর্ণ। তবে দুর্বলতাগুলো সহজেই কাটিয়ে ওঠার সব সামর্থ্য ও সম্ভাবনা তোমার মাঝেই রয়েছে। জীবন লক্ষ্য পূরণে তোমার মাঝে যে সুপ্ত শক্তি ঘুমিয়ে রয়েছে তাকে জাগিয়ে তুলতে হবে তোমাকেই। আমরা তোমাকে নিচের পরামর্শগুলো মেনে চলার জন্য অনুরোধ করছি; তোমার দৈনিন্দন জীবন যাপন ও অভ্যাসের মাঝে এই পরিবর্তনগুলো আনতে পারলে নিশ্চিত ভাবেই তুমি আপন লক্ষে সফল হবে। তোমার প্রতি মহান স্রষ্টার সাহায্য সামনেই অপেক্ষা করছে, তুমি শুধু চেষ্টা করে যাও আন্তরিকতার সাথে। মানবকল্যাণের পথে তুমি এগিয়ে চল- এই দোয়া রইল।<br>
            ${getAdviceText()}
            <button  class="download-pdf-button dbtn" onclick="downloadPDF()">Download PDF</button>`;
        } else {
        
            // Display message  with download button
            quizContainer.innerHTML = ` প্রিয় ${userName}, তোমার মাঝে অফুরন্ত সম্ভাবনা রয়েছে এবং তুমি চেষ্টা করলে নিশ্চিতভাবেই একজন অত্যন্ত সফল ${oc} হতে পারবে। একজন সফল ${oc} হওয়ার জন্য সবথেকে উপযুক্ত তুমি তাই এই পেশাটিই তোমার লক্ষ্য হওয়া উচিত। এই লক্ষ্যটি অর্জন করলে তুমি নিজ পেশাতে একজন কিংবদন্তী সৃজনশীল মানুষ হতে পারবে। প্রিয় কাজে প্রিয় পেশায় তুমি সুখী মানুষদের একজন হয়ে জীবনকে অনেক বেশি উপভোগ করতে পারবে। ${oc} হওয়ার এই লক্ষ্য পূরণে তোমার মাঝে যে প্রবল অনুশক্তি ও সম্ভাবনা রয়েছে তা অর্জন করার জন্য তোমাকে নিচের পরামর্শগুলো মেনে চলতে অনুরোধ করছি। লক্ষ্য পূরণে তোমার প্রতি মহান স্রষ্টার পক্ষ হতে আসুক অফুরন্ত সাহায্য আর মানব কল্যাণের পথে তুমি এগিয়ে চল- এই দোয়া রইল।<br>
            ${getAdviceText()}
            <button  class="download-pdf-button dbtn" onclick="downloadPDF()">Download PDF</button>`;
        }
    }
}

function displayDownloadOption() {
    showResult();

    document.querySelector('.intro-section').style.display = 'none';

    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.wrapper').style.display = 'block';
}


function downloadPDF() {
    const userName = document.getElementById('name').value;
    const userPhone = document.getElementById('phone').value;
    const uniqueNumber = Math.floor(Math.random() * 1000000); // Generate a random number
    const fileName = `${userName}_${userPhone}_${uniqueNumber}.pdf`;


    const element = document.getElementById('wrapper');

    // Create a copy of the element to modify for PDF generation
    const elementCopy = element.cloneNode(true);
    const downloadButton = elementCopy.querySelector('.download-pdf-button');
    if (downloadButton) {
        downloadButton.parentNode.removeChild(downloadButton);
    }

    // Add styling to the container to mimic a prescription
    elementCopy.style.position = 'relative';
    elementCopy.style.padding = '5px';
    elementCopy.style.border = '1px solid #081e70';
    elementCopy.style.backgroundColor = '#f9f9f9';
    elementCopy.style.textAlign = 'justify'; // Justify the text
    elementCopy.style.fontSize = '3px';

    // name and address (Header)
    const headerDiv = document.createElement('div');
    headerDiv.style.textAlign = 'center';
    headerDiv.style.fontSize = '20px';
    headerDiv.style.fontWeight = 'bold';
    headerDiv.style.color = '#081e70';
    headerDiv.textContent = 'Life Science Academy';
    elementCopy.insertBefore(headerDiv, elementCopy.firstChild);

    // Add address and contact info below header
    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.style.textAlign = 'center';
    contactInfoDiv.style.fontSize = '12px';
    contactInfoDiv.style.marginTop = '5px';
    contactInfoDiv.style.color = '#555';
    contactInfoDiv.textContent = 'Nirjhor, Dhaka Cantonment, Dhaka 1206 | Phone: +88 017 9X 511272';
    elementCopy.insertBefore(contactInfoDiv, elementCopy.firstChild);

    // info section
    const patientInfoDiv = document.createElement('div');
    patientInfoDiv.style.marginTop = '20px';
    patientInfoDiv.style.fontSize = '14px';
    patientInfoDiv.style.color = '#081e70';
    patientInfoDiv.innerHTML = `<strong>Name:</strong> ${userName} <br> <strong>Phone:</strong> ${userPhone} <br> <strong>ID:</strong> ${uniqueNumber}`;
    elementCopy.insertBefore(patientInfoDiv, elementCopy.firstChild);

    //  signature line and date
    const footerDiv = document.createElement('div');
    footerDiv.style.position = 'absolute';
    footerDiv.style.bottom = '10px';
    footerDiv.style.width = '100%';
    footerDiv.style.display = 'flex';
    footerDiv.style.justifyContent = 'space-between';
    footerDiv.style.fontSize = '14px';
    footerDiv.style.color = '#081e70';
    footerDiv.innerHTML = `<div><strong>Date:</strong> ${new Date().toLocaleDateString()}</div><div><strong>Signature:</strong> ____________________</div>`;
    elementCopy.appendChild(footerDiv);



    // Ensure content fits within one page by setting page size
    const options = {
        margin: [10, 10, 10, 10],
        filename: fileName,
        html2canvas: { 
            allowTaint: true,
            useCORS: true
        }
    };

    // Generate PDF using html2pdf library
    html2pdf()
        .from(elementCopy)
        .set(options)
        .save();
}