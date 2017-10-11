# IMAGE_TAG=$DUSR/webapp:latest
IMAGE_TAG=gcr.io/$PROJECT/webapp:latest
docker build -t $IMAGE_TAG .
# docker login -u $DUSR -p $DKEY
gcloud docker -- push $IMAGE_TAG
sed -i.bak 's#acme-container#'"$IMAGE_TAG"'#' ./kube/*.yaml
kubectl apply -f kube/