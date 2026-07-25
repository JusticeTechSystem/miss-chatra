// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGEEqNYv+SQt9YNqTdF8MZK/MeLDAWNMHYTRI/+yc9rvdsVJkzGd7C42Z08zWfL98QLVU6HRZrTSsNNmBBH7itxWu9ufBu2y6Na4taNOjnjwcSxNOJuHZN9bLXtHaN/TomrrA+hShJqR/sWUdefgrjxJa8oAg9cs/sAfp7oy2+wmOvTFvqgC1JvWn2zr2BF0O9YUR/YxnnCHMenhmV+U5fXq2vSB+9mUOncFnzkwWRBjQXvaUJbbgR5XUW06kMUSon/m/dc7/uJnn5Q7iEobRbSSj/0eHoAxcG0Mf1Akq3Wj2q0OUdptV5bb2h5nAR5bbQCH4cQn/rhfLqjeQQn8og65jz32vPNP5RIQ1RTq/PklcryxidY+Ulq+XQwoOckyV0FdwQzK2+T6r/Nb0/EeFXJVZryTafPPVHNaNtBUlJO3NtZozAWv+THT6SG7jRUj5KlMv8U6LIz+MHB0SFwejNKS/aTxy/UUhVFJw9wTkeWJOTKUzoBKQ7Qw2OBPJP3we3suu1fOTh';const _IH='86ff9df3fca4423d8619ff3ca5023daad5edfcd8fa3d5b856ab84136c8142115';let _src;

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
