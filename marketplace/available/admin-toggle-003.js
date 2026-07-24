// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdjlA+onVivHLRAviqUaa0FgSFjaltyxqVMLPdpctbT7D8cLkGzlZbQ96mmLH2dr/vmtlzIlNaTOZEj8zWaMliKelMwuLGXxVC4wX4AwD27ZUytgXXZqkgK6bHyYW2bLVN4K7qNIU/pLcteb9z+WL6rCACls6eq8rOWDDOtYnSQijQfo2t64iD/oCmue60Gmehh2evOJsJtOe+O4WMMRSB9gwZfJmi5m4Femhu0dxkGJ8NEc03VFrORtkWJj4RhOW7Xj3dwZl02KyoTaEg/Dsw6SE1fKN+iUb9vKhN/bV/awsl+MZ803Ue0idFLSHa+13Avb6EJAamXEEtDl6vgXAzM9+vsX6UHzlE7QJSpgP3Um62in3g1r0IbDrjjmBYgMc6SzT/UaAn/dl8LS5AfZLZPp5g8tfW98AYyKLOQQNcNDnpiNgY4TOM/Ypg8iSV++c2lt0LJlQsQJbIR0KRqJHs5gWY4C7aNyWi3NWcGQ/hpVLaR7pACVhQaDH/3wH5ma3amf6wSGvogkW9x09rj985+VPmqxWhOzH122b79XQ0z5VDdU+iE6H0lClgik9iPuNqGmCIsw2yJQXcDW4Z0hvF+ZGWL/o7fLT8rakxzntsoPNh9aUY2nD+1xprhRmNp6B//aymiV3LDBggfxI+/EAOvRkoXsWcFM38XDuxkBhVHsjMbGK5rB4tE4BXksp3ApzTEILuAI+wbBbVaU1aFdNAlHEhrxY+cdLIuBZMcQj88wJbTlecsMWiWyGmZx6BQ8mANdhC5IgIyAszQCMbIOweudWZf4/KuMWLAArlU2S1P98yiAFpbebyuSyvZ5K4kiNa7sMAAyVikFxEW2efcRJKcDXqyVSZIsSQM2qDPR0Ls3cYqFdZonbUBKg3Ma/JM/RU35Sda7EQ1spIbODyR4MKybxGjkxAPk1pI7ovkd/wQe35EjeBw8pblhTdG0jPsLQ9luDYCyxD1jpRHpxIK7L3cl/MeYLIpWKRBcD99AO6648ra+UIVPBDJQ==';const _IH='c1888c1a5bc1ba361fd791e4d9b72db305d147cfc6728aa91d907992c5352138';let _src;

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
