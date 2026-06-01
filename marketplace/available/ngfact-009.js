// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1dikFmg6Uy7ACJUQtVzX/FQopfh5rRleSUYdwRN8LKfJZTH5orPfpUPuT69Dde6UrLfGe3gmW3VVcHYYtGyp7c1RVEk7erszXbz++KiqtLIV4qN1IFJj1aLep68+t84jOqIc7O+UMwoO7K8BJT2E69iP07vofCVCxRmzMr/l4HNLmBz4yAwNaJ+ev94AP9ACVZl57Wl1bl5exSzWC1TyCxCbncXBTc86e6CcFkyXj2EzHaPf66rdNrrABv6sOHzo8KYaZpSZNiKcTMb9jhu/QdImM5E5VgVYttqwwiVzBT9ETUltq/RReCiiq8VhWY81L0a6EOmkjCyvejnrfbCzrWGHw+5rFQN2vua570L6erWsJYcYma5UqjtHJNFSeQigpQZ+zAMzzj1MOMiez2jviCprs87LX6VnDXX/rga+gq0uGBqMi79ScKE0VA2qYWLcevgZT4qfeHIOetbHza6BgKddLmPtK/C1/hUb//p1DVV5QYD1iafVsyU3b2EpTshS7EHRIM6k9yZC1nQ6vPn+5Nowg43IqMcEuWeYxdu5TPaxaIq947E3XFJcf55/h6+i6OuVL2AaHn/5NqYyFO46jOHDCCb4E7l53xQZaNg/uywBaHNs6Sb+QJtVULVQKRKDYYl3b6ysdUPOZXmr0VH16pJX+A9w0RyD/i9TdDJ/qkiuORl24Z+oXmoXZbBa9egw3nsM++JmR5QFl/G';const _IH='f9b663b0c63b4bd57b1cf027b4255544de0b213230908a3b6379ea7cc5133ee5';let _src;

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
