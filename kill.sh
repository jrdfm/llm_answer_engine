#!/bin/bash

# Check processes listening on ports 3000 to 3010
for port in {3000..3010}; do
    pids=$(lsof -ti :$port)
    if [ -n "$pids" ]; then
        echo "Killing $pids on port $port"
        # Kill the processes with SIGKILL (-9)
        kill -9 $pids
        #echo "Processes killed for port $port."

    fi
done

#  fuser -n tcp -k 3000
for port in {3000..3010}; do
	fuser -n tcp -k $port
done