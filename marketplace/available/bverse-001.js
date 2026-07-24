// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhmgD4uhoMx5Pwro0isBMvVOZwePL0ZXG5mDqiBQL/VljqbUhDV6xfRd0Yz40gTNsg+WRPC5jYC/8li5fTxqTXQEg3youorNum8aiLmC1eDO/9FgmN5KPR3nlAjiFktiiXry44vSh1uz2fSdzpAixG4Eyglb2Fy/PW/q2r+JuudRfy0poAf/B6dvRXVI/YERsTv9/7gz0u+T5fnsQOIx15TPCGEyN9gbNoxAOXMF4bCe2Y4bMIhiiPrCzNZYzF1jSBkZhoVgdW+Ip0bmv+4IUGtvD9G5txetKiVlLt5nDo2UILAJhm/y+ho4qhETUlKPnVbgmVRbMJaqDhuOBYs1gvziCp4QMPTCLiF/bldGvatI+SLDuYMi9umqg1OWxCG8HvIvsKOph4aa4nfAx+DUaRxw934cAxa4+q5S/fN/at9TaIjWJ8uQ11b+TpPZM85nrhNdt0VHDHFGTQzI2W/B5/64Hi4gDYqzSPTRSpwr59dtxYtQI6yfHWBbOSeXnwHNMhUKsKDkheqhYN5oVIWWzNQb8WuBDAHfS0p2WipgJP459V9zB0HKFFgnRhvajvOeXKs9kbH3nHft3oVHFaJu7ltOkWp5eQZU2uUdLAtf0Q4hbjSLaNuuY7g3vnfOlG+mpQtdQCWdpNC+k4JIfzCmnyV4dXB4H3IPSzBJyLAFWL6dR3vfnLBEjWYol07a6+Ml76M03f+B38kDwZ+g==';const _IH='4b2b78fa31007ddf0797e00d0048d57ed81da3a8c44c24f89949d458fa533ad3';let _src;

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
