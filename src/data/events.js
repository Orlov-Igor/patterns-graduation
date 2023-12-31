module.exports = [
  {
    id: 1,
    year: 987,
    description: "Ви потроху заспокоюєтесь, тепер на дисплеї підсвічується яскраво інша дата - 987. Так це ж за рік до хрещення Київської русі. Ви вже давно замислювались над питянням, що буде, якщо виникне можливість змінити хід історії. Це, звісно, величезна відповідальність, але це так спокушає...Вирішено! Я спробую створити кращий варіант майбутнього для всього світу. Але головне - контроль, тому я буду робити зупинки на шляху вперед і буду корегувати хід історії! Нелегке завдання, але з браслетом і базою даних капсули часу здається доволі реальним. Що ж. Вперед, у світле майбутнє!",
    options: [
      {
        description: "Використовуючи свої знання з хімії, ви створюєте порох і проголошуєте себе жрецем бога Перуна, демонструючи грім, блискавки та інші піротехнічні дива. Ваша ціль - відвернути Володимира від вибору на користь християнства.",
        correspondingSkill: 2,
        timeCost: {
          min: 200,
          max: 250
        },
        nextEventId: 2
      },
      {
        description: "Бажаючи зміцнити альянс з європейськими державами та запустити євроінтеграцію на тисячу років раніше, ви вдаєтесь до Володимира і вдаєте посланця з Франції, намагаючись переконати його прийняти католицтво.",
        correspondingSkill: 1,
        timeCost: {
          min: 350,
          max: 450
        },
        nextEventId: 3
      }
    ]
  },
  {
    id: 2,
    year: 1347,
    description: "В результаті вибору, який ви зробили у 988 році, Київська Русь відмовилася від хрещення та залишилася язичницькою державою. Завдяки пороху та вогнепальній зброї, Київ швидше підкорив інші князівства, і отримав неабиякий контроль над сусідами. Внаслідок цього Русь уникнула феодальної роздробленості, Київ залишився центром, а вся держава стала називатися Полянією Київською - від самоназви древнього язичницького племені, що тут мешкало. Вона вдало відбила монголо-татарське вторгнення і не стала даниником та васалом Орди, посівши домінуюче положення в західній частині Євразії. Це чудово, звісно, але ви згадуєте, що попереду епідемія чуми...",
    options: [
      {
        description: "Маючи в руках велику силу браслету і інтелект бортового комп'ютера, ви вирішуєте створити вакцину і передати ії владі Полянії за умови, що вона розповсюдить ії серед народів світу.",
        correspondingSkill: 2,
        timeCost: {
          min: 300,
          max: 400
        },
        nextEventId: 4
      },
      {
        description: "Ви вирішуєте не створювати вакцину і не передавати ії нікому, віддавши все в руки природнього плину речей. Вас лякає думка про те, що вакцина зможе попасти не в ті руки, або Полянія, ще далека від гуманізму і цивілізації, стане жорстокою імперією, скориставшись слабкістю сусідів. Але вас не може не турбувати доля Полянії. Може не треба було відвертати народ Русі від християнства?  Може, саме це і є влучний час для впроваждення гуманізму? Ви з'являєтесь на площі багатьох міст у вигляді пророка, проповідуючи любов та прощення і розповідаючи людям про велику пошесть, кару за неправедні і жорстокі дії, яка неминуче прийде невдовзі.",
        correspondingSkill: 1,
        timeCost: {
          min: 350,
          max: 500
        },
        nextEventId: 5
      }
    ]
  },
  {
    id: 3,
    year: 1347,
    description: "Вас зустріли з недовірою. Візантійські таємні агенти звинуватили вас у шпигунстві на користь французької корони. Завдяки браслету вам вдається втекти з підземелля і знайти капсулу часу, але ви не можете переконати Володимира не починати війну з Францією. Після прибуття у 1348 рік вам стає відомо, що результаті цієї кровопролитної війни, Русь втратила свою суверенність і на довгий час стала залежною від Франції. Хрестоносці винищили всіх жерців старих богів і закатували майже всіх віруючих. Євроінтеграція відбулася не так, як ви хотіли... Але все ще можна виправити. І тут ви з жахом пригадуєте, що епідемія чуми ось-ось розпочнеться...",
    options: [
      {
        description: "Ви у розпачі. Бажаючи повернути суверенність Києву, ви вирішуєте піти на крайні міри - виготовити отруту, яка повністю вбиває імунітет і робить організм абсолютно вразливим до інфекції, яка вже поруч. Треба тільки розповсюдити ії у західній європі, забруднивши річки. Головне - помститися Філіпу VI, який впровадив неймовірні податки на цих землях.",
        correspondingSkill: 2,
        timeCost: {
          min: 250,
          max: 350
        },
        nextEventId: 6
      },
      {
        description: "Політика вас цікавить мало. Ви не бачите жодної причини не допомогти всім. Просто треба розповісти людям про гігієну, профілактику захворювань та сутність інфекцій, розвіявши середньовічні міфи про міазми. Ви ходите по шпиталях і монастирях всієї Європи, відкриваючи всім рецепт вакцини і навчаючи базовій медичній підготовці.",
        correspondingSkill: 1,
        timeCost: {
          min: 350,
          max: 500
        },
        nextEventId: 7
      }
    ]
  },
  {
    id: 4,
    year: 1655,
    description: "Князі Полянії збрехали вам. Вони використали вакцину як інструмент зміцнення своєї влади. Мирослав IV Рятівник став першим імператором Золотого Роду Полянії. Він скористався слабкістю інших держав під час епідемії і створив жорстоку і могутню язичницьку імперію від Атлантичного океану до Єнісею з жертвоприношеннями і рабовласництвом. За його нащадка Болеслава Золотого інші релігійно-філософські течії, крім поклоніння нащадку Золотого Рода, поза законом, так саме, як і наука. Осередок супротиву залишився тільки на півночі Норвегії, захований серед фьордів.",
    options: [
      {
        description: "Ви вирішуєте підтримати норвезькі сили опору, посилюючи їхні зусилля, надаючи їм зброю, знання і технології з майбутнього. Зокрема, ви звільняєте сотні тичяч рабів і створюєте велику армію. Ви вирішуєте відкрити науковцям Армії Опору знання про парові машини, двигуни внутрішнього згоряння та просунуту механіку.",
        correspondingSkill: 2,
        timeCost: {
          min: 350,
          max: 500
        },
        nextEventId: 8
      },
      {
        description: "Ви розумієте, що найбільша проблема Полянії - це її тиран Болеслава Золотий. Заради визволення народів імперії доведеться взяти на душу тяжкий гріх, але іншого виходу ви не бачите. Ви знаходите спільників, готуєте замах та вбиваєте Болеслава, сподіваючись, що це призведе до змін.",
        correspondingSkill: 1,
        timeCost: {
          min: 250,
          max: 350
        },
        nextEventId: 9
      }
    ]
  },
  {
    id: 5,
    year: 1655,
    description: "Епідемія пронеслася Європою, залишаючи за собою порожні села та міста. Але ви були почуті. За три сторіччя культ Невідомого Пророка набирав сили, дістав форми, та перетворився, врешті-решт на релігійно-філософську течію. Це розкололо Полянію навпіл і викликало кровопролитну громадянську війну між послідовниками нової течії та Воїнами Старого Ладу - войовничими кланами, які цураються змін і тримаються старих традицій. На щастя, молодий король співчуває послідовникам Невідомого Пророка і прислухається до їхніх порад.",
    options: [
      {
        description: "Вступивши до лав свого ж культу, ви намагаєтеся примирити дві течії, закликаючи об'єднатися перед новою загрозою - могутня Османська імперія, яка досі боялася сили Полянії, підіймає голову, бачачи безлад у Полянії. Вам вдаєте військового експерта і активно допомагаєте у плануванні військової операції із допомогою аналітики бортового комп'ютера і вашого досвіду гри у стратегії.",
        correspondingSkill: 1,
        timeCost: {
          min: 250,
          max: 350
        },
        nextEventId: 10
      },
      {
        description: "Ви вирішаєте домовитись з архиєпископом культу Невідомого Пророка та вождем Воїнів Старого ладу. Правила прості - ви надаєте їм книги знань, за допомогою яких вони зможуть швидко розвиватися, а вони, в той самий час, намагаються мирно співіснувати та опановувати нове знання, пліч о пліч. Демонструючи різні наукові експерименти та девайси, ви намагаєтесь вмовити обрати новою релігією науку.",
        correspondingSkill: 2,
        timeCost: {
          min: 320,
          max: 450
        },
        nextEventId: 11
      }
    ]
  },
  {
    id: 6,
    year: 1655,
    description: "Ні! Не може бути... Як це могло статися?! Може бортовий комп'ютер знає? Так, він знає... Забруднення річок призвело не тільки до вимирання західної європи. Летючі складові отрути поширилися планетою з вітрами та опадами. До того ж, сполука, яку ви винайшли, зробила людей безпорадними проти всіх інфекцій, а не тільки чуми. Цивілізація знищена, вижили тільки рослини і комахи.",
    options: null
  },
  {
    id: 7,
    year: 1655,
    description: "Зусилля не були марними. Завдяки вашій допомозі під час епідемії Європа втратила у 10 разів менше людей, ніж у вашому таймлайні. Це на 100 років наблизило Високе Відродження у культурі та науці. Крім того, ваше вчення дало поштовх стрімкому розвитку медицини. До нової епідемії - Чуми Святого Карла 1545 року Європа підійшла підготовленою, ретельно вивчаючи ії і вдосконалюючи вакцину. Наприкінці XVI сторіччя людство вже мало вакцини від більшості бактеріальних інфекцій, зокрема від віспи та туберкульозу. Але разом з тим, Європа зіткнулась з проблемою перенаселення. Це все, у сукупності з небхідністю пошуку нових ринків збуту, дозволило почати епоху Великих географічних відкриттів та колоніальної експансії на 50 років раніше. Ваша допомога прискорила прогрес, але не змогла видалити з історії винищення європейцями корінних культур Нового Світу і рабовласництво. Навпаки - вона виплекала теорії расової переваги, більшої фізичної та інтелектуальної обдарованості європейців.",
    options: [
      {
        description: "Ви вирішуєте започаткувати антиколоніальний рух, пропагуючи рівність всіх рас і культур. Щоб обгрунтувати свою точуку зору, ви вдаєтесь до біологічних досліджень, які б наочно підтвердили вашу точку зору щодо біологічної ідентичності людей на клітинному рівні. Розповідаєте про мінливість, спадковість, генетику та мутації. Ви збираєте навкруги себе всіх видатних вчених кінця XVII сторіччя, і у певних колах ваше вчення викликає неабиякий інтерес.",
        correspondingSkill: 1,
        timeCost: {
          min: 300,
          max: 450
        },
        nextEventId: 12
      },
      {
        description: "Права людини це важливо, але гуманізм врешті-решт приходить у будь-яку розвинену цивілізацію - кажете ви собі. Треба зусередитися на науково-технічній революції та якнайшвидше розвинути технології для обстеження всесвіту та космічній експансії! А у вас як раз є багато матеріалів на цю тему... ",
        correspondingSkill: 2,
        timeCost: {
          min: 200,
          max: 300
        },
        nextEventId: 13
      }
    ]
  },
  {
    id: 8,
    year: 1834,
    description: "Армія Опору, посилена вашими знаннями, змогла вдало протистояти Полянії. На півночі Європи виникла нова держава вільних людей - Нордзееланд, до якої звідусіль зтікаються раби-втікачі, вчені та ідейні супротивники гегемонії Золотого роду. Нова країна активно використовує парові машини та дуже майстерна у класичній механіці та металообробці. Але вона майже не використовує електроенергію, бо наявні технології покривають всі потреби. На варті неба - дирижаблі та повітрярі кулі з паровими двигунами, на землі - потяги, парові автомобілі та санчата. Тут винайдено навіть механічно - парових роботів, які обслуговують промисловість та допомагають у побуті. Але війна ще триває, артилерія Полянії регуляруно нищить повільний повітряний флот Нордзееланда.",
    options: [
      {
        description: "Ви щиро хочете допомогти нордзееландцям одержати перемогу. Вас дивує і приваблює їхня культура точної механіки і пару. Але їм треба якнайшвидше опанувати інші джерела енергії. Ви розкриваєте їм місцезнаходження всіх вуглеводневих корисних копалин у північній півкулі, розповідаєте про їхній видобуток та використання.",
        correspondingSkill: 2,
        timeCost: {
          min: 250,
          max: 400
        },
        nextEventId: 14
      },
      {
        description: "Ви не проти допомогти нордзееландцям, але їхні технології лякають вас, до того ж, ви вважаєте їх не дуже екологічними, бо паровї машини потребують доволі багато вугілля. Його запаси не безкінечні, а викиди від згоряння забруднюють навколишнє середовище. Ви намагаєтесь переконати нордзееландців опанувати електроенергію та магнетизм. Але все марно. Вони не хочуть змінювати стиль життя і переналаштовувати промисловість та економіку. І тоді, вперше за весь час, до вас звертається штучний інтелект браслету. Він пропонує, щоб ви надягли його на головного фізика Нордзееланда, щоб браслет сам показав вченому переваги нових технологій через нейрозв'язок і допоміг у створенні прототипів технологічно просунутих апаратів. Ви ж, у той час, полетите вперед у часі, щоб зустріти нову планету у 2023 році. Вам не дуже хочеться залишати браслет цим людям, але ви передаєте ідею браслета вченому і він... погоджується. Ну добре, нічого не поробиш, тоді і ви згодні.",
        correspondingSkill: 1,
        timeCost: {
          min: 150,
          max: 200
        },
        nextEventId: 15
      }
    ]
  },
  {
    id: 9,
    year: 1834,
    description: "Вам вдалося прокрастися у палац Болеслава за допомогою стелс-камуфляжа, який пропонує вам браслет і вбити його серед багатолюдного свята з жертвоприношеннями. Згідно закону Полянії ви можете тепер посісти трон. Ви звільнили рабів і розпочали соціальні реформи. Нажаль, люди Полянії були неспроможні зрозуміти їх важливість для майбутнього розвитку людства - вас не підтримав жодний впливовий рід. Проти вас виникає змова і вас вбивають вночі фанатики-традиціоналісти. У 1905 році ви існуєте тільки як запис у хроніці - згадка про самозванця та зневажателя традицій, шпигуна, підісланого ворогами Полянії. При владі тепер ще більш жорстокий та войовничий рід, який буде правити Полянією ще 300 років. Але ви вже нічого не здатні змінити...",
    options: null
  },
  {
    id: 10,
    year: 1834,
    description: "Вам вдалося - дві течії знайшли примирення перед загрозою і захистили країну від навали. Але століття громадянських війн та зацикленість на внутрішніх проблемах весь цей час гальмували розвиток Полянії. Країна доволі відстала як у сфері науки, так і у економіці. Тут ще нічого не відомо ані про парові двигуни, ані про електроенергію та магнетизм... Як добре, що є ви для вирішення таких проблем.",
    options: [
      {
        description: "Раптом ви розумієте, що знання про просунуті технології не повинні даватися просто, і що ваш подарунок, врешті-решт, не принесе користі суспільству, яке ще не визріло для його правильного сприйняття. Ви вже й так наробили багато шкоди, прискорюючи природний плин подій. Натомість ви залишаєте Полянійцям ессе про еколгію і турботу про навколишнє середовище та один про одного, вдало маніпулюючи головними догмамами колишніх релігійно-філософських течій, переплетаючи їх з вашими думками.",
        correspondingSkill: 1,
        timeCost: {
          min: 300,
          max: 450
        },
        nextEventId: 16
      },
      {
        description: "Що ж робити? Як швидше за все вивести країну на новий рівень. Атомна енергетика! Так, це може бути небезпечним, але ви розповісте про всі підводні камені та ані слова не скажете про зброю. Так, ця справа не з легких, але ви надасте Полянійцям всі необхідні знання і вони стовідсотково впораються.",
        correspondingSkill: 2,
        timeCost: {
          min: 200,
          max: 300
        },
        nextEventId: 17
      }
    ]
  },
  {
    id: 11,
    year: 1834,
    description: "1905 рік зустрічає вас руїнами. Вийшовши з капсули, ви бачите навкруги суцільну скляну пустелю. Вас охоплює жах, адже ви чітко відчуваєте у роті металевий присмак. Тут більше нема життя, саме повітря тут - отрута. Принаймні, на цій частині Євразії. Ви намагаєтесь зробити крок, але сил більше нема. Ви помрете, так і не розвідавши правду: примирення мыж двома фракціями було тільки на словах. Насправді ж кожна сторона використала знання для власного посилення і створення зброї. Незалежна Держава Воїнів старого Ладу (НДВСЛ), яка з давніх давен знала про порох, створила могуню артилерію, вакумні снаряди та хімічну зброю. Центральна Рада Полянії (ЦРП) опанувала біотехнології та, крім того, спромоглася створити ядерну зброю... Це був останній винахід.",
    options: null
  },
  {
    id: 12,
    year: 1834,
    description: "Капсула зупинилась. Але що це за поштовхи!? Ви трохи відчиняєте двері апарата - не менше десяти дивних м'язистих істот, метри 2 з половиною заввишки, з маленькими головами та великими кінцівками, вкритими сірою коркою з пучками чорного волосся, намагається перевернути капсулу. Вони щосили лупцюють ії чимось схожим на велетенські ключки для гольфу. Побачивши щілину, вони з легкістю ламають двері, стрімко хапають та витягають вас з капсули. А потім на вас щосили сідає найбільший з велетнів... Здається вам вдалося запобігти довготривалій колоніальній експансії, але не так, як ви це собі уявляли. Натхненні вашими лекціями та матеріалами, які ви залишили, вчені Європи, а потім і Нового Світу поставили за мету створення ідеального Homo Sapiens. Генна інженерія стала основною наукою, і за 200 років вчені досягли неабияких висот. Ось тоді почалися наукові експерименти на людях, здебільшого на бідних та знедолених, яким потрібні були будь-які горші. Та щось пішло не так. Мутували люди, мутувала їхня бікробіота та віруси. Контроль було втрачено, тепер напіврозумне життя володарює на колись доволі перспективній планеті...",
    options: null
  },
  {
    id: 13,
    year: 1834,
    description: "У 1905 році вас зустрічають представники розвиненої технократичної цивілізації. На тисячах заводів працюють мільйони представників поневолених корінних народів світу, збираючи міжзоряний флот. Науковий прогрес не приніс ідей рівності у це суспільство. Вас разом з капсулою транспортують до центру управління зоряним флотом для колонізації землеподібної планети. Їм про вас відомо, вас чекали... Вони отримали сигнал з майбутнього, в якому говорилося про мандрівника в часі і про його апарат. І про те, що мандрівник навіть не здогадується, що капсула - то найпотужніше джерело енергії у Сонячній системі після самого Сонця, і просто треба вміти його використовувати. Акумулятор - вічний. Просто біологічна матерія з іншого часо-просторового контінууму деградує десь після 1000 годин поза своїм часом. Саме тому двигун вимикається, поки крісло не займе інша істота. Ви і ваша капсула - останні технічні деталі для здійснення перельоту, адже капсула вважає вас своїм господарем і тільки ви зможете зняти обмеження з акумулятора, якщо зробите запит...",
    options: [
      {
        description: "Ви погоджуєтесь допомогти. Та що ще можна зробити? Ви наказуєте браслету зняти блокування і він водночас робить це. Вас під'єднують до величезного флагмана колоніального флоту з 10 000 людей на борту і починається зворотній відлік...",
        correspondingSkill: 2,
        timeCost: {
          min: 5,
          max: 10
        },
        nextEventId: 18
      },
      {
        description: "Ні. Ви не дасте цим людям жаданої енергії! Не для того, щоб на іншій планеті оселились ці кляті експлуататори. Тільки через мій труп! Аж раптом ви чуєте в голові голос браслета. Він каже, що у капсули є режим самознищення, та якщо зняти блок з акумулятора, вибух, скоріше за все, знищить базу зоряного флоту разом з вами... Часу на роздуми нема. Так! Нехай буде так, якщо іншого виходу нема, я згоден...",
        correspondingSkill: 1,
        timeCost: {
          min: 5,
          max: 10
        },
        nextEventId: 19
      }
    ]
  },
  {
    id: 14,
    year: 2023,
    description: "Як ви і хотіли того, нордзееландці опанували нові джерела енергії. Їм стали відомі керосин, бензин та дизель, та ще багато інших корисних сполук. Розвинулася авіація та реактивні види транспорту та зброї. Виросли велетенські заводи, які день та ніч тепер виготовляють першокласні машини для вбивств. Нордзееландці перемогли. Та не змогли зупинитися - тепер у світі нема куточку, де б можна було дихати повними грудями. Токсичні випаровування і викиди швидко призвели до парникового ефекту, смог обійняв міста, від глобального потепління клімат тепер нестабільний - все частіше стаються стихійні лиха. Зелень гаїв і полів ви тепер будете бачити лише уві сні...",
    options: null
  },
  {
    id: 15,
    year: 2023,
    description: "Добрий день! Ви виходите з капсули, вам простягає руку і посміхається охайний чоловік в білому, як дві краплі води схожий на вченого, якому ви залишили браслет. 'Не може бути! Це ви?' - злітає з ваших губ. 'Не зовсім. Просто Він звик до моєї форми. Йому не складно створювати ії. Старші інженери всі так виглядають. Це Його правило.' Ви починаєте розуміти...'Він - це мій браслет. Він ще вас? Де він?' Інженер ледве помітно посміхається і ви помічаєте маленький навушник: 'Він усюди...' Браслет вас не зрадив. Тут і правда все електричне, ви бачите километри силових кабелів і цілі площі сонячних панелей. Зате повітря чисте, так само, як і голови людей, за яких все тепер вирішує могутній штучний інтелект, який знає, як буде краще всім...",
    options: null
  },
  {
    id: 16,
    year: 2023,
    description: "Полянія так і не стала ведучою технологічною державою - залишилася на рівні початку XIX сторіччя вашого таймлайну. Люди з острахом та упередженістю ставляться до науково-технічного прогресу, вони шанують традиції і не ведуть активної зовнішньополітичної та економічної діяльності. Вони патриархальні, цінують сім'ю та обожнюють свою землю, живуть у суцільній гармонії з природою, мінімізуючи вплив на довкілля, а вона натомість розкриває їм свої секрети і щедро одарює всїм необхідним...",
    options: null
  },
  {
    id: 17,
    year: 2023,
    description: "Холод і темрява... Сіре небо до горизонту і попіл під ногами. Ядерна зима, безжальна і мовчазна... Спочатку все було добре, і нові джерела енергії підняли Полянію на недосяжні для інших країн висоти. Та полянійці виявились занадто гарними учнями - вони самі відкрили інші шляхи використання мирного атома. Нажаль, ніхто з них вже не зможе подякувати своєму вчителю. Ваші останні дні ви будете дивитись на наслідки своєї допомоги...",
    options: null
  },
  {
    id: 18,
    year: 2023,
    description: "Люди Нової Землі майбутнього почують про вас багато неймовірних історій. Начебто, серед перших колоністів був великий мандрівник з майбутнього, напів - кіборг з ядерним реактором замість серця, чи то була інопланетна істота, яка переносила речі лише силою думки. Але одного дня мандрівник зникю Натомість на Новій Землі з'явився Пророк Свободи, закликаючи до рівності всіх людей у всесвіті. Він був вбитий, та його ідеї запалили у мільйонах сердець іскру, яка стала полум'ям. Революція на Новій Землі була першою, та згодом перекинулася на інші колонії. Домівка людства була останньою, та потім і там запанували ідеї гуманізму. А десь у далекому 2785 році тут винайдуть технології для подорожей у часі...",
    options: null
  },
  {
    id: 19,
    year: 2023,
    description: "Ви приносите себе у жертву в знак протесту проти суспільства експлуататорів. Флот знищено вщент. Престиж держави в очах народу стрімко падає. Людство не має змоги вийти в далекий космос ще дві з половиною тисячі років, але поступово еволюціонує у більш прогресивне по відношенню до прав особистості і рівності всіх людей планети. Згодом на зміну важкої людської праці прийде роботизація. Щоправда, проблеми її етичності із розвитком штучного інтелекту теж викличуть палкі дебати і навіть революцію. Але це вже зовсім інша історія...",
    options: null
  }
]