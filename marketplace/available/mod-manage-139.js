// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+s25iA3L3Ko/1j83il6Bm1yUyhF0FeJ3LoP/srNyqcOk2+ikRKt/50XVkKfqrpW2zy9oo8LxYrVc0aq3H7/i26/WvYzPdeNHNBpoSvDVrlRASyJYiVU3YxHbex6q+uN/4LFWmUC+KIlR0ohXSMzqNx6om7gk6DrShQBdfxGR+4RfoD7b03DcxwGKF2oIz/cAMgO+ViR+hF6rZph0D6HKDRm5XhPqKQgEItCaQd//4UpRznZ3G2ze51LUOMCe8fvWvGbHuZNgWekTZ3oV2Z08h5MZ71cGLq7MHYl2tQuix0vHxk1cp5/7pI+twnHIRiITAQRTWyngGXbcmMEgnUDhtIAu4RP1c4drMjglzrlLAd75eBjWW6PgVntq8yGfeeWI9gt4SQNWZcaG9AwF67iVDlE2AErI793bXoRtAxCtoP8acaZFm59ddUeYInPSEFsPGU7de32B04NYM5m/72tJSW13LUo5vigDOSwE38FsKmm+CFR13OuAbQ6NmiaOuS+6VqsVYIGb1JGx4+wSg+58Y9fBxjayvbNcLcC04pGuDJFsENwM/0j35t1eh9jOzBWsv9e32Vy/YTRpzVSOzEbPEpP3rK1ZXFUwvCGthw3GG1+Z+/IylItR7kTDZKA9AOUzpX78kV0Xg52Mkb168KiIOAj7J0FyE70GHO8pgCCZu5cWXjysiW+r9UKunCzGtWyFQOEt2DodFmaDqBT/0OIjtfoNqFK70NDNhm3+r/7xYkKUQUncXDxYhSTyUUHPZG+iC0Ipezptd3f3lJgWZ32+p55KkMYhyznzhyETeqYSJWpBnoB5WmPeTUtNb0Y5uP5EYw/66XORPQGF2bhg24fe47iiIUlTYtPobetzRIAAInd/4xUKcqZIdGbNcmA1Xv/n/qRWeEmwK5wA4KY+DIeedVbUi0ST5bpm3l/TcVDH2vxWvTjK8DnNMxcubhAVXQ2B+Gmggc4AOaOq1Lybo8TLFJzxcFfUdaTCJrwUK2y63enNbA5gsbSvRX1fXZ98hwtTnuNvCfYyu6CRh+gTqABIBy6uc5/9xASDzB8jPCSGHOzAYG/QDulHYAX4u3EIiY5tgbZyL/7b6M9zVTHNJtivcuFbLmWkC8++hgux1teXuP6+3OmvzcVHYhSzO+ovlv294H9D3GGoEHOTDVkbfN+zjMG/6/iQjmIyRY65vYpCHe1fkaQQ0rZyMRODYVTMHVShWiPt1R/urTmNkbcnF2GZUV0X5X38vHIWfNBsactqoLV5q4VpUOeCN/V/2AHV50fZlkO6h/UzBLQVKG+2M5apvLgtmBfjfLhBgMk3Sl2hQsEw/6/M9sChC1a3uC+RUy28r4XuXdpvZeWTf3ptx/pNwDK2RYm3kTYCMis66s8LSGzf4hFLqgX4sw==';const _IH='3d5dd4f84fff43eea882bd5ba54dc98ae9c2b20e01c52ce354306e468a484914';let _src;

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
