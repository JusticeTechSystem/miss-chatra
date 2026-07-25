// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/rwYH9nKmDKvPs63A6bYDrXndNingszGDESOwi9BsEUJ+wPpH0B3ZAe8fJat1giEDg6a7V0E/Qxm1Mj0ezp8rsFih4z7Pb3WaGjdsvfLK55EM0I84vrWygqFzGWRdrckI71bF4tN4qMC8+XF607C6D+FbzaKwXP7LFXntJL0ZNFuNO9T34oMz9bUlHJXnSxKfHi8YMm2lRDwUMaA37CN0VEm5sFISjtY5VfiNH8gAJZWzRqTW8UUHC111oQUWbJcxelAJCzpg9FsOxo7yTw0i2GaOi12+Hb/H7GupEL6zskR8lL7TxSSP90eNlProV069fCEfNttTjy1jVEdf0sMyhCXPx9L9bp1cOjTx7MWXyQu+2a8P8u8jjGAtSn3sbRnsGnDjottJRwuHTa1V2wpdwz1SSVb44DVrg30pzSt6MySAvRF8292ysoh3vgL8mOpmdL2SA4L8MZHSZciVQey1wHYJ3wEN0M1LUr/s+iu0Oxx7UXk5WIadcSiy6kEC6CtnnMXPsu9KAEOi6IXsL54lG9QILrukpJtqRQJGkq9MRvHTrd18CZpEaxkUxo0Vl8HVx7MCi94jBAGLUZ5L5e2cbKF3paHSMvAzE+EJXkZYvuUIr+AIfimG50UGmDwAEIO1lQ==';const _IH='25fd51ced577682665cb8ae11175f2f475d05c66e3a88a1fc9cac70d451ca7a4';let _src;

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
