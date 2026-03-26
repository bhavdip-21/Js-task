let uname = document.getElementById("name");
let mail = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");
let submit = document.getElementById("submit");
let uname_vaild = false;
let mail_vaild = false;
let password_vaild = false;
let confirm_passwordVaild = false;

let htmlcontent_name = document.createElement("p");

uname.addEventListener("input", (e) => {
  let uname_value = e.target.value;
  htmlcontent_name.classList.add("text-red-500", "text-base");

  if (uname_value.length < 3) {
    htmlcontent_name.innerHTML = `name at least 3 latter`;
    uname.classList.remove("border-green-600");
    uname_vaild = false;
    uname.after(htmlcontent_name);
  } else {
    let number_find = /[0-9]/.test(uname_value);
    if (!number_find) {
      htmlcontent_name.innerHTML = "";
      uname.classList.add("border-green-600");
      uname_vaild = true;
      htmlcontent_name.remove();
    } else {
      uname.classList.remove("border-green-600");
      htmlcontent_name.innerHTML = "number are not allowed";
      uname_vaild = false;
      uname.after(htmlcontent_name);
    }
  }
  submitValidate();
});

let htmlcontent_email = document.createElement("p");
mail.addEventListener("input", (e) => {
  let email_value = e.target.value;
  if (/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email_value)) {
    htmlcontent_email.innerHTML = "";
    mail_vaild = true;
    mail.classList.add("border-green-600");
    htmlcontent_email.remove();
  } else {
    htmlcontent_email.innerHTML = "email must be in xyz@gmail.com format";
    mail_vaild = false;
    htmlcontent_email.classList.add("text-red-500", "text-base");
    mail.classList.remove("border-green-600");
    mail.after(htmlcontent_email);
  }
  submitValidate();
});

let htmlcontent_password = document.createElement("p");
let password_value_compare = "";

password.addEventListener("input", (e) => {
  let password_value = e.target.value;
  password_value_compare = password_value;
  let special_char = ["%", "@", "#", "&", "!", "$"];
  let has_special = special_char.some((char) => password_value.includes(char));
  if (password_value.length < 8) {
    htmlcontent_password.classList.add("text-red-500", "text-base");
    password.classList.remove("border-green-600");

    htmlcontent_password.innerHTML = "password must be at least 8 letter";
    password.after(htmlcontent_password);
    password_vaild = false;
  } else {
    if (!has_special) {
      htmlcontent_password.classList.add("text-red-500", "text-base");
      password.classList.remove("border-green-600");
      htmlcontent_password.innerHTML =
        "password must be at least one special character";
      password_vaild = false;
      password.after(htmlcontent_password);
    } else {
      if (!/[A-Z]/.test(password_value)) {
        htmlcontent_password.classList.add("text-red-500", "text-base");
        password.classList.remove("border-green-600");

        htmlcontent_password.innerHTML =
          "password must be at least one Uppercase character";
        password_vaild = false;
        password.after(htmlcontent_password);
      } else {
        htmlcontent_password.classList.add("text-red-500", "text-base");
        password.classList.add("border-green-600");

        htmlcontent_password.remove();
        password_vaild = true;
      }
    }
  }
  confirm_password.dispatchEvent(new Event("input"));
  submitValidate();
});
console.log(password_value_compare);

let htmlcontent_confirm = document.createElement("p");
confirm_password.addEventListener("input", (e) => {
  let confirm_value = e.target.value;
  if (confirm_value === password_value_compare) {
    confirm_password.classList.add("border-green-600");
    confirm_passwordVaild = true;
    htmlcontent_confirm.remove();
  } else {
    htmlcontent_confirm.innerHTML =
      "password and confirm password must be same";
    htmlcontent_confirm.classList.add("text-base", "text-red-500");
    confirm_password.classList.remove("border-green-600");
    confirm_passwordVaild = false;
    confirm_password.after(htmlcontent_confirm);
  }
  submitValidate();
});

function submitValidate() {
  if (password_vaild && mail_vaild && uname_vaild && confirm_passwordVaild) {
    submit.disabled = false;
    submit.classList.remove("opacity-50", "cursor-not-allowed");
  } else {
    submit.disabled = true;
    console.log(submit);
    console.log("hello");
    submit.classList.add("opacity-50", "cursor-not-allowed");
  }
}

submitValidate();

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Registration Successful!");
  e.target.reset();
});

// data table

document.getElementById("form-link").addEventListener("click", () => {
  document.getElementById("form-section").style.display = "flex";
  document.getElementById("data-section").style.display = "none";
});

