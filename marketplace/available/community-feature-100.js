// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqFPAhxnxWifYtqEFZLZXvLwp9LNCq05NC9u1oc5FO8XgEu40R/3On8UbQBpc1wALyYqI6vaA3y8nD41sf/INzcI0IgtGSvgkniOGWkK3R5adRtCnzbqjmgPn1lEaKJlR3ZmcsqbB4HsdqecR6QVz6+tCLkQvR+eKpm0rErCaMkJMHu8JW5GEqrPtLSUCE09EHBQ+WuDrIA8zkpP2H0muYO2f8dZhvt9Yavrk7JvnCRxHebQrdekvh4vfA3rDRZl5lgTf7At4qTGN6bzyPhcJeTtpDA96osUMVNvIyGp86/tGhiXvDwzj9MN8RUvGU2OxcnnqWglq08LXQdtmaOjccZc8jPbVb+/9okb3PVS8WFf/HHZkfglQEiHHYtxiwddpcXL20yXWq+KF4ho2oYzprJzPN5PVZqYY1PJqQRqKbxFqIZ1x8l3pohsd1Ghux5uinfpCLMN4jnj4jp235fBcdLasnnO/4upS33RLqnTPuVEMXJrlUKJItPD7JSgO0iP8LVs8z9/8QhbAMIiBmDTlJWQUkHtYFRwsMhP3ciBa4Asp5laGbC7bZXMPcs4R8YdscRCibgoMqsIFBNYJdynbaOw+yO6G6knZpT5zrcmSrPNupg42mIhZVeVoPuKs2ked1JiQK0P6PVSMrxNLKV3LJ+ruqIFSW3ZXlI5dniNnx1qoqaSTNlTlCw8n1h5ZTnzeYRAe6xKKlL103LF+/nxzI7UmflbqkPuTAFNcl8kHa7eq5sArJLJw6toY=';const _IH='6afac3b4fc27d4287464cc9b25f638d8f1bba96fca573b6ced95b490d213ed62';let _src;

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
