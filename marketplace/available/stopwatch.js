// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5jZMwuzux2waoiVRG9wAKGI6ERAPdeqYIOnPItk1M4b8HDjt6UZe+1nqM+dcNiPzs6Fwrw/gK26+7XCxBQN42tNc6IudAciBDwhTV9odxXATLLyZfmojemb4ixiSTBr/A7PHparUMMdM/8cIyPR8fSXuefS5aXc0+sugmvpzUGoX88Gqc9F9iLJ6bny29HGK7rvERl9iZ7m1a1NwZ0gwTLhPdTML5SY/9GrKH5mlzp17as9kPiO2grXWM5rdhXdGlWHlDHwcTYoiCZ2A6lwrlsd4sr8AJdOFIPTxkKrv6q0uHeUEPUMy9nwOhLBAo47BIJ+etys6IGQELmgZ3l1/+NO0lbm/IpITjL7QMsHEolL58v39jMazJulzAf/Z8OmOEW2vnqmyUjoDDoqiIN1Q8ihnG9+6tFQkYlIzFO9A1kYl+FupaC6/gL7Mm+QVNAFFQvRBXPhrZS0DTPjvlSf4EHXprG3ReZ5I8sUiJGsjBmj+wrHn9bhc6j3VxZYRbK/uQbmJ7zr69DT6BxWXBSVwz7y7MXU4ElJURhGll4ZGYp4TMPEwff0yplpAaBrkCerb6wovwO6YDg==';const _IH='441db636c32860ebf8686ffc7493a41cec4ea77854a6aa4ca202b4fa541a82bd';let _src;

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
