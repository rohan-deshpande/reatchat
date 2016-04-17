var Chat = React.createClass({

    socket: false,

    port: 8080,

    getInitialState: function () {
        return {
            joined: false,
            user: '',
            messages: [],
            message: ''
        };
    },

    componentDidMount: function () {
        var _this = this;

        this.socket = new WebSocket('ws://localhost:' + this.port);

        this.socket.onopen = function (e) {
            console.log('client connection established');
        };

        this.socket.onmessage = function (e) {
            console.log('message received from I/O server');

            var messages = _this.state.messages.slice(0);

            messages.push(JSON.parse(e.data));

            _this.setState({messages: messages}, jdenticon);
        };
    },

    renderJoinForm: function () {
        if (this.state.joined === true) return;

        return (
            <form onSubmit={this.handleJoin}>
                <input
                    type='text'
                    className='input join'
                    placeholder='Please enter your name'
                    onChange={this.setUser}
                />
                <button className='join' type='submit'>
                    Join
                </button>
            </form>
        );
    },

    renderMessageForm: function () {
        if (this.state.joined === false) return;

        return (
            <div>
                <form className='message-box' onSubmit={this.handleSend}>
                    <input type='text'
                        ref='message'
                        className='text'
                        onChange={this.setMessage}
                        value={this.state.message}
                    />
                </form>
            </div>
        );
    },

    handleJoin: function (e) {
        e.preventDefault();

        var _this = this;
        var data = {
            user: this.state.user,
            time: moment().format('hh:mm a'),
            message: ' has joined the chat'
        };

        this.setState({joined: true}, function () {
            _this.socket.send(JSON.stringify(data));
        });
    },

    setMessage: function (e) {
        this.setState({message: e.target.value});
    },

    setUser: function (e) {
        this.setState({user: e.target.value});
    },

    handleSend: function (e) {
        e.preventDefault();

        var _this = this;
        var data = {
            user: this.state.user,
            message: this.state.message,
            time: moment().format('hh:mm a')
        };

        this.setState({message: ''}, function () {
            _this.socket.send(JSON.stringify(data));
        });
    },

    componentDidUpdate: function () {
        window.scrollTo(0, document.body.scrollHeight); 
    },

    render: function () {
        return (
            <div className='chat'>
                <div className='room'> {
                    this.state.messages.map(function (message, i) {
                        return (
                            <div className='message cf' key={'message' + i}>
                                <canvas
                                    className='avatar'
                                    width='40'
                                    height='40'
                                    data-jdenticon-hash={md5(message.user)}
                                />
                                <div className='message-body'>
                                    <a href='' className='message-username'>
                                        {message.user}
                                    </a>
                                    <span className='message-timestamp'>
                                        {message.time}
                                    </span>
                                    <p className='message-content'>
                                        {message.message}
                                    </p>
                                </div>
                            </div>

                        );
                    })
                }
                </div>
                <div className='interface'>
                    <div className='fixed'>
                        {this.renderJoinForm()}
                        {this.renderMessageForm()}
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Chat />, document.getElementById('app'));
