def s3buckets_map = [
  prod: 'skipta.com'
]
def cloudfront_map = [
  prod: 'E2DGQ8Q6CE1NGI'
]
currentBuild.description = """Env=${ENVIRONMENT}
Branch=${BRANCH_NAME}
Deploy=${DO_DEPLOY}
"""
currentBuild.result = 'SUCCESS'
pipeline {
  agent { label 'master' }
  parameters {
    gitParameter(name: 'BRANCH_NAME', type: 'PT_BRANCH', defaultValue: 'main', selectedValue: 'DEFAULT', branchFilter: '(.*)', quickFilterEnabled: 'true', sortMode: 'ASCENDING_SMART', description: 'Source git branch name')
    choice(name: 'ENVIRONMENT', choices: ['dev', 'stg', 'prod'], description: 'Application deployment environment')
    booleanParam(name: 'DO_DEPLOY', defaultValue: true, description: 'Run deploy on selected environment after successful build')
  }
  options {
    disableConcurrentBuilds()
    timestamps()
    ansiColor('xterm')
    buildDiscarder(logRotator(daysToKeepStr: '30', artifactNumToKeepStr: '10'))
  }
  stages {
    stage('Build image') {
      steps {
        sh 'docker build --tag skipta-build:latest --build-arg ENVIRONMENT=${ENVIRONMENT} -f ./Dockerfile ./'
      }
    }
    stage('Get WebSite from release image') {
      steps {
        sh 'docker run -t -d --rm --name skipta-build skipta-build:latest'
        sh 'docker cp skipta-build:/app/dist `pwd`/dist/'
        sh 'docker stop skipta-build'
      }
    }
    stage('Upload files to S3 bucket') {
      when {
        environment name: 'DO_DEPLOY', value: 'true'
      }
      environment {
        REPOBUCKET = "${s3buckets_map."${environment}"}"
        CLOUDFRONT_DISTRIBUTION = "${cloudfront_map."${environment}"}"
      }
      steps {
        sh '''
          aws s3 --region us-east-1 sync --exact-timestamps --delete --acl bucket-owner-full-control dist/ s3://${REPOBUCKET}/ || exit 1
          aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION} --paths "/*" || exit 1
        '''
      }
    }
  }
  post {
    cleanup {
      cleanWs()
      sh 'docker image prune -f'
    }
  }
}
