import {disableForm} from './lock-form.js';
import {checkValidityForm, resetForm, setUserFormSubmit } from './form-validity.js';
import {initializeMap} from './map.js';
import {getData} from './api.js';
import {getPreview} from './preview-img.js';

disableForm();
initializeMap()
  .then(getPreview)
  .then(getData)
  .then(checkValidityForm)
  .then(setUserFormSubmit(resetForm));
