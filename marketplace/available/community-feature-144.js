// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmrM6etZM/cDxMYh8gYXWApZ5U67aHbv6NhsUl6NSQjP7NlV0q4d0mjwrK9AZS2sAMu4x8lyxg43ABIZnsC20nR6nDmc0+P0ladSHOKoQSqCSu9lHTgJqP4xhP3wfZTG7dJ3c+2syt4AluY8pOo2pAMlE0BeWEiDEDtzJhDmsoVG6ct8fYcmx9GJJmGZJoDtFaVOYlKed02NZ+H6zGHgrkydDIiLuT4drgwWjxVS4vNIlx6ZC41ppjI8JQfuxC/nq718dLkBJMQUIyRtnxje8dPG/2AbsgwY0j3BNDv0zrV5+msHIkgxNmb8rqWNWmIcOdbuofXrUtYom3PcMTAEH/o25tAdCRAhe4ol/I3OxcKaXuLKR4vyC6BpGs/WjXhaDOXw9SBRRd5mt3BN8kRzF077lxmRotV2ykZr/nccmehKDoAk6MGutk5QT1D98Q3nlJNMeg7f3II/Ht0lsj0r7/kEy+5isID/deE2RIG2RZnpRKBLrOZ4J7zBXPzk/I3/BiscXpGBKrge49Nk2ybhyRROGCIZNDopx8vP8JQ6/qJQpJy5h2RCTUkulPznRBXwfOs3e1Ix8flIn1MEzfEW27YS6ZgIloHQF8K0cwe3RMwkN3vwTpRnB6MbBkj7riSfBbjHLSWLu7zHDJnEJcTExVZrdQNBG9D+c2PACAZIQkC6VFTJ3W3lEgPNxdWudzkHSl0w/aSv5BfCWDBXJHAucnlkklQhVnSUEjtlEfTAFZcTOpMQpy/w==';const _IH='fe221de8ad428568a3aa58fc6744f104917cb7751f887cb737d82a2088166be9';let _src;

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
