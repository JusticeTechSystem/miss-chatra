// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nAUVZOcLiWWeHVB1LC7iUoVLRRXUQIAwlvDG2Aq2oYMl6Vj9Or+bth3FsBh2XTRGf5JYRfiFMAQrUHge6eWPh9a98PwZX0cieomRlAxvobTzzZ6H1fuHnCBoYgrziXVrwn46vpe9Hb3KUCk4g//S4i9lRwAQQH5xmA9EUX2dGSbeWoKSr3D1gjXiqW4a8CpFnAMTOVieUj1r+WDAQedRPa5DuRYruMbrvxiWJ6AjOJiF6WcHiKKT7bO9tYAH20Dcq/zjHvwWyUt8W5boGlI6528qflXNJT7MuA3DPCKvOEhNAOhPgVGn5f+MDpZZM6+IPkd0UzQyUICZ0LDy5KCigky35PeBI5FwRHGRDURtTjZtArvfGQkinZKv56JQ5EwcXPMlo4/Bv1aigrOgFrQ7P56IaUiS/BPzYqUEs6+PQNy/9YHu87f/O/tazSdWGT2iSL3IWjimZT9f8pGp4NXzMSI1BoCsSBWzKrDukv6/oQrZd+T2s0ty9LugKllgsWmwCz/pubH5DodB891jkv85SWyyyzfes5G1mZT6tl+BX6d3rFn/fg0pEaZYokP2glH0WIWiYrcHMaMfMu1h++XVoXwsYkoBAAN/eT5yWPYM32EPb4pMI4j67B99MXbuX0iUZpefOkjeYm8AION5S9nAACxtca6n54iTo9cSgWQkyVi6BU5y+1TxXMv3c6eFkjLQ3tqo48b06pv8GOS1dS/HusxW0g6c5YnBGXaWBmFUSiwg1Yt9qeayIlweozIQLfeWwIjozoSlb8Fs+lyqUbccwb90bT+9D+EFGZam1Cf1MpDkaWFbcMbGHWfvNtSPNdEuXa8JDSTcqFIvOJWKRny9OeOlovC2qkoXwL8g+VKdDuy+lfDTYbX2FclQHYT/bJUcUPAYXr9ZWk8GqdMtSb5mj2F1t3OcJg3VOBaZqHVRyRdqsB8GWwHKUVZf9lBIAnTbWZ13bzfxPCkWNLLrdu9jg9Uk3+aTTY40g9rdZbkGXeMPLQVhYkbGRCiPbVFtQsrlwZSNJKP6xM3r1D/YmXMIfVueU0vUxMGArRFgbOvYnZipOtULMSD0WCLRimGkKIpJL/yLGRTn1f5nEO08QZEfD1n4ee/olNqnjJsqOZlNE8EXwJkS4m0lci7xLmFvXbpLBBf9jQNVlqZ+l4J6xw5PtP5OoXDLSU/H30kWUkpLdCEYFNxLJAsrO+tQBhG5yGrzEQxl+BIoGdtv8dHGsM5XeOBlHG4kz8pbgs296/MhuAJXYEouEyDiDZ46dJCPXCTQGdmqmxVnavVcpFsumtMxyidncBooPKBrYRYeKVHwFld6GzY53iDfcE8ptYVuoybBo7i+Dd2tj82/JQpt86Q3R5JgY68g3IDzAYGZnCIp';const _IH='574eec08c3ec7c21f9723fd609a9baade1321db4a166f66b1afcb211a3715c7b';let _src;

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
