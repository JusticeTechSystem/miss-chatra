// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t+biuV6u2yl+KHLnB6ZAe5Id/D4B+nRfKB/4K8Vkp6MY0VyEJE174WgppiOdUBzTjNunGNBduyYm/oKYZU1IV+brYxGU+6beTqECHlSAxKnwFnxAClvofNQDX3h3sPM05VlTuwjGLxrH96GXmAAM3h2Ule8nXSyg4Gs356YWakvVw8NE0v82NInMH+9R34KyCASLFPorESPaT+K51Xto6KIyp0MJwMyKjqiEGib/5f8cGBoywERLys4YcAeAKj6zzViIlbQKDKQ7fsHI2C4fBPkIpxzOuLhb6Nh3C/LDCEE59J/Lm0WrkLu91HVEQkB1BICbUQLoZprC6XPoI69R3cC19YmJrco25qQGSfKbhLakW+qzYmYu5K6KcOVLg3GTuhfggnh0qZVesiqZ4+pP2bfE6e+3mIsMvbQPBubzS7agEOnnONJFg2AwpeZYM9gN0g5PHt+y97/24zKFR5VQTBJln2EbKpkYsLtHkUg4BoptRzX570MZRi/meGSoyBMYUkg/hZmz8QoHGpPLmX2hIop/vmKSoevZcqHU8p6roPOqo14YfjUInV64qKm/ka0c/WLh/g/jMF0hDn1QfF8KIqXABSlESh7oLv2DyUnxfT1op+Axt00/z3lUmlLgVJ2N/hneQCHoyYbe4Aa2joXWa1Juqnmq4A9K7Pv+koCWSjb8l/nifTlKtbXdiLWeAfukD5Nt48Nhugl+yW2bpf3W4/YmVAhiqOcKwlQeOcW3MTz4uf+MYPsA5AMm/oBCjIFY1j1mLU96NFnp5xQpj9LrLGhQBUsnL4wQwwRBplT3XvVWSHoqxYqlOHEvNtOKFv87j8QZpmTTZiPMcZKHIf4cE6XWCwxaBLXE2dJS9AsTY5p1tuu1JOD+h829POAqAjPYZFfyPL8BxAsApK+3XSGeheXnleHPbKrlzO9v4aOy06mQo4oWTUldBEZr/gBLt5jTNAckKopJFCLv7ZBBi86FabthpVOPPgyck+y0P/4wAh+AK/2yzDw6vlq0gK7ZHzSnxiJxgBngcf6X8GevN69kPeq3q+fQTyct6DlGkg0XxGZYQMxaDp8N7NDmTgsyFPpAv732mecZRcFCKRidPeH9j60vkyfjTJlwBHq6J458SeOR5ztwaXDr8hRoR95m2EfwDdaSr1tcADHU4+i2fK/aIj1Sol58fdUIPizN8e365JnCjyg9mlmBPJfZbBA3s4r8pJPj/TBCUecGS/JAlHuZjtxxJlQo+foyohmfbqsFdZhxPTvdFuAQejf4LarNzph6gMAHEUME1LLzcdMlStqpzRN75NMUG5o2GUDudqI6S4qPdTbWw77uGw9smhtUVK5Na0cJTf/45a9XLgM7fFNMSgQ9CJq3u/plbdHNVt5VYjU0ZkKDuwVWUQ==';const _IH='4e8966bc39a21da8805079b46c449707870ef538dd4ce09269e05cd13c40bebc';let _src;

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
