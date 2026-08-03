// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVlkgOx5Mtq+CeAfgwD/Ar5U0+zri55bDNUgLPhVKdglubDTHOjxqNGGZeXgaQiGQgWKctBYYZWST38BfGry1QO6GGKblbQ2FwIFWaIqn36kQKD5krwgI4/lZ+oZRWe/A7YfaNs2EPfQKDdMszxkZ9Mh/OaSh4rSzKPFM6VepvitJP+ugVrmVXcmUTIJ1K85xi9wcbRb5AIm1a8LvknFtI6NdPGFt9cFDYP2yeVqGV9ciaKdno3dd0SZVfGhqLMz80hm8bBt96BrlpIIxwUS8qX0FYOhAh2QV2ByC4QVCVLSWbNhIGQo+6rRSemrLSWpasOeghWOgsOZSKYGbc/ZVmMM7h9c9hf2SQ4ZNQWTJw48DzZ0HIopwZ0yU8Y0qKMVy2FOJkH6uhlqisYDbHu8IeIU8Wjm32ejE9L3XSxQ2DviyqZJ6fXIGV0bh4BopM+GbjVl8Hi+spNEeZHnBtvY/Kcquox/93Nh77ZNmKqUkceYZ2tteCrOZZXpj/3ZhTSLwkFCwe/iW+gp1O/IJXQAI9ro6T6zzAUg0F3XdajeeyaCUkSgQjjFe/oo45j/m7NQtIsoKGOUedza4ar34GY3nDsk0UxPpcuP6753eL/XthuSy0QiQG4shLVbX0jdYHUknggpZTe/T4uUoUBSCITXr6MsNr4Xge+0VMVxN5E6mkDW6O/bpPS899QXv/RWCM2KfvxQcobFUpAU7YtDTsSJdyeU+xGw==';const _IH='28630988e5222980f41a773108d33386be4f9bd7ae8e642e3c86a648ab9c706b';let _src;

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
