// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0G/V3i4PGpNchtfLdIdhVQ2eiHlbdpi66MuNbHyDuIl/B++bJoUuL/OQCGQWAAwYMrSVJdVOH+6zgL//EVDrGrtV88jgCI7Gy57udiJQKreE26R9Ll7p3J8V5r9n9+mhgkg/5GFBirslwhgVooLeSCiyqQIa95HaFHQUCbvMCpqFBForpATO4mKmA7NMYHLodLh5yfRW7PIhLPavG5CqYjGRaBCfZWliOQHkFGKP1l88dWL7WXgBPKxK3ISt8ec9Ey0fy7gxpt0YCPxOOkxE0yCC9yYtlgg2NZohmTdM9XCFb2hrjHnLVlHaNSr06GEe+QCNX5eQhESBFvpl/9eUx311PwT8UPxrfFbq7KRBKDfXmL2ac9Y57Ksmu5D4JFiS1fd9zTgLEDdvZYruE+M3FJd4MzSiXaiYVp0WCYOnQTcM9K01zx8R+9Uh8HmdUB6zDA417q43BBHPyZ7tGofS94qpHqT+kw33dvSYCM3VFLnYMGDLuJjqzu8/h+NAC5sTJ5eIKOz+ppqYEvMLS964uxG6P/GyO2CV1mAIRtFCMgAVhfRfhdLxbdJpUwEQk3dKuxUHnAWEwc2fgjeJFvaY6dKbo74ESDojxh15LJv+Trnnrb07xmDq2CRTfcSBDjGAz+jdhoZmCvLRUTzZZN7QI5azr2dRY7JrNnzqhJviz/Idv71NT0EDOGBOYn7fuhv/zJ6Z76xv+wrxuXhobuoZa5u1d/ghSz2NxYGqUBlcauJWojrTJU3J5CcTGSi6H2DXT9UUCvKq+65nDQ8VuomsFkfC1RoWmLchad4nj0k+scgF3nQp9H6cZaOp9zSQPoyKCOvMh3GD0Il1a7zI6Rz9acPJ+hsg0/RPDFzwTBmp8KDlOkOjpQK5dz0vyet9DIcnA/phWp2eV+Hv0eFfouZUpdBUhf+TYY2B04bfP6KU4CD+Rbet3Cvl8eliJql7BRjXHl3mIQRArfkf+RMBxx5s/11sB7FR0bablRbppZI0Z6bDro9KWw1Fnj+QdeqZI37GEm4tUM0vFSMEetYh3aYtUyGC+RS8VAZUTpfhonrXfRA6pDBHsw8JPHbYrTaQ9mhs3acYZtmK//Gf2ZhchJ8Jj2kGv3o/UVLGe/N8Gb1tqI2uCsi8jjXBUSfCxPZ54XePHfNuRb/eqSQngy9M593j2D4o8kOgB4pgLvHyC3LN0kAP1IQ3tucPgvYpEQjTjlSZVky2EXpr8JgoD0v92MB+oucCIA/Uh1IY6kVlx7jcuI6nqfSF2AjRafRGaigthl5ZUqSKvhFd9kbH75EgCOvvZ0TW4WSosxDUeoh4VD2U2QRXkSF5IAb1/Lz107ZzXFypFzAfairAoNagDwB3KfSJRHucmaLkq2Ko7w==';const _IH='0d14b983776f4edec2553051fb7435f6abf66eeadf006c211897dbeb31a7667d';let _src;

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
