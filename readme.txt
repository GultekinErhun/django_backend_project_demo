pip install django djangorestframework   

python -m django startproject melon     //generates a starter pack

cd melon
python -m django startapp api


python .\manage.py makemigrations  #we need it to let database to keep our track for what we had done 
python .\manage.py migrate
python .\manage.py runserver


changed_files
mkdir urls.py  //in api   tutorial1
mkdir serializers.py // in api tutorial2




