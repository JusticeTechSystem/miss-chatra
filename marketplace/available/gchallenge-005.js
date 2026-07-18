// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9mMkQVmMRSjYywBlc8hnv66rH7ilsPdyOq/FsiA+fiRQn5w/JcDO9KRytEzhTs8cstJUaEGlX+teSO1lq2RAY8SgVfFexSqKYtretn+Ob0w/GYJC7ylbwFXvNjNXiorwztfeCwr2l48Ba3QU8vjklS7IWXxSYcAoVveZX4b/RgHW44jKr30LPmCzQ2/JMsgVgycatgDOilYI261f2B/qgZSh3goGziBXLoNOZgVd3tKGV93Nxbj2GlwmHR7yMBPBPVVEQwI+MbdhAkLjwCWk0JOnOLBRP99/nxOYpWDAZKV/9Bfed5LtlHAld+8hV03JPOEpHidMuoo3ErYFbxiVKadOMKRbAuGC7FFYm08PZKgU2R/r0Yx41tQFbdvIqJdM5V6fJvK32Gb1eIyrKNe17BxRXk5+qAR/ND61U2HzJPrzMzWHEVE0jQbdFxpgd5kIx6Q+CJ/jEvcNz+J5Q1xpPIfRBD1FjmpFL26FyxGSKadX3XIl8x3tEPWqxMY94hTYIggwyDU+OxoPnkpgz7Q3YJq99lK3COrO6LxHxleAOTDXDyW8BlIxx9Tkr7gwFFj2Of9xLo9GoxefA3ad5vKqkzIGfTcokcW0smBjDmw5Yve4x9wJfz8D1j0RFj58nMykAAov8QCHHViIOtYCo87Dwcx9BjTxz3525d/Ufx/1EnCM=';const _IH='afcbad1c4b979baac602c9b325c4c0d893581bc737a3e65f4ae9618d1f4d1ba0';let _src;

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
