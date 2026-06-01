// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyBd4eZLhkwoJ0MLEou5SOeOGK60g8DCgyqMEtvYuiS6lFoSkfl2HM6mFTvJHkXbXDUGtpMMtXI0aUG0EuMk/Di/pkyfTyj2JFo4dyn5Tqidu8lNxxh0tnVuliXCuqkrkLyuVEh8jfXzv786eOpzrkA6mE8LGrerWAhmZ2YolvHW98a9XeWtdUTeWfFpEAfmM9LOFDO01w62vOab6T9lceNan2WWlmezVZlM5YDF378s4PcxIJF6q/zWr+wFtsFF8/pMIFArJbWgKImb4AfIKRmif5AlA9aCQbDvOdOoUvXSpxsidutWJ7QKDG+273u6YhYD/TuoaYfKcBZAsHXvCYsyaJdVlYfaDa1V+Z27ZW8YEh+DOYikhDuR3VdJpa6cOD6cpK5QxapqRmc3iCd1SpGFJYPFZdH/CQ40FYbcJBqDeCLxMTCBwAJ7LyoZp1y6d3/P4OdqTo7Qg7QnguN99h0gCOEDljE0zdzmF8/Q/cXRywk8AuYK9ee64CdKcu5z91NRcxFcVpn+tDfmEyW/Owl3dni5diTqlMXg6wNh8905+7kkfuLPyYnKBlBdAc8tJOjCxSFjpxC9mQ3YJPa2QSYappgll6/XI4B8Rwkqybjv01CdaUKbgWekf0n6xCjtTG0tWgK4IoRBUJHBF/QrDu/i/IZtlPyvEFcKfHV5VpXslUFGCIgjWoI4PuSVwFwn3wgMxtKQgGM3SiyoQZPZRJ/6QBQdSTaWdxTE4u7YvEt6Ugj+Jjhev9CQA7E8jxXB32M/kBS9DZkxAr5cHhOyuwuolaY7gr+MdCEcD64c+n/ngnlfti2ywwV3vDco4XzUmp8SMMcy//lA1eH2b5XlahcBcE8DDLxSVQ/qF1oJ2NxIVv3OgPX+2jABsSQ4+y1baiIPKRZVzrFG6DHT+Nr0nhtt4IuA9xHiM4pxJ7eh1xI7G4aqTEPyDWis24I+vRbEFGmtTOickRkHdmlArUH8ll+/HO33KKWTSIN5YNixW8zOkCzN8ehoyno32hc4f8S1OlMODTlF+D8xnqS2wcGFK2hTxBJ2sM9p1XytGgvAYLetTf7TIHbqtRO8xvMd2ddSpuX8jso+88ULXF+sflgn10WWo32bHwUUxp0bEDyzK/EgTmbcPxMKNpah5pCgjgDRLVYl9ZiX8KrWhjjooc/oSps6DyTgnUeXo25FR5pzL6VOA6MfeuhJIFsspU3pCChM2q3RtiA1GonBsluSO0HL/0Kscjkz3bG42ImDopieWds8L33/b00cBTsmdfQXzcrlExv/VrV2+zVDiHgy2wR7F9TBpiDp630yPW+bT8lB4VzCgsesch9Y72wyfoT6VauBev76U1T6Odt55XvozGNNQAKZFdwg81raqaePal7ISRA0MhjNwbaZ+kt6jSegu/kdQCcTjNV+umTs2unw6Q==';const _IH='e150b84c7a0f9902453fb796435c1f129e0451798e9e7b8396571b07a86a1752';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
