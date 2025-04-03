#!/bin/bash
# Export your Kaggle username and API key
export KAGGLE_USERNAME=<YOUR USERNAME>
export KAGGLE_KEY=<YOUR KAGGLE KEY>

curl -L -u $KAGGLE_USERNAME:$KAGGLE_KEY\
  -o ~/Downloads/model.tar.gz\
  https://www.kaggle.com/api/v1/models/google/gemma/tfLite/gemma-1.1-2b-it-gpu-int8/1/download