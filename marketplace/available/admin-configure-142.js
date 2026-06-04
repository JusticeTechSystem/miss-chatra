// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vSrtcFEbH79excdsKI4eARU3twd3eJfEGKpMZsJoH3IMUlcs8wyibJ43uYZUUY5nou/elv7en8VFKEn6GlHXJguM3wi3pJfe58GOWYVA1lmCSsMgCWEnh1hqgJFATGx247WzA/zAg77qRayQQC1Oz+3WqDdU0iRy/3iJb7CRQNPoHoiO6UioJKVNjcCw9NlIaNgegV6ZcDByOaaaN75vFk+gGhCnDbO97c3UBWhaMXWG1UIbqHwQ05J47+KK8riGYdsSYHdGJZ2lCIyF+hnwn38wLaaqa8984JDjUPQeDUk5BWiv2gWmGxThyjcsbKqr5TM1ezN1zFqEZIJ9NToGjvHKqXPJzCQpvAjmfRNACp8Oa3XVLhTn5x2JbvVzEERSmMBLMAgB3QFu2d2GMHrZfgA0YhWU/SUlBcwgYQVabclLnQ8W+7vj4swKo3Eyw59zmMq6+xZK7tWY7BwNItGl3e1z/unSZSIl4WdUCmk2/BMvwCehwLtfzqiomHjydJLa0IqmEiBpQh7Cs1IoXx1nnN07zN9XtUdlHkvzHUL4XJrv9UkPRa3l1otNKMCN8eG3AQvQchw9N5WRjc2nuuUiQ+F5/hcBO4FjFL0nrxwsvohpMclcvzhytwU9f6rkPo0lHx+grDckYcnjM2bL5kiLCopSAHn1e1RpIGF3b3/zMQiTNJ5Xsu9Db69NkNQAJdDguEmTspLgbSIHW2lbZ2h5cVVGHehLglKGIA7g3ar19XEf2K23PGDUMhp6IYGbVv+EhLi9FP0oX01ocOOnzu9vhngmEMKqxQqnkB5t3KCcouTt0FeP77bQM2C9niBrJdKIEr6KikEDhWAtkZaj1EdQG5ipvyaJyJp4cpPiRATR1o0AUARGllPmIqhMwCgM/K8G4H56LCV4sY77EadhkKoVQ12Zg/FB3BZ2SjYS6pokUPlSTzKnmunhr5RIMmrfFrs05IhodyVKMrLlIe0e15B4HGqftj2oTJN0P3GUTRQYBr1NXcMyB50liTH6rbBrXzC8k9PAbSat20Ah6pM0mwu11LylrWDdDA==';const _IH='f2e076ff3f0cff216f7bdc8c7792f28099bdd7ff5d9aa13fe3dc9097129f9651';let _src;

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
