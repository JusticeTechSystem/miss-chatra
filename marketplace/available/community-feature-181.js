// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bWU+xbj4RgiROkymAHJOr0w1JaxwIJYM2ev2WXuNDVAOXu2P6pNWSMgIZqSvuLCdP+fCEJybJng07yVxqc4v+FBsqUhCPhvfs+7lF9Qb1a0kgnTCqm3peigkHpyZH4lW8EaEFbcgghtiSmN0i46v+8bRF3Vwum2voiBsLFU5xIxA4kHdMnSSIRJbD5+QNlvQMsoYPAc9nxhVGIWTMv1lzpbQ1BARoGRXnyseAeNCIe92Upleuw7zjGi84xUSh0UF8hw4MdQzKdEridFpCDCFIPOslbkMP1sHLE5ttZf3UKguFIMa/R6jjl9keo5lVYNdWlZh7jZVSZHGKfa5xxrmlO72aFBu+eEmCXUVlSF77Af/ugvWzCqgPiOYHkR5NX7MQPvXZGWTm0dBnv0inB4pbajo0XocUTjFdRFEYKlsXd3Z4IBCAfhT7MZ2FVrMyOMf6hj6eTH+a6lAD8FJUhJTSSROHY+dbMNfnleu7VgsTsxyDyEtcglV1rxrDkkvPf0PoAPeO3eXljR3YxP6twtMBKWxWI53SRg1MI+DuZX4hIphxsZjfk6Ea26+RuS3VL3dic2bh0L2Y3b2ENV3v0R7FzS6uWNIvni/kcbHyVjXP4PY5xYocDBBxqpb7QK/hlwtrF1JiezT93w9sMwdLpoDWyzew8zd3pyoU0hsKctU3giLr5UZIoWFBwRDWfN6lvHmqgHj0rjvBrE3pzBqGYOs4OrUypU4VEpR';const _IH='da721d14e87280cd6ff5335bb125478a305b8760eaf5dab57e4329346d3d3561';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
