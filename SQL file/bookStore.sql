insert into book values('001','The Hunger Games', 'Suzanne Collins', '439023483','fiction','Scholastic Press',800,30,10);
insert into book values('002','Harry Potterandthe Philosophers Stone','J.K. Rowling','0439554934','childrens','Arthur A. Levine Books',1009,29,15);
insert into book values('003', 'Twilight', 'Stephenie Meyer','0316015849','fiction','Little, Brown Young Readers',584,18,5);

insert into users values('123','tom','university road','university road','1234567890','1029387');
insert into users values('124','tom','billings bridge','university road','1234567890','1029387');

insert into orders values('0000001','2020-01-01',122.3,'12233','1234567890','tom',);

create view sales_per_author(author_name,book_qty) as
  select author_name, sum(book_qty)
  from book natural join order
  group by author_name;

create view sales_per_genre(genre, book_qty) as
  select genre, sum(book_qty)
  from book natural join order
  group by genre;

create view tot_sale()
