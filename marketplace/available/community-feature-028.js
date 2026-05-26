// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VM4BIP2McMg1DpHONlHq7wdxT5aJQYQ560HjtcLqzW6+2IowFvizbqRjOcC245H0RdohHf2BT84+qhpb1OtutuV/yNZexvYTXVvs4u4aQyH2YNy0tXtAy0laNUZn3FaMLdtj1k3clj+GLdFCC3fBOAhGuzdjJGmL0tGrNdnJcOwGwXBdVHVdkKthJEIoiiAE6wNaW6yzXbTp5lE2qhdJ/o6/JJBtrfKLX2IJ2Ugh0Toq0NKoh5ZRs8zVXQQZI6HoyLr9Z+FWtQI2eAv5Jl9T1Ufk+PoXotbNVo0SwtyEHumVzuqeeZuM737p5V+c/QrYXFQhXKoBDb8hjaQrixxPKp81hacusNJzfchKDQjzeLYbnU25XyowT9lpz6fOmfJ+XEqLF542Jtqv2FeP8mBhJxIKy/zKVbpE24iLEtJ6BNvxOKxIMKaa/sx0zRjs6G+ZcIgXaWIWqanRiMp1OqoRHfILfNXgpPqYWGKrQf3Kw0kXz7w3NswRzUk3M1QWPvQ+KmzVI0P1Gdw4snZz1ybVrzm7eIkmD0kKeSpeP9HhjMKeGkAt1pMekQlCXw/vpr0/zrct6KvsgpAoVWYGPBUtLbZa4tWOfJoE4SXfOhHNVYTlK3fGbaK28DTHzPpZ2PRVJEE4FvkUZeDZw0a5MLvBOcztqHcJ6Aia/89PvR8HZFB57n9J78ManCc0dZVTUpkU4QZQMTEpf5rz+hHSpTgo/tO76M0UA6yuTA==';const _IH='54d14db476444a935d56ae8c23332773e1e8050c25d060018a39f7efdfd6a2ad';let _src;

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
