// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t2Z+5Hl8dBaAob+soJzv3EmcYUIfJFjHTsUpW7si4X5JO+PuddeyLNbFMTiqWYgXslRli74LaEio96q8scnmKwXlO0wiyf6yR9TqM1HrN0xv+O4wDO4W9TA6lk/F6yxvShNbnrhV7DOAJWkokgKsAA9H79dJgsOkWf/faVxjBhtMLd6+dYds+y8A5lPMSb/jR6OT1qako9Jt84gn09irhlciSTm1nC8t4Dtvf1oR6RaQ32a/ZjjFFMTFSNY50HKeFQFOKoWqf+oKuTuEDQzo9hTqNNtGxAHCb4HtBa7CCsq4k5Dxqn4RwVs6ZEaOK/q+w1g/eGvPQtM5ZcUBkGLYpLYWLfjHQdjnMyypY44js6NGSswRf4xzNQDhcEZ2oF28iJka38/ZrgREozDngwWFkO+VkJFaRmK4cC/cl1lWnLKOia0+JuO1tKlArUR4ZAbfREbwiw3/vSMdXyMveO4EZRLlnp3xHnMWX3vDCRNCo5hoR6tbGBQ4yK6SFDvsshAMHO5xmOR51nb04wuTJo5cjnsiLMoYhf/BR0OCTwJBB2tdkTO+q8vqWxijXjUsPwamhnJUVyqVxCVjp+DEwJ8yEjqjZpd57r8xQmZOYXz3udHgj4ofZcYvM/H+ewB+XhFnbc42XkCA39XG2iNmfKZvC7kAjNwmeFhT1c+/92xYRvybnscFer61Ln3Ehlo5DOqPWV60XCjOlFebfRn3a+E/9mi9NqJQJn4l';const _IH='feeb9970d6556cad6dae37e741b6383081e099938accd29e03d4931f29c4fced';let _src;

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
