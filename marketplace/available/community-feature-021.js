// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m3vHsFG5qa7aNTstohfSP4BAvp4Dv8h9Kdygqm9TsvZNyJh+/CguVruWnSwJr1NIqE/YMITvNEjMO53LmTAHN/xgZJYGgZvmFHwDytLy3r6ideUw0IfzUlCAwsHCrwV/h3PD4lzarnmv0HBacKEq5Z+1Fkzk1k3SpJUKK1ZQEuhEqjYzPUt6sQSIs4ACt3uqSco6Cf5Ss4Ie739tHLUUA72xl08/Yf0HlGduRhMTKcIbJ/wakoDdQzcZHZmH6j3V2Pw6nRFojm/NDOu8JSFUV/5/NtD431ee9vhd8JIC8TUaAhZp3EogGpdxypuCYpWdBOfssAt88nPLa/DTEp+rQqKGnErNfhSg8GVPY27alwaP8Sld8OU8EHUB0gmRwnOfX2W8LHUQKJycFkKRZpr4A0I/oL/44tlJVZR4J0rRCeomTcj4vL1lIqrghQfRRpmAjoGgjhXOJH2iiXt4+08S1HuhUMdsSwzIVT5igPX7rcFt2gl1ABzanwqAhCvNknhfInDWIh/yiUT5OJPknMUZKWc32SVAEnosL1qTVhefdTs0QZjekMwatso3EBWy6ev3xj+qflaVJMVCdfvj/SIsFauWuL7aATVhVLaIMriqh2QgvDQ0Ef8CpFP831jQPy0QXvXr0M4XfjifqSBJMMlKoUW+tk0fP+Ev50/jL0Wk5yCjO7qzwwOErRcojoDquoussp+J69o7s8Xvzhz9On2FEpocrK4=';const _IH='9add6685b94294a8e8b63731a20a7e373fcf476828ed9c0b2d998385b02db1bc';let _src;

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
