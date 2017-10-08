node {
    def project = "aerial-yeti-182206"
    def appName = 'webapp'
    def feSvcName = "${appName}-service"
    def imageTag = "gcr.io/${project}/${appName}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"

    checkout scm

    stage 'Build image'
    sh("docker build -t ${imageTag} .")

    stage 'Push image to registry'
    sh("gcloud docker -- push ${imageTag}")

    stage "Deploy Application"
    sh("sed -i.bak 's#acme-container#${imageTag}#' ./kube/*.yaml")
    sh("kubectl --namespace=production apply -f kube/")
}