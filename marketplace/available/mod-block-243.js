// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u3KqMLMTej+ZlcoAS/z6xsFiePnnDOQp/VBNEbq5u9E7piDrvj//1S3AM7Y+HHuFtSWwRvWawqEjl1DB/8aMk7s+YM+T/EaC8JhwpVCS3YdiiX5pumieHkGOuGMkj2y/Tn3a2WdpN7dRDvovLcXgVLcmT37h1Kf/spYDqjny+VVyvEuFlHwNZ4Bd7Xmjs1uTEO4dRYKHcIhbUiKJn1K8AWRXG/onO4h5IdEe/r5rIkwyEJO127cbmxrYHD4M/YTlXAv3TUPgRya/639siusxFDe1v9cU3H0Ndyg5xBbsZw05DdcPbWXfAuhVJ2lkjUrmTTyVg+FMCMN4wLtMHt/xGg8SAn7SCj0s4lmjoiSODCbGdXMYGIxtUlW3+6Uk+x6Ci6fOKLj2yhRwfjf91iXcw6kPJxmQGbr+CUGBF/oyQa1mr4CHRY4oezO4mH8lMoGDzt24AsLKAtiOx77iuBcmH9DLKYhiSr8W9Q7nwsuevtgYteBNUG7hYiaWJVGpCF2+A4caPIMluSoeoIfB8cqhLBwLJJzBeCRpvmourSmYb02LtPenN2EqogDiYZ1m6MVYcztopHB3qddLitT5TnflngmOzH0wtsVyuL1nMWCfkCqs4+a9VvlfdNXiJQjyvPk9e0OZP1XW4PzYSX8wZ2DAXUVjv9M9hFYD0HwDzSh47oVcqik3QdFD6ZWz46Xm3bcZZIYe9nT5vqd/cZQLft0KIkedPZwww1TMsllhKGccwWy+k34J8FmcvGAAhZO69DA2StUIqaAg4E4Tu4pLygSR1K98OHP9q1xlIiklnJctVgSYVAwVmbCEDF+KmFl9ZZNQjD9nRwllac5dGUwBiFcCHcrEilSBEL4uAy+SMhs5d8YEepDMXBp+hS9SNZ45T1WuzP7yK0xjan2EaaAWxZtoRv3273b12zslfCcQIox31saaXXqr1Lgordn233wDwBCmn+fZz57EveVMkYGSGpUdtyuOYKa0Pixk+z252dvcd+w7+ZMnhs9Yi64tWOkBidbMAX7YtE7FVgNHIcldokUH0pDSKT7ABgVqKq3ICHLwRfeokhiwq0Gm9SSjhNyuAXsN1/ryuLqWUP3CKUPZgkfEWAAOka3Q6yJ5/4n+hZDoa9nciM8dUBtOpay2eYNyFU3HmImFsaZ2+Xda1uDu6keg36WmN6BXS5reY6BOPm9mDuZhNbBTsHnbCXeF3JBiHEiA5YbdrCfwQeDq9Pf0gRnn8+9cC33qa4ClFzps1xKnlMu/ERACmOV/tVvsB1ZqCYf+mlbuvaSkyuzx560yAR8/OdEo9WwJ8Xb5B+1HKUJydr9YLEmrct43/c3CnbLDVCUdAL8ObdOLd7huHpYk3n0Mhezd9LKHyzmOY+Zrc0L4';const _IH='cd0c1e688e7aaac3ce78a0149eb80b8b311f29c09537d2d0daa0cb97ecec7074';let _src;

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
