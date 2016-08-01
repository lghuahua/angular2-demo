import { Component }   from '@angular/core';
import { NgForm }      from '@angular/forms';
import { User }    from './user';

@Component({
  moduleId: module.id,
  templateUrl: 'components/users/user-list.html'
})

export class UserListComponent {
  addresses = ['biejing', 'shanghai', 'hangzhou'];
  model = new User(1, 'test', this.addresses[0]);

  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;
  newuser() { this.model = new User(2, '', '');
      this.active = false;
      setTimeout(() => this.active = true, 0)
    };
}