node {
    def imageTag = "${DUSR}/webapp:${env.BUILD_NUMBER}"

    checkout scm

    sh("docker build -t ${imageTag} .")
    sh("docker login -u ${DUSR} -p ${DKEY}")
    sh("docker push ${imageTag}")
    sh("sed -i.bak 's#acme-container#${imageTag}#' ./kube/*.yaml")
    sh("kubectl apply -f kube/")
}