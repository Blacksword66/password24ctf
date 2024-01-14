FROM python:slim
RUN apt-get update && apt install zip -y
WORKDIR root

COPY . .

RUN chmod +x gen_flag
RUN chmod +x entrypoint
EXPOSE 4000 5000

ENTRYPOINT ["/root/entrypoint"]
