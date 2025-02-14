FROM node:20.18-alpine3.21

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Chạy ứng dụng trong chế độ development
EXPOSE 5173

CMD ["npm", "run", "dev"]
