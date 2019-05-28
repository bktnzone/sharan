gcloud beta run deploy $CLOUD_RUN_SVC \
	--image gcr.io/$PROJECT_ID/$IMAGE \
#	--add-cloudsql-instances bk-sharnam-db1 \
	--allow-unauthenticated \
	--update-env-vars  NODE_ENV=development MYSQL_HOST=bk-sharnam-db1 MYSQL_PORT=3306 MYSQL_DB_NAME=bk_sharan MYSQL_DB_USERNAME=root MYSQL_DB_PASSWORD=sharnam123!

