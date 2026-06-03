// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qdameZL4fyThh3+PsSoe20psTwoNqI2cGVeP9W34+5p3qhBkmyhSxrK16wRGTcppeo0iS7F5IuDZd9dAwgx1+Su3lEvoOwrwoyEse58a+2Gq4GCD1+BX4yXm+Sq3WWkkkUjHlwx/ekGloE2FXb84ESQN5GJYR43znQp0XL9GeMXRtKYWzAQLpijgo0DYhzNsH3ORVb/cKOieiGZmNvIIK35NMrepROOp4G7Bw2L1m4R02Y45NAn+TlB2h0QAcZ+MmI4mks9okeXMiKQ50LikWuRdPwZFKQ+umWkq8YUA7KF5yfGEs0lqgcl7bKWTCC/BXQDX6LmFH3tOmMwDvmsjN5LaPhU2TLWPqE1Ojo755FutUApe6wwHDMW4KRV7c5fE5Ix+vlWqEv/D7wije1qwQs8SWjMRWOihktP4+8xiuGjjgKbPEwNhNmlzn8/yezTVua2pZ5TTvcMsLQBS48vjDkg0qgUvpyLbZyt6eF+mYe7Q6VKdlwDN81ybOIXlyjO7AEi50sjrzVIlYtVG22ZnRInHY/hWiAm3XukVS750LU4oe+4musudH2st48K1ZsE/uQlM5x2rCHnXwOdF67XhIm+JDy2Bqyb/3b2J2RMGsA8xuR0xfd50+wW+SVyZKZ9J39+JLDbIRVzXBvttqFgFaZDAdH2x3iLhAQBLITLXgd+1J3+oF8QJ7qfcuKC1YU3lJRCX/yTnO11OgE5a+Xjg8cBuR3HrKp6PX0RZ0CQ=';const _IH='9bd2bd25247e4088b4ed4ee00c9db6791ac74476423ec3ef769f2d1ffc8c68b2';let _src;

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
