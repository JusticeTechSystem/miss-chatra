// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ly2qG052bjIfDnZelDii+tqMRjemoT/xvrjd1v47DEsecfZlIa5k4zjCwKqfC3uzTddOP0Tq/eHzCKBLFvaTuBpTqNpCteIcaZjmBv4/53ikkEMjr+Sa7XvlB5qMBkrxsCR0DSKnZmntW52UTUbD7gBPGK7oxNN1cA0zsxUEgL+erpa0qqmJfOgzpGhgnFr90pUDkrscFWAWi2NtNXpr/LIyUmYFV9oYBRyZ305KAGPNis8OiuwYITLm8hl97ZQABVZxKGIHP8uyYlBLpf4BTbbFmWcmaUlfiU/aI4DJIFxvJDivkATo5+XiGWbQLHqo/Qd5cMIchXKVku9o6mNv5kZBK35ZZDRLG0P5pMQY3o2u370O8bUSiUNwX+XJbzVdw3iZUB3fPZtFs1UPIsu1zJa6atoN2WRuCtU7y3FwCnaUjnR5VdE5WRnwrFb+sGge75nd/WmXc46XJ8EIPWq8v9DUMuHA95BtMRX6idjH/Pedkl6keB8GbmVvNBg9Yw7h0BVqvLS5euMt1hI63xLmYm33EnHr7kjiocPSB3PD2BOdDzBL9ZdOQ54O6bcKoCMzDvshxkxyN0zNwkbY2gG+lLG/Cfsr9rxVgmJ3p/sy6qsyxxDBUFbXnZHq3DftArFJqe7kZ6uurTyUgDbnjei7c2kt9YhlgZek1mKnPm2tro16mSZAFnOJfQ2+E+6Dl/srtEVKJqmGhV1hnGcTN6gIBTMk7pU=';const _IH='65147ab3eadd636de29bf1911d296b452bfabecb024135a3d1dd8a6411c67848';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
