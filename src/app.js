// import { GoogleGenerativeAI } from "@google/generative-ai";

// const generate = async () => {
//     try {
//         const genAI = new GoogleGenerativeAI(
//             "AIzaSyChWKDF-FrEDuA2VPjg8npL9EaSaJBVPSc"
//         );
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//         const prompt = promptInput.value;

//         const result = await model.generateContent(prompt);
//         console.log(result.response.text());
//         resultText.innerText = result.response.text();
//     } catch (error) {
//         console.error("Error:", error);
//         resultText.innerText = "Error occurred while generating.";
//     }
// };

var data = {
    landingPage: `
        <div class="landingPage">
            <menu>
                <li><img src="assets/logoWhite.png" alt="" /></li>
                <li class="moveRight"><button onclick="loadPage(this.id)" id="landingPageLogin">Get Started</button></li>
            </menu>
            <!-- Main Part -->
            <div class="centerMargin mainText">
                <h1>Jual & Beli</h1>
                A network for those who need it.
            </div>
            <!-- Details -->
        </div>
        <div class="centerMargin detailsPage">
    <img class="downArrow centerMargin" src="assets/down-arrow.png" alt="" /><br />
    <h1>We connect you!</h1>
    <h2>Join the marketplace!</h2>
    <p>At Jual & Beli, our mission is to create a community where buyers and sellers can connect seamlessly. We prioritize transparency, security, and accessibility, ensuring you have a smooth and hassle-free trading experience.</p>
    <h2>How It Works</h2>
    <p>Simply register an account, browse the available products, or list your own items for sale. Our easy-to-use platform allows you to manage your listings, communicate with buyers, and track your transactions effortlessly.</p>
    <h2>Trusted by the Community</h2>
    <p>With hundreds of satisfied users and growing every day, Jual & Beli is the perfect platform for you to start trading. Join our community today and make the most of our comprehensive marketplace.</p>
    <button onclick="loadPage(this.id)" id="landingPageLogin">Get Started</button>
</div>`,

    loginPage: `
        <div class="landingPage">
            <menu>
                <li><img src="assets/logoWhite.png" alt="" /></li>
                <li class="moveRight"><button>Get Started</button></li>
            </menu>
            <!-- Main Part -->
            <div class="centerMargin mainText">
                <h1>Jual & Beli</h1>
                A network for those who need it.
            </div>
            <!-- Details -->
        </div>
        <div class="centerMargin detailsPage">
            <img class="downArrow centerMargin" src="assets/down-arrow.png" alt="" /><br />
            <h1>We connect you!</h1>
        </div>`,

    signupPage: `
        <div class="signupPage">
            <menu>
                <li><img src="assets/logoWhite.png" alt="" /></li>
                <li class="normalMenuPadding">Register</li>
            </menu>
            <div class="loginForms centerMargin">
                <h1>Welcome!</h1>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required />
                <label for="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />
                <label for="ic">IC (Identity Card):</label>
                <input type="text" id="ic" name="ic" placeholder="Enter your IC number" />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />
                <label for="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" />
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" placeholder="Enter your address" />
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />
                <button type="submit" onClick="jsonWrite()">Register</button>
            </div>
        </div>`,

    sellerPage: `
        <div class="sellerPage" id="sellerPage">
            <menu>
                <li><img src="assets/logoWhite.png" alt="" /></li>
                <li class="normalMenuPadding">Seller</li>
                <li class="moveRight">
                    <img src="assets/burger.png" alt="" />
                </li>
            </menu>
            <div class="sellerContent centerMargin">
                <div class="searchContainer">
                    <div class="searchBar">
                        <input type="text" id="search" name="search" placeholder="Search" required class="searchField" />
                        <button class="searchButton">Go!</button>
                    </div>
                    <div class="activeStatus">
                        <button class="searchButton">In Stock</button>
                        <button class="searchButton">Sold Out</button>
                    </div>
                </div>
                
                <div class="productContainer" id="productContainer"></div>

                <div class="newListing">
                    <img src="assets/plus.png" alt="" onclick="loadPage(this.id)" id="newProduct" />
                </div>
            </div>
        </div>`,

    addNewProduct: `<div class="addProductHTML" id="addProductHTML">
                <menu>
                    <li><img src="assets/logoWhite.png" alt="Logo" /></li>
                    <li class="normalMenuPadding">Add New Product</li>
                    <li class="moveRight">
                        <img src="assets/burger.png" alt="Menu" />
                    </li>
                </menu>
                <div class="addProductForm centerMargin">
                    <h1>Add New Product</h1>
                    <label for="productName">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        placeholder="Enter product name"
                        required
                    />

                    <label for="price">Price (RM):</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Enter price"
                        required
                    />

                    <label for="quantity">Quantity (kg):</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        placeholder="Enter quantity in kg"
                        required
                    />

                    <label for="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter location"
                        required
                    />

                    <button type="submit" onclick="addNewProduct()">
                        Add Product
                    </button>
                </div>
            </div>`,

    users: {},
};

