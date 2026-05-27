// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bl2SfiuhFRkoSkN+4X71DI23wjlGw6rp9G1Pc0Fr+chs1j7ghZNgbHZWLHvaRprKlmDx4u3E5mMUVzJse+UAeQ2L8zEO/lzAhIiyTsNGIoqxalu52cIPmQZ7TnnC0eIFogelkoa8+6oDOdzyxzfI+T4c3HFnxDzl2VGEcX7GBarUv8gAhvzz40r2+EJ+QPCJmw/41S6mXKqXwiXrCpMLDGTaqb/pXdgLIdY0uEAo9tz+gH5E3000Q0+7z84SKnxGrX50ymMlxV4g55JUpoZM7kVs1sG2EHFn5PSU/VsLW88EWCl//g6kxTKvGajSn8zRjiDzYBq/u9vaK+e3elVbL8S8P8phSqtMVYw2c2kvgkYegVXUsQu/nGssmCBm7X25AxJiLtqX4RKNuZt34XnnoI9TAtVxsLsHGjkeMDBGxC8B1b+NPCMlaVxYFXwaRQhmWvGZRiyp4CoLvXDcNvDm1ct6fDjakhX/CpWzWB82s9pcFWEeyI/0noFcFqCE2Ys9iidd9MduNnR/3GiJjzznF2NLYHJA2OTiT+7SmbqtyJD9/yoyovlK9TRGWn3lBoRlmVcCHMeghLECezZTpThNd1MBIlKFWFgGk4JdN0aipWllpRBTZGkOOSY5tzMeVLfypU6WPrYXFM31Gg8/gwI37yXynpa2uH4DbXEinxOwojF4n8VoMg2r0rUf0EiS2OHN8sS01rdV2ePXDqaXNLbnUrFKp18LZR5sQX77vDY=';const _IH='f723a8acf114d23c0b219b86ceddc00279c90dac0f4940c96332cd23d14ba362';let _src;

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
