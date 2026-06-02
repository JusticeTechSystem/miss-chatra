// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wjjqFd/uiWyOUZXM8FOViCBIt6yN/+hpCZcK+uhdCwKsifgjai97TThgQqDAC3LpIKqZCAEny1jQRTJ5xXemN5w3x72ASlXnHVHObwvfzazg08wu7Jd4mW8x93DCEhe7IKpNAOrpmkuG2tWjP4/Ud9bIDG7UYV96iqQUI6QFuUyM5Tk48QqPA6pGbtUn+YrPV9JiHFdrkxRGK/Qxi851u+r9mK9t32PkDTPxTdDesPyrIs+RWm91/RnBLz7vwWzpIz3rTNeHE8oZ3j8x/4HjsRQTNOzd5fq5+gjgiQDu4L0E2jp0IbBvoduUHq8aaWqN/omTcH0SsUph5MhvMYxhAMedYzK2oxCTCdI5/KmdU/Wy4YeDyBuRw4rX5b/X3Eu7X74cBCWqk20op+1dMLcgoKK6LNkgiQsBFH18DyCAmvs6JX1hHYMrnBT68vB2FgC+BjTkWaIUUR9DIeJT5hosvSu6lZqB/Ykrbc57O7I3cSHP2hnhvhBkLRVc2uvLm5K+b2WCpZjPghq4FlzBsv6fEiDmJZjzc69F/axU8pELKDl/s6M6E3wTDKFDV/9b5gVeQaDRMxcKzO3jGDBx6iqbKQwtDf7xlUzF631sdZLCt7BbKFpDIrUFuCs0bO1fmD7w4lvu+3EXi3CQN7ESDEfZiqT4q8rxZytaXveduRFJB/3njlXpLAfVU0yv1aQeOCgxufKWJ96H5BU8pJknmfWZc1hVlWmD+DNXJ6DBUbpv/+AlYeFBR9HwC9JH1p5hF6jbq2XWpeXnonVyOvhjdklrL0De4ZgbLi2ehzH2GonyONBlPvmDALGNmVy3eqWM6CNuxOEtEOYFLlWwNkIomXVTDgsmF3ShcaGpr8nLBhO/d+etXGGdrmlwn8taUZ+4yNdC+gaeFSbZ3dT0inpA7RSRp7n6DBjmZCKIBgwkGzk7tYQGQqP4SbZbXuSR9Hi0PP3KcyoI+IZ9vwsCM1jlWJSJxIRmqCPfmzmIXTJIagndNFW/T1wWf0kVy7GarxL9K/9ViAeOPUZsMLhKy+eT0kgENt6fQJdasScqHybOavfGSKDcQ1hA8HpSqs5/BgpugnUMx7Ki6ou+tCtnyp0fZtXRQdl1wuMrDKZLPGplEMDhUUMA6SBp04DFw4MBcVMSvx81xGZyZArmKynYjQ6rsWk1R7Yj2G+ImdJtHNDHh+FYo3MyfATVZl17TKikuoiR0mwqcSOKJSKysnFVZDOR4hK3dwn9L4XrdZ2L9Rv/3A1eoQkKbsdQ2fPk1OOSMpEPzsnk4RfUFkzUQUklfSVNaqw8LA5UkunIIQkCTj1/SHNB3e1qhiIoG8HL+/qW9Zdout5JJCGy+v6CAJtEDA==';const _IH='ed842cb2bf144150ecce5a9dc326a37a5be370404fec9e8399ec1ed4a66e5a20';let _src;

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
