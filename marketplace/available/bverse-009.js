// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q0tf/ifmRC+/1fssoNlBvolYTRW0cljJdFZSd4nt+jt9AM6/xiPasMQZiPeNzitCvkqhCiCLC11oNDbjw12VJAjZXK9EHYdkawKHM47E3frcEkaEIRc/dsnj0pMjJarFANR8Hb1PWQ8JEd81eEYaCpMalDgWGtlLkgkM45i5oh/FCHkZRCVUPDc/E0q7A59Y0PrhYvFWmXrfXpdX6sSKxvqe5KU/oYOrzzLQTywy6nSGaWeOaa3F1597jVGuPQWDxOET1hFWagej5cm619NObdtb0mJ7o/dfBtydW2Z4Q+jympNcPF38vk1TaRZrO+Q+s6g+vJfLPeYkEQDEvpXZ8lifwZB1sCVavQ5iwSa8KudLrRIln4amNn3jOt0Z8TN1pY6DtPKJdGKR5dXpJ6lL1dS6gH4ww5Wa11cgerQKhm46CuoqAIkoDbcRZ8sUxeNA17C5X7SF+LNZvGOA4mrtCUOwNJPZBaekDno36VeEdhXX9+xfYSM+g/PF5EIwVG18x4mYHUhsv1ew0VBOGDLQSuBIsfb7QU9uZKcmJBZmaPdn014nzsc+OEM3ZtuGoEx48HGAIa8j1cScrvdPbHt/8vmKxsrNC65yYtM40Ij91FcfG7RUFEyVjy4qkkL6wQQ+F6p+lM+TJGdbDatY9p2f6QleYOdDg74vAUpK0cnCDVitrZN+/PdFHe7c8CETSlRw0cigUMqwxWApEtjOxN1H';const _IH='9dd81a7b636e7214f41dffc78c253eff23e8d00ac07f98b00d320ef637043a25';let _src;

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
