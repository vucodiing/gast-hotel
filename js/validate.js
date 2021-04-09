$("#home-contact").validate({
  rules: {
    homeName: "required",
    homeCompany: "required",
    homePhone: {
      required: true,
      rangelength: [10, 11],
      number: true,
    },
    homeEmail: {
      required: true,
      email: true,
    },
  },
  messages: {
    homeName: "Please enter Your name",
    homeCompany: "Please enter Company name",
    homePhone: {
      required: "Please enter Your phone",
      rangelength: "Phone has 10 or 11 numbers",
      number: "Please enter numbers",
    },
    homeEmail: {
      required: "Please enter Email",
      email: "Email not true",
    },
  },
});

$("#news-detail").validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: "Please enter Your name",
    email: {
      required: "Please enter Email",
      email: "Email not true",
    },
  },
});
