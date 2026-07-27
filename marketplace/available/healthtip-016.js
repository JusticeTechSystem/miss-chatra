// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSF8ejkFJpsu49B92Q+hWknQg8vmTd0HsN1fuJ0pJaqQwDk4YUJLrlb4zQcq7f+LJORsRQeNFstGFlgiHo4VenwwvfTaguMFSm0mg6+ACodmh2+GQsoscBPs+xRpUCCqWYAdPoUiOgZ5rEEV3NCfuEHmC2cMlMxfjcpYcqvC99Fm7lxPjJgxBSRxAC22unMVUnAvnSZRsFfNftn66RD3DmsfJO/k67kHIrJpCFQRA2Uh/U4Lf3ZZeboBQftk7CKLrf5IKWKs1lHeTV/xc7QHMA9LsMYeuxuznEurNgc+Tri10ER338Jyq+YKsQenltl/4iw791DF5784ocePosJtVuP1QDF6YrICAehdO0txDKh5ellK2A56KSnk/EDFMO4qIrP7V/icRbM/XKsflvmtqqqyA+ZJtFlIt2F2s1K9y0nZcYUurLXr2qNE1WnL0DUpJIkySfRKe/qLKD3i3xCWkGu+ply6jS+C+Au/UuQ3a5AqC5jPvDe6qnW0YbDl2jyWnmKmTc7tfaxwSbYerOMrmu53xZ6eyOeyu5yiMO4qw6b8YqEUZKLOI6ZhSuAcnQC5x2craZnOy4+ast3dIHmmNgaAQ+jZfaDrA1OkEQqUauFHIQdmY0B0e0wcA/yoff59d1YyBeqoSklrd/Q0pjnPjge4t98uFtWkkKavkKqDvwX2lDlx0t5HkieWmRFq1oGh4WqPeDRnyMg0KxbtRFFjWoZ4immJu2I+UIPBIAwe6u/Fbjv/j+v5R1XliT0ex6EwsebMjF1l6EFfC9Bf0PjTxusiQ9xOJlaSs6tiBoIZtn9rd2rxcsHjd/eGXxLtveFy4odynBQCaP1aFqK8lCmJhkPi7tB88l7q24KUgqOQfWQsOZNowqiXRYmsVVdGd4HkVyolSVYhx0sFEFVpqmemssNcgJWy48pkJYs8xDmvuAQbERAE6lb06RNSR40UQ==';const _IH='f97c56591db6eaa8bc77bb89f71df78e220ddcbe3ce343e4a32621f6a86582ff';let _src;

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
