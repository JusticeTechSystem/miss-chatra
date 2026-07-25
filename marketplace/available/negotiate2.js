// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQpP2arSDVRCA8igMWGp9OYLX4oLFn4/rh+bteywY7scjl4HjVfsPOU7U7tcLfYPJ/nDrgw8uuecDPGu1ZinaSu9pRibqJLJ8cVP4PGEebpEPwwep5WIrfqyoFFIp608K+UN/vQPS9ovMztFeSVweZkK4/gYDVuoZzBt00ja/15OAIAuJAmlOenFC2zsgJ6O4e1dFrWbkfStuXV3iLw0/xhFcLTH4xlWmgFj/QR5VLW6FECVdel7dB+KJ/mAbZm+4IVBSO93RmV3fNXfHy7W5TzhUdZ4lXBCcbAL6TwvOgXvgm2fEzy8TXzXb15MBkuMFyVyKnoKCIXDSp++lTG2AHiMLY2w4X1iPLGDw1C00h4Bxc0NqGX8hD5ybe8kJrlBMRfQnqR8M+j4XFbVAQmClUch1bQMTg/rXRNG5IhSsvTzuFjK7hWLThsLa4yfPKLKtJPSHlEAuezKyBXy5Ce5Q0+30dcqaz++nYrVMCM6IR3TqHTQnI9nWld6hu3QzKY1ARK6a/Sv1vYgvvQzVu8AO50BLY4Mq+MsYcOf18fPB7DKHVtyIIPhh9Z2XfAD8898jM93nj1+ZoyjaiafWNNsCJ5JBjfA2k5/Ru1c3f2PVO4Sn7IsDmSw9XlfaS+gXepBVKoO2ArPB5Ft/z+I3dJJ+onuY51wUaF2nYZnuSsL4bu2LWYia5CtsjKDOI6f7tjcEurfPYM3KfRT3SYPcvJHcxOQ4+Y+ox7MGH8lei6LbFtQ1AXiIT+91KRZgNTuRPrAS26tu/7Gdv1NrgbyIQH+2p+G1xmnadQ0MIwFSf0s6rKzUnyBMf6N++XQxvfyQHNqHn7ZCS4lFE4J5GtJRxH8th1K0dySsrzdah9NQDUXZI9r1oXh4GFQJ/pVz9Uf7pI4VhO+zf0M6QiycnPW4U9JhpMeTeqiUoagMzCxF9Q46dkNRchD5zHYg/ekIFv5x0is+7To+pnN5ZIO3OsF6WLVObv0VJQRxgVIYMfqH+aCj5Fs8kb9g8zg+VQ6EL+GAnSTgy6eCTD+7jY3JF1+vzFVzcvkQB+wW45gdwNpj7rqbhsgQfJUPZ/dH9Y7DUdRXZzurxpDbVXD7yyY0vmDs//rdPFpDz1u40K964tX+LwvqPVturKXaiA8HsL6RS3fBg7s4jDFqJw6qsKMTx32GnDJzof6cUd5Wi89wv6la4uNuKBizWLRgaMJwbbV95rBgvKZKkJI/UVQ/Il7iDDu0Bi8M=';const _IH='51c8f2f79c7fce03d1e1283298030963e2376ce6427d74cc4905281f2f7d82e4';let _src;

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
