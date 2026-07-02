const LESSON_DATA = {
  "days": [
    {
      "id": "day1",
      "tag": "Зупинка 1",
      "title": "Стовбур-листя та таблиці частот",
      "topics": [
        {
          "id": "d1t1",
          "title": "Стовбур-листя: читати і будувати діаграму",
          "subtitle": "Сума, найбільше/найменше значення та побудова з готового списку",
          "reference": "\n    <p><strong>Що таке діаграма \"стовбур-листя\"?</strong> Це спосіб компактно записати список чисел.\n    Кожне число ділять на дві частини: <strong>стебло</strong> (перші цифри числа) і\n    <strong>листок</strong> (остання цифра).</p>\n    <p>Наприклад, число <span class=\"formula\">74</span> має стебло <span class=\"formula\">7</span>\n    і листок <span class=\"formula\">4</span>.</p>\n    <p>Ключ біля діаграми (наприклад, «7|4 означає 74») завжди пояснює, як саме з'єднувати\n    стебло і листок у число. В одному рядку може бути кілька листків — кожен листок це\n    окреме число з тим самим стеблом, і листки завжди записують за зростанням зліва направо.</p>\n  ",
          "theory": "\n    <p>Щоб прочитати число з діаграми — з'єднай стебло рядка і один листок за прикладом з ключа.</p>\n    <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;\">\n      <thead><tr>\n        <th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;color:#1B2A4A;\">Стебло</th>\n        <th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;color:#1B2A4A;text-align:left;\">Листок</th>\n      </tr></thead>\n      <tbody>\n        <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">1</td><td style=\"padding:5px 18px;\">2 5 8</td></tr>\n        <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">2</td><td style=\"padding:5px 18px;\">0 0 3</td></tr>\n      </tbody>\n    </table>\n    <p style=\"font-size:13px;color:rgba(27,42,74,0.6);\">Ключ: 1|2 означає число 12.</p>\n    <p><strong>Крок 1 (прочитати всі числа):</strong> стебло 1 → 12, 15, 18. Стебло 2 → 20, 20, 23.\n    Разом 6 чисел: 12, 15, 18, 20, 20, 23.</p>\n    <p><strong>Крок 2 (сума, якщо потрібна):</strong> 12+15+18+20+20+23 = 108.</p>\n    <p><strong>Крок 3 (найбільше і найменше):</strong> найбільше — 23, найменше — 12.\n    Різниця: 23−12 = 11.</p>\n    <p><strong>Крок 4 (побудова діаграми з готового списку чисел):</strong> усі числа з\n    ОДНАКОВИМ стеблом об'єднуються в ОДИН рядок, а листки в рядку записуються за зростанням.\n    Кожне число зі списку має з'явитися рівно один раз.</p>\n    <div class=\"warn\">⚠️ Найчастіша помилка: записувати кожне число окремим рядком (як у вихідному\n    списку), замість того щоб об'єднати однакові стебла в один рядок; або переплутати, яка\n    цифра — стебло, а яка — листок.</div>\n  ",
          "questions": [
            {
              "prompt": "Діаграма показує кількість очок команди в кожній грі сезону.\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;\">\n          <thead><tr><th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;\">Стебло</th><th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;text-align:left;\">Листок</th></tr></thead>\n          <tbody>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">5</td><td style=\"padding:5px 18px;\">2 6</td></tr>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">6</td><td style=\"padding:5px 18px;\">1 4 8</td></tr>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">7</td><td style=\"padding:5px 18px;\">3</td></tr>\n          </tbody>\n        </table>\n        <p style=\"font-size:13px;color:rgba(27,42,74,0.6);\">Ключ: 5|2 означає 52 очки.</p>\n        Яка загальна кількість очок команди за всі ігри сезону?",
              "options": [
                "24",
                "301",
                "374",
                "392"
              ],
              "correct": 2,
              "explain": {
                "0": "Це схоже на суму самих цифр-листків, а не повних чисел. Кожне число — це стебло і листок РАЗОМ (наприклад, 5|2 означає число 52, а не просто цифру 2).",
                "1": "Схоже, один із рядків діаграми не увійшов у підрахунок — перевір, чи враховані числа з КОЖНОГО рядка, включно з останнім.",
                "3": "Перевір, чи не переплутано місцями стебло і листок в одному з чисел — це змінює значення числа."
              },
              "solution": "Числа з діаграми: 52, 56, 61, 64, 68, 73. Сума: 52+56+61+64+68+73 = 374."
            },
            {
              "prompt": "Діаграма показує висоту саджанців (см) з точністю до десятих.\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;\">\n          <thead><tr><th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;\">Стебло</th><th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;text-align:left;\">Листок</th></tr></thead>\n          <tbody>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">2</td><td style=\"padding:5px 18px;\">8</td></tr>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">3</td><td style=\"padding:5px 18px;\">1 4</td></tr>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">4</td><td style=\"padding:5px 18px;\">0 6 9</td></tr>\n          </tbody>\n        </table>\n        <p style=\"font-size:13px;color:rgba(27,42,74,0.6);\">Ключ: 3|5 означає 3.5 см.</p>\n        Яка різниця між найвищим і найнижчим саджанцем?",
              "options": [
                "1.8 см",
                "7.7 см",
                "2.1 см",
                "0.21 см"
              ],
              "correct": 2,
              "explain": {
                "0": "Перевір, чи справді обрані саме найбільше і найменше значення зі списку, а не якісь інші два.",
                "1": "Тут числа не віднімають, а додають. Питання просить РІЗНИЦЮ між найбільшим і найменшим значенням — тобто віднімання, а не суму.",
                "3": "Перевір розташування коми — схоже, різницю порахували в сотих частках, а не в десятих."
              },
              "solution": "Найбільше значення — 4.9 см, найменше — 2.8 см. Різниця: 4.9 − 2.8 = 2.1 см."
            },
            {
              "prompt": "Учні набрали такі очки в грі: 45, 52, 45, 58, 61, 52, 67. Ось незавершена діаграма\n        \"стовбур-листя\" для цих даних:\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;\">\n          <thead><tr><th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;\">Стебло</th><th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;text-align:left;\">Листок</th></tr></thead>\n          <tbody>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">4</td><td style=\"padding:5px 18px;\">5 5</td></tr>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">5</td><td style=\"padding:5px 18px;\">2 <span style=\"display:inline-block;width:22px;border:1.5px dashed #E8704A;text-align:center;\">?</span> 8</td></tr>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">6</td><td style=\"padding:5px 18px;\">1 7</td></tr>\n          </tbody>\n        </table>\n        <p style=\"font-size:13px;color:rgba(27,42,74,0.6);\">Ключ: 4|5 означає 45 очок.</p>\n        Яке число має стояти на місці «?», щоб діаграма правильно відображала всі дані?",
              "options": [
                "2",
                "0",
                "5",
                "8"
              ],
              "correct": 0,
              "explain": {
                "1": "У вихідному списку немає числа 50 — перевір ще раз, які саме числа мають стебло 5.",
                "2": "5 — це стебло цього самого рядка, а не пропущений листок. Порівняй список чисел із уже вписаними листками рядка, щоб знайти, якого листка не вистачає.",
                "3": "8 вже записаний у цьому рядку (число 58) — придивись, яке саме число зі списку ще не позначено жодним листком у рядку зі стеблом 5."
              },
              "solution": "Числа зі стеблом 5 у списку: 52, 52, 58. У рядку вже записані листки 2 і 8 — бракує другого листка «2» від другого числа 52."
            },
            {
              "prompt": "Таблиця показує вік учасників гуртка.\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'Inter',sans-serif;font-size:14px;\">\n          <thead><tr><th style=\"padding:6px 16px;border-bottom:2px solid #1B2A4A;\">Ім'я</th><th style=\"padding:6px 16px;border-bottom:2px solid #1B2A4A;\">Вік</th></tr></thead>\n          <tbody>\n            <tr><td style=\"padding:5px 16px;\">Оля</td><td style=\"padding:5px 16px;text-align:center;\">41</td></tr>\n            <tr><td style=\"padding:5px 16px;\">Борис</td><td style=\"padding:5px 16px;text-align:center;\">56</td></tr>\n            <tr><td style=\"padding:5px 16px;\">Віра</td><td style=\"padding:5px 16px;text-align:center;\">48</td></tr>\n            <tr><td style=\"padding:5px 16px;\">Гліб</td><td style=\"padding:5px 16px;text-align:center;\">41</td></tr>\n            <tr><td style=\"padding:5px 16px;\">Дмитро</td><td style=\"padding:5px 16px;text-align:center;\">63</td></tr>\n          </tbody>\n        </table>\n        Яка діаграма \"стовбур-листя\" правильно відображає ці дані (ключ: 4|1 означає 41)?",
              "options": [
                "<table style=\"border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;\"><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">4</td><td style=\"padding:3px 10px;\">1</td></tr><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">5</td><td style=\"padding:3px 10px;\">6</td></tr><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">4</td><td style=\"padding:3px 10px;\">8</td></tr><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">4</td><td style=\"padding:3px 10px;\">1</td></tr><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">6</td><td style=\"padding:3px 10px;\">3</td></tr></table>",
                "<table style=\"border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;\"><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">1</td><td style=\"padding:3px 10px;\">4 4 8</td></tr><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">6</td><td style=\"padding:3px 10px;\">5</td></tr><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">3</td><td style=\"padding:3px 10px;\">6</td></tr></table>",
                "<table style=\"border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;\"><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">4</td><td style=\"padding:3px 10px;\">8 1 1</td></tr><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">5</td><td style=\"padding:3px 10px;\">6</td></tr><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">6</td><td style=\"padding:3px 10px;\">3</td></tr></table>",
                "<table style=\"border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;\"><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">4</td><td style=\"padding:3px 10px;\">1 1 8</td></tr><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">5</td><td style=\"padding:3px 10px;\">6</td></tr><tr><td style=\"padding:3px 10px;border-right:1.5px solid #1B2A4A;\">6</td><td style=\"padding:3px 10px;\">3</td></tr></table>"
              ],
              "correct": 3,
              "explain": {
                "0": "Тут кожне число зі списку записане в окремий рядок за порядком з таблиці, а не згруповане за стеблом. Усі числа з ОДНАКОВИМ стеблом мають бути в ОДНОМУ рядку.",
                "1": "Перевір, яка частина числа — стебло (перші цифри), а яка — листок (остання цифра): тут вони, схоже, переплутані місцями.",
                "2": "Групування за стеблом тут правильне, але листки в рядку мають йти за ЗРОСТАННЯМ (від меншого до більшого), а не в довільному порядку."
              },
              "solution": "Групуємо числа з однаковим стеблом: стебло 4 → листки 1, 1, 8 (41, 41, 48); стебло 5 → листок 6 (56); стебло 6 → листок 3 (63)."
            },
            {
              "prompt": "Діаграма показує температуру повітря (°C), виміряну щодня протягом двох тижнів.\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;\">\n          <thead><tr><th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;\">Стебло</th><th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;text-align:left;\">Листок</th></tr></thead>\n          <tbody>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">1</td><td style=\"padding:5px 18px;\">8 9</td></tr>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">2</td><td style=\"padding:5px 18px;\">0 2 2 5 7</td></tr>\n            <tr><td style=\"padding:5px 18px;text-align:center;border-right:2px solid #1B2A4A;background:#E8F8F3;\">3</td><td style=\"padding:5px 18px;\">1</td></tr>\n          </tbody>\n        </table>\n        <p style=\"font-size:13px;color:rgba(27,42,74,0.6);\">Ключ: 2|0 означає 20°C.</p>\n        Скільки днів мали температуру від 20°C до 29°C?",
              "options": [
                "5",
                "8",
                "1",
                "4"
              ],
              "correct": 0,
              "explain": {
                "1": "8 — це загальна кількість усіх днів у списку за весь період, а не лише тих, що потрапляють у діапазон 20–29°C.",
                "2": "Це кількість днів з іншого рядка діаграми (стебло 3, тобто 30–39°C), а не з рядка 20–29°C.",
                "3": "Тут не враховано, що значення 22°C зустрічається двічі — у діаграмі воно записане двома окремими листками, тому має рахуватись двічі."
              },
              "solution": "Рядок зі стеблом 2 має листки 0, 2, 2, 5, 7 — це 5 чисел: 20, 22, 22, 25, 27. Отже, 5 днів мали температуру від 20°C до 29°C."
            }
          ]
        },
        {
          "id": "d1t2",
          "title": "Таблиця частот: рахувати без помилок",
          "subtitle": "Підрахунок тally-позначок і читання готової таблиці",
          "reference": "\n    <p><strong>Що таке таблиця частот?</strong> Це таблиця, яка показує, скільки РАЗІВ кожне\n    значення (або кожен діапазон значень) зустрічається у списку даних.</p>\n    <p>Кожне входження значення позначають однією рискою — <span class=\"formula\">|</span>\n    (це називають \"tally\", позначка). Три входження — це <span class=\"formula\">|||</span>.</p>\n    <p>Іноді частоту рахують не для кожного числа окремо, а для ЦІЛОГО ДІАПАЗОНУ значень\n    (наприклад, «скільки чисел від 0 до 4»). Правило те саме: кожне число з вихідного списку\n    повинно потрапити рівно в один рядок таблиці.</p>\n  ",
          "theory": "\n    <p>Приклад: скільки цукерок отримав кожен з 8 дітей: 2, 4, 3, 2, 4, 4, 3, 2.</p>\n    <p><strong>Крок 1:</strong> випиши всі можливі значення, які зустрічаються (2, 3, 4).</p>\n    <p><strong>Крок 2:</strong> пройди СПИСОК ПО ОДНОМУ числу за раз. Для кожного числа онови\n    таблицю на одну позначку і подумки \"викресли\" це число зі списку — так жодне число не\n    порахується двічі і жодне не пропуститься.</p>\n    <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;\">\n      <thead><tr><th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;\">Значення</th><th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;text-align:left;\">Позначки</th><th style=\"padding:6px 18px;border-bottom:2px solid #1B2A4A;\">Разом</th></tr></thead>\n      <tbody>\n        <tr><td style=\"padding:5px 18px;text-align:center;\">2</td><td style=\"padding:5px 18px;\">|||</td><td style=\"padding:5px 18px;text-align:center;\">3</td></tr>\n        <tr><td style=\"padding:5px 18px;text-align:center;\">3</td><td style=\"padding:5px 18px;\">||</td><td style=\"padding:5px 18px;text-align:center;\">2</td></tr>\n        <tr><td style=\"padding:5px 18px;text-align:center;\">4</td><td style=\"padding:5px 18px;\">|||</td><td style=\"padding:5px 18px;text-align:center;\">3</td></tr>\n      </tbody>\n    </table>\n    <p><strong>Крок 3 (перевірка):</strong> додай усі стовпці \"Разом\": 3+2+3 = 8 — це збігається\n    з кількістю дітей у списку (8). Якщо сума НЕ збігається — десь пропущено число або\n    порахbовано двічі.</p>\n    <div class=\"warn\">⚠️ Найчастіша помилка: порахувати одне й те саме значення двічі (або\n    пропустити його), коли воно повторюється в списку кілька разів. Завжди перевіряй суму всіх\n    рядків проти загальної кількості даних у списку.</div>\n  ",
          "questions": [
            {
              "prompt": "Список балів учнів: 4, 1, 3, 4, 0, 4, 1, 3. Яка таблиця частот правильно\n        відображає ці дані?",
              "options": [
                "<table style=\"border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;\"><tr><td style=\"padding:3px 10px;\">0</td><td style=\"padding:3px 10px;\">|</td></tr><tr><td style=\"padding:3px 10px;\">1</td><td style=\"padding:3px 10px;\">||</td></tr><tr><td style=\"padding:3px 10px;\">2</td><td style=\"padding:3px 10px;\"></td></tr><tr><td style=\"padding:3px 10px;\">3</td><td style=\"padding:3px 10px;\">||</td></tr><tr><td style=\"padding:3px 10px;\">4</td><td style=\"padding:3px 10px;\">||</td></tr></table>",
                "<table style=\"border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;\"><tr><td style=\"padding:3px 10px;\">0</td><td style=\"padding:3px 10px;\">|</td></tr><tr><td style=\"padding:3px 10px;\">1</td><td style=\"padding:3px 10px;\">||</td></tr><tr><td style=\"padding:3px 10px;\">2</td><td style=\"padding:3px 10px;\">|</td></tr><tr><td style=\"padding:3px 10px;\">3</td><td style=\"padding:3px 10px;\">|</td></tr><tr><td style=\"padding:3px 10px;\">4</td><td style=\"padding:3px 10px;\">|||</td></tr></table>",
                "<table style=\"border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;\"><tr><td style=\"padding:3px 10px;\">0</td><td style=\"padding:3px 10px;\">|</td></tr><tr><td style=\"padding:3px 10px;\">1</td><td style=\"padding:3px 10px;\">|||</td></tr><tr><td style=\"padding:3px 10px;\">2</td><td style=\"padding:3px 10px;\"></td></tr><tr><td style=\"padding:3px 10px;\">3</td><td style=\"padding:3px 10px;\">||</td></tr><tr><td style=\"padding:3px 10px;\">4</td><td style=\"padding:3px 10px;\">|||</td></tr></table>",
                "<table style=\"border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:13px;\"><tr><td style=\"padding:3px 10px;\">0</td><td style=\"padding:3px 10px;\">|</td></tr><tr><td style=\"padding:3px 10px;\">1</td><td style=\"padding:3px 10px;\">||</td></tr><tr><td style=\"padding:3px 10px;\">2</td><td style=\"padding:3px 10px;\"></td></tr><tr><td style=\"padding:3px 10px;\">3</td><td style=\"padding:3px 10px;\">||</td></tr><tr><td style=\"padding:3px 10px;\">4</td><td style=\"padding:3px 10px;\">|||</td></tr></table>"
              ],
              "correct": 3,
              "explain": {
                "0": "Порахуй ще раз, скільки разів рівно значення 4 зустрічається у списку — тут якогось входження бракує.",
                "1": "У вихідному списку немає жодного числа 2 — а в цій таблиці для значення 2 стоїть позначка. Порівняй кожен рядок зі списком уважно.",
                "2": "Порахуй ще раз, скільки разів рівно значення 1 зустрічається у списку — тут воно пораховане на одну позначку більше, ніж є насправді."
              },
              "solution": "Список: 4,1,3,4,0,4,1,3. Значення 0 зустрічається 1 раз, 1 — 2 рази, 3 — 2 рази, 4 — 3 рази. Разом 1+2+2+3=8, що збігається з кількістю чисел у списку."
            },
            {
              "prompt": "Учні прочитали за тиждень таку кількість сторінок: 2, 5, 7, 9, 11, 13, 14, 14, 17, 18.\n        Таблицю частот розбито на діапазони:\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;\">\n          <thead><tr><th style=\"padding:6px 16px;border-bottom:2px solid #1B2A4A;\">Діапазон</th><th style=\"padding:6px 16px;border-bottom:2px solid #1B2A4A;text-align:left;\">Позначки</th></tr></thead>\n          <tbody>\n            <tr><td style=\"padding:5px 16px;text-align:center;\">0–4</td><td style=\"padding:5px 16px;\">|</td></tr>\n            <tr><td style=\"padding:5px 16px;text-align:center;\">5–9</td><td style=\"padding:5px 16px;\">|||</td></tr>\n            <tr><td style=\"padding:5px 16px;text-align:center;\">10–14</td><td style=\"padding:5px 16px;\">|||</td></tr>\n            <tr><td style=\"padding:5px 16px;text-align:center;\">15–19</td><td style=\"padding:5px 16px;\">||</td></tr>\n          </tbody>\n        </table>\n        Який рядок у таблиці є неповним?",
              "options": [
                "Рядок 15–19",
                "Рядок 0–4",
                "Рядок 5–9",
                "Рядок 10–14"
              ],
              "correct": 3,
              "explain": {
                "0": "У діапазоні 15–19 зі списку є два числа (17, 18) — цей рядок відповідає даним правильно.",
                "1": "У діапазоні 0–4 зі списку є лише одне число (2) — цей рядок відповідає даним правильно.",
                "2": "У діапазоні 5–9 зі списку є три числа (5, 7, 9) — цей рядок відповідає даним правильно."
              },
              "solution": "У діапазоні 10–14 є чотири числа зі списку: 11, 13, 14, 14 (14 зустрічається двічі!). У таблиці для цього рядка стоїть лише 3 позначки — отже, рядок неповний, бракує однієї позначки."
            },
            {
              "prompt": "Таблиця частот показує кількість книжок, прочитаних учнями за місяць.\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:14px;\">\n          <thead><tr><th style=\"padding:6px 16px;border-bottom:2px solid #1B2A4A;\">Книжок</th><th style=\"padding:6px 16px;border-bottom:2px solid #1B2A4A;\">Учнів</th></tr></thead>\n          <tbody>\n            <tr><td style=\"padding:5px 16px;text-align:center;\">1</td><td style=\"padding:5px 16px;text-align:center;\">2</td></tr>\n            <tr><td style=\"padding:5px 16px;text-align:center;\">2</td><td style=\"padding:5px 16px;text-align:center;\">4</td></tr>\n            <tr><td style=\"padding:5px 16px;text-align:center;\">3</td><td style=\"padding:5px 16px;text-align:center;\">3</td></tr>\n            <tr><td style=\"padding:5px 16px;text-align:center;\">4</td><td style=\"padding:5px 16px;text-align:center;\">1</td></tr>\n          </tbody>\n        </table>\n        Скільки учнів прочитали 3 АБО БІЛЬШЕ книжок?",
              "options": [
                "4",
                "3",
                "10",
                "1"
              ],
              "explain": {
                "1": "Це кількість учнів, які прочитали РІВНО 3 книжки — а питання просить 3 АБО БІЛЬШЕ, тобто потрібно додати ще й тих, хто прочитав 4.",
                "2": "10 — це загальна кількість УСІХ учнів у таблиці, включно з тими, хто прочитав менше 3 книжок.",
                "3": "Це кількість учнів, які прочитали РІВНО 4 книжки — а питання просить 3 АБО БІЛЬШЕ, тобто варто додати ще й тих, хто прочитав рівно 3."
              },
              "correct": 0,
              "solution": "3 книжки прочитали 3 учні, 4 книжки — 1 учень. Разом: 3+1 = 4 учні прочитали 3 або більше книжок."
            }
          ]
        }
      ]
    },
    {
      "id": "day2",
      "tag": "Зупинка 2",
      "title": "Порівняння дробів і дроби в задачах",
      "topics": [
        {
          "id": "d2t1",
          "title": "Порівняння дробів: спільний знаменник і пастки",
          "subtitle": "Однаковий чисельник, рівність дробів і межі діапазону",
          "reference": "\n    <p><strong>Нагадування.</strong> У дробі <span class=\"formula\">3/4</span> число 3 —\n    <strong>чисельник</strong> (скільки частин узяли), а 4 — <strong>знаменник</strong>\n    (на скільки рівних частин поділили ціле).</p>\n    <p>Порівняти два дроби — означає визначити, який з них більший, менший, чи вони РІВНІ.\n    Два дроби з різними цифрами можуть позначати ОДНАКОВУ величину (наприклад,\n    <span class=\"formula\">1/2 = 2/4 = 3/6</span>) — це називають рівносильними (еквівалентними)\n    дробами.</p>\n  ",
          "theory": "\n    <p><strong>Спосіб 1 — спільний знаменник.</strong> Спільний знаменник — це число, на яке\n    ДІЛЯТЬСЯ НАЦІЛО обидва знаменники дробів, які порівнюємо. Ось як його знайти:</p>\n    <p><strong>Крок 1:</strong> перевір, чи один знаменник ділиться націло на інший. Якщо так —\n    більший знаменник і є спільним.</p>\n    <p><strong>Крок 2:</strong> якщо жоден не ділиться на інший — перемнож обидва знаменники між\n    собою. Результат завжди підійде як спільний знаменник.</p>\n    <p><strong>Крок 3:</strong> зведи КОЖЕН дріб до цього спільного знаменника: помнож чисельник і\n    знаменник дробу на те саме число (те, у скільки разів збільшився знаменник).</p>\n    <p><strong>Приклад А (один знаменник ділиться на інший).</strong> Порівняй 3/4 і 5/8.</p>\n    <p>8 ділиться на 4 націло (8 ÷ 4 = 2) → спільний знаменник — 8.</p>\n    <p>Зводимо 3/4: множимо чисельник і знаменник на 2 → 3/4 = 6/8.</p>\n    <p>Порівнюємо чисельники при однаковому знаменнику: 6/8 і 5/8 → 6 &gt; 5, тому\n    <strong>3/4 &gt; 5/8</strong>.</p>\n    <p><strong>Приклад Б (жоден знаменник не ділиться на інший).</strong> Порівняй 2/3 і 3/5.</p>\n    <p>3 і 5 не діляться одне на одне націло → перемножуємо: 3 × 5 = 15.</p>\n    <p>Зводимо 2/3: множимо на 5/5 → 2/3 = 10/15. Зводимо 3/5: множимо на 3/3 → 3/5 = 9/15.</p>\n    <p>Порівнюємо чисельники: 10/15 і 9/15 → 10 &gt; 9, тому <strong>2/3 &gt; 3/5</strong>.</p>\n    <p><strong>Спосіб 2 — однаковий чисельник (швидкий шлях).</strong> Приклад: порівняй 2/5 і 2/9.\n    Чисельники однакові (2). Чим БІЛЬШИЙ знаменник — тим МЕНШІ частини цілого, отже дріб\n    МЕНШИЙ. Знаменник 5 менший за 9, тому кожна п'ята частина більша за дев'яту:\n    <strong>2/5 &gt; 2/9</strong>.</p>\n    <p><strong>Не забувай про РІВНІСТЬ.</strong> Перш ніж вирішувати «більше» чи «менше» —\n    перевір, чи дроби взагалі не РІВНІ. Наприклад, 3/6 і 1/2: зводимо до спільного знаменника 6 →\n    1/2 = 3/6, тобто вони рівні, і твердження «3/6 &lt; 1/2» буде НЕПРАВИЛЬНИМ.</p>\n    <div class=\"warn\">⚠️ Найчастіша помилка: думати, що менший знаменник завжди означає\n    менший дріб — це правило працює для ЦІЛИХ чисел, але НЕ для дробів з однаковим\n    чисельником (там усе навпаки!). Друга поширена помилка — не перевірити рівність дробів\n    перед тим, як обрати «більше» чи «менше».</div>\n  ",
          "questions": [
            {
              "prompt": "Який дріб потрібно розмістити, щоб це порівняння було правильним: 5/8 > ☐?",
              "options": [
                "5/6",
                "7/8",
                "8/5",
                "1/4"
              ],
              "correct": 3,
              "explain": {
                "0": "5/6 і 5/8 мають ОДНАКОВИЙ чисельник (5). Коли чисельники однакові, дріб з МЕНШИМ знаменником — БІЛЬШИЙ, а не менший (адже частини цілого більші). Перевір напрямок цього правила ще раз.",
                "1": "Порівняй чисельники при однаковому знаменнику (8): який із них — 7 чи 5 — більший?",
                "2": "8/5 — це більше за одне ціле (чисельник більший за знаменник), тож це точно не менше за 5/8."
              },
              "solution": "Зведи 1/4 до восьмих: 1/4 = 2/8. Порівняй чисельники при однаковому знаменнику: 5/8 і 2/8 → 5 > 2, отже 5/8 > 1/4 — правильне порівняння."
            },
            {
              "prompt": "Таблиця показує чотири порівняння довжин стрічок.\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'Inter',sans-serif;font-size:14px;\">\n          <tbody>\n            <tr><td style=\"padding:6px 16px;font-weight:700;\">P</td><td style=\"padding:6px 16px;\">6/8 &lt; 9/10</td></tr>\n            <tr><td style=\"padding:6px 16px;font-weight:700;\">Q</td><td style=\"padding:6px 16px;\">6/8 &lt; 3/4</td></tr>\n            <tr><td style=\"padding:6px 16px;font-weight:700;\">R</td><td style=\"padding:6px 16px;\">6/8 &lt; 7/8</td></tr>\n            <tr><td style=\"padding:6px 16px;font-weight:700;\">S</td><td style=\"padding:6px 16px;\">6/8 &lt; 5/6</td></tr>\n          </tbody>\n        </table>\n        Які з цих порівнянь є істинними?",
              "options": [
                "Жодне з цих",
                "Тільки Q і R",
                "Тільки P",
                "Тільки P, R і S"
              ],
              "correct": 3,
              "explain": {
                "0": "Принаймні кілька із цих порівнянь дійсно правильні — перевір кожне окремо, звівши дроби до спільного знаменника.",
                "1": "Q НЕ є правильним порівнянням: 6/8 і 3/4 — це РІВНІ дроби (3/4 = 6/8), а не «6/8 менше за 3/4». Зведи обидва дроби до спільного знаменника і перевір ще раз.",
                "2": "P дійсно правильне (6/8 < 9/10) — але це не означає, що R і S автоматично неправильні. Перевір їх окремо, звівши кожну пару дробів до спільного знаменника."
              },
              "solution": "Звівши кожну пару до спільного знаменника: P: 6/8=30/40, 9/10=36/40 → 30<36, правильно. Q: 3/4=6/8 — це РІВНІСТЬ, а не «менше», тому Q неправильне. R: 6/8 і 7/8 при однаковому знаменнику → 6<7, правильно. S: 6/8=18/24, 5/6=20/24 → 18<20, правильно. Отже правильні лише P, R і S."
            },
            {
              "prompt": "Четверо друзів виконали частину проєкту:\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'Inter',sans-serif;font-size:14px;\">\n          <tbody>\n            <tr><td style=\"padding:6px 16px;\">Артем</td><td style=\"padding:6px 16px;\">8/12</td></tr>\n            <tr><td style=\"padding:6px 16px;\">Ліза</td><td style=\"padding:6px 16px;\">7/9</td></tr>\n            <tr><td style=\"padding:6px 16px;\">Максим</td><td style=\"padding:6px 16px;\">5/9</td></tr>\n            <tr><td style=\"padding:6px 16px;\">Соня</td><td style=\"padding:6px 16px;\">3/4</td></tr>\n          </tbody>\n        </table>\n        Хто з цих людей виконав БІЛЬШЕ ніж 2/3 проєкту?",
              "options": [
                "Усі четверо",
                "Тільки Ліза і Соня",
                "Тільки Ліза",
                "Артем, Ліза і Соня"
              ],
              "correct": 1,
              "explain": {
                "0": "Перевір результат Максима (5/9) окремо, порівнявши його зі значенням 2/3.",
                "2": "Це звужує коло лише до Лізи — але перевір результат Соні (3/4) окремо, порівнявши його з 2/3, перш ніж вирішувати, кого саме включати.",
                "3": "Артем виконав РІВНО 2/3 проєкту (8/12 = 2/3) — це не «більше», а точно стільки ж. Перевір це порівняння ще раз."
              },
              "solution": "Спрости або зведи кожен результат до спільного знаменника з 2/3. Артем: 8/12 спрощується до 2/3 — рівно стільки ж, не більше. Ліза: 2/3=6/9, а 7/9>6/9 — більше. Максим: 5/9<6/9 — менше. Соня: 2/3=8/12, а 3/4=9/12>8/12 — більше. Більше ніж 2/3 виконали лише Ліза і Соня."
            },
            {
              "prompt": "Четверо дітей зібрали таку частку грошей від своєї мети на подарунок:\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'Inter',sans-serif;font-size:14px;\">\n          <tbody>\n            <tr><td style=\"padding:6px 16px;\">Марта</td><td style=\"padding:6px 16px;\">3/5</td></tr>\n            <tr><td style=\"padding:6px 16px;\">Толя</td><td style=\"padding:6px 16px;\">9/10</td></tr>\n            <tr><td style=\"padding:6px 16px;\">Ніна</td><td style=\"padding:6px 16px;\">2/5</td></tr>\n            <tr><td style=\"padding:6px 16px;\">Юра</td><td style=\"padding:6px 16px;\">7/10</td></tr>\n          </tbody>\n        </table>\n        Хто з них зібрав БІЛЬШЕ ніж половину (1/2), але МЕНШЕ ніж 4/5 своєї мети?",
              "options": [
                "Марта і Юра",
                "Усі четверо",
                "Марта, Ніна і Юра",
                "Толя і Юра"
              ],
              "correct": 0,
              "explain": {
                "1": "Перевір кожен результат окремо: принаймні один із чотирьох виходить за межі діапазону від 1/2 до 4/5.",
                "2": "Ніна зібрала лише 2/5 своєї мети — це МЕНШЕ за половину, тому не підходить під умову «більше ніж половина».",
                "3": "Толя зібрав 9/10 своєї мети — це БІЛЬШЕ за 4/5, тому не підходить під умову «менше ніж 4/5»."
              },
              "solution": "Зведи все до десятих: половина = 5/10, а 4/5 = 8/10 — шукаємо значення СУВОРО між 5/10 і 8/10. Марта: 3/5=6/10 — підходить. Толя: 9/10 — більше за 8/10, забагато. Ніна: 2/5=4/10 — менше за 5/10, замало. Юра: 7/10 — підходить. Підходять Марта і Юра."
            },
            {
              "prompt": "Пекарня продає булочки. 1/4 усіх булочок — з корицею, 2/5 — з маком, решта —\n        звичайні (без начинки). Яке твердження є правильним?",
              "options": [
                "Рівно половина булочок — звичайні.",
                "У пекарні немає жодної звичайної булочки.",
                "Менше ніж половина булочок — звичайні.",
                "Більше ніж половина булочок — звичайні."
              ],
              "correct": 2,
              "explain": {
                "0": "Перевір суму 1/4 + 2/5 ще раз, звівши дроби до спільного знаменника — здається, результат не зовсім дорівнює половині.",
                "1": "У задачі сказано, що решта булочок — звичайні, тобто якась їх кількість точно є. Перевір, чи справді сума часток з корицею і маком дорівнює цілому (1).",
                "3": "Спочатку додай частки з корицею і з маком (звівши до спільного знаменника), а потім відніми результат від цілого (1), щоб знайти частку звичайних булочок — і порівняй її з половиною."
              },
              "solution": "1/4 + 2/5 = 5/20 + 8/20 = 13/20. Звичайних: 1 − 13/20 = 7/20. Половина — це 10/20. Порівняй 7/20 і 10/20: 7 < 10, отже звичайних менше ніж половина."
            }
          ]
        },
        {
          "id": "d2t2",
          "title": "Дроби в текстових задачах: що чисельник, що знаменник",
          "subtitle": "Не переплутати частину і ціле при складанні дробу",
          "reference": "\n    <p><strong>Коли задача просить записати дріб</strong>, завжди визнач дві речі окремо:</p>\n    <p><strong>Чисельник</strong> (верхнє число) — скільки одиниць ЧАСТИНИ ми рахуємо\n    (наприклад, скільки клітинок зафарбовано, скільки шматочків з'їли).</p>\n    <p><strong>Знаменник</strong> (нижнє число) — скільки одиниць становить ЦІЛЕ або ЗАГАЛЬНУ\n    кількість (наприклад, скільки клітинок усього, скільки хвилин загалом).</p>\n  ",
          "theory": "\n    <p><strong>Приклад 1.</strong> Троє друзів замовили 2 піци, кожну розрізали навпіл.\n    Кожен друг з'їв половину піци. Яка частка представляє кількість піц, яку з'їли друзі?</p>\n    <p>Крок 1: 2 піци, розрізані навпіл, дають 4 половинки.</p>\n    <p>Крок 2: троє друзів з'їли по одній половинці — разом 3 половинки.</p>\n    <p>Крок 3: чисельник — це СКІЛЬКИ половинок з'їли (3). Знаменник — скільки половинок\n    становить ОДНЕ ціле (2, бо піцу ділили навпіл).</p>\n    <p>Результат: <span class=\"formula\">3/2</span> (а НЕ 2/3 — порядок чисел має значення!).</p>\n    <p><strong>Приклад 2 (клітинки на малюнку).</strong> Прямокутник поділено на 10 однакових\n    клітинок. Частину з них зафарбовано, як показано:</p>\n    <svg viewBox=\"0 0 270 120\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:260px;display:block;margin:10px 0;\">\n      <rect x=\"10\" y=\"10\" width=\"46\" height=\"46\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n      <rect x=\"60\" y=\"10\" width=\"46\" height=\"46\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n      <rect x=\"110\" y=\"10\" width=\"46\" height=\"46\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n      <rect x=\"160\" y=\"10\" width=\"46\" height=\"46\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n      <rect x=\"210\" y=\"10\" width=\"46\" height=\"46\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n      <rect x=\"10\" y=\"60\" width=\"46\" height=\"46\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n      <rect x=\"60\" y=\"60\" width=\"46\" height=\"46\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n      <rect x=\"110\" y=\"60\" width=\"46\" height=\"46\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n      <rect x=\"160\" y=\"60\" width=\"46\" height=\"46\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n      <rect x=\"210\" y=\"60\" width=\"46\" height=\"46\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n    </svg>\n    <p>Зафарбовано 7 клітинок (чисельник), усього клітинок 10 (знаменник) → зафарбована частка:\n    <span class=\"formula\">7/10</span>.</p>\n    <div class=\"warn\">⚠️ Найчастіша помилка: переставити місцями чисельник і знаменник (записати\n    «ціле над частиною» замість «частина над цілим»). Завжди питай себе: «яке з двох чисел —\n    це та частина, про яку запитує задача, а яке — загальна кількість?»</div>\n  ",
          "questions": [
            {
              "prompt": "На день народження принесли 3 кавуни, кожен розрізали на 4 однакові шматки.\n        5 дітей отримали по одному шматку кожна. Яка частка представляє кількість кавунів,\n        яку з'їли діти?",
              "options": [
                "5/12",
                "12/4",
                "4/5",
                "5/4"
              ],
              "correct": 3,
              "explain": {
                "0": "12 — це загальна кількість шматків з усіх кавунів, а не кількість шматків в ОДНОМУ цілому кавуні. Знаменник має показувати, на скільки частин розрізали ОДИН кавун, а не скільки всього шматків існує.",
                "1": "12 — це загальна кількість шматків з УСІХ трьох кавунів, а не кількість шматків, які з'їли діти. Порахуй, скільки шматків з'їли саме діти.",
                "2": "Тут переставлено місцями чисельник і знаменник. Подумай ще раз: чисельник має показувати, СКІЛЬКИ шматків з'їли діти, а знаменник — скільки шматків становлять ОДИН цілий кавун — яке з цих двох чисел де стоїть?"
              },
              "solution": "3 кавуни, розрізані на 4 шматки кожен = 12 шматків загалом. 5 дітей з'їли по одному шматку = 5 шматків. Оскільки один цілий кавун = 4 шматки, з'їдена кількість кавунів = 5/4."
            },
            {
              "prompt": "На малюнку зображено поле, поділене на 24 однакові клітинки. Зафарбовані клітинки\n        показані нижче.\n        <svg viewBox=\"0 0 230 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:220px;display:block;margin:10px 0;\">\n          <rect x=\"10\" y=\"10\" width=\"32\" height=\"32\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"45\" y=\"10\" width=\"32\" height=\"32\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"80\" y=\"10\" width=\"32\" height=\"32\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"115\" y=\"10\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"150\" y=\"10\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"185\" y=\"10\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"10\" y=\"45\" width=\"32\" height=\"32\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"45\" y=\"45\" width=\"32\" height=\"32\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"80\" y=\"45\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"115\" y=\"45\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"150\" y=\"45\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"185\" y=\"45\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"10\" y=\"80\" width=\"32\" height=\"32\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"45\" y=\"80\" width=\"32\" height=\"32\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"80\" y=\"80\" width=\"32\" height=\"32\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"115\" y=\"80\" width=\"32\" height=\"32\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"150\" y=\"80\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"185\" y=\"80\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"10\" y=\"115\" width=\"32\" height=\"32\" fill=\"#E8704A\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"45\" y=\"115\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"80\" y=\"115\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"115\" y=\"115\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"150\" y=\"115\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n          <rect x=\"185\" y=\"115\" width=\"32\" height=\"32\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"2\"/>\n        </svg>\n        Кожен рядок має 3, 2, 4 і 1 зафарбовану клітинку відповідно. Яке рівняння показує, як\n        знайти частку зафарбованих клітинок?",
              "options": [
                "3/6 + 2/6 + 4/6 + 1/6 = 10/24",
                "3/24 + 2/24 + 4/24 + 1/24 = 9/24",
                "3/24 + 2/24 + 4/24 + 1/24 = 10/24",
                "10/24 + 14/24 = 24/24"
              ],
              "correct": 2,
              "explain": {
                "0": "Кожен доданок має знаменник, що дорівнює ЗАГАЛЬНІЙ кількості клітинок на малюнку (24), а не кількості клітинок лише в одному рядку (6).",
                "1": "Перевір додавання чисельників ще раз: 3+2+4+1 — порахуй уважно кожен доданок.",
                "3": "Це рівняння додає зафарбовані і незафарбовані клітинки разом, що завжди дасть усе поле (24/24) — це не показує, яку ЧАСТКУ зафарбовано."
              },
              "solution": "У кожному рядку зафарбовано 3, 2, 4 і 1 клітинку з 24 загалом. Частка зафарбованих клітинок: 3/24 + 2/24 + 4/24 + 1/24 = 10/24."
            },
            {
              "prompt": "У кошику 5 груш. Яблук утричі більше, ніж груш. Яку частку від УСІХ фруктів у\n        кошику становлять груші?",
              "options": [
                "5/20",
                "5/15",
                "20/5",
                "15/20"
              ],
              "correct": 0,
              "explain": {
                "1": "15 — це лише кількість яблук, а не загальна кількість УСІХ фруктів у кошику. Знаменник має бути загальною кількістю фруктів (груші + яблука разом).",
                "2": "Тут чисельник і знаменник переставлені місцями. Чисельник має бути кількістю груш (частина), а знаменник — загальною кількістю фруктів (ціле), а не навпаки.",
                "3": "15/20 показує частку ЯБЛУК серед усіх фруктів, а питання просить частку ГРУШ."
              },
              "solution": "Груш — 5, яблук утричі більше — 15. Разом фруктів: 5+15=20. Частка груш від усіх фруктів: 5/20."
            },
            {
              "prompt": "Учень витратив 40 хвилин на домашнє завдання з математики і 20 хвилин на читання.\n        Яку частку від ЗАГАЛЬНОГО часу на обидва заняття становив час на читання?",
              "options": [
                "20/60",
                "60/20",
                "40/60",
                "20/40"
              ],
              "correct": 0,
              "explain": {
                "1": "Тут чисельник і знаменник переставлені місцями. Чисельник має бути часом на читання (частина), а знаменник — загальним часом на обидва заняття (ціле).",
                "2": "40/60 показує частку часу на МАТЕМАТИКУ від загального часу, а питання просить частку часу на ЧИТАННЯ.",
                "3": "40 — це лише час на математику, а не ЗАГАЛЬНИЙ час на обидва заняття. Знаменник має включати і математику, і читання разом."
              },
              "solution": "Читання — 20 хв, математика — 40 хв. Разом: 60 хв. Частка часу на читання від загального часу: 20/60."
            }
          ]
        }
      ]
    },
    {
      "id": "day3",
      "tag": "Зупинка 3",
      "title": "Багатокрокові задачі",
      "topics": [
        {
          "id": "d3t1",
          "title": "Багатокрокові задачі: множення, потім ділення",
          "subtitle": "Доводити задачу до кінця і обирати правильний порядок дій",
          "reference": "\n    <p><strong>Що таке багатокрокова задача?</strong> Це задача, де відповідь не можна отримати\n    ОДНІЄЮ дією — спочатку треба знайти проміжний результат (наприклад, загальну кількість), а\n    потім використати його в наступній дії (наприклад, поділити на групи).</p>\n    <p><strong>Що означає \"найбільша кількість ПОВНИХ...\"?</strong> Якщо після ділення\n    залишається остача (щось зайве), цю остачу відкидають — рахують лише те, що поділилося\n    БЕЗ ЗАЛИШКУ повністю.</p>\n  ",
          "theory": "\n    <p>Приклад: кондитер має 6 коробок карамельок, у кожній коробці по 24 карамельки. Він хоче\n    розкласти всі карамельки в пакетики по 10 карамельок у кожному. Скільки повних пакетиків\n    він зможе зробити?</p>\n    <p><strong>Крок 1:</strong> знайти загальну кількість карамельок: 6 × 24 = 144.</p>\n    <p><strong>Крок 2:</strong> поділити загальну кількість на розмір одного пакетика:\n    144 ÷ 10 = 14,4.</p>\n    <p><strong>Крок 3:</strong> кількість пакетиків має бути ЦІЛИМ числом — 0,4 пакетика не\n    буває, тому відповідь: <strong>14 повних пакетиків</strong> (залишиться 4 карамельки).</p>\n    <div class=\"warn\">⚠️ Найчастіша помилка: зупинитися після Кроку 1 і дати відповідь 144 —\n    хоча задача запитує про ПАКЕТИКИ, а не про карамельки. Завжди перечитуй, що САМЕ запитує\n    задача, і виконуй усі потрібні дії до кінця.</div>\n    <p><strong>Іноді задача просить обрати ПРАВИЛЬНИЙ ПОРЯДОК дій</strong>, а не порахувати\n    самому. Приклад: у четвер до бібліотеки повернули 40 книг. У п'ятницю повернули утричі\n    більше, ніж у четвер. Скільки книг повернули за два дні?</p>\n    <p>Крок 1: 40 × 3 = 120 (скільки книг повернули в п'ятницю).</p>\n    <p>Крок 2: 120 + 40 = 160 (загальна кількість книг за два дні).</p>\n    <div class=\"warn\">⚠️ Не можна спочатку додати два однакові числа з умови (40+40), а потім\n    множити — це не відповідає смислу задачі. Спочатку виконай дію, яка описана словами\n    («утричі більше»), а вже потім переходь до наступної дії.</div>\n  ",
          "questions": [
            {
              "prompt": "Пекар має 7 коробок яєць, у кожній коробці по 12 яєць. Для одного торта потрібно\n        10 яєць. Яку найбільшу кількість тортів пекар може спекти, використовуючи ці яйця?",
              "options": [
                "7",
                "8",
                "84",
                "9"
              ],
              "correct": 1,
              "explain": {
                "0": "7 — це кількість коробок яєць, а не кількість тортів, які можна спекти.",
                "2": "84 — це загальна кількість яєць, а не кількість тортів. Потрібно ще поділити цю кількість на 10 (яєць на один торт).",
                "3": "84 ÷ 10 = 8,4 — кількість тортів має бути ЦІЛИМ числом. Округлення ВГОРУ тут не підходить: подумай, чи вистачить яєць на ще один повний торт понад цілу частину результату ділення."
              },
              "solution": "Усього яєць: 7×12=84. Тортів: 84÷10=8,4 → лише 8 повних тортів (на 9-й не вистачить яєць)."
            },
            {
              "prompt": "Учні п'яти гуртків зробили закладки для книг. На кожну закладку йде 3 аркуші\n        паперу. Усього гуртки використали 180 аркушів. Кожен гурток зробив однакову кількість\n        закладок. Скільки закладок зробив КОЖЕН гурток?",
              "options": [
                "15",
                "12",
                "60",
                "36"
              ],
              "correct": 1,
              "explain": {
                "0": "Тут дані з умови перемножено, а не поділено — перевір, яка дія потрібна на кожному кроці.",
                "2": "60 — це загальна кількість закладок УСІХ гуртків разом, а не закладок ОДНОГО гуртка. Потрібно ще поділити на кількість гуртків (5).",
                "3": "36 — це аркушів на один гурток, а не закладок. Спочатку варто знайти загальну кількість ЗАКЛАДОК (аркуші ÷ 3), а вже потім ділити на гуртки."
              },
              "solution": "Закладок усього: 180÷3=60. На один гурток: 60÷5=12."
            },
            {
              "prompt": "У понеділок до бібліотеки повернули 30 книг. У вівторок повернули ВЧЕТВЕРО\n        більше, ніж у понеділок. Який набір рівнянь можна використати, щоб знайти b — загальну\n        кількість книг, повернених за ці два дні?",
              "options": [
                "30 × 4 = 120, потім 120 + 30 = b",
                "30 + 30 = 60, потім 60 + 4 = b",
                "30 + 30 = 60, потім 60 × 4 = b",
                "30 × 4 = 120, потім 120 × 30 = b"
              ],
              "correct": 0,
              "explain": {
                "1": "Ця пара дій двічі використовує додавання і взагалі не враховує, що у вівторок книг мало бути в 4 рази більше — тут немає жодного множення на 4.",
                "2": "Тут спочатку двічі додано число з понеділка — але за умовою у вівторок книг було ВЧЕТВЕРО більше, ніж у понеділок, а не вдвічі. Множення на 4 має бути першим кроком.",
                "3": "Тут другий крок — множення замість додавання. Щоб знайти ЗАГАЛЬНУ кількість книг за два дні, потрібно ДОДАТИ кількість за понеділок і за вівторок, а не перемножити їх."
              },
              "solution": "Вівторок: 30×4=120 книг. Загалом за два дні: 120+30=150=b."
            },
            {
              "prompt": "Майстриня має 9 мотків стрічки, у кожному мотку по 15 метрів. Вона хоче нарізати\n        всю стрічку на шматки по 4 метри для бантиків. Скільки повних шматків по 4 метри вона\n        отримає?",
              "options": [
                "34",
                "33",
                "135",
                "9"
              ],
              "correct": 1,
              "explain": {
                "0": "135 ÷ 4 = 33,75 — кількість шматків має бути ЦІЛИМ числом. Округлення ВГОРУ тут не підходить: подумай, чи вистачить довжини стрічки на ще один повний 4-метровий шматок понад цілу частину результату ділення.",
                "2": "135 — це загальна довжина стрічки в метрах, а не кількість шматків по 4 метри. Потрібно ще поділити цю довжину на 4.",
                "3": "9 — це кількість мотків стрічки, а не кількість нарізаних шматків по 4 метри."
              },
              "solution": "Усього стрічки: 9×15=135 м. Шматків по 4 м: 135÷4=33,75 → лише 33 повних шматки (на 34-й не вистачить довжини)."
            },
            {
              "prompt": "У залі 14 рядів крісел, у кожному ряду по 18 крісел. Квитки продають групами по\n        6 крісел. Скільки повних груп крісел можна продати?",
              "options": [
                "36",
                "42",
                "252",
                "3"
              ],
              "correct": 1,
              "explain": {
                "0": "Перевір ділення ще раз: 252 ÷ 6 — порахуй уважно, скільки повних груп по 6 виходить із 252.",
                "2": "252 — це загальна кількість крісel у залі, а не кількість ГРУП по 6 крісел. Потрібно ще поділити цю кількість на 6.",
                "3": "Це число занадто мале — перевір, чи виконано множення 14×18 перед тим, як ділити на 6."
              },
              "solution": "Усього крісел: 14×18=252. Груп по 6 крісел: 252÷6=42."
            }
          ]
        },
        {
          "id": "d3t2",
          "title": "Багатоетапні задачі: рахуємо крок за кроком",
          "subtitle": "Прийшло/пішло по кілька етапів — і оцінка суми кількох чисел",
          "reference": "\n    <p><strong>Що таке багатоетапна задача?</strong> Це задача, де щось змінюється кілька разів\n    підряд (наприклад, щогодини щось додається і щось віднімається), і потрібно знайти\n    результат після ВСІХ етапів разом.</p>\n    <p><strong>Оцінка суми</strong> — це округлене наближене значення суми кількох чисел, коли\n    не потрібна точна відповідь, а лише приблизна.</p>\n  ",
          "theory": "\n    <p>Приклад: парк атракціонів записує відвідувачів. Година 1: прийшло 180. Година 2:\n    прийшло 240, пішло 65. Година 3: прийшло 190, пішло 110. Скільки відвідувачів було в\n    парку через 3 години?</p>\n    <p><strong>Крок 1 (після 1-ї години):</strong> 180.</p>\n    <p><strong>Крок 2 (після 2-ї години):</strong> 180 + 240 − 65 = 355.</p>\n    <p><strong>Крок 3 (після 3-ї години):</strong> 355 + 190 − 110 = 435.</p>\n    <p>Результат: <strong>435 відвідувачів</strong>.</p>\n    <div class=\"warn\">⚠️ Найчастіша помилка: пропустити одну з дій «пішло» (віднімання) або\n    порахувати лише тих, хто прийшов, забувши про тих, хто пішов. Рахуй по одній годині за\n    раз і перевіряй кожен крок окремо.</div>\n    <p><strong>Оцінка суми кількох чисел.</strong> Приклад: етапи подорожі мають довжину\n    81, 129, 181, 110, 288 і 78 миль. Точна сума: 81+129+181+110+288+78 = 867. Округливши до\n    найближчої сотні, найкраща оцінка — <strong>900 миль</strong>.</p>\n  ",
          "questions": [
            {
              "prompt": "Бібліотека веде облік відвідувачів. Година 1: прийшло 150. Година 2: прийшло\n        210, пішло 45. Година 3: прийшло 175, пішло 130. Скільки відвідувачів було в\n        бібліотеці через 3 години?",
              "options": [
                "360",
                "405",
                "535",
                "490"
              ],
              "correct": 0,
              "explain": {
                "1": "Перевір кожен крок окремо (після 1-ї, 2-ї і 3-ї години) і звір з умовою, чи всі числа враховані з правильним знаком (плюс чи мінус).",
                "2": "Тут враховано лише тих, хто ПРИЙШОВ, а тих, хто ПІШОВ — не віднято жодного разу. Прочитай умову ще раз: у 2-гу і 3-тю годину частина відвідувачів залишила бібліотеку.",
                "3": "Схоже, одну з дій «пішло» пропущено — перевір, чи віднято ОБИДВА числа відвідувачів, які пішли (і в 2-гу, і в 3-тю годину)."
              },
              "solution": "Год.1: 150. Год.2: 150+210−45=315. Год.3: 315+175−130=360."
            },
            {
              "prompt": "Завод веде запис деталей. Зміна 1: вироблено 320 деталей. Зміна 2: вироблено\n        280, забраковано 35. Зміна 3: вироблено 300, забраковано 60. Скільки ЯКІСНИХ (не\n        забракованих) деталей залишилось після трьох змін?",
              "options": [
                "865",
                "805",
                "95",
                "900"
              ],
              "correct": 1,
              "explain": {
                "0": "Схоже, одне з чисел забракованих деталей не віднято — перевір, чи віднято ОБИДВА значення браку (і зі зміни 2, і зі зміни 3).",
                "2": "Це сума самих ЗАБРАКОВАНИХ деталей, а питання запитує про ЯКІСНІ деталі, які залишились, а не про брак.",
                "3": "Тут не враховано жодного браку взагалі — а за умовою частина деталей у зміні 2 і зміні 3 була забракована, тобто НЕ якісна."
              },
              "solution": "Зміна 1: 320. Зміна 2: 320+280−35=565. Зміна 3: 565+300−60=805 якісних деталей."
            },
            {
              "prompt": "Родина планує подорож із шести етапів довжиною 92, 145, 168, 121, 264 і 85 миль.\n        Яка НАЙКРАЩА оцінка загальної довжини подорожі?",
              "options": [
                "700 миль",
                "800 миль",
                "900 миль",
                "1000 миль"
              ],
              "correct": 2,
              "explain": {
                "0": "Ця оцінка занадто мала — перевір, чи враховані ВСІ шість етапів подорожі, а не лише декілька з них.",
                "1": "Порахуй суму всіх шести етапів ще раз — здається, один з доданків не врахований, реальна сума трохи більша.",
                "3": "Ця оцінка занадто велика — додай усі шість чисел ще раз і подивись, до якої сотні ближче реальна сума."
              },
              "solution": "Сума всіх етапів: 92+145+168+121+264+85=875 миль. Найближча сотня — 900 миль."
            }
          ]
        }
      ]
    },
    {
      "id": "day4",
      "tag": "Зупинка 4",
      "title": "Властивості фігур і транспортир",
      "topics": [
        {
          "id": "d4t1",
          "title": "Властивості фігур: рахуй кути точно",
          "subtitle": "«Рівно два» чи «принаймні один» — це різні умови",
          "reference": "\n    <p><strong>Прямий кут</strong> — це кут рівно 90°. Дві сторони, які утворюють прямий кут,\n    називають <strong>перпендикулярними</strong>.</p>\n    <p><strong>Гострий кут</strong> — менший за 90°. <strong>Тупий кут</strong> — більший за 90°\n    (але менший за 180°).</p>\n    <p>Трапеція, ромб, прямокутник, квадрат, трикутник — усе це багатокутники, і кожен з них\n    має СВОЮ кількість прямих кутів — від нуля до чотирьох.</p>\n  ",
          "theory": "\n    <p>Прямокутник має <strong>чотири</strong> прямих кути — по одному в кожному куті:</p>\n    <svg viewBox=\"0 0 160 100\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:220px;display:block;margin:10px 0;\">\n      <rect x=\"10\" y=\"10\" width=\"120\" height=\"70\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/>\n      <rect x=\"14\" y=\"14\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#E8704A\" stroke-width=\"2\"/>\n      <rect x=\"116\" y=\"14\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#E8704A\" stroke-width=\"2\"/>\n      <rect x=\"14\" y=\"66\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#E8704A\" stroke-width=\"2\"/>\n      <rect x=\"116\" y=\"66\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#E8704A\" stroke-width=\"2\"/>\n    </svg>\n    <p>А прямокутний трикутник має лише <strong>один</strong> прямий кут:</p>\n    <svg viewBox=\"0 0 160 110\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:220px;display:block;margin:10px 0;\">\n      <polygon points=\"20,20 20,90 140,90\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/>\n      <rect x=\"20\" y=\"78\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#E8704A\" stroke-width=\"2\"/>\n    </svg>\n    <p>Коли задача каже «РІВНО ДВА прямих кути» або «ЛИШЕ ОДНА пара перпендикулярних сторін» —\n    це точна кількість, не менше і не більше. Квадрат чи прямокутник з чотирма прямими кутами\n    НЕ підходять під умову «рівно два», навіть якщо в них технічно Є прямі кути.</p>\n    <div class=\"warn\">⚠️ Найчастіша помилка: побачити, що фігура МАЄ прямі кути (чи\n    перпендикулярні сторони), і одразу обрати її — не порахувавши, скільки САМЕ таких кутів чи\n    сторін у ній є насправді.</div>\n    <p><strong>Інші фігури, які зустрінуться в завданнях</strong> — і скільки прямих кутів має\n    кожна з них:</p>\n    <div style=\"display:flex;flex-wrap:wrap;gap:14px;margin:10px 0;\">\n      <div style=\"text-align:center;width:120px;\">\n        <svg viewBox=\"0 0 110 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;\">\n          <rect x=\"20\" y=\"15\" width=\"60\" height=\"60\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/>\n          <rect x=\"23\" y=\"18\" width=\"9\" height=\"9\" fill=\"none\" stroke=\"#E8704A\" stroke-width=\"2\"/>\n          <rect x=\"68\" y=\"18\" width=\"9\" height=\"9\" fill=\"none\" stroke=\"#E8704A\" stroke-width=\"2\"/>\n          <rect x=\"23\" y=\"63\" width=\"9\" height=\"9\" fill=\"none\" stroke=\"#E8704A\" stroke-width=\"2\"/>\n          <rect x=\"68\" y=\"63\" width=\"9\" height=\"9\" fill=\"none\" stroke=\"#E8704A\" stroke-width=\"2\"/>\n        </svg>\n        <p style=\"font-size:12px;margin:4px 0 0;\">Квадрат — 4 прямих кути</p>\n      </div>\n      <div style=\"text-align:center;width:120px;\">\n        <svg viewBox=\"0 0 110 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;\">\n          <polygon points=\"20,15 20,75 95,75 65,15\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/>\n          <rect x=\"23\" y=\"18\" width=\"9\" height=\"9\" fill=\"none\" stroke=\"#E8704A\" stroke-width=\"2\"/>\n          <rect x=\"23\" y=\"63\" width=\"9\" height=\"9\" fill=\"none\" stroke=\"#E8704A\" stroke-width=\"2\"/>\n        </svg>\n        <p style=\"font-size:12px;margin:4px 0 0;\">Прямокутна трапеція — 2 прямих кути</p>\n      </div>\n      <div style=\"text-align:center;width:120px;\">\n        <svg viewBox=\"0 0 110 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;\">\n          <polygon points=\"55,10 95,45 55,80 15,45\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/>\n        </svg>\n        <p style=\"font-size:12px;margin:4px 0 0;\">Ромб — зазвичай 0 прямих кутів</p>\n      </div>\n      <div style=\"text-align:center;width:120px;\">\n        <svg viewBox=\"0 0 110 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;\">\n          <polygon points=\"20,75 60,12 95,70\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/>\n        </svg>\n        <p style=\"font-size:12px;margin:4px 0 0;\">Гострокутний трикутник — 0 прямих кутів (усі гострі)</p>\n      </div>\n      <div style=\"text-align:center;width:120px;\">\n        <svg viewBox=\"0 0 110 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;\">\n          <polygon points=\"55,10 95,75 15,75\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/>\n        </svg>\n        <p style=\"font-size:12px;margin:4px 0 0;\">Рівносторонній трикутник — 0 прямих кутів, усі по 60°</p>\n      </div>\n      <div style=\"text-align:center;width:120px;\">\n        <svg viewBox=\"0 0 110 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;\">\n          <polygon points=\"55,8 95,38 80,80 30,80 15,38\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/>\n        </svg>\n        <p style=\"font-size:12px;margin:4px 0 0;\">Правильний п'ятикутник — 0 прямих кутів, усі по 108°</p>\n      </div>\n    </div>\n  ",
          "questions": [
            {
              "prompt": "Марічка намалювала багатокутник, який має РІВНО ДВА прямих кути. Яка з цих фігур може бути тим багатокутником?",
              "options": [
                "Прямокутна трапеція",
                "Ромб",
                "Прямокутний трикутник",
                "Квадрат"
              ],
              "correct": 0,
              "explain": {
                "1": "Ромб зазвичай не має жодного прямого кута (хіба що він одночасно є квадратом) — це не відповідає умові «рівно два».",
                "2": "Прямокутний трикутник має лише ОДИН прямий кут — а задача просить фігуру з РІВНО ДВОМА прямими кутами.",
                "3": "Квадрат має ЧОТИРИ прямих кути (по одному в кожному з чотирьох кутів) — це більше, ніж «рівно два»."
              },
              "solution": "Прямокутна трапеція має два прямих кути (там, де бічна сторона перпендикулярна до основ) і два непрямих — отже, рівно два прямих кути."
            },
            {
              "prompt": "Дмитро намалював прапор, у якому ДВІ сторони перпендикулярні одна одній, і більше жодної такої пари немає. Яка з цих фігур може мати форму такого прапора?",
              "options": [
                "Гострокутний трикутник",
                "Квадрат",
                "Прямокутний трикутник",
                "Прямокутник"
              ],
              "correct": 2,
              "explain": {
                "0": "Гострокутний трикутник не має жодного прямого кута, тому в ньому взагалі немає перпендикулярних сторін.",
                "1": "Квадрат має ЧОТИРИ пари перпендикулярних сторін (по одній у кожному куті) — це більше, ніж лише одна пара.",
                "3": "Прямокутник, як і квадрат, має чотири прямих кути — тобто чотири пари перпендикулярних сторін, а не лише одну."
              },
              "solution": "Прямокутний трикутник має рівно один прямий кут — це означає, що лише ОДНА пара його сторін (два катети) перпендикулярна одна одній."
            },
            {
              "prompt": "Яка з цих фігур має принаймні один гострий кут, один прямий кут І один тупий кут одночасно?",
              "options": [
                "<div style=\"text-align:center;\"><svg viewBox=\"0 0 110 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:90px;\"><polygon points=\"55,8 95,38 80,80 30,80 15,38\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/></svg><div style=\"font-size:13px;margin-top:4px;\">Правильний п'ятикутник</div></div>",
                "<div style=\"text-align:center;\"><svg viewBox=\"0 0 110 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:90px;\"><rect x=\"15\" y=\"15\" width=\"80\" height=\"60\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/></svg><div style=\"font-size:13px;margin-top:4px;\">Прямокутник</div></div>",
                "<div style=\"text-align:center;\"><svg viewBox=\"0 0 110 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:90px;\"><polygon points=\"20,15 20,75 95,75 65,15\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/></svg><div style=\"font-size:13px;margin-top:4px;\">Трапеція</div></div>",
                "<div style=\"text-align:center;\"><svg viewBox=\"0 0 110 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:90px;\"><polygon points=\"55,10 95,75 15,75\" fill=\"#E8F8F3\" stroke=\"#2D9B7C\" stroke-width=\"3\"/></svg><div style=\"font-size:13px;margin-top:4px;\">Рівносторонній трикутник</div></div>"
              ],
              "correct": 2,
              "explain": {
                "0": "Усі кути правильного п'ятикутника тупі (по 108°) — тут немає жодного гострого чи прямого кута.",
                "1": "Прямокутник має чотири прямих кути і жодного гострого чи тупого — тут немає різноманіття кутів, яке потрібне за умовою.",
                "3": "Рівносторонній трикутник має три однакові гострі кути (по 60°) і жодного прямого чи тупого."
              },
              "solution": "Ця трапеція має два прямих кути (зліва), один тупий і один гострий кут (справа) — тобто містить усі три типи кутів одночасно."
            },
            {
              "prompt": "Яка з цих фігур ЗАВЖДИ має рівно 4 прямих кути, незалежно від розмірів?",
              "options": [
                "Рівносторонній трикутник",
                "Квадрат",
                "Прямокутна трапеція",
                "Ромб"
              ],
              "correct": 1,
              "explain": {
                "0": "Рівносторонній трикутник має лише ТРИ кути, і всі вони гострі (по 60°) — прямих кутів там взагалі немає.",
                "2": "Прямокутна трапеція має лише ДВА прямих кути, а не чотири.",
                "3": "Ромб зазвичай не має жодного прямого кута — лише всі сторони однакової довжини, а кути можуть бути гострими й тупими."
              },
              "solution": "Квадрат має чотири рівні сторони і чотири прямих кути ЗАВЖДИ, незалежно від того, який він завбільшки."
            }
          ]
        },
        {
          "id": "d4t2",
          "title": "Транспортир: яку шкалу читати",
          "subtitle": "Дві шкали, два різні числа — обери правильну",
          "reference": "\n    <p><strong>Транспортир</strong> — інструмент для вимірювання кутів у градусах (°).\n    Півколо транспортира розмічене від 0° до 180°.</p>\n    <p>На кожній поділці транспортира надруковано ОДРАЗУ ДВА числа — одне для зовнішньої\n    шкали, інше для внутрішньої. Це не помилка: просто кожну шкалу рахують у СВІЙ бік.</p>\n  ",
          "theory": "\n    <p>Транспортир має ДВІ шкали одночасно: одна починається з 0 праворуч і йде до 180\n    ліворуч, інша — починається з 0 ліворуч і йде до 180 праворуч.</p>\n    <svg viewBox=\"0 0 370 220\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" style=\"max-width:300px;display:block;margin:10px 0;\">\n      <path d=\"M 60.0 170.0 A 125 125 0 0 1 310.0 170.0 Z\" fill=\"#FDFCF8\" stroke=\"none\"/>\n      <line x1=\"60.0\" y1=\"170\" x2=\"310.0\" y2=\"170\" stroke=\"#1B2A4A\" stroke-width=\"2\"/>\n      <path d=\"M 60.0 170.0 A 125 125 0 0 1 310.0 170.0\" fill=\"none\" stroke=\"#2D9B7C\" stroke-width=\"2.5\"/>\n      <line x1=\"310.0\" y1=\"170.0\" x2=\"296.0\" y2=\"170.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"325.0\" y=\"170.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">0</text>\n      <text x=\"340.0\" y=\"170.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">180</text>\n      <line x1=\"309.5\" y1=\"159.1\" x2=\"302.6\" y2=\"159.7\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"308.1\" y1=\"148.3\" x2=\"294.3\" y2=\"150.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"322.9\" y=\"145.7\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">10</text>\n      <text x=\"337.6\" y=\"143.1\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">170</text>\n      <line x1=\"305.7\" y1=\"137.6\" x2=\"299.0\" y2=\"139.5\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"302.5\" y1=\"127.2\" x2=\"289.3\" y2=\"132.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"316.6\" y=\"122.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">20</text>\n      <text x=\"330.7\" y=\"117.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">160</text>\n      <line x1=\"298.3\" y1=\"117.2\" x2=\"291.9\" y2=\"120.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"293.3\" y1=\"107.5\" x2=\"281.1\" y2=\"114.5\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"306.2\" y=\"100.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">30</text>\n      <text x=\"319.2\" y=\"92.5\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">150</text>\n      <line x1=\"287.4\" y1=\"98.3\" x2=\"281.7\" y2=\"102.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"280.8\" y1=\"89.7\" x2=\"270.0\" y2=\"98.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"292.2\" y=\"80.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">40</text>\n      <text x=\"303.7\" y=\"70.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">140</text>\n      <line x1=\"273.4\" y1=\"81.6\" x2=\"268.4\" y2=\"86.6\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"265.3\" y1=\"74.2\" x2=\"256.3\" y2=\"85.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"275.0\" y=\"62.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">50</text>\n      <text x=\"284.6\" y=\"51.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">130</text>\n      <line x1=\"256.7\" y1=\"67.6\" x2=\"252.7\" y2=\"73.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"247.5\" y1=\"61.7\" x2=\"240.5\" y2=\"73.9\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"255.0\" y=\"48.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">60</text>\n      <text x=\"262.5\" y=\"35.8\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">120</text>\n      <line x1=\"237.8\" y1=\"56.7\" x2=\"234.9\" y2=\"63.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"227.8\" y1=\"52.5\" x2=\"223.0\" y2=\"65.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"232.9\" y=\"38.4\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">70</text>\n      <text x=\"238.0\" y=\"24.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">110</text>\n      <line x1=\"217.4\" y1=\"49.3\" x2=\"215.5\" y2=\"56.0\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"206.7\" y1=\"46.9\" x2=\"204.3\" y2=\"60.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"209.3\" y=\"32.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">80</text>\n      <text x=\"211.9\" y=\"17.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">100</text>\n      <line x1=\"195.9\" y1=\"45.5\" x2=\"195.3\" y2=\"52.4\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"185.0\" y1=\"45.0\" x2=\"185.0\" y2=\"59.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"185.0\" y=\"30.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">90</text>\n      <text x=\"185.0\" y=\"15.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">90</text>\n      <line x1=\"174.1\" y1=\"45.5\" x2=\"174.7\" y2=\"52.4\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"163.3\" y1=\"46.9\" x2=\"165.7\" y2=\"60.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"160.7\" y=\"32.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">100</text>\n      <text x=\"158.1\" y=\"17.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">80</text>\n      <line x1=\"152.6\" y1=\"49.3\" x2=\"154.5\" y2=\"56.0\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"142.2\" y1=\"52.5\" x2=\"147.0\" y2=\"65.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"137.1\" y=\"38.4\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">110</text>\n      <text x=\"132.0\" y=\"24.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">70</text>\n      <line x1=\"132.2\" y1=\"56.7\" x2=\"135.1\" y2=\"63.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"122.5\" y1=\"61.7\" x2=\"129.5\" y2=\"73.9\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"115.0\" y=\"48.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">120</text>\n      <text x=\"107.5\" y=\"35.8\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">60</text>\n      <line x1=\"113.3\" y1=\"67.6\" x2=\"117.3\" y2=\"73.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"104.7\" y1=\"74.2\" x2=\"113.7\" y2=\"85.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"95.0\" y=\"62.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">130</text>\n      <text x=\"85.4\" y=\"51.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">50</text>\n      <line x1=\"96.6\" y1=\"81.6\" x2=\"101.6\" y2=\"86.6\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"89.2\" y1=\"89.7\" x2=\"100.0\" y2=\"98.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"77.8\" y=\"80.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">140</text>\n      <text x=\"66.3\" y=\"70.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">40</text>\n      <line x1=\"82.6\" y1=\"98.3\" x2=\"88.3\" y2=\"102.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"76.7\" y1=\"107.5\" x2=\"88.9\" y2=\"114.5\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"63.8\" y=\"100.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">150</text>\n      <text x=\"50.8\" y=\"92.5\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">30</text>\n      <line x1=\"71.7\" y1=\"117.2\" x2=\"78.1\" y2=\"120.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"67.5\" y1=\"127.2\" x2=\"80.7\" y2=\"132.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"53.4\" y=\"122.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">160</text>\n      <text x=\"39.3\" y=\"117.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">20</text>\n      <line x1=\"64.3\" y1=\"137.6\" x2=\"71.0\" y2=\"139.5\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"61.9\" y1=\"148.3\" x2=\"75.7\" y2=\"150.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"47.1\" y=\"145.7\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">170</text>\n      <text x=\"32.4\" y=\"143.1\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">10</text>\n      <line x1=\"60.5\" y1=\"159.1\" x2=\"67.4\" y2=\"159.7\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"60.0\" y1=\"170.0\" x2=\"74.0\" y2=\"170.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"45.0\" y=\"170.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">180</text>\n      <text x=\"30.0\" y=\"170.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">0</text>\n      <circle cx=\"185\" cy=\"170\" r=\"3.5\" fill=\"#1B2A4A\"/>\n      <line x1=\"185\" y1=\"170\" x2=\"308.0\" y2=\"170.0\" stroke=\"#E8704A\" stroke-width=\"3\"/>\n      <text x=\"356.0\" y=\"170.0\" font-size=\"14\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">P</text>\n      <line x1=\"185\" y1=\"170\" x2=\"255.5\" y2=\"69.2\" stroke=\"#E8704A\" stroke-width=\"3\"/>\n      <text x=\"283.1\" y=\"29.9\" font-size=\"14\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">Q</text>\n      <text x=\"185\" y=\"190\" font-size=\"13\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">O</text>\n      </svg>\n    <p><strong>Крок 1:</strong> знайди, з якого БОКУ (праворуч чи ліворуч) лежить нульовий\n    (початковий) промінь кута, який вимірюємо. Тут це промінь OP — він лежить праворуч.</p>\n    <p><strong>Крок 2:</strong> обери шкалу, яка починається з 0 САМЕ з цього боку. Промінь OP\n    праворуч → потрібна шкала, що має 0 праворуч.</p>\n    <p><strong>Крок 3:</strong> прочитай число на другому промені (OQ) за ЦІЄЮ Ж шкалою:\n    тут це <strong>55°</strong> (а не 125° — те число належить іншій шкалі).</p>\n    <div class=\"warn\">⚠️ Найчастіша помилка: прочитати число з НЕПРАВИЛЬНОЇ шкали. Тоді кут\n    виходить «навпаки» — і зазвичай неправильна відповідь у сумі з правильною дає 180°.</div>\n  ",
          "questions": [
            {
              "prompt": "Промінь OQ намальовано на транспортирі (промінь OP лежить уздовж нульової лінії\n        ПРАВОРУЧ).\n        <svg viewBox=\"0 0 370 220\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" style=\"max-width:300px;display:block;margin:10px 0;\">\n      <path d=\"M 60.0 170.0 A 125 125 0 0 1 310.0 170.0 Z\" fill=\"#FDFCF8\" stroke=\"none\"/>\n      <line x1=\"60.0\" y1=\"170\" x2=\"310.0\" y2=\"170\" stroke=\"#1B2A4A\" stroke-width=\"2\"/>\n      <path d=\"M 60.0 170.0 A 125 125 0 0 1 310.0 170.0\" fill=\"none\" stroke=\"#2D9B7C\" stroke-width=\"2.5\"/>\n      <line x1=\"310.0\" y1=\"170.0\" x2=\"296.0\" y2=\"170.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"325.0\" y=\"170.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">0</text>\n      <text x=\"340.0\" y=\"170.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">180</text>\n      <line x1=\"309.5\" y1=\"159.1\" x2=\"302.6\" y2=\"159.7\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"308.1\" y1=\"148.3\" x2=\"294.3\" y2=\"150.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"322.9\" y=\"145.7\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">10</text>\n      <text x=\"337.6\" y=\"143.1\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">170</text>\n      <line x1=\"305.7\" y1=\"137.6\" x2=\"299.0\" y2=\"139.5\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"302.5\" y1=\"127.2\" x2=\"289.3\" y2=\"132.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"316.6\" y=\"122.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">20</text>\n      <text x=\"330.7\" y=\"117.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">160</text>\n      <line x1=\"298.3\" y1=\"117.2\" x2=\"291.9\" y2=\"120.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"293.3\" y1=\"107.5\" x2=\"281.1\" y2=\"114.5\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"306.2\" y=\"100.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">30</text>\n      <text x=\"319.2\" y=\"92.5\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">150</text>\n      <line x1=\"287.4\" y1=\"98.3\" x2=\"281.7\" y2=\"102.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"280.8\" y1=\"89.7\" x2=\"270.0\" y2=\"98.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"292.2\" y=\"80.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">40</text>\n      <text x=\"303.7\" y=\"70.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">140</text>\n      <line x1=\"273.4\" y1=\"81.6\" x2=\"268.4\" y2=\"86.6\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"265.3\" y1=\"74.2\" x2=\"256.3\" y2=\"85.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"275.0\" y=\"62.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">50</text>\n      <text x=\"284.6\" y=\"51.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">130</text>\n      <line x1=\"256.7\" y1=\"67.6\" x2=\"252.7\" y2=\"73.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"247.5\" y1=\"61.7\" x2=\"240.5\" y2=\"73.9\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"255.0\" y=\"48.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">60</text>\n      <text x=\"262.5\" y=\"35.8\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">120</text>\n      <line x1=\"237.8\" y1=\"56.7\" x2=\"234.9\" y2=\"63.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"227.8\" y1=\"52.5\" x2=\"223.0\" y2=\"65.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"232.9\" y=\"38.4\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">70</text>\n      <text x=\"238.0\" y=\"24.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">110</text>\n      <line x1=\"217.4\" y1=\"49.3\" x2=\"215.5\" y2=\"56.0\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"206.7\" y1=\"46.9\" x2=\"204.3\" y2=\"60.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"209.3\" y=\"32.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">80</text>\n      <text x=\"211.9\" y=\"17.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">100</text>\n      <line x1=\"195.9\" y1=\"45.5\" x2=\"195.3\" y2=\"52.4\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"185.0\" y1=\"45.0\" x2=\"185.0\" y2=\"59.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"185.0\" y=\"30.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">90</text>\n      <text x=\"185.0\" y=\"15.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">90</text>\n      <line x1=\"174.1\" y1=\"45.5\" x2=\"174.7\" y2=\"52.4\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"163.3\" y1=\"46.9\" x2=\"165.7\" y2=\"60.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"160.7\" y=\"32.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">100</text>\n      <text x=\"158.1\" y=\"17.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">80</text>\n      <line x1=\"152.6\" y1=\"49.3\" x2=\"154.5\" y2=\"56.0\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"142.2\" y1=\"52.5\" x2=\"147.0\" y2=\"65.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"137.1\" y=\"38.4\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">110</text>\n      <text x=\"132.0\" y=\"24.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">70</text>\n      <line x1=\"132.2\" y1=\"56.7\" x2=\"135.1\" y2=\"63.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"122.5\" y1=\"61.7\" x2=\"129.5\" y2=\"73.9\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"115.0\" y=\"48.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">120</text>\n      <text x=\"107.5\" y=\"35.8\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">60</text>\n      <line x1=\"113.3\" y1=\"67.6\" x2=\"117.3\" y2=\"73.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"104.7\" y1=\"74.2\" x2=\"113.7\" y2=\"85.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"95.0\" y=\"62.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">130</text>\n      <text x=\"85.4\" y=\"51.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">50</text>\n      <line x1=\"96.6\" y1=\"81.6\" x2=\"101.6\" y2=\"86.6\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"89.2\" y1=\"89.7\" x2=\"100.0\" y2=\"98.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"77.8\" y=\"80.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">140</text>\n      <text x=\"66.3\" y=\"70.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">40</text>\n      <line x1=\"82.6\" y1=\"98.3\" x2=\"88.3\" y2=\"102.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"76.7\" y1=\"107.5\" x2=\"88.9\" y2=\"114.5\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"63.8\" y=\"100.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">150</text>\n      <text x=\"50.8\" y=\"92.5\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">30</text>\n      <line x1=\"71.7\" y1=\"117.2\" x2=\"78.1\" y2=\"120.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"67.5\" y1=\"127.2\" x2=\"80.7\" y2=\"132.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"53.4\" y=\"122.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">160</text>\n      <text x=\"39.3\" y=\"117.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">20</text>\n      <line x1=\"64.3\" y1=\"137.6\" x2=\"71.0\" y2=\"139.5\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"61.9\" y1=\"148.3\" x2=\"75.7\" y2=\"150.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"47.1\" y=\"145.7\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">170</text>\n      <text x=\"32.4\" y=\"143.1\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">10</text>\n      <line x1=\"60.5\" y1=\"159.1\" x2=\"67.4\" y2=\"159.7\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"60.0\" y1=\"170.0\" x2=\"74.0\" y2=\"170.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"45.0\" y=\"170.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">180</text>\n      <text x=\"30.0\" y=\"170.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">0</text>\n      <circle cx=\"185\" cy=\"170\" r=\"3.5\" fill=\"#1B2A4A\"/>\n      <line x1=\"185\" y1=\"170\" x2=\"308.0\" y2=\"170.0\" stroke=\"#E8704A\" stroke-width=\"3\"/>\n      <text x=\"356.0\" y=\"170.0\" font-size=\"14\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">P</text>\n      <line x1=\"185\" y1=\"170\" x2=\"227.1\" y2=\"54.4\" stroke=\"#E8704A\" stroke-width=\"3\"/>\n      <text x=\"243.5\" y=\"9.3\" font-size=\"14\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">Q</text>\n      <text x=\"185\" y=\"190\" font-size=\"13\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">O</text>\n      </svg>\n        Яка міра кута POQ?",
              "options": [
                "70°",
                "110°",
                "80°",
                "60°"
              ],
              "correct": 0,
              "explain": {
                "1": "110° — це значення з ІНШОЇ шкали транспортира (тієї, що починається з 0 ліворуч). Промінь OP лежить праворуч, тому читай число з шкали, яка починається з 0 саме праворуч.",
                "2": "Перевір ще раз, на яку саме поділку показує промінь OQ — здається, тут узято сусідню поділку.",
                "3": "Перевір ще раз, на яку саме поділку показує промінь OQ — здається, тут узято поділку в інший бік."
              },
              "solution": "Промінь OP лежить праворуч, отже читаємо шкалу з 0 праворуч: промінь OQ показує 70°."
            },
            {
              "prompt": "Промінь OQ намальовано на транспортирі (промінь OP лежить уздовж нульової лінії\n        ЛІВОРУЧ).\n        <svg viewBox=\"0 0 370 220\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" style=\"max-width:300px;display:block;margin:10px 0;\">\n      <path d=\"M 60.0 170.0 A 125 125 0 0 1 310.0 170.0 Z\" fill=\"#FDFCF8\" stroke=\"none\"/>\n      <line x1=\"60.0\" y1=\"170\" x2=\"310.0\" y2=\"170\" stroke=\"#1B2A4A\" stroke-width=\"2\"/>\n      <path d=\"M 60.0 170.0 A 125 125 0 0 1 310.0 170.0\" fill=\"none\" stroke=\"#2D9B7C\" stroke-width=\"2.5\"/>\n      <line x1=\"310.0\" y1=\"170.0\" x2=\"296.0\" y2=\"170.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"325.0\" y=\"170.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">0</text>\n      <text x=\"340.0\" y=\"170.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">180</text>\n      <line x1=\"309.5\" y1=\"159.1\" x2=\"302.6\" y2=\"159.7\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"308.1\" y1=\"148.3\" x2=\"294.3\" y2=\"150.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"322.9\" y=\"145.7\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">10</text>\n      <text x=\"337.6\" y=\"143.1\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">170</text>\n      <line x1=\"305.7\" y1=\"137.6\" x2=\"299.0\" y2=\"139.5\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"302.5\" y1=\"127.2\" x2=\"289.3\" y2=\"132.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"316.6\" y=\"122.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">20</text>\n      <text x=\"330.7\" y=\"117.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">160</text>\n      <line x1=\"298.3\" y1=\"117.2\" x2=\"291.9\" y2=\"120.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"293.3\" y1=\"107.5\" x2=\"281.1\" y2=\"114.5\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"306.2\" y=\"100.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">30</text>\n      <text x=\"319.2\" y=\"92.5\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">150</text>\n      <line x1=\"287.4\" y1=\"98.3\" x2=\"281.7\" y2=\"102.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"280.8\" y1=\"89.7\" x2=\"270.0\" y2=\"98.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"292.2\" y=\"80.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">40</text>\n      <text x=\"303.7\" y=\"70.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">140</text>\n      <line x1=\"273.4\" y1=\"81.6\" x2=\"268.4\" y2=\"86.6\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"265.3\" y1=\"74.2\" x2=\"256.3\" y2=\"85.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"275.0\" y=\"62.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">50</text>\n      <text x=\"284.6\" y=\"51.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">130</text>\n      <line x1=\"256.7\" y1=\"67.6\" x2=\"252.7\" y2=\"73.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"247.5\" y1=\"61.7\" x2=\"240.5\" y2=\"73.9\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"255.0\" y=\"48.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">60</text>\n      <text x=\"262.5\" y=\"35.8\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">120</text>\n      <line x1=\"237.8\" y1=\"56.7\" x2=\"234.9\" y2=\"63.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"227.8\" y1=\"52.5\" x2=\"223.0\" y2=\"65.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"232.9\" y=\"38.4\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">70</text>\n      <text x=\"238.0\" y=\"24.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">110</text>\n      <line x1=\"217.4\" y1=\"49.3\" x2=\"215.5\" y2=\"56.0\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"206.7\" y1=\"46.9\" x2=\"204.3\" y2=\"60.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"209.3\" y=\"32.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">80</text>\n      <text x=\"211.9\" y=\"17.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">100</text>\n      <line x1=\"195.9\" y1=\"45.5\" x2=\"195.3\" y2=\"52.4\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"185.0\" y1=\"45.0\" x2=\"185.0\" y2=\"59.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"185.0\" y=\"30.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">90</text>\n      <text x=\"185.0\" y=\"15.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">90</text>\n      <line x1=\"174.1\" y1=\"45.5\" x2=\"174.7\" y2=\"52.4\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"163.3\" y1=\"46.9\" x2=\"165.7\" y2=\"60.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"160.7\" y=\"32.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">100</text>\n      <text x=\"158.1\" y=\"17.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">80</text>\n      <line x1=\"152.6\" y1=\"49.3\" x2=\"154.5\" y2=\"56.0\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"142.2\" y1=\"52.5\" x2=\"147.0\" y2=\"65.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"137.1\" y=\"38.4\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">110</text>\n      <text x=\"132.0\" y=\"24.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">70</text>\n      <line x1=\"132.2\" y1=\"56.7\" x2=\"135.1\" y2=\"63.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"122.5\" y1=\"61.7\" x2=\"129.5\" y2=\"73.9\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"115.0\" y=\"48.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">120</text>\n      <text x=\"107.5\" y=\"35.8\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">60</text>\n      <line x1=\"113.3\" y1=\"67.6\" x2=\"117.3\" y2=\"73.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"104.7\" y1=\"74.2\" x2=\"113.7\" y2=\"85.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"95.0\" y=\"62.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">130</text>\n      <text x=\"85.4\" y=\"51.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">50</text>\n      <line x1=\"96.6\" y1=\"81.6\" x2=\"101.6\" y2=\"86.6\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"89.2\" y1=\"89.7\" x2=\"100.0\" y2=\"98.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"77.8\" y=\"80.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">140</text>\n      <text x=\"66.3\" y=\"70.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">40</text>\n      <line x1=\"82.6\" y1=\"98.3\" x2=\"88.3\" y2=\"102.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"76.7\" y1=\"107.5\" x2=\"88.9\" y2=\"114.5\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"63.8\" y=\"100.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">150</text>\n      <text x=\"50.8\" y=\"92.5\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">30</text>\n      <line x1=\"71.7\" y1=\"117.2\" x2=\"78.1\" y2=\"120.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"67.5\" y1=\"127.2\" x2=\"80.7\" y2=\"132.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"53.4\" y=\"122.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">160</text>\n      <text x=\"39.3\" y=\"117.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">20</text>\n      <line x1=\"64.3\" y1=\"137.6\" x2=\"71.0\" y2=\"139.5\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"61.9\" y1=\"148.3\" x2=\"75.7\" y2=\"150.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"47.1\" y=\"145.7\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">170</text>\n      <text x=\"32.4\" y=\"143.1\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">10</text>\n      <line x1=\"60.5\" y1=\"159.1\" x2=\"67.4\" y2=\"159.7\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"60.0\" y1=\"170.0\" x2=\"74.0\" y2=\"170.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"45.0\" y=\"170.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">180</text>\n      <text x=\"30.0\" y=\"170.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">0</text>\n      <circle cx=\"185\" cy=\"170\" r=\"3.5\" fill=\"#1B2A4A\"/>\n      <line x1=\"185\" y1=\"170\" x2=\"62.0\" y2=\"170.0\" stroke=\"#E8704A\" stroke-width=\"3\"/>\n      <text x=\"14.0\" y=\"170.0\" font-size=\"14\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">P</text>\n      <line x1=\"185\" y1=\"170\" x2=\"78.5\" y2=\"108.5\" stroke=\"#E8704A\" stroke-width=\"3\"/>\n      <text x=\"36.9\" y=\"84.5\" font-size=\"14\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">Q</text>\n      <text x=\"185\" y=\"190\" font-size=\"13\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">O</text>\n      </svg>\n        Яка міра кута POQ?",
              "options": [
                "20°",
                "150°",
                "40°",
                "30°"
              ],
              "correct": 3,
              "explain": {
                "0": "Перевір ще раз, на яку саме поділку показує промінь OQ — здається, тут узято поділку в інший бік.",
                "1": "150° — це значення з ІНШОЇ шкали транспортира (тієї, що починається з 0 праворуч). Промінь OP лежить ЛІВОРУЧ, тому читай число з шкали, яка починається з 0 саме ліворуч.",
                "2": "Перевір ще раз, на яку саме поділку показує промінь OQ — здається, тут узято сусідню поділку."
              },
              "solution": "Промінь OP лежить ліворуч, отже читаємо шкалу з 0 ліворуч: промінь OQ показує 30°."
            },
            {
              "prompt": "Промінь ON намальовано на транспортирі (промінь OM лежить уздовж нульової лінії\n        ПРАВОРУЧ).\n        <svg viewBox=\"0 0 370 220\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" style=\"max-width:300px;display:block;margin:10px 0;\">\n      <path d=\"M 60.0 170.0 A 125 125 0 0 1 310.0 170.0 Z\" fill=\"#FDFCF8\" stroke=\"none\"/>\n      <line x1=\"60.0\" y1=\"170\" x2=\"310.0\" y2=\"170\" stroke=\"#1B2A4A\" stroke-width=\"2\"/>\n      <path d=\"M 60.0 170.0 A 125 125 0 0 1 310.0 170.0\" fill=\"none\" stroke=\"#2D9B7C\" stroke-width=\"2.5\"/>\n      <line x1=\"310.0\" y1=\"170.0\" x2=\"296.0\" y2=\"170.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"325.0\" y=\"170.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">0</text>\n      <text x=\"340.0\" y=\"170.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">180</text>\n      <line x1=\"309.5\" y1=\"159.1\" x2=\"302.6\" y2=\"159.7\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"308.1\" y1=\"148.3\" x2=\"294.3\" y2=\"150.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"322.9\" y=\"145.7\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">10</text>\n      <text x=\"337.6\" y=\"143.1\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">170</text>\n      <line x1=\"305.7\" y1=\"137.6\" x2=\"299.0\" y2=\"139.5\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"302.5\" y1=\"127.2\" x2=\"289.3\" y2=\"132.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"316.6\" y=\"122.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">20</text>\n      <text x=\"330.7\" y=\"117.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">160</text>\n      <line x1=\"298.3\" y1=\"117.2\" x2=\"291.9\" y2=\"120.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"293.3\" y1=\"107.5\" x2=\"281.1\" y2=\"114.5\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"306.2\" y=\"100.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">30</text>\n      <text x=\"319.2\" y=\"92.5\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">150</text>\n      <line x1=\"287.4\" y1=\"98.3\" x2=\"281.7\" y2=\"102.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"280.8\" y1=\"89.7\" x2=\"270.0\" y2=\"98.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"292.2\" y=\"80.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">40</text>\n      <text x=\"303.7\" y=\"70.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">140</text>\n      <line x1=\"273.4\" y1=\"81.6\" x2=\"268.4\" y2=\"86.6\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"265.3\" y1=\"74.2\" x2=\"256.3\" y2=\"85.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"275.0\" y=\"62.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">50</text>\n      <text x=\"284.6\" y=\"51.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">130</text>\n      <line x1=\"256.7\" y1=\"67.6\" x2=\"252.7\" y2=\"73.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"247.5\" y1=\"61.7\" x2=\"240.5\" y2=\"73.9\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"255.0\" y=\"48.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">60</text>\n      <text x=\"262.5\" y=\"35.8\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">120</text>\n      <line x1=\"237.8\" y1=\"56.7\" x2=\"234.9\" y2=\"63.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"227.8\" y1=\"52.5\" x2=\"223.0\" y2=\"65.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"232.9\" y=\"38.4\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">70</text>\n      <text x=\"238.0\" y=\"24.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">110</text>\n      <line x1=\"217.4\" y1=\"49.3\" x2=\"215.5\" y2=\"56.0\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"206.7\" y1=\"46.9\" x2=\"204.3\" y2=\"60.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"209.3\" y=\"32.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">80</text>\n      <text x=\"211.9\" y=\"17.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">100</text>\n      <line x1=\"195.9\" y1=\"45.5\" x2=\"195.3\" y2=\"52.4\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"185.0\" y1=\"45.0\" x2=\"185.0\" y2=\"59.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"185.0\" y=\"30.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">90</text>\n      <text x=\"185.0\" y=\"15.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">90</text>\n      <line x1=\"174.1\" y1=\"45.5\" x2=\"174.7\" y2=\"52.4\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"163.3\" y1=\"46.9\" x2=\"165.7\" y2=\"60.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"160.7\" y=\"32.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">100</text>\n      <text x=\"158.1\" y=\"17.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">80</text>\n      <line x1=\"152.6\" y1=\"49.3\" x2=\"154.5\" y2=\"56.0\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"142.2\" y1=\"52.5\" x2=\"147.0\" y2=\"65.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"137.1\" y=\"38.4\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">110</text>\n      <text x=\"132.0\" y=\"24.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">70</text>\n      <line x1=\"132.2\" y1=\"56.7\" x2=\"135.1\" y2=\"63.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"122.5\" y1=\"61.7\" x2=\"129.5\" y2=\"73.9\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"115.0\" y=\"48.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">120</text>\n      <text x=\"107.5\" y=\"35.8\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">60</text>\n      <line x1=\"113.3\" y1=\"67.6\" x2=\"117.3\" y2=\"73.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"104.7\" y1=\"74.2\" x2=\"113.7\" y2=\"85.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"95.0\" y=\"62.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">130</text>\n      <text x=\"85.4\" y=\"51.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">50</text>\n      <line x1=\"96.6\" y1=\"81.6\" x2=\"101.6\" y2=\"86.6\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"89.2\" y1=\"89.7\" x2=\"100.0\" y2=\"98.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"77.8\" y=\"80.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">140</text>\n      <text x=\"66.3\" y=\"70.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">40</text>\n      <line x1=\"82.6\" y1=\"98.3\" x2=\"88.3\" y2=\"102.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"76.7\" y1=\"107.5\" x2=\"88.9\" y2=\"114.5\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"63.8\" y=\"100.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">150</text>\n      <text x=\"50.8\" y=\"92.5\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">30</text>\n      <line x1=\"71.7\" y1=\"117.2\" x2=\"78.1\" y2=\"120.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"67.5\" y1=\"127.2\" x2=\"80.7\" y2=\"132.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"53.4\" y=\"122.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">160</text>\n      <text x=\"39.3\" y=\"117.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">20</text>\n      <line x1=\"64.3\" y1=\"137.6\" x2=\"71.0\" y2=\"139.5\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"61.9\" y1=\"148.3\" x2=\"75.7\" y2=\"150.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"47.1\" y=\"145.7\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">170</text>\n      <text x=\"32.4\" y=\"143.1\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">10</text>\n      <line x1=\"60.5\" y1=\"159.1\" x2=\"67.4\" y2=\"159.7\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"60.0\" y1=\"170.0\" x2=\"74.0\" y2=\"170.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"45.0\" y=\"170.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">180</text>\n      <text x=\"30.0\" y=\"170.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">0</text>\n      <circle cx=\"185\" cy=\"170\" r=\"3.5\" fill=\"#1B2A4A\"/>\n      <line x1=\"185\" y1=\"170\" x2=\"308.0\" y2=\"170.0\" stroke=\"#E8704A\" stroke-width=\"3\"/>\n      <text x=\"356.0\" y=\"170.0\" font-size=\"14\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">M</text>\n      <line x1=\"185\" y1=\"170\" x2=\"279.2\" y2=\"90.9\" stroke=\"#E8704A\" stroke-width=\"3\"/>\n      <text x=\"316.0\" y=\"60.1\" font-size=\"14\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">N</text>\n      <text x=\"185\" y=\"190\" font-size=\"13\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">O</text>\n      </svg>\n        Яка міра кута MON?",
              "options": [
                "40°",
                "50°",
                "30°",
                "140°"
              ],
              "correct": 0,
              "explain": {
                "1": "Перевір ще раз, на яку саме поділку показує промінь ON — здається, тут узято сусідню поділку.",
                "2": "Перевір ще раз, на яку саме поділку показує промінь ON — здається, тут узято поділку в інший бік.",
                "3": "140° — це значення з ІНШОЇ шкали транспортира (тієї, що починається з 0 ліворуч). Промінь OM лежить праворуч, тому читай число з шкали, яка починається з 0 саме праворуч."
              },
              "solution": "Промінь OM лежить праворуч, отже читаємо шкалу з 0 праворуч: промінь ON показує 40°."
            },
            {
              "prompt": "Промінь ON намальовано на транспортирі (промінь OM лежить уздовж нульової лінії\n        ЛІВОРУЧ).\n        <svg viewBox=\"0 0 370 220\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" style=\"max-width:300px;display:block;margin:10px 0;\">\n      <path d=\"M 60.0 170.0 A 125 125 0 0 1 310.0 170.0 Z\" fill=\"#FDFCF8\" stroke=\"none\"/>\n      <line x1=\"60.0\" y1=\"170\" x2=\"310.0\" y2=\"170\" stroke=\"#1B2A4A\" stroke-width=\"2\"/>\n      <path d=\"M 60.0 170.0 A 125 125 0 0 1 310.0 170.0\" fill=\"none\" stroke=\"#2D9B7C\" stroke-width=\"2.5\"/>\n      <line x1=\"310.0\" y1=\"170.0\" x2=\"296.0\" y2=\"170.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"325.0\" y=\"170.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">0</text>\n      <text x=\"340.0\" y=\"170.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">180</text>\n      <line x1=\"309.5\" y1=\"159.1\" x2=\"302.6\" y2=\"159.7\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"308.1\" y1=\"148.3\" x2=\"294.3\" y2=\"150.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"322.9\" y=\"145.7\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">10</text>\n      <text x=\"337.6\" y=\"143.1\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">170</text>\n      <line x1=\"305.7\" y1=\"137.6\" x2=\"299.0\" y2=\"139.5\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"302.5\" y1=\"127.2\" x2=\"289.3\" y2=\"132.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"316.6\" y=\"122.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">20</text>\n      <text x=\"330.7\" y=\"117.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">160</text>\n      <line x1=\"298.3\" y1=\"117.2\" x2=\"291.9\" y2=\"120.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"293.3\" y1=\"107.5\" x2=\"281.1\" y2=\"114.5\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"306.2\" y=\"100.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">30</text>\n      <text x=\"319.2\" y=\"92.5\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">150</text>\n      <line x1=\"287.4\" y1=\"98.3\" x2=\"281.7\" y2=\"102.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"280.8\" y1=\"89.7\" x2=\"270.0\" y2=\"98.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"292.2\" y=\"80.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">40</text>\n      <text x=\"303.7\" y=\"70.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">140</text>\n      <line x1=\"273.4\" y1=\"81.6\" x2=\"268.4\" y2=\"86.6\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"265.3\" y1=\"74.2\" x2=\"256.3\" y2=\"85.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"275.0\" y=\"62.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">50</text>\n      <text x=\"284.6\" y=\"51.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">130</text>\n      <line x1=\"256.7\" y1=\"67.6\" x2=\"252.7\" y2=\"73.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"247.5\" y1=\"61.7\" x2=\"240.5\" y2=\"73.9\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"255.0\" y=\"48.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">60</text>\n      <text x=\"262.5\" y=\"35.8\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">120</text>\n      <line x1=\"237.8\" y1=\"56.7\" x2=\"234.9\" y2=\"63.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"227.8\" y1=\"52.5\" x2=\"223.0\" y2=\"65.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"232.9\" y=\"38.4\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">70</text>\n      <text x=\"238.0\" y=\"24.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">110</text>\n      <line x1=\"217.4\" y1=\"49.3\" x2=\"215.5\" y2=\"56.0\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"206.7\" y1=\"46.9\" x2=\"204.3\" y2=\"60.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"209.3\" y=\"32.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">80</text>\n      <text x=\"211.9\" y=\"17.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">100</text>\n      <line x1=\"195.9\" y1=\"45.5\" x2=\"195.3\" y2=\"52.4\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"185.0\" y1=\"45.0\" x2=\"185.0\" y2=\"59.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"185.0\" y=\"30.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">90</text>\n      <text x=\"185.0\" y=\"15.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">90</text>\n      <line x1=\"174.1\" y1=\"45.5\" x2=\"174.7\" y2=\"52.4\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"163.3\" y1=\"46.9\" x2=\"165.7\" y2=\"60.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"160.7\" y=\"32.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">100</text>\n      <text x=\"158.1\" y=\"17.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">80</text>\n      <line x1=\"152.6\" y1=\"49.3\" x2=\"154.5\" y2=\"56.0\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"142.2\" y1=\"52.5\" x2=\"147.0\" y2=\"65.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"137.1\" y=\"38.4\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">110</text>\n      <text x=\"132.0\" y=\"24.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">70</text>\n      <line x1=\"132.2\" y1=\"56.7\" x2=\"135.1\" y2=\"63.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"122.5\" y1=\"61.7\" x2=\"129.5\" y2=\"73.9\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"115.0\" y=\"48.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">120</text>\n      <text x=\"107.5\" y=\"35.8\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">60</text>\n      <line x1=\"113.3\" y1=\"67.6\" x2=\"117.3\" y2=\"73.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"104.7\" y1=\"74.2\" x2=\"113.7\" y2=\"85.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"95.0\" y=\"62.8\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">130</text>\n      <text x=\"85.4\" y=\"51.3\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">50</text>\n      <line x1=\"96.6\" y1=\"81.6\" x2=\"101.6\" y2=\"86.6\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"89.2\" y1=\"89.7\" x2=\"100.0\" y2=\"98.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"77.8\" y=\"80.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">140</text>\n      <text x=\"66.3\" y=\"70.4\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">40</text>\n      <line x1=\"82.6\" y1=\"98.3\" x2=\"88.3\" y2=\"102.3\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"76.7\" y1=\"107.5\" x2=\"88.9\" y2=\"114.5\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"63.8\" y=\"100.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">150</text>\n      <text x=\"50.8\" y=\"92.5\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">30</text>\n      <line x1=\"71.7\" y1=\"117.2\" x2=\"78.1\" y2=\"120.1\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"67.5\" y1=\"127.2\" x2=\"80.7\" y2=\"132.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"53.4\" y=\"122.1\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">160</text>\n      <text x=\"39.3\" y=\"117.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">20</text>\n      <line x1=\"64.3\" y1=\"137.6\" x2=\"71.0\" y2=\"139.5\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"61.9\" y1=\"148.3\" x2=\"75.7\" y2=\"150.7\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"47.1\" y=\"145.7\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">170</text>\n      <text x=\"32.4\" y=\"143.1\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">10</text>\n      <line x1=\"60.5\" y1=\"159.1\" x2=\"67.4\" y2=\"159.7\" stroke=\"#1B2A4A\" stroke-width=\"0.8\"/>\n      <line x1=\"60.0\" y1=\"170.0\" x2=\"74.0\" y2=\"170.0\" stroke=\"#1B2A4A\" stroke-width=\"1.4\"/>\n      <text x=\"45.0\" y=\"170.0\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">180</text>\n      <text x=\"30.0\" y=\"170.0\" font-size=\"9\" fill=\"#8a8a8a\" text-anchor=\"middle\">0</text>\n      <circle cx=\"185\" cy=\"170\" r=\"3.5\" fill=\"#1B2A4A\"/>\n      <line x1=\"185\" y1=\"170\" x2=\"62.0\" y2=\"170.0\" stroke=\"#E8704A\" stroke-width=\"3\"/>\n      <text x=\"14.0\" y=\"170.0\" font-size=\"14\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">M</text>\n      <line x1=\"185\" y1=\"170\" x2=\"69.4\" y2=\"127.9\" stroke=\"#E8704A\" stroke-width=\"3\"/>\n      <text x=\"24.3\" y=\"111.5\" font-size=\"14\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">N</text>\n      <text x=\"185\" y=\"190\" font-size=\"13\" font-weight=\"700\" fill=\"#1B2A4A\" text-anchor=\"middle\">O</text>\n      </svg>\n        Яка міра кута MON?",
              "options": [
                "160°",
                "20°",
                "30°",
                "10°"
              ],
              "correct": 1,
              "explain": {
                "0": "160° — це значення з ІНШОЇ шкали транспортира (тієї, що починається з 0 праворуч). Промінь OM лежить ЛІВОРУЧ, тому читай число з шкали, яка починається з 0 саме ліворуч.",
                "2": "Перевір ще раз, на яку саме поділку показує промінь ON — здається, тут узято сусідню поділку.",
                "3": "Перевір ще раз, на яку саме поділку показує промінь ON — здається, тут узято поділку в інший бік."
              },
              "solution": "Промінь OM лежить ліворуч, отже читаємо шкалу з 0 ліворуч: промінь ON показує 20°."
            }
          ]
        }
      ]
    },
    {
      "id": "day5",
      "tag": "Зупинка 5",
      "title": "Десяткові дроби і правила чисел",
      "topics": [
        {
          "id": "d5t1",
          "title": "Десяткові дроби та розрядне значення",
          "subtitle": "Переклад між дробом, мішаним числом і десятковим записом",
          "reference": "\n    <p><strong>Розряди після коми</strong> — кожна цифра після коми має свою назву і своє\n    значення:</p>\n    <table style=\"border-collapse:collapse;margin:12px 0;font-family:'Inter',sans-serif;font-size:14px;width:100%;\">\n      <thead>\n        <tr>\n          <th style=\"padding:8px 14px;border-bottom:2px solid #1B2A4A;text-align:left;\">Розряд</th>\n          <th style=\"padding:8px 14px;border-bottom:2px solid #1B2A4A;text-align:left;\">Що означає</th>\n          <th style=\"padding:8px 14px;border-bottom:2px solid #1B2A4A;text-align:left;\">Приклад</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td style=\"padding:7px 14px;\">1-ша цифра після коми — <strong>десяті</strong></td><td style=\"padding:7px 14px;\">1/10 (одна десята)</td><td style=\"padding:7px 14px;\">0.1</td></tr>\n        <tr><td style=\"padding:7px 14px;\">2-га цифра після коми — <strong>соті</strong></td><td style=\"padding:7px 14px;\">1/100 (одна сота)</td><td style=\"padding:7px 14px;\">0.01</td></tr>\n        <tr><td style=\"padding:7px 14px;\">3-тя цифра після коми — <strong>тисячні</strong></td><td style=\"padding:7px 14px;\">1/1000 (одна тисячна)</td><td style=\"padding:7px 14px;\">0.001</td></tr>\n      </tbody>\n    </table>\n    <p>Увага: слова «сотні» (розряд ВЕЛИКИХ чисел, наприклад 300) і «соті» (розряд МАЛЕНЬКОЇ\n    частки після коми, наприклад 0.03) звучать схоже, але означають зовсім різні речі.</p>\n  ",
          "theory": "\n    <p><strong>Приклад 1 (дріб → десятковий запис).</strong> Перетвори 27/10 у десятковий запис.</p>\n    <p>Крок 1: 27/10 означає «27 десятих».</p>\n    <p>Крок 2: 27 десятих = 2 цілих (20 десятих) і ще 7 десятих.</p>\n    <p>Крок 3: як десятковий запис — <strong>2.7</strong>.</p>\n    <p><strong>Приклад 2 (десятковий запис → мішане число, соті).</strong> Перетвори 23.08 у\n    мішане число.</p>\n    <p>Крок 1: ціла частина числа — 23.</p>\n    <p>Крок 2: дробова частина .08 означає «8 сотих» (друга цифра після коми — розряд сотих),\n    тобто 8/100.</p>\n    <p>Крок 3: мішане число: <strong>23 8/100</strong>.</p>\n    <p><strong>Приклад 3 (десятковий запис → мішане число, тисячні).</strong> Перетвори 4.017 у\n    мішане число.</p>\n    <p>Крок 1: ціла частина числа — 4.</p>\n    <p>Крок 2: дробова частина .017 має ТРИ цифри після коми — це розряд тисячних, тобто 17/1000.</p>\n    <p>Крок 3: мішане число: <strong>4 17/1000</strong>.</p>\n    <div class=\"warn\">⚠️ Найчастіші помилки: (1) переплутати розряд десятих, сотих і тисячних —\n    кількість цифр після коми підказує розряд (0.8 ≠ 0.08 ≠ 0.008!); (2) переставити місцями цілу\n    частину і дріб; (3) переплутати «сотні» (велике число) із «сотими» (маленька частка після\n    коми) — це геть різні розряди.</div>\n  ",
          "questions": [
            {
              "prompt": "Яке десяткове число еквівалентне 27/10?",
              "options": [
                "0.27",
                "2.7",
                "27.0",
                "2.07"
              ],
              "correct": 1,
              "explain": {
                "0": "Перевір розташування коми — подумай, скільки цілих одиниць міститься у 27 десятих, перш ніж записувати кому.",
                "2": "27/10 — це не ціле число 27, а 27 частин по одній десятій кожна. Подумай, скільки цілих виходить із 27 десятих.",
                "3": "Перевір, у який розряд потрапляє цифра 7 — тут вона має стояти в розряді десятих, а не сотих."
              },
              "solution": "27/10 = 27 десятих = 2 цілих і 7 десятих = 2.7."
            },
            {
              "prompt": "Яке мішане число еквівалентне 6.045?",
              "options": [
                "6 45/100",
                "6 450/1000",
                "45 6/1000",
                "6 45/1000"
              ],
              "correct": 3,
              "explain": {
                "0": "45/100 означає 0.45 — а це не те саме, що 0.045. Порахуй, скільки цифр стоїть після коми у числі 6.045, і який розряд це визначає.",
                "1": "6 450/1000 означає 6.450, а не 6.045 — тут дріб має на одну цифру більше, ніж потрібно.",
                "2": "Тут переставлено місцями цілу частину і дріб. Подивись на запис 6.045 ще раз: яка з двох частин (до коми чи після) є цілою?"
              },
              "solution": "6.045: ціла частина — 6, дробова частина .045 має три цифри після коми — це 45 тисячних, тобто 45/1000. Мішане число: 6 45/1000."
            },
            {
              "prompt": "Дощомір показав 5 цілих і двадцять три сотих сантиметра опадів (5.23 см). Яке значення цифри в розряді десятих?",
              "options": [
                "2",
                "0.02",
                "0.2",
                "0.3"
              ],
              "correct": 2,
              "explain": {
                "0": "2 — це сама цифра, а питання запитує про її ЗНАЧЕННЯ в цьому розряді (тобто скільки десятих вона означає), а не просто назву цифри.",
                "1": "0.02 — це значення цифри в розряді СОТИХ (друга цифра після коми), а питання запитує про розряд ДЕСЯТИХ (перша цифра після коми).",
                "3": "Перевір ще раз, яка саме цифра стоїть одразу після коми (у розряді десятих) — здається, тут узято іншу цифру."
              },
              "solution": "У числі 5.23 цифра в розряді десятих — це 2, отже її значення: 0.2 (дві десятих)."
            },
            {
              "prompt": "Точка J позначена на числовій прямій.\n        <svg viewBox=\"0 0 300 70\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:280px;display:block;margin:10px 0;\">\n          <line x1=\"20\" y1=\"35\" x2=\"280\" y2=\"35\" stroke=\"#1B2A4A\" stroke-width=\"2\"/>\n          <line x1=\"20\" y1=\"28\" x2=\"20\" y2=\"42\" stroke=\"#1B2A4A\" stroke-width=\"2\"/>\n          <line x1=\"46\" y1=\"30\" x2=\"46\" y2=\"40\" stroke=\"#1B2A4A\" stroke-width=\"1\"/>\n          <line x1=\"72\" y1=\"30\" x2=\"72\" y2=\"40\" stroke=\"#1B2A4A\" stroke-width=\"1\"/>\n          <line x1=\"98\" y1=\"30\" x2=\"98\" y2=\"40\" stroke=\"#1B2A4A\" stroke-width=\"1\"/>\n          <line x1=\"124\" y1=\"30\" x2=\"124\" y2=\"40\" stroke=\"#1B2A4A\" stroke-width=\"1\"/>\n          <line x1=\"150\" y1=\"28\" x2=\"150\" y2=\"42\" stroke=\"#1B2A4A\" stroke-width=\"2\"/>\n          <line x1=\"176\" y1=\"30\" x2=\"176\" y2=\"40\" stroke=\"#1B2A4A\" stroke-width=\"1\"/>\n          <line x1=\"202\" y1=\"30\" x2=\"202\" y2=\"40\" stroke=\"#1B2A4A\" stroke-width=\"1\"/>\n          <line x1=\"228\" y1=\"30\" x2=\"228\" y2=\"40\" stroke=\"#1B2A4A\" stroke-width=\"1\"/>\n          <line x1=\"254\" y1=\"30\" x2=\"254\" y2=\"40\" stroke=\"#1B2A4A\" stroke-width=\"1\"/>\n          <line x1=\"280\" y1=\"28\" x2=\"280\" y2=\"42\" stroke=\"#1B2A4A\" stroke-width=\"2\"/>\n          <circle cx=\"228\" cy=\"35\" r=\"4.5\" fill=\"#E8704A\"/>\n          <text x=\"228\" y=\"20\" font-size=\"14\" fill=\"#1B2A4A\" text-anchor=\"middle\" font-weight=\"700\">J</text>\n          <text x=\"20\" y=\"58\" font-size=\"13\" fill=\"#1B2A4A\" text-anchor=\"middle\">3</text>\n          <text x=\"150\" y=\"58\" font-size=\"13\" fill=\"#1B2A4A\" text-anchor=\"middle\">4</text>\n          <text x=\"280\" y=\"58\" font-size=\"13\" fill=\"#1B2A4A\" text-anchor=\"middle\">5</text>\n        </svg>\n        Яке число представляє точка J?",
              "options": [
                "4.06",
                "4.6",
                "4.8",
                "3.6"
              ],
              "correct": 1,
              "explain": {
                "0": "Перевір розташування коми — точка лежить трохи правіше середини між 3 і 5, це не соті частки, а десяті.",
                "2": "Перевір ще раз, на яку саме поділку вказує точка J — здається, тут узято сусідню поділку.",
                "3": "Перевір, від якої позначки рахуємо — здається, тут переплутано кількість поділок від лівого краю."
              },
              "solution": "Відстань між 3 і 5 поділена на 10 рівних частин по 0.2 кожна. Точка J стоїть на 8-й поділці від 3, тобто 3 + 8×0.2 = 4.6."
            },
            {
              "prompt": "Валентина записала число:\n        <ul>\n          <li>Цифра в розряді <strong>тисяч</strong> — 5.</li>\n          <li>Цифра в розряді <strong>сотень</strong> — 2.</li>\n          <li>Цифра в розряді <strong>сотих</strong> (не сотень!) — 9.</li>\n        </ul>\n        Яке число могла записати Валентина?",
              "options": [
                "12547.29",
                "15947.22",
                "15247.92",
                "15247.29"
              ],
              "correct": 3,
              "explain": {
                "0": "Тут переплутано місцями цифру розряду тисяч і розряду сотень — 5 має стояти в розряді тисяч, а 2 — у розряді сотень, а не навпаки.",
                "1": "Слова «сотень» і «сотих» звучать схоже, але це РІЗНІ розряди: сотні — розряд великого цілого числа, соті — маленька частка після коми. Тут цифри 9 і 2 переплутані місцями саме через цю схожість слів.",
                "2": "Тут цифра 9 стоїть у розряді ДЕСЯТИХ (перша цифра після коми), а вона мала бути в розряді СОТИХ (друга цифра після коми)."
              },
              "solution": "Число 15247.29: 5 стоїть у розряді тисяч, 2 — у розряді сотень, а 9 — у розряді сотих (друга цифра після коми)."
            }
          ]
        },
        {
          "id": "d5t2",
          "title": "Правило \"машини чисел\": вхід і вихід",
          "subtitle": "Різниця між сусідніми виходами — це не саме правило",
          "reference": "\n    <p><strong>\"Машина чисел\"</strong> — це таблиця, яка показує, що відбувається з числом\n    (входом), коли до нього застосовують якесь ПРАВИЛО, і виходить нове число (вихід).</p>\n    <p>Правило може бути додаванням (вхід+8), відніманням, множенням (вхід×6) або поєднанням\n    кількох дій.</p>\n  ",
          "theory": "\n    <p>Приклад:</p>\n    <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:15px;\">\n      <thead><tr>\n        <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вхід</th>\n        <th style=\"padding:6px 10px;border-bottom:2px solid #1B2A4A;\"></th>\n        <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вихід</th>\n      </tr></thead>\n      <tbody>\n        <tr><td style=\"padding:5px 24px;text-align:center;\">1</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">9</td></tr>\n        <tr><td style=\"padding:5px 24px;text-align:center;\">2</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">10</td></tr>\n        <tr><td style=\"padding:5px 24px;text-align:center;\">3</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">11</td></tr>\n        <tr><td style=\"padding:5px 24px;text-align:center;\">4</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">12</td></tr>\n      </tbody>\n    </table>\n    <p>Часто здається: раз кожен вихід більший за попередній лише на 1, то правило — «+1».\n    Це ПОМИЛКА: різниця МІЖ сусідніми виходами — не те саме, що правило, яке зв'язує ВХІД і\n    ВИХІД у ТОМУ Ж рядку.</p>\n    <p><strong>Крок 1:</strong> перевір перший рядок: Вхід 1, Вихід 9. Яке число треба додати\n    до 1, щоб отримати 9? 9 − 1 = 8.</p>\n    <p><strong>Крок 2:</strong> перевір ще один рядок: Вхід 2, Вихід 10. 10 − 2 = 8. Співпадає!</p>\n    <p><strong>Крок 3:</strong> правило — <strong>вихід = вхід + 8</strong> (а не +1, хоча\n    сусідні виходи й відрізняються лише на 1).</p>\n    <p>Правило також може бути множенням:</p>\n    <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:15px;\">\n      <thead><tr>\n        <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вхід</th>\n        <th style=\"padding:6px 10px;border-bottom:2px solid #1B2A4A;\"></th>\n        <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вихід</th>\n      </tr></thead>\n      <tbody>\n        <tr><td style=\"padding:5px 24px;text-align:center;\">1</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">6</td></tr>\n        <tr><td style=\"padding:5px 24px;text-align:center;\">2</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">12</td></tr>\n        <tr><td style=\"padding:5px 24px;text-align:center;\">3</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">18</td></tr>\n        <tr><td style=\"padding:5px 24px;text-align:center;\">4</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">24</td></tr>\n      </tbody>\n    </table>\n    <p>Перевір: 6÷1=6, 12÷2=6, 18÷3=6 — правило: <strong>вихід = вхід × 6</strong>.</p>\n    <div class=\"warn\">⚠️ Найчастіша помилка: подивитись лише на те, наскільки виходи\n    відрізняються один від одного, і вирішити, що це і є правило. Завжди перевіряй зв'язок МІЖ\n    входом і виходом У ТОМУ Ж рядку, і перевіряй правило на КІЛЬКОХ рядках одразу.</div>\n  ",
          "questions": [
            {
              "prompt": "Таблиця показує залежність між входом і виходом.\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:15px;\">\n          <thead><tr>\n            <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вхід</th>\n            <th style=\"padding:6px 10px;border-bottom:2px solid #1B2A4A;\"></th>\n            <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вихід</th>\n          </tr></thead>\n          <tbody>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">1</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">23</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">2</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">24</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">3</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">25</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">4</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">26</td></tr>\n          </tbody>\n        </table>\n        Яке правило зв'язує вхід і вихід?",
              "options": [
                "вхід × 23",
                "вхід × 6",
                "вхід + 1",
                "вхід + 22"
              ],
              "correct": 3,
              "explain": {
                "0": "Перевір цю відповідь на кількох рядках: 1×23=23 (підходить), але 2×23=46 (а має бути 24) — не співпадає.",
                "1": "Перевір цю відповідь на кількох рядках: 1×6=6 (а має бути 23) — не співпадає.",
                "2": "+1 — це різниця МІЖ сусідніми виходами (23,24,25,26), а не правило, яке зв'язує вхід і вихід у ТОМУ Ж рядку. Перевір: 23 − 1 = ?, це не 1."
              },
              "solution": "Перевір кожен рядок: 23−1=22, 24−2=22, 25−3=22, 26−4=22. Правило: вихід = вхід + 22."
            },
            {
              "prompt": "Таблиця показує залежність числа від його позиції.\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:15px;\">\n          <thead><tr>\n            <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вхід (позиція)</th>\n            <th style=\"padding:6px 10px;border-bottom:2px solid #1B2A4A;\"></th>\n            <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вихід (число)</th>\n          </tr></thead>\n          <tbody>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">1</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">13</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">2</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">26</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">3</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">39</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">4</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">52</td></tr>\n          </tbody>\n        </table>\n        Який набір виразів показує правило для цієї таблиці?",
              "options": [
                "1+13, 2+13, 3+13, 4+13",
                "1×13, 2×13, 3×13, 4×13",
                "13×13, 13×13, 13×13, 13×13",
                "1×13, 2×13, 3×13, 4×14"
              ],
              "correct": 1,
              "explain": {
                "0": "Різниця МІЖ сусідніми виходами тут справді дорівнює 13, але це не те саме, що правило «додати 13 до позиції» — перевір цей вираз на позиції 1: 1+13=14, а потрібно отримати 13.",
                "2": "Цей вираз використовує те саме число (13) для КОЖНОЇ позиції, ігноруючи саму позицію — перевір, чи справді 13×13 дає значення з рядка для позиції 1 (13).",
                "3": "Перевір останній рядок окремо: 4×14 = 56, а в таблиці для позиції 4 має вийти 52."
              },
              "solution": "Перевір кожен рядок множенням: 1×13=13, 2×13=26, 3×13=39, 4×13=52 — усі співпадають. Правило: вихід = позиція × 13."
            },
            {
              "prompt": "Таблиця показує залежність між кількістю метрів і кількістю сантиметрів.\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:15px;\">\n          <thead><tr>\n            <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вхід (метри)</th>\n            <th style=\"padding:6px 10px;border-bottom:2px solid #1B2A4A;\"></th>\n            <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вихід (см)</th>\n          </tr></thead>\n          <tbody>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">1</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">100</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">2</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">200</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">3</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">300</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">5</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">500</td></tr>\n          </tbody>\n        </table>\n        Марина пофарбувала паркан завдовжки 9 метрів. Яка довжина паркану в сантиметрах?",
              "options": [
                "90",
                "109",
                "900",
                "800"
              ],
              "correct": 2,
              "explain": {
                "0": "90 — це так, ніби один метр дорівнює лише 10 см. Перевір таблицю ще раз: скільки сантиметрів відповідає, наприклад, 2 метрам?",
                "1": "109 виглядає так, ніби до 9 просто додали 100 — але правило тут МНОЖЕННЯ (кожен метр = 100 см), а не додавання одного й того самого числа.",
                "3": "Перевір множення ще раз: 9 метрів, і кожен метр — це 100 см. Порахуй 9×100 уважно."
              },
              "solution": "З таблиці видно: кожен метр = 100 см (правило: см = метри × 100). Для 9 метрів: 9×100 = 900 см."
            },
            {
              "prompt": "Таблиця показує залежність між позицією числа в послідовності і його значенням.\n        <table style=\"border-collapse:collapse;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:15px;\">\n          <thead><tr>\n            <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вхід (позиція)</th>\n            <th style=\"padding:6px 10px;border-bottom:2px solid #1B2A4A;\"></th>\n            <th style=\"padding:6px 24px;border-bottom:2px solid #1B2A4A;\">Вихід (значення)</th>\n          </tr></thead>\n          <tbody>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">1</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">5</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">2</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">9</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">3</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">13</td></tr>\n            <tr><td style=\"padding:5px 24px;text-align:center;\">4</td><td style=\"text-align:center;color:#2D9B7C;\">→</td><td style=\"padding:5px 24px;text-align:center;\">17</td></tr>\n          </tbody>\n        </table>\n        Яке число буде значенням для позиції 6, якщо правило зберігається?",
              "options": [
                "21",
                "29",
                "25",
                "24"
              ],
              "correct": 2,
              "explain": {
                "0": "21 — це значення для ПОЗИЦІЇ 5 (17+4=21), а питання запитує про позицію 6 — потрібно застосувати правило ще на один крок далі.",
                "1": "Перевір, для якої саме позиції виходить це значення — здається, тут порахована позиція 7, а не 6.",
                "3": "Тут враховано лише множення (4×6=24), але забуто додати сталу частину правила (+1)."
              },
              "solution": "Правило: значення = 4 × позиція + 1 (перевір: 4×1+1=5, 4×2+1=9 — співпадає). Для позиції 6: 4×6+1 = 25."
            }
          ]
        }
      ]
    }
  ]
};
