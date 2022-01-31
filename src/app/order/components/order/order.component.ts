import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Depto } from 'src/app/core/models/depto.model';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  depto: Depto[] = [
    {value: "Atlántida", amount: 130},
    {value: "Colón", amount: 190},
    {value: "Comayagua", amount: 130},
    {value: "Copán", amount: 190},
    {value: "Cortés", amount: 114},
    {value: "Choluteca", amount: 209},
    {value: "El Paraíso", amount: 209},
    {value: "Francisco Morazán", amount: 130},
    {value: "Intibucá", amount: 209},
    {value: "Islas de la Bahía", amount: 190},
    {value: "La Paz", amount: 209},
    {value: "Lempira", amount: 209},
    {value: "Ocotepeque", amount: 209},
    {value: "Olancho", amount: 190},
    {value: "Santa Bárbara", amount: 130},
    {value: "Valle", amount: 209},
    {value: "Yoro", amount: 130}
  ]

  validators!: FormControl;
  products$: Observable<Product[]>;
  firstFormGroup!: FormGroup;
  image: string = 'assets/images/sticker1.png';

  constructor(
    private cartServices: CartService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.products$ = this.cartServices.cart$;
    this.firstFormGroup = {} as FormGroup;
    this.buildForm();
    this.validators = new FormControl('', [
      Validators.required
    ]);
  }

  ngOnInit(): void {
    //this.firstFormGroup = this.formBuilder.group({});//
  }

  private buildForm(){
    this.firstFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      id: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      mobile: ['', [Validators.required]],
      town: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      expiredDateM: ['',[Validators.required, Validators.max(12)]],
      expiredDateY: ['',[Validators.required,Validators.min(21), Validators.max(28)]],
      cvv: ['', [Validators.required, Validators.max(999)]],
      cardName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  Payment(event: Event) {
    event.preventDefault();
    if (this.firstFormGroup.valid) {
      this.router.navigate(['/home'])
    }
  }

  get Name() {
    return this.firstFormGroup.get('name');
  }

  get Id() {
    return this.firstFormGroup.get('id');
  }

  get Mobile() {
    return this.firstFormGroup.get('mobile');
  }

  get Town() {
    return this.firstFormGroup.get('town');
  }

  get Address() {
    return this.firstFormGroup.get('address');
  }

  get CardNumber() {
    return this.firstFormGroup.get('cardNumber');
  }

  get ExpiredDateM() {
    return this.firstFormGroup.get('expiredDateM');
  }

  get ExpiredDateY() {
    return this.firstFormGroup.get('expiredDateY');
  }

  get CVV() {
    return this.firstFormGroup.get('cvv');
  }

  get CardName() {
    return this.firstFormGroup.get('cardName');
  }

  get Email() {
    return this.firstFormGroup.get('email');
  }

  addCart(product: Product): void {
    console.log('agregar al carrito');
    this.cartServices.addCart(product);
  }

  deleteFromCart(id: string) {
    this.cartServices.deleteCart(id)
  }

  deleteOneByOne(id: string) {
    this.cartServices.deleteOne(id);
  }

  totalAmount(): number {
    let counter: number = 0;
    this.products$.subscribe((products) => {
      products.forEach((product) => {
        counter = counter + product.price
      });
    });
    return counter
  }
}
