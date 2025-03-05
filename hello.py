from selenium import webdriver
from selenium.webdriver.common.by import By


# lancer un navigateur
# le navigateur doit être installé sur la machine
driver = webdriver.Chrome()

# selenium lance vraiment le navigateur

driver.get("https://ludivinecrepin.fr/selenium/chapitre6.html")

print("l url courante : ", driver.current_url)
# find_element retourne le premier tag trouvé
body = driver.find_element(By.TAG_NAME, 'body')
#print(body.text)
# find_elements retourne une liste de tags trouvés
inputs = driver.find_elements(By.TAG_NAME, 'input')
print(inputs)

# par id ou xpath
# pour le xpath, inspecter copier le xpath complet
input_user = driver.find_element(By.ID, 'user')
input_msg = driver.find_element(By.XPATH, '/html/body/form/input[2]')

# les interactions
input_user.send_keys('toto')

input_msg.send_keys('hello')

input_submit = driver.find_element(By.XPATH, '/html/body/form/input[3]')
input_submit.click()


# fermer le navigateur
driver.close()
driver.quit()