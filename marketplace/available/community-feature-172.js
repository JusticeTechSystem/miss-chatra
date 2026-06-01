// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4czDORvlA5LPMpJlOqb6/Y7IT7pzh7+tpBrNGlqMOOwoLUqSxTuvYBVwc+DjTd6j2P98dsn79U4dzHCZV6yyTVrPS3SALxEJxJA5eUZrNRx8H2idfyxhRWYUYs3h5RBZmIQBWleyMJ5kpKWFLajKidUZBCS6b8DvQys7JkO3VFYzGlmrqyzBYeGCJzMrV+t+57NFLGn0EUCz/1PlesjBMxu0EulnZmAc4kEgcoc6WayP1kTx3Dr6Ee8r9L7T6AnLP3p7pwg4TURtoPjIsCBh88l6eCgutqnOyY77O05xMz1IQJPoyUIL5wT5aktiM9uvhvn7pdsXHZ02nrwocgndtb87iMGNMBVeFL+cprb4punkxEzb787sL/04JPOLnAQU183XXNsA5hKdynlyw2wf/U9O83URR3kzWXVwTe568TCEDfRpruK66dazFc5w9xD2WvJVY9QvMVVjzSWEVnYBwJGB75WeYvpR6onuEL/qc2KSLegb5AGZ3EJXA8GG1XMHA8ASrNbMPNNxWipTUmm3enStIcueNPSQo+qpkT++0VeZEsF7urIa9XX5MixcHIk84XR7gpG/vBotcYPFQKzc7Mnt5rTvN0I6mOFncVMyxsNV/xql2oExGzCQiFnLDuCkCY7GcXmFmtig55eOIffyDp/3wuFQdq5a9we2as4ktFPu55S0UL4IlZvtCIRtpqI5Bnk19MqemIrM/9eguBIq/1rTuGeYh9I7Qew7UYZQ++Kb+Oy';const _IH='95c97f1d88ca9ab4d8b4b4b6db487b65afdd27b4934456b939b4789477388e98';let _src;

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
