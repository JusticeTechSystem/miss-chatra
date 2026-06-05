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
  const _b64='znWQpOF3jMmaAm8WVBzIOdih1060DSd8IOELEE3OdJJ+mFNCjpgD4YS1t269zwQ5aDl/oyQWMLhn3YDLZiBD6N6BmUjOXh2GnENb6JxxZvcnY5cYdnoSVBethquojcyphLduUs9NPHLYgaec/cq+fmmlezCmDL1CVrfXEg7uN1e6IHZowFCmnO/nxnRwgMJ60ZC4iVo8rCCRCZkaRVJpL4AOix7SRYuOQL4KZ1C737XuTcA7VuAmhLa9GcgbCCIrQzDR1hnos3wKkk/vO0PBTKfidUGkcg540PNQFTxV+qflhJeIYfRnJMD3t3bwxzgMv7/7xGiQ0OdAByXaZZKN9Z8GtPpejWfOtjbexSz+Rm/AUbbhqVE+0BlmlmuvUUSIv20OP/EwqIfP44SxZHpyrtpjodecuoPnZFaeFVO9e0+j9eQwNr8KLUycjtUfZHCNLgQzY0fHHLlAF5Uv8DEKlC9466YXzfLEbAwftRuTCkh0LcRtWzErVuI9EIBUPBQ47ExP0bq5H6j7PTJKuWRakdPfeDgOKANOTl8eIZVaZYiDr8Im7UnE4g9Lt/jgYVJ4My9tlIbKBRqXpmAAstGNj5LaCtyAW1VyfEwj4sPOD034cx8DKRtefuztVF7ibDTm+PDs853Omm1OLfZNv3uRJTEccyKb2HOLbIP2UiJNBjvB5UEvs/w9FZiGuWkIgbiOaZ/b/jaHMFH5PN0mhEvSrK3TI4QKB45qtlEZA49g';const _IH='d30911c18a95aee554cca8e2add307788a98b7679c87a95788dfdf41a530c7f1';let _src;

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
