// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z1t81CTHHtKNipl5V5BlMfXSTBk6lQMs9HRWQ+x7UYVluoByJF1VpRk1INR8uT1ZDsl2N1ASeG4G4mtZLxj3c/Sp4fo/nGM3FcJSZesPnfj47J+lKaNgGtGRFgKpBQ8X8ifml0GbMR8CJMcEu6idMNoRYBW+pIyFJshLMzVgQl8N5vTPCNbllleZkQQklwPO3wxPXCoWbtya+poTdngBpmm73hxeoruF12XSBItX2A5CPFlgdYQ9qsLjTfbvJ1d2aRV5HiMXGzXqB+GiYuP8vdBxo0q3YkvLw0CVY0AncvFX/7pjVxkhvlGleamxIL43qHoAWJyh8HcgW8Zj9/Xtl8TrRkQ+VFIGyILOOOJvRsge9fxhBU8cIwH3NvGaQWYEgfb2MQgVAnWOVbXzjUmyy0DXc4wMBCZc5+tlzFJ+QuuZmbnWqchjmIld/B/MPmd99bxnF06iIHB7d3YJsze+Q47V7ZFHW7Brvq+5V4eVbDQYwghZ9Y+6AWpTgWxTOfZIqDLE1kZXSQ1KQ3BX5KvM+UynXRhaemUKsn1MqrCdTRmjpnkYzoh7aVAZByfjaCd2JSJ5u9E8m2V7upH98acdF9udJL6SUExflC8iO0GMZ+AAP05XWP5ZEJLyLfzj/h2v0N3NeCnFQZHXr1KpAiJIMmpmxtTcTZfhY5cHFxrzOgtGzwLCCPrqnZlxCPF4Kx/DF/kzMSfvVzwPN3bkKR6Q0nZqYH7//pISaUok7jz68QIzuQ0n0mc0499T+7ePlea7lInqBsCsGCfd66Mhp2hxfkCiBZporbeHgV/x4N1wQPB5+7MgVakfW26CXhGdfGiPE3y9RUIxd2iqaJEckKAkpUqgxnHQuOSniUmM6bZO3PEG/Iqf/+jgFP5eaaq/WDU0iF5Ih4lVeJi15o8ZX0p8Pr05KCoGllFJz/LwCLEY9EFhHY8e8Ik6n5OTQxNNDqiDhs8xFhHQ1mdwp4n9u4qmY+dZ4/xqjUZUf+1YHkm3aQCmxrEtveddqGTeVkr6MknBm014xjPz0HKuYLb85Ymfk/bSYVv08aDzh+x1IaA8JhyYJ3Uf+ifFHl9eyKtjLHiJrYt3UdmPe6rIm4dMmdazhnXS7xF4SWkHpR0c++19Rtue1kONtYOfIP+Cj+dex5MaG0jUxcyoYlBq8zKMu5LmR1BP29djyD9P6I1eCF4zPAh2xJZDznrxnyTLLkFRw45Cb0nQ';const _IH='616e549ea1aa598b29a77c56ab96a58915ca74de2167b53755b5c83ea66101a9';let _src;

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
