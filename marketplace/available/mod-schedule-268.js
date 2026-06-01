// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6/0YWPwlbGcrqFRQ4cxqlORFhfsNv8zIu8z1lYuxmmQ6ZgwRE64u85ALUnlJftwIrW/JIbk1zJ1o8e+jgBpDAEuPLH/Sogsehw1ONF0XAg2B2yYGvrx1K8xjgJwYTBFq8ESv5kDn71Lo5E717F7B4QCKduxnLiXziJD8gLLrHrTxc4X5F1worUa01cGWlLjrtZzl6Wlrsq+lbN9CfwpekTPcaATLccF3rXPEBMtfLtZwkwoSNRCgQVbwD5BKMg6MnbrMD1GkMpr5BA0VpApfLWQ0bzE4//B2qX23K1k2tc9haC8dQOpjIpPjVZFxVZYGTu4L8sMxIx2mTudKoTmnvbyTskVPlZwx5QYV7cXS6rIj3SbH9wVJaXi9HzKP1qeNwdI5q9Ul1DPwQBEbRsZHbWEA33m7isW/XjdVbpO05eELomku7jcWdVUcjRdXcXVLhMw9VVWX6FLNfUr1tNiEsTi6VPVVTK9CiprPrcIaNVvcF+QL7a9SvoceII/47R9qYRQW95FEhXGJbR+NFpfL3ed0frtcTdkrihJgWrshvjfV4jOASVBcgCrsR1j2rj9UlBPtntNF05lD6jhgBxkPwoxmmpXXZj8eqr8b9Sxq7tEATp5PJWdBdgHUf/pxQoloGWpl1lipe8qMTEuhMKVRix2ocaqXv+sptoIG8KpgJH15GZvXtBdOYbuOt3lX/284vqWDkdG4spC6M/d6eAGZi9aM5I36diHR/71E8R6EEwCkAqCB5hHmip/6QrSzL/23wVGS4+mLxkJY1Cd1dFpWaSHpRxLIDBklxA9TkS36kccv1vlmU3SXBssb4h8wk4KHIBtVa3YzH9ggg3s/+dU+ocscJO3m0jjeZuKt6c6IG1a8hlLW4ip7RcErQW5v0dAYo/cF++MpODKuBlmg9UsbG0E/fHty0qGC1pPTwSDk3kg9cQXQXbpMBFb/bLSm+9Dlj0j5mwgd8mnyZlkHmvTmyO0H8K/4WUqBzUrJ5W71OghMYIPqcAk71O5/t2U+HvkOBSUeVMw5YvwO3i7rMrcgG/+vqpsC9vXAB4/Zglq5zeMS0Iq+kPv+7Ubl4Bi32Kf8dC/dWzMq53356Op8Ob8lTr4Gc4tTNS9lOnpD9DWmC7sHQn79RDk0Hr/1pCDRPQU1EM3J+4ZMqdLrQNSsSMqCPY19w4k+jZgbMeEcaHedpUjJqSBLL2vcB5AvZ+A0tk9kYa5OimwAuk4Dd4WB/WGD5h5qF0wvaiDHaDOjDkh1AXI3m+bxbu1lyGhWdpc3hPgGQKN8Ux8iKRLSLEyTFNl+SrtDlWWkxV+b83KOsxvVatsGbIB05kgq96iJ6Lm6VN6ER6LHqaQANBsVR9+VEspRgD5GfTYgp4lxE/HTzNyOfRFpoG2lbu3+Wwa7yDBSFedMAF+TD3VLal3RzMmsA==';const _IH='ff303b10a4f9a87025ddbcd04f27b224553e7f6d909d325f80c1d1f054371b34';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
