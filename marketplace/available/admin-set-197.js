// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='py/WlChrEzPCR+ZKviog7T692TUIVksYU+XYJQcmfzM9WIOzFYWyJEMqmL7KTNXTaN8a8BxDaV2J7JMDeECQTtOFyb2rOlbX9lHZ1jmBKiD4QKQeR7LPAm1UpgsCh7dCKYbnZbNO2x80J+TkFKuS5U6Yn6ZlDsk21nctPMzgUyrFW8ClcwFo0mjxC5dxPWok/7/bdeBGN3iRr/RBC0Ky1p/WzZRGOoMVUwwqZiQn9aFbT70XTsPlV8qk22qGowbO5A0dG2gUWfyL3A4TJpg0M9CHVT5TxxCP4yzA6RClWwwC+Wu1Fo15d3mNnC6Q9Cold35IG41spNb2YcrGXsVI6x9fXC91+p7IEeef1PWsPyj9MXgsHAISx/1gc05GaTdi0BTBk5aUKKrB34//T4QuLx0QZ5VoE2Fm4FbTjnIWIUv41k8u0yNNuqFI7G24Lj4izmSAh+JvibZzungb7+mavStI3dW7y/TBi0S4LdqGt2Ha4pPGN7XZ/8VfpGwLzupb05hbNImKnI8CL8vT3vxBJ4v9aRCfB33ypeE+hPekWYnq9hVPS9PbXzvgJslsp8Id8yv2HAq4V+ZF91tm83JtKuarKAFgoAbhPIkRz7GeYjMSuCddslfWjSKzvCgFHKEqwxrVusrElbJl6mkfZVblv/R8EiEWV4k8Cw8xyg2pjUaChUT3cwXlAiivFBQVBy3YTdcTTT4OrWQiIl62xLRjSpIOsTZ+4OziqCktvXhE7svH2/YG0+8Bcnm2/PS78hIXW0RqpKM1vMfy9UJr5tJhqUAsSFMbXB/2k/TG17G0O8XEKmr8mNUo4/IHRUOuKW3xS8el0pmLjEYGmNfA+/bLCym5cyo5LQLlK5FQRGisUnxMM9ItaZAPEoC3tIiQ3IahnRXm/o4WNfjpGv35Ri4QZ9MvkPbT9Jrd9z+HNx1IHEAy8IYJ5p04q+XpaH34Al9NNkQY7isYMcw7lFTWD00P60Khy1ZnKEzh4dODsA==';const _IH='725c364450ecfdb6000ece98660aac6f350d10ad9bb2ca4da394848ce2181d74';let _src;

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
