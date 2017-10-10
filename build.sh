IMAGE_TAG=$DUSR/webapp:latest
docker build -t $IMAGE_TAG .
docker login -u $DUSR -p $DKEY
docker push $IMAGE_TAG
sed -i.bak 's#acme-container#'"$IMAGE_TAG"g'#' ./kube/*.yaml
kubectl apply -f kube/