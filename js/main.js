import { checkValidityForm, resetForm } from './form-validity.js';
import {disableForm} from './lock-form.js';
import {initializationMap} from './map.js';
import {getData, setUserFormSubmit} from './api.js';

getData();
disableForm();
initializationMap();
checkValidityForm();
setUserFormSubmit(resetForm);

