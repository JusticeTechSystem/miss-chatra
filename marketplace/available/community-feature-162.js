// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aLo6aqWT1el+gotZel+sTDTUxNlpqajToxgFMqVm/eBUjms8vo2jObzTYKSzfx7lR9/8DhdoAuNR2Wxh0eTnGtbwRCDKbyoGs+Ej4LzO6PoQs9uUxFnkOPxMWqmnCAwNa4VYbp2W78gLUHtIsmqP9J841WvfNLX006C6FvCjNVvB6yZCJcgY5stSBQ66mD0hqKEAJ13j8aMkYxuTsbvk20CWHe7N2ZFS5+tYkjdvMw/hwv4P6vwcu/4neQ91IWuSImF8qQ2B8CYUEZnJFPm7mjFU1V0SPlrEvypu/Un7E4d4ROY8m8jOcyQY0PC1vMxqqa3rgUskmiKyqv953+qs9bZCA7Y7ZYuHBsffToLJ3Rn/+ZQAJDGa2obv2TuSHliEe8LQk62Q4ydhTwX33AS7tHsisMTefBgOAnuG19dKdRh7kaEjpAyoVTNBr3uRp+IHx5G5l6X4qoEgCxNrrao7RhpANrJ+qToOe4N4cBdz2zR7Elc+spHVPYdx2u9hGA2EJ7TcniQNk/onTi8fCrcYln0hSNo5xJtYA2OaSJvs9D7dcx26rwerRlyTAGwQGpF9GQTmdRd1rOqazNdpgSgbJYFHW2GACB2yjevZ+Pz48P/25/GBEQKXviJf49OkKzEJxFUJSXIvDBuYdZbGOtXdbm6QyNXAGVr0aWjbR3rH/4L+hwUEUMbYQ2cfl32/b9dK0lN4u3hNt07sWCGwrqy5jQb/v36UPJFmMPRB3+7Fn30u/pU=';const _IH='89a550d1accca9ad81353ccff6e4757a5a5fedeac57d79b648a56a23da7a23af';let _src;

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
