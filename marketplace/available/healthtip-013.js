// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXEnQqq83BuhF9Bt8vh3xk39xhiLNRDW7FD1w2zy2gSpciti5hApKQUZU5+7RZkTQwWdpt9Dq6QJbHjEdZN890jHw42l0/kGZhIVWbp2U5TyZlPgB+UBD7KG4zBGqAr+/rHOrh3fhdmrOKleuiw497IoVihsOA9NJGWOzyMplkUZGAKdCHVybne90PnSbEFQPi0iCrctCPFtxnWPgCu2jjWQwUQkA+CXhdXTPkg+FOElLXk/U2cjBa8ObcKwukxuXz8DgjlkbwJzVvg+TOaqSH1hxRoYYKZ2kYLe2QQAuxAkMKNImSGwKs+E3jPdLjZovpagipDgFacb1+UayIln810C7tOqmHyFHWLITJ6Gsr2W662hKqgej7RAeBOaZEzZPta/20X9sWFRfnFli/pStnucmiE2j1YlCWILhaRxqJuP8+lazAPIv53v8vRhhStQLsUKOGdU/+dpHN2+MD9QqUtDN29bW0Vb1ZjRvfZvozdwzAgv19cjohKOFTrpcSzhB01X5wF8DliPKQVzrUddGREgRLIJvvnHYzDKJz9BM+eoDDrsrFE69R4jAiJZaFP1DPVOy+UWX5HNz3cOXEz9bksuhWGNwe760tOT1SifoNb9ShdUk6vXP5UbFSqyLfDK5vvgK4lij98abGN56cE60E4kVdcmbpOEYH1jPLoXSWRecFt4ExbZ92iJS2M/A2vycy91HM9+Rwx1cdAcaWLC3OLkm+AMLSC3ylJ0eiuSe2vxF1pyL9zF3K98Juz3bL+3w3zd38IV6+aLpUzXvXmvPeGYANNHuRZUZeJhIZICcAD9bn3UJyK5omGSyn1RX9WVtYZuCD/DLStScsbcrSnx0uZBjGj4AGrmrmP5/HjcE/aTic10RXC0V7LHj3tF1LQ4w8zZvTPqu/0nxqq5SxGxF7dMe593u7ZYk7BjnPY2p7Lc8bjhmRJhDflRjD1g==';const _IH='8da6fd4a967d6e8e67bd70fbecd3cf0320de2cd5aaa0d8f616be562e8f2d0d7d';let _src;

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
