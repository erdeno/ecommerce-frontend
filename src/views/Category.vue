<template>
  <div class="page-category">
    <div class="columns is-multiline">
      <h2 class="is-size-2 has-text centered">{{ category.name }}</h2>
    </div>

    <product-box
      v-for="product in category.products_category"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'

import ProductBox from '@/components/ProductBox'

export default {
  name: 'Category',
  components: {
    ProductBox,
  },
  data() {
    return {
      category: {
        products: [],
      },
    }
  },
  mounted() {
    this.getCategory()
  },
  watch: {
    $route(to) {
      if (to.name === 'Category') {
        this.getCategory()
      }
    },
  },
  methods: {
    async getCategory() {
      const categorySlug = this.$route.params.category_slug
      this.$store.commit('setIsLoading', true)
      await axios
        .get(`/api/v1/products/${categorySlug}/`)
        .then((response) => {
          this.category = response.data
          document.title = this.category.name + ' | Djackets'
        })
        .catch((error) => {
          console.log(`error`, error)
          toast({
            message: 'Something went wrong. Please try again.',
            type: 'is-danger',
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'bottom-right',
          })
        })
      this.$store.commit('setIsLoading', false)
    },
  },
}
</script>

<style></style>
