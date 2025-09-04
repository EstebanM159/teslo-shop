import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';
import { ProductsService } from '@products/services/products.service';

@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  productsService = inject(ProductsService);
  activatedRoute = inject(ActivatedRoute);
  // En este caso no conviene suscribirnos a los parametros
  // Ya que la ruta no va a cambiar de forma dinamica en este componente
  // productIdSlug = toSignal(
  //   this.activatedRoute.params.pipe(map((params) => params['idSlug']))
  // );
  productIdSlug: string = this.activatedRoute.snapshot.params['idSlug'];

  productResource = rxResource({
    request: () => ({ idSlug: this.productIdSlug }),
    loader: ({ request }) => {
      return this.productsService.getProductByIdSlug(request.idSlug);
    },
  });
}
