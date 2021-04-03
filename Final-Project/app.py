import requests
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def render_data():
    data = calling_api()
    temp = "{0:.2f}".format(data["main"]["temp"])
    weather = data["weather"][0]["main"]
    location = data["name"]
    return render_template('index.html',location=location, temp=temp,weather=weather)

# Getting the coords (longtitude, latitude)
def coords ():
    res = requests.get('https://ipinfo.io/')
    data = res.json()
    location = data['loc'].split(',')
    global lon
    lon = location[1]
    global lat
    lat = location[0]
    return lon,lat

#print(coords())

# Setting the api Key
global api_key
api_key = "d7fdb3a38e99d1719406cb5c9c34a740"

coords()
# Calling the api an storing the data in JSON Format
def calling_api():
    api_url = "http://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&units=metric&appid={}".format(lat,lon,api_key)
    #print(api_url)
    r = requests.get(api_url)
    return r.json()


if __name__ == '__main__':
    app.run
