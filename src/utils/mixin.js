import { deviceEnquire, DEVICE_TYPE } from '@/utils/device';
import { mapState } from 'vuex';

const mixinDevice = {
    computed: {
        ...mapState({
            device: state => state.app.device
        })
    },
    methods: {
        isMobile () {
            return this.device === DEVICE_TYPE.MOBILE
        },
        isDesktop () {
            return this.device === DEVICE_TYPE.DESKTOP
        },
        isTablet () {
            return this.device === DEVICE_TYPE.TABLET
        }
    }
}

const AppDeviceEnquire = {
    mounted () {
        console.log(1)
        const { $store } = this;
        deviceEnquire(deviceType => {
            switch (deviceType) {
            case DEVICE_TYPE.DESKTOP:
                $store.commit('App/TOGGLE_DEVICE', 'desktop')
                break
            case DEVICE_TYPE.TABLET:
                $store.commit('App/TOGGLE_DEVICE', 'tablet')
                break
            case DEVICE_TYPE.MOBILE:
            default:
                $store.commit('App/TOGGLE_DEVICE', 'mobile')
                break
            }
        })
    }
}

export { AppDeviceEnquire, mixinDevice }