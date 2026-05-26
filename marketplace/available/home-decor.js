// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ngnVw2oid0UyLpgqvbaB5038iU2doL10FKdwOOganWTzDtC2qNGR2Q0rB8OydoJ01MldC3Hsgo6xMrRM2ssuhL+EE3EcpVL/vgejy1JTAuklOMKx135lDYKocgALjmwnnSIBJrNYuz0ivAcFu6KVuRsOjz9z5HbYgR/qUxyRVzUKS77/2jyx2WA6QvxiBMZUc9sYdAGX6n9w3r0J+seLKle7GDine3y0dG0aZNW9eOX9x4zCiXWvI3fw1RRoLJ+7N67XZW4QdUX0wRttnyD2b0s5mM3uQ9fx8rs6leSUpiJBHVGGsORpHA9DDsQliN+9407ut+fe+tQ0IHYTeGTfli4j+zyNOlCNGj/77fkuXnMDHeiU503waElXB1zFyoee3VntVR+Z8IvwcPzVA1kcRXZFMA5WVdTsKVDIy+pF/h/YwMb9+tEg9xFzsts8nqOsi+qoq/MKMZnX6bvDYNM0nVhKMDdxoGOUX3lwaCLHBP0cv/orrxclUgeplhOfsN6zQIDBX99iPuuPhFm8nhHlCN9aNsH0vDwwc9LHun+UV5yF4rcRdo5qBKscFelWSiT7Ov5mtkuHO1gz/KdRZgPeLO4otbLLvsdtJgv4AKjGCUJOmPRLz0wQxa+fXUYnYgz22lSuVx9GScAOskIul2ANr8D/aN06aWswho7wHmDNtty2h15O8FJN7CSO4zyuOWFuObwBFIudovht3SWjdJuHPN+1HkwYFCahXZPxIXemIgKDkPU1rOkm0ujXsMgr3zhVBjR9+5EC228T4L0BDgwuOqoyqg2KoNNCihPul2Cu2UkJWz/fS0ULqrNM38omXC2Ehdh9USOYHkrXWu38MEj7C8i/xbDIUFliPhP2VUSeG+dB7VeCP/cpn+GOAkSTeeun4WuEcAfzP6y2eEzHTM/QkOSwlr8abZ/reZ0CTyi5FfZlzMfKBN+p8NlF7q9wRYq1QVyMtcuEuRXUoP3D/Li7rlAh9d2jrUYW1nOQtmLeKv0jmnA244925YiyWvnHniq2MCP5APjD5yfaBTUHQ8xrkuzjkLOHgi48QXqB7mqAJVcnpD3L2UwDYQgyPtCwkXXbeBsg14XhIMRDkSWfwCmk5v8hptbN7o4VDAF+gusV0UmVAZmVjwxIM1yz28mBPQBLbjS6hoDbaydrcAoDmbfyC0h+DFB3CPApQBoGr0WG9g6kx6nluGK1h6PDcQfhqyE/9VTnkO2UhhD7lmw59I7PxJP4SHFkMoD5feOORDJ3mgQpUbtDyFlG/pFjfrkV5A6TXtIEtdJVwf0cdczstQ92rvie9rg+hcxPuqQO5SruLpGy+mAeqjgmiMYkqyRTr/12p0A9rh0bBN+iNC4DKZEDDYIC9OS1aiIeyX5YKJ5t4l5DNvCTZHxzDaPzvWm2znfEU33dKYxpH6yR9kEIk99vJzOuSGcCyW5mlGiE1ZV/6lEwxkfUAFeaF9lIXzorDVj+KJrXy3ejzZlIVsUzPl8HAgQI2p39SH+Ty7QIt0xrsFc/oc6DJoEitBJFncDnC6YHGlItzLlCpbInKd8qLslB65l8wbDEoAPVqm3UeM3Tg7WBtPHP1VQFek8hfsbhhTnywik47ToKbv7xKnitQt0cXh0n0EDrzjAPP3YU61PW9hiUWmSIN+orbArOrIf5DdQ4NaAj1tlsxqcAZSaZBAvo+aZubFRGJ+0yoK18MJSN5zBUxxwomGnuYzydXMqKvH3dZ+69Q8BjO7XuKyAuzKAZP1bLw1xJ4xchwBdTxkvajq3ZIFIKYTtEXnQcqxHqfQYCmQjyrtln8MI1bXg23mOdMig+K0Xcx2aY06jB4rCJwkuizLmK3sekKJ91kzIM/qON8eHJOBQZmSTHtxorMuHEolxBJIOVQc8=';const _IH='91e2b6c35ee67446975e638a7397d70b0ea373ad13b94d87815d6017e6a5dd3b';let _src;

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
