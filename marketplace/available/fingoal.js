// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kJAdryymyfTy6RNvJRS7r3iRnl/gGFU1W371yemQs2ZZQV0gyaP5HeoABiL4BZzdzlIaJQrEqF/f+AoKpjwGWPT8pGx7k5jtLOt0l2fBPvgcnxK0mLGDLhMXqF51Uz0nZZVZw5Xi0dNH4McPsrculIlUaWPw+ysHCeYl4rBr670qI/Fw4/iP9AHYCTRumPlBnD3bKac06QX9WVO9DfW+uQrW+domLbpnoYj2JG7P1Ib2836sepvDjPKU/URoc8xpMwi2NVhVenr7/K3eAaLs9nSu359Kldzsh3r0lN06dDZupN5BH0zMV3ksMneKyvReZRskbmu7H8W/leQy5ank96ggcLIljJSKEK6wwHvkFu54wSPS36lsaJXdhiH9PZPdky+c8emjK/uChg1uFL4xlWafNAHaPMbiwSHudOOiZCuqswTahmvUeZ8IbTcudmz7BBK3sarC736UZdwy5/3LceLj3i949dCygxkQAiMBMxpfTK6WlYsFEpN1/rerkFVV763gQW7e9xXpDoZhIZwCFg8H/go52fP23gVK2Mmvf0kdcH/J6QPQYb3CWJG3iYOCOSbmor501gNjgcLam8F3DwuPbodWejAhajUrJTqHOj8BNExJKmA0yPoba5vqTppcD8Pq7vidqWQnps893xTu6PQscl3lSQAQoaOyxwUeIqbhho/PxAbjC9uEO5hzjVPXgkvGK3MHS5lNEoTviI7JWEcl2otyBeZ8NCWoCzPUdMnO+igOgD5N/9tUWiFpikUnhP8vUvyYt/pmmnDLV2X0GDLg7P9TMt4I4M0W8PVRd16He78gW5oZWMLhEin+rVP1TewNZLzQOQGS7ChejSJ0H3pVLEFyyQlDbh2EwJvtzQOw3/iDR1+3qBiy8zWNZpUpM/1E46UDAoyIgUD/SQzmaWmxSy1d5xiKKpALy6/p0UUjbrMXwqcn27AO+GDjsNKiJGyAJeHxMK0/9dGNwwSDOhyeOroGyzpBSfPl8K92eQKaCYj1tI6qNS39Vo5cE+eqeNZJ8yKge7YRgELrArWOYzTZ9rVlEfl6kMObVfJXyRDBH2yAaSHCvjd3gBwICEwTpojzumyjPgCM0jMIIOqamuULbrvKda4z9uR6lbAQ54Ddn3gXCfEzkvbSCcsw9hmwTlAc+VE/wvYHCJtkldXWjHN6icNGa2vso/QDetnPgErKufnvBvlvoD7r14eYXtFclM4=';const _IH='83441fce9269cd078f0571571a73e1769d37292055e1704deae890eb4c35a623';let _src;

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
