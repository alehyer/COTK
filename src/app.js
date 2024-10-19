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

    addNewProduct: `<div class="addProductPage">
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
let newProductHTML;
let users;
let localData;

try {
    // Check if "localData" exists in localStorage
    const existingData = localStorage.getItem("localData");

    if (existingData) {
        // If "localData" does not exist, store the data object
        localStorage.setItem("localData", JSON.stringify(data));

        localData = JSON.parse(localStorage.getItem("localData"));

        landingHTML = localData.landingPage;
        loginHTML = localData.loginPage;
        signupHTML = localData.signupPage;
        sellerHTML = localData.sellerPage;
        newProductHTML = localData.addNewProduct;
        users = localData.users;

        console.log("Data stored in localStorage successfully.");
        document.getElementById("inner").innerHTML = landingHTML;
    } else {
        localData = JSON.parse(localStorage.getItem("localData"));

        landingHTML = localData.landingPage;
        loginHTML = localData.loginPage;
        signupHTML = localData.signupPage;
        sellerHTML = localData.sellerPage;
        newProductHTML = localData.addNewProduct;
        users = localData.users;

        console.log("localData already exists in localStorage.");
        document.getElementById("inner").innerHTML = landingHTML;
    }
} catch (error) {
    console.error("An error occurred while accessing localStorage:", error);
}

localData = JSON.parse(localStorage.getItem("localData"));

// Writing to json

const jsonWrite = () => {
    const submitButton = document.getElementById("submitButton");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localData.users[username] = password;

    localStorage.setItem("localData", JSON.stringify(localData));

    document.getElementById("inner").innerHTML = sellerHTML;
};

function scrollToTop() {
    const scrollDuration = 400; // Duration in ms
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
            document.getElementById("inner").innerHTML += newProductHTML;
        case "addProduct":
    }
};

function addNewProduct() {
    // Get input values
    const productName = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseFloat(document.getElementById("quantity").value);
    const location = document.getElementById("location").value;

    // Validate input values
    if (!productName || isNaN(price) || isNaN(quantity) || !location) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Create a new product object
    const newProduct = {
        productName: productName,
        price: price,
        quantity: quantity,
        location: location,
    };

    // Add the new product to localData
    if (!localData.products) {
        localData.products = [];
    }

    localData.products.push(newProduct);

    // Update localStorage with the new product data
    localStorage.setItem("localData", JSON.stringify(localData));

    // Create HTML for the new product
    const newProductHTML = `
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

    // Append the new product HTML to a container
    const productContainer = document.getElementById("productContainer"); // Make sure to have this element in your HTML
    productContainer.insertAdjacentHTML("beforeend", productHTML);
    document.getElementById("").style = "display: none;";
}
