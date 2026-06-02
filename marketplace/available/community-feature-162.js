// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gn5856pWVNq6h7fG2CDT/7dt0aDcMY+J2BKIJI0Ln+VYhN44B4SHc9F6u+tDCtHjGj5gWf0mQCfz7MWQRY9X6+dB5FXcvS3jLr06iuqZI2pe5sRDUSRrGMSCp/qP3A07LoBcT6fbWlHBCNcoLgnjT76DD3zxgOmN22boeoBhMSP7p2u6Sr6uhV2AmQyUkpBRYBYr7hOnbmR/HPdsBxVun7zOZIro7v9nUOg442QzMJHgG5XRZe052XxdpM/EoFNOeiinZDvMFjXoRe3jNZOR2Dzo0ijtWd5YhSlZn4sKU08jgZU+EbPmZv1MDh0lxzyFH+6HCHQej/uf1OGHpHjR+RGNdN6SZWFl5DRi4+PXVSzrOsqVgg+hqHoqt1ee+A7GnvxXOfTAsLIHna08MRUGUcGBiRBfTSdItsHkLAZ+VQ8XtRUZv+AcVBXG3VXnX/FBYDucuyqSIYvubvZkoXgDC+mnqCALtkjOAqAe2Pr99pm8tOfL46IN2PIFkE9WyblrRwn6v1zQn7tF1EcrABZHni22qQ35JzJe10EDsEvPr+0Ep4s+eKAr5Bd+dEDc4PcKl//0btUbnlMv+VATdYbrrullI94mBWDl0XkGSB6zOldcWBqgZNRdzamJCPNG473Pvrj5HJIrMrp83T/RQsm8xxgGtKSZS+t7qVb6Ssq+f/8sY9USbyJ7HRJF3I/mpbpaqR49OJKE/QKrkqJqgNJuuYRU+wc4tdIlJXy/Q9EsHHigYzk=';const _IH='0f313e2d8b0f4633cbae403dc915addfebc3ba67ed564d1e4e5c482871f39c22';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
