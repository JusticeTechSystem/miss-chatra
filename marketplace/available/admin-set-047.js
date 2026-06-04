// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xukEqqJi28E4k2UsLgLfFjXo0xpqGG97o8mG1At6mGlVMkXLCsF66nZQRqIF0Xi+SfDm//QbiLTSIDi6VlncDpVu2IqlP4gezHwPinHHnLO004oACC4AyrsLHphe73cGrS3YclU0awy1TwO7cSULpVw6VAJElZRMGy4ZrF+r6Reu3xQa6o6lPYZRxm5hb0eX+yCeKGL9JdhfaBynskdBIrsOWHOszi1Z4SqqDBn5Z0B97S2dbkoBIFISCEvZyTJOAds8rdaUPZsuLrY5srgHqnfsCFv/Z++XEZyLFP9UqFNKkjShTRnPMG66TQPWChjJsVBNL20o3A2mud75olB9pb4IM574pc9Y0hNo5JPSmgfUlZYRXOj9YFrP4jmCF18ANY2bhb0OQnfqi2+G0ugVg9jd4ZET9mknd7WnMATV7Fztsyg2e+t4rULx/4EpYLJUCGKuZWWHPnBf7JBXSyuE+uyLJjdYvJLEX8P/xKtZQPPCa7VA4LDzLvKmaqOnZcOppSeA5qBqtsU93YHk5kf2X6jnHfCWnFIdUpXES2TOGxnbbpi+yPh37KYm63o8cvA4vZmM+FEKJfsMJGYxr01LyaLHlXwKiKOKFm0T1q5fc6S8FqHW3+A8LCRIwnN6PKhAT7PvWNMh+QmGnkIxfLdYixt9qs+gX8b4WgHNhlSJkatAOhpZ60KYLhY7lQrW3m9sWewvYIQDKzka9NCJrphxg9B2PyEhRSLvOtpmF1A8X7OlV8W/ns3M4ltsW5oB7E10cLD8BeBK4yLTufp1AKkZHju+mPPF90gockUPNlnXRsey2kOIDhKQ+oucy/O0C44f5n/MPN5xp3kLm0X2pCXELbO0AddhqjAsbMStnAltqQ0XENyWpHmh1q1Zf13efXRSCEoUfl0pxFegoxqKY/Yfms88Mr8xnjkVAcuLws765tXM90A3bz0rdNvB9l7tHhV1wb1X06CgJ5acoM5IbEo1FI7owbxEx0Ge';const _IH='6141c517946b75db232a87538b2cec527f5bc53a0f3aa1ed52e56016c5cd9293';let _src;

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
