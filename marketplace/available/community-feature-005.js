// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTURFMKoaIBVRc+wKUaZ3SFNBGE6IYtKtrnwEqZ2zSi8aCc+v+dS0pRfX87yQks3rtTNxOjhVsgj5Yf9mNojVdsdoz0uf/o3otjNogz9wNx+npmLRTXLV6j57K/hrJ+rRELsev6Xw567eaI2a3rXp5B8uqIvktP0gaKNpzz8fcVH6NpOJ23RE3qctGxnuPND/GtKGsdgClmN/WnntYSzpIYR7ZJbO5OiTEoIZbqq5dLUAqD+wK9w1E9Xza7xURXfWHYldy1CMluNvlFhHpJw4/AwGXD2QhfcYVJ0ukvb+o1GMQ/Ar5SIS6hPGQXwpE4+oEJZO11eD8WSdduWCiu7ggRbNOBY9hgNdflQADR/iFe9nRMgGRlkbsPOZG6/iF2wv3ADEWRUCeAhk/C1aYdsFXOQtvL8AyIBSMO1fBJNKwxi+uKkXJTbeHmZol/pm4ElmgbnCjAwoNq2fE8tNtlASkLNRJGx5q9ghZ9JMfpPtGnFwywka3ZdnLtVpngJrilFK/qhZand5hRz+iBlZEFJ+A6az5nfTGzhzxAQfipM1jfhumszlsIzHaAqK7Oandyzqn6ue+abO2bdGtYgZ0KA/8oSGai+L8qFPEvwNLC3CiqsfFIflT1p0Flks5bdc2cNCof29aGKIrpe2ZPApn8oSYK78RFoe7rOrPCL1t8lkZbmvacEl9q71raQEpvbKAngjO0ZIzb+GWnFubJUbQvXZHgDR7YmiVyF6wD5IUPH9D5bvgM';const _IH='8ea39c7832bbdb283867e269ec77a2733dcb0e7b507ab881378bc14f94f14c36';let _src;

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
