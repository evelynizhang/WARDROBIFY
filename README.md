# Wardrobify

Team:

* Evelyn Zhang - Shoes microservice
* Eluron Osiebo - Hats microservice

## Design

## Shoes microservice

Shoe page: It shows a list of shoes with their images, manufacturer, and color. It has a delete button to delete shoes when clicking on it.

Shoe list: It shows a table with all the shoes. It has the manufacturer, madel name, and color information for each shoes.

Shoe form: It allows users to create a new pair of shoes. And the information will be displayed on the shoe page, and sho list page.


## Hats microservice

Hats Microservice:
This part of the system handles information about hats.
Each hat has details like fabric, style, color, and picture.
Hats can be stored in different locations in the wardrobe.
Wardrobe Microservice:
This part of the system manages the wardrobe and its locations.
Each location has a name, section number, and shelf number.
Integration:
The Hats microservice talks to the Wardrobe microservice to know about available locations where hats can be stored.
When a new hat is created, the Hats microservice tells the Wardrobe microservice which location the hat should be stored in.
If a hat is updated, the Hats microservice updates its information in the Wardrobe microservice as well.
If a hat is deleted, it is removed from the system, but the location remains.
