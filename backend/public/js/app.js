'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var _ReactRouterDOM=ReactRouterDOM,HashRouter=_ReactRouterDOM.HashRouter,Route=_ReactRouterDOM.Route,Switch=_ReactRouterDOM.Switch,teal500='#00897B',blue100='#BBDEFB',green100='#C8E6C9',blue600='#039BE5',grey100='#F5F5F5',accentColor=blue600,primaryFgColor='#ffffff',primaryBgColor=teal500,tintColor=grey100,cardBg='#ffffff',bgColor='#eeeeee',subheaderColor='#555555',OWNER_LEVEL=3,EDITOR_LEVEL=2,MEMBER_LEVEL=1,VISITOR_LEVEL=0,UI_LEVELS={0:'Visitor',1:'Member',2:'Editor',3:'Owner'},PERMISSIONS={EDIT_USER:3,READ_USER:1,EDIT_FEED:2,READ_FEED:0,EDIT_LISTENER:1,READ_LISTENER:0,EDIT_TORRENT:1,READ_TORRENT:0,EDIT_SUBSCRIPTION:0,READ_SUBSCRIPTION:0,OWNER_LEVEL:3,EDITOR_LEVEL:2,MEMBER_LEVEL:1,VISITOR_LEVEL:0};function $hasProp(a,b){return Object.keys(a).includes(b)}function $to(a){return function(){return location.hash='#/'+a}}function $if(a,b){return a?b:null}function $level(a,b){return $if(user_level>=a,b)}function $bytes(a){return a=~~a,1024>a?a+' B':1048576>a?~~(a/1024).toFixed(3)+' KB':1073741824>a?~~(a/1048576).toFixed(3)+' MB':~~(a/1073741824).toFixed(3)+' GB'}function $handleError(a){a&&401===a.status&&location.reload(),console.warn(a)}function $closeModal(){$('#modal').html('').css('display','none')}function $openModal(a){$('#modal').css('display','block'),ReactDOM.render(a,$('#modal')[0])}function $confirmModal(a,b){return new Promise(function(c,d){$openModal(React.createElement(Modal,{title:a,onClose:function onClose(){$closeModal(),d()}},React.createElement(Padding,{style:{display:'flex',flexDirection:'column'}},React.createElement(Padding,null,b),React.createElement('div',{style:{display:'flex',justifyContent:'flex-end',padding:'16px'}},React.createElement('button',{type:'submit',style:{fontSize:'16px',padding:'8px'},onClick:function onClick(){$closeModal(),d()}},'No'),React.createElement('button',{type:'submit',className:'primary',style:{fontSize:'16px',padding:'8px'},onClick:function onClick(){$closeModal(),c()}},'Yes')))))})}function $ago(a){var b=Math.round,c=Date.now()/1e3,d=c-a;if(!a)return'Never';if(0>d)return'In The Future';if(10>d)return'Now';if(60>d)return'Moments Ago';if(3600>d)return b(d/60)+' Minute'+(1==b(d/60)?'':'s')+' Ago';if(86400>d)return b(d/60/60)+' Hour'+(1==b(d/60/60)?'':'s')+' Ago';if(604800>d)return b(d/60/60/24)+' Day'+(1==b(d/60/60/24)?'':'s')+' Ago';if(2592000>d)return b(d/60/60/24/7)+' Week'+(1==b(d/60/60/24/7)?'':'s')+' Ago';var e=new Date(a);return e.getDate()+' '+['January','February','March','April','May','June','July','August','September','October','November','December'][e.getMonth()]+' '+e.getFullYear()}function $filter(a,b){var c=[];return a.forEach(function(d){b(d)&&c.push(d)}),c}var Seedbox=function(a){function b(a){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a))}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){return React.createElement('div',{className:'mrseedbox',style:{backgroundColor:bgColor,display:'flex',flexDirection:'column'}},React.createElement(Toolbar,{title:'MrSeedbox'},React.createElement(HeaderRow,{flex:!0},React.createElement(IconButton,{primary:!0,icon:'home',onClick:$to('')}),$level(PERMISSIONS.READ_TORRENT,React.createElement(IconButton,{primary:!0,icon:'video_library',onClick:$to('emby')})),$level(EDITOR_LEVEL,React.createElement(IconButton,{primary:!0,icon:'file_download',onClick:$to('rutorrent')}))),React.createElement(HeaderRow,null,React.createElement(PopupButton,{title:'Animelist',icon:'list',id:'popup-animelist'},React.createElement(Animelist,null)),React.createElement(PopupButton,{title:'Chat',icon:'chat',id:'popup-chat'},React.createElement(Chat,null)),React.createElement(PopupButton,{title:'Subscriptions',icon:'stars',id:'popup-subscriptions'},React.createElement(Subscriptions,null)))),React.createElement(HashRouter,null,React.createElement(Switch,null,React.createElement(Route,{exact:!0,path:'/',component:Home}),$level(PERMISSIONS.READ_TORRENT,React.createElement(Route,{exact:!0,path:'/emby',component:Emby})),$level(EDITOR_LEVEL,React.createElement(Route,{exact:!0,path:'/rutorrent',component:RuTorrent})))))}}]),b}(React.Component);var Home=function(a){function b(a){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a))}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){return React.createElement('div',null,React.createElement(Dashboard,null),React.createElement(Feeds,null),$level(PERMISSIONS.READ_USER,React.createElement(Users,null)),React.createElement(Torrents,null))}}]),b}(React.Component),Dashboard=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a)),d={name:user_name,id:user_id,level:user_level,email:user_email},e=c.getWelcome();return c.state={user:d,welcome:e,listeners:{},subscriptions:[]},c.updateListeners=c.updateListeners.bind(c),c.updateListeners(),c.welcomeInterval=setInterval(function(){c.setState({welcome:c.getWelcome()}),c.updateListeners()},900000),c}return _inherits(b,a),_createClass(b,[{key:'updateListeners',value:function updateListeners(){var a=this;$.ajax({url:'/api/listeners'}).then(function(b){var c={};b.forEach(function(a){return c[a.id]=a}),$.ajax({url:'/api/user/listeners'}).then(function(b){b=$filter(b,function(a){return'undefined'==typeof a.last_seen||a.last_seen<c[a.listener_id].last_update}),a.setState({subscriptions:b,listeners:c})},$handleError)},$handleError)}},{key:'componentWillUnmount',value:function componentWillUnmount(){clearInterval(this.welcomeInterval)}},{key:'getWelcome',value:function getWelcome(){var a='Welcome',b=new Date,c=b.getHours(),d=b.getMinutes();return 5<=c&&8>=c&&(a='Good Morning'),8<c&&12>c&&(a='Top of the Morning'),12===c&&5>=d?a='It\'s High Noon':12<=c&&17>=c&&(a='Good Afternoon'),17<c&&21>=c&&(a='Good Evening'),(21<c||5>c)&&(a='Good Night'),a}},{key:'render',value:function render(){var a=this,b=this.state,c=b.user,d=b.welcome;return React.createElement('div',{style:{alignItems:'center',color:subheaderColor,display:'flex',flexDirection:'column',justifyContent:'center'}},React.createElement('h2',{style:{marginTop:'16px'}},d,', ',c.name),React.createElement('subhead',{style:{fontSize:'12px'}},c.email),React.createElement('sup',{style:{fontSize:'12px',marginBottom:'8px'}},UI_LEVELS[user_level],' #',user_id),$if(this.state.subscriptions.length,React.createElement('div',{style:{alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center'}},React.createElement('h2',{style:{marginBottom:'8px',marginTop:'16px'}},'You Have New Updates'),React.createElement('div',{style:{display:'flex',flexDirection:'row',flexWrap:'wrap',maxWidth:'300px',alignItems:'center',justifyContent:'center'}},this.state.subscriptions.map(function(b){return React.createElement(Chip,{primary:!0,icon:'visibility',key:b.listener_id,onClick:function onClick(){var c=Math.floor(Date.now()/1e3);$.ajax({url:'/api/user/listeners/'+b.listener_id,method:'PUT',data:{time:c}}).then(a.updateListeners,$handleError)}},a.state.listeners[b.listener_id].name)})))),React.createElement(IconButton,{icon:'exit_to_app',style:{position:'absolute',right:'0',top:'48px'},onClick:function onClick(){localStorage.saveUsername=!1,$.ajax('/logout').then(function(){return location.reload()},function(){return location.reload()})}}))}}]),b}(React.Component),Subscriptions=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={subscriptions:[],listeners:{}},c.updateListeners=c.updateListeners.bind(c),c.updateListeners(),c.updateInterval=setInterval(function(){c.updateListeners()},300000),c}return _inherits(b,a),_createClass(b,[{key:'updateListeners',value:function updateListeners(){var a=this;$.ajax({url:'/api/listeners'}).then(function(b){var c={};b.forEach(function(a){return c[a.id]=a}),$.ajax({url:'/api/user/listeners'}).then(function(b){b.forEach(function(a){a.unseen='undefined'==typeof a.last_seen||a.last_seen<c[a.listener_id].last_update}),a.setState({subscriptions:b,listeners:c})},$handleError)},$handleError)}},{key:'componentWillUnmount',value:function componentWillUnmount(){clearInterval(this.updateInterval)}},{key:'render',value:function render(){var a=this;return React.createElement('div',{style:{padding:'16px',maxHeight:'300px',overflowY:'auto'}},$if(!this.state.subscriptions.length,React.createElement('h2',{style:{alignItems:'center',color:subheaderColor,display:'flex',flexDirection:'column',justifyContent:'center',marginTop:'20px'}},React.createElement('span',null,'No Subscriptions'),React.createElement(Icon,null,'mood_bad'))),this.state.subscriptions.sort(function(c,a){return(a.unseen?1:0)-(c.unseen?1:0)}).map(function(b){return React.createElement(Chip,{primary:b.unseen,icon:'visibility'+(b.unseen?'':'_off'),key:b.listener_id,onClick:function onClick(){var c=b.unseen?Math.floor(Date.now()/1e3):a.state.listeners[b.listener_id].last_update-5;$.ajax({url:'/api/user/listeners/'+b.listener_id,method:'PUT',data:{time:c}}).then(a.updateListeners,$handleError)}},a.state.listeners[b.listener_id].name)}))}}]),b}(React.Component),Chat=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={messages:[]},c.updateMessages=c.updateMessages.bind(c),c.updateMessages(),c.updateInterval=setInterval(function(){c.updateMessages()},1e3),c}return _inherits(b,a),_createClass(b,[{key:'updateMessages',value:function updateMessages(){var a=this;$.ajax({url:'/api/messages'}).then(function(b){return a.setState({messages:b})},$handleError)}},{key:'componentWillUnmount',value:function componentWillUnmount(){clearInterval(this.updateInterval)}},{key:'render',value:function render(){var a=this;return React.createElement('div',{style:{display:'flex',flexDirection:'column',alignItems:'stretch'}},React.createElement('form',{style:{display:'flex',flexDirection:'row'},onSubmit:function onSubmit(b){b.preventDefault(),$.ajax({url:'/api/messages',method:'post',data:{msg:b.target.message.value}}).then(a.updateMessages,$handleError),b.target.message.value=''}},React.createElement(Input,{name:'message',autocomplete:'off',style:{flex:'1'},placeholder:'Message'})),React.createElement('div',{style:{overflowY:'auto',maxHeight:'200px',backgroundColor:bgColor}},this.state.messages.map(function(a){return a.user_id===user_id?React.createElement('div',{style:{borderRadius:'4px',backgroundColor:'#B2DFDB',padding:'4px',margin:'4px',marginLeft:'16px'}},React.createElement('div',null,a.message),React.createElement('div',{style:{color:subheaderColor,fontSize:'10px',textAlign:'right'}},$ago(a.time))):React.createElement('div',{style:{borderRadius:'4px',backgroundColor:cardBg,padding:'4px',margin:'4px',marginRight:'16px'}},React.createElement('div',{style:{fontWeight:'bold'}},a.name||'[deleted #'+a.user_id+']'),React.createElement('div',null,a.message),React.createElement('div',{style:{color:subheaderColor,fontSize:'10px',textAlign:'right'}},$ago(a.time)))})))}}]),b}(React.Component),Animelist=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={username:localStorage.MALName||'',ready:'true'===localStorage.saveUsername,saveUsername:'true'===localStorage.saveUsername},c}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var a=this,b=this.state,c=b.username,d=b.ready,e=b.saveUsername;return d?React.createElement('div',null,React.createElement('iframe',{style:{border:'none',height:'300px'},src:'https://myanimelist.net/animelist/'+c})):React.createElement('div',{style:{alignItems:'center',display:'flex',padding:'16px',flexDirection:'column',justifyContent:'center'}},React.createElement('form',{onSubmit:function onSubmit(b){b.preventDefault(),localStorage.MALName=b.target.username.value,a.setState({username:b.target.username.value,ready:!0})}},React.createElement(Input,{name:'username',placeholder:'MAL Username',defaultValue:c})),React.createElement('a',{style:{fontSize:'12px',fontStyle:'italic',marginTop:'8px'},target:'_blank',href:'https://gist.github.com/Meshiest/cf3a3a4e16f5669ce7540445bf5b4cbf'},'It\'s recommended to use this list style'),React.createElement('div',{style:{alignItems:'center',alignSelf:'stretch',color:'#999',cursor:'pointer',display:'flex',justifyContent:'flex-end',marginTop:'8px'},onClick:function onClick(){a.setState({saveUsername:!e}),localStorage.saveUsername=!e}},React.createElement('span',{style:{fontSize:'10px',marginRight:'4px'}},'Save Username'),React.createElement('i',{className:'material-icons',style:{fontSize:'16px'}},e?'check_box':'check_box_outline_blank')))}}]),b}(React.Component),Torrents=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={torrents:[],order:'progress',reverse:!0},c.getTorrents=c.getTorrents.bind(c),c.reorder=c.reorder.bind(c),c.order=c.order.bind(c),c}return _inherits(b,a),_createClass(b,[{key:'componentDidMount',value:function componentDidMount(){this.getTorrents()}},{key:'getProgress',value:function getProgress(a){var b=0,c=0;for(var d in a.files){var e=a.files[d].totalChunks,f=a.files[d].completedChunks;b+=e,c+=f,a.files[d].progress=f/e}return 100*(c/b)}},{key:'componentWillUnmount',value:function componentWillUnmount(){clearTimeout(this.updateTimeout)}},{key:'getTorrents',value:function getTorrents(){var a=this;clearTimeout(this.updateTimeout),$.ajax({url:'/api/torrents'}).then(function(b){b.forEach(function(a){a.progress=100*a.ratio,a.download=0,a.total=0,a.files.forEach(function(b){var c=b.completedChunks/b.totalChunks;a.download+=b.size,a.total+=b.size/c})}),a.setState({torrents:b}),a.updateTimeout=setTimeout(function(){return a.getTorrents()},Math.max(5e3,Math.min(6e4,1e3*b.length)))},function(b){$handleError(b),a.updateTimeout=setTimeout(function(){return a.getTorrents()},3e5)})}},{key:'order',value:function(){var a=this.state,c=a.order,d=a.reverse;return d=d?-1:1,function(e,a){return d*('string'==typeof e[c]?e[c].localeCompare(a[c]):e[c]-a[c])}}},{key:'reorder',value:function reorder(a){this.state.order===a?this.setState({reverse:!this.state.reverse}):this.setState({order:a,reverse:!1})}},{key:'render',value:function render(){var a=this;return React.createElement(Card,null,React.createElement(CardHeader,{title:'Torrents'},$level(PERMISSIONS.EDIT_TORRENT,React.createElement(AddButton,{placeholder:'Torrent or Magnet Link',onSubmit:function onSubmit(b){$.ajax({method:'post',url:'/api/torrents',data:{url:b}}).then(function(){a.getTorrents()},$handleError)}})),React.createElement(IconButton,{icon:'refresh',onClick:this.getTorrents})),this.state.torrents.length?React.createElement('div',{style:{overflow:'auto'}},React.createElement('table',{style:{borderCollapse:'collapse',width:'100%'}},React.createElement('thead',null,React.createElement(Th,{onClick:function onClick(){return a.reorder('name')},active:'name'===this.state.order,reverse:this.state.reverse,label:'Name'}),React.createElement(Th,{onClick:function onClick(){return a.reorder('progress')},active:'progress'===this.state.order,reverse:this.state.reverse,label:'Progress'}),React.createElement(Th,{onClick:function onClick(){return a.reorder('download')},active:'download'===this.state.order,reverse:this.state.reverse,label:'Down'}),React.createElement(Th,{onClick:function onClick(){return a.reorder('total')},active:'total'===this.state.order,reverse:this.state.reverse,label:'Size'})),this.state.torrents.sort(this.order()).map(function(b){return React.createElement(Torrent,{getTorrents:a.getTorrents,torrent:b,key:b.info_hash})}))):React.createElement('div',{style:{color:subheaderColor,padding:'16px',textAlign:'center'}},'No torrents. Try adding one!'))}}]),b}(React.Component),Torrent=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={expand:!1},c}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var a=this,b=this.props.torrent;return React.createElement('tbody',null,React.createElement('tr',{style:{backgroundColor:'downloading'===b.status?blue100:'seeding'===b.status?green100:grey100,cursor:'pointer'},onClick:function onClick(){return a.setState({expand:!a.state.expand})}},React.createElement(Td,{expand:!0},b.name),React.createElement(Td,{center:!0},React.createElement(Progress,{progress:b.progress})),React.createElement(Td,{right:!0},b.completed),React.createElement(Td,{right:!0},b.size)),$if(this.state.expand,React.createElement('tr',null,React.createElement('td',{colSpan:'4'},b.files.map(function(a){var b=a.completedChunks/a.totalChunks,c=encodeURI(a.path).replace(/&/g,'%26').replace(/;/g,'%3B');return React.createElement('div',{key:a.name,style:{alignItems:'center',display:'flex',padding:'4px',paddingLeft:'16px',paddingRight:'16px'}},React.createElement('a',{href:'/api/dl?file='+c,style:{textDecoration:'none'},target:'_blank'},React.createElement(IconButton,{icon:'attach_file'})),React.createElement('span',{style:{flex:'1',paddingLeft:'8px'}},React.createElement(Overflow,null,a.name)),React.createElement('span',null,$bytes(a.size*b)))})))))}}]),b}(React.Component),Users=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={users:[]},c.getUsers=c.getUsers.bind(c),c.showUserModal=c.showUserModal.bind(c),c}return _inherits(b,a),_createClass(b,[{key:'componentDidMount',value:function componentDidMount(){this.getUsers()}},{key:'getUsers',value:function getUsers(){var a=this;clearTimeout(this.updateTimeout),$.ajax({url:'/api/users'}).then(function(b){a.setState({users:b}),a.updateTimeout=setTimeout(function(){return a.getUsers()},60000)},function(b){$handleError(b),a.updateTimeout=setTimeout(function(){return a.getUsers()},60000)})}},{key:'showUserModal',value:function showUserModal(a,b){var c=this;return function(){b=b||{name:'',email:'',level:0},$openModal(React.createElement(Modal,{title:(a?'Add':'Edit')+' User',onClose:$closeModal},React.createElement(Padding,null,React.createElement('form',{style:{display:'flex',flexDirection:'column',alignItems:'stretch'},onSubmit:function onSubmit(d){if(d.preventDefault(),!!d.target.checkValidity()){var e,f={name:d.target.name.value,email:d.target.email.value,level:d.target.level.value};e=a?$.ajax({url:'api/users',method:'POST',data:f}):$.ajax({url:'api/users/'+b.id,method:'PUT',data:f}),$closeModal(),e.then(c.getUsers,$handleError)}}},React.createElement(Input,{name:'name',margin:!0,type:'text',placeholder:'User Name',defaultValue:b.name,required:!0}),React.createElement(Input,{name:'email',margin:!0,type:'text',defaultValue:b.email,hidden:user_level<PERMISSIONS.EDIT_USER,placeholder:'User Email',required:!0}),React.createElement('select',{name:'level',className:'input',style:{backgroundColor:cardBg,margin:'4px'},defaultValue:b.level,hidden:user_level<PERMISSIONS.EDIT_USER,required:!0},React.createElement('option',{value:'0'},'Visitor'),React.createElement('option',{value:'1'},'Member'),React.createElement('option',{value:'2'},'Editor'),React.createElement('option',{value:'3'},'Owner')),React.createElement('div',{style:{display:'flex',justifyContent:'flex-end'}},React.createElement('button',{type:'submit',className:'primary',style:{fontSize:'16px',padding:'8px'}},a?'CREATE':'EDIT'))))))}}},{key:'render',value:function render(){var a=this;return React.createElement(Card,null,React.createElement(CardHeader,{title:'Users'},$level(PERMISSIONS.EDIT_USER,React.createElement(IconButton,{icon:'add',onClick:this.showUserModal(!0)})),React.createElement(IconButton,{icon:'refresh',onClick:this.getUsers})),React.createElement('div',{style:{paddingBottom:'16px'}},this.state.users.map(function(b){return React.createElement(User,{user:b,key:b.id,refresh:a.getUsers,showUserModal:a.showUserModal})})))}}]),b}(React.Component),User=function(a){var b=a.user;return React.createElement('div',{style:{borderLeft:'solid 2px '+primaryBgColor,marginLeft:'16px',marginTop:'16px',padding:'8px'}},React.createElement('div',{style:{display:'flex'}},React.createElement('div',{style:{width:'300px'}},React.createElement('h2',{style:{fontWeight:'400'}},b.name,React.createElement('span',{style:{fontSize:'14px'}},'\xA0',UI_LEVELS[b.level],' #',b.id)),React.createElement('subhead',{style:{color:subheaderColor,fontSize:'12px'}},React.createElement(Overflow,null,b.email))),React.createElement('div',{style:{flex:'1',marginLeft:'8px',marginTop:'4px'}},React.createElement('div',{style:{whiteSpace:'nowrap',overflow:'hidden'}},'Online ',$ago(b.last_online)),React.createElement('div',{style:{whiteSpace:'nowrap',overflow:'hidden',fontSize:'10px'}},b.subscriptions,' Subscriptions')),$if(PERMISSIONS.EDIT_USER<=user_level||b.id===user_id,React.createElement('div',{style:{display:'flex'}},React.createElement(IconButton,{icon:'create',onClick:a.showUserModal(!1,b)}))),$level(PERMISSIONS.EDIT_USER,React.createElement('div',{style:{display:'flex'}},React.createElement(IconButton,{icon:'delete',onClick:function onClick(){$confirmModal('Delete User','Are you sure you want to delete user "'+b.name+'"?').then(function(){$.ajax({method:'delete',url:'/api/users/'+b.id}).then(a.refresh,$handleError)})}})))))},Feeds=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={feeds:[],listeners:[],subscriptions:{}},c.getFeeds=c.getFeeds.bind(c),c.showFeedModal=c.showFeedModal.bind(c),c.showListenerModal=c.showListenerModal.bind(c),c}return _inherits(b,a),_createClass(b,[{key:'componentDidMount',value:function componentDidMount(){this.getFeeds()}},{key:'getFeeds',value:function getFeeds(){var a=this;clearTimeout(this.updateTimeout),$.ajax({url:'/api/feeds'}).then(function(b){$.ajax({url:'/api/listeners'}).then(function(c){$.ajax({url:'/api/user/listeners'}).then(function(d){var e={};d.forEach(function(a){return e[a.listener_id]=a}),a.setState({listeners:c,subscriptions:e,feeds:b}),a.updateTimeout=setTimeout(function(){return a.getFeeds()},60000)},function(b){$handleError(b),a.updateTimeout=setTimeout(function(){return a.getFeeds()},60000)})},function(b){$handleError(b),a.updateTimeout=setTimeout(function(){return a.getFeeds()},60000)})},function(b){$handleError(b),a.updateTimeout=setTimeout(function(){return a.getFeeds()},60000)})}},{key:'showFeedModal',value:function showFeedModal(a,b){var c=this;return function(){b=b?{name:b.name,url:b.uri,duration:b.update_duration,id:b.id}:{name:'',url:'',duration:''},$openModal(React.createElement(Modal,{title:(a?'Add':'Edit')+' Feed',onClose:$closeModal},React.createElement(Padding,null,React.createElement('form',{style:{display:'flex',flexDirection:'column',alignItems:'stretch'},onSubmit:function onSubmit(d){if(d.preventDefault(),!!d.target.checkValidity()){var e,f={name:d.target.name.value,url:d.target.url.value,duration:d.target.duration.value};e=a?$.ajax({url:'api/feeds',method:'POST',data:f}):$.ajax({url:'api/feeds/'+b.id,method:'PUT',data:f}),$closeModal(),e.then(c.getFeeds,$handleError)}}},React.createElement(Input,{name:'name',margin:!0,type:'text',placeholder:'Feed Name',defaultValue:b.name,required:!0}),React.createElement(Input,{name:'url',margin:!0,type:'text',defaultValue:b.url,placeholder:'Feed Url',required:!0}),React.createElement(Input,{name:'duration',margin:!0,type:'number',defaultValue:b.duration,min:'15',step:'1',placeholder:'Feed Duration',required:!0}),React.createElement('div',{style:{display:'flex',justifyContent:'flex-end'}},React.createElement('button',{type:'submit',className:'primary',style:{fontSize:'16px',padding:'8px'}},a?'CREATE':'EDIT'))))))}}},{key:'showListenerModal',value:function showListenerModal(a,b,c){var d=this;return function(){c=c||{name:'',pattern:''},$openModal(React.createElement(Modal,{title:(a?'Add':'Edit')+' Listener',onClose:$closeModal},React.createElement(Padding,null,React.createElement('form',{style:{display:'flex',flexDirection:'column',alignItems:'stretch'},onSubmit:function onSubmit(f){if(f.preventDefault(),!!f.target.checkValidity()){var e,g={feed_id:b.id,name:f.target.name.value,pattern:f.target.pattern.value};e=a?$.ajax({url:'api/listeners',method:'POST',data:g}):$.ajax({url:'api/listeners/'+c.id,method:'PUT',data:g}),$closeModal(),e.then(d.getFeeds,$handleError)}}},React.createElement(Input,{name:'name',margin:!0,type:'text',placeholder:'Listener Name',defaultValue:c.name,required:!0}),React.createElement(Input,{name:'pattern',margin:!0,type:'text',defaultValue:c.pattern,placeholder:'Listener Pattern',required:!0}),React.createElement('div',{style:{display:'flex',justifyContent:'flex-end'}},React.createElement('button',{type:'submit',className:'primary',style:{fontSize:'16px',padding:'8px'}},a?'CREATE':'EDIT'))))))}}},{key:'render',value:function render(){var a=this;return React.createElement(Card,null,React.createElement(CardHeader,{title:'Feeds'},$level(PERMISSIONS.EDIT_FEED,React.createElement(IconButton,{icon:'add',onClick:this.showFeedModal(!0)})),React.createElement(IconButton,{icon:'refresh',onClick:this.getFeeds})),React.createElement('div',{style:{paddingBottom:'16px'}},this.state.feeds.map(function(b){return React.createElement(Feed,{feed:b,key:b.id,listeners:a.state.listeners,refresh:a.getFeeds,showFeedModal:a.showFeedModal,showListenerModal:a.showListenerModal,subscriptions:a.state.subscriptions})})))}}]),b}(React.Component),Feed=function(a){var b=a.feed;return React.createElement('div',{style:{borderLeft:'solid 2px '+primaryBgColor,marginLeft:'16px',marginTop:'16px',padding:'8px'}},React.createElement('div',{style:{display:'flex'}},React.createElement('div',{style:{flex:'1'}},React.createElement('h2',null,b.name,React.createElement('span',{style:{fontSize:'14px'}},'\xA0by ',b.creator_name)),React.createElement('subhead',{style:{color:subheaderColor,fontSize:'12px'}},React.createElement(Overflow,null,b.uri))),$level(PERMISSIONS.EDIT_LISTENER,React.createElement('div',{style:{display:'flex'}},React.createElement(IconButton,{icon:'playlist_add',onClick:a.showListenerModal(!0,b)}))),$level(PERMISSIONS.EDIT_FEED,React.createElement('div',{style:{display:'flex'}},React.createElement(IconButton,{icon:'create',onClick:a.showFeedModal(!1,b)}),React.createElement(IconButton,{icon:'delete',onClick:function onClick(){$confirmModal('Delete Feed','Are you sure you want to delete feed "'+b.name+'"?').then(function(){$.ajax({method:'delete',url:'/api/feeds/'+b.id}).then(a.refresh,$handleError)})}})))),React.createElement('div',null,$filter(a.listeners,function(a){return a.feed_id==b.id}).map(function(c){return React.createElement('div',{style:{alignItems:'center',display:'flex'}},React.createElement(IconButton,{icon:a.subscriptions[c.id]?'star':'star_border',onClick:function onClick(){return $.ajax({url:'api/user/listeners'+(a.subscriptions[c.id]?'/'+c.id:''),method:a.subscriptions[c.id]?'delete':'post',data:{listener_id:c.id}}).then(a.refresh,$handleError)}}),React.createElement('div',{style:{display:'flex',flexDirection:'column',width:'300px',marginLeft:'8px',marginTop:'4px'}},React.createElement(Overflow,{height:'15px'},c.name),React.createElement(Overflow,null,React.createElement('span',{style:{fontFamily:'monospace',fontSize:'10px'}},'/',c.pattern,'/i'))),React.createElement('div',{style:{display:'flex',flexDirection:'column',flex:'1',marginLeft:'8px',marginTop:'4px'}},React.createElement('div',{style:{whiteSpace:'nowrap',overflow:'hidden'}},$ago(c.last_update)),React.createElement('div',{style:{whiteSpace:'nowrap',overflow:'hidden',fontSize:'10px'}},c.subscribers,' Subscribers')),$level(PERMISSIONS.EDIT_LISTENER,React.createElement('div',{style:{display:'flex'}},React.createElement(IconButton,{icon:'create',onClick:a.showListenerModal(!1,b,c)}),React.createElement(IconButton,{icon:'delete',onClick:function onClick(){$confirmModal('Delete Listener','Are you sure you want to delete listener "'+c.name+'"?').then(function(){$.ajax({method:'delete',url:'/api/listeners/'+c.id}).then(a.refresh,$handleError)})}}))))})))},Emby=function(){return React.createElement('iframe',{style:{border:'none',flex:'1'},src:'/mb/web/index.html',allowFullScreen:!0})},RuTorrent=function(){return React.createElement('iframe',{style:{border:'none',flex:'1'},src:'/rutorrent/',allowFullScreen:!0})},Toolbar=function(a){return React.createElement('div',{style:{alignItems:'center',backgroundColor:primaryBgColor,color:primaryFgColor,display:'flex',flexDirection:'row',height:'48px',paddingRight:'20px',paddingLeft:'20px'}},React.createElement('h2',{style:{cursor:'pointer'},className:'toolbar-title',onClick:function onClick(){return location.hash='#/'}},a.title),a.children)},Icon=function(a){return React.createElement('i',{className:'material-icons',style:a.style},a.children)},IconButton=function(a){return React.createElement('div',{style:{alignItems:'center',display:'flex'}},React.createElement('button',_extends({onClick:a.onClick,type:$hasProp(a,'submit')?'submit':null,className:'icon-button'+($hasProp(a,'primary')?' primary':'')},a),React.createElement(Icon,null,a.icon)))},Chip=function(a){return React.createElement('div',{className:'chip'+(a.primary?' primary':''),onClick:a.onClick,style:{alignItems:'center',cursor:'pointer',display:'flex',height:'32px',borderRadius:'16px',paddingLeft:'8px',paddingRight:'8px'}},React.createElement('span',{style:{flex:'1'}},a.children),React.createElement(Icon,{style:{marginLeft:'4px'}},a.icon))},AddButton=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={show:!1},c.submit=c.submit.bind(c),c}return _inherits(b,a),_createClass(b,[{key:'submit',value:function submit(a){a.preventDefault();var b=a.target.field.value;a.target.field.value='',this.setState({show:!1}),this.props.onSubmit&&this.props.onSubmit(b)}},{key:'render',value:function render(){var a=this;return React.createElement('div',{style:{alignItems:'center',display:'flex',flexDirection:'row'}},$if(this.state.show,React.createElement('form',{onSubmit:this.submit,style:{alignItems:'center',display:'flex',flexDirection:'row'}},React.createElement(Input,{placeholder:this.props.placeholder,pattern:this.props.pattern,name:'field'}),React.createElement(IconButton,{icon:this.props.icon||'add',submit:!0}))),$if(!this.state.show,React.createElement(IconButton,{icon:this.props.icon||'add',onClick:function onClick(){return a.setState({show:!0})}})))}}]),b}(React.Component),PopupButton=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={open:!1},c.open=c.open.bind(c),c}return _inherits(b,a),_createClass(b,[{key:'open',value:function open(){var a=this;this.setState({open:!0});var b=this.props,c=b.id,d=b.title,e=b.children;$('<div id="'+c+'" style="display:flex;flex-direction:column;"/>').dialog({resizable:!1,title:d,open:function open(){ReactDOM.render(React.createElement('div',null,e),$('#'+c)[0])}}).on('dialogclose',function(){ReactDOM.unmountComponentAtNode($('#'+c)[0]),$('#'+c).remove(),a.setState({open:!1})})}},{key:'render',value:function render(){return $if(!this.state.open,React.createElement(IconButton,{icon:this.props.icon,primary:!0,onClick:this.open}))}}]),b}(React.Component),Input=function(a){return React.createElement('input',_extends({className:'input '+(a.className||''),style:{margin:$hasProp(a,'margin')?'4px':''}},a))},Card=function(a){return React.createElement('div',{style:{backgroundColor:cardBg,margin:'16px',flex:'1',maxWidth:$hasProp(a,'nostretch')?a.nostretch||'auto':'calc(100vw - 32px)'}},a.children)},Padding=function(a){return React.createElement('div',_extends({style:{padding:'16px'}},a),a.children)},Modal=function(a){return React.createElement('div',{style:{alignItems:'center',display:'flex',height:'100vh',backgroundColor:'rgba(0, 0, 0, 0.3)',justifyContent:'center',left:'0',top:'0',width:'100vw'},"data-wall":!0,onClick:function onClick(b){$(b.target).attr('data-wall')&&a.onClose&&a.onClose(b)}},React.createElement(Card,{nostretch:'300px',onClick:function onClick(a){return a.preventDefault()},style:{zIndex:'5'}},React.createElement(CardHeader,{title:a.title},$if(a.onClose,React.createElement(IconButton,{icon:'close',onClick:a.onClose}))),a.children))},CardHeader=function(a){return React.createElement('div',{style:{alignItems:'center',display:'flex',height:'48px',paddingLeft:'16px',paddingRight:'8px'}},React.createElement('h2',{style:{flex:'1'}},a.title),React.createElement('div',{style:{alignItems:'center',display:'flex',flexDirection:'row',justifyContent:'flex-end'}},a.children))},Th=function(a){return React.createElement('th',{onClick:a.onClick,style:{cursor:$hasProp(a,'nosort')?'':'pointer',fontSize:'0.8em',fontWeight:400}},React.createElement('span',{style:{alignItems:'center',display:'flex',justifyContent:'center'}},a.label,$if(!$hasProp(a,'nosort'),React.createElement(Icon,{style:a.active?{color:subheaderColor,transition:'all 0.5s ease'}:{color:'transparent',transition:'all 0.5s ease'}},a.reverse&&a.active?'expand_more':'expand_less'))))},Td=function(a){return React.createElement('td',{style:{padding:'4px',whiteSpace:'nowrap',overflow:$hasProp(a,'expand')?'hidden':'',width:$hasProp(a,'expand')?'100%':'auto',position:'relative',textAlign:$hasProp(a,'left')?'left':$hasProp(a,'center')?'center':$hasProp(a,'right')?'right':'',textOverflow:'elipsis'}},React.createElement('span',{style:{transition:'margin-left 1s ease',top:$hasProp(a,'expand')?'4px':'0',position:$hasProp(a,'expand')?'absolute':'relative'},onMouseOver:function onMouseOver(a){var b=$(a.target).width(),c=$(a.target).parent().width();b<=c||$(a.target).css({marginLeft:'-'+(b-c)+'px'})},onMouseLeave:function onMouseLeave(a){$(a.target).css({marginLeft:'0px'})}},a.children))},Overflow=function(a){return React.createElement('span',{style:{display:'flex',height:a.height||'20px',overflow:'hidden',position:'relative',textOverflow:'elipsis',whiteSpace:'nowrap'}},React.createElement('span',{style:{transition:'margin-left 1s ease',position:'absolute'},onMouseOver:function onMouseOver(a){var b=$(a.target).width(),c=$(a.target).parent().width();b<=c||$(a.target).css({marginLeft:'-'+(b-c)+'px'})},onMouseLeave:function onMouseLeave(a){$(a.target).css({marginLeft:'0px'})}},a.children))},Progress=function(a){var b=a.progress;return React.createElement('div',{style:{backgroundColor:subheaderColor,position:'relative',height:'20px',width:a.width||'80px'}},React.createElement('div',{style:{color:primaryFgColor,left:'50%',position:'absolute',top:'50%',transform:'translate(-50%, -50%)'}},Math.round(b),'%'),React.createElement('div',{style:{backgroundColor:accentColor,height:'100%',width:b+'%'}}))},HeaderRow=function(a){return React.createElement('div',{style:{alignItems:'center',display:'flex',flex:$hasProp(a,'flex')?'1':'',justifyContent:'center'}},a.children)},Flex=function(a){return React.createElement('div',{style:{flex:1}},a.children)};ReactDOM.render(React.createElement(Seedbox,null),$('#root')[0]);
