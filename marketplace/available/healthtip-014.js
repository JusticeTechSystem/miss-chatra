// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRu8TZG9aBzoWmbaAYFkmXsozW3xOkFgH3kRQSDgdXm3hVfFu+adsTrVI6Db7hpaHY6v2u3tSLffkzOIFSN1gONXSU/294VbbMoDvceYIct3eB2lh4sywMRQzWWAIp7xeuS1Y6QZVdMiBRqAGpLxvs/Fb6G3RD9w3rXGWIdhfkiwGd/fQAuCMBk+dgaF9AO+724QIU1OJUb0BKKSm0KgveB9hMWvoA9KAfo4czJoRzrXT3Uj/h5poA59vFG7cPNWPMh1Opt0d81DweWtOUasrkLH2OG7kRfTtiz/Vv67AYR062gUNvC6UGX6RAO9+BaTTzivZyTYMEmppzI1NEcbdfHMJ5h2VMCU5dicE4DjzAl8jbqXbJ3NcLNACz7G1cm27F9g6vUTRWHCnsHHApGhkPsMbj5vzuydZ30vHl7VjV17A7r5ix//2f984bhUAOnuQOe7u01G1t87bSk8XhC2DOZnwcMoCWHoHkBddju2rBsF7bOofTj5atbfA6nu0yK0go5vIRxfftaqf0nPQz5b3aXyEVh2Fq54ILhmLePS5Eu0R4ZX7RAdZb3drPMt23D5GF785j/o2dF0W7+287WCaMMYDjavNqNRG9/Nu+77t0LOaEjyU+0NLNd7Y72jyDyP5Z80C8AWGGCTxI2tHktZpOUiZL9PKKpisDSBZa4QJspA3g0+ccyAq9dw+raj3SCS2T0NSUQB3KwN6wsGASqwtkoxG+n654rNJc7ocIAxDz8Du9HfsOA8wTH6a0AY8HeK7FBRNu8Sbmp75JYKb6qL/0ABRTsJD5QD7xmrEZbiAwV+X9bZ+ABC3eMfDj5qa0VPeoFw/mhqx40JJtYwFyjmM2iVMLhPc1t9zKzu76F4BZKvC8ewG1xi3eaf2Zi8LeTsdGCxLkrfFxeLGNAsKDPhRXrCOkoElj9mlVMm7E/xtqgBDtAxsgKxsELqbE=';const _IH='8217eea3919fd3bf2c33ee933c7e350cadc9e40ba29b878282438ef8969d897e';let _src;

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
