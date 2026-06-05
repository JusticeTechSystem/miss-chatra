// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FvdwLk8xiItVGoi9TnQmyLGid3B6INrL2WUImIkZqYhNpVTZ4Ud18poKxaZK24pU4E5yjGbOBeFlCFBweguFK6vnAEQ9r8AoxseYzIaKbXf1Ml/SZu2DEXvHEj6I9crTqBAiaaITNyed82QTd/1S2oo/5ZpAsS7Fc++AoOCzBIxANPrC0gD/xYQ6Y5DhNN2LMyz8LjLMYcmZVeiKnDO1r1z9wtEPrl7MgKYIr5duxNNLI8GVtn9y9bMVa+UvBSkl/OD61n1xvK3LQj5CCQBp416WWw7vAfwkcBlDnWjL2a/LHZDTK1Wu+2y0wiiuJSbWbHtSQ5m14+AIkK5yi3FJ+TEnFrkWcmzX8udjto9HQ7MwniM8W0ECCkVlllWKlNINMp4MpUdjVSrfzdGPIukUIllcuiATOvkLHBaLwiZ9moIDQG2zndaKP7iEJKVlLG3uPhMuXH9EIGJNwmYINYHNOpeai04tVULN2wEcIwwaWOx70G0mfFeyi4DWaVXg3PSkQzdARnv3dOj+X3guZ/Whm3ZrRAUWgRefutluFj4rmRHZJ2SiavRzIIEgXEFdXObTiYWO3pvHBFbWjC/cEoOHdcxJYCtgRdC0Cq4raaEXMboEJdWPYyLjduKOCCGXC7LJ6kZX10QynJVVpMjb4DNgK6wG4mWE4YMYXNCHj5XjpTkSBrCZwkn+WHuq8ygRTAAWuaS/SiYBKDVcklbGVEFVlE3J0uzN3rIvwtQCe8oYyXbnIhIrcOF0wAPKNHXVJSGOTNDJP5cfW9COVtUjechf3QwLLUDEz5smHEyT8IYPs3566PF7VCVJ0vql2Ycn1Rz+daluD0g7fWYuwJ2e6T7I8KTS1SksvXzaIQq/LS//llp5N0zyIBAUKUPsw0vPv05yL4/4GFEomGz58v0MzcBLKNzBgDvpDwXw+IkqOwWCEnn/foEtAo0h9RaDohBlExgcPF4QF2YtYu8U76dgl2h/kmohxaedUFrpJkF/5XRMQB4jwvd8TusExSw5fbCeDya6S8wd50e7oKkIPwHJCydCYts6';const _IH='7b19048cd761e8e87c347e719a7f26b1a5791be8e03b9c46df682242ac54e589';let _src;

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
