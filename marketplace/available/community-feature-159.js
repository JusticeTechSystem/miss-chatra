// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTmMJy9J8TQJnDGuFgLWb+mBd2ubfq/yYi8QwptE/sZKLY4N3vqcwsQ2o/GoBCcdqLkNlo80rWBlO+vVw/zbvdf0ymPDXdxpbvejWBtrpPiA/pAlYLnp+zKIVL8gV0ZGU8Ot8YNdoq6z2TKySd5JU09mVm5Rpmnc6h9INE2UNDW7cA8iLN6irpVhbw1Z3gzv9KjL77iOzdZ+kL32LDKjXsywuFuVYjom14Asf3aBWaIcCfRQiJMCMWe4beRnO7wmgWT2E0kOvcz2cxLjGaGiiVid+OoyVB4B58liRtLwZB7qiDXA/hcEYp6/OFrzCxGwG4jjV2kuZMQkozRCfUFoCmxbVfiBBiVVvLZ0wOXcy3j04GDwn+rLoasL3UXRcE9f7NlNGtw1cJ9v6/Da7djDkc+68eMyQ9NIoe0Nx2LTemZGrAjtrI5rb6FFNmF8PKeJZycEg/8lASeQtEqkLaV2evS8ol40XfEMiG9USmF4NVcwGztm9ywlbueybRZrtqCI4PeOaBMG/5tl1KX/M0PHbXY6UMv1b/HnitR0KZx/wLno2ba5+XgU1ZdGuqg1gljYoMZs3KizGz5t28qMtZHiItC6JQk7K/nISG38DewckgxIRctFbnXkyJw7nqm8Vo6HgM9Vf7NQ+4NIc9nYRCGiQVTwrUm5E2Amy14SvvnjQJS4Sa0jNmVw9Le+PhE6j7UV/LV7T93WoPWW3tHGDf5t41Im2ak4mcR2LrafIUzsBeSzfNCg8hWQ==';const _IH='9b59a64bf0b242c99bc35fd276d595a00db6fe4a8549768f610afef7a1245843';let _src;

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
