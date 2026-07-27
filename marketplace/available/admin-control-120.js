// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT497M43KB8v9L/oQwbZkV7EHVsf9RBCccZ4mu1ptiLLPMjrgLzlQaVnFbu63ztgvE+JUsRzbVmxR4yqcMroUgCi1fWc+bcD2HxHmur8j9eKr8ORVBU6iQh45AiiL+JWxikfqxPuGn81wX+XStJmsGIerRVxQ1rsJecweeJZQ66yAAyp8dCIdddKBLespX5PKvOxXiWOkosrsn5yAu1W2UAbFWXm00MLuWu2wkxQTCjXKFR56Dt7s4/WpyPOsWKpUF1eKwdDxz2g6JvS8W+yR5tVNscdhGjiVxmidOgAv3IxbvWS/O0W50ua8EPn639cbGWaIpcqK0nKQDF7kyjiKy7t4FyNnftBQDlcxch6Q1Aais0M5mOJGmFao/k2tQxvQ6grDQi/JCjc9t0U+4II9OAsSCCkwYLvPSHjfbpkHYBShvbvBVfQosh1deJ66ZYWSTRFVobWefBrrzY+s1jKssjeVoSMGoKfOzYa9FG0kgD1Pb9/Vu3KFLlByL7k1wsPEICyxbi2zNDNc5xsFJ3ZFJM3Sw8ElQWv4Bz/UZU8SGTD4cSxDrssekvOBQcknqD09TzqaEr1UDd39BWrTn5wRgLjs28LarO2hkPfTIg2atPkGfQr9CRkiz6ZS3w9QiZMWsITISWPOrSDICWmlRN8unDdBBpcmDajQEi3wOw1NJzSMZEgKVraq7IG1t6jVKrE/UtV82zwUqN/93Php/0YEj1rKPwWDrlfjXvDGtRfrdUKUrzbYKxIN5qPIQiipf9fPjCohLZDndCBujRm3m3+vFCYXBWSOpF8w3Ke992/Mz8PRnK291ZSZLfaQRdxhHiKDtoPKgDbsS4+OcG5alPzu9qG+XPAE5wP8HiU6Kh7ICYX1e2hTtvY0hG0RFQ12p8E0uvVr+3kiEHSNxLKe/qIgd2jvdkLYHBCKg3r8/SzZaHzDyZtXGyPtVD7DDKj4RjyDFt2WzNiZPlEednGU9M7kyOyFMntXTuDwBPs6QzcCCoR4t+5dCu9rE3U17ymhzun6JYGEMO3SPYYQ==';const _IH='a0774d168d786c7234ff1871246e89cf9ac6fd377e850be7645ec91a71f5d911';let _src;

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
