$(function() {
  FastClick.attach(document.body);

  $('.page').focus();

  $('.js-join-newsletter').click(function(e) {
    e.preventDefault();
    $('.layout').addClass('contact-open');
  });

  $('.js-schedule-consultation').click(function(e) {
    e.preventDefault();
    $('.layout').addClass('contact-open');
  });

  $('.overlay-close').click(function(e) {
    e.preventDefault();
    $('.layout').removeClass('contact-open');
  });

  $('#newsletter-form').submit(function(e) {
    e.preventDefault()
    var email = event.target.email.value;
    analytics.identify(email, {email: email});
    analytics.track('web.apollo-newsletter');
    $('.layout').removeClass('contact-open');
  })
    $('#consultation-form').submit(function(e) {
    e.preventDefault()
    var email = event.target.email.value;
    var firstname = event.target.firstname.value;
    var lastname = event.target.lastname.value;
    var company = event.target.company.value;
    var message = event.target.message.value;
    var latestformsubmit = 'Apollo Developer Support'

    analytics.identify(email, {email: email, firstName: firstname, lastName: lastname, company: company, Message__c: message, latestFormSubmit: latestformsubmit});
    analytics.track('web.apollo-devsub');
    $('.layout').removeClass('contact-open');
  })
});


