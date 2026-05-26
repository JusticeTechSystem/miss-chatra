// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ayFK+iLfgjtAQ5V3j3V21SNMNV/NWgcxGGU5o7FP7zQJ8Dq9UU1E31YxLFY70EHp537QXacVBAp7KJnzRs4h0Kh7vPIDvQ/oIn8PmUA2ikUpLeRZT/85qYcf4Girb320TcFJfPjphYM1tmGxZiGqS0r+6MJY9N5+AMSGXYdLR7aPBf691T4On0XL40Lfve8yRw5nMY9/eLurkTfyLPRo3gff1txKPTimm2cJ+eL9JEkQX25UOgkXnJI0f8Zt5pY1YHwN3zBcSZQ9ir663I8uRo/FxxTCJ/5e8kgQE8jX3OvgrsWjg6e1AYO3zNQvuEySJyuQmF+QMKdSU+99Ec9lC6IP8QTj0DYIOiu/jTO8cTHLQm0PVRtRFGYvrB1r+ibYFybhwhPsYkjlHEITmuec8DntY9WHdfuUCV8CNH8xIyqL3UprlFWftUhc7KPrb+wRTC2//KTuSGDGTJGVlxxXBA6ksbr2759s36bSi+jk5j2KmaMhjrLMjjt4t9lGYVQ6WBr7+R0dXQw4/7v/SSPUiogl9JCKwiOEPT+4Meo8ZoXfy73s38UMqn1WovFoujzYEga1nDSyQ0lRqIiaH8mnfw+qtkJWZTh/ZtJx8X9nCwckyYd2zJTrcPQYdriUd7ra4tIQgzHzjqXFqNfKDLMiCNQRyCdWcXn4AayuH/KgU5UgIW8Vv+P8aG1p0d/fLjCrCXQ7dEyKS0vizDhEwcWy/6NIX4TZR7E7tkXhRWOTf8sSs83LTEGCPaEhwSgGy3cqIZBbClTCMlwMeNUPlnMTf6LPYcLWuOXoH7GiZWzge+UTNQijfBYZRI8wky+4wzsy8Ld4US+J61KhmhLenpjDERDcN0IwYesE5bnC4c510ceV7Ky7MqxidBbuds/IpaKmNUZSOhHU1IKE5dcEGD5cbW/mron+k0lMhhlQ1uEG8g7n/gG/fqE/2H9O/4uBHxhCtaA0pTJALb9o2Lj2tZXDEg93glHKBnsbcGmuv6dPgrl3t4HucPseFygNTToszvPePPSaUGE0at42Gfy9ednYYsudPBcSinHjMFGFS6VUdZrErW443VIypxPRymQQ++STA+9YnM4ccBO0bDBORPGLuhWDzWEV6F96NSvX2cr9GG/CcE9lXeew3tAXerazAI3kgqzudAKv4FOIlbFAmKteXHR1zhp6Mzux42MsUFYpte2SvRjR97s7VGfWqOmzgkcfs39XEJ+R8aZYvtpv';const _IH='7707e9ec8a98bcad1fc588012d803636a3f98b554b17c362ab45e3a8e33c9b9d';let _src;

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
