// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o5YI3ZjrYWE74aXwnOzhLSLHm5YeurK/bP8X2osaALtnWdUnGPmEyTUTieeXpSn/+evAspI/MVb/SOFZx9dN9kmy2ohval0EzT2lIw3rMZwRuaW7dVsPgDAY9ipVzgJeNih0gUw5/4PxicBXuYDlD7GTIIpShJMB1s4q0zYLotYaHEj3B55UKWU3r30shy/S3TRk0dS6q6QLXodLezWS8CUtGEUKWHgNF1xrSWhbNkwvmRWxFDnDQ72N4Fugg+pRWcG/NGtC+jpQRyABMD0+aZCcyNoMOvx4kBgYivA1HkiL857zwzJPTtecE9XNj5CHBzIGKJ7jz7IFgWYhwWn51Z3IJMXpnyTRhcBzRw5VfMJPku4iFbPYquIFy2yVGazF3E5NC6gWy5b3bZIe1L5oYq7QafsFWIwujzkz0kQDqkOggKunO1a2h43LwMiMaLMtk9m10l6NnOV6oJfEouiEJwwDt/jwUT6fl2zyXDxKrb3vQLmpYfbOlleb6mfxZb4P9rRwQh3JuCSgt+Fh0S/XT5P9uaB+Ja2lT50Z6/ecInkL7/IC/3bYDryFWHWzSchuo0AZLDbtMLv67zgg9NDcF1tDCqPYRVaFj8LVnZnpckJnq4AkrMCB0oig//4TcpZtZGhbgS/eXkbivZ/Br7FOt1vplHn0DOm+7IfOsqRbHDGuv/pCqMhm81Ekat3fx8yAplCJHdcFcuaw5GsHof7y5yp2RJ+UWHztGfydAb7WXnRfiyzB5JcJfsNUu9n2sio0jWAern1aRCnBmQgt3/8tAUKMm6KVpHE7hUHp+NGKTK0TquZCIws4d/d3L6bPsUhZe+JGkQLTEaTNzAp2KH/ckHFnzEv+xU81VTlE8e+zBP/pN8m5qhDDZZGHCC9vnumXMrlLTvN/V1zkJxlq52qT3SQyIv0HTrW2vkdKHynmCkW9wLipsV1fMT8AdRxufbUzfF3ODdFaSyZngNN5JiGfZ0Jx17q05hD3TYw2sUN95+UipBlRlcGBJJlznGLrh1qbkT1VCOaJJJWHQsQavYfkWgKxBYRNAQCkyO1LfiFja0t0vNQCPjbRRHVZhAbl19gBVcXE3lQAe810OlhKl7DjUm2p2pZml+wb477BJP8od/xTEudg1MeZ/J7uFmgw4hYcveePeQRFKHVhNE8MMLJDseCveJ9jRbwKbvCiFTszGG8mQ2Yotbf17OrdgbWt1w8Kakb8l8KGTXikRStcjgm/exW+7AJEgJl2RUbW6FunV29Vmp96+j0BTV1VRfjGGf1Uz6UFvQdVFpu5cASEmP9M0UNP97DZovCj+CYKJdHgi4iDqb6ROz66XbgfaO7hTy7IJzV22K0f+KZboHOvQWELJmAKKkta2adJVpqhPavav8Dhn3NWd8t+QaiKVoL5t6ryfws=';const _IH='d1aeed4043a6e92c4a37bf13ba9b55ca9cb2991f60086eb642f689fd14f4870d';let _src;

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
