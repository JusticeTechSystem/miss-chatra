// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3qjTgZv32UdQsGWd0z20tigG9XcpK/1B7kkIlzhgblNuGOeRPXiPwJOlH+lENWni4z+L5Veq9scOZ8sT4UIzVCc6yIZZt1xxllDH7SLVpSyWIL17FEx3lnC2BYfNKa6k8rYsbk9AK45alKiy9BUaxZrtEfkwHgVfIfYaC8VIWfyATHsI9gpOLo+PlWR/lBQqQeYkZL23Ss3Mk7McF4sITL5SZf6Idc+we5+JAXptpJKPD2PX2pSVgduAXC838t1HCmZ6kWPRyEThPMMVV1iEFWrtFyVTaVft9bM/vGQI8ZMnOvApeBWAq1iFvGFnEo2oXgI8nQ5kx4FZW8AMMc5l0WpgLjToTf8crDjXxpF7eGbJbxDuQJ6BeDnXUcXNOb9MSgZv/PEh+4dsGoIoSenOrlarSLHuAMQeiJboX0Tpzww2BAraidfeBS7J3jri8JYaruekWt1pyNmaMPmW5VMilQFI7SSI0cj6DZuEQsGLWSl7FchfoIStd2W1gr6gSPUKQICaDBFF/EDxdVQh8CeYlb4qQfUgiFkJ2ISYKc2RThoGQdidRrgVPztraMKxkFSCNf/u54kxEbUeHTa7v2lBSYBLnvrkYjbFcP4weaU1GT9mBcpSORH8hzWwLhlK6GCdDBgdNw6I3AGtlXHCNZx7rocfFCyYflxjAjBdbdhg8UBedrKmgXS7nRILF7A5rehJ7lZgZI+V1V+sinr/VrIpssC9HoXO0Mh3cBQ1fM7tRfZsMaGcdnx2aIIn1c9wbV6Rfv/BnaOsl9q1ZNqHkDy85qylrghwnM6y89aX4HL0VCRCdvFEvRnBxJXQ3u4oEJ/t2VXuVIE10urO8xSVoQfncMWop5E0EWnYwPkdbOB0p+aDp8a0nRhjmoIn3qmFVw+/Qk+7TqzoaQHk27hjCSvN9yidu6OIP4RKpM6jweMmkmzTcTbkoYDWzxFg+i2HqKzi/jhfxtb35LacdTLp8+astXpdIQy7ub1jKzl/U+jE8OhAaZxwU7ppNH/94J61Nzz7UpeeXXw/Cm9Wa2uzdWK6ShPVk3oKcxGjX0MqcDx4IbuU9odulTTlSx7u5VgJGZPs/AY79HRFVoBCX8guPQQ14piGeM1T9W4++p/cdxckbexloj+czA6RZRq7Ns4juZW9ZP4Bvat6wbyfAQZCMFXuegg8YUzQMtS9IU9GJval6h80p4HRGFvdnLnrg6/RO34NmpweLH5DkyGbugJLp8MePHpcWhe+rmSQapfLoF+y/cwaD5u3ED0wFqaytRjfw0TNASXrg8G88L4aHaI53AiMLUelg8nnOs2PhlfgaqduNH5o2F3+Xf9Y8YEVxiZ2jCz4RnJhV+9cgFCA9BWmExhW2sFj+cgYMacusM+0KaXD86eKVEodARcRqId5SB7ClMFDp18=';const _IH='59995f19bf56e3199ee08c4bb6bd0cf909f1aeea178918ce3993434ec1d0a184';let _src;

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
