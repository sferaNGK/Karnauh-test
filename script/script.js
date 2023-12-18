const keys = [
    {
        answer: "ESTP",
        title: "Маршал",
        pluses: 'Отличается лидерским характером. Человек волевой, мобилизованный, энергичный. ' +
            'Обладает быстрой реакцией, сочетающейся с хорошей выдержкой. Умеет управлять людьми, ' +
            'быстро ориентируется в изменившихся обстоятельствах. Способен быстро принимать кардинальные ' +
            'решения. Настроен на реальные близлежащие цели – гибкий тактик. ' +
            'Энергичен и деятелен, в периоды подъема развивает незаурядную работоспособность. ' +
            'Имеет критический склад ума. Активно отстаивает интересы свои и своей группы. Стремится ' +
            'к высокому материальному уровню жизни. Любит действовать по-крупному, все тщательно ' +
            'взвесив и разработав конкретный план действий. Очень целеустремлен и практичен в делах. ' +
            'Живет разумом, дело ставит выше личных симпатий. Стрессоустойчив, мобилизуется в ' +
            'экстремальных ситуациях.',
        problems: 'Довольно агрессивен с нерешительными людьми. Не выносит приказного тона: если на ' +
            'него оказывают давление, дает сильный отпор. Самолюбив, в гневе проявляет нетерпимость ' +
            'к чужим промахам и ошибкам. В личных отношениях неуступчив, хочет все устроить по-своему. ' +
            'Недоверчив к новым людям, стремится при помощи осторожных вопросов выяснить их положение, ' +
            'связи и возможности. У него бывают периоды спадов и подъемов настроения.',
        professions: 'управленец высших уровней, строитель, фермер, финансист, военный.'
    },
    {
        answer: "ESFP",
        title: "Политик",
        pluses: "Имеет хорошие дипломатические и коммерческие способности. " +
            "Быстро ориентируется в экстремальных ситуациях. Уверен в себе, " +
            "смел и решителен, но при этом добр. Всегда знает, чего хочет. " +
            "Советуется больше формально, решения принимает самостоятельно. " +
            "Стремится быть в курсе различных событий и сам любит быть в центре " +
            "внимания. В общении вежлив, располагает к доверию, умеет создать " +
            "атмосферу интимности и задушевности. Обаятелен, демократичен, обычно " +
            "держится раскованно и непринужденно. Следит за здоровьем и внешним видом. " +
            "Эстет, любит одеваться со вкусом и разнообразно. Заботится о близких, ценит " +
            "уют и комфорт. Стремится к практической деятельности. Предпочитает ближайшие " +
            "конкретные цели, приносящие реальную пользу.",
        problems: "Склонен отвлекаться в работе на несущественные детали. Ему " +
            "трудно долгое время концентрировать свое внимание на чем-то одном. " +
            "Склонен к колебаниям в выборе, что приводит к внутренним размышлениям и " +
            "сомнениям, которые он скрывает. Его настоящим доверием пользуются немногие. " +
            "Довольно консервативен к новому: ему нужно определенное время, чтобы " +
            "разобраться в новой технологии и убедиться в ее практичности. Идет на " +
            "риск только после того, как хорошо все взвесит. Склонен нивелировать " +
            "индивидуальные склонности людей, любит, чтобы все действовали единообразно. " +
            "Проявляет агрессивность, если его свободу ограничивают. Свое отношение переносит " +
            "на окружающих.",
        professions: "управленец высших уровней, дипломат, продюсер, продавец, тренер, шоумен."
    },
    {
        answer: "ISTP",
        title: "Мастер",
        pluses: "Умеет совершать разумные и полезные поступки. Адаптирует новые идеи к практике, " +
            "извлекает из них максимум пользы. Ему присуще неброское, тихое упорство при обязательном " +
            "завершении всего начатого, скромность. Изобретателен в быту и на работе, которая ему нравится. " +
            "В достижимой для него области пространства все организует для работы и отдыха. Эстет, полностью " +
            "доверяющий своему вкусу. Всегда имеет собственное мнение о том, что красиво и некрасиво, где " +
            "гармония, а где – безвкусица. Ярко и броско одеваться не любит, предпочитает умеренность и " +
            "гармонию. Ценит дружбу. Если человек обратился к нему за помощью, помогает, не жалея личного " +
            "времени. Своего мнения никому не навязывает, но потом обычно получается так, как он хотел. " +
            "Ему доставляет радость, когда сделанное им кому-то понравилось. Имеет репутацию пунктуального " +
            "человека. Не любит затягивать встречи. Стрессоустойчив, в опасной ситуации ведет себя подчеркнуто " +
            "хладнокровно. Предупреждения об опасности вызывают у него не страх, а интерес, желание испытать себя.",
        problems: "Склонен к скепсису, любит анализировать и подшучивать. На людях обычно не демонстрирует " +
            "свои эмоции и чувства, хотя довольно впечатлителен. Очень зависит от настроения, периоды спада " +
            "чередуются у него с периодами повышенной работоспособности. Скрытен, не любит фамильярности, " +
            "умеет поставить человека на место. Приказ как форма обращения для него не приемлем: делает так, " +
            "как считает нужным. По-настоящему эффективно занимается только тем, что приносит удовольствие, " +
            "из-за этого может производить впечатление ленивого человека. За бесцельную работу браться не будет. " +
            "Ему не нравится вялая манера говорить, любит четко сформулированные, уверенные высказывания.",
        professions: "менеджер среднего звена, следователь, продавец техники, дизайнер, механик, нейрохирург, бухгалтер."
    },
    {
        answer: "ISFP",
        title: "Посредник",
        pluses: "Обладает хорошим вкусом, чувством меры. Может оценить качество любого продукта, в деталях " +
            "объяснить, чем оно устраивает, либо не устраивает его. Заботлив и внимателен к людям, очень считается " +
            "с их удобствами. Дипломатичен, хорошо умеет уговорить кого-либо на нужное или выгодное дело. Может " +
            "отлично наладить комфорт в близком окружении. Умеет отдыхать, ценит удовольствия и житейские радости. " +
            "Если дело ему нравится и будет хорошо оплачено, делает его качественно, со вкусом и душой. Старается " +
            "при любых обстоятельствах не терять чувства меры. Многое умеет делать своими руками. Хорошо чувствует " +
            "состояние других людей, способен мягко пристраиваться к собеседнику. Со всеми очень приветлив, внимателен " +
            "и участлив. Стремится к хорошему материальному уровню жизни. Обычно никому не навязывает свою волю, не " +
            "критикует сам и не любит, когда при нем критикуют других людей. В коллективе занимает позицию золотой середины.",
        problems: "Ему с трудом удается напряженная деловая активность, трудно долгое время быть подвижным, динамичным. " +
            "Бывает расслаблен и несобран. Скрытен и раним. Может проявлять явное недовольство, если его покой нарушают. " +
            "В такие минуты может возмутиться, резко ответить. Довольно ленив: если работа мало его интересует, не обещает " +
            "никакой выгоды лично ему, может симулировать. Не видит смысла в пустой суете и напрасной трате сил. Не любит " +
            "преувеличений, нуждается в фактах и доказательствах. Старается избегать начальства, уклоняется от скучных, " +
            "сугубо деловых разговоров. Ему трудно проявлять волю и настойчивость, отстаивать интересы дела. Плохое " +
            "самочувствие сильно снижает его работоспособность. Часто делает вид, что многое может сделать, хотя это " +
            "не всегда возможно. ",
        professions: "менеджер среднего звена, дизайнер, модельер, оператор компьютера, бармен, ювелир."
    },
    {
        answer: "ESTJ",
        title: "Администратор",
        pluses: "Деятельный и напористый человек. Умеет трезво оценить ситуацию и принять практическое решение. " +
            "Хороший администратор: отлаживает качественный рабочий процесс. Старается создать все условия для " +
            "слаженной работы. Способен координировать деятельность разных людей и подразделений. Очень прагматичен: " +
            "поступки людей оценивает с точки зрения их пользы. Любит во всем надежность и основательность. Отличается " +
            "высокой работоспособностью. Умеет бережно и рационально обращаться с деньгами. Практичность и добротность " +
            "вещей предпочитает моде. Любит во всем порядок. Обладает развитым чувством долга. Ценит время и не любит " +
            "тратить его попусту. Очень пунктуален, старается все планировать наперед. Предпочитает зря не рисковать. " +
            "Хороший хозяин в доме. Расторопен и изобретателен в бытовых вопросах.",
        problems: "Консервативен в своих вкусах и привычках. Плохо воспринимает критику, даже в шутливой форме. " +
            "Бывает излишне резок в своих критических оценках. Осуждает всех, кто, по его мнению, недостаточно " +
            "качественно и честно работает. Избегает делать комплименты, хвалить за хорошую работу – считает ее " +
            "нормой. Не любит говорить о развлечениях, сторонник строгого воспитания. Если его работу критикуют " +
            "некомпетентные люди, может вспылить. С близкими нередко проявляет властность и требовательность. " +
            "Тяготится долгим ожиданием какого-либо события. Не имея достаточного количества фактов, откладывает " +
            "принятие решения. Не выносит, когда его подгоняют или отвлекают от работы. Придерживаясь установленных " +
            "правил поведения, требует того же от окружающих. Вместе с тем может неожиданно вспылить и проявить резкость.",
        professions: "организатор высшего звена (исполнительный директор), экономист, строитель, аудитор, военный."
    },
    {
        answer: "ESFJ",
        title: "Энтузиаст",
        pluses: "Активный, оптимистичный, доброжелательный человек. Внимателен к людям, заботлив. " +
            "Стремится помочь всем, кто просит об этом. Хорошо чувствует эмоциональное состояние других людей. " +
            "Легко заводит новые знакомства личного и делового характера. Противник пустой траты времени, всегда " +
            "занят неотложными делами. Восприимчив к перспективным идеям, которые можно применять на практике. " +
            "Обаятельный, располагающий к себе собеседник. Обладает хорошим вкусом. Многое умеет делать своими руками. " +
            "В жизни всего добивается сам, не надеясь на других. Настойчив и решителен в действиях, особенно в " +
            "экстремальной ситуации, когда против него направлена агрессия или ощущается острый недостаток времени. " +
            "К советам других прислушивается, но поступает по-своему. С успехом занимается любой практической " +
            "деятельностью, но любит, чтобы его усилия и находчивость ценили. Стремится к стабильности, высокому " +
            "материальному уровню жизни, уважению коллег по работе.",
        problems: "Накапливает отрицательные эмоции, которые способен некоторое время сдерживать. Но если их слишком много – " +
            "выходит из себя, переживает. Может даже заболеть. Не может действовать без эмоционального контакта с собеседником, " +
            "поэтому ему трудно взаимодействовать с людьми, которые никак не проявляют своего отношения к происходящему. Не " +
            "всегда оценивает выгодность и полезность того, что делает. Долго колеблется перед принятием важного решения по " +
            "сложному вопросу. Переоценивает свои деловые способности. Не умеет ждать, ему хочется сделать как можно больше " +
            "дел и как можно скорее.",
        professions: "организатор высшего звена (зам. директора), промоутер, продавец, бухгалтер, стилист."
    },
    {
        answer: "ISTJ",
        title: "Инспектор",
        pluses: "Хороший организатор и тщательный исполнитель. Нетерпим к расхлябанности и безответственности. " +
            "Последователен в своих делах и решениях, всегда доводит начатое до конца. Любит во всем порядок, " +
            "точность и конкретность, доверяет только официальным или проверенным источникам информации. Хороший " +
            "исследователь узких проблем. Вникает во все детали и не упускает из виду мелочей. Аккуратно ведет " +
            "документацию, любит уточнять факты, охотно информирует тех, кто обращается к нему по поводу каких-либо " +
            "инструкций и законов, которые обычно хорошо знает. Будучи администратором, умеет наладить четкую работу, " +
            "дисциплину и порядок, всегда контролирует выполнение своих поручений. Дело ставит выше личных отношений и " +
            "настроений. Очень работоспособен, обладает развитым чувством долга, требователен к себе и подчиненным. " +
            "Знания предпочитает внедрять в практику. Ко всему готовится заранее, не любит экспромтов.",
        problems: "Бескомпромиссен в том, что считает важным. Периодически напускает на себя официальный и неприступный вид, " +
            "придерживается субординации. Довольно нетерпим к другим точкам зрения. " +
            "Недостаточно гибок в отношениях с людьми, плохо учитывает их индивидуальные способности. " +
            "Его практически невозможно заставить изменить свои убеждения. Не любит, когда ему возражают, " +
            "навязывают свою волю или методы работы. Скрытен, не любит делиться своими впечатлениями с посторонними. " +
            "Боится перемен и нестабильности. Плохо разбирается в отношениях других к себе. Не переносит, когда кто-то " +
            "трогает его вещи, вмешивается без разрешения в дела.",
        professions: "менеджер среднего и высшего звена, аудитор, бухгалтер, хирург, юрист, логистик, офис-менеджер."
    },
    {
        answer: "ISFJ",
        title: "Хранитель",
        pluses: "Хорошо разбирается в отношениях между людьми. Добросовестен, обязателен, пунктуален. Ко всему " +
            "готовится заблаговременно. Выполняет начатую работу тщательно и последовательно. Человек долга. " +
            "Не жалеет сил и времени для создания порядка. Заставляет себя делать даже не интересную, но " +
            "необходимую работу. Хороший экономист, умеет рационально обращаться с финансами. не любит долгов. " +
            "Имеет сильную выдержку и самообладание. Принципиален, если надо, твердо и напористо защищает себя и " +
            "своих близких. Постоянен в своих привычках и привязанностях. Нетерпим к неопрятности и халтуре, требует " +
            "соблюдения оправдавших себя методов работы. Охотно приходит на помощь людям в трудные для них минуты, " +
            "оказывает различные услуги. Хранит верность в семье. На мероприятия не опаздывает. Стремится равномерно " +
            "распределять дела по времени, постоянно загружен какой-либо работой. Трудолюбив в быту.",
        problems: "Болезненно переносит несправедливость и неэтичность. Раним и впечатлителен, на добро и зло отвечает " +
            "тем же. Хорошо видит чужие недостатки, отличается резкостью оценок, но чаще свое отношение выражает не столько " +
            "словами, сколько тоном и взглядом. Склонен делить людей на «своих» и «чужих».Не прощает предательства. Мнителен, " +
            "плохо переносит ситуации неопределенности. Не любит частых перемен. Ему трудно определить индивидуальные способности " +
            "людей, ко всем склонен предъявлять одинаково высокие моральные требования. Не любит, когда кто-то подвергает оценке " +
            "его качества, так как внутренне не всегда в них уверен. При попытках подавить его может проявлять агрессивность.",
        professions: "менеджер среднего звена, экономист, бухгалтер, офис-менеджер, кладовщик."
    },
    {
        answer: "ENTP",
        title: "Новатор",
        pluses: "Хорошо развито познавательное мышление. Эрудирован, любознателен, много читает и запоминает. " +
            "Обладает развитой интуицией, помогающей выбрать правильное решение. Хорошо видит правильные перспективы " +
            "идей и дел. Может найти неожиданное решение проблемы там, где не видят его другие, на основании разнообразной " +
            "информации и рассмотрения ее как бы со стороны, интуитивно. Охотно советует, как выпутаться из сложных ситуаций. " +
            "Расплывчатые идеи способен переработать в теорию, имеющую форму системы. Структуралист и классификатор, идущий от " +
            "общего к частному. Довольно напорист, нередко обладает организаторскими способностями в области поиска принципиально " +
            "новых подходов. Часто работу ставит выше семейных или личных отношений. Демократичен, не любит чинопочитания.",
        problems: "Не переносит строгую регламентацию и монотонный режим работы. Не может жить по строгому плану. Довольно " +
            "неорганизован: отвлекаясь на интересные детали, иногда не успевает сделать главное к намеченному сроку. Может " +
            "говорить не по теме, уходя в свои мысли. Ему с трудом удается порядок в делах, на рабочем месте. Может допускать " +
            "погрешности в оформлении деловой документации. Не всегда следит за своим внешним видом. Бывает наивным, слишком " +
            "доверчивым. Из-за предприимчивости, с одной стороны, и неумения идти на компромиссы – с другой, ему с трудом " +
            "удаются бесконфликтные отношения с людьми. Бывает неуступчивым, даже агрессивным, особенно если на него давить. " +
            "Может с апломбом доказывать свою правоту, если убежден в ней.",
        professions: "предприниматель, бизнес-консультант, маркетолог, политолог, социолог, разработчик компьютерных систем, научный работник."
    }
]

