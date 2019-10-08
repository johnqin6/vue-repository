import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './guide'

export default {
  data () {
    return {
      driver: null
    }
  },
  mounted () {
    this.driver = new Driver({
      opacity: 0.6,
      onReset: () => {
        // 解决fixed显示空白bug
        document.getElementsByClassName('header')[0].getElementsByClassName.position = 'fixed'
        this.driver.start()
      }
    })
  },
  methods: {
    guide () {
      this.driver.defineSteps(steps)
      document.getElementsByClassName('header')[0].getElementsByClassName.position = 'absolute'
    }
  }
}
