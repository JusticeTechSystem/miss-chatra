// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B1nZvn7R4jb1hXTze6tr+TgSakrBzrBM8hwOfpgMegrXPRTFmKgRoea2jSwUZXb7SAmTWhLRwDS6S8il5XWI6k12ElpgUrJhYgzC+i6gyt60B9vQiDIR/9rXp2tO1MRDbzeOYGiFLFNsyW/llZNnTaaCLFLAGntuPjsd6SsD9d69QYyw4s3r2vxlL9v3lPADeV3r+AwJfmUv3skC8zLg6m6g9TCtXTT9lHlpZahAl6EUAR+pvaZ6Krns0G+PKKbUO0+HigKBqOCaN6DU5frQTLCqG2/puNh9DOGpAbd2eT5y/E84MSZOaCRYagHL38So4KWp0QD19zLAa8bRJqjLW9dGS8EBJ75VuhyzOeWsxkWkSuAYaOJBb9GZXU81yrlHa2bDgrvK711AaEdt+3i7wyUP/VPqcLPRNKmdScgqq9Q3qUE1HRKzjVtnSpYqpOXOtVhbQAHwrrnXPLDRMxd25u3/3vz7wG5UAnfo4opPG/JTND7m//fM26Bpw/uaibino0dbNZTch9tcO3IOfRYWRIvVdkUBLzdI8AE/FQQvWgjZRjui17R8PWUJ+Gry0D5P1+99DLMFWWVseXgmeEEnaFA67fkMTq0SWZbpRRM7R6s4cHTDTm0OKGC2U076Cq+cbGNiRzdcEdtl1GeTIytXOxYbAWnSvDcNNi7AHLSXtoqmGjWpHa9GYMv+IeiZhWUqBBz39HU5K/3G/WlraxYTXcOdzKYvgkrIeiV+POwtolmGB5JPUYgXYrSTLqHdjuYflSco2K8DuDoghvWM5cWs8bFOq8Y90rVc6CkLzOq8BLCQajIxKA7QCoaoAe4FFTCj3H6hmxFEb/H7n8mV2yIa2itofeRR1R50pgVJMqe4EpDz7lNE84BPmhKFOpk1KpSsnxz3JZjkk6Fq+v6lh07W2fG9oQ4KW3wy5phl8GA0fKLto863m6wghenQvBucsIL8jNpXrKqmvCvZNY6/S+BvjMmYN6Bbxc9WoDyPpBUh8Mnn+p5bFH6ARQ5fs1Dm7PdB5e6hDGNjjHyufaC2T+5zHOnJygW0V7j0Dx2/CUOxSx5qW0/EUQQd6brt1x2wruu4yVcPpAL0iiGtj6cBteB6QGFN4SXjxcqwg3omGQlXgEzTpFiGITO4Nd3gqqJu/aE8rdseFKJM/+zg1XuT5tmvi5HPVgLlcWiLj27bIekqF0amSQJdM0FLwzg/r7Ayg2Vbsa4SwoFs';const _IH='765c4d4bc1c9388a2cd82c3fcf80927b22232d246bb6d6c3d477ea7cb99225f8';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
