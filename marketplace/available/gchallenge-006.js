// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+nL/Q6824AbW1iBS/k3FwA4yhtseC5F3kBg2aNrsyEFyBMD2xNAcpkLJz6q/9tBijDnLl87sO1n2tlNcZsa2HlL1wPmsasSf2122nvjmMcWvtFeXzrXLVhG3+Eco6JJOZUp1SM83YrGWNEWJIJ2Z1wNUwhuhHbNKZWJz/OVlekdnP9ycga2H/nSwtircWqzoN8jtz7sLxGHm2ZZCyTCdWWQvxqlbeI+GeqgXFzqxDHXkecsmsFQzPHFmLX8hs3bxU9rW88VQnYCmLhZ6hPoYWnMBX/qdMTHcKZyc6K13u5rrBswVYUgHTNCkZb5SllxpmVAAKopw4O01nMWzwWlirVZSbjTF/WS5Vfhciq7pa33mmxXgc0ZVPfOrw1KDO6bDuT8C5WxJq8urHXhIHKWeRxCfzVWCueFCcaZz/7OHoeEm8cp5ZfCuAYmZvKcwi2ZQx7X83oWkmPmQLl5+Zle0JLvxSABch+wthcnlNKASwwEzODW5hCk2dK/xVbhKwL21v2DqyikjC0MbnnalRqH7Z5BJsv/60ykEPkM+LxtNbmWoypjZsKm7BLaQi+fwrhjJSR9PnywI+y3PN+IZuhyBpmaUCNlfFvCjJahTnbVpuNsbSwxLS/Ic';const _IH='d61afd7e19845e912d80fc8113299d71cd199d0ad94509a8843107635a253e41';let _src;

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
