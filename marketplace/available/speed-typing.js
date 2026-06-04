// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2hH4bHGAz06ev+VxqcjFC40KoFkdTYHU6BMrom/h18HHNUebz6azSjsMeMFuhr0PcVuaWZrFJK5W3164rAksrpJqYHm4fAgihPbeUfFe4U2HvzBloe63F9tIY5L88I8BBeT67SGw9yMkfObomW/s5gGuR2XShK4UcQtyIZh6f3AyiQT4g6Wye3z2QqzryUVEJgPaGV/faxBeN4fCWtEV054WrWQpU3fDrhw3A+6pH/kiCoP5G4NSf4namEgVam5f/enybob93H9vxZvqT9Ofv22nXLF1bC1+A5p5Oot162juVf0kyP0yw3f/yVV3ZpZT+OtMdpX6dQA8L8dJhHLbEUyz9nbqEjkX+pM8iF8poXzN2y2z6oDgVqyBei4McvBOu0FqARNZnECs550FPi0lfHSt3BK0kwXHmEwtAXOZr7WNeucufyPI64Vxvl3mcxb1G1RElpzsMRSu+6rt0uN0nPUxx13xJeE=';const _IH='20078c1c8200cc8898f6e110c1fdc7dd505884d89deddd9c5dcef999360d414d';let _src;

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
