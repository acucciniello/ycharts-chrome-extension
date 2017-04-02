# ycharts-chrome-extension
Simple Chrome Extension Displaying a Table with Financial News 

## Inspiration

After creating a trial account on the YCharts site, I played around with the it a little as a user and thought that it would be a cool idea if there was a Chrome Extension that gave Fiancial News from your YCharts account.  This would give users the ability to see some news without having to go to a new site, and be able to check on the go.

## Setup 

1. Git Clone this repository:

	`$ git clone https://github.com/acucciniello/ycharts-chrome-extension.git`
	
2. Enter the directory:

`$ cd ycharts-chrome-extension`

3. Initialize Tables in MySQL DB:

`$ python web_app/manage.py migrate`

4. Start Django Server:

`$ python web_app/manage.py runserver`

5. Type in your Chrome Browser:

`chrome://extensions/`

6. Check Developer Mode Box:

![Developer_Mode_Image](https://github.com/acucciniello/ycharts-chrome-extension/blob/master/assets/Developer_Mode.png)

7.  Drag and Drop the `chrome_extension` directory onto this page.

## Usage

1. Click the Chrome Extension's Icon in your menu bar:

![Icon_Image](https://github.com/acucciniello/ycharts-chrome-extension/blob/master/assets/YCharts_Icon.png)

2. Click the Button in the Extension labeled 'Click for Updated Business News':

![Button_Image](https://github.com/acucciniello/ycharts-chrome-extension/blob/master/assets/Update_News_Button.png)

3. Get News!


## TODO:
- [X] Start Django Server
- [X] Get News Data from news API
- [X] Display in Table
- [ ] URLS in table
- [ ] Use Angular to make the Table
- [ ] Add Read Later Feature

## License:
MIT


