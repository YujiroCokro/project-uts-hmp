import { Service } from '@angular/core';

@Service()
export class Theme {
    private key = 'simobile-dark';
    isDark = false;

    init() {
        this.set(localStorage.getItem(this.key) === '1');
    }

    set(dark: boolean) {
        this.isDark = dark;
        document.documentElement.classList.toggle('ion-palette-dark', dark);
        localStorage.setItem(this.key, dark ? '1' : '0');
    }
}
