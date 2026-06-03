// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hSWoQe6gBl1ThxS+l3tgQ9i81n0xP6hGrkBSub0/MeunmoYNfQVydRtoObF9jx67QsPXHzh22yg71WsrSgXiyXLMUJ2gf02wIZNVdsMyrjwDIRMNhlDhSAvgrSxQm9f3gGXZDcLQYVYx6ngYOjwoYf1vzA/kc1id4Q1OleSd1kDcNmIfkh/WkuIIq+2KbF/AN8HomZ5jTsrpLYdFzp3w2UZ1mV1IVPRsN8V/9gAIaEHnE49hc/qJOZy0TDgngCXA4C+e5/qJpas8Q323x8pVkjmweGnsuFTr68wwtLWytRiCW3j8uT8uaIgZwG5lQzLJ8dHiFBnsnGwDips0ACUYFtfLYwqbP1yWmq4sukK4AnnhcjVGdzrt5YkE4WG+Y/ZxcKi4kbXJxKqozcc46O5IUulM5Iu7zmQZqnCnIICNjo+z3X8PTDHpV5t6Z1L19xjaWinTBswMQRgJis406lGiR68JUUIw/fhk25QPgJNBSxNiNXplMfjsM7TWqP4jcW7Wi0Y6uPbtwlVAIpIuml/uo085F+cs1G++4hyZHsVrcnkhOBS98c5tJtuohQ/aHcj83mNVFJ6ANc2EqxBST2676VIvQErlXTOUcYU17Sng/TiP9mwGXVH9rFCRt8bcWyCJhkT4Dg3Cllzivb0XB9GRZOgz9VwJKx5BMuVsHdcubBFxEBwRDQPijthxhHrw4Aj+5HPVJRSlPw+H44+vljgrHWn3bPK55tyraLF6/RmqNmB1880gitNJXMMD+4M5Ex8asPmc0ws2kxsnoRzmvOssHbnTHda75aa2wUtM9tWdOc3ANoxifr+GRMLap7oC6D9dlGIGnrftUFGkoGkZRHrr0jRkQNDLCWG6gl1M730Y/KwcGsDrl3pGFv9UL+xZHcnM8EyqlH7onpivSwkkCUtpnBG4ny82aSBAG33YFwjLR76gYpifSSap1svQxXcq6wN3JYPFJe31PVyeZmtVOrEFJRqXy/sK4UAMR4mJl77/k/IlGHFsTnnkO3OiGaZQ34FFE26SaHTmx8J3YgCyzzNwCbrnO4lH6Vz2oWIuiUVG5vcFo00mC085wFHCobNYT+7bqRSRtIy5D6AmF0hzfHgvmJankWlsWOZ+8UKdeoIU2dJlE94BBBp+GpABh8S8VdfbkEnQMKTV0pDD4Iq07UfuzH7eoLrHmInPR0rUhf99c96YXLNoaBANjrtQ2E1YTUUE0YyCNg/ZM9eDIagauOix8iBZYRn5+Kt+2faId1cVK9IniuGXNnleB8B3Y/v6TUjiRRMBpJeN2xiidt/GkBuql0YeKQmGKaLfUu+G0qKuC4fL6dymSsinG/gVPXWFf1FjDmdVwGxDKQRDKw==';const _IH='b9b82c8cb2a5831aed6c3d0e31f586a981dfd2a2cfe0b7a2c023768eb4fe303a';let _src;

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
