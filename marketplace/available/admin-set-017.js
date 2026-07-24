// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYaqaF6AFPwUqVqysfcog/R9/RCQK1NK6HR9sOos0tAEAWF/rQxhd7gmx1cYAsNqSyfofqQz7HY5cs7BoPlkfU5wFJBdENux+H07FwM0kRS2OKMrVxHaHoRW9P595DPLFTI4Ne/d/RT6J2q8Xm47J6mzUh5Uaph/klM63P23BZIZoJgmBUkUNNT4nTxnnaGgea9JRDZuK8lKMPx79I/GoY5oglcL+rdO+OjiFrmGz6UYmZjaig12c1PsrzDKh1Ig2vdG9ljr2oQ8q7NbM5K+Iqh8D2mqEeCKKPpdKmTJJju6C8fCEQXg8JptMNRIAZQwQLSMObFJxo3TPcezf4fCo15Hq2EylUkhR4oYHt4zKGG7pn3A4iSkDTYZmTPI0L1D5PCctQL8qsvYaYNlu+kG3bVk04dFNcYYy8BIu6oojhlHWGUsOSy7zgAVGgkP71aczfonOapFybw8/yoZZi/sl5H0tHhxKl4TJSNlqJNhgZCEjnGL1b0l7izhQ02jYnt3LCIm2hyCegk6ATJMKga4N9hR4yTLytSrpydx1Z8duKKTrdVJLdYi9JUKV22TOhrOCl3gtPjORb/AFKkGLt6K+X0sNKa8xz+N7sMOrvl7/zJK0F1T/5v5T3EqdyaGLFT9G9LgERT/2rDyGicGkxKjwcqG4R0d62TZGfGgz9RKIdjW4fkknDZS70byIDGp5y/EYJsFdhkI1wxK5Eh7dknBC/G4L5fgDeQEbIEKzyqezS0RW3d0nb8B3QG338dNi39NknaOBWPWGy7CN3l+I6wdpabCd+LzLf4zaVZLQDFo0/BhmcMvmkTy5j3hb98pZAlR40oyAOPs4FOaI76kNxgkRdTvvDY4W6B25fw5R3xaGlTHHBWs9GGpippgqRmoXnjWcv6axOQU1YQwj8T1vB0Z5jrHv8vmfgvhD0/6mijlHlh3n00Fi/LOuYXWgA/+hx5drGvaML+ftSoTNL1KZxDLVKlHOzFv/ibos=';const _IH='d948f6a171a61c49d133bc3ef8feaaa2efe0d74d54b843af9fe07fada30130b6';let _src;

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
