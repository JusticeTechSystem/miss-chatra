// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxvvjpQc5eNJ3vrNg6lPmin2qX8YSs94Zu0aANbfYADzxIIuCVPNpNbEM3g/TyvgbPp4eAD9h0Nz+LX/amxgB3HtnA2pQJ/Yzj6lAunsQ8bRr7ak7qj5o/qnrqFMGKhxp3aq8cTAbs95jhVcLWn2xKdJVZx2X8helSnMlV6nxXbGqe2rTT/Da6ncYBvrv/Cg92fdgA9D0MxtVVHngrWSVVjEVQowvFE6jo3RyHE+ReLy/9qRGIgZ2/cEclv/fFOoEi4qfBRrQ4i2Mg3YFYknXiWqm+3JbIrVIrPt4KX5JWMsl8yNWXF5rxQGiqISZ7d17rCslCyn7hOWiCJQJzeC8oeqgJVOuTGZPr2CvO2UlBQ/XphQfGHosNTsfenAam4rgafuYT/Ba63jUGTqyTbWmLv82EDfUmDVNM+vEQwROvvyWltYADXAntcx8pP2RlD/1MhbGafza3VdmPk24EoyzXpfjpxmSQQowWzOaiWMrFZW/qipIOs0mlkCRsu1aZJtcgcNn6e0bDC96mCLiUEAu/mSQXwx/2OuGDHIGTelCvfjjgLfvUScj17mGS+hdd5OiV2XyMyaM0vDs6qxaRwaOMJWBih3i2yuAc4NUhtbCSiHsZEANRU61k2POZT0x53maVPz7EDPTxpkKGjNG+xAHZ6h0IJMN4iVHkRn/cmXD7G9dw4QTVy/sAEkshfXmd1gMIJpWGu2f0XpHyfC75nujcJj15G6TQXU7Zz6S+9rlESrpKq3eXXxReDew1Bx65nre+f3Z/lasRtAKGOFd8b4/MDoVFw50pO1Te3bmgNzFAOPKERZ1hdEBdSkX30wfwu9w2hXiZPpyZEE4IyNIZHzimhiyD706f5IOG+seyo3k1lBfztIDU3FbhBSe0nzUE5nVY3Db8x68QJ3BW7DmWxce5qcTXjkBYc2xNGfsUdwFcZIvNcKDLrvBYdFZB0EAyALF+9vig6SkCEtbzLc92nJGSptjckOSCeeHdLDp8RO80QmFrHIafpgrBZ+8kij8ReNz8fHnZu03of5gHFDd3Qg==';const _IH='b111fb9c65809ca923c68210a2e232917b61b0b19203bc506cb2346b22a51ef1';let _src;

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
