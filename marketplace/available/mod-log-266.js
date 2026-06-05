// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jUjyA7dNWCiNYxMqkuu/5p5I5GnZxi3L7OO9nUBJYWK/EYCC0edvClRL+s8894eonqUx0rLN0aFa6bn4S8/UOI30/kbQtWKUFmi4uF1C7meU5rnWpnjYX7PP0Beeekd1iGEkFUjciJVJ7B3Ibq8yvEm3uFOQ8FKBbKE/Go2A+BEwn9mYT7LNEBGhCSLmDgBJWeyPb8PQi9UOFfb+e6SWU29OGPHS8VVlS0YWCfcT4yC/HGSpLUN6wfJvxhSIQush9ikOb57iIQuyqNATuDDFwVln2jlrvtLusjrDbNEIkpeHjoVnDrdDEkrjcm1u5xaSOovM636M35DALlruO9/hzCx7fMltrlucdw+VLLYIqwH9N0TvUWBFEIVjSyfk0Pj0blMn45K1NrCvSRcmEnDY3FEd2bmVs7nIYsZYIU/7Nju2kP8yNMHeBEVCbuvjeFjfNKSFBOBy33eQZNrTG4aw6+ctrxNWXZtV/OvNj6yzYrDC8stZfevzA98VRPnH3jNYfSHeXbf6hKCr268v9Roqph+w1cMOzEub82iqWM8/cpC+MGEIwG4B9GXWPzpcpWUvkK/WeEkv1GYjfY3+xn2WC7kEZ8qLUo1pjYakssiATOTIk4pvlIAWPxAI5IPbMHX1yb0Kkr36/22YhcIvt5z8iGnBMjDoLcV5aiB/tWGp2w7sFdRRSRAjdfW9INAJnKkVfUpBFzNSgkmhX7up0ujwqFOkrKT2ectpc0KQdsh76QJRIIEWeTMfq9y1enRPVs11tSPb59u2XaPUTj0OdvfUYmpskn63QASDhY7eHv7Yexw1Z0qGwPISIo4oMuXGsmVJdNycgQGZ4deRgKqFqmsW67Vtajak/CJTUvRbmlHt2A1YQKRwWhsJ6gCdbVZPom9Rep7Liw6W7LPu0dwO0FyedAZEa1xzEVbOpZstH4Sx87MqPTspY2siZymp6l17Zo7cjR6rziyzxFXVCmwxd1njsShf0H+vTZTQvVz/GFva3iha8t6ht/MP6P3zhSHcrPN3RkCdPgIqbuvXB33xoT2VYOE5m5PdRDfj/pBY7QAXPPti7F7Uz+/Sq/no5vwdimYv89Dy4VuW6v9AJ8mZmbaY5JVxxQ92ZxiJ/zxjlifqBk/ZPuFWjziW1CwGeEV1C3gfCAYG6VfJQriNf8veqF7m4ISzIQnYsr2MX50qMS90bfhnnvfXskrjgwGJiJa4DikMTENpM22S3ONTTnBh9RitxyFu5j9XgfpJZz0v1rFdsb+drTSeQCODHsA3VRTzui4gNNmiqyNbuxJpbNEqPmR1b2KYZ1+bRvkeSGuM/O5Zv70YSnMkbG9dDESCXRunNTa7wh1uLbiNHy2DlA==';const _IH='10d2b25e07c441c518fdfac78c2f0aeda56508304b8ac5011515673a8f23a95e';let _src;

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
