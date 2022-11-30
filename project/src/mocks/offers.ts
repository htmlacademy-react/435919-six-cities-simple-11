import { PropertyOffer } from '../types/property-offer';

export const offers: PropertyOffer[] = [
  {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 1,
      },
      name: 'Амстердам',
    },
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    id: 1,
    galleryUrl: 'img/apartment-01.jpg',
    isPremium: true,
    title: 'great apartment at great location',
    rating: 4.8,
    features: {
      type: 'Apartment',
      bedrooms: 3,
      maxAdults: 4,
    },
    price: 120,
    inside: {
      isWiFi: true,
      isWasingMachine: true,
      isTowels: true,
      isHeating: true,
      isCoffeeMachine: true,
      isBabySeat: true,
      isKitchen: true,
      isDishWasher: true,
      isCabelTV: true,
      isFridge: true,
    },
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
      description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century',
      text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    }
  },
  {
    city: {
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 1,
      },
      name: 'Амстердам',
    },
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    id: 2,
    galleryUrl: 'img/studio-01.jpg',
    isPremium: false,
    title: 'luxurious studio at great location',
    rating: 3.8,
    features: {
      type: 'Apartment',
      bedrooms: 3,
      maxAdults: 4,
    },
    price: 120,
    inside: {
      isWiFi: true,
      isWasingMachine: true,
      isTowels: true,
      isHeating: true,
      isCoffeeMachine: true,
      isBabySeat: true,
      isKitchen: true,
      isDishWasher: true,
      isCabelTV: true,
      isFridge: true,
    },
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      name: 'Max',
      isPro: true,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century',
      text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    }
  },
  {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 1,
      },
      name: 'Амстердам',
    },
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    id: 3,
    galleryUrl: 'img/room.jpg',
    isPremium: true,
    title: 'gloomy room at great location',
    rating: 2.8,
    features: {
      type: 'Apartment',
      bedrooms: 3,
      maxAdults: 4,
    },
    price: 120,
    inside: {
      isWiFi: true,
      isWasingMachine: true,
      isTowels: true,
      isHeating: true,
      isCoffeeMachine: true,
      isBabySeat: true,
      isKitchen: true,
      isDishWasher: true,
      isCabelTV: true,
      isFridge: true,
    },
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century',
      text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    }
  },
  {
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 1,
      },
      name: 'Амстердам',
    },
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    id: 4,
    galleryUrl: 'img/apartment-03.jpg',
    isPremium: true,
    title: 'gloomy apartment at great location',
    rating: 1.8,
    features: {
      type: 'Apartment',
      bedrooms: 3,
      maxAdults: 4,
    },
    price: 120,
    inside: {
      isWiFi: false,
      isWasingMachine: false,
      isTowels: false,
      isHeating: false,
      isCoffeeMachine: false,
      isBabySeat: false,
      isKitchen: false,
      isDishWasher: false,
      isCabelTV: false,
      isFridge: false,
    },
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      name: 'Max',
      isPro: true,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century',
      text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    }
  }
];

