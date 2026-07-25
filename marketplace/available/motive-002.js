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
  const _b64='T0JGdjSO4ZRc8KzrV95WGUbGM4FTgbL3CL8RuoGlGJrfVElAhC5MbMRSfS188Pid3xcco+y9i/9TgbgXLl+HhWKBuJoNQmyamVifX1IL7wRT+YGFMyenkPrnBYXMdSmjLFJ29BkABpDG8vdUZsW7F3IyS82nyf1cDV9Om9wYbcX5rdjAI5tLplG2qVM5zwLwbHLkVXaDeC/k9kN1RcwU0VugCA3zr/5dP0h41YqAD6dmcL8Fss9v3imjaEuJRaVP8QEvFXGoeeJbArzdYzCtO4EiylK9Zn4HlmPs3WkObIRSAW0a2ytf+DX1Rd/TDW1Qa0Ci7NWXug960EMEisbewj+cuyVlEKUeRUmoCEtGLht3M1YIPhdtITV5GN61wu/mkUu4eetwFx9X1sK+z4nU+5GLCzCC9FWW9N6jRzpq+7mwO4/7L2FNuytn6P8RNrqD8OwBqVYhQOI/YJXLWoXsabA118wEq7pk2nGjNqkyhpkUXlP188Bk83JcAZbGWGloEE6VVsal79yAPmZmEKXc5G24Dgokc7H2cUno7xNMNRjwxCMnNGf5znbapIRQd9kNRjV7KDOuITzE0O0dIonWDmeUDN85MaEgDm/jPTZPLrOEdvixk7BpMAspMGyKiB77H8/glsFNHuLfxf6iP/UhtCWHQtplBF4Fruyk1HYKMm+3I+oVdJAciSABiAHmlteBfDRRg0PwiDR2dueXuEysK5kJ12nYUb2STXaEWnvJMwx+ofedf47pz9rWBVIZrRv117xp+nJanwtjmncfR/1VUTVHCizD6XMlBfxuu/zxhqVjpN/1OJ1+cYVEW04vnbQwHWHnaMm4/lmXRIQBdLHUPsmKtI4OoayYrFzeHx1mTM1ox+4Y8upHstgt+atQSj+wbwFtXveWBp+ICNDIy+h6yBSMk/YwCJLU87xm7xYU7ouASQ4EgjjXIN6Epg+/9jXdbmS7fuycUcL8Kbu6v6Xvx7eepygmMJegF5t0nFa/N0LJ4t+VI8UpVQagkOwqP9jmg/w8LujbLBjlXNd7GEtEamvrPQ==';const _IH='7ca790e09ec8e43a72761b3fad723444aab00837460530130510ccc5b9e7c736';let _src;

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
