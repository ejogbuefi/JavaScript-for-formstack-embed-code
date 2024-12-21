var form = window.fsApi().getForm(FORM_ID);
form.registerFormEventListener({
    type: 'change',
    onFormEvent: function (event) {
      if (event.data.fieldId === 'SOURCE_FIELD_ID') {
        const source = form.getField('SOURCE_FIELD_ID');
        const destination = form.getField('DESTINATION_FIELD_ID');
        destination.setValue(source.getValue());
      }
      return Promise.resolve(event);
    }
});