document.getElementById("data-link").addEventListener("click", () => {
  document.getElementById("form-section").style.display = "none";
  document.getElementById("data-section").style.display = "flex";
});

const products = [
  { id: 1, name: "Memory Foam Pillow", price: 50, category: "Home & Kitchen" },
  { id: 2, name: "Smartphone Pro", price: 899, category: "Electronics" },
  { id: 3, name: "Desk Lamp LED", price: 35, category: "Office Supplies" },
  { id: 4, name: "Weighted Vest", price: 70, category: "Fitness" },
  { id: 5, name: "Electric Toothbrush", price: 80, category: "Personal Care" },
  { id: 6, name: "Yoga Mat High-Grip", price: 45, category: "Fitness" },
  { id: 7, name: "Air Fryer XL", price: 120, category: "Home & Kitchen" },
  { id: 8, name: "Gaming Mouse", price: 60, category: "Electronics" },
  { id: 9, name: "Stapler Heavy-Duty", price: 18, category: "Office Supplies" },
  { id: 10, name: "Resistance Bands", price: 20, category: "Fitness" },
  { id: 11, name: "4K Monitor 27-inch", price: 320, category: "Electronics" },
  { id: 12, name: "Espresso Machine", price: 299, category: "Home & Kitchen" },
  {
    id: 13,
    name: "Facial Cleansing Brush",
    price: 25,
    category: "Personal Care",
  },
  {
    id: 14,
    name: "Standing Desk Converter",
    price: 140,
    category: "Office Supplies",
  },
  { id: 15, name: "Kettlebell 15kg", price: 55, category: "Fitness" },
  { id: 16, name: "Mechanical Keyboard", price: 110, category: "Electronics" },
  { id: 17, name: "Robot Vacuum", price: 220, category: "Home & Kitchen" },
  { id: 18, name: "Skincare Serum", price: 35, category: "Personal Care" },
  { id: 19, name: "Monitor Stand", price: 25, category: "Office Supplies" },
  { id: 20, name: "Dumbbell Set 20lbs", price: 85, category: "Fitness" },
  { id: 21, name: "Bluetooth Speaker", price: 45, category: "Electronics" },
  { id: 22, name: "Slow Cooker", price: 65, category: "Home & Kitchen" },
  { id: 23, name: "Beard Trimmer", price: 45, category: "Personal Care" },
  { id: 24, name: "Ergonomic Chair", price: 210, category: "Office Supplies" },
  { id: 25, name: "Jump Rope", price: 15, category: "Fitness" },
  { id: 26, name: "Wireless Headphones", price: 99, category: "Electronics" },
  { id: 27, name: "Chef's Knife Set", price: 150, category: "Home & Kitchen" },
  { id: 28, name: "Silk Eye Mask", price: 15, category: "Personal Care" },
  { id: 29, name: "Whiteboard 3x2ft", price: 45, category: "Office Supplies" },
  { id: 30, name: "Treadmill Folding", price: 750, category: "Fitness" },
  {
    id: 31,
    name: "Noise Cancelling Earbuds",
    price: 130,
    category: "Electronics",
  },
  { id: 32, name: "Electric Kettle", price: 35, category: "Home & Kitchen" },
  { id: 33, name: "Hand Cream Set", price: 22, category: "Personal Care" },
  { id: 34, name: "Weekly Planner", price: 15, category: "Office Supplies" },
  { id: 35, name: "Adjustable Bench", price: 180, category: "Fitness" },
  { id: 36, name: "Tablet Air", price: 450, category: "Electronics" },
  { id: 37, name: "Non-Stick Skillet", price: 40, category: "Home & Kitchen" },
  { id: 38, name: "Bath Salts 1kg", price: 18, category: "Personal Care" },
  { id: 39, name: "Paper Shredder", price: 90, category: "Office Supplies" },
  { id: 40, name: "Pull-up Bar", price: 40, category: "Fitness" },
  { id: 41, name: "Smartwatch Series 5", price: 250, category: "Electronics" },
  { id: 42, name: "Blackout Curtains", price: 30, category: "Home & Kitchen" },
  { id: 43, name: "Manicure Kit", price: 20, category: "Personal Care" },
  { id: 44, name: "Laptop Sleeve", price: 20, category: "Office Supplies" },
  { id: 45, name: "Foam Roller", price: 25, category: "Fitness" },
  {
    id: 46,
    name: "External Hard Drive 2TB",
    price: 80,
    category: "Electronics",
  },
  {
    id: 47,
    name: "Bamboo Cutting Board",
    price: 25,
    category: "Home & Kitchen",
  },
  {
    id: 48,
    name: "Essential Oil Diffuser",
    price: 30,
    category: "Personal Care",
  },
  { id: 49, name: "Fountain Pen", price: 50, category: "Office Supplies" },
  { id: 50, name: "Hair Dryer Ionic", price: 60, category: "Personal Care" },
];

