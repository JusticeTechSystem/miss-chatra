// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EimGQJmvlOdLLaweeC2CHeHBTgaclbHdrvsrbaVrb50pbrIE21C1Vh9+4LLsgu0S09bP/rimWs6/kkQVcuH+2MwmGjc6XZdPc249OZzJuA9kZQTxgu+8g/nSlPZh1ZcWiel4z8gFgL9WFbX+nE/E56UK5F2A++UbAyhzXT7v6Pwsn8vQyRfdzT1ACErhm7WPB9vuzqM8YAzh8Z0P2NeAtnPGm04QkuBQco0i56+a8jWQuoHiZvjhQM9QIr9a9o5/qATC8uIX3/tMFNvvxiN9IkB7wIM71qlYwEdlAJ9CnHkv9ZB8N+awU1dmblPXEABa1M6rJEevQLy2EXX1au76EZ8C2+gzSruYDXMS8eW/RNv98zVDMmrsZyZYWiPP1zA7qb0hPRJ9J8Ph0j2x1cFglraC/Ew5OSWwjG8krIdtONG46VzOHEfIDKQjpAnnp8uxeC0LYVEUq0CKNPHQWHRvoIO7gAPG86wkLSFVF+PBKfwttYJtcXuZ0QZ4XTYW/Yeg4fLHvwILRybRmxDxaZje6EBNPbWIlypfj5ifLKyI3uCPKfUQzmwBTteXQeIeCLUrE9rUXbaOUufW2kOyMbwdjGRAltfCulBk60h183qJHMZ04nYVAvDy28JsmPvftM1vxngV/5OAUISJ+XGZ7qm9x3zSOlaL1hRc9KM9Jb1dijadZvznBeIEUKpZZWAmDwmIxCgINLpUDzuJI8doAVa2Eu1sxXpYrwOKyu7xe8pfcDxWoNUfd65t74i7TX4NwP5tNY720VmwQM/gAIRu7v++OuCkS3agtk+Q+HDAGKAeIHf6H0KPO8TC2A6RRt8AMUK7K2a9LTCL+tl8RyJghKw/dlq0duvP/EwesM6+jCMQUPzcHKQITLNxJJdvz50La8pVQvLAJ8GZAg3gzupe/ICu29lGrgyv34CHRjPWJTKt0cEkPJr4DbuH/Ll9EX3gBp+Li726kx+qb9xk634md9VUV9kiMjTLJI8JSxH6a+R9ej+ZEIC+Lhw=';const _IH='abab20e3669e2ec239d19c4cd7ff5cd18dd0a72b2ad3ed35ec92934e45fb2537';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
