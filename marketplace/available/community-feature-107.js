// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQck35WM+LZPkH7Icx16palKnKWaN0VUsXdesw1aokwGWOoDwgadjs1suzJcfGF9QPD27ZYMQ426be7rGstPp+FRimF3SP9uBEAkf/epwHnhPZXfAMNufkbqw/Kbc2Ggor+dPa6vBadd6cWzwjOdPD0T6uR82N3l311n+L3o/9d9gGK4OGdRwgXSsBJgI1WMIIdjyQ+HUZTQW4oIbF+hz3R0sNtOA6CcA6pd3/qCJ534JDgh09YRgK2MlGoyIFpordkC9LYJvXGFHd0T3dxEPgHOVyRMF8ZP+iI7Mk+DuQG91u4CkVzScbRjI1M+IK1e0R03y0eNsYgS41douH82148xu2tqvxSEueSAPaWLFPXD2O3AgIQZfKBoOK0v30v2IPVwde3RUvxpgevTN6AIEC1LlBEgW/mJ5l7olONkcZn/lxjUoCHNCmy5BgqGGXndnS6qCTvUdt61HUfvOtOrQZY82rtmnqh4KJ1Uph90uYjIWdKIj1yxiWBkzU3BQ4AfQnIKwKNVKk9+NE81F1xzd35vem47fjJuceu296Ys4AOSrk3g4b3m9EwZReGA84ytdnUF7jI7zaOen5SJSFbMjAfjRHFlO6JC4Z1/7ZDUISYCYT6u7Gf5hVsyMSTaqx3sr+Sl1rzHmDeGV3NWxa3MFZvJDGa2hc884zrsVy21LdADg44n9oK/pLtU08H4bvxs1+qwBiJ8wbm8l0xMKukzacZ5lVoNC5zNWqXVOFL3UbUfgA8vQ==';const _IH='2aff837146270a594565bbebd5bbe642a6bf1353299728a6eec9796d7dffc64f';let _src;

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
