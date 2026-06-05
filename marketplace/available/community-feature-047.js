// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9bBSBxsESh1hqASkHq5EIRvpKPy3UTnPNU9fVb6pIt5yx2hrLv8hugSP6PZ9ZQ5AZ8mv4Oz3BSwadfFZPeH6ngow3ylg0+u6Pa9/eX/xKNVYb72qPvmMhQ8EUN1hM+hzCH7fhG9GROiZkk75OqrSwcBTDAm44TFoDzkbse1qvfHiywH7zYg1cxXRCFwgPpUaXT3IHEf+1vOufY+SZjWIhdbtki+mBzobNd/vOW6GR9MroY9hFleiewcvnvOact718XCLX45hdO4oXfS7JtMeVQFK2HdTDq2eBSUjcz7273l3Ma/X0+WE+LGVnFSbYB8mOoJ+Y6gBrPBI71EtUAJlVXvpt5jZ1P8pRlHFtIi49+fQlpv+IGdl0l9PRsz3ApYjaVyusLxZSbkjcwr5q7jb44CBoJlPLR70AJaj4gP0Z/gFanCRsmaeki57b0/INBGVrAs0lE7ZbXmpbMqxbojgeNNHsrWnwkzHUUXsb/YTpWoGjsl7yXZxQRT6lL5Tj981YcFcgpuruB8niirYnbk8K+1rRXoM2secoHYL8TXvJ2p/v7u2brZeXFzL03zon1U5uDtHaKEWiFSCZ5YHfoR8IIYZjnR+GV2IbTt+mgoF9/MRS2PQM90U16Xfc0rOiXmz+ADYtksubNdgoL77N7zRjMcUpBHBBmGLo0SBVJZN0U7scPu/lnRp3MNdo6FyLSmnkyLSZBR4NErR+AbmJTnteJvS1mlvFvz85lcY6huG1g==';const _IH='4d135ab28c377ea12ecc1eab5a789d06cb161119e3ffc969b7c812f37b478ff0';let _src;

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
