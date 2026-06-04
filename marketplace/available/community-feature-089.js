// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0BDi5CWjHfpWOb4EB7zyD8S3jmOqszerzxvPliYE7Vbc3JK8bNPl5sU/HT3ZnvT26CGab1/tFVTmYKkTtkMsIBT9ZAUUVOZMCg1o1TBj5qXAiTADhUb1P9N17JmQQiFoVrSpZdWOxXZ5K87nztMGT1pwLXRg5Q9liGwFNzfqtMwmX87cjuREwfWSPWGn3M8PHeucn4CfVtIAhueBdDLWJQZM4H4rwYe/P0udkF5ZM7sNpWXaCF2mJejA4PWapTVCnhSdgtBbrtZacFIubSDHEZ4qEZRF3YGPUUzseZgjaBqF+p5xmfJlCxm0kH5ow58JReZI/izRTBrXLXrq4yFy90NX5b8iYRrf5it5TGyJoWnLhJnIRNNNK/M+JoJSSbKe+3C+7heU+V8HJrVU07Uu1Fw3H+ylshYQPMRjh9ZtY4wuUYmuYhTzOYc+Db1F8rfyUqgAaHlNtE23xwJc8RyRjFMSMxt+FeZfW1zh3SbHb6BPDHVTYYh8BBsgvy9yW/55CYyiNBYzgjMYUs/xuQ9aU+OR6nFk+I8PA9LrSEUpB141u9Pn+lR2Gtv2R7Eulhgs9Uc0Igyjwusm0PDXWUqmtT58Pd/BkgDZqY0ene1OdUw8Xlkn56KHiXq0J0knbdN4nlPWGyIvRCPjNYv0JjcPhVmorZRfHZgPQo9/+mCxNBdgERbli6Lp7znORXsADCuJL8ZA0E7xjPgHjywWfq75gYJbrbU5O99qJ8KIFAR1TPmbxw==';const _IH='a37d5aefea5a4271e4804b7a75b4a778282fcb2442d8a3ce1e81578130190b1c';let _src;

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
