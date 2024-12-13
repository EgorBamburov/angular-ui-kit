# Компоненты
## 1. Toast
### Информация
Выводит сообщения об ошибках/предупреждениях/успехе любого действия пользователя на сайте
### Типизация 
```ts
interface IToast {
  message?: string
  title?: string // по умолчанию будет равнен 'Ошибка' | 'Успешно' | 'Предупреждение' в зависимости от типа
  type: 'error' | 'success' | 'warning'
  duration?: number // время в милисекундах по умолчанию 2000
}
```
### Кастомизация
1. Изменение цветов

    Внутри вашего styles.scss файла 
```scss
:root {
  --toast-danger-bg-color: rgba(255, 0, 0, 0.4); // ошибка 
  --toast-success-bg-color: rgb(0, 255, 0, 0.4); // предупреждение
  --toast-warning-bg-color: rgb(255, 226, 0, 0.4); // Успех
  --toast-text-color: black; // цвет текста и иконки(формат svg)
}
```
2. Замена иконки
### Пример использования
1. Инициализировать компонент в app.component.html
```angular2html
<ui-kit-toast
  icon="myIcon" Указываем ссылку на иконку закрытия
  defaultDuration="5000" Указываем продолжительность показа токена по умолчанию
/>
```
2. Вызывать метод для создания Toast

```ts
// Имопрты
import {ToastService} from '../../../../ui-kit/components/toast/services/toast.service';
import {IToast} from "./toast.interface";
// Импорты

@Injectable()
export class MyService {
  constructor(
    //   Сервисы
    private toastService: ToastService,
    //   Сервисы
  ) {}

  public myMethod() {
    //  Ваш код

    const toast: IToast = {
      message: 'my message',
      title: 'my tillte',
      type: 'error',
      duration: 5000
    }
    
    this.toastService.addToast(toast);
    //  Ваш код
  }
}
```
### Планируемый новый функционал 
1. Указание времени отображения по умолчанию при инициализации (готово полностью)
2. Стопка сообщений
3. 2 вида отображения стопки сообщений
4. Выбор типа отображения (стопка/одиночный) при инициализации
5. Кастомная иконка для закрытия (+/-)
6. Избавиться от зависимости ng-icon
7. Выбор положения на экране

