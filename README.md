# Wardrobify

Team:

* Evelyn Zhang - Shoes microservice
* Eluron Osiebo - Hats microservice

## Design

## Shoes microservice

Explain your models and integration with the wardrobe
microservice, here.

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
