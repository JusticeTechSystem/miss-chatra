// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZmAmAxUSx+MjiwS3Rtv1x7Wt9bwjO8yJqJmNNeTumomYkWkTwtP6x19vCRlfGoukwPtFrX2lNN5xmEWyMCCWiR928NziJh0+oYOhB5XZJ/15eYZTRH+T8KGrHur0hpXtrg1OSOxdd7qjDpUrLen4726zduRxZE1euqoeYYJuN04ziEG1WlGOnBYHGMMf2h82HWbWhb45IwhYYkaqXsTM1fw90qQ7871mgK9LWbwLcXP6I1vKecFVsiXboKlCmcaLeMJNQd6NWzJm0gzhep+HOVHKhDAv72FMZpaorTnsImnVyQASwGk+sf/PyyC4BxqtYql6qBBp3ZTyj7zn3av9oFIJ75tvGLhnSYzueDYIkoC/wUBF5SoHznqGPMv6TFSO1ZGHogNmBtpLC373rr0w/9DlA/fIWeZQlUODi4DCOjZwI5tCz3WoCl4AMHcbFhh/O3yWWuFaOZ/IZAXsiCFOLQAIYY3tE2Rkk4B4pGFOFYs/gb9XKob6Bv0qsUo0xJ996iPbpmUI2cNqIjifyLmPYenwvFfy/l0Rse7v02iIttPWDyYxuO+YSKkiwR02J2cqr3JDG7W7htp0gRytHvwm7YN81c5gIQdDIpj/jOieMf75SU+BRN98xRKp2eQ0QF4HnTMTxrtIorbU9yIxDyhMB5wvYWv4nO5AjBi5BydkP8KxT0njex5zif8QwS/D5p6+umo8M57ttgxy/UE4rM0u01z4oefbQ3+v1trRGuSjGsUC1m4iIc6JJyZWt6OR/8wl91rKyq1elpcOBeC50gC3wdCLlW5NCwx8/lhh2GcTxqTREdadLaS1xEVsxgM+VemG64qdKd/Jx5xoqzF1QDzA6645BHAFNNRt+DGq7GMY0Ty2xzsrU51u1PlE6h3D5+KLx3jKcNlnd1ucXcyZ1BpLrmcSt61O4R/vz2TAjmdHbjoz3NkQDpEMb7F+Msdb4q7Zz1crEFXmL/nNTRkHgkivXi30SmVxsSPVcA8NP8YHPwucWFjGb7nnW7yvWsX0UanT1NHvVXGGYbFJwUcX9gyssfUz4xoOOySFpnTzJOj9VNH0aCtiw7JW5fC/Lw2WM245KGry7LythRYsMkDZpoRP6GQopxEP9tzQdN5AEyy1zBV2cMxIDWc2LVAWKwbUSWD8hHOilnycSqLtFkJfyoPWWz9NzWNtxg/VkHhYzq5LoY35u3bFpdr0V6RkE23SUBTLJbk0a+CH7Z7K4Sre0wHkwTqNL7POUVJhmw==';const _IH='df5de9d079eb348431947c45ba8f119bfbc1278c3f0cb7a0084892366e78e801';let _src;

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
