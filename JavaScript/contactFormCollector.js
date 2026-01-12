function contactFormCollector(event)
{
  event.preventDefault();

  let formContent = {};
  for (let { type, name, value, checked } of document.forms.contactForm) {
    if (type === 'checkbox') {
      formContent[name] = checked;
    }
    else if (type === 'radio') {
      if (checked) {
        formContent[name] = value;
      }
    }
    else if (!name)
    {
      continue;
    }
    else {
      formContent[name] = value;
    }
    
  }
  alert(JSON.stringify(formContent, null, 2));
}

document
  .querySelector('form[name="contactForm"]')
  .addEventListener('submit', contactFormCollector);




