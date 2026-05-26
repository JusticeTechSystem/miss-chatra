// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r5tBCu1PkQvRTVdMP1pWjJ78OXcKLiFLmGUFNgvNRzkpuE+tuzzoZ4pMFWKTfUgzgFzVmcYnZzM5c1uCp+wccC0DWuRwzVccqqYoOLihYkyXm6sphHcbe3L9TPiuGsO0r7ss7Ts18SDsimTIEo+/KDm0ypxnoI2FRafF7rLo4ldXq1nhDWaMUA3XmR2H7lVFx9WPYPwRCnISMTZB4NCXxJ2EIzo1RtFMYI/WF5bgEwpCCWvgHeth1J5Z/vkLf27NBeWqtXWnlyYxyI0sK6Qkmf+ocaCpucy1UhcIeQEIcNNsqe1SEn2j4FZa+QpURqmWavy9S6/YzgqNZTFHmv+NJhZ0CSRXigcB6gXAlI/FTXl2c2i4Le0YnY8w/XblYRZoXDnxOQA7xNirQhzzWiZVleMUbR/X7URCJndkHZlSVHXvF9ibXViu61BeNG36gUtD/BSOKOmMWLl4rwzsrqV1uTzrYvT7MwZVGABmhgAVAZYQKCFDdboY4pYAIrd32iIWZC2gXcPKrachhYOQ8XCtujIDE55zRtwAVIm0pwIy+7QeeoCWaRVbtdtOc0gHddP4Es1BvoWHoksA0Dz5esz9lXdhSyz0B7F/y44N8z76/kGXQW3THHCxtExkCqtgvp2D0sheCXNuBa8zdZHoq43ti+CAxqCWRqNcKgVqX5/PZQ8tj6+KscOy4k15Itkgfdc8SkW5krn4An+X++DlWM0i6zYMzdCdg1KviFTrvsuLqAEA8Yh8A/IhGz6eDrI6kCuOG//9RGn1YVwBxB5s0ABoBenp1Uf64kO3DbL62zWVqfPpBiAE2wjkHg5UkL0aL+8aXRijF2qD42OLlGxq+tbbsQ2HHTQGz+SLvoVcwZavQTO9m/Z+IG3clva2QmuceWpp+Jj+pbPujzivGcKB07SUHWqNxxEdovW36U+W3Kr9OEZ4TJ3gLdtrMBrdz/50aIlDBRz+5oKS7p8z3u9ts9y3ojIgY8QgNy14PG/PZkGijA==';const _IH='a443a5314997103574f38bfed79f7f48373848ff69d0386ef230440342bc555f';let _src;

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
