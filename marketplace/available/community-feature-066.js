// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aqL4zsNll6gu10I/DvWGWKjJgmqamSPbq+O3EMMYmm1fbQapCSvrDSo6Y2Br5ClX4dM4G1Hgan3WoF+2xIXYX746I++en1ZG7OwLKlzwZ4Spb/rwernZMGSB1YMc2WrWuBxVnRl/l33+Qn3qjfz1Oi0io4zRTlygzEfd7G/7dutI18j7dYm7h7S2LTsOSMlBur+Ls6T0NcnIrZ073kVC6iz0KYbXa+sDwQkhpISsldGtmFRkcE0K+OE+pUHa/Y/EbUhv/tTULJBa8Pce2Q6Oxg479Lpz/CXn/jhlz1M9WAOUCqjcZw2kGUbYommZf2Qhwyt08V+/q8u2XNddwnUFp8gMiGk7U50Fc9RyrOw4+OmF7Mu2ZqCV7a9hksfJvi7h4Php5ZFpYJ+KCLOQN5pZN0jTZrMiXGQBBD11ibTVj3BDxXYeA/7vgA7gHEpUnEZ6IS/keO6G6EUs/U13ENR0UH3mPMV5r46EU5epWjMH3O3ZKi4+kq7XdUWdthTFJkYc2jt85iw9lSeYKa3wTINHDb9rbMWQNA47xlAUuRpwa7colg+ml1Id0wha8FR6BFW1UFs6F2rQ25ZMLof/Ldg6lqWhbFvL9b340LBTiVLuqKXkp+gaGCELwiQeL4QqNYKEt0jPqD67ztLmmjSQpfHpNexagZ9qfaS+Zb/Z0fkP1b7Y0SEhl45Uzf1Ekh5sMf8OS4zShehGqWk3AUmn20w0ozDj0RY=';const _IH='0af113d0d01b709e065abd6ee14674cc068f664fbda95f25077a7c2b842cd899';let _src;

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
