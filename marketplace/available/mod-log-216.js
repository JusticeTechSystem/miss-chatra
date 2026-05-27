// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KA2FZLGNaGwrJZLdUa5T/A369nntyUIamg1/d0diEyxEWEpq1QYQexNApG2fkatt+sdCUZvLHXAqAiZQA9o5LYRG1F7uTwFAohaaqVznBaQY/xHiV7X/ybFo3kGNRVZF2m5ZMXbxz5sGc239B3h0mtv8ZlYAwDIZbezXB2fQESe4uS2FkFmXeR9tLH2LuEnj+VMemCSjm1+FOl+p6noacvvY3LFwO7NxUPfFHTNkIU20ZIzDznLv23B3cEw4ukJGpsfYY3oOcMNq88QvdZBZrbilvFpDedADZPGdycEE9XE7w8lH8TTWNk0oF80TaDfDL4xiiLlsmRqeWqT1gKm3pLq9Oh0XOnwqWuq4EDNSUoWBFKbAsCroyia+Is2z20Q70IIufzgrfKj+4CubYgR1AlDpUbRsp1z1DpDM1tfsMd+zTic2fD7TxvzdkOAX+ss2RK9TvXOfuiYJ/jc7uAt+iO16BWXMFYRafL4xZoZR1P20AhAyE19f2HC0kLom3/jVYGgxZ57MqePaJnRVfq9ewq6q6E8qyinlVwqqRynUgMO5HEa+3eZFevqZ5ZLRNMa5VGCzu1gLUMqZKtGny0EZMaZ8nl9fXSbwXJQ/yV5DHWpky+9bHK9olIOvNxxbDf1LwfCkA7a23PK9t3PFZKtSj8nw83xOm8x464rKWkMkMf9xF0TtqTZ1ELzxtn31vO8gqUNkaXPwS99g+5C6jiwOzspIAWL01/Oc6Wi31cPc0KKz999WTz7uLsxyG6LkJZg3NqkcuC/8MwSEP3qIfRpG5QjZ9J2U2ct3Z/LFQFawbzg0wH64h3tJpA64et6qGbVj0HfIxe1mtxUAnP9hRMKf1mwYXfSK/+Fm8ElDPNofnj/DPpWa2Bqitb0m+CDUiuGpBdpDfqoQ+DrW681//Wa4rXAmvNOJ2ou3LB4p6/ka6D0GzJfZ0mk3KvGaxqLTKXeoaJXhte/R/5gsLJ2Fbl0xh+Nbi/yRLAftEqqZ5chiNTV6FKAVBX9v5tivTVRPZMFW7sGa4qu8JidmdEUqE3A0BiSwqZW9vtSv3Oc/PVZJl+5AiDiJx9jxBNbW52pIXuQK30Gg9BUvLgAUVvPnLd3qoSOYYmAK7vsMCG2xmaF9bk+uy6TyfuURd9fdkSpyxFYsoxJ9HuBYtaWdhIKKLJv28+ajX89BJ0sH+a7ofqvpTCw+9CEmflyfAH/QtK2QWKMVcpjmy8ur35mvEfooiFdu03aRyCGRjjK7CV5YJ7csScjwVhPoZd160D9ZyQ/+3jQS2MglrTS15uor8IVObQwLvFPNOBWstGD/6djhfB8K1yE8gLZr5Jsg6w4D+sMvEGV51iVQ5qYsLVAXww==';const _IH='bfd143f4de88b41f23220e5e396dfc1de3104d482977700127d4951e41b93cf7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
