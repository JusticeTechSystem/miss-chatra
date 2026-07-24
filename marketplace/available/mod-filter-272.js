// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRN8cMBhgwyG74lENJ5a7cg1gMGMBaJe395fJG8gp7Y5iPjVA1O4gq9zPU+CXJyksZFQC0ENir67VIsbHVRZNDMj9LrpoWJsiTUVSDSiDsZ8neFxKCKJPw9R/NCU6iQyrGC2nwKQGsJZmeW2qEwwAq2fvgravs75QW1J7gq3PLHqd+kGvR3q06mEBBpJ5HLztHsEGxCC3+8LgZ+fAIN5gqOlZ660/nHfZQW2P9Q8waRCEtnboL19dlgvUekaJwmdZyKpTwnDE5ONW8KGhzSmk+o1UQ2NHqqYt/zIMdMkzj4licbYYRwjJyypcayFTUmYghYSKfwViwF6qCwoKbDlePNiNA1Wg3kuBuyEuFbFO5TcD6x/k1oUo2AyX5S8qJMtZz3ZNH7XgT/d7jCJZTI16FSdmETM3xII/i7HcYpVxxy5WHnkFfkd+a0X97p+gw6Yw4mBcLwgZpiXcUtbSIaBYtD38FIpidbTPmN+GHd2CP04o1Rx+cXF+hZfXiJroSjMvq7gQlQw2Cw/8Tns/o44yiYIhzeDKKCcZECCjkvfzS21maLh9UaLMvlVONTN7aqISscXBAa/i6hRvBebosd2F64yAl5f62ymUAllRisvggroq8Hzyhsn43LVTO2xVbyQZ7EYcRH3V5O66NFrlNaEuVNh46FDWOlF0GMGOTTdrnNv7letyLc5J8SNXY+2ZbnyxJPrGMMYLF6FXXAYwDVdb5btEkZSAGKGGSwn5wH7WRPm/r+MlhL31uOaIhAIsY4CgKw+TkUrGwTXZlPDA+rGMdVKCAv5F7hzDpB6cc+7hfWuGDn45Ol5B0WQhV+Q3bZZo59yWvt/iHMVc+SbMEJsLdZUJ1hMZYbQ3kawbQx/e2Ph1/3JsFvWNMlADOD69kBq4PVrfyDiUKPo5LDleZ4sMA+afFvgae6PnNugg3gPczUy1orTJ7ng8bJFmqr87skkG8dbFUGhIS3gTFkxp3Wjis0G0WxEHnuSzmvkrn66CYi4yuSI6LenILHbmUyHmRQgqClsMjDnM3B0OLulTp4dF08FtWNGey7nfZKQcT5mdpB1AO6ZdR9oulCDbCctL3y+ajvfhAVRKdO+l3llqi9oW9F+XxjXGOIPg1i8AOyMNm1k5Dj1WYQuQcVRoOE6xZE3uAA6sa7CJ8DbOP/8l6mWr9YRPMy1N/XQqyctvLvVXRra6DoiMqOaXOMATgChOj0UwlTXyw6DH87AMVja78Z7udvzuqZb6+9KeeaTVf2FrTrtR5V61UjL6QRCCI7OGBCF4JKaZqzxsPqnyt6rtei5dDMEiqY4otwjW3hZCejHLkMDGZrCHdE6FaQHkLNIgl+vp5Jp3Ls03Uh0SHgVOa4x4YvlfinvzUF6j/Nm647U31QHQysPqf3eann';const _IH='420a4b9f3853df123f2d8b3d7f1a374fbbfa723434c43bb96e61832a37c5e17a';let _src;

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
