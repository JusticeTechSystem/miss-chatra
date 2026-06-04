// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1mWGP7R+feAyf3UYWtAgmyT48pGKEOCt71v9BtPrP/UcdVJ3RoDN3U947zG34S+2/tJDe24Mlm51pogIS4um2SjKAGn1DKh20x/vUoUnlb4CiTJ8wy5Y9kwHuiQ9hJe0pBGVYJsCXAPFqoGIBHawO2u0G5Rby9/mybSCy6DzggxMEcjvhfVNGuHiqvZnEzpiCF97UdD+Me/um7LGNY54fVDYPJ0RQIvVz9YMELzBCZ0I3xwFBaD2Hgir+T+C2NPp2trngHe6QbIMyQPA2JxUtfIXrtHWzJ/apGAs6Txzm4oVoIEvbpath2Pz149M0osYxr2/EiuqvitaDfhvOoZ2FIanxzf83Lax9FMLIHOM4+EZDqjZY8T9EJtC/Pp9rF+5nNeEQPJz9aUwzjZRzCBHVwc97ZW2y8lIuK6vx5MjM79YUg+jHte7cvXRCDnptiqkNm/rG//+nHx934O7qGNoV9iSt8DEfTKORgsbfHl2+R0+McbJPHLClsKL+wbYdGesG4FeIDCRByAyT9JAbEshIHSXdgkIBXsiSEIcMqEI2479KmofdxgKktLLNjjDQFgkKVsOgkF7mL4nPLjjWjhtq/6XUv2C6htW/3zhPXvV0+kD5dfkLHJd1V8p3+Tx2SP7CXUPDZWVCuzilmthij2upJ6NBw7jldGToO9DlJz0wMJfXunYhZasvvWbV3IMt8JDX96N5MdTJIAGNxcTtD8mTmE/Megx0Z+oC4whb+qt+FkUGUAO5tmmHmzkOuJgQ9xBlmGFad28jTh+wSr0q3eRUsJLMYJBnKDfMeK8JtZWMR037LfiuOQTKlc4ihT7/i2DAVXs93w5hI5rKt+SDVPuIFzKERZOq8PUwXB/yGwuRHAU6w55/ifIxSCS9PsTgj9E/GUGYqXraHxfqfsrcDR6KTMCrHVYusPUetZh0nJd8X9Gj0prGCIFpy9QUDpc1b9Kvmnb6vNsbah1xsrxeBE/6WW8QyDhWa1iX6Ah0/WXiqYajGriMMWR8rhXpMf/GOWW0NNI5MxWyIin8/OWNeLByKlBhrma+vRQzuKKhZ2bZOtSXEIU17OVaWBfXgIGaR9g+V2HgRLVeuIjreZFKhyLD2WY0imDACaC2vTZxg0JTalOfMMjiIIBW6D0gMBcVWBcM2ItiPLegdBduqcan/KT/37gUOx9DhyzjvztFDmeWzqzSIYwrTiFPZkdl55NyyYh5GGgraxicb0JVbBvIHy3IYhqKcfYdnQSxDvpMboQbdnCip1ify1EM1ffG/Ug4DsK699Hz4koOYMy1rlenZf5JNscocEcsusIq0zumwlAsywCOhyaCjgYJYVxnZvP26FqEdzDYBTeGF6uXGX5uzHS6xTKmBlymWQuTv+mGyZWewa2aQ5VpXAr0lNk4kTiRieuTLiKB1NOPX/SULftVZdFgUY4+6FLbnUxMz3uO2puT2slSqdEMw3K6tsMrbC5FhBpJI4woWoQIvRwEjWfTEbciCY3w3mmeHKvU5sqVcMha7AC/JOOU+O4P1NRFoNJRAR7N8DVxxlDl5t5DRCNyM15vcSCWXEduPzqRBPtlLRnzOvVMXKwWFZJ6NqJ0TQkBHAdGXTUL7IYcNGDKgKdMBwKg1X6xXTgBx6IOQxoYgIO9xc+PQdpiWSuZJYrT288RCxtjvrJ5FfO279NRaBfeKFLVfPdQA/YZembZQ==';const _IH='62927c5517f223a4782e60fe19b27f4fd7fc00339173e5f27109405d3e4101b4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
