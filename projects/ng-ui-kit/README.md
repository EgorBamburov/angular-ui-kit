# NgUiKit

### Общая информация
- Версия Angular CLI 18.2.0
- Работает от версии Angular CLI 17.x.x
- Для работы иконок необходима библиотека [NgIcons](https://github.com/ng-icons/ng-icons) и иконки NgFontAwesome
- Текущая актуальная версия 0.0.2
- [Документация](https://github.com/EgorBamburov/angular-ui-kit)
- [GitHub](https://github.com/EgorBamburov/angular-ui-kit)

Посмотреть историю версий можно [тут]([changes/main.md](https://github.com/EgorBamburov/angular-ui-kit/blob/master/projects/ng-ui-kit/changes/main.md))
### Быстрый старт 
1. Установить библиотеку
```bash
npm install @egor-bamburov/ng-ui-kit
```
Подключить стили в глобальном styles.scss файле
```scss
@import "@egor-bamburov/ng-ui-kit/styles/styles";
```
Подключить модуль UiKitModule в нужном модуле или компоненте
```ts
import {UiKitModule} from '@egor-bamburov/ng-ui-kit';

@Component({
  selector: 'app-your-component',
  standalone: true,
  imports: [
    UiKitModule
  ],
  templateUrl: './your-component.component.html',
  styleUrl: './your-component.component..scss'
})
export class YourComponent {
}
```
В шаблоне вызвать нужный компонент(для примера используется ui-kit-text-input) полный список можно найти [тут](https://github.com/EgorBamburov/angular-ui-kit)
```angular2html
<ui-kit-text-input label="test" placeholder="test" errorLabel="test" [isShowError]="isShowError$()" />
```
