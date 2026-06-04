// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xYHrMAkbAu9B1vlXw5Btdj7/QuOE4mbHzMv3XDvdW+oGvgSjPMGcZjuVtXde8Vck7MyuBama9SRmiXpd8sEIK8fR6TCYRn5g7AKnZSMIQvJQyVmixlIlHtQfQcXWon0/0IYAcpVl1B/Y/OHJWE6IaMP5oovpUfA6u8zD2La/URt85r62MhsM8i5VNb17CiHUYPoyqyfJJA760W7d8jONciExQoKRQiAEEhGzQTYntnxJny4FDNj4ZpK3RFyC7rKbwQgboBe+P4OMyjJ4zUIOVoorc2zkUoUkJzzRZ0vC3pvN3LldLEiUT9NfWNPHujgEAirl+RQhD3O/xb58b2FbkqiTIen6HmRROl/Y4ASBDB/8uynlmhRyC7H0KkE8oSyjTVOXX/0bHB6ckQqcE98r1kkAFzfWC2Q5nodpPWcASMfoTXFo1L1sr1mrn4urLOxVOjKQmX0h3uiC2ztJcxc83cPZ1TfbMrdKcuIxfE4tPp2VkuQsHZGh';const _IH='704207c7c1fe2825652c06ffdcfe271093107c3ec17bfb0b23c7eacead7454c4';let _src;

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
