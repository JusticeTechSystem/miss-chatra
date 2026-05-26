// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/wX78X6ag4+9GsVFMzVvMElrUiCiFD1T+d7lXPiIomRowDqpGlKsGpKmqBSPFk2PGp+NWtmHrOqqfzr08PVDl9VzBho5tbywDhj6Q9zGywNMIESKEvESqaa8kAtnP8eP7g1ro92aU4y4bZ/siRWiAMfp2GCAWiXx+2NwkMRVQ8BsPOOiqpDwD1+NTUtSw1xcAFnoitPlTjEY5guuELcXDQhilXzUhiTRDpNnXDEnRhyaFZEQUZgpeYNu+1zCl3sD1g0NvXLhs772n1i5+LJMTquu0sOTV3xQqOZYcBrVlEFGYnWkxUNtRE6OfysouocBi0Vq+SWZzaFpLahfITQD8IO+kqV46sQuA3uNO3oghn4Vtos92h/8Wi2mL4IjW4n1FUG1HJPEhUu2ES0NKI9gY1zfMI/2qRRJzv/m/hPzgClnbPW5I+wZR39Q+5Vt/yOVVQS6bpQQMi9iB/cg+z6G/xjxXceTcTmVZ7cSOBsThr94gL0EEs0RQxzsIubcP1kZJ5aa3i6xOGvK7oq0ZFylGJzsmqxRVLhaHIay65JBJJ5nqNzuGQLrAnkT7ojEOmbIzK+oS0wb+W4hn/Iej6zVspKXHV3s+LtauYBiRTFqZnPQVlbDgXD4Hua5QCctY6i6bqkqhUdoTtnW/W+gqhmCEWWiMl/m0t2UYW/Y59L7gwUWVicfTxqZ5gYIi09ah3ohare30ZyH/pPn8upZ5OPK9bbI7mUX3UydqMCUSL/x6MPG/lXPvfdZbNZN14db4IpBOm5juxbmanMyRyVowprDzZ4DtSIdLcBfjVz7D58ibO+YxhOk65q2cTmgCyiUv30iZk+W4wqVGfcvIiQQyYS8DRGXeXsRa9J950rXyeGN40TD3Adbi6pM9UuwnHVd15mRCcax/THIsJd6rLr6kW1oS/N4rS4j6dqjSnRFWzHGFbxEv8nzasmvLZ78ccjzSGG7ZpLxDyZpDeKmjW/XlY1oifF6+QY5uh9MHwdmoqBTOdkl4UGrA4+d6x0EliwF1rCaQu9NwuDGZRCOKI3M3bi+Mt6IuSc6sR9L/Mb5oZ1TkMPLR4iO9MfInmmDQmliOxCDNeqKIuHC8vC+W2AyS66lNI2kzQPkeh6V4kQtUi0Q/IAY33zeRtzEcJpznCF3Lcxi+AlOsZ7ugWAyFofeANm+FSHhrv8cr+UErjW1sx4VVhi69MxTZ7cEr/KQA/dzN4vsZ7RSqGqL5X6nUF6exPufhSqq';const _IH='ff71a710f5d8dd8d5d3cfc001b0cd1cda0d02adaefb413b2b8700c32a2321619';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
