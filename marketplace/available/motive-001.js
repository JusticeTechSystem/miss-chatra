// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpVxzLTmv7cxVyvVeFbJ3+XNKId69u6DJUSdiskoqbRPcBDSmuj3hhVkHinaUwYf3HZe7e6N9tCZYEaXESAlEFBJWEhu6eHh+YtoCBk0iCwFB7tf5rhVI3y6YGTlFWMPQ/ij/NgilpDhTrRIbR+jJ/siw+EzrtHD6FN2WihZ07ZX/aMBhDtvyO+aufMCh2zocRIHPInhs2hV8cht+bPpCXHS0Mp8ywMo+lbuhfx+5w0Vllg9yj3AiYZP6a70JW5Jh9+S+UXT76QH7fRykSszn6zxds7Bj6lGUUU0k1ZBIuwsN+i8MbGpzbVZmvI6KKqx8AVOFIuq0trYkhe8xeA6loMUlEe+SxopQKEY9M5d3T5O66RrflOIN2DWGeK6qRrk929cUItgj2mvFhfNxD/hPCSq8KZnUYR/LtnljFxlLM8NCajZi5Pc6mtdvyLDSmvOPu0ZKExdD6dQCK4SUjJLWUogKGjuWMCdvaPjwEOIUYeNyVV9vtpJyi+3nm3M6Pq857r5ft4eyubSW5gtlpQodqL5Y6BkJXdxKugdZHoE5SkS4A2B69vvKlqEaahbKCZUeVNIxSfN1hTVXWsWmU/y6XQPBjeM2gYMil8+PxrVtjlJsT/ZdwaC9pl4kFpIXGtoN2pbwY3CE0DIX6AbL0ogPYEhKw16ZixNgKCJgZwttfvcCG6WsZvPvp8PhuTOKbl0qTXtw/dZCFge8SP2qhDSxf7HqkSWeBmzw0sDXHZfxWnPjar0QQ2x5WnjB3L29Cm38OlwLfQ7zBMutHD9YldlO1hjCUpT1vA81cB/MrAcg1ytkrVqEd8OQGNuLT2AIWqWwSeojI7ytHvcucIJglPpFFdzQozoYb44e3BUZ67k2BQHDDOrU3mlxA8JxlWvnVom7EnndU8cjl/+6pn/puQdtCHUcoYW4hSo7YkJmE79zTNjOpL9eotFWsMZrjkc5KjILSV9ebD6BEb6U4sE+Ogb6AH/Gtq9EsY1SZ9kdPVgSUrTYyp79x8vOul6YmxckNJMolD2yfQ2Oc65H696o=';const _IH='e6b0f23d2f2e5e03c53ed0b7879bff3c68d97bae583e5e32fb762b6450176791';let _src;

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
