FROM alpine

VOLUME /vol

RUN apk update && apk upgrade && apk add bash
ADD script.sh /
RUN chmod a+x script.sh

CMD /script.sh

