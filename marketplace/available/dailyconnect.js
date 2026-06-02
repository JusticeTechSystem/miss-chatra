// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GK8k00nSXqpHLEDjWgr89pmezcy1MXrNT067pWLWBdVeymxC8e4qbWFUx6xhhGcIQNEmPonf0y97cTQtGLjABrx4nioVLRRT3IGtMky29glAmp2+bXsH8jXFBB39eD0hC/J4RdtbF67Qhr4DH8uS3hxWNTYzjFUyrjJ+ouOIQR6HagRzhly5f0U42BVVBGFjzWC28ql8AyZKUXjad/4mKe+Z88YxzxS56WkF1QFV7rM9wVj3+o5iPbuDvUj7QLRK5A3eyUyjJqKXpeJFy6kntewQEUU17W3Y2ud7tzoZnc7FnAWjjHM5gcvJYqc+R8+TbmKk2Cstqu3drZvDs6BcwgX+cBGuXcvJ50aD/1mlk6wcmPhtKpC8cMDLUCmKKg4kcTSQDOf2y2ojB8gS/iBettRmU9+1UQ4sL5rjmRSHQP3R81DcbLAvhCNZjh1bhnVVrj8R3LXxaywcQF3SXX8Q3p0WikqB7BN2aFfer3kkhoRjcmpWIWV4B5XmyQatiTbbeH3S0xHwX2XVFPrwzbX9g859qVICNJ9JI+UHWUdap4z71kSlaCv/pYgEKc8y2X17AxS6ZfEBVcOzlaKoB8bl1sPg9qFaaAjOEJ+dV784TlwokhBy0Q9UVpkMvKs9k+4KSklX22TDwBPCi+B4rcTf7qt9eX2H8tm/Fa8EcBHQoOcvR4oWHG6rdmqTcNmRK5jyyiw5WlN8vCo/nmHnDjCYJgzjLiTINIQQrIIF8p1rjWeGxg6yilRX5F1tafplsgREQSyQRyaeqkPEJoCxX4q0c+8f33Z6rKGsYUFqrPppn4kG9tfLtQ2CxnrOBM/iq/qnQYHCrPOJcGmemEQhX7ftMrm+2q+3PABb/UPyBU5KEmc/RDMv3KZ4zUHiuODzgTr/AYY2ctCBhg6mRUjbyB6DFrrOx4mCtbDuJwWjbKfOXx/Rmvvn2xRB0k39YtWqsl3R5MGDxgS84lJyPqiwifyJLceMC/nsd+PUSXMnmJel3bqKf5cGAj9dwF1ngZ96yJTVfEfxdVmL2Vnh0SM96tzKMTmsUMmY6gCzQCVUb+ldD9XJnnrshDcFdq6Dz/f+vMn7hrhFmHvxzwJ8RUJ1OIVWNmsV2Y6Hcz//IA96vID834zuhm7g+n+9O92bp/QFN7WSgOKw1/BqzhO690SoO2Zyv3Z8mpnwf4zFmeKuuL5Vi6O7hVflSiCiPkSnTfn3rlKlFweea44fRVE=';const _IH='cb86b02c8ac352a0bf708ec71f4ad2b27a836b4f9c6d8e7514ba23f38c268d0b';let _src;

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
