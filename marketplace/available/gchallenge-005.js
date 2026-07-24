// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQd7W9CI7K3DUwuCfUh5WH5TNANQ1FvKjjzfOYY9O4/HhZLG2XuhXSHXwjuXtuc4oBiuHF+p/Uwv2mdDq2SWNYh/QxFpwl9EGD0SsJ+JCs5uR1oPNX83559hhcrCCOme5C3w8ewX/LffrT5xM5e0BfeVgVZqjWaK5f1iwPTmfrXQoUUKlaDmOzrM9QXJJJRwTEvQVoWtGByXzLfutFuk2COkcKWheb7dvEDm7qjgtwh7cHlKXSoW05QK9veMxO7GoJcDcZdBPWADJVU8VATSV8xKad15dVwH238cnyTzOuECEH3Yb28K840zSny5g1840wbIyOUlljWyw7KrP9fPtCwvmW9Rojw3AJ/VvN3TX6+pllwTuXE8RdGE5fBcEUgSiKpxqHkQJdJrtv+hGFfnj8C2zbjnD5rSl2AyGqeuR42bQZyXvBZJdY+/VhXGF+IN+Pau+mHHJbsqo+/JzI/zJHeate5fP7GVamm56PjRwnkbHrXocPJnf9oy22h6T3v+t9rRJmwInDAphC3wJp1OAnrj17MQ4i1jRIHEh5bg0b8bJP+6f+w0EzI/IFRFjtd5bPg/HbaoovWIxnB4iJgtr+n5S0ILU2Ac1nGyamool2TPBfe4HBEMZ23A5xGX9/mAZcDHwKSul5vc6RKshtsz0f45kcsl8H3C7VfoHDXFVYAamI=';const _IH='e5abec77640dbc5df0b7972ed674c44f2f10754fdd967324db1d744bcbbe71c1';let _src;

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
