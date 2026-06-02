// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u+D+nc7vfv8eV+8M5nFkhwLGh3vdkQ7FKBr9YNOMYtbx+0mdwHlRPDUgt3QUbfpNpF0R5ZqHUuyUhYC6YbN2ZuTKHUcD5QHgRjFUokMuLf+n9bdIuyZQCxsyThC28foqrXZqdNhFjcGcQHZJSJm4Bu3RVkGBWT3VZJ3oG4ucKydpvIzs7kx7eEJBeFsq8b/LGd7IkFGH7+C7Z+3Rrfn5Y50pKZrBCWxA0N+7uaBwvzL7P3pHd9kgBQ4aQZDdSiulu5NHJGGXWeaoGX4kaBJvi5chtvRBPl6NQQKO3Xd48e1hYmbXa9miML9gMnEH9WBRKgLEuIrvJrtbxaClEXnF0x0EClulWi8vXfSdOcbSWRFEvItvI+ehlcmPF03Fh0OROn5sKGv75byqhDd0NbsQjyoTHcqf/jPzD56HxAdfNPfwd5xRWyljt3RlWwN7/R4n6qzgX75wJz5MOvoEoOb3gDtHkqFJF5e5k2KRI/njxb8ZHojZPsjqVIgQb3VMK8MEX2a8NOYYOCmYRmfzXNTBqna5ijbw1ot8GENgplAbPf1ageLrG3HXSU/V8MLjzaU8BaM6JP+Pqlovizo0Taf++AQHRik+aYJo5jO94b3ZcDN8gYN9ZnbY+Ew/oohjzCrFMOWs30NWw1am3yEpnkhtbfc41WY18VnLc/eQ2uF/EKGqTPaDrcK8jhGXt1Rh+8OCT5MMB2JvlE0uYl7IDrQku20S5o17wSViXK1V3yNfWf/o2JB6xtQ=';const _IH='3415e2f3a5a759bce0f6457858f3f3e29fdd380e578b86bd4395e94321da2e99';let _src;

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
