node {
    def project = "${PROJECT_ID}"
    def appName = 'webapp'
    def feSvcName = "${appName}-service"
    def imageTag = "vivr2/${appName}:${env.BUILD_NUMBER}"

    checkout scm

    sh("docker build -t ${imageTag} .")
    sh("docker login -u vivr2 -p ${project}")
    sh("docker push ${imageTag}")
    sh("kubectl --namespace=production apply -f kube/")
}