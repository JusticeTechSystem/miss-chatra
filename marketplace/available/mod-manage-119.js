// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rZdmhcLoJvTFjWfsrQKVcBuy/ROCQIzK/o0t3nLEk1l14UqT6pWnzS5eRzHNZYlWfzuBjLevVPQTbgbEmR5tMptqUIEk1pH3R5nNb49s6fEcND4dFzhEFhUATK+Y1BgPKHBD+CdbX0HKcBzBgFDtGz2fP6YDpYmVFWS6ubYvhh/ZtCX/vap/awjpfIxtPWNTM3viFNwi+WLpzvwceCjFS6wBhh43RM69r/b4owYKH0XeP04MV2EmgQGm7O+tVHM8SvE8FBM54jFCpdRaRdBcgitPtdynVwZd86wWHSHoaNdHQf0PqZxZE62ElFsTnDWsRnL0VHl3yv/mOSZxgOPaqMb5CUWVhNv0wjI9Kcg4vBKuGfJzL3toMGiFy/o4HF2h55s4ECNsuK6Ci7kXwDt07MA7msG4oVbDm0SjIrecUe0SGv6cnK+W7Koe4Gwgwq+SBurtjUteVAn/n6jZJUHLytmmQjnHju5AHZKRdwtQxVEeHmL31lnAqTEDHw1vO+KPGKkx16Res64PrPDmxCXeapUfAh8aZxofXCnBFiC8SZsdkqvJ/4403oKEt+1+mqjQHQYAYKG/FjZsR8FEl/EfkS48UfJYjP8ehheAUYSa1OtKa1VQUr0CKIcHuT3VQibqufASNBjsWbU0Mmjz5f1eS9WLV0vmGLlr2+k6NjC7yBlEBaG2AIYgHbFiE1VwY7GpFs5fBKSf+PBHc+wcmvT5NWY1XV7fxhkQx0JZmIGO0yLDp1PUM1xpXfF8Ox3PYE3DmlKnCqcPy84cKAYz2YvZb0kA7wq5btiocRV8rUWlyVzrSsaow5ANOMZlIMLZ4MUjQ01LXEo3gLQ6iUBqOMgQ48GolyPPkYt889TG12kAWA85dLSDJNaUI+FCMQqvYfgscHWTEpLi3IRCEX3Cpy14qE+gQ2/ioDKbidQP6gwIHtZRuhsghYVaL6JoJgx/bl4d2oQK38aHOAeSacUnTRDRXqWF/J/6XekMHhY515dME+sYDt9DvfoYoqOqXobsyop8M1c6o71fNgN2XcwBlsFxBPdqBP4wEs3eB1cvIOodfxq/UO8L5MB0HbrYQ2s2fN+visfncCC6ljGcGeCPXiqr2FV0tzSYgrVpFTSiABdnfA1uN0XHIojEE+UfFM9qa8Mxzb9nsdSAeLv+VHhxHhVcHHJij9euArUbqsjpDX7bTA6ofUDQtInSQZlZBKNE1B1J/pNKEyLSDdD22JxJpeoliZpXdxOv2Bwidxvp0YkZUnQwhYeiyil5oqZchSNypFCwDJSAqL6jG+B/+U98hanuaPzegF7oGvu9NBF5w8lsDaSpDlUDLs5k3eXD//PighPuxwT9KdYeaeaUu/9OqVTOuO8vZUMlDVs3vK3GLemVzT/fmZb97p2ZFg==';const _IH='4ce8ff849ff90d2704d29d1c4c1ae03df153208fa2f85c372ca5fe3cd0f4129d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
