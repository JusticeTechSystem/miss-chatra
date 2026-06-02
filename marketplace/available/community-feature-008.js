// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pKCQANLBXPWQLzE78ZVN3vjBsYO24z1UZwm1PIu9An3Tk909i/QuGVM/P1O9e0II4yqdV6PKhUtHjkfasPGxYeVdOEovn/nv9Ap0P9oIO1PEC+CkI7Tzqy8Xo0YLL1dnrekudoz6yvNVfHKiacrMC2HcFYSSe35VEttIGNJhkd2N0P88fjFBDiVOIXJSZiotT65tVa+38+sPgQ7XKJWUezHwHHfEL4vMbnbQNRzfPxaPOfNFskhF6268v1AcUS1n9wpML9Wz2I32jvCRRxMYcynnwx5anl4WodCREwDQDsGkBOo1Z70aZXtTu/3alBJYODtxHAGhn8HOk5WuaRU8Lq7ODFTpj0jlzJ0+ExS0H9iqyg0KvVMEd8XOYvDEJRy84oz71TZrcbpYYYZHa+UM+W4Pb4c+vfXYrD7t/Bn5JzfPNvZJvxIYv9V+zOuNJsa9fNuh2UHg29PO/zae2rsyniskTLse3FVcb8CEyIvo+nffcUq4nuj9gl98i9LhTDzZXx7qftZdtyKVcKf4qB2XUsObq2f7VnON48mODvgWZ0rCWq3eFdL8ElDjg5aPqbctinMgz7KgXdozeJnWdNQQQrugyboZTCYRNIAN2l/aWb6udMrlNdHSuaamzPToj6AlsFsVv+5PID/yTb1f2zwDv6NHWxwNvKtHa+chdyh7jwDPnGM4/wmc4lbGJJvCD8Won2RD7b09lO4T1kLmijTywVWaO6oh';const _IH='bced0309d317f21d8456da5881f97b1984a24d8ba998470ff0d59c39b54b1bc4';let _src;

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
