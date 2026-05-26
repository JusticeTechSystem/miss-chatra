// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='62x9fzbBeY6OC6NoPK2YKxBTl7NwBWAaIENukRaK7IEYDOwpSrQnuXZPkwk9x6pqT/8gmLjYKsmVbwjS4MWNZjjfMRyxE2hywNYT9UI4caa6YO6pEMKg5M/0MBBHsps9qzTlpyC6mvrVGtIcQ4StqDTmBmtl4k99qLVcJDE00LAhL78GqTJVIMGIubPsK/LEkzEnyJnAA+bdmM1w3IJcv+A2PLX15mkR3JqfB5R3x0xubGuBo6APLrvFd128rA0bfNHEKJXHf1rblu3eYfyMDtOh62rwR0R4+2BY8Y5decnjRiY20wPiJJjnoHeIS/UNeWRJUBjR6umBV0UbKNsTa9vr4haQ4OPjt9RdC939ag1O9sJLce9h2bVjltGsVoRRFG++L3OhqmFKWnKnMHNQfyhWuR0Km2RPXi2aV6vg6Op/e2eRMvnZ4oDGfamHcDsSdJSibZEi/LmqiYADvS3MkIWJZHYWFqgg1Cvwo/gmsw8guAFnEpDOTTvCXKdLB8AdZERrpRQSKrVJBCxUvGGrNAxXaZD0Wop6DO5AP0yRp68/ZKFiaUmccSjK6J6rnBUQovz7/KjIfD0NCDMADfbAaPvJdtto/C2/CSPVIph4lsEV+rDXbJetYJrLfpM3T1WjdHU82W2sB8RKCSvYcdsYPrUuf7KumxUGBjKtcoHaRC4Ohv8E0TimQDISpGZY6fDL0Oh6/7KCj2oJnDAhfuEvdw==';const _IH='d5737939442685379b4735952eb723f105016f323303252a33c1b943eea9109f';let _src;

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
