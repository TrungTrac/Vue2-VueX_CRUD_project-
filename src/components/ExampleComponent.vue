<template >
    <div>
        <p>Count: {{getCount }}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementAsync">Increment Async</button>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    computed: {
       ...mapGetters(['getCount']),
    },
    methods: {
       ...mapMutations(['increment', 'decrement']),
       ...mapActions(['incrementAsync'])
    }
}
</script>
<style >
    
</style>