#!/usr/bin/env bash

build_with_cache() {
  if [[ -d "$XDG_CACHE_HOME"/public ]]; then
    echo "Copying cached public dir"
    rsync -a "$XDG_CACHE_HOME"/public/ public
  else
    echo "No cached public dir found"
  fi

  echo "Building"

  gatsby build

  echo "Done, caching public dir"
  rsync -a public/ "$XDG_CACHE_HOME"/public
}

if [[ "$RENDER" ]]; then
  build_with_cache
else
  gatsby build
fi
