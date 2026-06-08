// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8wahzx8jmxSAOdCdEOP0j6RJbh8Yihb7fTXJb4qtezVB7WUjHyfZLeCw/qre0bf9pj9pjzf3lsszofVxkDmqe8tGsFyjSlBv9xAOpfhh7ztbN9WnxJqxe3hUoHyf4guLFwhJu+H4Jv3XTAqXX8I5RvH0439LsVkjDBRU0SCwgpxu/KtGA62J0eLjyrUPmTUHSiHOC9pBiTdJxHaVUVYpGqqV+0w7PBj+PInzA4lrW2WdZbZPegi60oFJ2EUlcn0PamcKj4XmqSqMpvlPwwZIIm6fvenklBdM1dEJaDmon8NT/KAd3jYfktwFNI5I8AN2sApCDr9DV8KKW69ck1Z4gpG5T/q2pyL4hf/MF9HGLOy2IIkc2hu8OZeMb+2ZNxyaXUz6nFl8mH0YN05sr6rwCgyBkX7yBl25N5X2cKYh7NAgmtTqCkIYv/viff2XpcQ6Byz/TKiDgKveSvCvAoAGCBSdw03XxlTxOW2uufksbuoSMoyv1UuK5v1JDNKD/fIVTVTG0R1I2e1TfiM0teFlXBRSLonhgr8X0NmeRhHuNjsVQemon37PmMvf8G6YpuVCYFoGI3AgXvhgK/gS5QEaGFGGFKdFA7tQDEKdwL2viKfzimBdk/Q6Hh8sOsMRsFBbQ3S626c4shJo6antso1DrrYUCLtwujBzJEktzwM9w1TteEvjJYeYx7TldB31CjGMFYQDEEa9LCnB3VZ8tPVnoquOAhZ+togs6Vy5VuvXLJ4GF+NULNOyfodQj+JeEEkcggfmo7S9kc0BEBQ1qp6k/nvmfj99YvIN8Dgp0GVOVXN1VYkSyYiLy1doeMBxI+2o9BVJ1Uj6atxB5GQ1reMH2tDLoB+LO0o4Gctxy5Cv8MDUTQAqGyzZti9TYLi4uujAPxmlUkVZOVXb5S2oK9e1Cvo9Avr5O9FAnMQAPhfQk9iqwRf989DJic3mwkfwqYnub7qBJdvTDgATqqiCJooiuUitg+tUAevJupdckorFH8/EqCs4thZ8jVssECJuQiEviWrT7nhagIuf5qz93QsegFbqsCLJ4NopFcPCGZhzqX3PbylCKmbMbnK8hR5dDwkT5/3f3nm5DT3kK0GHFGjH1+SsJ0hmIN1eZ9MyoeqQdYK/1mgz04U4Hq6x2OrB3elAbSGvhUrsBIFzr2R2bUPsV/tQNQbsipDLVSoRXlebcCWlzhVgWzCcKjGpcdngccn0AAxRaSyCgnZaDvokK+jLyOFaZQ==';const _IH='5438d39946cd1792b0e7cc0b4ca04e1905cc912c6dcf2350318351397d1be178';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
