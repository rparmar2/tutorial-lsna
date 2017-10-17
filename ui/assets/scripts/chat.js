/**
 * Redirect (if no current user)
 */

// Paste Redirect code below //

// Paste Redirect code above //

/**
 * Sign Out
 */

function signOut() {
  WeDeploy
  	.auth(address.auth)
    .signOut()
    .then(() => {
      document.location.href = './index.html';
    });
}

/**
 * Get screen size
 */

window.addEventListener('load', onresize);
window.addEventListener('resize', onresize);

function onresize() {
	document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
}

/**
 * Get Old Messages
 */

// Paste Get Old Messages code below //
function userCreate() {
  WeDeploy
    .auth(address.auth)
    .createUser({
      name: create.name.value,
      email: create.email.value,
      password: create.password.value,
      color: 'color-' + Math.floor(Math.random() * 19)
    })
    .then(function() {
      create.submit.disabled = true;
      create.submit.innerText = 'Loading...';

      WeDeploy
        .auth(address.auth)
        .signInWithEmailAndPassword(create.email.value, create.password.value)
        .then(function() {
          document.location.href = './chat.html';
        })
        .catch(function() {
          alert('Sign-in failed.');
        });
    })
    .catch(function() {
      create.submit.disabled = false;
      create.submit.innerText = 'Create Account';
      alert('Sign-up failed.');
    })
};
// Paste Get Old Messages code above //

/**
 * New Message
 */

var conversation = document.querySelector('.conversation-container');

document.querySelector('.conversation-compose').addEventListener('submit', newMessage);

function newMessage(e) {
	var currentUser = WeDeploy.auth(address.auth).currentUser;
	var input = e.target.input;

	if (input.value) {
		var data = {
			id: 'uuid' + Date.now(),
			author: {
				id: currentUser.id,
				name: currentUser.name,
				color: currentUser.color
			},
			content: input.value,
			time: moment().format('h:mm A')
		};

// Paste Save New Message code below //

// Paste Save New Message code above //
	}

	e.preventDefault();
}

function appendMessage(data) {
	var element = buildMessage(data);
	element.id = data.id;
	conversation.appendChild(element);
	conversation.scrollTop = conversation.scrollHeight;
}

function buildMessage(data) {
	var currentUser = WeDeploy.auth(address.auth).currentUser;
	var color = (data.author.id !== currentUser.id) ? data.author.color : '';
	var sender = (data.author.id !== currentUser.id) ? 'received' : 'sent';

	var element = document.createElement('div');

	element.classList.add('message', sender);
	element.innerHTML = '<span class="user ' + color + '">' + data.author.name + '</span>' +
		'<span class="text">' + data.content + '</span>' +
		'<span class="metadata">' +
			'<span class="time">' + data.time + '</span>' +
			'<span class="tick tick-animation">' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
			'</span>' +
		'</span>';

	return element;
}

function animateMessage(message) {
	var tick = message.querySelector('.tick');
	tick.classList.remove('tick-animation');
}

/**
 * Watch New Messages
 */

// Paste Watch New Messages code below //
function userCreate() {
  WeDeploy
    .auth(address.auth)
    .createUser({
      name: create.name.value,
      email: create.email.value,
      password: create.password.value,
      color: 'color-' + Math.floor(Math.random() * 19)
    })
    .then(function() {
      create.submit.disabled = true;
      create.submit.innerText = 'Loading...';

      WeDeploy
        .auth(address.auth)
        .signInWithEmailAndPassword(create.email.value, create.password.value)
        .then(function() {
          document.location.href = './chat.html';
        })
        .catch(function() {
          alert('Sign-in failed.');
        });
    })
    .catch(function() {
      create.submit.disabled = false;
      create.submit.innerText = 'Create Account';
      alert('Sign-up failed.');
    })
};
// Paste Watch New Messages code above //
