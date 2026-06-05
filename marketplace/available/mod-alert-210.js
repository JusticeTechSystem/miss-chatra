// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jd+TVrewpNsvBai8KVLjzYrBmgVLec8muRzm29dOI09qD8jKxaS+ekTExhLZY8JQ3HBWYlwJAJxkCKBkMpyfR+WGwF3xdKptzL2T9IklRKqhwQZOn07jvTjaAoAowguCqRfdpHEljI5t3Q8pFJcsItjx5VpqGwDR7WE1CC+0B4yinoHlT8ZD8z1CsXf+KDuuolsFvos3XOuet8rXLMt8HzHbxXrNmJ7EeUPEKjuw7jkLbghMy2isi4aNxC8LHvOyAg/x2q83mPleaD4vDMotO4/eAAGOMaikzTYaDo+dxaIyIlLHWmQFFTu8YuJNcfblkPXT+pIguf34G/Gu97UTPbKQZKDnZtbKf5c/QH9zLWRoL2NJSgLOSoAGDAgVaOejE9xM/oHNZ1QZs5s4dRvjgPH6T23mgH/lLISn9YF0lHBu/XxfwStCZVx7XGgPL48ROlXOKE3gQ2XiaOqwUo50aQbcixcv6oHr8RJTAcRdX1JokNc1vjwRzD/WA4TCKH53v4Hx8qZS8BxLfgFeDSgnOvV980efgZr9rsqbbzcHPrjHrl1oyRqtggD8OCQE/ZnP9yAg2UG1Rq8rGA9XmcDatHZ3y9QZ1r8OCdudt7j15G2OSYwRmKSE8ciPP0Pbtmh8FhXUPpuLz5i1pJSfVdUUspDpFvy1XmVI8u0hOTZDfkvohTBYiXx/1J1Oi/CNAOlXQ3aFm73x1Up0uJ51YYtQMLDPxIJQiOz5eQfVN2lPDMPOU8Iz4w4/uZapVpnMMbKFbojVyjCfKE9iYTquevWZoyYa/iECQLapk4JU5X0TxffOJYUdI40Qrfps8F/m9nd/wOVWT8fjlYnJSLvsVbt+YdEDyecwG1dYvKiN/3Wns93BLnyCNmA0wcrqlFufihi1wWl6Zf7BbH1mQYFIvkyEU82m8A4oFP+C6jzrggvgVBLSuf+3uuxIqYhXacpTU9Uuk6ytmBFt/zjAcMPXgdwBQdZjEjfxArGFte6kNxuBYpbQGb0GSSckAZBVOm/7D8ll4TrsmgDQ5Di+mv+y1gNLmt5JjTZrYRTy01RosDDX9XBQU73ZN/56GyPiMq6k9KtkmCqqjNF4/8FKU+ksQ0RlXaBNfMvfNVlBd4g+bAJsx9YJsiOynKPjAre+7VQocJvjGLuQvfmjAEkLV093AB9smYrpdW/7BsXw1ryoAmNVrc+l5LTlKFWMhuAotdzLhZ7x8dhf5HMpEXx/3W2NqXyvAOpdfCEqcvffIFdqeZehzldBTWl7lbqoffQ8QqcHWhx+pN/RGRWOvdRcnSGyYdcrLV+Egxgi18VOqPesiPlkVEgVD5AE+15CanBYS4c4U3z+A2MAHZko5VpFOjeffgSz6BOMp78PWvWJZeniGQmS';const _IH='5137bf36ac2a8cc43a14762b6c3511546bedbe5a656c4563dbb740d73579beaf';let _src;

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
