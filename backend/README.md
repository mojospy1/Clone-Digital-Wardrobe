# Digital Wardrobe — NestJS backend

Thư mục này chứa backend NestJS/TypeORM được chuyển đổi từ năm bảng trong `../sql/digital_wardrobe.sql`.

## Các entity

| Bảng | Entity | Quan hệ chính |
|---|---|---|
| `users` | `src/user/user.entity.ts` | Một user có nhiều món quần áo và nhiều outfit |
| `categories` | `src/category/category.entity.ts` | Một category có nhiều món quần áo |
| `clothing` | `src/clothing/clothing.entity.ts` | Mỗi món thuộc một user và một category; có thể nằm trong nhiều outfit |
| `outfits` | `src/outfit/outfit.entity.ts` | Mỗi outfit thuộc một user và có nhiều outfit item |
| `outfit_items` | `src/outfit-item/outfit-item.entity.ts` | Bảng liên kết outfit với clothing |

Mỗi entity khai báo tên bảng, khóa chính tự tăng, cột theo đúng schema SQL và các quan hệ TypeORM. Các module tương ứng đăng ký entity bằng `TypeOrmModule.forFeature(...)` để sau này có thể inject repository vào service.

## Kết nối cơ sở dữ liệu

Tạo database và các bảng theo `../sql/digital_wardrobe.sql`, sau đó đặt các biến môi trường sau trước khi chạy:

```text
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=digital_wardrobe
PORT=3000
```

NestJS dùng driver MySQL của TypeORM để kết nối MariaDB. `synchronize` đang tắt để TypeORM không tự ý sửa schema; schema được quản lý bằng file SQL.

## Chạy

```bash
npm install
npm run start:dev
```

Hiện tại phần NestJS đã có cấu trúc module và entity; controller/service CRUD chưa được triển khai. Các API CRUD hiện có trong repo thuộc backend Express ở `server.js` và `routes/`.
