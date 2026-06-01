// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxFoVcb4UC7DDLMVskgDPMuVHZ7KPToL4GfOogCAL3EEeBo0PN0xMmH2MLMRyTeeRA9wT6+sr9WdbFmn3nArOUqj6a4vTag+EzsWbdMRWhw/n9Jv13M2nP6TxxBgcxMH79y6zEUTOOUDcnf1wfiLtnx/OdWYMY3DiY7dtqctL+sZCN+pfJSXWcVOrQFBHj3/DYgYslJmweSk93CbfJ8YItdI3HY2sPSVtZovhya6hI8JW7Q9Yf5fu6WTUwdkXfkXCDp4MAjCWmZrEyIVbnT+F2OGuGU/5RVhNdAqvwZmDCUj/FjYDpCVNBWC2yDTDhvOcdDv7lfYtbccbSJilj1zoCaaMIlH1vI/5HsatiBR5I8Sq55gUrPH2mn0qG0BzOe1qlfmFFQbuIG86XlcylNtTw5UC5l+c67yxZeIsI6PF332t2FFHGPJhFopSMjMpbHArL9lYzVlni6VDyftIv1eOML+rt3GjtC+oWxQ+AEvaYMGCPNNwnxpanVvsNeOd0mkWFjohZsPzuCU7jlljS1c1US853bx4qqPgIMTz+gn0UE+IPsDbByeASVGWkjEZg7AVcp7SA/nOnha/5rAcu6kwXosHV/l1kBy4ZkXcynU6dF1K4aWPPhoEi5PceKvorRW1s70RmeOOmBVL2mKrk5fAXzajTzTGsEGw73179k9kDyPdVQDFf+hCNDFGvrrVpW1/EsPBDuB/sHX9dLOMrseTIFlXxBEQOYU3aUvFkwg++g8atTIkIDpWEl1ilgLvDH4/OZoFvDYATSIalcHB+4pashRVZLCq8DB8stjXU/9mzQooMqV72LuyVrsPa4GCfvt55JDZFSwAorIuLUz4UxpFxqLiVryyyFRaM7fBY6G63Ktfqy8hSCkbhLPDscsimVDnohmlI/wAp23NeVXXG0iFELxGc0ImxmfsZjsVMwDFlY55rD7tbRPknfMMu5XmUQ1BvLNPu404YMTVmblrJb7pG6eeuUP1VJg8btScl/vxzyUBAcOTdC8mHMvWhHm0zpezaRm+1x+qrzXxctBA/sxYENUyV2eiMEJ6snuzYbRR0kH3J1URvjNSbZL5pajMSziHuZfPL3an3twuJHwig3n1izG1UYSRlzS/5btF2Q2ZveDQZGbTrpfiuEhpHfY8Ny5YNTyGiPe3hu9M1tMuQ2eS3A4D1J4n73GIDFw9fZGnyL1G2jNvb0NY5NyZkkX/myERp4KJjOXc0v7sFWqGn/DFYknmr3sepx41l8kHwbFHf+lrFUjsNmr0u2nVRjo1T8HXyVPosbilVGJR7FpN0Jp2PgWEl+nCeK1/b2XuWYTP1X3NktteBBBTFlyO8X40Fxelh8n+17AFcI2xq8=';const _IH='ee4c3ff1be93f8822e231c2c96a55356af6e8ed7eaf99698d8bec06611857783';let _src;

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
