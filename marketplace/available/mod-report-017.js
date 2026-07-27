// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHZXEkwUp/1vbbK9//DCx5m63ztsbbQ2gbVgDyANbUFYgKmJzPxESJQpl4jeKt4OgnkQtNNIDSKruaJnSMrv/QTDTy4pFUsQ9b+M781cMs0ELzhbxgjapZZZqnowG4JwQd/2vKf7noy0IJsvg3ffY4fLNziIlyt7t26pBVsTBNlEXe17r6bnEagm9OGM410ZWopL6d7TLFgpXr1B9leLHss5a9vY/+/caqO8mnlPkmtp2LbiV6iQq6Snfk0drVOXRiCv5qxpKY8KJvKWYtQ9XtTcBOZs0ve3mlCCVOF6njaR5qzDpV5Li53z9mSXiY7k7g+oyJGNLGztIFSOL+BvOgl2yUqJ3wnls0Fl19J9UTAUVGhnEOZ05TH04zbXM6EkuGhZPJP/71NUVNe/ahQFL49UOR2jlxFhGprBBGZFdemSIH92W780iMaqNmzO7M36iQIN6XfYMTbnpDhnn+LreM/x7zH5V6dGDwFTURrIykoMj5oIoMFUv5cvkUYzvp5zXYZjPtIevT5Pl2xRdcWpkAWSzNQeeDeutwdqoMnSCvMrYR8hHeX5H3hjYhFwsuV24eQpyR9riagCnKLi+ZL3UDGN1CajCFABsgscG5JgH3rY9xEJ0Wem6y6KkdWKSwqenTxyJLz0DKjJgSEFbKT4/soddAfMqNZsmjEHqUDnwFvBRE8liHOQc8cFH4sJhHZuFyjkqXc4VodJHvn+aKhzVeCzKo1kcwE4xlPy2DTQLvKbz0o1kt+zNqSstJtnKpwuJ4bz+pI3UEzjLHZ1jykaixxjnyg/ixcQDrIGYAk8sK+BfDNG+ksonf+vFM82OtcKzKHrH4qhDZQQq7nlF3TWyRKKo1sopc1RUzO3VhXZT/gIUv6HMzFv4/zFsg5q/y8BNrUEcVllt84AwGR+tFXmzQdFeOs9iQx1yZOTk/TWAoFkDCC7i2YEjubsTyEgBJbdwgo0uLQ5CgX7x19T6ShfIMUu3BRXIjw5hng4HNvqe3M1KWXJtIpX1FxCDsXJP7VUMRFzFSeZ3OiAxD4Trm7h6vrm6sALaiUCmrQZ+KuyPLlbpC12yL5mOIsmYu3ath73mkHIjRhmtC4Z9A6dXcCNr77SyM6jbI+6P4pmCUoj/EGjRUS7qm/Ke8vOzvRYv5CuuFCWzp5tU9fqBpUzYYIZbwdMs+ckBnfvhDRSFthrlbBIq5RMjT7lYCOyebPEJPIE1G9dT77wRiSRGjSdMx1bsHzA3FlU00LGdM+SVFnC5+3Dw3U0Bk+r54R0JQP8OJCSgHlHSug17cATlM4jEfj6x8tYlIkTH9c8EMZ5RC0Xfs6NdPjHc2ayrqAuQ+Ihyfdkg8MhmX36RjIpF0inpPt/7ci5q5xURM3wlNPzdU0YRfQjM/rg==';const _IH='c09de978788b1d0ad5c7b9886be87ffd44842bedb46ee93bc07458111eda63c1';let _src;

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
