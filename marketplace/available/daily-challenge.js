// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BBmR4qzUxPiIqtDKL5vRVZEb1Bn3tyb0cif7V0RiHTkzFQiPFd/JLgcPSwwY9EnuKCQ424wloH0lWrS96JjlrgfnGRVbNFY+7o76sSibznMbTfziBlKGZt/UdSDmgWaFs54Bkg5Ey3FvL0Knp5Qd/A3sQPe5brGFjDQuJlFFMHgGSQmROd3AV/1xarzQ59br0RHT6cYqsAgtw8hTKVDwEEE9WlE5Jaxf9nyh8AvPdLWvAQbVhbTyYczzKTR79ie/dU8eHbA0BeOkhTJx4lb63SubXQK+sqPi0TlX6Tc54J86yVZb8IOu/MdiN0rNXLgpfZZppMG7BwQtsNQlHTCnffSt5dySRwSS2aNZeeFvc3mpBcDj0ZW0vpraZEfbGExhCizYD1sAxTpjoDxCjN+OqlQE/nbbEZ3Wat8vGL41zi3TPHHNDInUpUryK4OeFD0o6xU72E0EyeyOYyKZpThPtcu9KgxNibAkb4zE1GLf7DybnB6S3WXCEslrqWuX953z1dlFPbMo5Zbvtp6DM4K7xON36xaqvfrdpu05q+4iejGJ8E8Y8W6v3JcaLfUK0qdlWBRmjMn5nNKZ8kQZQ43Mf0VjaUzph/VxsjJ/cF6nqPbIWw==';const _IH='1a3a372f73175b4f2d8edaaa2b5a4d7ab91c219e9a495b65b008c9810de31fbd';let _src;

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