let landingHTML;
let loginHTML;
let signupHTML;
let sellerHTML;
let addProductHTML;
let users;
let localData;

try {
    const existingData = localStorage.getItem("localData");

    if (existingData) {
        localStorage.setItem("localData", JSON.stringify(data));

        localData = JSON.parse(localStorage.getItem("localData"));

        landingHTML = localData.landingPage;
        loginHTML = localData.loginPage;
        signupHTML = localData.signupPage;
        sellerHTML = localData.sellerPage;
        addProductHTML = localData.addNewProduct;
        users = localData.users;

        console.log("Data stored in localStorage successfully.");
        document.getElementById("inner").innerHTML = landingHTML;
    } else {
        localData = JSON.parse(localStorage.getItem("localData"));

        landingHTML = localData.landingPage;
        loginHTML = localData.loginPage;
        signupHTML = localData.signupPage;
        sellerHTML = localData.sellerPage;
        addProductHTML = localData.addNewProduct;
        users = localData.users;

        console.log("localData already exists in localStorage.");
        document.getElementById("inner").innerHTML = landingHTML;
    }
} catch (error) {
    console.error("An error occurred while accessing localStorage:", error);
}

localData = JSON.parse(localStorage.getItem("localData"));

const jsonWrite = () => {
    const submitButton = document.getElementById("submitButton");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localData.users[username] = password;

    localStorage.setItem("localData", JSON.stringify(localData));

    document.getElementById("inner").innerHTML = sellerHTML;
};

function scrollToTop() {
    const scrollDuration = 400;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

const loadPage = (elementId) => {
    switch (elementId) {
        case "landingPageLogin":
            document.getElementById("inner").innerHTML = signupHTML;
            scrollToTop();
            break;
        case "newProduct":
            document.getElementById("sellerPage").style = "display: none;";

            const productContainer = document.getElementById("inner");

            if (!document.getElementById("addProductHTML")) {
                productContainer.innerHTML += addProductHTML;
            } else {
                document.getElementById("addProductHTML").style =
                    "display: flex; height: 10rem; width: 100%; flex-direction: column;";
            }
    }
};

function addNewProduct() {
    const productName = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseFloat(document.getElementById("quantity").value);
    const location = document.getElementById("location").value;

    const newProduct = {
        productName: productName,
        price: price,
        quantity: quantity,
        location: location,
    };

    if (!localData.products) {
        localData.products = [];
    }

    localData.products.push(newProduct);

    localStorage.setItem("localData", JSON.stringify(localData));

    const addProductHTML = `
        <div class="listingCard" onclick="">
            <div class="imageBackground"></div>
            <div class="details">
                <div class="leftInfo">
                    <div class="itemName">${productName}</div>
                    <div class="quantity">${price}RM/kg | ${quantity}kg</div>
                </div>
                <img src="assets/edit.png" alt="" />
            </div>
        </div>
    `;

    const productContainer = document.getElementById("productContainer");
    productContainer.insertAdjacentHTML("beforeend", addProductHTML);
    document.getElementById("sellerPage").style = "";
    document.getElementById("addProductHTML").style = "display: none;";

    document.getElementById("productName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("location").value = "";
}
