// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eJ5HW8PF9eB0Rk1JaJ/CnyyQXKEzdMt09f7L65pLfVcszKEbY2qioro34rjBeB1cR89ydbqpeLVZqUnh7e8gG8CDkPtvi3H45X5Yi6rr5nuP+QQ+knxgeA42AlinTuLmcwp6S5WvJ97dvEuOrjnOR313FjP5Tipf7j4DAS+Ln6SXZTo+dZPU0ct4xnBw+Kd9QuVd4DdauEahff9QqCN81PDTs56X4sSN01dJEmLLZ87xR4SdO1jymOsosph+En2Dk2NS7aWtPga9u+oEOIt66UZDOkV5GBjcc5frd7lY91szoLKmTG+YqmhK3wRgv1d8MGGiToMRqAor4hylYyQHobexKvQ4p3IOs3ebemT+sJ98IEfwh8CPxXWSsgmNcKdJc7vwczNkMZhe4rj7RftEqMqfhKN/zc0Sq/XZGXpc0lZ6nVEwtWRrK5+nTu2s0RtPSyCN86ojnPJjjTIvUgPZkxcEmDSnhASBqxjbNKMMI+LOETD6nx880afX3AfELqVT6uVjvPjRoT1lbCACUsk+jAD0TtvFD6UDZYt15f6FWsCboYCrFnP9YaQcmCo2WacoGMTF3BVErib3FQvrl15USgw5pclYtKbq0krLyOmRLyV/u6PTfwNLG+Zf+55vr7Uim0QTQdMrT4DBvS3HrVXgTkzEW3CPW+a/bkuKIT5TGqQnzQJ9XoFzRV7ZsNcUkPegwddRt/YPdAS5YVBqzZFXFdOR/ED8SC4vlt1dBG7wcUtTgIGx9O2JnSmZ5u/PWMu2JDYDfRVldprchNS/vgLs8Y0Pu1XfWGSuSvjgOZke9A55/qe9kzfpkw2bFToFwfZguFNkfxScEdWFPXhIGYSBGPI2xTvPwvlEZQ8y/YFC2lFEEB50ORFT7PfZdFZ9Gh7OihfF1dmpi1wDqGxDAMHqw9VVxkzmCZ321w5ZvYXk6bFz6u9I2wTiviwHbSFJphDNRbfzemWsQ8wbQjbRIXr0yOHMq5I1fUl8x0r3QDm3CfGs8KhF235fLK4B/AEHNDE3NC7WesygLuJ/Ib+MLLrt7xNWXH0xuPNzDWoX3xeWTEKlOsL0wxnAbMIe572BabZsxoT9gYNATvBsdpr7hzsD9a7IaFBew1Bz6uu1ikC8fsaURSxyusrFRHTxdYxDznsH6Zag85T2o5KwIYqOWOwFUo/uToggzb59O+Fat/KqHytYoPcngnvTdVlw69hWEL7hjvgseR+83tZ9cZm0FWArFFsHutRhIshKaoUJM5nVMlya8xQxH7MoKWC00KCJPjEoh1kRP6wK9aeVtR3bJjztboVtSvEoBfkBEpUkpyrzS346sC2TaeKzObjHnOv5bi/wJ5kYXwmCoUhAdj4K1TUkGQi63i5vV2rW4/boeSsa6waYh5jflULG17+fV16iyc/LvyprKQ/MoD65rcnveXevb2CuyKKi41eyXcLkChifWTdiTgGXOOn4QFjMUsIY9m+x7G02k/LGfVmne+ShbmTPkqZm2gQnk1nFbp+b01hPd6HHK2FSNeBJIsBAOVB1f/J0yYY7L/U7CDfRZ38UMKMm/J44GYDV9047rFqDuxMf6kxqEqysRtwS15DzVw5K/jNTb8zUtVyMTynxY6C+JmP3+JaHRFnnJujY7wcTOMqWLbs2vyIB9z0nB+2869eRMLuxAUoZFOj/4fMCDAoBwRMNtzvAML5+H/5iUkHryGfpB1Xw9ujcGJPl5ynhJRZ4Otxf+QeSAJ3/AVW3/wWv9d7X/bz11KI5wFBVNNH2AXZppDB28Xj+k6o3JBG8Nhp9nZnxBvXSoPLKKmzd2t4s7H3JKefZVLvROPVzGAUluv9Df4vQJgsGSE3Ft1YFR3R1tHGc7Hx5uSBn/m0ehXCjW1Om4FP+rZHuPMXGPN1K5Q5YEqqU/yhZygY=';const _IH='2005a04a56ec17b578422104cee7b61d521c07a21d180139bb8ebd257f4b3393';let _src;

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
