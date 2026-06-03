// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CJkCbOzw3dM0HO8+s/p/hErJWrzHpJDBWGaRxozcj81pontr6D1JB7rxS0bLeBVwiLA6VhsCOyAW0LMwYe9ghkoiiztWPx1CRV6B3QeBeq3LDuniQ84wmf6gQShWhc/Mt59g4cKPRw9e2xwCZ6owUx4hQDn4iJ9eGhn8Fw9tzJNZ11ewek/B/Jo9SNLNQ/ka1jbgYz7jKrk3omW1n7ZzZAvxubMnfDQBK9kNoFgshXiiU73kNGtjeFpNh5nywWN3GM9J46NN8BEWQN0BmE3B961Z/Gwrr5Ldfz8s/1wRg+ycsmh1ky8rawl0hfEluho4hiX/38NTllarikEsGCVPY2J3gwaExjnnZZFToTjByjUrvsYbYPFbd8SMrMWHw/UJNUYq6OVR+TZSnS19Ysh0xtMnWt8xK0z1VAUcKbl7qBOeqSPjVqGy0wC39nwKlnf0R8DnOy972OKNZbJSyZTpPuSnZ0O07sbijLfOgw0BPSHTv2AZyfbSiutZu0v+HuWvdTFEUWYOjN80p3nwiuE47qevHZd+BJfuuDUPc30JP6nfaB1Glvny280b8SZ0O4oXM3ILNQgw9cu8hFLkfLPxFu7ZgsuqrfvS7KLkL1vWoXLA6e4TiQ4gFV0AM91BzoHqWRs2rz2kVZ6W4Z+YsyqaVmFzxo2kT+2clM6w4OgqZmE78ZvjiAIuG620mPPLG2nYXtZX6Kpu3xuTLbZnSsCpxofsU2abUs+dhllkSze1/5j9NQJFsXq5nIa/+izA2eBEI+0p1+UXuvtLo7BlGtol9rQsjmFCiMq+0+o5N5KwP9ATb2e/VzXyrIwq1vF0B7PhhdPiLnJL02LkYmFiOiHXoEyjPYvU1rCjTBbWfHyhSpB5oJjk+5X7SThsQXuPVShACE+FUw3/ZYinEVZH6UCG61hkxgrPSr4rbhZrn5xcOcxodVjB3hOrj95WqS4C+yGUuHe3yz/iUmCk9bzVyLNUbdRzYiqV3rydNcEu4R5DTStyXPKqOzvUoihmapNWaxT31DPrHcyMej+t9w1w3hs99APkSNmRL7IYCdzalgK1lE4VLK6C3jTFxX/fgN/kRJ5p1ZYVpU4XiPzxvZlqq9bCv2pyQqw4eUIv4y2xCwinmVg5MvkWo02LhZS770r/ETwfoLX1gxEKGXAabXQ+ZP6M0C/s+XA299kELGqfoyKqrlPa9v1fLg3+U4CwCIRWySZERRr4ETowXgO9RCoGy/SUupbPgtG8bI1t3ml04vMM6aTZVayrEe5RaXK+EElmLCwH6DjBKr7m9T662mFNkdZoJwlFnEfIfmlN8VJVkVXyXqaHEYA5Hx4/wFjcXa3gwhQrfmw8cEJCyDSArkOVnMqn6dOEKQCS68UGLAhlGjXZ';const _IH='2dfcc82d1fd2bd0c2e6d0e1e6abb510d220522da01f667f98225646490dc8569';let _src;

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
