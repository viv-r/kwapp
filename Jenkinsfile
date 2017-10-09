node {
    def appName = 'webapp'
    def feSvcName = "${appName}-service"
    def imageTag = "vivr2/${appName}:${env.BUILD_NUMBER}"

    checkout scm

    sh("docker build -t ${imageTag} .")
    sh("docker login -u vivr2 -p ${DKEY}")
    sh("docker push ${imageTag}")
    sh("kubectl --namespace=production apply -f kube/")
}