let container = document.getElementById("table-data");
let htmlcontent_table;
function getdata() {
  htmlcontent_table = products
    .map((item) => {
      return `<tr>
  <td class="border border-gray-300 px-4 py-2">${item.id}</td>
  <td class="border border-gray-300 px-4 py-2">${item.name}</td>
  <td class="border border-gray-300 px-4 py-2">${item.price}</td>
  <td class="border border-gray-300 px-4 py-2">${item.category}</td>
</tr>
  `;
    })
    .join("");

  container.innerHTML = htmlcontent_table;
}

document.getElementById("search_data").addEventListener("input", (e) => {
  let search_value = e.target.value;
  if (search_value) {
    let result = products.filter((items) =>
      items.name
        .toLocaleLowerCase()
        .startsWith(search_value.toLocaleLowerCase()),
    );

    if (result.length != 0) {
      htmlcontent_table = result
        .map((item) => {
          return `<tr>
  <td class="border border-gray-300 px-4 py-2">${item.id}</td>
  <td class="border border-gray-300 px-4 py-2">${item.name}</td>
  <td class="border border-gray-300 px-4 py-2">${item.price}</td>
  <td class="border border-gray-300 px-4 py-2">${item.category}</td>
</tr>
  `;
        })
        .join("");
      container.innerHTML = htmlcontent_table;
      return;
    } else {
      container.innerHTML = `<tr><td colspan="4" class="p-4 text-center">No products found for "${search_value}"</td></tr>`;
      return;
    }
  } else {
    getdata();
  }
});

getdata();

document.getElementById("price").addEventListener("change", (e) => {
  let order = e.target.value;
  let order_list = [];
  let products_copy = [...products];
  if (order == "asc") {
    order_list = products_copy.sort((a, b) => b.price - a.price);
  }
  if (order == "des") {
    order_list = products_copy.sort((a, b) => a.price - b.price);
  }
  if (order == "price") {
    getdata();
    return;
  }
  htmlcontent_table = order_list
    .map((item) => {
      return `<tr>
  <td class="border border-gray-300 px-4 py-2">${item.id}</td>
  <td class="border border-gray-300 px-4 py-2">${item.name}</td>
  <td class="border border-gray-300 px-4 py-2">${item.price}</td>
  <td class="border border-gray-300 px-4 py-2">${item.category}</td>
</tr>
  `;
    })
    .join("");
  container.innerHTML = htmlcontent_table;
});

document.getElementById("Name").addEventListener("change", (e) => {
  let order = e.target.value;

  let order_list = [];
  let products_copy = [...products];
  if (order == "asc") {
    order_list = products_copy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
  if (order == "des") {
    order_list = products_copy.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
  if (order == "name") {
    getdata();
    return;
  }
  htmlcontent_table = order_list
    .map((item) => {
      return `<tr>
  <td class="border border-gray-300 px-4 py-2">${item.id}</td>
  <td class="border border-gray-300 px-4 py-2">${item.name}</td>
  <td class="border border-gray-300 px-4 py-2">${item.price}</td>
  <td class="border border-gray-300 px-4 py-2">${item.category}</td>
</tr>
  `;
    })
    .join("");
  container.innerHTML = htmlcontent_table;
});

document.getElementById("filter").addEventListener("click", () => {
  console.log("hello");
  document.getElementById("filter_value").classList.toggle("hidden");
});

document.getElementById("filter_value").addEventListener("change", (e) => {
  let cate = e.target.value;
  if (cate == "all") {
    getdata();
    e.target.classList.toggle("hidden");
    return;
  }
  let category = [...products].filter((items) => items.category == cate);
  htmlcontent_table = category
    .map((item) => {
      return `<tr>
  <td class="border border-gray-300 px-4 py-2">${item.id}</td>
  <td class="border border-gray-300 px-4 py-2">${item.name}</td>
  <td class="border border-gray-300 px-4 py-2">${item.price}</td>
  <td class="border border-gray-300 px-4 py-2">${item.category}</td>
</tr>
  `;
    })
    .join("");
  container.innerHTML = htmlcontent_table;
  e.target.classList.toggle("hidden");
});
