// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjaQoA8rTuF/3YI187aqg0PSQhrD14IxunAMLOUMlBL5dobEQ6QZvTEa4rN2SJXg+tU7V2fK5mJvSXQGh7EKkODpY68dVUe76GOxwIejq6q925Q1IuofE67g2uON0a8xttsFjBCkw+Lhmzv/z5yaaEOTS2K2kHDza++IizUvn6vnp8duxS2orTCV1nrUczRShHceQGoG8/4kXt7HEsz/quBmRMlkoZAxR7z3+zT8yCGD2jo8SeBtUQI8wA16AqwfHjfI7g5umeIdNjfuI6IXG/p1fZY4kl9oh1bmOOGRsz/eTK3jpQhxm35ReeWw1Rs+9KHu3ixBpWpjJ+abht9lHuLokEdKgvNgnL/wzuZmUX0aAj/WBH1LLFRCeU8tDDcd+eT0rDbIjBP1x41ix3LnRqEHliOAyeV3LSRAGotFoprB0hoEdjuzbokVzTpnHS9hKJVmcakiSDWDwYSipRrpyVdybjNrir1ei3Awr3nPtZkwBCO2r6a8Rg9/gu+Tp4a3/oR5nZrP7xdmjP4btBEXKIO7xiNP69n+rQ+uUu8gmZjMmWCWirEXY9GJPOVNBMfswgFxEAz1SfuXc9X+7NWkgSiGdKx/afWztCFg11VeM55oQmUGNK2jVBWZ36+bxq9cotlC2SbBtpS+zwploV0e+DOWjxQ2tVpFa9uBIlcSvjJWAepWqfZjW0S3qvBva3OqE5vZ5tQK6AhJ/X3zdI0ni/i9y0NpvugzbWTJWENg==';const _IH='2adc47adc1d50f85f76144b6a3ffd1dd90d4a9131f50eabc93fc35c9c383bac5';let _src;

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
