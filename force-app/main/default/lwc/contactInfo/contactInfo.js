import {LightningElement, api, wire} from 'lwc';
import {getFieldValue, getRecord} from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Contact.Name';
import MOBILE_PHONE_FIELD from '@salesforce/schema/Contact.MobilePhone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import STREET_FIELD from '@salesforce/schema/Contact.MailingStreet';
import CITY_FIELD from '@salesforce/schema/Contact.MailingCity';
import STATE_FIELD from '@salesforce/schema/Contact.MailingState';
import POSTAL_CODE_FIELD from '@salesforce/schema/Contact.MailingPostalCode';
import COUNTRY_FIELD from '@salesforce/schema/Contact.MailingCountry';
import PHOTO_URL_FIELD from '@salesforce/schema/Contact.PhotoURL__c';
import DEFAULT_AVATAR from '@salesforce/resourceUrl/DefaultAvatar';

const fields = [NAME_FIELD, MOBILE_PHONE_FIELD, EMAIL_FIELD, STREET_FIELD, CITY_FIELD, STATE_FIELD, POSTAL_CODE_FIELD, COUNTRY_FIELD, PHOTO_URL_FIELD];
export default class contactInfo extends LightningElement {
    @api recordId;

    @wire(getRecord, {recordId: '$recordId', fields})
    contact;

    get name() {
        return getFieldValue(this.contact.data, NAME_FIELD);
    }

    get phoneNumber() {
        return getFieldValue(this.contact.data, MOBILE_PHONE_FIELD);
    }

    get email() {
        return getFieldValue(this.contact.data, EMAIL_FIELD);
    }


    get street() {
        return getFieldValue(this.contact.data, STREET_FIELD);
    }

    get city() {
        return getFieldValue(this.contact.data, CITY_FIELD);
    }

    get state() {
        return getFieldValue(this.contact.data, STATE_FIELD);
    }

    get postalCode() {
        return getFieldValue(this.contact.data, POSTAL_CODE_FIELD);

    }

    get country() {
        return getFieldValue(this.contact.data, COUNTRY_FIELD);
    }

    get cityState() {
        const cityState = [this.city, this.state];
        return cityState.filter(value => value !== null && value !== "").join(', ');
    }

    get mailingAddress() {
        const address = [
            this.street,
            this.city,
            this.state,
            this.postalCode,
            this.country];

        return address.filter(value => value !== null && value !== "").join(', ');
    }
    get photoUrl(){
        const photoUrl = getFieldValue(this.contact.data, PHOTO_URL_FIELD);
        return !photoUrl ? DEFAULT_AVATAR :getFieldValue(this.contact.data, PHOTO_URL_FIELD);
    }
}