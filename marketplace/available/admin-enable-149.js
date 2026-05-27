// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VsvHTMMJK3anFtoSoafMAAbse+6HMBpU+GPbOfAMUM9leHhMqlCQHz2wWEJtuZxax2XMASqQC5HbwESDRXRrvPLPRujehayuFZcucBSXp4MhP2l9Gg2kn6LVmwkqDNdwkoeX/JwHnYAjsaR8RYr7mB7A0BV+aIJUHQfE5d9nepJ7b7f5q904QzkNBsrqWzyKs+NE/CRbRHX+4F5rEFpjxDubLWeeVVAfgBLNm85i/5UIYvAWATHKsneArkClJ3pG/ZOKAJ1qQx5EnVKZD5IQKbcCFzFB9MU0Ou3fMtDbHP4JCar/lXDNLaQI2ZyDiACezx9MYRCD2M3nlNwZhGHwqM1VvQIXRqd6F8n8diY1lJlZ5yOHQTQHMuSkcNzyaZZWclgeL6rGtYU762zZeQdliiaJSa9Gu1Td+k7RasuKqZifM52CZaGrIwuQeiBPjcfXCxORgfhPp8s55ctQcgxBh1YXjp2G5QdNR2z+TI1jCu3slTSdttnPBGuTa8nBk4Wh9l20AV+xykmPSTkqPIhSdRhMA5UtDtmuaO0z9jEhnS/bbVR2M7GCt9Y4T5iTOmDlxVQuHABkGWwBHqiIzgmJwDpCALK8T5pP0Gu6O40o6ZE2F8m4+slLmaVsCGefmYIW+GgGfVOogNayTvrtJEuv5ZWMhwsopgZ+tnO57OxlkmpEGvxNR0K+F0nkQso8WGawYvrzTvwjsxIJAS3x7acCcS6T5Y01zfQ7yZjY1PCXPUT/tr2OuAsQIdd1fjr6NNJfxpVoFfxHbbLLwxJ1YqxK314XCN574QsV+veJGgIvWfLcjKfBGI3tPXC0KRrlT2lYBIP4Z3PHohV1r7kO2lQ4S9Uz/8IWh/elPC3t6SxncMO5dhUlaUtTa1i0V7urwTZWhyTOOX0my69KhVNy9+JPw1uS4H4aMOfgtyvBpijjjbD37iGHuBsJUrW/4q3DisVsRIdWaBK/cI3S72TdvXRpPmWUC/8bwJy5PBEoIwl12i+trMosSSltN8iMUZMMl/sbog==';const _IH='3a49f63920347074c0a960c6bfb5a0f737f5c55676bfa573adc0d1d1bbacc323';let _src;

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
