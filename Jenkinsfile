 node {
 +    def imageTag = "webapp:${env.BUILD_NUMBER}"
  
      checkout scm
  
      sh("docker build -t ${imageTag} .")
      sh("sed -i.bak 's#acme-container#${imageTag}#' ./kube/*.yaml")
 -    sh("kubectl --namespace=production apply -f kube/")
 +    sh("kubectl apply -f kube/")
  } 