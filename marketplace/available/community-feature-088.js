// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QWmyngbXmu7IW9sBPrS07GxfIw7xNdtytFzRzY2oVkMkGpbZ8/qrTycmPsIGw9EwwwveOc5PhnsSTsSjLufTyzatVHmC1CHcNV+LLmakuT9XdYeibVQHT/C2xRbS1deG+ZCYpEAK6flRDtxSqUGfsup+GFZ/XEzqDN8lIkYDcpSeR6RR5MizojyIxOn/yif9ERj8jBZBr2NICI+zPTS92RNtYVCpmmzkQqy2+fZ3dARp23sjdLxgKaXCxpjumy0/C4kWANmlYusvlstQ4FPg5MKRSYywfdZvzCX0DP/RHBBCkTa8ZVtlBgEWwOL5kvNtxRBcM1IxaDo9NHJ8foDLvY8mezAFQWTT6XSLhkztWONzO7vYXQpgV4kyVrTYbSHRw909z6+CSQo8LIr3wjJAb5Kxv4ujZOUe3b/kzRLEeosIuOr78q3CQSN3ZYpQTCowAbz5C+PpQnoEdNQut+KVE+m8vYmCO99jSSUtd7Pk3ya1/ft6JJKaRewq3EN6f2aZCKB0imwXokJPsBWBa8O7hJJIGYNdltfE4gQ5hvZs9Hi2RnoCgbtm6iAAuAcZIZHtHOMJsG8IvdftRu+9K1SIRj+u2/V3z8pM3jdAqdmjK84SmOcQZd17VD6gA7ToKRVM/BNEsYGb0qsY0G2xfvsGmlLiMbKd18GKGCvWpokLLMSEhnrlDOkGuEka5ag6WE5a9Fa0jeCBZqaXmW3A8pS9CpjIJgZWcRjajg==';const _IH='0499f3a4d0ac1f238e4700918fab8853a6660364658429ceb26ac8d479355ae3';let _src;

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
