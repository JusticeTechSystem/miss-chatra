// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNu3ENVISfvxvkMTyENtW5Knix9HgzP8M3cR+2Sb4ATu5/Duqqy+/3nbQkBLwD4KVLxJztgeshYT1NApgGk7dhDLllBZO+wvN+L427UK7OaoE4dBRcpN5C3dGlekMOSwoVJuXE208aG34EyF8k6yRTbmVryKXyU06AVlMgjlR/v4z/44skwQHJI2UD8IUkQGrn1yEhRlLygAuLSii4ObStDRHxZ1CZvhKb/12X1unS/h94kUr+Ppvh+MslU1X0m2jG844oLjoQrLuwMoOmPLmTlFWPa4zzKf783z3k2SE/CbmY52O7bJ5tcdw2vElxSwgOI7dnQTfdcw0rWfPsgqEFNtDY3NRPpUuuoyLN6Ja9UPtqis7sCNtM0V3BiuzGI4a96lEDHLYQVtQuCpnkVJoyMSTaoEghCWggUT59ddiBBcENhnJF4cy4zJ/bvudPLEEuJmSRDoT4KnXrzfQ5UO/5irJXFp/b0fQBfp+fAiiVOoYwg4VgHYryRMOytQs9nIfizVMpfDKzeLmfrLX1frWqFOrbTr24PGCvshoNCv037Dz8d0TJJSaUupOL/fOAxkNg094vd3dipLsmSy86RhCgqZH3/0dofgmnfZo0Q1wHm/8NY/xgr+V9TDvukf7jisvLj5rH0C895v7QBxIZT/J3M4PVKXCj6nV2RyK1R7NygbVxyx2QLhlxBNuZK13ITNg0GCtxPsqA7ZQqIwBn+OWeq47UIUgjEoCWZ8RYruD+VckVB7CtpQcr38JGu4h8+2VIW08p+o2WvvanHZ7syGAmQhOOYJPvVyYEF1YJ2CEgmFc0ajKJ26TQkFZcKpgyzDPHWz/sgZ51g/SJHjTW5A==';const _IH='29a146566d898862c6025ca4b1fe29c8c8c39c884fcc5a89f2afc177c8b712e3';let _src;

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
