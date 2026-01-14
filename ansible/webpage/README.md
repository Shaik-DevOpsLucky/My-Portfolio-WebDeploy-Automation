# Jenkins + Docker + EKS CI/CD Setup

This guide demonstrates how to set up a CI/CD pipeline using Jenkins, Docker, AWS ECR, and EKS.

---

## 1️⃣ Launch Infrastructure

- Launch an **Ubuntu 24.04 AMI** instance (`t3.large` recommended).
- Create an **IAM Role** with Administrator policy (or limited permissions if desired) and attach it to the Jenkins VM.
- Create an **ECR Repository**:

```bash
aws ecr create-repository --repository-name shaik-moulali-portfolio-app
````

* After creating the **EKS cluster**, authenticate Docker/ECR with EKS:

```bash
aws ecr get-login-password --region ap-south-1 | \
docker login --username AWS --password-stdin <account-id>.dkr.ecr.ap-south-1.amazonaws.com
```

---

## 2️⃣ Install Jenkins

```bash
#!/bin/bash

# Install OpenJDK 21
sudo apt update -y
sudo apt install -y openjdk-21-jdk
java -version

# Add Jenkins GPG key
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key

# Add Jenkins repository
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

# Update and install Jenkins
sudo apt-get update
sudo apt-get install jenkins -y

echo "Jenkins Successfully Installed and Started"
```

**Install Jenkins Plugins:**

* Pipeline stage plugin
* Docker all plugins
* Kubernetes all plugins
* AWS Steps Plugin

---

## 3️⃣ Install Docker

```bash
#!/bin/bash

sudo apt-get update -y
sudo apt-get install -y ca-certificates curl

sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] \
https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt install docker.io -y
docker --version
echo "Docker Installed Successfully"
```

---

## 4️⃣ Install Kubernetes CLI (kubectl)

```bash
curl -o kubectl https://amazon-eks.s3.us-west-2.amazonaws.com/1.19.6/2021-01-05/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin
kubectl version --short --client
echo "Kubectl Installed Successfully"
```

---

## 5️⃣ Install AWS CLI

```bash
sudo apt install unzip -y
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
aws --version
echo "AWS CLI Installed Successfully"
```

---

## 6️⃣ Install `eksctl`

```bash
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
eksctl version
echo "EKSCTL Installed Successfully"
```

---

## 7️⃣ Create EKS Cluster

```bash
eksctl create cluster --name Shaik-Ecom-cluster \
  --region us-east-1 \
  --node-type t3.small \
  --zones us-east-1a,us-east-1b
```

> ⚠️ Cluster creation may take 15–20 minutes.

---

### 7a️. Configure OIDC (for IAM roles)

```bash
eksctl utils associate-iam-oidc-provider \
    --region us-east-1 \
    --cluster Shaik-Ecom-cluster \
    --approve
```

---

### 7b️. Update kubeconfig

```bash
aws eks update-kubeconfig --region us-east-1 --name Shaik-Ecom-cluster
```

---

## 8️⃣ Configure Jenkins User for Kubernetes Access

```bash
sudo mkdir -p /var/lib/jenkins/.kube
sudo cp /home/ubuntu/.kube/config /var/lib/jenkins/.kube/config
sudo chown -R jenkins:jenkins /var/lib/jenkins/.kube
```

**Verify:**

```bash
sudo su - jenkins
kubectl get nodes
```

> This **must work** before running Jenkins pipelines.

---

## 9️⃣ Jenkins Pipeline Setup

1. Go to Jenkins Dashboard → **New Job** → **Pipeline**
2. Pipeline script from SCM → provide your **GitHub repository URL**
3. Set **Jenkinsfile path**: `ansible/webpage/Jenkinsfile`
4. Save and **Build**

---

## 10️⃣ Verify Deployments

* Check pods and services:

```bash
kubectl get pods -A
kubectl get svc -A
```

* Access your service using the **ALB DNS**.

---

✅ **Checklist Before Pipeline Runs**

1. `sudo su - jenkins`
2. `kubectl get nodes` → must work
3. Fix `Jenkinsfile` paths if needed
4. Run Jenkins build

---

This setup gives you a **full CI/CD pipeline** with:

* Jenkins
* Docker + ECR
* EKS cluster deployments
* Kubernetes-managed application

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ea387934-c12a-4ca2-b0a5-6dfbac3b80cb" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/88271455-db2b-439d-83a6-933b4a2bb4e1" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/44ddb001-017c-487c-a203-9240923d4e32" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/77a03f57-c4d1-4e79-91ae-9d188fe27236" />

---
## Prepared by:
## *Shaik Moulali*


---
