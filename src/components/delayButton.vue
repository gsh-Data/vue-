<script>
  /**
   * @Description: 防抖按钮一键生成
   * @author Mr.Long
   * @date 2021/1/14
  */
  export default {
    name: 'MenuItem',
    functional: true,
    /**
     * 属性跟element按钮一样
     * element-ui: https://element.eleme.cn/#/zh-CN/component/button
    */
    props: {
      //朴素按钮
      plain:{
        type: Boolean,
        default: false
      },
      //是否禁用
      loading:{
        type: Boolean,
        default: false
      },
      //尺寸
      size: {
        type: String,
        default: 'small'
      },
      //是否禁用
      round:{
        type: Boolean,
        default: false
      },
      //是否禁用
      disabled:{
        type: Boolean,
        default: false
      },
      //按钮类型
      icon: {
        type: String,
        default: ''
      },
      //按钮类型
      type: {
        type: String,
        default: 'primary'
      },
      //按钮标题
      title: {
        type: String,
        default: ''
      },
      //按钮点击事件
      buttonOnclick: {
        type: Function,
        default: () => {}
      },
    },
    //渲染按钮
    render(h, context) {
      const { icon, type, title,disabled,size,plain,loading, round,buttonOnclick } = context.props;
      return [<el-button type={type} plain={plain} loading={loading} size={size} round={round} disabled={disabled} icon={icon} v-delay on-click={buttonOnclick}>{title}</el-button>];
    }
  }
</script>