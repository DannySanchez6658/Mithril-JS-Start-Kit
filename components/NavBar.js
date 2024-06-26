var m = require("mithril");
var Button = require("./ButtonComp");

var NavBarComponent = function () {
  return {
    view: function () {
      return m(
        "nav",
        { class: "flex justify-between items-center px-40 py-4 bg-gray-200" },
        [
          m("span", { class: "text-3xl font-bold" }, "Mithril"),
          m("div", { class: "flex justify-between items-center gap-4" }, [
            m(
              "a",
              { class: "text-gray-500 hover:text-gray-700", href: "/" },
              "Home"
            ),
            m(
              "a",
              {
                class: "text-gray-500 hover:text-gray-700",
                href: "#!/another",
              },
              "About"
            ),
            m(
              "a",
              { class: "text-gray-500 hover:text-gray-700", href: "#" },
              "Contact"
            ),
          ]),
          m(Button, {
            class: "",
          }),
        ]
      );
    },
  };
};

module.exports = NavBarComponent;
