// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ny8Rux6aJ1Z3iRu6cujSxz2TY3w2yX53/s4VWQtoR6RW762R6VP9jXKUA9dsVlgxJWP4AYm6gOzTvuOmPpF1HBDMDBengwMmCT1Nm4nI4LgsLnq1X9MOrw9AdalDtyuLc/daAHlPuMtw327/Vc01HMVaXKLFh2hnqp0SDxX1oC868bMg5nq8S8c8lk3j+rb3WklZAcuGaOHll936L3l+fTNmndFt9t3KlrSjBgp4tiCSGgVRX5L3tRr9Um1Ztf+P19D76L4qT1zKr/TAhSpy8ms9ygtTKJuSXHlElPFPK0ylbzgJEB2BlRjuEAT5DoeiQK547Z0mrhg7qYCKaCLAqUbtSZTOZFvrVEFH3W+oxAJ7gXWM0xJVF8u4ZggKBE68ZLxs/ymE3xxGCEgClMW4dNV8zKkv0CxJ7VoDmcNuHPobZ6oHW9XDVpNy5IMFMioRG6MMeSsBLfNdhDC49skm1L1DaYyFE2f2n9+rM7JgbnaLpVyopmRXbwTjW31D3UAZQDnmKgIw8zN2/lk+LfjH8wQ1RguFmO/I+I2Rl8IYNtTefhPuMVy3RSptONvAPWLqEMH7qxMPKUwHXw8liqvPqOZ4pWlcCNIDL/5IrHwlo3zXmvOGOWZPgETssYdQ9s6oKC8H3eNOCjRAOoh941YZ2dRnD5+wRzF++cX8YwaQW9Ww+D4vdY9mU60hvXuMeexz3TJFI5Ix8Irs9D2+IPK2A0rc1254Rz+3B0wz4ZC0jqNZP0/v9CgPjRjF0HO0TwYCdtWjhQ7QArs37Zy6LnNl9ocBzIxPjU1d4/fwkeOG91oFQXiLZERMn/AKrdkhaud7/OtTUz+bH3YF/i64M7ByjQM2c3LlqoOA6ZP3HIV6gSU1sRpJONqXNzH75qDo7TQiduAArSW2e88K79l+RRUwBDhIcZ6V8PJbx+CFVWKX7BHb1aVtEnPtgyCfBc8t2HacHHjTPuYC3UrLqklaXyG3IcTm+HHWP8PwpKKW';const _IH='06650a02d8679e6bfe2177924960531ded7f60c22dc054c8a1763341168acaa3';let _src;

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
