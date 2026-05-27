// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ic/DFzB8KFR7lOAJSko+dpJ1wrqxKFjj7PaIWnwFgOVIxXuGrv9tYuPeVtHUAcIlw+EttJXjTU9WfJoYKEfAJBuqZgF4vQNkxC74kp0BS+F+7BmLNlLlnsJupN3SDbS40T/nBHL8iFcTOF04a/eEcIRHT6Sgf3g1FlC7vvoxD++CGU4zeLxpzW2ylzaDHqEU3jlkvtVfmGX8jgsFnPQg5TzKrJtBM2y5aSnfgpywsqlnZxyZ6MYFPcnddjgwgI/2eKlO6R0JqDiGfL2Cy4J/W1z8cuguVoQFOqUcl6IkF/h9VZmA9aVkQFsJ70fE4d6d0terw8b6AuIQ+CDu6vwrkHgJIWzbLkBPZ5KqlMkgfby9pnYWggo5/T5QFxN9CNXXGbq6BYRaOt5l/HKTcx2UIrasSB8HZsHEmRZ9CFnBZipnso0od24Aizi+7nYRYPNpsXfklkT/3G+OnHS7JsegE/Qy/tB9zCjIC0H0CIjXDXTpzxOx3zjgJWI/6vXVmU89MOP1k8KxxOS+BOK/KGzBnNzrjgj3NYsi5QMeRYEMTL0AmufsBOV3R8mw6TdnsOnrFDGYfF1NDxtsg2fpzLZeZJ56IdU+CHC8pikn92BJQXPJKF274wBQ0uYDsSJLj1tgRwmCZxdV7KnlYU7Fma4OZb6hmiOVvm6ij5PbSTjLAATyVW6VI44LBjBo47y0iSOud7Rw2nOOZ5j8ddqUC1FU5lBGR8ycwGmho11l4zOdnUgxmHojyBTZkpiDBl1+1s+qPGZjXH3D3BuDOOfD7QoK1lUxV3bcla2MDyT5N/aDSev4ZV0P9O3SZP5qJp4U2A693B5wORKTtsTpOsDZUEc0CfvFRs/rLkQPzRrORzNtMF9Y6ntwN0qx8Kgrezd9MWiARCxGdT/C55urbuhlvRmppKDo46F1Wxepl5LdZneHYEymkz8RYGfMiwWRhiton/UJwK73XmUTdhGf6EbsDK3UKu9ikEsABPcfnEBXcXQelVnGQbuRFEQ=';const _IH='01e915301d6fa45f021e8cafcdaacb0add1199b5a1eccb8f66b9e87bc984bd78';let _src;

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
