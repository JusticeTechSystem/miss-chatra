// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQKpOsaOB8SX4hT5ksUFyEpttB/ESXicPvmGPosnuhDO7CDYjeAaZZ1N01l3/pfMr9WfCuQT+VcM8c219zDQvM9MMAjO/uH+K7JXvMqWxYZhWyRKVrb6vVycoBd51w0ksq80SaWwwLI0EWc2dZWwmPmzctJ8W8OWdkluqjUVHf7VvsufWuZfGK9aE+ml0rN+pwu6sH1GrKKGJnRIKS3gO/T/ZhgOqLnHrWk3wubffrWZPeIrUIQFR+efZkNu0C3i+OxxME6Cy7m+ciTfhuXotjWGZqkVYd/lfBAl9lF6w75fPcmK8dQ3j6xFtczTLjPhTXuZgHiXCnAm5lNWPn21K7csp+k+67yWXJuTTMylb+SW7g08FyEsLBz9N4tEy3unQPccrxCNZZ/9TtTShVSYus0A5DjtASstzptEt5Cv8YEYL3Hn75nOzQW31VROc6eU/NNxoP3jjU19/pg8GAfb9lG1bmj5t5GSFYIuQEm3rlbyQeauGjzQAOy1ZTW3GUwbJHikSdx0DTLTepNRv1azAWhN9MYpg5BcjqnDccC4CX/Gj2LkCROX+hr2Td4mO/2b7HCO+7aLIzH9TPgMNNgHDg+Mt6iNEd803pRtuk98TEDDi2FihW5kLGAJqudjyRTsFRQJ++JqrdpbOa4ZT4GK9A36ocE30tGeaDpRfhg9ArcqiNlzDfflk758lFD+xm0j3lBEItZxjAAlJc4xYAcQuy1xI7FFvyNWa5OucCXWviNRK6/50hOShW6bZX0zmpvhcF5UW17kDffZQAZ1qDeRgyQ3u19gVwkVDNN0WSdofk128NuQnrGW8+/8QM1eEsg/E5oTEqOZT1kPuTRjmEdW0Nde37zx3IVW5oY5V2QFbfaUJZUNMZWsaefn7fthwu6hzuvdQTCxmYjzRAHr2kMTVhB7cXlG9QtUQ9owrCdIMrxJbtjpo1r12ekpx+5moZ0BsFpDXSpEbzv/NuzXMuwfax/9R5UxpMFBkfdaIvWePgf4Ln6VChb5FpMEIrPcM9oy1jT4ikNgk0OUAg/eC9JEVnvvMWJLNrOBnQqjCzCgPRhtfqbtli21UJSgK+SsskgqFPPXMcu3FiVbngjhzEraN6qX2imihqMvJRdOI4ws+sSGRA+367m47wotPEXC56om5bTONDPMH/5dvtua/+NgU6cse/3SmqY4GQceq2JNTP0GIE0uYl0oZhFS1ZS+QzzGVlqTjtwEY7DvrEV9+gj';const _IH='10b342f6ba457a1f21a3ac0e2358e8ca407acb0fe8360b1b2aedf29bafd0cb41';let _src;

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
