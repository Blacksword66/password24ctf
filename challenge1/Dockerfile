FROM python:slim

RUN pip install flask
WORKDIR root
COPY . .

RUN chmod +x gen_flag

EXPOSE 5000

ENTRYPOINT ["python", "/root/app.py"]
