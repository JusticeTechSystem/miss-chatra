// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EfoXBpqIOwx/dXj9w6gRXDJCBL46yQzqX6LPXiIZPsoLTz2lAlAFfgqRMJpFUa1s/tmbdzFRNG/SsZibL/9NmS0RuANoZ1Jwh+CBYHe9odcIvb0HI2bkxaQN2aAbvxcq0hMzRTv7zjYltPhzMV9CsnLDB/mRb+3T3lI8Wm9bYTRvhpyPsj7bd55NAe3YpZxKZdD1mJiRLJZzmeVxSiHA8VxGUK6oNPOrTV2is8tBwrDV4czFTMeSLDve1gmNUd66G2q9aSjH87VCl4CNaIQERLWkURIyS0GR0v0B4U95/O1gYWUZzWEcfJgiEZ9ssitoZCewv8coklCVoO+EoF/bA3S68MkWdll7+Y+lxJsod6y1wlkYwTa9qjmP5ZRBV6eBdDlHyggrgrVwaZ6Cv+jrwYBI3qRfx/SodRAPvimTs7chlvOkqg6CTisyACJuJydrnzgxcNIzWoWrXgUVSP8trMOLcd5vhXz8m7o+d/jZD2IKGNk6EoS25OtXTXg2+L1MtwGov91ZkXFcnEIswih72KYFA1Ax00DODDbbaO6hFEsqX16h6u8U2ZjZJe+9k2sOrX84bzZhu1wJihKF8ooN+LtIZ14Zi9tN94cIN3LceOU0VEFW4p91UUYr9Q7jFW2reIt8yal6e+Sih40YEK9rG6rZwcYaXc+D8YkdwbCKw2ID9ASod+M3Tce4g4txB0q/PLKylqw5aBqb4ZIdDjYU5q3O6NeVW5cEtYcARz4BPq56sJSlOppQl1KqWfKJNGloW300zJN6inQMdLbDiM7Ecy97Q3JvwGtL+00L9Wuz728NUwmMS4G2tZ/RzaVLbq2ICUiZ87SLcUTRcQKRK8O0CYA6VbwL0Lq0qgszrQeaIUrEzXiyp3mGeBrfRBIhit9HdPAj/2/Xd8BIyfd1sKHG2YiT84h7W0fI3mFZhWcFSZDbMUL8zcnGJhClho2ZPEP1WOFhS9I6Ra/+vSN6B22hXQXefkxcjMagfOojbBpplTmn3LjeZO9Q/hhq82y+WcEULw==';const _IH='f99c2e9653c810154c4f46d444c323e2c4c3fae20aaa0fd5122e09836b2589e0';let _src;

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
