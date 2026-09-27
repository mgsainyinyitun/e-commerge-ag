import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  imports: [DecimalPipe],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  products: Product[] = [
    {
      id: 1,
      name: '特上抹茶 (Premium Matcha)',
      price: 2500,
      image: 'https://placehold.co/600x600/10b981/ffffff?text=Premium+Matcha',
      description: '京都・宇治の厳選された茶葉を使用した最高級抹茶です。'
    },
    {
      id: 2,
      name: '伝統的な急須 (Traditional Teapot)',
      price: 5800,
      image: 'https://placehold.co/600x600/f59e0b/ffffff?text=Traditional+Teapot',
      description: '職人の手によって一つ一つ丁寧に作られた常滑焼の急須。'
    },
    {
      id: 3,
      name: '桜のお香 (Sakura Incense)',
      price: 1200,
      image: 'https://placehold.co/600x600/ec4899/ffffff?text=Sakura+Incense',
      description: '春の訪れを感じさせる、上品で優しい桜の香り。'
    },
    {
      id: 4,
      name: '和風セラミックカップ (Ceramic Cup)',
      price: 1800,
      image: 'https://placehold.co/600x600/3b82f6/ffffff?text=Ceramic+Cup',
      description: 'お茶やコーヒーに最適な、手作りの温かみがあるカップ。'
    }
  ];
}