const answerVariant = [
    [`
    <div class="check-row">
        <label for="E">Вы человек открытый и разговорчивый, легко сходитесь с новыми людьми.</label>
        <input type="radio" name="answer" id="E">
    </div>
    <div class="check-row">
        <label for="I">Вы неторопливы, сдержаны в общении, насторожены к новым людям.</label>
        <input type="radio" name="answer" id="I">
    </div>`
    ],
    [`
    <div class="check-row">
        <label for="S">Вы реалист и прагматик. Старое и проверенное предпочитаете новому.</label>
        <input type="radio" name="answer" id="S">
    </div>
    <div class="check-row">
        <label for="N">Вы склонны доверять своей интуиции. Новое предпочитаете старому.</label>
        <input type="radio" name="answer" id="N">
    </div>`],
    [`
    <div class="check-row">
        <label for="T">Вы ставите логику выше чувств, судите о людях независимо от симпатий к ним.</label>
        <input type="radio" name="answer" id="T">
    </div>
    <div class="check-row">
        <label for="F">Вы склонны идти на компромиссы в делах ради гармоничных отношений. Доверяете своим чувствам.</label>
        <input type="radio" name="answer" id="F">
    </div>`],
    [`
    <div class="check-row">
        <label for="J">Вы последовательны в работе, решения принимаете однозначно и не любите их менять.</label>
        <input type="radio" name="answer" id="J">
    </div>
    <div class="check-row">
        <label for="P">Вы можете гибко приспосабливать к условиям свои решения. Не терпите формализма.</label>
        <input type="radio" name="answer" id="P">
    </div>`]
]

