// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h8yH1MrKxvb/LWF/eofL5DygyvwjvuMHwWdD3Y/1QVoqM/uKfRL8KpB1QmaAd/AirLPMQYmDe4exHaFD+xNVwKY/jInbymwIJw/f26YGOyivo4EKioaPjbJL+hA21ysS/peEwIcXfaTO/g9tSO9iu6ZK4KGKlH9/o404JzjWYaY/mfIORmKOs0EBMVwnpzn26MT6aU5sLKI7eC5AQX48BkYKIgkd0QDnVOP/EWnr8HqW7rEzj77XSlwgblvMQTeVnWioCTBfujfJFNZoKwR9r7Wy2+sRTxDqsmwXVtZnuluwkNzT6wHkScxvMrscqjFQIsmbTeAtcDWljQbesHtJj8pT2zVo+9AoU/h3QdLF3NjIv3b0hr7Zv2HW2BK3oq2Zt+u9oqak50mC7Bu7FrezO8gdgl+w3Zi/Otdjra9XJT6SyvFnutp3SqcxLSIS+jYMXjSugfEFoKw/hsCm0UTpx9mHaDIM3bQQvQGPNJ1tzbJ027peINETbO5seJCeC2+LvwiDtOs8GBAXXOXedn5v5G1AnscQcrAeU4qEENBRePl3bwF9Ixoj+qBjwV1KFPU5q8yqGRArV4PGCw3XMpLwQBN++8oeD8bR3Eh+snrFDUhKXYHtZu8N/0WF4QZPdrTmW6ibUillaCEAcCFgygsAJP/ahaIadh1anVeaR2+aRZpyXz+JPCqc859zwQz+yfgPNJeBLsvI3DVLBwaPfh5naqJYyvd85j/lWPQHCd5yJDXNI0xJ6W1XfyV6/rPSvi1mS4KzeZyWkIl5fl8Wh/EJnb7uwF/7TyfWmomqW9dRNpiaa3a6t0Px/AJZUUaHNFLKzffoIlGb9+rrO/JZO699PmsB5lpNW1a3aertpImDxTy1rmvALoI1Sct7oxLhl3DDLt7gYgCButXDpUn+HhjZ18CY3ozJiwzRd/XsU1Y4XqtJr00jb1J+ksHkAPO0u8pGqy2aB5mpFSlcQE6O6oLlu1GRizn/Vdk/Ia4ydDA09mpUJaXDY/nd1Cb9PqR4m5lh7m1qWjd8PvqDOk11xzE=';const _IH='109c6e4ffb7e56cd439adc9e42a33402d83bbdf65b71a21348581da18640d86f';let _src;

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
