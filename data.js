const LESSON_DATA = {
  days: [
    {
      id: "day1",
      tag: "Зупинка 1",
      title: "Стовбур-листя та таблиці частот",
      topics: [
{
  id: "d1t1",
  title: "Стовбур-листя: читати і будувати діаграму",
  subtitle: "Сума, найбільше/найменше значення та побудова з готового списку",
  reference: `
    <p><strong>Що таке діаграма "стовбур-листя"?</strong> Це спосіб компактно записати список чисел.
    Кожне число ділять на дві частини: <strong>стебло</strong> (перші цифри числа) і
    <strong>листок</strong> (остання цифра).</p>
    <p>Наприклад, число <span class="formula">74</span> має стебло <span class="formula">7</span>
    і листок <span class="formula">4</span>.</p>
    <p>Ключ біля діаграми (наприклад, «7|4 означає 74») завжди пояснює, як саме з'єднувати
    стебло і листок у число. В одному рядку може бути кілька листків — кожен листок це
    окреме число з тим самим стеблом, і листки завжди записують за зростанням зліва направо.</p>
  `,
  theory: `
    <p>Щоб прочитати число з діаграми — з'єднай стебло рядка і один листок за прикладом з ключа.</p>
    <table style="border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;">
      <thead><tr>
        <th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;color:#1B2A4A;">Стебло</th>
        <th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;color:#1B2A4A;text-align:left;">Листок</th>
      </tr></thead>
      <tbody>
        <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">1</td><td style="padding:5px 18px;">2 5 8</td></tr>
        <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">2</td><td style="padding:5px 18px;">0 0 3</td></tr>
      </tbody>
    </table>
    <p style="font-size:13px;color:rgba(27,42,74,0.6);">Ключ: 1|2 означає число 12.</p>
    <p><strong>Крок 1 (прочитати всі числа):</strong> стебло 1 → 12, 15, 18. Стебло 2 → 20, 20, 23.
    Разом 6 чисел: 12, 15, 18, 20, 20, 23.</p>
    <p><strong>Крок 2 (сума, якщо потрібна):</strong> 12+15+18+20+20+23 = 108.</p>
    <p><strong>Крок 3 (найбільше і найменше):</strong> найбільше — 23, найменше — 12.
    Різниця: 23−12 = 11.</p>
    <p><strong>Крок 4 (побудова діаграми з готового списку чисел):</strong> усі числа з
    ОДНАКОВИМ стеблом об'єднуються в ОДИН рядок, а листки в рядку записуються за зростанням.
    Кожне число зі списку має з'явитися рівно один раз.</p>
    <div class="warn">⚠️ Найчастіша помилка: записувати кожне число окремим рядком (як у вихідному
    списку), замість того щоб об'єднати однакові стебла в один рядок; або переплутати, яка
    цифра — стебло, а яка — листок.</div>
  `,
  questions: [
    {
      prompt: `Діаграма показує кількість очок команди в кожній грі сезону.
        <table style="border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;">
          <thead><tr><th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;">Стебло</th><th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;text-align:left;">Листок</th></tr></thead>
          <tbody>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">5</td><td style="padding:5px 18px;">2 6</td></tr>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">6</td><td style="padding:5px 18px;">1 4 8</td></tr>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">7</td><td style="padding:5px 18px;">3</td></tr>
          </tbody>
        </table>
        <p style="font-size:13px;color:rgba(27,42,74,0.6);">Ключ: 5|2 означає 52 очки.</p>
        Яка загальна кількість очок команди за всі ігри сезону?`,
      options: ["374", "301", "24", "392"],
      correct: 0,
      explain: {
        1: "Схоже, один із рядків діаграми не увійшов у підрахунок — перевір, чи враховані числа з КОЖНОГО рядка, включно з останнім.",
        2: "Це схоже на суму самих цифр-листків, а не повних чисел. Кожне число — це стебло і листок РАЗОМ (наприклад, 5|2 означає число 52, а не просто цифру 2).",
        3: "Перевір, чи не переплутано місцями стебло і листок в одному з чисел — це змінює значення числа."
      },
      solution: "Числа з діаграми: 52, 56, 61, 64, 68, 73. Сума: 52+56+61+64+68+73 = 374."
    },
    {
      prompt: `Діаграма показує висоту саджанців (см) з точністю до десятих.
        <table style="border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;">
          <thead><tr><th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;">Стебло</th><th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;text-align:left;">Листок</th></tr></thead>
          <tbody>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">2</td><td style="padding:5px 18px;">8</td></tr>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">3</td><td style="padding:5px 18px;">1 4</td></tr>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">4</td><td style="padding:5px 18px;">0 6 9</td></tr>
          </tbody>
        </table>
        <p style="font-size:13px;color:rgba(27,42,74,0.6);">Ключ: 3|5 означає 3.5 см.</p>
        Яка різниця між найвищим і найнижчим саджанцем?`,
      options: ["2.1 см", "0.21 см", "7.7 см", "1.8 см"],
      correct: 0,
      explain: {
        1: "Перевір розташування коми — схоже, різницю порахували в сотих частках, а не в десятих.",
        2: "Тут числа не віднімають, а додають. Питання просить РІЗНИЦЮ між найбільшим і найменшим значенням — тобто віднімання, а не суму.",
        3: "Перевір, чи справді обрані саме найбільше і найменше значення зі списку, а не якісь інші два."
      },
      solution: "Найбільше значення — 4.9 см, найменше — 2.8 см. Різниця: 4.9 − 2.8 = 2.1 см."
    },
    {
      prompt: `Учні набрали такі очки в грі: 45, 52, 45, 58, 61, 52, 67. Ось незавершена діаграма
        "стовбур-листя" для цих даних:
        <table style="border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;">
          <thead><tr><th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;">Стебло</th><th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;text-align:left;">Листок</th></tr></thead>
          <tbody>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">4</td><td style="padding:5px 18px;">5 5</td></tr>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">5</td><td style="padding:5px 18px;">2 <span style="display:inline-block;width:22px;border:1.5px dashed #E8704A;text-align:center;">?</span> 8</td></tr>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">6</td><td style="padding:5px 18px;">1 7</td></tr>
          </tbody>
        </table>
        <p style="font-size:13px;color:rgba(27,42,74,0.6);">Ключ: 4|5 означає 45 очок.</p>
        Яке число має стояти на місці «?», щоб діаграма правильно відображала всі дані?`,
      options: ["2", "5", "8", "0"],
      correct: 0,
      explain: {
        1: "5 — це стебло цього самого рядка, а не пропущений листок. Порівняй список чисел із уже вписаними листками рядка, щоб знайти, якого листка не вистачає.",
        2: "8 вже записаний у цьому рядку (число 58) — придивись, яке саме число зі списку ще не позначено жодним листком у рядку зі стеблом 5.",
        3: "У вихідному списку немає числа 50 — перевір ще раз, які саме числа мають стебло 5."
      },
      solution: "Числа зі стеблом 5 у списку: 52, 52, 58. У рядку вже записані листки 2 і 8 — бракує другого листка «2» від другого числа 52."
    },
    {
      prompt: `Таблиця показує вік учасників гуртка.
        <table style="border-collapse:collapse;margin:12px 0;font-family:'Inter',sans-serif;font-size:14px;">
          <thead><tr><th style="padding:6px 16px;border-bottom:2px solid #1B2A4A;">Ім'я</th><th style="padding:6px 16px;border-bottom:2px solid #1B2A4A;">Вік</th></tr></thead>
          <tbody>
            <tr><td style="padding:5px 16px;">Оля</td><td style="padding:5px 16px;text-align:center;">41</td></tr>
            <tr><td style="padding:5px 16px;">Борис</td><td style="padding:5px 16px;text-align:center;">56</td></tr>
            <tr><td style="padding:5px 16px;">Віра</td><td style="padding:5px 16px;text-align:center;">48</td></tr>
            <tr><td style="padding:5px 16px;">Гліб</td><td style="padding:5px 16px;text-align:center;">41</td></tr>
            <tr><td style="padding:5px 16px;">Дмитро</td><td style="padding:5px 16px;text-align:center;">63</td></tr>
          </tbody>
        </table>
        Яка діаграма "стовбур-листя" правильно відображає ці дані (ключ: 4|1 означає 41)?`,
      options: [
        `<table style="border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;"><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">4</td><td style="padding:3px 10px;">1 1 8</td></tr><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">5</td><td style="padding:3px 10px;">6</td></tr><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">6</td><td style="padding:3px 10px;">3</td></tr></table>`,
        `<table style="border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;"><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">4</td><td style="padding:3px 10px;">1</td></tr><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">5</td><td style="padding:3px 10px;">6</td></tr><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">4</td><td style="padding:3px 10px;">8</td></tr><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">4</td><td style="padding:3px 10px;">1</td></tr><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">6</td><td style="padding:3px 10px;">3</td></tr></table>`,
        `<table style="border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;"><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">4</td><td style="padding:3px 10px;">8 1 1</td></tr><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">5</td><td style="padding:3px 10px;">6</td></tr><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">6</td><td style="padding:3px 10px;">3</td></tr></table>`,
        `<table style="border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;"><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">1</td><td style="padding:3px 10px;">4 4 8</td></tr><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">6</td><td style="padding:3px 10px;">5</td></tr><tr><td style="padding:3px 10px;border-right:1.5px solid #1B2A4A;">3</td><td style="padding:3px 10px;">6</td></tr></table>`
      ],
      correct: 0,
      explain: {
        1: "Тут кожне число зі списку записане в окремий рядок за порядком з таблиці, а не згруповане за стеблом. Усі числа з ОДНАКОВИМ стеблом мають бути в ОДНОМУ рядку.",
        2: "Групування за стеблом тут правильне, але листки в рядку мають йти за ЗРОСТАННЯМ (від меншого до більшого), а не в довільному порядку.",
        3: "Перевір, яка частина числа — стебло (перші цифри), а яка — листок (остання цифра): тут вони, схоже, переплутані місцями."
      },
      solution: "Групуємо числа з однаковим стеблом: стебло 4 → листки 1, 1, 8 (41, 41, 48); стебло 5 → листок 6 (56); стебло 6 → листок 3 (63)."
    },
    {
      prompt: `Діаграма показує температуру повітря (°C), виміряну щодня протягом двох тижнів.
        <table style="border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;">
          <thead><tr><th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;">Стебло</th><th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;text-align:left;">Листок</th></tr></thead>
          <tbody>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">1</td><td style="padding:5px 18px;">8 9</td></tr>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">2</td><td style="padding:5px 18px;">0 2 2 5 7</td></tr>
            <tr><td style="padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;">3</td><td style="padding:5px 18px;">1</td></tr>
          </tbody>
        </table>
        <p style="font-size:13px;color:rgba(27,42,74,0.6);">Ключ: 2|0 означає 20°C.</p>
        Скільки днів мали температуру від 20°C до 29°C?`,
      options: ["5", "8", "4", "1"],
      correct: 0,
      explain: {
        1: "8 — це загальна кількість усіх днів у списку за весь період, а не лише тих, що потрапляють у діапазон 20–29°C.",
        2: "Тут не враховано, що значення 22°C зустрічається двічі — у діаграмі воно записане двома окремими листками, тому має рахуватись двічі.",
        3: "Це кількість днів з іншого рядка діаграми (стебло 3, тобто 30–39°C), а не з рядка 20–29°C."
      },
      solution: "Рядок зі стеблом 2 має листки 0, 2, 2, 5, 7 — це 5 чисел: 20, 22, 22, 25, 27. Отже, 5 днів мали температуру від 20°C до 29°C."
    }
  ]
},
{
  id: "d1t2",
  title: "Таблиця частот: рахувати без помилок",
  subtitle: "Підрахунок тally-позначок і читання готової таблиці",
  reference: `
    <p><strong>Що таке таблиця частот?</strong> Це таблиця, яка показує, скільки РАЗІВ кожне
    значення (або кожен діапазон значень) зустрічається у списку даних.</p>
    <p>Кожне входження значення позначають однією рискою — <span class="formula">|</span>
    (це називають "tally", позначка). Три входження — це <span class="formula">|||</span>.</p>
    <p>Іноді частоту рахують не для кожного числа окремо, а для ЦІЛОГО ДІАПАЗОНУ значень
    (наприклад, «скільки чисел від 0 до 4»). Правило те саме: кожне число з вихідного списку
    повинно потрапити рівно в один рядок таблиці.</p>
  `,
  theory: `
    <p>Приклад: скільки цукерок отримав кожен з 8 дітей: 2, 4, 3, 2, 4, 4, 3, 2.</p>
    <p><strong>Крок 1:</strong> випиши всі можливі значення, які зустрічаються (2, 3, 4).</p>
    <p><strong>Крок 2:</strong> пройди СПИСОК ПО ОДНОМУ числу за раз. Для кожного числа онови
    таблицю на одну позначку і подумки "викресли" це число зі списку — так жодне число не
    порахується двічі і жодне не пропуститься.</p>
    <table style="border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;">
      <thead><tr><th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;">Значення</th><th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;text-align:left;">Позначки</th><th style="padding:6px 18px;border-bottom:2px solid #1B2A4A;">Разом</th></tr></thead>
      <tbody>
        <tr><td style="padding:5px 18px;text-align:center;">2</td><td style="padding:5px 18px;">|||</td><td style="padding:5px 18px;text-align:center;">3</td></tr>
        <tr><td style="padding:5px 18px;text-align:center;">3</td><td style="padding:5px 18px;">||</td><td style="padding:5px 18px;text-align:center;">2</td></tr>
        <tr><td style="padding:5px 18px;text-align:center;">4</td><td style="padding:5px 18px;">|||</td><td style="padding:5px 18px;text-align:center;">3</td></tr>
      </tbody>
    </table>
    <p><strong>Крок 3 (перевірка):</strong> додай усі стовпці "Разом": 3+2+3 = 8 — це збігається
    з кількістю дітей у списку (8). Якщо сума НЕ збігається — десь пропущено число або
    порахbовано двічі.</p>
    <div class="warn">⚠️ Найчастіша помилка: порахувати одне й те саме значення двічі (або
    пропустити його), коли воно повторюється в списку кілька разів. Завжди перевіряй суму всіх
    рядків проти загальної кількості даних у списку.</div>
  `,
  questions: [
    {
      prompt: `Список балів учнів: 4, 1, 3, 4, 0, 4, 1, 3. Яка таблиця частот правильно
        відображає ці дані?`,
      options: [
        `<table style="border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;"><tr><td style="padding:3px 10px;">0</td><td style="padding:3px 10px;">|</td></tr><tr><td style="padding:3px 10px;">1</td><td style="padding:3px 10px;">||</td></tr><tr><td style="padding:3px 10px;">2</td><td style="padding:3px 10px;"></td></tr><tr><td style="padding:3px 10px;">3</td><td style="padding:3px 10px;">||</td></tr><tr><td style="padding:3px 10px;">4</td><td style="padding:3px 10px;">|||</td></tr></table>`,
        `<table style="border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;"><tr><td style="padding:3px 10px;">0</td><td style="padding:3px 10px;">|</td></tr><tr><td style="padding:3px 10px;">1</td><td style="padding:3px 10px;">|||</td></tr><tr><td style="padding:3px 10px;">2</td><td style="padding:3px 10px;"></td></tr><tr><td style="padding:3px 10px;">3</td><td style="padding:3px 10px;">||</td></tr><tr><td style="padding:3px 10px;">4</td><td style="padding:3px 10px;">|||</td></tr></table>`,
        `<table style="border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;"><tr><td style="padding:3px 10px;">0</td><td style="padding:3px 10px;">|</td></tr><tr><td style="padding:3px 10px;">1</td><td style="padding:3px 10px;">||</td></tr><tr><td style="padding:3px 10px;">2</td><td style="padding:3px 10px;"></td></tr><tr><td style="padding:3px 10px;">3</td><td style="padding:3px 10px;">||</td></tr><tr><td style="padding:3px 10px;">4</td><td style="padding:3px 10px;">||</td></tr></table>`,
        `<table style="border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;"><tr><td style="padding:3px 10px;">0</td><td style="padding:3px 10px;">|</td></tr><tr><td style="padding:3px 10px;">1</td><td style="padding:3px 10px;">||</td></tr><tr><td style="padding:3px 10px;">2</td><td style="padding:3px 10px;">|</td></tr><tr><td style="padding:3px 10px;">3</td><td style="padding:3px 10px;">|</td></tr><tr><td style="padding:3px 10px;">4</td><td style="padding:3px 10px;">|||</td></tr></table>`
      ],
      correct: 0,
      explain: {
        1: "Порахуй ще раз, скільки разів рівно значення 1 зустрічається у списку — тут воно пораховане на одну позначку більше, ніж є насправді.",
        2: "Порахуй ще раз, скільки разів рівно значення 4 зустрічається у списку — тут якогось входження бракує.",
        3: "У вихідному списку немає жодного числа 2 — а в цій таблиці для значення 2 стоїть позначка. Порівняй кожен рядок зі списком уважно."
      },
      solution: "Список: 4,1,3,4,0,4,1,3. Значення 0 зустрічається 1 раз, 1 — 2 рази, 3 — 2 рази, 4 — 3 рази. Разом 1+2+2+3=8, що збігається з кількістю чисел у списку."
    },
    {
      prompt: `Учні прочитали за тиждень таку кількість сторінок: 2, 5, 7, 9, 11, 13, 14, 14, 17, 18.
        Таблицю частот розбито на діапазони:
        <table style="border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;">
          <thead><tr><th style="padding:6px 16px;border-bottom:2px solid #1B2A4A;">Діапазон</th><th style="padding:6px 16px;border-bottom:2px solid #1B2A4A;text-align:left;">Позначки</th></tr></thead>
          <tbody>
            <tr><td style="padding:5px 16px;text-align:center;">0–4</td><td style="padding:5px 16px;">|</td></tr>
            <tr><td style="padding:5px 16px;text-align:center;">5–9</td><td style="padding:5px 16px;">|||</td></tr>
            <tr><td style="padding:5px 16px;text-align:center;">10–14</td><td style="padding:5px 16px;">|||</td></tr>
            <tr><td style="padding:5px 16px;text-align:center;">15–19</td><td style="padding:5px 16px;">||</td></tr>
          </tbody>
        </table>
        Який рядок у таблиці є неповним?`,
      options: ["Рядок 10–14", "Рядок 0–4", "Рядок 5–9", "Рядок 15–19"],
      correct: 0,
      explain: {
        1: "У діапазоні 0–4 зі списку є лише одне число (2) — цей рядок відповідає даним правильно.",
        2: "У діапазоні 5–9 зі списку є три числа (5, 7, 9) — цей рядок відповідає даним правильно.",
        3: "У діапазоні 15–19 зі списку є два числа (17, 18) — цей рядок відповідає даним правильно."
      },
      solution: "У діапазоні 10–14 є чотири числа зі списку: 11, 13, 14, 14 (14 зустрічається двічі!). У таблиці для цього рядка стоїть лише 3 позначки — отже, рядок неповний, бракує однієї позначки."
    },
    {
      prompt: `Таблиця частот показує кількість книжок, прочитаних учнями за місяць.
        <table style="border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;">
          <thead><tr><th style="padding:6px 16px;border-bottom:2px solid #1B2A4A;">Книжок</th><th style="padding:6px 16px;border-bottom:2px solid #1B2A4A;">Учнів</th></tr></thead>
          <tbody>
            <tr><td style="padding:5px 16px;text-align:center;">1</td><td style="padding:5px 16px;text-align:center;">2</td></tr>
            <tr><td style="padding:5px 16px;text-align:center;">2</td><td style="padding:5px 16px;text-align:center;">4</td></tr>
            <tr><td style="padding:5px 16px;text-align:center;">3</td><td style="padding:5px 16px;text-align:center;">3</td></tr>
            <tr><td style="padding:5px 16px;text-align:center;">4</td><td style="padding:5px 16px;text-align:center;">1</td></tr>
          </tbody>
        </table>
        Скільки учнів прочитали 3 АБО БІЛЬШЕ книжок?`,
      options: ["4", "3", "10", "1"],
      explain: {
        1: "Це кількість учнів, які прочитали РІВНО 3 книжки — а питання просить 3 АБО БІЛЬШЕ, тобто потрібно додати ще й тих, хто прочитав 4.",
        2: "10 — це загальна кількість УСІХ учнів у таблиці, включно з тими, хто прочитав менше 3 книжок.",
        3: "Це кількість учнів, які прочитали РІВНО 4 книжки — а питання просить 3 АБО БІЛЬШЕ, тобто варто додати ще й тих, хто прочитав рівно 3."
      },
      correct: 0,
      solution: "3 книжки прочитали 3 учні, 4 книжки — 1 учень. Разом: 3+1 = 4 учні прочитали 3 або більше книжок."
    }
  ]
}
      ]
    },
    {
      id: "day2",
      tag: "Зупинка 2",
      title: "Порівняння дробів і дроби в задачах",
      topics: [
{
  id: "d2t1",
  title: "Порівняння дробів: спільний знаменник і пастки",
  subtitle: "Однаковий чисельник, рівність дробів і межі діапазону",
  reference: `
    <p><strong>Нагадування.</strong> У дробі <span class="formula">3/4</span> число 3 —
    <strong>чисельник</strong> (скільки частин узяли), а 4 — <strong>знаменник</strong>
    (на скільки рівних частин поділили ціле).</p>
    <p>Порівняти два дроби — означає визначити, який з них більший, менший, чи вони РІВНІ.
    Два дроби з різними цифрами можуть позначати ОДНАКОВУ величину (наприклад,
    <span class="formula">1/2 = 2/4 = 3/6</span>) — це називають рівносильними (еквівалентними)
    дробами.</p>
  `,
  theory: `
    <p><strong>Спосіб 1 — спільний знаменник.</strong> Приклад: порівняй 3/4 і 5/8.</p>
    <p>Крок 1: знайди спільний знаменник — для 4 і 8 це 8.</p>
    <p>Крок 2: зведи 3/4 до восьмих: 3/4 = 6/8.</p>
    <p>Крок 3: порівняй чисельники при однаковому знаменнику: 6/8 і 5/8 → 6 &gt; 5, тому
    3/4 &gt; 5/8.</p>
    <p><strong>Спосіб 2 — однаковий чисельник (швидкий шлях).</strong> Приклад: порівняй 2/5 і 2/9.
    Чисельники однакові (2). Чим БІЛЬШИЙ знаменник — тим МЕНШІ частини цілого, отже дріб
    МЕНШИЙ. Знаменник 5 менший за 9, тому кожна п'ята частина більша за дев'яту:
    <strong>2/5 &gt; 2/9</strong>.</p>
    <p><strong>Не забувай про РІВНІСТЬ.</strong> Перш ніж вирішувати «більше» чи «менше» —
    перевір, чи дроби взагалі не РІВНІ. Наприклад, 3/6 і 1/2: 1/2 = 3/6, тобто вони рівні,
    і твердження «3/6 &lt; 1/2» буде НЕПРАВИЛЬНИМ.</p>
    <div class="warn">⚠️ Найчастіша помилка: думати, що менший знаменник завжди означає
    менший дріб — це правило працює для ЦІЛИХ чисел, але НЕ для дробів з однаковим
    чисельником (там усе навпаки!). Друга поширена помилка — не перевірити рівність дробів
    перед тим, як обрати «більше» чи «менше».</div>
  `,
  questions: [
    {
      prompt: "Який дріб потрібно розмістити, щоб це порівняння було правильним: 5/8 > ☐?",
      options: ["1/4", "5/6", "7/8", "8/5"],
      correct: 0,
      explain: {
        1: "5/6 і 5/8 мають ОДНАКОВИЙ чисельник (5). Коли чисельники однакові, дріб з МЕНШИМ знаменником — БІЛЬШИЙ, а не менший (адже частини цілого більші). Перевір напрямок цього правила ще раз.",
        2: "Порівняй чисельники при однаковому знаменнику (8): який із них — 7 чи 5 — більший?",
        3: "8/5 — це більше за одне ціле (чисельник більший за знаменник), тож це точно не менше за 5/8."
      },
      solution: "5/8 = 0.625. З варіантів лише 1/4 = 0.25 менше за 0.625, отже правильне порівняння: 5/8 > 1/4."
    },
    {
      prompt: `Таблиця показує чотири порівняння довжин стрічок.
        <table style="border-collapse:collapse;margin:12px 0;font-family:'Inter',sans-serif;font-size:14px;">
          <tbody>
            <tr><td style="padding:6px 16px;font-weight:700;">P</td><td style="padding:6px 16px;">6/8 &lt; 9/10</td></tr>
            <tr><td style="padding:6px 16px;font-weight:700;">Q</td><td style="padding:6px 16px;">6/8 &lt; 3/4</td></tr>
            <tr><td style="padding:6px 16px;font-weight:700;">R</td><td style="padding:6px 16px;">6/8 &lt; 7/8</td></tr>
            <tr><td style="padding:6px 16px;font-weight:700;">S</td><td style="padding:6px 16px;">6/8 &lt; 5/6</td></tr>
          </tbody>
        </table>
        Які з цих порівнянь є істинними?`,
      options: ["Тільки P", "Тільки P, R і S", "Тільки Q і R", "Жодне з цих"],
      correct: 1,
      explain: {
        0: "P дійсно правильне (6/8 < 9/10) — але це не означає, що R і S автоматично неправильні. Перевір їх окремо, звівши кожну пару дробів до спільного знаменника.",
        2: "Q НЕ є правильним порівнянням: 6/8 і 3/4 — це РІВНІ дроби (3/4 = 6/8), а не «6/8 менше за 3/4». Зведи обидва дроби до спільного знаменника і перевір ще раз.",
        3: "Принаймні кілька із цих порівнянь дійсно правильні — перевір кожне окремо, звівши дроби до спільного знаменника."
      },
      solution: "6/8 = 0.75. P: 0.75 < 0.9 ✓. Q: 3/4 теж дорівнює 0.75 — це рівність, а не «менше», тому Q неправильне. R: 0.75 < 0.875 ✓. S: 0.75 < 0.833 ✓. Правильні лише P, R і S."
    },
    {
      prompt: `Четверо друзів виконали частину проєкту:
        <table style="border-collapse:collapse;margin:12px 0;font-family:'Inter',sans-serif;font-size:14px;">
          <tbody>
            <tr><td style="padding:6px 16px;">Артем</td><td style="padding:6px 16px;">8/12</td></tr>
            <tr><td style="padding:6px 16px;">Ліза</td><td style="padding:6px 16px;">7/9</td></tr>
            <tr><td style="padding:6px 16px;">Максим</td><td style="padding:6px 16px;">5/9</td></tr>
            <tr><td style="padding:6px 16px;">Соня</td><td style="padding:6px 16px;">3/4</td></tr>
          </tbody>
        </table>
        Хто з цих людей виконав БІЛЬШЕ ніж 2/3 проєкту?`,
      options: ["Тільки Ліза і Соня", "Артем, Ліза і Соня", "Тільки Ліза", "Усі четверо"],
      correct: 0,
      explain: {
        1: "Артем виконав РІВНО 2/3 проєкту (8/12 = 2/3) — це не «більше», а точно стільки ж. Перевір це порівняння ще раз.",
        2: "Це звужує коло лише до Лізи — але перевір результат Соні (3/4) окремо, порівнявши його з 2/3, перш ніж вирішувати, кого саме включати.",
        3: "Перевір результат Максима (5/9) окремо, порівнявши його зі значенням 2/3."
      },
      solution: "2/3 ≈ 0.667. Артем: 8/12 = 2/3 — рівно стільки ж, не більше. Ліза: 7/9 ≈ 0.778 — більше. Максим: 5/9 ≈ 0.556 — менше. Соня: 3/4 = 0.75 — більше. Більше ніж 2/3 виконали лише Ліза і Соня."
    },
    {
      prompt: `Четверо дітей зібрали таку частку грошей від своєї мети на подарунок:
        <table style="border-collapse:collapse;margin:12px 0;font-family:'Inter',sans-serif;font-size:14px;">
          <tbody>
            <tr><td style="padding:6px 16px;">Марта</td><td style="padding:6px 16px;">3/5</td></tr>
            <tr><td style="padding:6px 16px;">Толя</td><td style="padding:6px 16px;">9/10</td></tr>
            <tr><td style="padding:6px 16px;">Ніна</td><td style="padding:6px 16px;">2/5</td></tr>
            <tr><td style="padding:6px 16px;">Юра</td><td style="padding:6px 16px;">7/10</td></tr>
          </tbody>
        </table>
        Хто з них зібрав БІЛЬШЕ ніж половину (1/2), але МЕНШЕ ніж 4/5 своєї мети?`,
      options: ["Марта і Юра", "Толя і Юра", "Марта, Ніна і Юра", "Усі четверо"],
      correct: 0,
      explain: {
        1: "Толя зібрав 9/10 своєї мети — це БІЛЬШЕ за 4/5, тому не підходить під умову «менше ніж 4/5».",
        2: "Ніна зібрала лише 2/5 своєї мети — це МЕНШЕ за половину, тому не підходить під умову «більше ніж половина».",
        3: "Перевір кожен результат окремо: принаймні один із чотирьох виходить за межі діапазону від 1/2 до 4/5."
      },
      solution: "Діапазон: більше за 1/2 (0.5), але менше за 4/5 (0.8). Марта: 3/5=0.6 — підходить. Толя: 9/10=0.9 — забагато. Ніна: 2/5=0.4 — замало. Юра: 7/10=0.7 — підходить. Підходять Марта і Юра."
    },
    {
      prompt: `Пекарня продає булочки. 1/4 усіх булочок — з корицею, 2/5 — з маком, решта —
        звичайні (без начинки). Яке твердження є правильним?`,
      options: [
        "Більше ніж половина булочок — звичайні.",
        "У пекарні немає жодної звичайної булочки.",
        "Рівно половина булочок — звичайні.",
        "Менше ніж половина булочок — звичайні."
      ],
      correct: 3,
      explain: {
        0: "Спочатку додай частки з корицею і з маком (звівши до спільного знаменника), а потім відніми результат від цілого (1), щоб знайти частку звичайних булочок — і порівняй її з половиною.",
        1: "У задачі сказано, що решта булочок — звичайні, тобто якась їх кількість точно є. Перевір, чи справді сума часток з корицею і маком дорівнює цілому (1).",
        2: "Перевір суму 1/4 + 2/5 ще раз, звівши дроби до спільного знаменника — здається, результат не зовсім дорівнює половині."
      },
      solution: "1/4 + 2/5 = 5/20 + 8/20 = 13/20. Звичайних: 1 − 13/20 = 7/20 = 0.35, що менше за половину (0.5)."
    }
  ]
},
{
  id: "d2t2",
  title: "Дроби в текстових задачах: що чисельник, що знаменник",
  subtitle: "Не переплутати частину і ціле при складанні дробу",
  reference: `
    <p><strong>Коли задача просить записати дріб</strong>, завжди визнач дві речі окремо:</p>
    <p><strong>Чисельник</strong> (верхнє число) — скільки одиниць ЧАСТИНИ ми рахуємо
    (наприклад, скільки клітинок зафарбовано, скільки шматочків з'їли).</p>
    <p><strong>Знаменник</strong> (нижнє число) — скільки одиниць становить ЦІЛЕ або ЗАГАЛЬНУ
    кількість (наприклад, скільки клітинок усього, скільки хвилин загалом).</p>
  `,
  theory: `
    <p><strong>Приклад 1.</strong> Троє друзів замовили 2 піци, кожну розрізали навпіл.
    Кожен друг з'їв половину піци. Яка частка представляє кількість піц, яку з'їли друзі?</p>
    <p>Крок 1: 2 піци, розрізані навпіл, дають 4 половинки.</p>
    <p>Крок 2: троє друзів з'їли по одній половинці — разом 3 половинки.</p>
    <p>Крок 3: чисельник — це СКІЛЬКИ половинок з'їли (3). Знаменник — скільки половинок
    становить ОДНЕ ціле (2, бо піцу ділили навпіл).</p>
    <p>Результат: <span class="formula">3/2</span> (а НЕ 2/3 — порядок чисел має значення!).</p>
    <p><strong>Приклад 2 (клітинки на малюнку).</strong> Прямокутник поділено на 10 однакових
    клітинок. Частину з них зафарбовано, як показано:</p>
    <svg viewBox="0 0 270 120" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;display:block;margin:10px 0;">
      <rect x="10" y="10" width="46" height="46" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
      <rect x="60" y="10" width="46" height="46" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
      <rect x="110" y="10" width="46" height="46" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
      <rect x="160" y="10" width="46" height="46" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
      <rect x="210" y="10" width="46" height="46" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
      <rect x="10" y="60" width="46" height="46" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
      <rect x="60" y="60" width="46" height="46" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
      <rect x="110" y="60" width="46" height="46" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
      <rect x="160" y="60" width="46" height="46" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
      <rect x="210" y="60" width="46" height="46" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
    </svg>
    <p>Зафарбовано 7 клітинок (чисельник), усього клітинок 10 (знаменник) → зафарбована частка:
    <span class="formula">7/10</span>.</p>
    <div class="warn">⚠️ Найчастіша помилка: переставити місцями чисельник і знаменник (записати
    «ціле над частиною» замість «частина над цілим»). Завжди питай себе: «яке з двох чисел —
    це та частина, про яку запитує задача, а яке — загальна кількість?»</div>
  `,
  questions: [
    {
      prompt: `Троє друзів замовили 2 піци, кожну розрізали навпіл. Кожен друг з'їв половину
        піци. Яка частка представляє кількість піц, яку з'їли друзі?`,
      options: ["3/2", "2/3", "6/2", "3/4"],
      correct: 0,
      explain: {
        1: "Тут переставлено місцями чисельник і знаменник. Подумай ще раз: чисельник має показувати, СКІЛЬКИ половинок з'їли друзі, а знаменник — скільки половинок становлять ОДНЕ ціле — яке з цих двох чисел де стоїть?",
        2: "Перевір, скільки саме половинок з'їли друзі — їх троє, і кожен з'їв рівно одну половинку.",
        3: "4 — це кількість половинок з ДВОХ піц загалом, а не кількість половинок, з'їдених трьома друзями. Порахуй окремо, скільки половинок з'їли, а скільки становлять ціле."
      },
      solution: "2 піци, розрізані навпіл = 4 половинки. 3 друзі з'їли по одній половинці = 3 половинки. Оскільки одна ціла піца = 2 половинки, з'їдена кількість піц = 3/2."
    },
    {
      prompt: `На малюнку зображено поле, поділене на 24 однакові клітинки. Зафарбовані клітинки
        показані нижче.
        <svg viewBox="0 0 230 160" xmlns="http://www.w3.org/2000/svg" style="max-width:220px;display:block;margin:10px 0;">
          <rect x="10" y="10" width="32" height="32" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="45" y="10" width="32" height="32" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="80" y="10" width="32" height="32" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="115" y="10" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="150" y="10" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="185" y="10" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="10" y="45" width="32" height="32" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="45" y="45" width="32" height="32" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="80" y="45" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="115" y="45" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="150" y="45" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="185" y="45" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="10" y="80" width="32" height="32" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="45" y="80" width="32" height="32" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="80" y="80" width="32" height="32" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="115" y="80" width="32" height="32" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="150" y="80" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="185" y="80" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="10" y="115" width="32" height="32" fill="#E8704A" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="45" y="115" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="80" y="115" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="115" y="115" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="150" y="115" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
          <rect x="185" y="115" width="32" height="32" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="2"/>
        </svg>
        Кожен рядок має 3, 2, 4 і 1 зафарбовану клітинку відповідно. Яке рівняння показує, як
        знайти частку зафарбованих клітинок?`,
      options: [
        "3/24 + 2/24 + 4/24 + 1/24 = 10/24",
        "3/24 + 2/24 + 4/24 + 1/24 = 9/24",
        "3/6 + 2/6 + 4/6 + 1/6 = 10/24",
        "10/24 + 14/24 = 24/24"
      ],
      correct: 0,
      explain: {
        1: "Перевір додавання чисельників ще раз: 3+2+4+1 — порахуй уважно кожен доданок.",
        2: "Кожен доданок має знаменник, що дорівнює ЗАГАЛЬНІЙ кількості клітинок на малюнку (24), а не кількості клітинок лише в одному рядку (6).",
        3: "Це рівняння додає зафарбовані і незафарбовані клітинки разом, що завжди дасть усе поле (24/24) — це не показує, яку ЧАСТКУ зафарбовано."
      },
      solution: "У кожному рядку зафарбовано 3, 2, 4 і 1 клітинку з 24 загалом. Частка зафарбованих клітинок: 3/24 + 2/24 + 4/24 + 1/24 = 10/24."
    },
    {
      prompt: `У кошику 5 груш. Яблук утричі більше, ніж груш. Яку частку від УСІХ фруктів у
        кошику становлять груші?`,
      options: ["5/20", "5/15", "15/20", "20/5"],
      correct: 0,
      explain: {
        1: "15 — це лише кількість яблук, а не загальна кількість УСІХ фруктів у кошику. Знаменник має бути загальною кількістю фруктів (груші + яблука разом).",
        2: "15/20 показує частку ЯБЛУК серед усіх фруктів, а питання просить частку ГРУШ.",
        3: "Тут чисельник і знаменник переставлені місцями. Чисельник має бути кількістю груш (частина), а знаменник — загальною кількістю фруктів (ціле), а не навпаки."
      },
      solution: "Груш — 5, яблук утричі більше — 15. Разом фруктів: 5+15=20. Частка груш від усіх фруктів: 5/20."
    },
    {
      prompt: `Учень витратив 40 хвилин на домашнє завдання з математики і 20 хвилин на читання.
        Яку частку від ЗАГАЛЬНОГО часу на обидва заняття становив час на читання?`,
      options: ["20/60", "60/20", "20/40", "40/60"],
      correct: 0,
      explain: {
        1: "Тут чисельник і знаменник переставлені місцями. Чисельник має бути часом на читання (частина), а знаменник — загальним часом на обидва заняття (ціле).",
        2: "40 — це лише час на математику, а не ЗАГАЛЬНИЙ час на обидва заняття. Знаменник має включати і математику, і читання разом.",
        3: "40/60 показує частку часу на МАТЕМАТИКУ від загального часу, а питання просить частку часу на ЧИТАННЯ."
      },
      solution: "Читання — 20 хв, математика — 40 хв. Разом: 60 хв. Частка часу на читання від загального часу: 20/60."
    }
  ]
}
      ]
    },
    {
      id: "day3",
      tag: "Зупинка 3",
      title: "Багатокрокові задачі",
      topics: [
{
  id: "d3t1",
  title: "Багатокрокові задачі: множення, потім ділення",
  subtitle: "Доводити задачу до кінця і обирати правильний порядок дій",
  reference: `
    <p><strong>Що таке багатокрокова задача?</strong> Це задача, де відповідь не можна отримати
    ОДНІЄЮ дією — спочатку треба знайти проміжний результат (наприклад, загальну кількість), а
    потім використати його в наступній дії (наприклад, поділити на групи).</p>
    <p><strong>Що означає "найбільша кількість ПОВНИХ..."?</strong> Якщо після ділення
    залишається остача (щось зайве), цю остачу відкидають — рахують лише те, що поділилося
    БЕЗ ЗАЛИШКУ повністю.</p>
  `,
  theory: `
    <p>Приклад: кондитер має 6 коробок карамельок, у кожній коробці по 24 карамельки. Він хоче
    розкласти всі карамельки в пакетики по 10 карамельок у кожному. Скільки повних пакетиків
    він зможе зробити?</p>
    <p><strong>Крок 1:</strong> знайти загальну кількість карамельок: 6 × 24 = 144.</p>
    <p><strong>Крок 2:</strong> поділити загальну кількість на розмір одного пакетика:
    144 ÷ 10 = 14,4.</p>
    <p><strong>Крок 3:</strong> кількість пакетиків має бути ЦІЛИМ числом — 0,4 пакетика не
    буває, тому відповідь: <strong>14 повних пакетиків</strong> (залишиться 4 карамельки).</p>
    <div class="warn">⚠️ Найчастіша помилка: зупинитися після Кроку 1 і дати відповідь 144 —
    хоча задача запитує про ПАКЕТИКИ, а не про карамельки. Завжди перечитуй, що САМЕ запитує
    задача, і виконуй усі потрібні дії до кінця.</div>
    <p><strong>Іноді задача просить обрати ПРАВИЛЬНИЙ ПОРЯДОК дій</strong>, а не порахувати
    самому. Приклад: у четвер до бібліотеки повернули 40 книг. У п'ятницю повернули утричі
    більше, ніж у четвер. Скільки книг повернули за два дні?</p>
    <p>Крок 1: 40 × 3 = 120 (скільки книг повернули в п'ятницю).</p>
    <p>Крок 2: 120 + 40 = 160 (загальна кількість книг за два дні).</p>
    <div class="warn">⚠️ Не можна спочатку додати два однакові числа з умови (40+40), а потім
    множити — це не відповідає смислу задачі. Спочатку виконай дію, яка описана словами
    («утричі більше»), а вже потім переходь до наступної дії.</div>
  `,
  questions: [
    {
      prompt: `Пекар має 7 коробок яєць, у кожній коробці по 12 яєць. Для одного торта потрібно
        10 яєць. Яку найбільшу кількість тортів пекар може спекти, використовуючи ці яйця?`,
      options: ["8", "84", "9", "7"],
      correct: 0,
      explain: {
        1: "84 — це загальна кількість яєць, а не кількість тортів. Потрібно ще поділити цю кількість на 10 (яєць на один торт).",
        2: "84 ÷ 10 = 8,4 — кількість тортів має бути ЦІЛИМ числом. Округлення ВГОРУ тут не підходить: подумай, чи вистачить яєць на ще один повний торт понад цілу частину результату ділення.",
        3: "7 — це кількість коробок яєць, а не кількість тортів, які можна спекти."
      },
      solution: "Усього яєць: 7×12=84. Тортів: 84÷10=8,4 → лише 8 повних тортів (на 9-й не вистачить яєць)."
    },
    {
      prompt: `Учні п'яти гуртків зробили закладки для книг. На кожну закладку йде 3 аркуші
        паперу. Усього гуртки використали 180 аркушів. Кожен гурток зробив однакову кількість
        закладок. Скільки закладок зробив КОЖЕН гурток?`,
      options: ["12", "60", "36", "15"],
      correct: 0,
      explain: {
        1: "60 — це загальна кількість закладок УСІХ гуртків разом, а не закладок ОДНОГО гуртка. Потрібно ще поділити на кількість гуртків (5).",
        2: "36 — це аркушів на один гурток, а не закладок. Спочатку варто знайти загальну кількість ЗАКЛАДОК (аркуші ÷ 3), а вже потім ділити на гуртки.",
        3: "Тут дані з умови перемножено, а не поділено — перевір, яка дія потрібна на кожному кроці."
      },
      solution: "Закладок усього: 180÷3=60. На один гурток: 60÷5=12."
    },
    {
      prompt: `У понеділок до бібліотеки повернули 30 книг. У вівторок повернули ВЧЕТВЕРО
        більше, ніж у понеділок. Який набір рівнянь можна використати, щоб знайти b — загальну
        кількість книг, повернених за ці два дні?`,
      options: [
        "30 + 30 = 60, потім 60 × 4 = b",
        "30 + 30 = 60, потім 60 + 4 = b",
        "30 × 4 = 120, потім 120 × 30 = b",
        "30 × 4 = 120, потім 120 + 30 = b"
      ],
      correct: 3,
      explain: {
        0: "Тут спочатку двічі додано число з понеділка — але за умовою у вівторок книг було ВЧЕТВЕРО більше, ніж у понеділок, а не вдвічі. Множення на 4 має бути першим кроком.",
        1: "Ця пара дій двічі використовує додавання і взагалі не враховує, що у вівторок книг мало бути в 4 рази більше — тут немає жодного множення на 4.",
        2: "Тут другий крок — множення замість додавання. Щоб знайти ЗАГАЛЬНУ кількість книг за два дні, потрібно ДОДАТИ кількість за понеділок і за вівторок, а не перемножити їх."
      },
      solution: "Вівторок: 30×4=120 книг. Загалом за два дні: 120+30=150=b."
    },
    {
      prompt: `Майстриня має 9 мотків стрічки, у кожному мотку по 15 метрів. Вона хоче нарізати
        всю стрічку на шматки по 4 метри для бантиків. Скільки повних шматків по 4 метри вона
        отримає?`,
      options: ["33", "135", "34", "9"],
      correct: 0,
      explain: {
        1: "135 — це загальна довжина стрічки в метрах, а не кількість шматків по 4 метри. Потрібно ще поділити цю довжину на 4.",
        2: "135 ÷ 4 = 33,75 — кількість шматків має бути ЦІЛИМ числом. Округлення ВГОРУ тут не підходить: подумай, чи вистачить довжини стрічки на ще один повний 4-метровий шматок понад цілу частину результату ділення.",
        3: "9 — це кількість мотків стрічки, а не кількість нарізаних шматків по 4 метри."
      },
      solution: "Усього стрічки: 9×15=135 м. Шматків по 4 м: 135÷4=33,75 → лише 33 повних шматки (на 34-й не вистачить довжини)."
    },
    {
      prompt: `У залі 14 рядів крісел, у кожному ряду по 18 крісел. Квитки продають групами по
        6 крісел. Скільки повних груп крісел можна продати?`,
      options: ["42", "252", "36", "3"],
      correct: 0,
      explain: {
        1: "252 — це загальна кількість крісel у залі, а не кількість ГРУП по 6 крісел. Потрібно ще поділити цю кількість на 6.",
        2: "Перевір ділення ще раз: 252 ÷ 6 — порахуй уважно, скільки повних груп по 6 виходить із 252.",
        3: "Це число занадто мале — перевір, чи виконано множення 14×18 перед тим, як ділити на 6."
      },
      solution: "Усього крісел: 14×18=252. Груп по 6 крісел: 252÷6=42."
    }
  ]
},
{
  id: "d3t2",
  title: "Багатоетапні задачі: рахуємо крок за кроком",
  subtitle: "Прийшло/пішло по кілька етапів — і оцінка суми кількох чисел",
  reference: `
    <p><strong>Що таке багатоетапна задача?</strong> Це задача, де щось змінюється кілька разів
    підряд (наприклад, щогодини щось додається і щось віднімається), і потрібно знайти
    результат після ВСІХ етапів разом.</p>
    <p><strong>Оцінка суми</strong> — це округлене наближене значення суми кількох чисел, коли
    не потрібна точна відповідь, а лише приблизна.</p>
  `,
  theory: `
    <p>Приклад: парк атракціонів записує відвідувачів. Година 1: прийшло 180. Година 2:
    прийшло 240, пішло 65. Година 3: прийшло 190, пішло 110. Скільки відвідувачів було в
    парку через 3 години?</p>
    <p><strong>Крок 1 (після 1-ї години):</strong> 180.</p>
    <p><strong>Крок 2 (після 2-ї години):</strong> 180 + 240 − 65 = 355.</p>
    <p><strong>Крок 3 (після 3-ї години):</strong> 355 + 190 − 110 = 435.</p>
    <p>Результат: <strong>435 відвідувачів</strong>.</p>
    <div class="warn">⚠️ Найчастіша помилка: пропустити одну з дій «пішло» (віднімання) або
    порахувати лише тих, хто прийшов, забувши про тих, хто пішов. Рахуй по одній годині за
    раз і перевіряй кожен крок окремо.</div>
    <p><strong>Оцінка суми кількох чисел.</strong> Приклад: етапи подорожі мають довжину
    81, 129, 181, 110, 288 і 78 миль. Точна сума: 81+129+181+110+288+78 = 867. Округливши до
    найближчої сотні, найкраща оцінка — <strong>900 миль</strong>.</p>
  `,
  questions: [
    {
      prompt: `Бібліотека веде облік відвідувачів. Година 1: прийшло 150. Година 2: прийшло
        210, пішло 45. Година 3: прийшло 175, пішло 130. Скільки відвідувачів було в
        бібліотеці через 3 години?`,
      options: ["360", "490", "535", "405"],
      correct: 0,
      explain: {
        1: "Схоже, одну з дій «пішло» пропущено — перевір, чи віднято ОБИДВА числа відвідувачів, які пішли (і в 2-гу, і в 3-тю годину).",
        2: "Тут враховано лише тих, хто ПРИЙШОВ, а тих, хто ПІШОВ — не віднято жодного разу. Прочитай умову ще раз: у 2-гу і 3-тю годину частина відвідувачів залишила бібліотеку.",
        3: "Перевір кожен крок окремо (після 1-ї, 2-ї і 3-ї години) і звір з умовою, чи всі числа враховані з правильним знаком (плюс чи мінус)."
      },
      solution: "Год.1: 150. Год.2: 150+210−45=315. Год.3: 315+175−130=360."
    },
    {
      prompt: `Завод веде запис деталей. Зміна 1: вироблено 320 деталей. Зміна 2: вироблено
        280, забраковано 35. Зміна 3: вироблено 300, забраковано 60. Скільки ЯКІСНИХ (не
        забракованих) деталей залишилось після трьох змін?`,
      options: ["805", "865", "900", "95"],
      correct: 0,
      explain: {
        1: "Схоже, одне з чисел забракованих деталей не віднято — перевір, чи віднято ОБИДВА значення браку (і зі зміни 2, і зі зміни 3).",
        2: "Тут не враховано жодного браку взагалі — а за умовою частина деталей у зміні 2 і зміні 3 була забракована, тобто НЕ якісна.",
        3: "Це сума самих ЗАБРАКОВАНИХ деталей, а питання запитує про ЯКІСНІ деталі, які залишились, а не про брак."
      },
      solution: "Зміна 1: 320. Зміна 2: 320+280−35=565. Зміна 3: 565+300−60=805 якісних деталей."
    },
    {
      prompt: `Родина планує подорож із шести етапів довжиною 92, 145, 168, 121, 264 і 85 миль.
        Яка НАЙКРАЩА оцінка загальної довжини подорожі?`,
      options: ["900 миль", "800 миль", "1000 миль", "700 миль"],
      correct: 0,
      explain: {
        1: "Порахуй суму всіх шести етапів ще раз — здається, один з доданків не врахований, реальна сума трохи більша.",
        2: "Ця оцінка занадто велика — додай усі шість чисел ще раз і подивись, до якої сотні ближче реальна сума.",
        3: "Ця оцінка занадто мала — перевір, чи враховані ВСІ шість етапів подорожі, а не лише декілька з них."
      },
      solution: "Сума всіх етапів: 92+145+168+121+264+85=875 миль. Найближча сотня — 900 миль."
    }
  ]
}
      ]
    },
    {
      id: "day4",
      tag: "Зупинка 4",
      title: "Властивості фігур і транспортир",
      topics: [
{
  id: "d4t1",
  title: "Властивості фігур: рахуй кути точно",
  subtitle: "«Рівно два» чи «принаймні один» — це різні умови",
  reference: `
    <p><strong>Прямий кут</strong> — це кут рівно 90°. Дві сторони, які утворюють прямий кут,
    називають <strong>перпендикулярними</strong>.</p>
    <p><strong>Гострий кут</strong> — менший за 90°. <strong>Тупий кут</strong> — більший за 90°
    (але менший за 180°).</p>
    <p>Трапеція, ромб, прямокутник, квадрат, трикутник — усе це багатокутники, і кожен з них
    має СВОЮ кількість прямих кутів — від нуля до чотирьох.</p>
  `,
  theory: `
    <p>Прямокутник має <strong>чотири</strong> прямих кути — по одному в кожному куті:</p>
    <svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" style="max-width:220px;display:block;margin:10px 0;">
      <rect x="10" y="10" width="120" height="70" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="3"/>
      <rect x="14" y="14" width="10" height="10" fill="none" stroke="#E8704A" stroke-width="2"/>
      <rect x="116" y="14" width="10" height="10" fill="none" stroke="#E8704A" stroke-width="2"/>
      <rect x="14" y="66" width="10" height="10" fill="none" stroke="#E8704A" stroke-width="2"/>
      <rect x="116" y="66" width="10" height="10" fill="none" stroke="#E8704A" stroke-width="2"/>
    </svg>
    <p>А прямокутний трикутник має лише <strong>один</strong> прямий кут:</p>
    <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:220px;display:block;margin:10px 0;">
      <polygon points="20,20 20,90 140,90" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="3"/>
      <rect x="20" y="78" width="12" height="12" fill="none" stroke="#E8704A" stroke-width="2"/>
    </svg>
    <p>Коли задача каже «РІВНО ДВА прямих кути» або «ЛИШЕ ОДНА пара перпендикулярних сторін» —
    це точна кількість, не менше і не більше. Квадрат чи прямокутник з чотирма прямими кутами
    НЕ підходять під умову «рівно два», навіть якщо в них технічно Є прямі кути.</p>
    <div class="warn">⚠️ Найчастіша помилка: побачити, що фігура МАЄ прямі кути (чи
    перпендикулярні сторони), і одразу обрати її — не порахувавши, скільки САМЕ таких кутів чи
    сторін у ній є насправді.</div>
  `,
  questions: [
    {
      prompt: "Марічка намалювала багатокутник, який має РІВНО ДВА прямих кути. Яка з цих фігур може бути тим багатокутником?",
      options: ["Прямокутна трапеція", "Квадрат", "Прямокутний трикутник", "Ромб"],
      correct: 0,
      explain: {
        1: "Квадрат має ЧОТИРИ прямих кути (по одному в кожному з чотирьох кутів) — це більше, ніж «рівно два».",
        2: "Прямокутний трикутник має лише ОДИН прямий кут — а задача просить фігуру з РІВНО ДВОМА прямими кутами.",
        3: "Ромб зазвичай не має жодного прямого кута (хіба що він одночасно є квадратом) — це не відповідає умові «рівно два»."
      },
      solution: "Прямокутна трапеція має два прямих кути (там, де бічна сторона перпендикулярна до основ) і два непрямих — отже, рівно два прямих кути."
    },
    {
      prompt: "Дмитро намалював прапор, у якому ДВІ сторони перпендикулярні одна одній, і більше жодної такої пари немає. Яка з цих фігур може мати форму такого прапора?",
      options: ["Прямокутний трикутник", "Квадрат", "Прямокутник", "Гострокутний трикутник"],
      correct: 0,
      explain: {
        1: "Квадрат має ЧОТИРИ пари перпендикулярних сторін (по одній у кожному куті) — це більше, ніж лише одна пара.",
        2: "Прямокутник, як і квадрат, має чотири прямих кути — тобто чотири пари перпендикулярних сторін, а не лише одну.",
        3: "Гострокутний трикутник не має жодного прямого кута, тому в ньому взагалі немає перпендикулярних сторін."
      },
      solution: "Прямокутний трикутник має рівно один прямий кут — це означає, що лише ОДНА пара його сторін (два катети) перпендикулярна одна одній."
    },
    {
      prompt: `Яка з цих фігур має принаймні один гострий кут, один прямий кут І один тупий кут
        одночасно? (Фігура C — трапеція, показана на малюнку)
        <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:200px;display:block;margin:10px 0;">
          <polygon points="20,20 20,90 140,90 90,20" fill="#E8F8F3" stroke="#2D9B7C" stroke-width="3"/>
        </svg>`,
      options: ["Прямокутник", "Рівносторонній трикутник", "Трапеція C (на малюнку)", "Правильний п'ятикутник"],
      correct: 2,
      explain: {
        0: "Прямокутник має чотири прямих кути і жодного гострого чи тупого — тут немає різноманіття кутів, яке потрібне за умовою.",
        1: "Рівносторонній трикутник має три однакові гострі кути (по 60°) і жодного прямого чи тупого.",
        3: "Усі кути правильного п'ятикутника тупі (по 108°) — тут немає жодного гострого чи прямого кута."
      },
      solution: "Ця трапеція має два прямих кути (зліва), один тупий і один гострий кут (справа) — тобто містить усі три типи кутів одночасно."
    },
    {
      prompt: "Яка з цих фігур НЕ МОЖЕ мати рівно два прямих кути?",
      options: ["Прямокутна трапеція", "Неправильний п'ятикутник", "Квадрат", "Неправильний шестикутник"],
      correct: 2,
      explain: {
        0: "Прямокутна трапеція якраз МОЖЕ мати рівно два прямих кути (там, де бічна сторона перпендикулярна до основ) — тому вона не підходить як відповідь на це питання.",
        1: "Неправильний п'ятикутник цілком може мати рівно два прямих кути серед інших кутів — тому він теж не підходить як відповідь.",
        3: "Неправильний шестикутник так само може мати рівно два прямих кути — інші його кути можуть бути гострими чи тупими."
      },
      solution: "Квадрат ЗАВЖДИ має рівно чотири прямих кути (по одному в кожному з чотирьох кутів) — він ніколи не може мати рівно два. Тому саме квадрат не підходить під умову «рівно два прямих кути»."
    }
  ]
},
{
  id: "d4t2",
  title: "Транспортир: яку шкалу читати",
  subtitle: "Дві шкали, два різні числа — обери правильну",
  reference: `
    <p><strong>Транспортир</strong> — інструмент для вимірювання кутів у градусах (°).
    Півколо транспортира розмічене від 0° до 180°.</p>
    <p>На кожній поділці транспортира надруковано ОДРАЗУ ДВА числа — одне для зовнішньої
    шкали, інше для внутрішньої. Це не помилка: просто кожну шкалу рахують у СВІЙ бік.</p>
  `,
  theory: `
    <p>Транспортир має ДВІ шкали одночасно: одна починається з 0 праворуч і йде до 180
    ліворуч, інша — починається з 0 ліворуч і йде до 180 праворуч.</p>
    <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;display:block;margin:10px 0;">
      <path d="M 20 155 A 130 130 0 0 1 280 155" fill="none" stroke="#2D9B7C" stroke-width="2.5"/>
      <line x1="20" y1="155" x2="280" y2="155" stroke="#1B2A4A" stroke-width="2"/>
      <line x1="150" y1="155" x2="270" y2="155" stroke="#E8704A" stroke-width="3"/>
      <line x1="150" y1="155" x2="213" y2="60" stroke="#E8704A" stroke-width="3"/>
      <circle cx="150" cy="155" r="3.5" fill="#1B2A4A"/>
      <text x="272" y="172" font-size="13" fill="#1B2A4A" text-anchor="middle">P</text>
      <text x="218" y="52" font-size="13" fill="#1B2A4A" text-anchor="middle">Q</text>
      <text x="150" y="172" font-size="13" fill="#1B2A4A" text-anchor="middle">O</text>
      <text x="235" y="72" font-size="15" fill="#1B2A4A" font-weight="700" text-anchor="middle">55</text>
      <text x="250" y="90" font-size="12" fill="#8a8a8a" text-anchor="middle">125</text>
    </svg>
    <p><strong>Крок 1:</strong> знайди, з якого БОКУ (праворуч чи ліворуч) лежить нульовий
    (початковий) промінь кута, який вимірюємо. Тут це промінь OP — він лежить праворуч.</p>
    <p><strong>Крок 2:</strong> обери шкалу, яка починається з 0 САМЕ з цього боку. Промінь OP
    праворуч → потрібна шкала, що має 0 праворуч.</p>
    <p><strong>Крок 3:</strong> прочитай число на другому промені (OQ) за ЦІЄЮ Ж шкалою:
    тут це <strong>55°</strong> (а не 125° — те число належить іншій шкалі).</p>
    <div class="warn">⚠️ Найчастіша помилка: прочитати число з НЕПРАВИЛЬНОЇ шкали. Тоді кут
    виходить «навпаки» — і зазвичай неправильна відповідь у сумі з правильною дає 180°.</div>
  `,
  questions: [
    {
      prompt: `Промінь OQ намальовано на транспортирі (промінь OP лежить уздовж нульової лінії
        ПРАВОРУЧ).
        <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;display:block;margin:10px 0;">
          <path d="M 20 155 A 130 130 0 0 1 280 155" fill="none" stroke="#2D9B7C" stroke-width="2.5"/>
          <line x1="20" y1="155" x2="280" y2="155" stroke="#1B2A4A" stroke-width="2"/>
          <line x1="150" y1="155" x2="270" y2="155" stroke="#E8704A" stroke-width="3"/>
          <line x1="150" y1="155" x2="194" y2="33" stroke="#E8704A" stroke-width="3"/>
          <circle cx="150" cy="155" r="3.5" fill="#1B2A4A"/>
          <text x="272" y="172" font-size="13" fill="#1B2A4A" text-anchor="middle">P</text>
          <text x="198" y="24" font-size="13" fill="#1B2A4A" text-anchor="middle">Q</text>
          <text x="150" y="172" font-size="13" fill="#1B2A4A" text-anchor="middle">O</text>
          <text x="222" y="46" font-size="15" fill="#1B2A4A" font-weight="700" text-anchor="middle">70</text>
          <text x="238" y="64" font-size="12" fill="#8a8a8a" text-anchor="middle">110</text>
        </svg>
        Яка міра кута POQ?`,
      options: ["70°", "110°", "80°", "60°"],
      correct: 0,
      explain: {
        1: "110° — це значення з ІНШОЇ шкали транспортира (тієї, що починається з 0 ліворуч). Промінь OP лежить праворуч, тому читай число з шкали, яка починається з 0 саме праворуч.",
        2: "Перевір ще раз, на яку саме поділку показує промінь OQ — здається, тут узято сусідню поділку.",
        3: "Перевір ще раз, на яку саме поділку показує промінь OQ — здається, тут узято поділку в інший бік."
      },
      solution: "Промінь OP лежить праворуч, отже читаємо шкалу з 0 праворуч: промінь OQ показує 70°."
    },
    {
      prompt: `Промінь OQ намальовано на транспортирі (промінь OP лежить уздовж нульової лінії
        ЛІВОРУЧ).
        <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;display:block;margin:10px 0;">
          <path d="M 20 155 A 130 130 0 0 1 280 155" fill="none" stroke="#2D9B7C" stroke-width="2.5"/>
          <line x1="20" y1="155" x2="280" y2="155" stroke="#1B2A4A" stroke-width="2"/>
          <line x1="150" y1="155" x2="30" y2="155" stroke="#E8704A" stroke-width="3"/>
          <line x1="150" y1="155" x2="37" y2="90" stroke="#E8704A" stroke-width="3"/>
          <circle cx="150" cy="155" r="3.5" fill="#1B2A4A"/>
          <text x="28" y="172" font-size="13" fill="#1B2A4A" text-anchor="middle">P</text>
          <text x="30" y="80" font-size="13" fill="#1B2A4A" text-anchor="middle">Q</text>
          <text x="150" y="172" font-size="13" fill="#1B2A4A" text-anchor="middle">O</text>
          <text x="70" y="88" font-size="15" fill="#1B2A4A" font-weight="700" text-anchor="middle">150</text>
          <text x="85" y="105" font-size="12" fill="#8a8a8a" text-anchor="middle">30</text>
        </svg>
        Яка міра кута POQ?`,
      options: ["30°", "150°", "40°", "20°"],
      correct: 0,
      explain: {
        1: "150° — це значення з ІНШОЇ шкали транспортира (тієї, що починається з 0 праворуч). Промінь OP лежить ЛІВОРУЧ, тому читай число з шкали, яка починається з 0 саме ліворуч.",
        2: "Перевір ще раз, на яку саме поділку показує промінь OQ — здається, тут узято сусідню поділку.",
        3: "Перевір ще раз, на яку саме поділку показує промінь OQ — здається, тут узято поділку в інший бік."
      },
      solution: "Промінь OP лежить ліворуч, отже читаємо шкалу з 0 ліворуч: промінь OQ показує 30°."
    },
    {
      prompt: `Промінь ON намальовано на транспортирі (промінь OM лежить уздовж нульової лінії
        ПРАВОРУЧ).
        <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;display:block;margin:10px 0;">
          <path d="M 20 155 A 130 130 0 0 1 280 155" fill="none" stroke="#2D9B7C" stroke-width="2.5"/>
          <line x1="20" y1="155" x2="280" y2="155" stroke="#1B2A4A" stroke-width="2"/>
          <line x1="150" y1="155" x2="270" y2="155" stroke="#E8704A" stroke-width="3"/>
          <line x1="150" y1="155" x2="250" y2="71" stroke="#E8704A" stroke-width="3"/>
          <circle cx="150" cy="155" r="3.5" fill="#1B2A4A"/>
          <text x="272" y="172" font-size="13" fill="#1B2A4A" text-anchor="middle">M</text>
          <text x="255" y="62" font-size="13" fill="#1B2A4A" text-anchor="middle">N</text>
          <text x="150" y="172" font-size="13" fill="#1B2A4A" text-anchor="middle">O</text>
          <text x="255" y="90" font-size="15" fill="#1B2A4A" font-weight="700" text-anchor="middle">40</text>
          <text x="262" y="108" font-size="12" fill="#8a8a8a" text-anchor="middle">140</text>
        </svg>
        Яка міра кута MON?`,
      options: ["40°", "140°", "50°", "30°"],
      correct: 0,
      explain: {
        1: "140° — це значення з ІНШОЇ шкали транспортира (тієї, що починається з 0 ліворуч). Промінь OM лежить праворуч, тому читай число з шкали, яка починається з 0 саме праворуч.",
        2: "Перевір ще раз, на яку саме поділку показує промінь ON — здається, тут узято сусідню поділку.",
        3: "Перевір ще раз, на яку саме поділку показує промінь ON — здається, тут узято поділку в інший бік."
      },
      solution: "Промінь OM лежить праворуч, отже читаємо шкалу з 0 праворуч: промінь ON показує 40°."
    },
    {
      prompt: `Промінь ON намальовано на транспортирі (промінь OM лежить уздовж нульової лінії
        ЛІВОРУЧ).
        <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;display:block;margin:10px 0;">
          <path d="M 20 155 A 130 130 0 0 1 280 155" fill="none" stroke="#2D9B7C" stroke-width="2.5"/>
          <line x1="20" y1="155" x2="280" y2="155" stroke="#1B2A4A" stroke-width="2"/>
          <line x1="150" y1="155" x2="30" y2="155" stroke="#E8704A" stroke-width="3"/>
          <line x1="150" y1="155" x2="28" y2="111" stroke="#E8704A" stroke-width="3"/>
          <circle cx="150" cy="155" r="3.5" fill="#1B2A4A"/>
          <text x="28" y="172" font-size="13" fill="#1B2A4A" text-anchor="middle">M</text>
          <text x="22" y="103" font-size="13" fill="#1B2A4A" text-anchor="middle">N</text>
          <text x="150" y="172" font-size="13" fill="#1B2A4A" text-anchor="middle">O</text>
          <text x="65" y="120" font-size="15" fill="#1B2A4A" font-weight="700" text-anchor="middle">160</text>
          <text x="78" y="137" font-size="12" fill="#8a8a8a" text-anchor="middle">20</text>
        </svg>
        Яка міра кута MON?`,
      options: ["20°", "160°", "30°", "10°"],
      correct: 0,
      explain: {
        1: "160° — це значення з ІНШОЇ шкали транспортира (тієї, що починається з 0 праворуч). Промінь OM лежить ЛІВОРУЧ, тому читай число з шкали, яка починається з 0 саме ліворуч.",
        2: "Перевір ще раз, на яку саме поділку показує промінь ON — здається, тут узято сусідню поділку.",
        3: "Перевір ще раз, на яку саме поділку показує промінь ON — здається, тут узято поділку в інший бік."
      },
      solution: "Промінь OM лежить ліворуч, отже читаємо шкалу з 0 ліворуч: промінь ON показує 20°."
    }
  ]
}
      ]
    },
    {
      id: "day5",
      tag: "Зупинка 5",
      title: "Десяткові дроби і правила чисел",
      topics: [
{
  id: "d5t1",
  title: "Десяткові дроби та розрядне значення",
  subtitle: "Переклад між дробом, мішаним числом і десятковим записом",
  reference: `
    <p><strong>Розряди після коми:</strong> перша цифра після коми — <strong>десяті</strong>
    (наприклад, 0.3 = три десятих), друга цифра — <strong>соті</strong> (0.03 = три сотих).</p>
    <p>Увага: слова «сотні» (розряд ВЕЛИКИХ чисел, наприклад 300) і «соті» (розряд МАЛЕНЬКОЇ
    частки після коми, наприклад 0.03) звучать схоже, але означають зовсім різні речі.</p>
  `,
  theory: `
    <p><strong>Приклад 1 (дріб → десятковий запис).</strong> Перетвори 27/10 у десятковий запис.</p>
    <p>Крок 1: 27/10 означає «27 десятих».</p>
    <p>Крок 2: 27 десятих = 2 цілих (20 десятих) і ще 7 десятих.</p>
    <p>Крок 3: як десятковий запис — <strong>2.7</strong>.</p>
    <p><strong>Приклад 2 (десятковий запис → мішане число).</strong> Перетвори 23.08 у мішане
    число.</p>
    <p>Крок 1: ціла частина числа — 23.</p>
    <p>Крок 2: дробова частина .08 означає «8 сотих», тобто 8/100.</p>
    <p>Крок 3: мішане число: <strong>23 8/100</strong>.</p>
    <div class="warn">⚠️ Найчастіші помилки: (1) переплутати розряд десятих і сотих (0.8 ≠ 0.08!);
    (2) переставити місцями цілу частину і дріб; (3) переплутати «сотні» (велике число) із
    «сотими» (маленька частка після коми) — це геть різні розряди.</div>
  `,
  questions: [
    {
      prompt: "Яке десяткове число еквівалентне 27/10?",
      options: ["2.7", "0.27", "27.0", "2.07"],
      correct: 0,
      explain: {
        1: "Перевір розташування коми — подумай, скільки цілих одиниць міститься у 27 десятих, перш ніж записувати кому.",
        2: "27/10 — це не ціле число 27, а 27 частин по одній десятій кожна. Подумай, скільки цілих виходить із 27 десятих.",
        3: "Перевір, у який розряд потрапляє цифра 7 — тут вона має стояти в розряді десятих, а не сотих."
      },
      solution: "27/10 = 27 десятих = 2 цілих і 7 десятих = 2.7."
    },
    {
      prompt: "Яке мішане число еквівалентне 23.08?",
      options: ["23 8/100", "23 8/10", "8 23/100", "23 80/100"],
      correct: 0,
      explain: {
        1: "8/10 означає 0.8 (вісім десятих) — а це не те саме, що 23.08. Перевір ще раз, яка за рахунком цифра 8 після коми (перша чи друга), і який розряд це визначає.",
        2: "Тут переставлено місцями цілу частину і дріб. Подивись на запис 23.08 ще раз: яка з двох частин (до коми чи після) є цілою?",
        3: "23 80/100 означає 23.80, а не 23.08 — тут дріб має на одну цифру більше, ніж потрібно."
      },
      solution: "23.08: ціла частина — 23, дробова частина .08 = 8 сотих = 8/100. Мішане число: 23 8/100."
    },
    {
      prompt: "Дощомір показав 5 цілих і двадцять три сотих сантиметра опадів (5.23 см). Яке значення цифри в розряді десятих?",
      options: ["0.2", "2", "0.02", "0.3"],
      correct: 0,
      explain: {
        1: "2 — це сама цифра, а питання запитує про її ЗНАЧЕННЯ в цьому розряді (тобто скільки десятих вона означає), а не просто назву цифри.",
        2: "0.02 — це значення цифри в розряді СОТИХ (друга цифра після коми), а питання запитує про розряд ДЕСЯТИХ (перша цифра після коми).",
        3: "Перевір ще раз, яка саме цифра стоїть одразу після коми (у розряді десятих) — здається, тут узято іншу цифру."
      },
      solution: "У числі 5.23 цифра в розряді десятих — це 2, отже її значення: 0.2 (дві десятих)."
    },
    {
      prompt: `Точка J позначена на числовій прямій.
        <svg viewBox="0 0 300 70" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;display:block;margin:10px 0;">
          <line x1="20" y1="35" x2="280" y2="35" stroke="#1B2A4A" stroke-width="2"/>
          <line x1="20" y1="28" x2="20" y2="42" stroke="#1B2A4A" stroke-width="2"/>
          <line x1="46" y1="30" x2="46" y2="40" stroke="#1B2A4A" stroke-width="1"/>
          <line x1="72" y1="30" x2="72" y2="40" stroke="#1B2A4A" stroke-width="1"/>
          <line x1="98" y1="30" x2="98" y2="40" stroke="#1B2A4A" stroke-width="1"/>
          <line x1="124" y1="30" x2="124" y2="40" stroke="#1B2A4A" stroke-width="1"/>
          <line x1="150" y1="28" x2="150" y2="42" stroke="#1B2A4A" stroke-width="2"/>
          <line x1="176" y1="30" x2="176" y2="40" stroke="#1B2A4A" stroke-width="1"/>
          <line x1="202" y1="30" x2="202" y2="40" stroke="#1B2A4A" stroke-width="1"/>
          <line x1="228" y1="30" x2="228" y2="40" stroke="#1B2A4A" stroke-width="1"/>
          <line x1="254" y1="30" x2="254" y2="40" stroke="#1B2A4A" stroke-width="1"/>
          <line x1="280" y1="28" x2="280" y2="42" stroke="#1B2A4A" stroke-width="2"/>
          <circle cx="228" cy="35" r="4.5" fill="#E8704A"/>
          <text x="228" y="20" font-size="14" fill="#1B2A4A" text-anchor="middle" font-weight="700">J</text>
          <text x="20" y="58" font-size="13" fill="#1B2A4A" text-anchor="middle">3</text>
          <text x="150" y="58" font-size="13" fill="#1B2A4A" text-anchor="middle">4</text>
          <text x="280" y="58" font-size="13" fill="#1B2A4A" text-anchor="middle">5</text>
        </svg>
        Яке число представляє точка J?`,
      options: ["4.6", "4.06", "3.6", "4.8"],
      correct: 0,
      explain: {
        1: "Перевір розташування коми — точка лежить трохи правіше середини між 3 і 5, це не соті частки, а десяті.",
        2: "Перевір, від якої позначки рахуємо — здається, тут переплутано кількість поділок від лівого краю.",
        3: "Перевір ще раз, на яку саме поділку вказує точка J — здається, тут узято сусідню поділку."
      },
      solution: "Відстань між 3 і 5 поділена на 10 рівних частин по 0.2 кожна. Точка J стоїть на 8-й поділці від 3, тобто 3 + 8×0.2 = 4.6."
    },
    {
      prompt: `Валентина записала число:
        <ul>
          <li>Цифра в розряді <strong>тисяч</strong> — 5.</li>
          <li>Цифра в розряді <strong>сотень</strong> — 2.</li>
          <li>Цифра в розряді <strong>сотих</strong> (не сотень!) — 9.</li>
        </ul>
        Яке число могла записати Валентина?`,
      options: ["15247.29", "15247.92", "12547.29", "15947.22"],
      correct: 0,
      explain: {
        1: "Тут цифра 9 стоїть у розряді ДЕСЯТИХ (перша цифра після коми), а вона мала бути в розряді СОТИХ (друга цифра після коми).",
        2: "Тут переплутано місцями цифру розряду тисяч і розряду сотень — 5 має стояти в розряді тисяч, а 2 — у розряді сотень, а не навпаки.",
        3: "Слова «сотень» і «сотих» звучать схоже, але це РІЗНІ розряди: сотні — розряд великого цілого числа, соті — маленька частка після коми. Тут цифри 9 і 2 переплутані місцями саме через цю схожість слів."
      },
      solution: "Число 15247.29: 5 стоїть у розряді тисяч, 2 — у розряді сотень, а 9 — у розряді сотих (друга цифра після коми)."
    }
  ]
},
{
  id: "d5t2",
  title: 'Правило "машини чисел": вхід і вихід',
  subtitle: "Різниця між сусідніми виходами — це не саме правило",
  reference: `
    <p><strong>"Машина чисел"</strong> — це таблиця, яка показує, що відбувається з числом
    (входом), коли до нього застосовують якесь ПРАВИЛО, і виходить нове число (вихід).</p>
    <p>Правило може бути додаванням (вхід+8), відніманням, множенням (вхід×6) або поєднанням
    кількох дій.</p>
  `,
  theory: `
    <p>Приклад: Вхід 1 → 9, Вхід 2 → 10, Вхід 3 → 11, Вхід 4 → 12.</p>
    <p>Часто здається: раз кожен вихід більший за попередній лише на 1, то правило — «+1».
    Це ПОМИЛКА: різниця МІЖ сусідніми виходами — не те саме, що правило, яке зв'язує ВХІД і
    ВИХІД у ТОМУ Ж рядку.</p>
    <p><strong>Крок 1:</strong> перевір перший рядок: Вхід 1, Вихід 9. Яке число треба додати
    до 1, щоб отримати 9? 9 − 1 = 8.</p>
    <p><strong>Крок 2:</strong> перевір ще один рядок: Вхід 2, Вихід 10. 10 − 2 = 8. Співпадає!</p>
    <p><strong>Крок 3:</strong> правило — <strong>вихід = вхід + 8</strong> (а не +1, хоча
    сусідні виходи й відрізняються лише на 1).</p>
    <p>Правило також може бути множенням: Вхід 1 → 6, 2 → 12, 3 → 18, 4 → 24. Перевір:
    6÷1=6, 12÷2=6, 18÷3=6 — правило: <strong>вихід = вхід × 6</strong>.</p>
    <div class="warn">⚠️ Найчастіша помилка: подивитись лише на те, наскільки виходи
    відрізняються один від одного, і вирішити, що це і є правило. Завжди перевіряй зв'язок МІЖ
    входом і виходом У ТОМУ Ж рядку, і перевіряй правило на КІЛЬКОХ рядках одразу.</div>
  `,
  questions: [
    {
      prompt: "Таблиця показує залежність між входом і виходом: Вхід 1 → 23, 2 → 24, 3 → 25, 4 → 26. Яке правило зв'язує вхід і вихід?",
      options: ["вхід + 22", "вхід + 1", "вхід × 23", "вхід × 6"],
      correct: 0,
      explain: {
        1: "+1 — це різниця МІЖ сусідніми виходами (23,24,25,26), а не правило, яке зв'язує вхід і вихід у ТОМУ Ж рядку. Перевір: 23 − 1 = ?, це не 1.",
        2: "Перевір цю відповідь на кількох рядках: 1×23=23 (підходить), але 2×23=46 (а має бути 24) — не співпадає.",
        3: "Перевір цю відповідь на кількох рядках: 1×6=6 (а має бути 23) — не співпадає."
      },
      solution: "Перевір кожен рядок: 23−1=22, 24−2=22, 25−3=22, 26−4=22. Правило: вихід = вхід + 22."
    },
    {
      prompt: "Таблиця показує залежність числа від його позиції: Позиція 1 → 13, 2 → 26, 3 → 39, 4 → 52. Який набір виразів показує правило для цієї таблиці?",
      options: [
        "1×13, 2×13, 3×13, 4×13",
        "1+13, 2+13, 3+13, 4+13",
        "1×13, 2×13, 3×13, 4×14",
        "13×13, 13×13, 13×13, 13×13"
      ],
      correct: 0,
      explain: {
        1: "Різниця МІЖ сусідніми виходами тут справді дорівнює 13, але це не те саме, що правило «додати 13 до позиції» — перевір цей вираз на позиції 1: 1+13=14, а потрібно отримати 13.",
        2: "Перевір останній рядок окремо: 4×14 = 56, а в таблиці для позиції 4 має вийти 52.",
        3: "Цей вираз використовує те саме число (13) для КОЖНОЇ позиції, ігноруючи саму позицію — перевір, чи справді 13×13 дає значення з рядка для позиції 1 (13)."
      },
      solution: "Перевір кожен рядок множенням: 1×13=13, 2×13=26, 3×13=39, 4×13=52 — усі співпадають. Правило: вихід = позиція × 13."
    },
    {
      prompt: "Таблиця показує залежність між кількістю метрів і кількістю сантиметрів: 1 м → 100 см, 2 м → 200 см, 3 м → 300 см, 5 м → 500 см. Марина пофарбувала паркан завдовжки 9 метрів. Яка довжина паркану в сантиметрах?",
      options: ["900", "109", "800", "90"],
      correct: 0,
      explain: {
        1: "109 виглядає так, ніби до 9 просто додали 100 — але правило тут МНОЖЕННЯ (кожен метр = 100 см), а не додавання одного й того самого числа.",
        2: "Перевір множення ще раз: 9 метрів, і кожен метр — це 100 см. Порахуй 9×100 уважно.",
        3: "90 — це так, ніби один метр дорівнює лише 10 см. Перевір таблицю ще раз: скільки сантиметрів відповідає, наприклад, 2 метрам?"
      },
      solution: "З таблиці видно: кожен метр = 100 см (правило: см = метри × 100). Для 9 метрів: 9×100 = 900 см."
    },
    {
      prompt: "Таблиця показує залежність між позицією числа в послідовності і його значенням: Позиція 1 → 5, 2 → 9, 3 → 13, 4 → 17. Яке число буде значенням для позиції 6, якщо правило зберігається?",
      options: ["25", "21", "29", "24"],
      correct: 0,
      explain: {
        1: "21 — це значення для ПОЗИЦІЇ 5 (17+4=21), а питання запитує про позицію 6 — потрібно застосувати правило ще на один крок далі.",
        2: "Перевір, для якої саме позиції виходить це значення — здається, тут порахована позиція 7, а не 6.",
        3: "Тут враховано лише множення (4×6=24), але забуто додати сталу частину правила (+1)."
      },
      solution: "Правило: значення = 4 × позиція + 1 (перевір: 4×1+1=5, 4×2+1=9 — співпадає). Для позиції 6: 4×6+1 = 25."
    }
  ]
}
      ]
    }
  ]
};
