node {
    def appName = 'webapp'
    def feSvcName = "${appName}-service"
    def imageTag = "${DUSR}/${appName}:${env.BUILD_NUMBER}"

    checkout scm

    sh("docker build -t ${imageTag} .")
    sh("docker login -u ${DUSR} -p ${DKEY}")
    sh("docker push ${imageTag}")
    sh("sed -i.bak 's#acme-container#${imageTag}#' ./kube/*.yaml")
    sh("kubectl --namespace=production apply -f kube/")
}