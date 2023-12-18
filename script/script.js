const keys = [
    {
        answer: "ESTP",
        title: "«Маршал»",
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
        title: "«Политик»",
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
            <h4>${title}</h4>
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
        <p><span>Популярные профессии:</span> ${professions}</p>
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