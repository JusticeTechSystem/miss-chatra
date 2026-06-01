// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwaxK+QJmbNNmr1qXWSYGPSUozsJtbuiVoJumEVYQNe/xTa9baWZfC+3kzXVfTfQuGVskecRUTSCmTLnsBg9rjHYQBM8JoAkX66WtT+YNDKIbyy9dg+3XjxU5ShJDWXN5E8l6qz6Q7DItIygY8NVHnTIKWlaldme3amHkSpM1DGXe5+tI8Toii8hH/aR15ApqQJHFn3LU5ksaJTELM/Iz0Z2iB1yC//1gVHHb9QFyqfOnzS9GY9Avwwa10xxlMKekqtvidUk9+1Inte9G6PsV40IWxONWkGJl4yN2O8j5z/zvHK9ZAcFK/Qe7T87+v1eq6QqAM10NfPbC5MkTKalHpngBbfDuA5Y8VijMOWv00ZnETAn9rXzR7WEG7jqGQ2H6G/NBG5zMjdxi81fsnBFQZ8s/XYKisEqd2kZrz4qDyHuk3/FmyvdX0ajpZn0HNUHEEL4B//xhW5BQOy43UKQsBa3yp/DctaUU+Q5S49vzXaOuGdoACMiO43K27LXPVXwv9NJB3WsO5DWOulA+bqYbGP/fCzpbyjBItcYT1h7swG+kw7k7PmU3dMkntWbvbUG60Cm1IaUaBSrZWEBti/xjkuserSGp9EcdT0+N0J+S/wPy83sM0Iqj+4hlo3XdM47';const _IH='e8f16fdf5cb623ce76445e2a5317f8cbe18854484a636a4a83c993bdabdb9641';let _src;

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
