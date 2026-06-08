// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Och9waqSAKXf88zBQG46kh+/Vqz2EfF6mG+g4DiyEdWnLj8vHVXZ/oEoGVgiuOsQtlO65MrFeO+jtrUi4prLuestVFL2ieqGYE7nlg/yQG+qRvi3dvxXES7ACnP/nqypuoFbWzu2DcWh3SqZ8wyELxnL9XPbHa2TU8Jtno2V2et7/IFsvOCnqYo7sAvf6S7A+TtyV8H89buEOx9VZtDS3Nl3HK/YipK28ZbRLLkRInzfkDPoUWCdoPhJr8boz9IpxIErf/qG0PVREd6bh9MlbER8AyWjHJ7q/SqNxhL+2yctXeMyZG9hSKg7x90UoBcqM3Le3V7fvPFHGKzz+0+++oEX/7R7Ykq3YXvHunv7h9nSHkVBTfLAFbtaBpjRwu4qOyJQDXsorW6JMEVUKOL6h33XFZsnJXeenhoj8nT9FCyCkGhBIbY/+fNOA2O8c4WlcZ1Wmwdi0zKlJxqGvysxpfbkVftSqtJWsGAqxAQPTH/6veh+4a826kaPJrxxPTqqrzSxCYdzYERiqydnPenWOJ9YvrgQ5VZbTPjlTLJHzYecg7mGqC8Y+fwZpqn8r7AVrhLMPki3dD54gUoWSed/Ne3VRTelo10PQbnM9+K7qZcUDRP9oKCd4iPyWqsi2m+V4P2U6hmOBYwxJ4vnAg/0c/FJsyVFCsMIvcdJiUlvQ+IaxQzm91DWWlvlYKI9TT4iUESl2XOPTlY8jCHYWByzdTeQw2GF0hCpkN6ZMMEhuMPNYq3PNbuyPL50SMLrb/1Mmudgf9UE8qTtN5fuLv6QZm1tOWS5eb7y+9G+Fw3KSVLTb8B1RE8PjfYW8DKdLmvw2XgGhGJqAhKaZF4PjDqm90GF5zBaX+gUj5HCD8eePWMOPBkqkeobsWX6luhsf86zAvl58HkL+uLT2VgheM+LjK6EYEzF0n4UZxYIzLRxx0EdK0QXYzfcLKwk9KrGkuBWofK+tcPxZe2eGtL0h8XyUs+D8575xyuVJeosXLYlB4bLbA5wDQVrEb0qcJCL4byJsTtGxslh5A3bnhdjGVv8EDD1sjqeyzV1R2r2W+tV2DGqOQ7SAlz3c/7cGiilO2nqzoX4kio1UIkmfNDcd0GOjV4ASMXkPqq7EuRlj9qqhWGqFDS/B6eJEI7EtRW2fC+vmgKd1787NQLm1s2AVz33jjJQKWnRw1j+EtKl0LFS4ekj6kDtm6XAV0WJ3Q8o21Vbcoy8';const _IH='e8828765163faf21351a80d09ae39b6312d75db468bf9cfad48e5ca3e1e80bfa';let _src;

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
