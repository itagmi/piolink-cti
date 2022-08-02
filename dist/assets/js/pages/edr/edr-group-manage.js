//jstree js
$("#jstree_demo").jstree({
  core: {
    // "themes": {
    // 		"stripes": true
    // },
    multiple: false,
    // so that create works
    check_callback: true,
    data: {
      url: function(node) {
        return "https://preview.keenthemes.com/api/jstree/ajax_data.php"; // Demo API endpoint -- Replace this URL with your set endpoint
      },
      data: function(node) {
        return {
          parent: node.id,
          text: "<button>hello</button>",
        };
      },
    },
  },
  types: {
    default: {
      icon: "fa fa-users text-primary",
    },
    file: {
      icon: "fa fa-users text-primary",
    },
  },
  state: {
    key: "demo3",
  },
  plugins: ["contextmenu", "dnd", "search", "state", "types", "wholerow"],
});

// custom maxlenght
$("input.ui-maxlenght")
  .data("name", "ui-maxlenght")
  .maxlength({
    warningClass: "badge bg-info",
    limitReachedClass: "badge bg-warning",
  });
