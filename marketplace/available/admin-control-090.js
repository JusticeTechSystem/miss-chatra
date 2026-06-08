// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eloFuM4UzgNa5m9Y15dE0WI+K9WVEjYvkeZqpZpNGfFWmq32lb7wcGNuBEKfCeR9aezSN5chaZNXtqWBEaT2cU/ZVQOhntGpVWFEFsEY/tQJo9TbBv8Ly9z6XGUUBzTtQo8wmKZY4HSvpx2KcUP4oPAwJhn9Do2iRNUgfHj5UUPuKA3T5u3zosbVr04UsjxqKbS6h8rVU7oIaUN9Rka4GgnQpbdOH7R/Tp3S/WICrQWxvPfzJjSPbTa0NJdJQT9+3hFnxphlynxjRMFgHVoOwy8tD4kIjCRHT2CIkcLZLeknlZbob7sIrQA0jk6H9Je7i5Gwpg/PjGPLHu2rxNVGhvFHQzLlvAFnIXdpoRO1GTgP7mqUJmq0rA0X9jvy56lF3svH7NVtKyCrfKABEdinMzZoGDTXfNcl4LJSH2tNydNlz3SpRR3VmZLp2WqgJOfm7l2ZsCsM0KhBBHUaNcVYc/sQvSdMZrqp5OMPNEHUu1YPJZ2ULvPnsw3OT7Y7hJnS32SqyqWFqDSQpJvuxxw7wNgdR19UtwC4Vdx/Qbm87Ma4zPA2SD1ZHb71HRTeCKE4c0q3BHFdWGiLX4Tc9PqeB8hHpFLsnH24YqZ1ZmhK3dZ16HxttN5sCzsbczgHXzqX4Q+rnlD8+DGGbHrqjvFIjZ9ADQn14bR9aa45vFx90gBVe+Ydm/3St7AwOD+ujpWNocmD+OcjwVGQMyP2W0qqCo2iIFqiHyHp4lZfXlPFlZ1A8Tpsv5gq5br9Hdc7BjCF3vwFi5+U5Up0VUG0+YuRTvlmdt4K1uDoEtbuH/JHvbXLNz5VzqIwPQi44zq9zHEfFmF6o2dvKl+DSFdT76LMpYkRq8oohBNYpRlPCakISqAjudl3KeKVZy2cXLq71Eqp/iAGKxQSVqRomiiIy5bAAqL9dg7AENpT9zBp3NZ+NoZP+XBiSKzdr73ZdgjvqtFpKznT/P4jtVfPjRFhTsRPwPfPhFiC7bKmKsH1jKx4IDExf/N7BCMcydddOXy05ZDbm+SOJA==';const _IH='5802992f01f4c76f5ef040cacc7cba062804aae10cdc5e02765786d7cd2fa8c8';let _src;

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
