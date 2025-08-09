group "default" {
  targets = ["frontend"]
}

target "frontend" {
  context = "."
  dockerfile = "Dockerfile"
  tags = ["naengweb/rail-tail:latest"]
  output = ["type=registry"]
}