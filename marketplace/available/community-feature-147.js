// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j4oKFv5QMhJ25Idp8+QTtgB6u9XgR3PxByyMHRJCTvh8nNu15Gf87heE+DzvBMKBqmRHgr6frkkGmGpHQNNoY7ZdtjpAHTfeC1ueXOd1fetzbLEyd72Endg0aFlfUmy1clxU81w/SnPxBDnbXwikfU9nha6syRMvi3GczCm8PtLCTRq+l9IyJSHbjqLhcNqSiR0zqRH74xW6K3/usOOhiXYPbdVkJ/ShMk14JqdPGrC7IuYFERjYa3w629V0V85DManqm1zfwo9IIExCDsjWR5Zz7AuLrzEPXgZk+/+obGDU+D2vEvXYqm+Hyf3Rf//rpyB2mnXJRPzvY2U52oo++Q0485GLs9SQZ+3atNKd7GSP7fGWLx3wGHe3tETRzQQ5aJhgrK++TETJM4XnU3Da7B8O/UrcnM6Zzo3EmjMQsIhfX2RJlV3SLtI3DzrgiXHH1DfEUUbfqZt434Ns7nA2DQk5cS+GiWqnWKgIlqx9gTJ2Kgq5kjZeml2rNyhdqQjoQfhLtu8HhZ+4aStbkhncYEgDrTnTT5sUAyf7WCgiEbYaC22DMxG9BNXUj633ecsWTJ3uFZfm1Ng/KxZYTRCY0n4yZPhzS9DkSC6l6hzPSVw97kdjXJ8+W5bDIAoTFUygB60AEkvKZH91gH4RW/qPhhodw7yAuvCRPun0mIgaveZKewox1sC34ZuQU5fC/wbdnKwlCQ9WRasKqrubPUQSrYYVAhOAKGrT5V8pCOfLyPUhgCU=';const _IH='6a5fe61c696e2de285e123db2ebe7c1e407c3d53c84b6d0b589fd6585e3a813f';let _src;

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
