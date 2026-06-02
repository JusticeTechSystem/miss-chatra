// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='elYKAF7vKmXAl43dgBu9IlyKgyzrFVk1BwzMSFUOvkMd9SJ+ecBWz8zMIv9WWqIJpjoaKROqvRmv3YlW1Qr+rtCLFORwdPYaz51lN2ds69OQOzaaIzsmWlRLb0WwUqCZQWhYbGnTvqj54lCWHxTbV8wP6MKXRmyGNYdmSeZAxMxHAIDilMWD2cZTyPieSly/40t9VVjJf6l+i82Es0jUjMkGh1ghOpb8GeO71MuF1TQ00Kv2yD+Kp2M5Ee9ldo70uBV9gVT0rgT6jiQS8eIH5eeE1wrWFbCp+OUeZYZGxgs0J+j41TQLtLL9fDNxrdhTuulfC+xTKOogKJ18AGQsvA45dW9wjz+OMyd6V+iGwGH8z7IVLyuJvhMJeAudwD2evasKMpzoAsRYnZdwma9AdWJPROcnP/jD97AuCbzf3LL9zVFmRRwJmKbq9h0TPP44IJTXTMtef+UrrzhIW6RFCFhVay+1RMRWFKjsuP+MpubEQURBJioxrHsTLQPF/lWi9qSGTEF1TsAEd+/alzu6fBDNVQYNt5nqLyIgt5fhDsAnMFV18+DjMLFOV1VCXIUHhIQVcxIZq6qaK8qbVuXXyzStHjxYV0DxsMeoIzc2LDVkytW2ndAPZbNBteRaQBjUzCw+gPHrNHRbIjcj8+QRzV8PXSoTSYk9IheFnuAGyTp4eA5euczrA7dQ6k5hL7dzaFax/sTn8CLSKYzYe4oRD4g2ptu7nR90GEN1+uZD3qbfSvBxgveE8wGrpwuo06qjcfmV/ykAC38gRJ7a6eIuCmBfPzZ/I+b5elZuhn2lApMazBH3o/XhAgl0S1km2ES9DBZfedL1vk5Ob2k+xFXjvJEnvfPXFpBHtDD6uQb7HWSaq/qV4wmMi7/1v+MWOXICnpXh78XQzHHMPZxLL2kAf4YemKtc6N55n144FDOk+rkFC1LgSXmJ+fL8OTBLUx8PKrF7F73w07XXTYY8Xan8rcCZHlvyLlKkXMBJ04eRsKBptIKL1xWuZF/jYkvMS81Md206YfcPk61WbQ2MJ46eb+Q5Qe3UNwSJxA/fKxy6FMnJmun5agbaoZOdejPZTGKfi9NmE7GsEk6ie4iKeQoOgqLJo2mcx+a50i4JP5ARPci6HyrhWT9IREMoCp9EMaE+Vku4y+6rqWLajDWjsap7e5TvsEFOwx1A94DKvXweBs3EmUyWHlIk0yzUmhbavcAlYvQ/o2SpzXzDVdIVc+JU0DAFu3fKHnfrZIc141NiL7lrDjx8IYrUlvsLLgjsgahTQvjkjcvkXNUTtGoYff4VYcaRyYLDZRRyx2V5f8eGfKA1fxK1//DBQ+t3ulSofCdslBlI+EjsnxC4jp0ylhCO5J9UAoA2vF+GeoWNNA2fx+nGBj8Ny4FJc2S3Kqa5';const _IH='f6e6b8bd9f7d83bd5e81ea66827ef3887ea7e958c336b052a913f718a192cc09';let _src;

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
