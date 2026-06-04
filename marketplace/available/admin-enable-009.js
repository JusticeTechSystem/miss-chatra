// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fgn4W2BgAYoVdVA+jOMFbOrpabep6gMmp5xQtU2rDym6twhScNsoihljq2IgIK86tPFXUSEiUGre3rjW1Qsz+I9RddR+AH8pZWXZ0IKKmQjLLNFTi9ois0nGHfypylx31rXGTkOmzoAaz/egQ4bq73yAu4g74CX0bPzzBp+zXQGwCA7WuRbBVSe0g8D6hpCXXbNA3hlNe4uz7Nx6IgNo1UU1l6tWrnbwyi17IvmZi7aMQ1hL/dAR6SWXt6K+wt8M+3bVe5Rh/aQk2VHOvZqy1rixeOmGKmqSJcjDL2CPr+OFzYUGQpcD9QSymXqQQRsDGH6C38R2KfMbCeXmHEIfr5ED8TPEoVNxceHA/GTgddgid/V4q3enCUHeqL8Aab5Vjq4QT/+keQl+BZbjTQTxLoYrI/DiLIuhtkoV7yNE3F7m4Gg9eUhxucqgq5AqJ5Fwkb8it1OVh6oKvxEGQZnqGQA1HtFqopxvXNZLBR1KwTaSLh312KmmjACDasKpPNoFgjhOuHQRFOUJ4OildJARinNwoqpw6GdC+0/C0odn6EOP6ifz5vQWBc2Pl3TT1p1QBIwDKopWbvN0rGOGghb+F1JTdo9bc7o4tUaUANy/iDkvhGJU7e+RL8jxhDx7NqEV/M5QaRO70WbKiLT6IrUPNmNaQAuM9+Wh8rOw7gJ2188KhxQb/hkr/wUypiS2IRpdXS7hS+oniFdpI1/rDeffRgalaXwTFhg93qRqQVJ5ccuv7Yr9W3eG1jL1s1yMpi7XvbQyXDSdaPESTjF36w61yjUvBfmCF+G22vK4C2Hb3CXgGDsLgmv4bFJ9am/ldF+qZDVPl/9ZxYFmfF7l4CoHsEb7CBwCgIqblD86SoAdd2cmmCb6EoeirIP82y8AWpbZqzlYZ0e0uW6igKrZNR6qon1bbrKggGDySQa7xKPBqmxrmpk/W+KXVvBM8OT13aigtzU7Kh0P1cMCBBlZB/+uXgpF+q4WfUpciI7FduWHHFe00xn/QL1j6cc=';const _IH='db0c283816c8a4c0bd078749a5150b7122b7d8bbfd441527a0779f25be45dd6e';let _src;

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
