terraform {
  backend "s3" {
    bucket = "moulashaik96123-terraform"
    key    = "terraform/terraform.tfstate"
    region = "ap-south-1"

  }
}