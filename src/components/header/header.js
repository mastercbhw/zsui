export default {
    data() {
        return {
            systemListFlag: false,
            roleListFlag: false
        }
    },
    props: [
        'systemList',
        'systemConfig',
        'currentSystem',
        'roleList',
        'roleConfig',
        'currentRole',
        'exitUrl',
        'homeUrl',
        'username'
    ],
    computed: {
        config() {
            return {
                systemConfig: Object.assign({
                    name: 'name',
                    url: 'url'
                }, this.systemConfig),
                roleConfig: Object.assign({
                    name: 'name',
                    key: 'key'
                }, this.roleConfig)
            }
        }
    },
    methods: {
        link(item) {
            window.location.assign(item[this.config.systemConfig.url])
        },
        exit() {
            this.$emit('exit')
        },
        home() {
            window.location.assign(this.homeUrl)
        },
        roleListClick(item) {
            this.$emit('roleClick', item)
        }
    }
}