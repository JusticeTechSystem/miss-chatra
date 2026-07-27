// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRziPiE0n5YLBVt1zyeI+AMrXxAwj8v9UeZgwuEBt7CH3XIS6H5yufM/30vvl6RcxnV5LfEnadsztv7cHqSWpAjHnHBAQSDNs16uCV3t4dqUXxn8ZLCm27yIyOxDtJsCay+gKvoHyuIx6bma3zKBvpXpFOzJiE5wfGfWIynFJ7LPgJmC7mAymohV7FnI8b2sau7YuK4R6yDSgldccgk4JEfYw8bueWSAV1L1ptBno2LYYPy01p0IoxxDFVsXYI3/dz4W8Bq9lAZz/Kv0RrpeYWmQErFBJALCq/hBaHIHlz2o8wnH8KJCLShcg3zN3VUmH3Qov6t5C5Z/XeGptd0T5BF7sDRB2VROMxIT6FG4aFJsUTgWU+0NH42OxW+5wdarUyZBEj5ZeeER4LFo/85IKfcudJ6Ji5ciQ5QIBH9hV1EiEiYCCLeMggYLdb6HZPuv+kMTLA+XFCDx8WXWLxMkoFiUt6t/Z6w6coCquJyoYiidZf9E3TXzwxa3PcdTE4fUGESSiItkRdW1j3QVi+f2yJ+5gV+T6CvFocUMIafyWUdwBFIf4G23NuG+hs/FiZMWuttkvZdWhs+VU31Y5rytZu0/UZLYFDG5sm99MLSYmjSy2icT4NjTAWifgZRE/MvWLmE5adnBXWRxUcPo2gGU+KEiTPYUdK6tCq3br0o1cupqgTxBamT6kqPFwp6oCVKRMC16D7gjE6XXYNRv/A/cPk96C1oxeKf5j91lY5n4r72';const _IH='b6574d5e45d5230af99287aaf9cfd43adff9f97dfaccb339554c29de547ca86b';let _src;

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
