#!/bin/sh
# Runs from official nginx:alpine /docker-entrypoint.d/ before nginx starts.
# The root filesystem is read-only in the cloud, so the conf is rendered from
# its baked-in template into /dev/shm/nginx, the directory nginx.conf includes.
# This app has no sibling API, so nothing is substituted: the template is copied.
set -e
RUNTIME_DIR=/dev/shm/nginx
mkdir -p "$RUNTIME_DIR"
cp /etc/nginx/aep/default.conf "$RUNTIME_DIR/default.conf"
