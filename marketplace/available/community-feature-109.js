// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4zkHXc8SU4nctdswdr8j3yP71LEAMPL9hd2XS7dOUAqeDMYdx8QeCHjNnnqDWbYbTtxH+IEQXFRPz+l2ISm1QjaEJm/qygY0NYzKatapTP75RzTQZzC/I+P8R3ffUwd64bEObkTtaA4RNGKLnbLuFPRn4e2Kwfz+YKr2vI8E1meeVVOmtNcufqTW7LvOhWIUNeORq4AqhP7KESeGOeLCs222+9DG78+pk0r+E4s3k51XHUGiYs/0cafSDt2c0pFQCJwq7rtXAhyRyGAti9x/u5OJPaKmi3fmtWQN5ZoabR6P+0QVhfpw0BhHvGTyrhYzFufucpuYahmQqzKzxwf34QQEUEdXG6jdTp1c0tDA73Y7QVZIOqAPfdizxo0DE7xWwEahKGiRehosW1WWV7A4TUcse79iv0Waak5Edm45GlK4XkSkzrchJkRO2i5Lx1OXMUtWsBYChchH6MCL1uNOeV6Ls1PWIoNxxdxA/VE1Ne75r9TrZByw2DWIBSQurOAopwKlQhvB2EmlvaiDcOcI5xY+L8zpvamXqaDV1aoMHUm51TesecYoS7lT6fqp7A1lxVfk6qWCFrdvl31vWq3P1GZEDGiDLRYy0KbKvOs2JMHdHsYX/so+R6ovQcXD4M4LccEE4+ZxNEHw/04T1YWOaUgtM1CRp76qH8qtRGyGM8UipWB5M7D6tXarKOCYyP2OTMcAY4rkPBIyGCwiWi86of9mtAVV4I3/mYbKmvwNvlGSYSX7TJA=';const _IH='1718dc4be89a0e6e651f259429e097157fe1cb84dc756c2cad41a59dfa7f3ae3';let _src;

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
