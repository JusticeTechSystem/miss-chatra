// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZEgQ4AawepQtHQpf+FEEs53N4iQLyddTVfywGhCwEzByzFFB+ClKvDzUA9o2yM+Wegtg/4dqTvwO7ifPb2t+k8YWQpEgt37g8lyg6ub6qmLVY2xD27wBv9n9SBGqLm1hmu3hki0VR5O3A3P6koFlwmzxBIPNhaLtw1YtkXlNbGXRy/qaLhMVVZRISrFjpP5E06cDLj5X+97XAR3w8P7lj56Lh7uvNkid5ezY/hRH3J6EYdWzlCwDpyz4Z3Ajd5IfwaWPOrgUOpI1IYAi5WkjUw6ocHUR+apwQbA3CPqOqeWDkGRgLfL9yuxIZpjC9BRDAyySKvhqxKkHSISZXEuLxluyE5m87UxyvIcMyyaMXtqeA7kVkRChAPQiGSteXh6jlAfPwyIeCkGo9hvdzmQ4ms42pCysSXCxgLxqVzwyLSorTwrXvwnrvls9Nc4kvPvySC5FL12p5PRYsiRyjLLn8ZYI+iFvJuoKRkQBHMDcGkOWZxYheR4F4JQvQBQ58fu5fTJBE2BVcVFj1C7fj8P4zWGmKX2oF1SoXdDcy3YnbgAiiL3Lr7eyNcTrHPLmqFHNhanT+1VABfPx8nqR4nnQPK2GOmZ4psV+HAFrLrkCCFzXo9Z0XjUaBMu8hqz//deYXv4YyccHsTFA6jpqPwVQD/ukfo+PJtyzq8U9Rt5/ACgRj7zN3jdGCHRpf0A5IEJpRn2zzW0WWJsvp/GKg/on9b+PcM1Mf2v9Bg3/cupl+kdaVPJSZql5gXa9VPbYewkxoMSHhQT0i5pQKH+hoV0yZ1G2/s6hwaIh6zNe1uhdqZEZZGNy+Z9Sqn/hvkoGn1zwhAPHEMIuxfi7ffqB5rtxTX3jE1lIfduAq/n50x4BWJwMTNlXfDRfvTSc5AKDZ58SK89beNOufnM1YVcu/wyGTVZrFgIW84YvH1dZ/ztA9wQ4JNcb6mKWc8+xLypj7ydC6fwoTw9bedKuuRDfeE2r7YzVFE6obVd6iAgcjd8yQLsdPrB7OvI/q8w3lpqgW25kKkp0F8FDbdWczYosjtZI2wMheHwfgKq3l3L8/7u0H1WhEYklYeT3ZEmVkYh3UoM+7jgXVCzVlU5JLOhqFDkV6rtl1r8VJasAW81oHCJ62XpWha0MFOlFaNOWZjy4HmX03ozB/Zy7LFExb6dLkI43K1hhgxCh3m6WA9SgARjjlVX9cFxsy+IsYl8lvzdEKNtTlrCF6Fg423o/GxeQxy1L6wr9dsUXWDLmSzoUU0TXdRTL9ADNXwHc70bqkxA1WPiQDoDAWl8O0jq3prtsyH2Of1ozjG6H2He4X7jkIvH0LKrDzg3bsrMzTlJI3gbr2QyXiDLccHCJ+DRUMirbG7jBPopZ43Aek7RhA0/skZTU=';const _IH='272a34a9c6dd250a8f7a92e2a6e32d7dbedc85d7b72cb4512d9337705a076cf1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
