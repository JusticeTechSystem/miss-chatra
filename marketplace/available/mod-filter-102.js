// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IEK5zVXB0X1usJu3U/1/gdCETT/R1v9tRoFN/HdGdLT0Q6eYDUn0eGwfDrCLNrv7RdAy5XS4mGBTAUE5kmLLotr2tsJZlaYlzs5DD51IwgkJkuGnedOqwQwsupaoaCp9QYPhDXyS3fyZI3HEOFre811ha6OGj0OAo4/APx/OuBkaS35JrFmr6cHOuQfWXfkPIIHME7XwZpd1J3lmMjNFpXwkeFdcPi1Ls4kokLm5exfLVnUbcY7/O8XsE6RMottZRglBFTudd/3FmWsy9Kk1cy5k/YzEB11ohmDHsKkix39Kt8zdLvv4MJeQqTyEPBX2ZXJNZtYl3mz/MhQ18JnPpmJGBw1kDrtIkq2KTU0b5gjXxxFGEkzeDaKqjtxAJZ6a+ivO4CN+Bs4i+nDjXWN3n7WM/vxIMX7bVYtIqTZ1DAF+e7um7ctWPG5u6sLZSSEDUHjoO3Y3wzrjTcc935Ymxo+qJj/FakYq85moAgyRQaVmx9gKRiiM/jXpbX8gpF91PTYG8KS5YIeQ2grDImm5IrC6Roq3ZXfom/tlKNrHP+zdYdf+8nS66qJ8Z6YmPjImqRAQs2BxS39eNnFrdBBUKyjAGRUFE5GabnWsLjto6M2fhgMsQaNesvdEsg9YzlsuohgSjGqRczcpysVrvm5Ivr58jMBx6UIgVzKMk6VpMN5fIdOptZzPnrQL0ewkafws2hkd4s58ameCThuSVtMBfq+smi11uGn+4fM9oSQYGCs0rnu/FQEgcb0rFVW2AWXySPIZUpDENS8j5WN0DVvl1m3vingMhVg+iyTrq3/Mb7TevyBhQBVnbE6gIrha/Cp3yuVXRTp4jJQ2l57Rud3vbhg4me3UYMLU+mPwYw4bI1Yx2q1O7EmL0UaXd8Zcmn0RAa7hmLXtvGm1lIhjeaeVupldvbZYVGt8AsF1Wn9EDSNvImSE/JaHJuXoenSaTbMMCdXO+vu8s/gZ6CM0RUEiW8LbG/LJ9OoSt4TwXB1O+mlyoMzJWmxmhJsU5rY6i6LTPsawncvTmseHiMpd9dWnFKwGblA+cNN2UQbVVnQI7DND1B8TJ57sBRJxtXyROOpbit/dWsO6KUhBxyQjy35/s+R7UN2rUa0vcNYIkujBKYdYXMrJZXKC+T3gIY90wNM+kEJQiJ0Mh4KxxXHp1mLBJDUFTqoheL4GUkd3YTZjYtG0KJc6hZsvGvK2xY864EWNnnYPrW2xjAtjWuUgKbeXneaP5y8HQ9lFEwI4rOOZCbIW1mrZVdHeCAepQgPXS0pvhrglB+p+4tkVy82fOpYaGYMZJhYEEYC3dJnEstTcx0Epw7iu6bYUvN7RDx7iZ/AFLkSX37ONeioauHtu9lSvgg3nO7fygLHo4glrvEQm/R47PsfB2ueutQ==';const _IH='67babe5cd409ac11b8b8049146d1634c8472277aa00454a4996a36b8b2e16578';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
