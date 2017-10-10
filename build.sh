IMAGE_TAG="gcr.io/$PROJECT/webapp:latest"

docker build -t $IMAGE_TAG .
gcloud docker -- push $IMAGE_TAG
sed -i.bak 's#acme-container#${imageTag}#' ./kube/*.yaml
kubectl apply -f kube/