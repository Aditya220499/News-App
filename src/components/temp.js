let arr = {
  status: "ok",
  totalResults: 34,
  articles: [
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Musk to step down as Twitter CEO once he finds 'someone foolish' enough as successor - Reuters",
      description:
        "Billionaire Elon Musk said on Tuesday he will step down as chief executive of Twitter Inc \n once he finds a replacement, but will still run some key divisions of the social media platform.",
      url:
        "https://www.reuters.com/technology/musk-says-hell-step-down-twitter-ceo-after-finding-replacement-2022-12-21/",
      urlToImage:
        "https://www.reuters.com/resizer/z7gzied9hwXKRl9NQ8sh9MSPJFQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EREJDT2HCZMZXFDPSX5H72KITA.jpg",
      publishedAt: "2022-12-21T06:13:00Z",
      content:
        "Dec 20 (Reuters) - Billionaire Elon Musk said on Tuesday he will step down as chief executive of Twitter Inc \r\n once he finds a replacement, but will still run some key divisions of the social media … [+1715 chars]"
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Afghanistan: Taliban bans women from universities amid condemnation - BBC",
      description:
        "The move further restricts women's education, after girls were already excluded from secondary schools.",
      url: "https://www.bbc.com/news/world-asia-64045497",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/47BD/production/_127156381_femalestudentsgettyimages-1236836892.jpg",
      publishedAt: "2022-12-21T05:48:53Z",
      content:
        "The Taliban has banned women from universities in Afghanistan, sparking international condemnation and despair among young people in the country.\r\nThe higher education minister made the announcement … [+4711 chars]"
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "Brandon Huffman",
      title:
        "College football recruiting: 2022 National Signing Day schedule, key announcement times, predictions, picks - CBS Sports",
      description:
        "Everything you need to know about National Signing Day as the Class of 2023 begins putting ink to paper",
      url:
        "https://www.cbssports.com/college-football/news/college-football-recruiting-2022-national-signing-day-schedule-key-announcement-times-predictions-picks/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/12/20/519a5eae-4324-442c-a170-e320b3358e4e/thumbnail/1200x675/385a1ffc3250b5d66924bc4a4e6f68dc/matayo.jpg",
      publishedAt: "2022-12-21T05:47:00Z",
      content:
        "Wednesday marks the opening of the early signing period for the 2023 college football recruiting cycle, and with the majority of the Top247 prospects having already made their decisions, all eyes wil… [+4143 chars]"
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Anthony D'Alessandro",
      title:
        "‘Avatar: The Way Of Water’ Heads For $17M+ Tuesday – Box Office - Deadline",
      description:
        "20th Century Studios/Disney’s Avatar: The Way of Water’s Tuesday box office is looking at $17M, and could possibly topple Minions: Rise of Gru’s first Tuesday of $17.5M to become …",
      url:
        "https://deadline.com/2022/12/avatar-the-way-of-water-box-office-tuesday-1235204016/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2022/12/MCDAVTH_WD003.jpg?w=1024",
      publishedAt: "2022-12-21T04:13:00Z",
      content:
        "20th Century Studios/Disney’s Avatar: The Way of Water‘s Tuesday box office is looking at $17M, and could possibly topple Minions: Rise of Gru‘s first Tuesday of $17.5M to become the best Tuesday of … [+1664 chars]"
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Nouran Salahieh, Cheri Mossburg",
      title:
        "After convicting Harvey Weinstein of rape, a Los Angeles jury deadlocks on factors that could have increased his sentence - CNN",
      description:
        "After convicting former film producer Harvey Weinstein of rape and sexual assault, a Los Angeles jury could not reach a unanimous verdict Tuesday on alleged aggravating factors that could have increased his sentence.",
      url:
        "https://www.cnn.com/2022/12/20/us/harvey-weinstein-los-angeles-trial-sentencing-tuesday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221201133219-weinstein-court-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-21T02:52:00Z",
      content:
        "After convicting former film producer Harvey Weinstein of rape and sexual assault, a Los Angeles jury could not reach a unanimous verdict Tuesday on alleged aggravating factors that could have increa… [+6321 chars]"
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Phil Mattingly, Kevin Liptak, Manu Raju, Kaitlan Collins",
      title:
        "Biden and Zelensky planning to meet in Washington for Ukrainian president's first foreign trip since war began - CNN",
      description:
        "President Joe Biden and Ukrainian President Volodymyr Zelensky are planning to meet at the White House on Wednesday, according to two sources familiar with the planning, in a Washington visit that is tentatively scheduled to include an address to a joint sess…",
      url:
        "https://www.cnn.com/2022/12/20/politics/volodymyr-zelensky-washington-dc-visit/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221217163722-volodymyr-zelensky-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-21T02:25:00Z",
      content:
        "President Joe Biden and Ukrainian President Volodymyr Zelensky are planning to meet at the White House on Wednesday, according to two sources familiar with the planning, in a Washington visit that is… [+5642 chars]"
    },
    {
      source: { id: null, name: "WTMJ-TV" },
      author: "Brian Niznansky",
      title:
        "Highs in the 30s Wednesday before snow begins to moves in - TMJ4 News",
      description:
        "Snow spreads across the state Wednesday night and continues through Thursday. It is still unclear whether the snow will continue Friday or end for us here in SE Wisconsin.",
      url:
        "https://www.tmj4.com/weather/forecast/todays-forecast/southeast-wisconsin-weather-saturday-brings-on-and-off-snow-showers",
      urlToImage:
        "https://ewscripps.brightspotcdn.com/dims4/default/1ba3b9f/2147483647/strip/true/crop/1280x672+0+24/resize/1200x630!/quality/90/?url=https%3A%2F%2Fx-default-stgec.uplynk.com%2Fausw%2Fslices%2Fcd3%2F44c3f81cadf84cf5a6f4e6d100388208%2Fcd3c403d96ac4ba692988436c9a0c075%2Fposter_e7faa549d2a5475cb437f8ae2e1f22ef.jpg",
      publishedAt: "2022-12-21T01:55:00Z",
      content:
        "Tonight will be quiet and clear, but chilly. Low temperatures fall to around 10 degrees lakeside and near zero inland. Clouds thicken up tomorrow, but any snow should hold off until tomorrow night.\r\n… [+1782 chars]"
    },
    {
      source: { id: null, name: "Neurosciencenews.com" },
      author: "Neuroscience News",
      title:
        "Antidepressant Use and Infection During Pregnancy Linked to Neurodevelopmental Disorders - Neuroscience News",
      description:
        "A combination of antidepression use and infections that lead to inflammation during pregnancy increase the risk of neurodevelopmental disorders including autism in children, a new study reports.",
      url:
        "https://neurosciencenews.com/antidepressant-infection-pregnancy-asd-22118/",
      urlToImage:
        "https://neurosciencenews.com/files/2022/12/infection-antidepressants-neurodevelopment-neurosicnes-public.jpg",
      publishedAt: "2022-12-21T01:07:10Z",
      content:
        "Summary: A combination of antidepression use and infections that lead to inflammation during pregnancy increase the risk of neurodevelopmental disorders including autism in children, a new study repo… [+7187 chars]"
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Arizona judge allows attorney general candidate’s election challenge to go to trial - The Hill",
      description: null,
      url:
        "https://news.google.com/__i/rss/rd/articles/CBMigQFodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL2NhbXBhaWduLzM3ODI5MDktYXJpem9uYS1qdWRnZS1hbGxvd3MtYXR0b3JuZXktZ2VuZXJhbC1jYW5kaWRhdGVzLWVsZWN0aW9uLWNoYWxsZW5nZS10by1nby10by10cmlhbC_SAYUBaHR0cHM6Ly90aGVoaWxsLmNvbS9ob21lbmV3cy9jYW1wYWlnbi8zNzgyOTA5LWFyaXpvbmEtanVkZ2UtYWxsb3dzLWF0dG9ybmV5LWdlbmVyYWwtY2FuZGlkYXRlcy1lbGVjdGlvbi1jaGFsbGVuZ2UtdG8tZ28tdG8tdHJpYWwvYW1wLw?oc=5",
      urlToImage: null,
      publishedAt: "2022-12-21T01:01:00Z",
      content: null
    },
    {
      source: { id: null, name: "Eonline.com" },
      author: "Mike Vulpo",
      title:
        "Rumer Willis Is Pregnant, Expecting First Baby With Boyfriend Derek Richard Thomas - E! NEWS",
      description:
        "Rumer Willis is going to be a mom. The actress announced on Instagram Dec. 20 that she is expecting her first child with singer Derek Richard Thomas.",
      url:
        "https://www.eonline.com/news/1359052/rumer-willis-is-pregnant-expecting-first-baby-with-boyfriend-derek-richard-thomas",
      urlToImage:
        "https://akns-images.eonline.com/eol_images/Entire_Site/20221120/rs_1200x1200-221220161602-1200-rumer-willis2-mv-122022.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      publishedAt: "2022-12-21T01:00:00Z",
      content:
        "This holiday season, Rumer Willis is gifting her fans with some baby news.\r\nThe actress and her boyfriend Derek Richard Thomas announced on Dec. 20 that they are expecting their first child together … [+843 chars]"
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "FTX boss Sam Bankman-Fried agrees to be extradited - BBC",
      description:
        "The cryptocurrency exchange boss is expected to travel to the US to face fraud charges, the BBC understands.",
      url: "https://www.bbc.com/news/business-64036615",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/E7C9/production/_128073395_sambankmanfried.png",
      publishedAt: "2022-12-21T00:53:28Z",
      content:
        "Sam Bankman-Fried, the former boss of the failed cryptocurrency exchange FTX, has agreed to be extradited to the US to face charges, the BBC understands.\r\nThe 30-year-old, who lives in the Bahamas, h… [+2317 chars]"
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Aislinn Murphy",
      title:
        "Five eye-popping spending items in the $1.7 trillion omnibus bill - Fox Business",
      description:
        "Federal lawmakers made public a massive $1.7 trillion omnibus spending bill on Tuesday morning. Here are five eye-popping spending items inside it.",
      url:
        "https://www.foxbusiness.com/politics/five-eye-popping-spending-items-1-7-trillion-omnibus-bill",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/09/0/0/Democrat-spending-package.jpg?ve=1&tl=1",
      publishedAt: "2022-12-21T00:21:17Z",
      content:
        "Federal lawmakers made public a massive $1.7 trillion omnibus spending bill on Tuesday morning. \r\nThe release of the bill, which spans 4,155 pages, comes after negotiations between Senate Republicans… [+2872 chars]"
    },
    {
      source: { id: null, name: "KARE11.com" },
      author: "Charmaine Nero (KARE 11)",
      title:
        "Airline travel experts issue advice ahead of dangerous weather conditions - KARE11.com",
      description:
        '"The sooner you leave, the better," said Kyle Potter, with Thrifty Traveler.',
      url:
        "https://www.kare11.com/article/travel/airline-travel-experts-issue-advice-ahead-of-dangerous-weather-conditions/89-0b94fe4d-79d4-4b9d-88db-0974610f9f4d",
      urlToImage:
        "https://media.kare11.com/assets/KARE/images/3065d377-4656-4d4a-a51f-55a1308e8cfe/3065d377-4656-4d4a-a51f-55a1308e8cfe_1140x641.jpg",
      publishedAt: "2022-12-20T23:07:19Z",
      content:
        "MINNEAPOLIS The busiest days at the Minneapolis-St. Paul International Airport are Wednesday and Thursday, with 33,000 people expected to pass through.\r\nBut travel experts are warning people to make … [+1346 chars]"
    },
    {
      source: { id: null, name: "Page Six" },
      author: "Evan Real",
      title:
        "Eddie Cibrian responds to Brandi Glanville's Piper Perabo affair claims - Page Six",
      description:
        "“Just because someone thinks something might be true does not make it true,” the actor tells Page Six in a statement. “This is all so unnecessary.”",
      url:
        "https://pagesix.com/2022/12/20/eddie-cibrian-denies-brandi-glanvilles-piper-perabo-affair-claims/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/12/Eddie-Cibrian-Brandi-Glaville-Piper-Perabo-affair-0093.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2022-12-20T23:06:00Z",
      content:
        "Eddie Cibrian is shutting down ex-wife Brandi Glanvilles claims that he cheated on her with actress Piper Perabo during their marriage. \r\nIm sad I have to address this, I really believed that we had … [+3768 chars]"
    },
    {
      source: { id: null, name: "GovExec.com" },
      author: "Eric Katz",
      title:
        "Here Are the Major Takeaways From the $1.7 Trillion Omnibus Spending Bill - GovExec.com",
      description:
        "See which agencies are getting the biggest funding increases, hiring orders and new policy initiatives in fiscal 2023.",
      url:
        "https://www.govexec.com/management/2022/12/here-are-major-takeaways-17-trillion-omnibus-spending-bill/381162/",
      urlToImage:
        "https://cdn.govexec.com/media/img/cd/2022/12/20/122022Omnibus/open-graph.jpg",
      publishedAt: "2022-12-20T23:04:32Z",
      content:
        "Cookie List\r\nA cookie is a small piece of data (text file) that a website when visited by a\r\n user asks your browser to store on your device in order to remember information about you, such as your\r\n… [+4205 chars]"
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Brett Molina, USA TODAY",
      title:
        "Fortnite FTC lawsuit: How to get refund after $520 million settlement - USA TODAY",
      description:
        "How can Fortnite players earn refunds after game company Epic Games settled complaints with the FTC for $520 million?",
      url:
        "https://www.usatoday.com/story/tech/2022/12/20/fortnite-ftc-settlement-refund/10932714002/",
      urlToImage:
        "https://www.gannett-cdn.com/-mm-/788fea288bde932176c102030dcd12c3ca9c736a/c=0-40-1866-1090/local/-/media/2022/05/03/USATODAY/usatsports/Fortnite-Lobby-Visual-Sound-effects.jpg?auto=webp&format=pjpg&width=1200",
      publishedAt: "2022-12-20T22:43:28Z",
      content:
        "Play Fortnite? You could earn more than just V-Bucks.\r\nThe Federal Trade Commission said Monday it settled claims with Fortnite maker Epic Games over children's privacy and payment systems tricking p… [+2118 chars]"
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Kevin Breuninger",
      title:
        "House probe of Jan. 6 pro-Trump riot is cooperating with DOJ special counsel, reports say - CNBC",
      description:
        "The Jan. 6 committee's reportedly extensive cooperation was revealed after the panel voted to refer Trump to the DOJ for possible criminal prosecution.",
      url:
        "https://www.cnbc.com/2022/12/20/trump-jan-6-riot-probe-lawmakers-cooperating-with-doj-reports-say.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107168431-16714735842022-12-19t181209z_1191101989_rc259y967e6x_rtrmadp_0_usa-capitol-security.jpeg?v=1671576052&w=1920&h=1080",
      publishedAt: "2022-12-20T22:40:52Z",
      content:
        "The House select committee investigating the 2021 Capitol riot is providing documents and transcripts to the Department of Justice as the agency conducts multiple probes involving former President Do… [+2661 chars]"
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Dan Wetzel",
      title:
        "Packers' playoff chances are slim. Then again, Aaron Rodgers knows all about improbable comebacks - Yahoo Sports",
      description:
        "Following Green Bay's second straight win Monday night, Rodgers reverted back to his old confident, even cocky, self, sending a positive message to his own...",
      url:
        "https://sports.yahoo.com/packers-playoff-chances-are-slim-then-again-aaron-rodgers-knows-all-about-improbable-comebacks-220819453.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/in.st1FlgPCJ_Oss3qsi8Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-12/9a4ee870-80b2-11ed-83fb-af203dda5ff6",
      publishedAt: "2022-12-20T22:08:19Z",
      content:
        "Even after Green Bay earned consecutive wins via a 24-12 victory over the Los Angeles Rams on Monday, the chances that the Packers (6-8) pull off an end-of-season run into the playoffs remains remote… [+4607 chars]"
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Ken Sweet, USA TODAY",
      title:
        "Wells Fargo agrees to repay 16M customers through $3.7B settlement - USA TODAY",
      description:
        "Wells Fargo agreed to settle a laundry list of charges that it harmed consumers by charging illegal fees and interest on auto loans and mortgages.",
      url:
        "https://www.usatoday.com/story/money/2022/12/20/wells-fargo-fined-cfpb-settlement-customers/10930488002/",
      urlToImage:
        "https://www.gannett-cdn.com/-mm-/9cdf744eb0bfd88d5472e45847e2b864b27e4bb3/c=0-10-430-253/local/-/media/2015/05/05/USATODAY/USATODAY/635664305692570374-Wells-Fargo.jpg?auto=webp&format=pjpg&width=1200",
      publishedAt: "2022-12-20T22:03:53Z",
      content:
        "WASHINGTON — Consumer banking giant Wells Fargo agreed to pay $3.7 billion to settle a laundry list of charges that it harmed consumers by charging illegal fees and interest on auto loans and mortgag… [+3684 chars]"
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "NFL Power Rankings Week 16! #shorts - NFL",
      description:
        "Check out our other channels:NFL Tuesday Night Gaming https://www.youtube.com/c/NFLTNGNFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtub...",
      url: "https://www.youtube.com/watch?v=P0kWe4wKMkg",
      urlToImage:
        "https://i.ytimg.com/vi/P0kWe4wKMkg/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBIKEMwDw==&rs=AOn4CLDUkAidsooNN2A8bflquhcAyHtreA",
      publishedAt: "2022-12-20T22:00:13Z",
      content: null
    }
  ]
};

export default arr;
console.log(arr);
