FROM nginx:alpine
COPY style.css /usr/share/nginx/html/style.css
COPY index.html /usr/share/nginx/html/index.html
COPY signup.html /usr/share/nginx/html/signup.html
COPY login.html /usr/share/nginx/html/login.html
COPY post.html /usr/share/nginx/html/post.html
COPY profile.html /usr/share/nginx/html/profile.html
COPY users.html /usr/share/nginx/html/users.html
COPY user-profile.html /usr/share/nginx/html/user-profile.html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
