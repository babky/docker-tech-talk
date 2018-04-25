FROM python:3.6

RUN mkdir /my-py-app
ADD ./requirements.txt /my-py-app
WORKDIR /my-py-app
RUN pip install -r requirements.txt
ADD . /my-py-app
CMD python3 /my-py-app/cli2.py

