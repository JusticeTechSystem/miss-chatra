// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gT1DBug5c9KZ6hzY4L/WN2C8XGtP4OxXl6IRtD6U5tY8t+nwzjd7jl+CkK7FK9FU9jSDBlHJNM3UqcQdteFgKV6rnWm+QqQrBeay1MbC0D7atnIwJWptIVQd/kqQXxVCdvCRk3LPjeDuwaYfqtgLUct08SEL4cA8hcjgH7w7lp/zzM9I6sNAmNreoWPPVgsoR0P9KbJagXC8Pu8yKmML3Bcy56awBL0akXC7FUWSWIE6ostumw6l/azp/8jgYR77HYGVco4XiDDW0MoeLJZKMmuCGRnVhdAqsTq04Zy4dibADUs2reKwag3j/WCXwmGFwHfW7vW9MM9oON5dV60MTDB4gH99zd3zOz7x9p5KNsluu7Iz03kbi5g0WM+r24S1pbM0v6j9o8VHP9WJe5u35t8nXb1icJBsS/XQPGjlBoy/2aXlR6G4bHJIwJWd0z6l2aN3Mn0/sogS7iKaM0zTQAh81fXkjdno8vqHGLtby8eJ9+M/F6HYx5nTGxyEBp/jNIPxNTvHUqOkhsx0jnVoHgzslT4OY4tkUAXdOeT9997+QN3BoinoFtrKEYfJySI/LA7UqpH+IebBycQUPw5gwhzDccj3aVfwB6kPZJ04n+aDIkiJ9+6DhlDctXo0XNH/SHdPC8vGGhac1SuhszCyUPV4NGm5V2l8xWahwkEplawNGnBpoeEqcZ2UBn7Jthelg21DXzjUHlsf/NQzY/FaJGzk5Oo=';const _IH='2daf403788de71ff27cda5b825d07cb0eecf7aa65f178b43a1ac986ba5db7389';let _src;

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
