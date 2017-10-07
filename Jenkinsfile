node(jnlp-slave) {
    def project = "${env.PROJECT_ID}"
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
    sh("curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl")
    sh("chmod +x ./kubectl")
    sh("sudo mv ./kubectl /usr/local/bin/kubectl")
    sh("kubectl --namespace=production apply -f kube/")
}