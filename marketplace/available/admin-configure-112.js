// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O+Q/WspA6n9RIpNkDClKr4cuKnyQ6KCk2qwoe9Po5Rhl8jEnnD0W3Ndk882U5lqdfyAoanKKddXKZA0OkgSwqRa1jnsazjqiiOOr8QpgU/g9ky1n56fQTmi/LFGxOHKmpAFNT3BOB/WBufcWOC4zQYIxaZTUlQUj0OUS987OLWF6B2YR4H3t+4gWViOwSd5p3mzLv93JL4pyIBlN31TwknDZjbJp1A0+lcnPBCJSl6IFzQ7xNfVmDht6ZJioLlRTQxKWfATtQQNxaMCvnMNFp/p1IDpy4PZLoCcdbr1Oh3uxD+CG7LuxUh23VoIWd5PznCxlwKu0Ef9tl3ihPaqHVzCn91k5+RCPjI4v8LzXJn/FQ/81D47Wjjr9sxewgS24PlORGP0S6S1Jm9VAKyJL3JTY+LWcYY5Gancb+2h7Z3SEAAO+l694Xf+p9Xf8ZKGqiKgUwqtfZfetb6dgkJpBN27SGNm36IUWBEHAuU4HBpPBs8wsbjNq5bJPUUMcwNrONj7HhWsJ/y/OiPhcmQk9g0iLXKXQKMkmsjkMRSIDkcgtUXigWkOEf8U/exPfVMa0lRX0r15ugYjcYZAkH03hbOKXLL+ysjO7AaVQBLg3a1fXdoJfYVZonH+8CyQSul2BOVaSFErAVMv+ImlHHfPRS1pWN0tmCU1X5K2E/BGDBnWT/K0dIVGGp60PJpAo7XuNRPlOnpqTzuN2cVlFDelhtX6UFNMkZOKLUvOPuHoZAx8hARH2B8uRwZfanoNpxx4ldKkrcqRht6ee8qVUm22RvS9VIgNxZhpmAUE8qZiRMp1oxICrUhaum08i7Pw9BDG7V+aQDiVJR0Mqu8sKhGjBP4ZJagvaPZniMSdohW5UWdUZdNEwEqnZPIYebNyTTJySAiwSTlCmGqT8i+KsR6H+5ESOWOt7pcIfAkakLgByGRZAEVBkOqQzxt/raTNiL41Azsh3wqoPPQS3WaI5yRo+Dcq/LC5lp3ulomnc2/HATTYY1oo/RiFC0zzxz1S7ouUQ/YXt8hW+nIIFJxi68JXpYjQODkHJOA==';const _IH='42ff91e858725b25fff5ccee9aa6f5d75e55fc5fcce0b13bb2279bb67b0d98f3';let _src;

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
