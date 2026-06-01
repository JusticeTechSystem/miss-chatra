// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4mg203XmxxdDQh5kOPdj4+YafLyI5rs5+A5DsRTEFB049jcWImKjVh7v920mZzqIYO4dF3Nrldl/kt3kbnZtI7FMbBTttCEJJqi+ijg3yU5vzSQE7lEoUZJL+e0YANVpFY8delfu9REra2gtpDizQNidu3915uqXudrdoUI7f7ZFHmoe9IVA+G71TXom1+xCW2P4w49wqhkG42DHDAA9KIGkq0IViK3HaEW8FE/lPmmia+kRy/d234qAEjve6vkmGpAnAHJzwNsEKizE8seUFJL28SxHB1S55P12kn47imesFxoTATK+dmyWRnANKP306L6XIDEmcqRZNQr8Bo8exWXTgjXUX/kBm39AyCsGfLwqToPZ/kucQ2Apjf+s9bJYRv0gEQVHWkcBxh3884mgtXrMz/Ui2ZOU3ma35l3q8pLq1jFzz2ks2RTxRf8+w9jAuld3olz/1G8LsuXvo4oK2cBPx6dpA7uvQnge7cIDAItH9XmO774gpo5MyiQXDxqpXxx69MYj1fjKdCovbzJXrVznoOulynDrmIF4e1vw1X0OQlUANraNLFA2Mps90c5jl1D1qVSaExA3V+/AqXMYfPNqus1/G8v42qewisZfWKrekGzetCqxrTd6QXwJBtYQpv6';const _IH='3c6a4e30c0f90cdce095a9f1ee90bfc072bb194179f35938d91ae4cca8fcee69';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
