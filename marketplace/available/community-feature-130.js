// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gBLnmI/xGsbne7zTbx3AN7lh1cWiKBGuiX/03DrHPGFfillPim/s1BD5XiINQI8//vSb/gHzKyZlpVA/XwmHXi/sH6ZbY+u1rm5z7ruhIZqYwgje4DPUfgwwwaohbtORvaflIMUOo8jEt6xi96ACmvJ0yoeB/Q/THfShF8Cvk9gm71j2r26ZqxzdWBIYSLto/TMRkSxF44UzFstWJjBGqbTdP2EQxtZbbE71tINHtlLu7nomJ1vKd5kg7czcK+jCKuU8Ryp8P1vnFKKgnzHOYJaQktpGacGoN342JkddpzBnS8h7Bjk72n80CNS2S4JVrdvd0vijKbsLBpOsq9EGv/FpKEOYOQNr2S6Fco7iy5V7uvpJFTyu0jlFX33Hlqd2q1afoG3q6U5jaHFQkYKbbA0G+3og8skJwseL9kblZ5/P/PldF179GwyfWGIlmCgTQJqwgOLtN+Q9uGyccmCg5KWrPlgcso190ZrD3Pi6FmaXvdu4Brez/cRsqK+7bHUGQ3R4LygxLSiqSjRuYVNE+/DaXOZN8FSiJBvb7NAm/TfRClE7nLJXjH1BtEireIgtP3k4z2ifmEPT/Q/UDWHM/RyqWbQlphp7fL5cfmXdpH7Zkh6Seb89CGTXh12ORLOHMX2yO9PEwRKo7eraUngBRyxpOwpkA2kWAEidSwMOsMmAYfuKDS8Yn+vkBuvwmW+ktrc+Higi/BB+Zs1cPhdpgx6mU9/gL9S78HK2pvuAq2emb5h+RzNrptRa';const _IH='71992c145c53f14c092521a63731ccc3842c443df5a3a91d6d98a7f9146155e6';let _src;

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
