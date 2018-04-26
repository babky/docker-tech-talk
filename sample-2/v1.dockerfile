FROM python:3.6

ADD . /my-py-app
WORKDIR /my-py-app
RUN pip install -r requirements.txt
CMD python3 /my-py-app/cli2.py

