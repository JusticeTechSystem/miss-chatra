// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwPQoVvACZXFhxcGn7iQUPtkWbC6CIEnKsGpduO+5Uw47p6NXsOxaZKcyu9PrR4A4Kwn6zyWpKa+4g5RbUjCrkTYIgGXudk+Eq9FiBTH0LyHJ+J2P9SuSZs52lC8ZJ37kRLP6Ulp+ACvQZE+3ApcWRlaU3EFvs1VsHmX58ZviEbtdF5biZnvefexKSC9ogRg7WXRCw5pn0apXAh7B4HpucAa1xnEMgHJFIbAqDIw8DSkvCnZXW+1ov/yp5qGkv+PPmUe9CljkKtdeenUuKURXXLcA7qZap184b8EN6TtIhUUlKlFDwkhIzYQB4z9QA2NdNPwzxcMlluMTsS9R2x/gjxNStflcwCEAjF9k5m64ThRB179aMBwCPC30bRdutx7d6g+iot+PdK3dBUOc/3TJB1c43g7qsjZVhcDvblfUPlOIb7BTyvMf9upxySYjV4yrDvqKOsbIfl5grZEJBgKsPeaLXHUnLJQ+kOgOOVMDu4KiU1brl+vRZq6fl1+aeFEbqVQkigrCMR8SUiJttUPHWohiFbBd9qRDyYBEROL/bxrjCptYikQ4eGAsnAOMouH4/29ah5/xqpaHA2NsDwLLMs2Hjnpq+HalndqBdq3ai1cWTX3haAI+KSVCTIlxe3Gxk4syszmksV5YEhqCayG7n8TcIaW1mTW64cuZrefWrp5DkEIfvI/RWYmHCwQaRJ8AsEB2RupfkPmypJENtltwcGBpM7JKOCLpsxjhB8Z9O07GBEk70Rl1Vy1Tz+QcooJJaF1SmhAzAOTYOY3u0abJcXGLg1haSdW82eaQuDvwwNh2M8IURHGhCEj9QN1KOmahXsWlJ7jua9wfOMnnDIzU7QWCYVbhsX4YtuO5H1cw/FmvOMxA7NVaVofBlUoczNdKQXEjV31NJAGh0G3m1uUUIw6DinhZ11jfOGHGTfzRR9+NmpPz14t32QwzjE2xynzW2WnbdW75wclLgsjszDaSeriTdcLLSkm7oXK4NiqDmBP7N0KL9RoJBil1xRUoCQNX41NNn4rzL16Z40YEcevJZCwTP2zetgraMcTMkejbTXzDsd2fhdpLrY+j4GdQiQ0Rt+m0kgM4c2eMDoII4KKUkRsu7jD/ncVQUY8olKPmstA0VLt6QP8qynIGydVQkb70XK3sDQrD8uuksqLudU39Ie1nyebrbHwMufJssaYbtX/XVNBI7XFh9bKn9LpacVPYFYIeQIW5TFjXamfo9srOM7+15Qbog/cTH6outZcHtWDCnwC5Ql5RTT010/c5BiQW1JB6id23whu35E4zMpgllVABhs+s960bGiMA1lRiDknQm8HEjWqZyVL5Qfmynh8MYAgpYe2aH8QQD';const _IH='a364b85ec5f31fc023cdb400ebbffceb3f499780337fc2c5fc15a9655fd0d12f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
