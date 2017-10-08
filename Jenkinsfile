node {
    def project = "${PROJECT_ID}"
    def appName = 'webapp'
    def feSvcName = "${appName}-service"
    def imageTag = "gcr.io/${project}/${appName}:${env.BUILD_NUMBER}"

    checkout scm

    sh("docker build -t ${imageTag} .")
    sh("gcloud docker -- push ${imageTag}")
    sh("kubectl --namespace=production apply -f kube/")
}