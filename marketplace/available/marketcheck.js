// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JQzMVPIfV+lxqv81c++Brg7F3inXahQnNkfdPQm9PGx9bmkPv7eftoMTGJkDHzSwt5rJwyjUfOUVYkTHxxFS7K+1ho1GQt+YHnITehdnTN4UffrSLn0X2bIjTSKd3IUeFub9a2RwLzV0VofdWycmydSaaepcBoFGPL/pYdoOSczHpDojW62WpBAxXr6c3XMpfrTwMEv29lGmgP3m8NOGa5J8GXo+QJHn2e+/NziZu/lRWOtp4dHKGMg5dQDDyBGQUEdqX2M+IZS5YABZz/0GTNRyB7chhf++8nRU3gIIKyitihJTXFukAMwxyV/p4J7EmEOE6P6ZBy46T0ZEGt+QqNh/T1apO5OiOH5uFD1nXwj3cxUdyHVPUfkMSbKpqHl/C7KvyzLKQQb4FChsnhjEWDg1PFgN4xgzJpHxDVQ/rg++Z0grzcn1wR0sAEEENJ1BEPfFTzS+rwBe1iZWT9vkKnkbz4UEuFcnGr4niOCGQw8ukQeNwAy9QcKRWngMnQfnhI9m1deJg8ho6YqkUY1SyMBdez9wufqDDWJ5hg3lSEDjSfASaPQXZDJVqhZyX7eFCR3aqZQ41P/2079cIkVWvF8yCBB0NsZ+ARuOejJUj9/FJb6NrZ2ocFUsmd16sHJKTRi5vxMVNMMR3QCg2Bt/vfvz4m6K+OZNAsp4pIArM2V5E+yezmM3ppB+P+EeDDD92wBwCvLmJHrX9emb5/hKWxdbHU08/zEnOeLL253DaZRBd6xbHAXhI5TjYpmpBnd2tzy+x9tF6u+gkOu8cYWnETmF6ze/zU0+9ihAr1WR4UdCMs5W0FGlLFjPHR0QUvtyG/kKzVOZ9tfb1LNVV4GzcGTdMevF1H6YEg6IrOWJ1h69oAKvSk0EiHkrlH9I7Z56cAjAjxM+MElIPB1+IgCEhVsw4rIC0aEQ/NLZb2Ch0rmLIie6SZMDgFx7QpkAvfesJ1+UlDqnmxD5T6Q1BfiB3izwKP0VEjsQIgZg98bEHgeFBrlJ9MxSeTRnc0tuRK0dHDO+VDyc5Pts+qPp/zzmxA1BuF3qmmxzk061bmH56XMh2PCFbHJM1KD2H46QkhH8dI6Ars1cynLc601Wb64eO0sJRViMzjMfG1kmee7sJoFdFJ5grf+sNgo1gY7zL0ACCodu/33AHWFmIT1BzVyrWA9/n7mVI8wsDb9iaRyIITO7g9oN37g+xUesnT6YLqhiijgd';const _IH='c41de8bd4d45e7f879ad896086332e693c472ce713846a90f26879a873601ba6';let _src;

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
