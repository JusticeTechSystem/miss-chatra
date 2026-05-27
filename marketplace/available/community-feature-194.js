// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gZeax1s1FZzq+baga/OvmIOFe74KzXjVqXwdMlBVwCoqb7yYMJQghpsad2VWiG5Q3yUTMk2KtwMATrD+BWswYODUY/oulQ5JY/psA+b4GwT7B/lVB1CPBL3AcW2yFs/uTqFFUjoy+RR5jxUTSXOncMlEkIdu4yYlsXxLovJ1BVhD1maorcXkxv6oMF/qxwWguW9t9Q7zXTSO3IwDjW3U79mows48vQDugYHfS893D9gqNo61dKLz+FCBAnggnv+pRmofYWgvbSNMepvtNVbLtLMuHe7t9LzRT/s80edXshj1J8Ya4siteOpsk6SnIf6UFnLw9aFymJLz+9wYNgKh+5GvGP5GvVHuhPhiZaWrhLkywW1BEdJO0k3MgLxaLRH55JLM3ILlpIiGOLmMWQB9lhi8ZkNZsORQ1DKvrfcPags6f2l83s0jyfSxija8qkXlIE8ahFwHe02H8O9K28hp8H5uBPx3mlhBBBGaYRCACSCBnihy1ne1TiQAIbsIzGiIVVvryBa7prKsrKzQsjEVyiCmhZQkUbPMbDjsaNueJDNDSOyeaUFhFOCR9/i1MuQlSCd4RZ+cV0Bg5UuEN/SkVtljdixf/OT6chR3xhHVkNHFzgTutaVO7g9gPGqDjukFKsb+wM6LRp/ABDmNqvEa5LoLCFW6EDIaydxJOIaP4WaanIOh63Hdenv7NoK5KLBDngxGq9CsQ0YXj4BzTb4oTRxMBFJ/oJx9YuiP4SHSfQ8nchgZB50=';const _IH='000ef76506a5c03a80aa23e8d3648744326b0a3891805a2826f3e7d8facb1dda';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
