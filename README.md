## Aplikacja (https://xmufc.github.io/weather-app)

Aplikacja pozwala wyświetlać pogodę w największych miastach Polski. Aplikacja korzysta z zewnętrznego API (https://weatherbit.io/) do pobierania danych pogodowych. 
Opis poszczególnych komponentów:

1. ### 'SelectCity'
	Komponent zawierający combobox, który umozliwia wybór miasta spośród dostępnych.
2. ### 'Weather'
	Główny komponent, który przechowuje stan danych pogodowych oraz informację o wybranym mieście. Wykorzystuje efekty uboczne useEffect, aby pobierać dane pogodowe z API, gdy użytkownik wybierze miasto z listy. Po wybraniu miasta, komponent pobiera aktualne dane pogodowe dla tego miasta oraz prognozę godzinową i 5-dniową.
3. ### 'ActualWeather'
	Komponent odpowiedzialny za wyświetlanie aktualnej pogody dla wybranego miasta. Pokazuje nazwę miasta, ikonę pogodową, aktualną temperaturę oraz statystyki, takie jak wiatr, wilgotność i ciśnienie.
4. ### 'Chart'
	Komponent do wyświetlania wykresu prognozy godzinowej temperatury dla wybranego miasta, wykorzystuje HTML Canvas do rysowania wykresu.
5. ### 'FutureWeather'
	Komponent do wyświetlania prognozy pogody na 5 dni dla wybranego miasta. Pokazuje datę, ikonę pogodową, minimalną i maksymalną temperaturę na dany dzień.

## Instalacja i uruchomienie

1. Sklonuj repozytorium z projektem

    	`git clone https://github.com/xMufc/weather-app.git`

2. Przejdź do katalogu, w którym znajduje się projekt i zainstaluj wymagane pakiety

    	`cd [ściezka]`

3. Zainstaluj wymagane pakiety
	`npm install`

4. Uruchom aplikacje
	`npm start`
