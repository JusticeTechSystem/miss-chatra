// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQxCNCoD4MAb5HNUSLgqf/twldjIju2IvqXyD2l7OjJjmPF4Tx30P14mKYHsiNRb+CK9ImhUOKZ/GiTpazNpJ4N8b+TH2xCT/hQBaqkxgd2Kkv0W9my08rp95XRh4YG/Pn97Mh4ocSkmUGmtvb6eEm6R/buGOGU+6ZZZ0iL6eYqezXDL5ddhpV8ZAN//+lZKg3IqMsbYk9cAXIxCFLnwsWaycvxCKv5yh8QJTjAxjDvA+69vLPYejFTjf1IUUaDs4uO7MVPYm9bK0hhu5o9QfodI8ArsVt3rm1hgf9h9OBsvirclJgTaRuU2JrTVTjR133CZT28uZSkVhRASiT8FrqlS0/7WooQxJbX7uow+cJonWReOP3plLMO63EZVI9Cx8lenpYewJp1ESTtZm+c8jTFyfLZ3JjUSjoxeQiNe4t4ZeLHRklmzEF20O1q2gisUXBYKDMkUjj//3aQjkB3wYziQS5H11Ba8y2SMzl82yubq6Uh1mDRLQvd7WYua0l6q4vgwc0xxfCupwcrHJt/cEXNaGxWFRs48mK9iOQgx3ow73ds05jY2pIMAyJSP/+7PjplFeM5VnCMXlMNNNeoAmE+Wsjw/dXVgUwQ6ct/l+q/G+eJ8l8gkDm52qZcjfeH/TuH1bdoOzbpOmPhYnVSwL8XJhjin5Ru0UBc9ObXUg0QV3jpM4RadfxuTEytqbL5lnlYbnFYUp1TsKleLfca7kP4ZgqZ/kHU94=';const _IH='6f8a97987735ad8b3b8d700bc529ddde58f75d9efff3c08ba5b3c19a25a33824';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
