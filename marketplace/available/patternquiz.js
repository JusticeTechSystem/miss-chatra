// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7L0HmR+1kdFTsuSJWt1iTt8C7s0/a6oF0JC38x0XsoI1qDYd0i9YNcf5YHJTnegYHl3Er40gJtVBds2587Vy2DfHaHJC0b7PxFQOu3ypuD6HkZzJCKCfLJyx/0u0uHm/2u66L7hrEnHcXcxrzjGaOsVYfjes3WG64NYRAD0+2M1r3047Y9aAf1T4c/LPA30u+1znBbByd9SuE9F500EwhgzCr/7J2lKfcoAA4b/GL2+EnASBIxv/g5usR5i0Q/+yvw6o4fGDfbo8ZcUQVLcnYW9VkDRx0yeV3/X/i1m2M/92YNxKyUoaBpubj+Nq996scZAU2MbQZx0O5/JTxp14ytODBAm494jwZymFLKn/+6fEhLYY8ABzeCtC35h3SJYXfP2SnGsiJDUhC04YFrUsUQNQHuPCTPAq17EX2jhN0U6Di5trQaW7UIZM9EnrbYAC7BQo/pK8QM1Ts9NAC7DrOPX2+U2YEqqOYyX7y8NiQFRrz+rlkF8Q3AZj8TEK49zdXsnCnlrbFim1c6a7WXLXa+p+vQ0nAyiDuXOwASbQjhbrLo/aGpixllJElg/GEj0lopMo/e00xVJJsqcQvH4G5nM3DCUNkYIx0KIwCHCRk2qgs/jLw3Rebvjhcc02wdT8E+UeSt7F13T9N658nh5G9Dfx6wDeQER1PeXEaivol40bx+1WqmhJTJjp6sQ/OPUbE3SA0nwVuoufVbLKqvpbHxDd66jvRbOvsyQ5VMxdoAqCiY0Vkzt5uzii7QyfA8OPWisVhQUK2ndjaZwRsxZNi9HfncLnRUs+wA/OZNmvTOBRidJt8OQ2IVphXLHYJ+HtzVKaRTKbhirbNfxmelfcOrBbNdFUAweHAamWePEq6XDTLq3eqYPtP1xy6u0by5XUY+TOTIz9kdtjNDhuAMbrwGJEsBTsdTAymhcDXqqLdaEAFA59FAdu/SvVc4lwMHyzuRQY2M4Xg6vA5b5USv5rNiK8j+1NxqkYUcQxmdMZLuXksE7Q2uDFgBzM/LrefzUAmKNW2ykfT5BVDC3msh45N5u2OCb4u4o5dToyWMC9BjWOXoF6VKAmqIAfb4L3PnR6ZSbFyMTDyEZmdx1zkN/hnBVMw7GOGXgHjLXr256AVSD9DZthV9IVPopSmvXcgtvqpPKfQXVvFo+qh6ZoIf6zfBcRQoFAGD5bEh/XccYS+1j7cH6399XqtQ2FRx6LwdrSXmuayNzJW/s7';const _IH='78e094d43f3b99d150c5984ae13b97cb216333c1d7b1c9530f5c9344ab010e1b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
