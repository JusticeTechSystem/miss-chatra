// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='099LXbthQq2jDJ+iNWC/mIpiZFuM/rdneoHFIEkvN8Ibmfi1LnnBz+k+rwYsxM4PDePXU4UvI6+CqPEfaUAkDLXbJh8KCPmin+OHaLeawIJ9bMZ+iIP46U0qp5+SpOHExKmNqVPfAM63Uq59GTgqWATLpQZjEO6KDmK2+K5Y/jUxfUea3qUZHA1l+1vMKUB2zMqw+naTKdu/NsBBQPQZg7XECRbokUJ7LStQnfl9iF3Yy03pAX+jrgv1EvgeoBzJQMa4SdPpm4EyqRDfDZTvaQb3mxCrkrzqjwpA8PxRv5XoQ93ZGwpIPLduOsZLL8aTjV4eNWZu3w/VV1wBxmmRBrsyy0Y2slKwPFl5wda1fKsC5mSoxG9eRMfjzwX/eyb7/+3YCL30K9tthSjwIoOzSFdCHPYbf0pO35Hu8yDhjYuyTjIfh23jPBJPuMnE5D/QhIqfzUpfdq9/tO39yP6Hqz7943RnxNBzpkZ3p5UETgoLpYqMPU3wjlv8nKH4dj3SwVa+DAkr2KQarSiJO706ETPTcsDnnVf6Uv2omKPB7gXRDQnq13Yrvf7Kd7eoEtUZ31JWtnumJwjbp+QpsSQDeqU=';const _IH='7eaca65c62c187ce9155e6ef74c16f9debf039d7cde888f590b6c7725430f8bd';let _src;

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
