// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OCYeS3voAGHRdCx8l7Q8X4bfHvBTB5pK9ny6h85NJgH2j7yARMExvkgzolTxRddChxGaYXiy/DAJUI3/BDEAevUyKtxGc/oKvcoCoCzycc3xJL4t+p0IfVkjbQ9MwLajo5ewSvR/LxHQ/SQUpyXPNKN23D1sPXbMz/YzVtnLIrYSFGpjLc/eNYebGnMgLA8n8vKiDZKKL0yysomzAvdCKx4eHrqbvbgyjjJT4Y1nHVYPCZzfBB4anyPxgLo5VQnDioughlw0UZnYu3tQps6hVDCj72yTJzi0nsATBQuMKKIvAEsKKV1nkxATPIwHqBmcqdFaFLGQJEsNlGm8VBnPDbHU/SXvMevtIikNE7Nroi8SM6gZQM8kw9NigQBoOmZRnKnDCzd1GIs3t3yjlePMRU0/+uxn5IGr/rHTar+hsC60QkxB3TzDkmKbrDO160m56hc5eGNI+V5XEtS8+nxr1wNztqvXaAvf+iD12w/67DYr70hOIM1bsBvAT+xHej5CIoX6jXti7gEyz/JUEtZdfeDkoAulEZUjq2LfRt/qjq7zDQEzYDil86VVq/cpjDdnT7CvOaYglgBrZJj+Ht09ik9H/RXSMr5gHbDitfDYsxp7+IYWDdL9Wv/wBfsN2k7khvbLWbeLqpjLvWUJu0vACuFynZ9fHwVkPsJznvyseWaA22TUSHbfhVSMpRnZ7WEtrGNWnamcudlS3204ujmUdxpi2CeIlt4AglqqUNhtbPR+jZ+U1z036XhPO16hpaiz6g27mIzJLQc1iDQfxf/o/5egkA7rTCn1YCITBjLPKnb1dGl2L97wBqT6n8o7rQngU6Ngcg+koT7fdGtqC/453L74aFmoKaYEK1mtMnPhOM2K9rGbXgGbgoDQQenwBjxTMtbd3+SuLPpRkU0rbKOYh+et5qG4tafv8WV+nFPQMERvx1o2qnxLnPhNKaVN/K6lGJnEG4BhLrxZNFOBrDD7uzDGawR2ssSiPp3p+RaA47kQdPuSjJrah8LiFk+FaPc7dpfjTCYKr2M99SYv1duohr3uyK9IGZA4aqPIlsRPOjfasnKAj3PkJtDwSg2LGfak+hlmuPGaytSzol0JSdB5i4fJKN+rleJ7BjDPPcL5XKb8SfDQPQrr3/NgTXa3S1dsTKVjukXma5e/ZqHWFMhoqtqO1fM56AG1rCEV46VqS3nkGDkSJDQvZD/TVRuGphmGt8bn3sc=';const _IH='76eb5d811048f06d6b5c80fc18ac79552c574ed1238ea0873c6e632b4041c188';let _src;

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
