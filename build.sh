IMAGE_TAG=gcr.io/$PROJECT/webapp:latest

docker build -t $IMAGE_TAG .
gcloud docker -- push $IMAGE_TAG
sed -i.bak 's#acme-container#$IMAGE_TAG#' ./kube/*.yaml
kubectl apply -f kube/