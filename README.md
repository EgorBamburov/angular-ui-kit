# ng-ui-kit playground

### Проект состоит из 3 частей
- ng-ui-kit это библиотека компонентов [скачать](https://www.npmjs.com/package/@egor-bamburov/ng-ui-kit)
- demo площадка для разработки новых и отладки имеющихся компонентов
- ui-kit-playground интерактивная документация по библиотеке 

### Запуск проекта

#### Общие команды

```bash
git clone https://github.com/EgorBamburov/angular-ui-kit.git
```
```bash
npm install
```
#### Запуск playground 
```bash
ng serve
```
#### Запуск для разработки
1. Запуск ng-ui-kit
```bash
cd projects/ng-ui-kit
npm link
```
2. Объединяем проекты для работы hot reload
```bash
cd projects/demo
npm install @egor-bamburov/ng-ui-kit
```
3. Запускаем demo доступно по [ссылке](http://localhost:4200/) 
```bash
ng serve demo
```
#### Запуск для публикации
1. Меняем номер версии в [файле](projects/ng-ui-kit/package.json) и в [файле](projects/ng-ui-kit/README.md)
2. Собираем библиотеку
```bash
ng build ng-ui-kit
```
3. Описываем изменения в [файле](projects/ng-ui-kit/CHANGE-LOG.md)
4. Публикуем новую версию
```bash
npm publish @egor-bamburov/ng-ui-kit --access public
```


