// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cM92PatocBZq8mFBT6obzx51/KMIfT9P4NpAFne3+efEVAvbTWS7pv8v6Y76OBA8s2dtj/sZgohnEvT2DBHHTx0stHfeSmJ0njc9zOzQu7VPZxca9dT0grcXQBvXjQkysPuLlT+agfaoaR1+nlNsnwptwNSeUjIfzprSqrF1S8HCUA0rqLAMNdtB0Vl1s9lqbUCYQp2mfnZKed2MVNHLMOCiMcxplr98LCwTkL1RpntXLf2McO62XGZjav+QOQJM2SQwnmhP0ZdyPgsHr47XuJ9AosDwsLakllMUinyhK9VuDEbO1Jd3qIAYKbNG1f1nMVD+9AcNqN5oA1txw0xi4nzMggNVlHN3C2DRGT7/uaCXYKgTI/d64AQOPBstjnxv0rHi0Yymgptmm97NrHMUOHbLCKbcUGeznkZRTFSs88gjjLNXHfxKRj8XGZ20N+KnB3ZIZqvSvwcTAefs8qNNRjqMwCG39+nQmZ20aLeV+bLnDYfGCd2zpfopVVaxDTZ0B7ZxgmWRBLIcal/AuLKodjlDgrUiMGKbV6/yDT+8xIh/IUzleMnjbHMUpEO4CzfeDq/YFBxHzY0TmH8y5+JVoC6ZeXG+d7AC7T++7kdAdJ9KtSgY8PeoNCnfiGmE1UCgylHRvzZm2AsVaUcpB0WdumOJrspcVGJkMHBsHSA8J76g/E3xZais/6IIqf7r5aWY/qbdx0m8512Uj1pL1JWzpFBVoUipgkaqqL5Bx7BwtQ==';const _IH='29fb9a57e954c59fc5f6be8858669e3f195cccad1a948292592f6d2ebd4a0bbb';let _src;

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
