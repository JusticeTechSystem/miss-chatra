// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NvuetPTfiJZESqVtX1Zk1mPMmQu6++CniOVE5ZwmoiUKktgYZ7trYDqrQydyJpb6KEI/XZWhUDu061h/bpXsKIK1wTQ1EPLkukll3sUcdieaJTGLhIyMSQ57/ktVqr5jw1rxm1uWBYuR0dVtf0dXAPflMnF4bw/XUNmyMnVQSMFCXZpYs4FgL6UVDvBzEywkdDMZTDs6PqdEqFTB7XBqGFLh2CG1PX1pvuh60usE99+zsD9Lif2z9hypu2WPXh5RIUvk3V7Dg0UNhKPcX1QEU3WVAy5iIkBi1UKYRWYb4PBdAivt1JGkMogbhIY5bNQGr4OeCAf99l67d0G4qifJndwk10BFL4Oowhso1fVJ+Wx/8mrX2d2ne8fRaK746VMHRmwg2Qvp52dCI2EFIUvUrHevjlPuk+ZwBX2eGbmLDHlbYBEK2q4x8Y/VlPNNso+K0apq/8lgiVL2k0EPltU5qba1JB3tl1YhA4U7Gnavnj8qRLsN61SvjXSmDLO6U+X4sAS+3ibaaSu/crWl1xoWupnOVR7nvy3UBVrOUUehiXu1ijSuVyfCDj7Pm3Lq4fJmbAt9dylNIZlKPHYKU+3CAio5c6GlLchijBsaVGvv9F8uG7P9mSeTHDkvyEAPtw9rLcpvpxSzs7w6l9xzKfO/PWgOVhf6SZ66dnuXjFpx9MI5LOXG3gS0tQv+mQabeRGz929yvRQ6ymL1Yv4IE8CpDm7Z13hEvRERMWBc+aqrbBeee/MGoGpta9LHrGqE6ebWrv8da2qTjJ/r+fvn2mrwIBq7DiZ1AqJXZl9rJNktbo0T9/e/RHyCe3fdSErNfQzEbqT80hY46IuTpRJ4bDe959WnbTyh1G/0QOTujjolubrQwJNi/yIeJUMiiSzqk29hYlsczXtvUZCwU2aOCwg7jBPJK/XiBlLP+lRDiy7PKw75ENv2eCjxVutO63oM8baW8j5rq2Jg7gofvS7giub8rZokGbMJw39BZNlC0BdsXs05/m6ZNJceN40I';const _IH='e21ead37779aab0679fa337a6320826864a23c6cce47c180b31d63333007ee3c';let _src;

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