function addInformationBlock(title, description, pluses, problems, professions) {
    document.body.insertAdjacentHTML("afterbegin", `
    <div class="information">
        <div class="title">
            <h4>«${title}»</h4>
            <i class="fa-regular fa-rectangle-xmark"></i>
        </div>
        <div class="table">
            <div class="pluses">
                <h6>Сильные стороны</h6>
                <p>${pluses}</p>
            </div>
            <div class="problems">
                <h6>Проблемы</h6>
                <p>${problems}</p>
            </div>
        </div>
        <p class="professions"><span>Популярные профессии:</span> ${professions}</p>
    </div>`)
    document.querySelector('i').addEventListener("click", () => {
        document.body.removeChild(document.querySelector('.information'))
        document.body.removeChild(document.querySelector('h2'))
        document.body.insertAdjacentHTML("afterend", `<a href="index.html" id="reload">Пройти ещё раз</a>`)
    })
}

const testForm = document.querySelector('form[name="test"]')
const submitBtn = document.querySelector('#submit')
let answer = ""

testForm.insertAdjacentHTML("afterbegin", answerVariant[0]);

function disableBtn() {
    for (let input of document.querySelectorAll('input[name="answer"]')) {
        input.addEventListener("click", () => {
            submitBtn.disabled = false;
        })
    }
}

disableBtn()

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    answer += document.querySelector('input[name="answer"]:checked').id;
    for (let element of document.querySelectorAll('.check-row')) {
        testForm.removeChild(element);
    }
    if (submitBtn.value < answerVariant.length) {
        testForm.insertAdjacentHTML("afterbegin", answerVariant[submitBtn.value]);
        submitBtn.value = +submitBtn.value + 1
        submitBtn.disabled = true;
        disableBtn()
    }
    else {
        testForm.removeChild(submitBtn)
        for (let key of keys) {
            if (key.answer === answer) {
                addInformationBlock(key.title, key.description, key.pluses, key.problems, key.professions)
            }
        }
    }
})