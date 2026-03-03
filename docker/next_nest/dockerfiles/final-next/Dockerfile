FROM rocio21/node_next

RUN mkdir -p /root/admin/next_final
WORKDIR /root/admin/next_final
COPY ./dockerfiles/final-next/admin/ .
RUN chmod +x ./start.sh

ENTRYPOINT ["./start.sh"]