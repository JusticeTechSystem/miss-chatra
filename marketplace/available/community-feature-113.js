// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L5Qg/4mKNPcU9c5Myuf7HG9p43E6dACkbflULlq1j5aOggnFFn/UtbWat9N78aF3wZljXLYwaJ+52Mj4yhCf4YpkC9AmxAqg3UBI3MLdUVhLHoXQFkdZjlDrv4mwGp+KjhpqYQ7fptZqvgnIpxbt7vA5OHRmYlEiO/WU4AYx2kjStkeJ0rm7+Y737Dx+C9PxzoSJMmFpZOCaYyMEQNYJozUzSmT710+Z93Si4Wa0VTgLlpZFqLlfNtU4rNW06bDXaTuqJ2z6Uztecp13lIVfsPV8soROHmsMChFEl4vdneQCWtiIzCKTbxMjertrFSEgwl01Z+OXZa39sHjgVArVAycokKjZ4MkSQUWRtlnqC7wuUuY9FVvsU5eBOcXXtIAeyE9ExVBnjyovksP2H5Pb8IPI/NPfNU57ymcy+CvOf4tCkyGYjbrtVx3c2eewrCRYw+7gggO/B0uMRTACeo+GBw6LqmMcemKMPKpLSWXZJ5NGtzs9YLvdvvrwpIKOBdwKWDDVsJn0i6MShDiG/GQbtc+dcEZxng8UT77q1MfJBUri2GiKMQUl1ARP3/DQmQVJzcG0NfLgPxcP++bMeARFKHiQuLRnaYIPtyHfmtX0p72OcsRSb2KwV+q3C4COFDWi9YfHBVMvvAMiaX7ZawjN6Qy67Hl0W0G2/QYxfk+CI54sIfIttASrWxii4FnMO+u7ioq23+AOF7rJnOjEMIFTZUV4LAgOAY7A+wdNBGI=';const _IH='659bfbe0fd4544ff173c64c694e060bb6390c6f099c57739f60c26b3356bdb90';let _src;

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
