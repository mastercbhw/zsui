<template>
    <div>
        <zs-breadcrumb>
            <zs-breadcrumb-item :to='{name:"bbb"}'>aaa</zs-breadcrumb-item>
            <zs-breadcrumb-item>bbb</zs-breadcrumb-item>
            <span slot='right-option'>
                <zs-button @click='$toast.error("error")' text='error' icon='icon-export'></zs-button>
                <zs-button @click='$toast.warn("warn")' text='warn'></zs-button>
                <zs-button @click='getNext' text='反复' icon='icon-edit'></zs-button>
                <zs-button @click='zeff' text='反反复复' icon='icon-export'></zs-button>
            </span>
        </zs-breadcrumb>
        <zs-paging :current='current' :all='15' @paging='paging'></zs-paging>
        <zs-button @click='testAdd'>111</zs-button>
        <zs-button type='white' @click='confirm' text='success'></zs-button>
        <zs-dialog :show='aaa' @enter='aaa=false' @close='aaa=false'>
            <div slot='main'>111
                <zs-select></zs-select>
            </div>
            <div slot='btn'>
                <zs-button text='取消'></zs-button>
                <zs-button text='确定' @click='aaa=false'></zs-button>
            </div>
        </zs-dialog>
        <zs-button @click='$toast.error("error")' text='error' icon='icon-export'></zs-button>
        <zs-button @click='$toast.warn("warn")' text='warn'></zs-button>
        <zs-button type='gray' text='确定'></zs-button>
        <zs-button text='反反' icon='icon-edit'></zs-button>
        <zs-button @click='zeff' text='反反复复' icon='icon-export'></zs-button>
        <!--<zs-cascader :data="data1" v-model="testVal"></zs-cascader>-->
        <zs-checkbox :check='check' @click='check=!check'></zs-checkbox>
        <zs-button widthType='mini' text='fasdf'></zs-button>
        <div>
            <zs-paging :current='current' :all='16'></zs-paging>
        </div>
        <zs-select :optionList="list" v-model="haha" :disabled='d'></zs-select>
        <zs-button @click='d=!d' text='切换'></zs-button>
        <zs-button text='31413' icon='icon-upload'></zs-button>
        <zs-button text='31413' icon='icon-download'></zs-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                aaa: false,
                check: false,
                d:true,
                current: 1,
                data1: [],
                testVal: [],
                newVal: [],
                list: [
                    {label: 'aaa', value: 1},
                    {label: 'bbb', value: 2}
                ],
                haha: 1
            }
        },
        methods: {
            paging($event) {
                this.current = $event
            },
            confirm() {
                this.$confirm('确定删除吗?')
                    .then(res => {
                        if (res) {
                            this.$toast.success('点击了确定')
                        } else {
                            this.$toast.error('点击了取消')
                        }
                    })
            },
            zeff() {
                this.$alert.success({
                    title: '这是啊',
                    msgTitle: '删除',
                    msg: '法大师傅大师傅的撒大网大王德瓦达'
                })
            },
            mockAjax() {
                var a = new Promise((resolve) => {
                    setTimeout(() => {
                        let data = [{
                            value: 'beijing',
                            label: '人文系',
                            children: [
                                {
                                    value: 'gugong',
                                    label: '故宫'
                                },
                                {
                                    value: 'tiantan',
                                    label: '天坛'
                                },
                                {
                                    value: 'wangfujing',
                                    label: '王府井'
                                }
                            ]
                        }, {
                            value: 'jiangsu',
                            label: '信息系',
                            children: [
                                {
                                    value: 'nanjing',
                                    label: '电子技术',
                                    children: [
                                        {
                                            value: 'fuzimiao',
                                            label: '电气自动化',
                                        }
                                    ]
                                },
                                {
                                    value: 'suzhou',
                                    label: '苏州',
                                    children: [
                                        {
                                            value: 'zhuozhengyuan',
                                            label: '拙政园',
                                        },
                                        {
                                            value: 'shizilin',
                                            label: '狮子林狮子',
                                        }
                                    ]
                                }
                            ],
                        }]
                        resolve(data)
                    }, 1000)
                })
                return a
            },
            testAdd() {
                this.testVal = ['jiangsu', 'nanjing', 'fuzimiao']
            },
            getNext() {
                this.testVal = ['beijing', 'gugong']
            }
        },
        created() {
            console.log(window.atob ? window.atob(this.$route.query.key) : this.$route.query.key)
        },
        activated() {
            this.current++
        },
        mounted() {
            this.mockAjax().then((data) => {
                this.testVal = ['jiangsu', 'nanjing', 'fuzimiao']
                this.data1 = data
                this.haha = 2
            })

        }
    }

</script>
