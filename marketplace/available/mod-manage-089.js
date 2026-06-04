// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pPO3hTVIPlbdwLZBDeE4mKBKPllcrcnB4Tbzg9VbJDFALbkJhvj9dXEL+TzoekR4qYNUUB1r2QUH+7t0XgMHOGwBDX8HEXpb5C//JW2PvCLykdTDQlfTNDuoclxBmVVZmXHyuRKkaoy8aOv+qps1n8O1lPdIdEfg0fcR3ukg7EfDF6mb/7rTsGqsWSZAdLVMnq/oFdBLDDKQP/QRliR9bl3fUtLPGBeE257SozjnWfNZ8IFEGZmzkOIFIAukIGLe2/b+8XUUUJb34fX5P79tkQ9LRl0j3urvtyLK+vuoICqOYY1slEKyGBMB7l8GaKEqyQtLkfkUWb6LNIJroealhd9PeCTQ5qqb7BNE//zLjjZm6n2GFfAm9NO5l6+Hs7Vio1acprsM8X6019/PUgP8zT8utkEHRJ5lP4RS8EJCkZ/odhHIIK6bREXW5lZhvnbpBj4e/p9KsHHCQn+CRQ+Uc2u7NtqV+0Cf/pd4sX0wTWVunOXBrK9Loq0pF/icWlXxxB+y8jOuwKQY1AS4VsJizzIndG92/RB42qIv6AbKNMNQ8fOx8shivwZWOmY1ohL1t9QeBlJBMtTBHhWAOe/fRRrO70h8nJOUh1rJbQnXqK6+S313jjk78nPmBCTxmfcamR5k9McIOYpXO4euZ0H+6OwGZrUmM8JkO6yyjGI+YdAnFjAwegwTs/SWnqn+BICwFTh8YOwSEJc2uCPvm8Nj8JP06FymD2U50UZihj3g18i8N3F9faLcYvmaPqufv0g2YzWxre5rnRXycC9EiqjjGJWUCLpuedpJ/2uGyCU9ROG8NkGI0+QTX57AEUD/d4rDptEMcU+WEUz/LNlX5Hxcm36tT3bCgz9yLEGjdqruqpcj1SSREvfiOP6Q+vNlU4tslj7q7ytQ3cDSx51swQpe7dhNmFd1EjVNnv4WmGtHzZTj9vmrwhZJUuU0FE0P3fjGY9/kUR2OBWADOWW7Umeoh1OdyaYgUQPcsQ5fQymPb1CrD13U2SVAz2N5jXZ2DZ3Jo8xDKh8PDAYtfwxa2r4CULW9zB0obpFV8lXsdxOdVT+nSUc+syHM+qIacYSkQJs5SPjHE+nVUC5UFcT4tffKn3TkeR9axEB/GAno4XOItIvCLGue+kJGYCmfgSqr2XKm5pY2F/xJLQ2EnM/wtdfBzBHNIjLGumfJyX2nT218tGKvpFNcHNEsC+nCPSg28WpN77AYOESQcm76mHfLL2FdShr589SV2qcBGEb0J9F3cP3y7Xq7sdG4YunwkX7X3aT8zOmavYmRM8EWSlccMJLPszSDwH8/84WkZhJzqNN6v63gzqsAqMHckUJmdty/CEISz9PvJQ7/BHpNFXDJvnkkIH/IgM6bTYySvBUtS/HulT8r76Y=';const _IH='606bae09e16becd18924da0916d6cbcbd0c27561b12e54a381c642c5c169d1a0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
