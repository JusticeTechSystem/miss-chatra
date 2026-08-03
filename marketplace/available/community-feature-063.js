// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0otS9oaL3915lze8CX0OMXRCgxLFjcwVdHvJK4092oyhZJaIxjc1EErSU7IZLzeXdpLsmHAMsxOYP/cxV++eJ4I/rA1p9ImWppUjIH5+XCTFX/9vCFxqDvzA+Gz0TJC7Td7q6QlrHAokK2V6G7Gr6xO8YK1CHp6v2d4A93hllWwkaVXxF1e6zIJJOQqq2e5OOQ9f0QjiwC3l7Z8Q9JSgwqsnhN3U0m55e2wILbwA/UV0Rj/qyMvEjav319OruA9Y8KVn9Hf4mCJtYs4jOjfdmco5KQqPu9cobTxWzq2/fOsyJyP3mCXr/hzsdP/ccZCmnyuaXFQ6YBJwnf3F6D081RV8LuQpR4CgR6eVj6V95BSIjuiPkQvti2zQz82So1d/q/xDxWgEuaGINU3dIMoiI6C9ODQwYbnj1ZV8gdcd5tznnxSJqSAJ8o1LtUUqQMqjoWy/3r+TUrPUt1rCjoGbE/wwIY3TsMZepBHWCfRqHbEb8kF1YAAVwy6lHGSNa7OgW0pdHr9+t6wuY0vta/LybwsphFRe/yk+5QJDikLyNN9YvUnQlkuIzxIXflMf/qodEEXbJOdg9iGUrLTbFOtl7QTkXNZ+BCu+sufSDaGR2sf8GdqSpbQ7STybIKPAgCzok/Vx+GF3vOX+qiglAHEC4WUFVNTS+IaFTt41/ULxVAhzpB3HZYBmuU6PCGUP+KcliBJtpZTWmhqAK3mT7x3gvaEz9HKE=';const _IH='293f354856b44cf468da84b13588d06dbdbb91f84489d5a85d069db96db0f10b';let _src;

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
