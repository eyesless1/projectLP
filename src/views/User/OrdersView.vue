<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text--primary mb-5">My Orders</h1>
        
        <v-card
          v-for="order in orders"
          :key="order.id"
          class="mb-3"
        >
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="4">
                <strong>Order ID:</strong> {{ order.id }}
              </v-col>
              <v-col cols="12" sm="4">
                <strong>Name:</strong> {{ order.name }}
              </v-col>
              <v-col cols="12" sm="4">
                <strong>Phone:</strong> {{ order.phone }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <strong>Ad ID:</strong> {{ order.adId }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <strong>Status:</strong>
                <v-chip :color="order.done ? 'success' : 'warning'" small>
                  {{ order.done ? 'Completed' : 'In progress' }}
                </v-chip>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text :to="'/ad/' + order.adId">View Ad</v-btn>
          </v-card-actions>
        </v-card>
        
        <v-alert
          v-if="orders.length === 0"
          type="info"
          class="mt-5"
        >
          You have no orders yet.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    orders() {
      return this.$store.getters.orders || []
    }
  }
}
</script>