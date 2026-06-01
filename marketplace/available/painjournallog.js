// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7mS+nzsPoik9wWlpJ4P2R+pnREubcX+eLoRZWde/J7aIjsJRbJyJWoyntydpFOiiGmFjTzsZDagnAEQGN2gbjPJBflaKkm2dUlNgIZj9hcfNW6FwR3bk4V66DafBaeKFCKOhQ2dJ6G77MToN/WsSXUwuDnTmnBMZvM+0r2wd++tnxc7vV37eGIjQefNM3zGUtfwGONl1sYTKQ5grloqyrqN7ulJ+myjWKK56DjprDfg9BUj6gFYZV4hTMJxgN46yidPVPvY6DGaHBZ6Gx1vS+KtOtu+w/XJg0P0WP/Zm39cZ1CDwRj6z1Vgq5JYx4SRp6L6aS7PUbT0A+KVXwrxFGNo4kOSeL8Y7X3W6tvo/eBkKx3eis7aNvFJKRlcpOVLYQP+w6Rj27pmHvFo37BEuomcf2XZnDpcGRV4QMNFBtgbHrf8kliTUm7LIiwzWkzktf51Dsn2q6ZzlcJFl5TSrmVFKpLfIOFZ80wA/IioRyXwCakocU6rb/JCYtcqdaTNYOLOOd5OxzZwNuQ6ypmJq0mOMHI9If13glF2k04P0iBdMhfRJRy7Bo2Mm10P1PNWEJH+9Z5r0Gzkr6pC0uHcRZb4cb8zqmtmyWQEK/NrNtcBqc5SG567i9jbo8hqhlls8fo+iK5nb6odW4hQwmSZng1AcKPpgK4qDv0eK1ZBlWNb7+oEGJdzwcMSTnp/avmIMOwKgJqhSOw4/6qid9o5bRxdDLTELR9vWuHw3jweZJrjr0dujK4EIgFaY7dEEoYLzvF7ZnkneGTG20WF8Aoobk/HpRx87rjG/PnzhRXojqU7wqirO3/SEUKlATaNcy9W3ZWEfXxi3J+e3zr+PNUDIRilgEPFsDRAl6RZNb33FyrxeF68fLJscGYPg0hiiucmGA0xfcTJ23E0P/5G9rQi2c7oESs9yhN2u7yFLmd04VNnXo+EJzobalCJnTiQs9Rpa79R0rjP/XlZ3Pu7rxACHdv4KaDfxderSpbJzZyG+Ei2WBNnK8YwW0ANX+IujkKmTMaca6VZui6QBUk+P8bnGu6titZQYSvCIiXcfZJMe7WQnOdt1v0tZXH/n3c62YEH43N5dPw8GfwiH8i/d0ssbcvBaA7fX4BGkbxACr6nko5Jo+7DpqpcrVBv8lf7Yj4reHkrcRDKXmCBSiPyey+haDaIhr8t8UQ7Rm69hCkm6ualyrSct+ER+f46lrEgW71UAfr4TiV+GXMg2A8L';const _IH='eb903bc1d46579b6e35b6914b225be4bdaccc2423f03e769bf9356f691eded2e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
