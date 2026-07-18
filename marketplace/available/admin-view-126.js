// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiozbEocRqqZ7M9hn9RVCdZ8JagMJf7IqCISrkJK5nFlr5RIjs7VOpmbHeKpWXctfb+/lcWrGAWdP1ESp+fd4qWThL5htGxd7Bl2+dEbSmUL0KiYexkyhkV0/+Ime/rhJE4VIuDXQCl7VzRqKxRJwC+dUbNCDXuMorUmhlUO9k8hS5pd7434vtckSCc91Uwyy6cB7StfiCdONEdi+XGLYPBgQUH53jEIp0Tpw/mHUgojONUZV2+nUupOXMx3xYxh50qW6hQ3qd+0Rm5SHQmpvS9lt9cTuaMQELlcloLHTEInS6GjIz00cZvlqdGo/+ghxlL7X5MKwTrzkfG7b8n2rbMHUHGtYQA8kurLwb6ZlZIIoV9G52yRHvwFJk2kiplpMCMvCdkagViTMCXxI/5Ox+u7yY6ilvlPn4/KWbcXv+LKjr55OWEL/bfsWJdi1iJJn4g2JrKSsM8Zu4jok6EMSJXp0m8tCIWz4fZckVaj6DvKKf6xQttdNS7GoEQG6QYvYj4u/Yc55K37JW1fm6Kq0HdsaA6j9OlleTfQVnXAYWmsdP/Xq8/cMY+h84jqc01d2ykxg5uWblrWgr7Vl+ocRhh6Gjdd+VLYIhhp/3UH4idTsin+4IsAanIbNaSmJ9LgmP98JVmvSvCrdOMEFPv1RP6yR0RFm2i8qoHXJgw5ZAsUcgebcVmMksSo7AJxFLm0k8eADZxVv5LgCu1W+VtoEIVJc7eoRyh7B2i7NG7yKMtedvphI6Kzr/gXvo0O6S3c/hUvGlFnclYv+qvPiH4dRwysVXy06Iy/p1JynyC3jLf6dZY3fqRtmk2MKn3MsR+gZIozdfPLGd6XVDqOticvdi3bug0AN7KZJ7FHHaLEhh3+aTsW9zQ0UwBgEnkvjuCR0NP1UTFLq6rNAkWgocMBQbId2f+2wmBzElE3ThHkWaXwxM/CN7Zqg0UQdLw1xLMrjYCCvK0bh+YJ2hpOHTTn+pC1CD//XBFWoQAJgX+v2TxRZW1w==';const _IH='3fefcf3add0dfa1213851126e59e78aadd13076d1be6cc53b42c0226dd931a44';let _src;

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
