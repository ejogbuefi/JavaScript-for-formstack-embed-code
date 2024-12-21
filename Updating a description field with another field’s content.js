var form = window.fsApi().getForm(FORM_ID);
form.registerFormEventListener({
    type: 'change',
    onFormEvent: function (event) {
      if (event.data.fieldId === 'SOURCE_FIELD_ID') {
        const source = form.getField('SOURCE_FIELD_ID');
        const destination = form.getField('DESCRIPTION_FIELD_ID');
        destination.setTypeAttribute('content', '<div style="background-color: hotpink;">' + source.getValue().value + '</div>');
      }
      return Promise.resolve(event);
    }
});