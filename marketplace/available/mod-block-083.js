// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qp3s3tZeuL3BY/zL1s8TUV+b5BDVj6rrtYQf5eI2fnOLmw111uzI1K2Q7EeokeW2UplBkbW9tNg4R+947A4/Os6do1HDtmEU9dc6lfcQYzKj2zUeC3u5YYjWmKqUq07tRA2GtASs3zafqBCcAiWIHCM+9stPpwgs4K8hoHOK8xJm4WgMY53cKX1eirOIvvtVYa5XGeW9Inp5WpXNLzTjk+4h5keZMePSzH3SpKws2haDX/bvakGz9bFEWGAjyegtiFtw/ooCTlCv01GStl2z2PVllkCwbpJJD7gwLogCrkPShAoMmai6QI8J0p7kSXUHXYQdG0xnG3t/AL/cuLdfAgxh9BWMBtsYP/vq8w9cjI9/I3JhLSYqz2eGxmxPAlfqzUtGUyTn9m8FCz6WQnVZLkUSvjyeN0MDeB6EURoJAhgHS8J2iZ2TU4sKug1XOFV/KMwuogeFXNGyRHWmcqabU+ezd3nhmsl/1f0EH7yK8i2i0gxZAukTDsSmzSXM25866j/8HSNID6LT+cUwuuFD7eLjRai+zOZ9mOfcj4S054ymAG8gTfwR6hdznPqVeDworBfsgf/f6RlwazshuxeMRW8y/V66nmD9OTUrvh3dc4WDqAQNq/FKl2592I0x+VFv4TMR9xOjJkd+i6QbFqRErGihnclT9tuUuhroRzO99Zjbq2jiS/w0CsxV1Y1zKPjsGF89n6O3j95hUnjiIKLu8T85PmYEUXcc0WhTh0lP0dlJUzAfeCVjHvKiSSVGeOaLSBxp/SMRacDQnudvTZ58HY3xY2zdLbao/lmc9jvtTHIz5euZ6fiDlJLIBYYXuOKS2OAqspGgU1Jw89rN4P8wq1sekTpWg3WrJEd8QgzqE0kxULdmHSqEVd0oL2C0dOUulZC4wJSqCYKK6uNWvzJjNgJrKk3Rses6xfF3k3mp+1W803y1OMQ/C4GmSaeFWnK4uRyN/eriOrt2psRFGtg+6bDTB9vtmsVT0D4lkGvQUqUklvcuMub72v7V93VkAhWfUeA+xsmHH0EzY2Z1qkpWqgrGTiMANCoaGNhH1kVfNW0khNBZzsW7TAVrQWcdmxSHSfQB40WPnlR1pQXGkyFz149KOMkEdtYs0Y3rufDUhZsLzEj2lffD8zdbhmhzAtriXv2rk1q0AmALwjncMhusdXw3rws+3Bcgwe4cmd+SkTG/4lT5BadW+M6t0mk3PedfKrxkEozN8nwHPr3A6btZwqKgW14glouK2AYf8MADrX2npGM1W0Xqj7yvTix62o9ieuVIiE5XVFRK4FzcWe4Aj95bPJ2US7D1o7Ft0FGu/oq6UjdkCu+uQJNxW+pRbfFaf1huJtfOTvKkrHA3+Ywu0KfueoqDKtxF/Q==';const _IH='020cbb276fa80f1ff7f45bbc29077230c2b6921dab0c6ff58d8235ee279efa31';let _src;

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
