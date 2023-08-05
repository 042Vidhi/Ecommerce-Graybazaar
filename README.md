# E-commerce Website Readme

![WhatsApp Image 2023-07-10 at 18 47 08](https://github.com/042Vidhi/Ecommerce-Graybazaar/assets/98405549/5b3c2a10-6062-4cf4-9b38-758ed3a05057)


## Overview
An ecommerce website that showcases and sells handmade products crafted by local artisians, supporting small businesses and preserving traditional craftmanship in india.

## Technologies Used

- Frontend: Next.js
- CSS Framework: Chakra UI and Tailwind CSS
- Backend: Django with Django REST Framework (DRF)
- Database: SQLite (for now) will upgrade to PostgreSQL

## Features

- Browse for products across various categories.
- View detailed product information, including images, descriptions, and prices.
- Add products to the shopping cart.
- Save products to wishlist.
- Filter products based on categories ,price range.
- Sort products based on price : high to low or low to high.
- Admin panel for managing products, orders, and users (Django Admin).
- **Upcoming Features:**

  1. **Search Functionality:** Users will be able to search for products using keywords, making it easier to find specific items they are interested in.

  2. **Payment Integration:** Integration with popular payment gateways will enable users to make secure and convenient online payments for their purchases.

  3. **Seller Dashboard:** Sellers will have access to a dedicated dashboard where they can manage their products, track sales, and handle orders.

  4. **Stories Board:** Users will be able to view and share stories related to products, showcasing their experiences and feedback.

  5. **Reviews and Comments:** Users will be able to leave reviews and comments on products, allowing others to make informed decisions based on real customer experiences.
 
  6. **Authentication Method:** Buyers and Sellers will be able to sign up, log in, and log out securely using email and password-based authentication.


## Screenshots




## Prerequisites

To run the E-commerce website locally, ensure you have the following installed:

- Node.js (https://nodejs.org)
- Python (https://www.python.org) and pip package manager
//- PostgreSQL (https://www.postgresql.org) or your preferred database server

## Getting Started

1. Clone the repository to your local machine:

   ```
   git clone [https://github.com/your_username/your_repo.git](https://github.com/042Vidhi/Ecommerce-Graybazaar)
   ```

2. Navigate to the frontend folder and install the dependencies:

   ```
   cd frontend
   npm install
   ```

3. Start the Next.js development server:

   ```
   npm run dev
   ```

4. Navigate to the backend folder and create a virtual environment (optional but recommended):

   ```
   cd backend
   python -m venv env
   ```

5. Activate the virtual environment:

   - On Windows:

     ```
     env\Scripts\activate
     ```

   - On macOS and Linux:

     ```
     source env/bin/activate
     ```

6. Install the backend dependencies:

   ```
   pip install -r requirements.txt
   ```

7. Set up the database and run migrations:

   ```
   python manage.py migrate
   ```

8. Create a superuser for accessing the Django Admin panel:

   ```
   python manage.py createsuperuser
   ```

9. Start the Django development server:

   ```
   python manage.py runserver
   ```

10. Access the website locally:

    Open your web browser and go to http://localhost:3000/

11. Access the Django Admin panel:

    Go to http://localhost:8000/admin/ and log in using the superuser credentials.

## Folder Structure

- `frontend/`: Contains the Next.js frontend code.
- `backend/`: Contains the Django backend code.
- `Screentshots/`: Screenshot of the website.


## Contributions

Contributions to this project are welcome. Feel free to submit issues, bug reports, or pull requests.


Thank you for using our E-commerce website! We hope you find it useful and enjoy working with it. Happy coding!
