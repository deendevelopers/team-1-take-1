# Setup
`npm install`

`npm run start`

# API
To get all records: http://localhost:9090/api
To filter by date: http://localhost:9090/api?date=22-Jun-1037

# Tentative Object Structure

```    
    {
        "id": 5,
        "timeline_id": 3,
        "category": "person",
        "subject": "Ibn Sina",
        "description": "Born 23-Aug-980, Ibn Sina is known as the father of modern medicine.",
        "url": "https://en.wikipedia.org/wiki/Avicenna",
        "media_img": "https://www.researchgate.net/profile/Mostafa_Araj-Khodaei/publication/322772465/figure/fig1/AS:627643305181184@1526653233086/Portrait-of-Avicenna-980-1037-CE-Depicted-by-Saber-Baggal-Asghari-and-Babak-Kamal.png",
        "media_video": "https://www.youtube.com/watch?v=E8pwGDhppr0",
        "media_book": null,
        "date": "30-Aug-980",
        "location": "39.9939° N, 64.3771° E",
        "linked_to": [3]
    }
```
`id` is unique to the record.

`timeline_id` is the group id for a set of records that will appear in a timeline.

`linked_to` is an array of ids the record is linked to.
