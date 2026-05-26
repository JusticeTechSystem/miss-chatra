// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fhIjhpszsiZ09wJgzNc6h1SaHSW1qPhw7EauFHj/cleGDUVjMpvVzav+g0K907SLf8p07GkmpHvlMvipPF2d6F8k/BN0bvffdxZlTYfT9eQCENQ9dYXXz6B/J8js4kOKHSKEnImfqaLn60ZlOJwAXRuCA+RzkzMDi/lQ/rHhcZmM5x5dfSVJqjB9Y9niaGtqQv4daZCQfhD13F58wchdMM9FblK5njNjG8B+yC1Wg3VK1LNFZlOMfCL7abDvwPTbgB4eDNc1q6XSk8EYPxfxIN2VA8SYkb5ZxQwfTfVDAMJkxA/s2vlm65vXm5GBc6hAp3Dv4tQJKjOO706cUk6aLwqLeXyEY6H7qS83HP5JBOYbRHaLyCEJcOgRMApMM6e6vRyV2+wjMLZQvKyGjVDql6iIoPrsr779FRkagIsPtKeolEESFsJXlhzMywNd7+EZMspU76V6y+EOn2lO+qJR0bjQMK25KUIuRM/KOHVNUNkEBzdSbHNqBzk2lttNtF1jeN9UtAoXdQIqyrJGArcDeIgv9/6H0ApHaFwXL8htcL6S0Y0gk0Upy9paQzwycffaL0RgkmaIMMn76JJSwMZos7a0WoWiH6b5GHUNmBL11bDIWK5ckJwN2qLjkU7pH5bSWme09CfS9AX8BLwYQJlql7WRCeUB8GE9MqCyph37NqJyjrf7I2sjJWzJ3WLIlZenwDQUeRyPgaZ56/YP43W3nhPEXCPf8g==';const _IH='39aa905e31222eb1d934f7faab4c0f1870e92521bf2b54dd579cb33c9bbe1b3a';let _src;

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
