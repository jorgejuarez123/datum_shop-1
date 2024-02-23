import { ChangeDetectorRef, Component, OnInit, Output, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/shared/services/ecommerce/product.service';
import { Products } from 'src/app/shared/model/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductBoxFilterService } from 'src/app/shared/services/ecommerce/product-box-filter.service';
import { DrProduct } from 'src/app/shared/model/dr-product.model';
import { DrServiceService } from 'src/app/shared/services/cart/dr-service.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {
  @Output() productDetail: any;
  dirBase = 'assets/images/products';
  imagenes = [
    'arrocera.png',
    'cable_vga.png',
    'combo_teclado_raton.png',
    'horno_electrico.png',
    'mac.png',
    'pc_gamer.png',
    'silla.png',
    'aspiradora_robot.png',
    'cafetera.png',
    'gamecube.png',
    'juego_hoyas.png',
    'microondas.png',
    'ps2.png',
    'tetera.png',
    'batidora_jugos.png',
    'cafetera_artesanal.png',
    'headset.png',
    'juego_te.png',
    'parlante.png',
    'ps4.png',
    'batidora_masa.png',
    'combo_teclado_mouse.png',
    'horno.png',
    'laptop_msi.png',
    'pc_all_in_one.png',
    'router.png',
  ];

  product!: string;
  listData: DrProduct[] = [];
  cantidad = 1;
  sidebaron: boolean = false;
  show: boolean = false;
  open: boolean = false;
  cargando = true;
  public listView: boolean = false;
  public col_xl_12: boolean = false;
  public col_xl_2: boolean = false;

  public col_sm_3: boolean = false;
  public col_xl_3: boolean = true;
  public xl_4: boolean = true;
  public col_sm_4: boolean = false;
  public col_xl_4: boolean = false;
  public col_sm_6: boolean = true;
  public col_xl_6: boolean = false;
  public gridOptions: boolean = true;
  public active: boolean = false;

  constructor(
    private ProductService: ProductService,
    private modalService: NgbModal,
    private ProductBoxFilterService: ProductBoxFilterService,
    private cd: ChangeDetectorRef,
    private drCartService: DrServiceService
  ) {
  }

  openMediaFilter() {
    if (this.show == false && this.sidebaron == false && this.open == false) {
      this.show = true
      this.sidebaron = true
      this.open = true
    } else {
      this.show = false
      this.sidebaron = false
      this.open = false
    }
  }

  openProductDetail(content: any, id: number) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.ProductService.getProduct(id).subscribe((product) => {
      this.productDetail = product;
    });
  }

  ngOnInit() {
    this.obtenerProductos();
    // this.ProductService.drGetProducts().subscribe((data: DrProduct[]) => {
    //   console.log(data)
    //   this.listData = data;
    // });
    // this.cargaMasiva();
  }

  obtenerProductos(): void {
    this.cargando = true;
    this.cantidad += 1;
    if (this.cantidad > 30) this.cantidad = 10;
    this.ProductService.drGetProductosPorCantidad(this.cantidad).subscribe((res) => {
      res.productoRespuesta?.forEach((prd: any) => {
        this.listData.push({
          idProductos: this.listData.length + 1,
          nombreProducto: prd.nombreProducto,
          precio: this.aleatorio(2000),
          descripcion: this.loremIpsu(this.aleatorio(15)),
          imagen: `${this.dirBase}/${this.imagenes[Math.floor(Math.random() * this.imagenes.length)]}`,
          marca: this.marca(this.aleatorio(8)),
          moneda: 'L. ',
          qty: 1,
          ranking: 5
        });
      });
      this.cargando = false;
    },
      (_) => {
        this.cargando = false;
      });
  }

  loremIpsu(wordCount: number) {
    // Texto Lorem Ipsum original
    const loremIpsumText = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";

    const words = loremIpsumText.split(" ");

    let randomLoremIpsum = "";
    for (let i = 0; i < wordCount; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      randomLoremIpsum += words[randomIndex] + " ";
    }
    return randomLoremIpsum.trim();
  }

  marca(i: number): string {
    return ['Nike', 'Adidas', 'HP', 'Samsung', 'Pavilon', 'Polo', 'Joma', 'Huawei', 'Oracle'][i];
  }

  ngDoCheck() {
    this.col_xl_12 = this.ProductBoxFilterService.col_xl_12;
    this.col_xl_2 = this.ProductBoxFilterService.col_xl_2;
    this.col_sm_3 = this.ProductBoxFilterService.col_xl_12;
    this.col_xl_3 = this.ProductBoxFilterService.col_xl_3;
    this.xl_4 = this.ProductBoxFilterService.xl_4;
    this.col_sm_4 = this.ProductBoxFilterService.col_sm_4;
    this.col_xl_4 = this.ProductBoxFilterService.col_xl_4;
    this.col_sm_6 = this.ProductBoxFilterService.col_sm_6;
    this.col_xl_6 = this.ProductBoxFilterService.col_xl_6;
  }

  agregarAlCarrito(product: DrProduct): void {
    this.drCartService.agregar(product);
  }

  cargaMasiva(): void {
    this.ProductService.drMassiveGetProducts(100000).subscribe((_) => {
      console.log('completada', _)
    });
  }

  aleatorio(fin: number): number {
    return Math.floor(Math.random() * fin) + 1;
  }
}