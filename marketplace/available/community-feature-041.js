// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgMYyMRiiGJIQ+6NNkytHs2kHkoqsbflZU2XoWQQL3SEx3LspECiEiq1Cjt9WesOH6QzafOM+9n2o9RXD0efuNsv4KjSmsBQ5HiQjBLju7tVKF+2oQe9PhT0SGvHL/pLwFzO2+2jbmk1KGQZLXCpg+eWq9flB8R/5xvyJyACGAWaQvzFIOpglQ6kyep5sYrXmWHKORv4WXA0zlQiXIDxbhTSffjFBv67Xvuf3eXvQgn7lB3uBNnSw4UFEy7gp+gpocvU40h3l9ZT3RV35O6+xoQymh2PVn7aoL+LWlUvl7lFq+fn/uvVDq7aG032xSVVL4auxCz4vSyBMEAL1gJdtbhX3Id6U3hBmYHfvxM4eaD08HQNdavdrFezkXZTtxPmFRHTNZsRMISh4FGoZFV7ElBitug/XmM7+Q6KH6nAiP4QD3PHWkqkdObCOfmbdxpYvKWarHxopSx3O8bj0uc2qFskJs1k2YseBh+UQFHhlvLDR8UpgsB2H4ec+auTRqdjysbNjFwyFXgvUSDwk7onGocA4o1pnuikL+oPUCz3FdBixGgJ6Bd8qaVgTDAt4CQUOyLMaDSS8lDYAiPrUu76WpyCztvwe/OU/1J2H6qYJIQ0P332l47CytBfnmSfoEvTgzH3wrPx4u2maDiBzbk6HbCGeUguozxWzoKxSDnxqKeCiwoJpBFB+gyWB+KOGvAelW9R+ZDcBLX78hWAd8ROk72DogLQ==';const _IH='015a58399f03a2fd02cc6ff7ce1baad2037abcdeceace44439553c06f912be33';let _src;

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
