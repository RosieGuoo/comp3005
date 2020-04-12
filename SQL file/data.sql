create table book
	(book_ID		varchar(255),
	 book_name		varchar(255),
	 author_name	varchar(255),
	 ISBN	varchar(255),
	 genre	varchar(255),
	 publisher	varchar(255),
	 pageNumber		numeric(4,0),
	 price	numeric(8,2),
	 expenditure numeric(8,2),
	 primary key (book_ID)
	);

create table users
  (
    user_Id  varchar(255),
    user_name varchar(255),
    billing_Info  varchar(255),
    shipping_Info varchar(255),
    phone_number  varchar(255),
    password varchar(255),
    primary key(user_Id)
  );

create table checkoutBasket
  (
    basket_Id varchar(255),
    book_name varchar(255),
    book_qty numeric(4,0),
    tot_price numeric(8,2),
    primary Key(basket_Id)
  );

  create table customer
    (
      customer_ID varchar(255),
      customer_name varchar(255),
      billing_Info  varchar(255),
      shipping_Info varchar(255),
      phone_number varchar(255),
      primary key(customer_ID)
    );
create table orders
  (
    order_number varchar(255),
    order_date  varchar(255),
    tot_price numeric(8,2),
    customer_ID   varchar(255),
   contact_Info varchar(255),
    customer_name varchar(255),
    primary key(order_number)
  );
create table delivery
  (
    order_number  varchar(255),
    shipping_Info varchar(255),
    shipping_time varchar(255),
    primary key(order_number)
  );

create table report
  (
    report_ID varchar(255),
    tot_sales  numeric(8,2),
    tot_expeniture numeric(8,2),
    primary key(report_ID)
  );

create table owner
  (
    owner_ID  varchar(255),
    owner_name  varchar(255),
    owner_email varchar(255),
    owner_account varchar(255),
    owner_phone varchar(255),
    primary key(owner_ID)
  );

create table genre
  (
    Genre_ID  varchar(255),
    Genre_name  varchar(255),
    book_qty  numeric(4,0),
    primary key(Genre_ID)
  );

create table publishers
  (
    publishr_ID  varchar(255),
    address varchar(255),
    email varchar(255),
    phone_number  varchar(255),
    bank_account varchar(255),
    primary key(publishr_ID)
  );
