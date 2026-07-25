// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQG3bsRIpfL/q6Yt/VhHhj1CcaxSeStUftrbMng+kRY2122IuQ+3mxaSmNo8feyLxWOTKdjhfL94bNq7BWpG9Lg9y8mu3XI++CEA7qXemyB91X5Klf8EivN44iOxlz5aodifdcnIVG571Szbejwz50s2E49/dfCynucazZE7IiuloeHLtDRodvOfwm78uBRpeeDtrsZP1L94EeDL1GQNABcROH55+bi+SKDuoFgZPiPjP720cTQJBbMZjskEx3AYNrx0HizUdbkw4QhFhZiSmm4q6qOSr2oxlGkpPJTGAGym0b04nRBAyEnUxDQ87xBe7o1edSqS6BeCVgmVCo6W2jEKRyBOfFt5EGDK8tpeVEOIL+Nyw9EQw+8Xp0dXGyW0JUGFvDMcweNZ6IhE972NlQEmNk6/kg39j7N19NhiVmZQcpOYGo/SI4I/wDnNYtjq3M9yHKfh9s4w62w7Rubdx+R90BjoIIz6/4m3z86ftNuF/1eFTvZTRB+xutFAyYfUDjjHAJ7i8iLuGoB/I17nuPdbjcG6mEH7RBb2I19htkyoxHGqwj2wtxbfZyVAlI10+o0QxCxvVhZ+NwRulIs8F3WqNbSSOvo0x8HCvE=';const _IH='599a60bfb6f7b7d319ff06f01cd0d27e11bdb364e260fce8cd18a2b7c4604b7e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
