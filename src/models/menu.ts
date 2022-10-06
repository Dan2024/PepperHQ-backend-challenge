// @ts-nocheck
export default class Menu {
  #titlesHashMap = {};
  #productLengthsCounter = {};
  #flattenedProductsArr = [];
  #extendedFlattenedProductsArr = [];
  #startOfArr = 0;
  #newMenuWithExtendedProducts = [];

  constructor(categories, titles) {
    this.categories = categories;
    this.titles = titles;
    this.#createHashMap();
    this.#getProductLengthsForEachCategory();
    this.#flattenAllProductArrays();
    this.#extendFlattenedProductsArray();
    this.#recreateCategoryAndProductObjectsInNewArr();
  }

  #createHashMap() {
    this.titles.forEach((title) => {
      this.#titlesHashMap[title.id] = title.title;
    });
  }

  #getProductLengthsForEachCategory() {
    this.categories.forEach((category, i) => {
      this.#productLengthsCounter[i] = category.products.length;
    });
  }

  #flattenAllProductArrays() {
    this.categories.forEach((category, i) => {
      this.#flattenedProductsArr = [...this.#flattenedProductsArr, ...category.products];
    });
  }

  #extendFlattenedProductsArray() {
    this.#extendedFlattenedProductsArr = this.#flattenedProductsArr.map((product) => {
      return { ...product, title: this.#titlesHashMap[product.id] };
    });
  }

  #recreateCategoryAndProductObjectsInNewArr() {
    for (let i = 0; i < this.categories.length; i++) {
      const currentCategory = this.categories[i];
      const recreatedCategory = { id: currentCategory.id, products: [] };
      const endOfArray = this.#startOfArr + this.#productLengthsCounter[i];

      recreatedCategory.products = this.#extendedFlattenedProductsArr.slice(
        this.#startOfArr,
        endOfArray
      );
      this.#startOfArr = endOfArray;

      this.#newMenuWithExtendedProducts.push(recreatedCategory);
    }

    delete this.titles;
    this.categories = this.#newMenuWithExtendedProducts;
  }
}
