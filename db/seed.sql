create table products (
    product_id serial primary key,
    name varchar(50),
    price decimal(10,2),
    image text not null
);

create table posts (
    post_id serial primary key,
    users_id int references users_helo (users_id),
    title varchar(50),
    author varchar(50),
    author_img text
);