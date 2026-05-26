// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nIxmm/oHyxucq96BKVabUgutAbWpqukVK3W/72gvMyqKtO+xrcDdYmIs23Y5bicGCB1IC9jXkwz59bfERFQTooptZmwepDDhH6KmqO1/ehXrCpebmYhZ70JxTbm3BSvJaBNF9nQLMzdv6Q/ycVCCzwT8PMjYIrUs45LWK3uagQwA7xEWMuYs4ifS+5x7cjW7Q/C1Vam6mEgxxevUtC5X/gkMdLsM3G8TUd3K9q1Evbfr+su6nv9L4l4V+mRNdJJ6uns2nth333OXOyXzaxpR3lniffV+kZjA5lcFm02S8fuSAF09mCINuKow8syCMh3xyXI8zrPUyiDFOhkRScWD6c+n+dJeTd2sVqdxcs6XSgbrQxOLOdXoUph7J6ludl2iWeuugApMkILnFgGKgYm23SapZe9FAXvdp151+2oanVJ+yIRrWFTkzC+9m1px/MQb7N5HMYs2dnESst3eLfbdM8NVjUqzWimHM/oG5jsN3BibwSI8BRxh+0Ol3BXgU1HsnKYsJVvURGlURxUy2f2G6vaYaSgpb2aPGPgb+gdk2mlJfFWdeCJ+Os2DcR21pRzppB4MJgld2LoA16Kzdh3KNkOEHdIeFq9ozOYit8CHqI5nj7afUSldZDYgiTjLGvlJ/1M4lk5RT/UgFRfWuAi0RGmCt70hJ5Cl8KmvNDmZdU/8xg8Zfg1bhuDAIl7a0pR5RG5ZfslJ2+HUc599SYVVU/EvIm9rNvrJbQSg6rlt7V7Dx7eQqu15xE2ohqDxX26pLOZaTBepZ/dU/9PBMwzkGCO1vwmRbJo/FQcK1c8G3MIRZ+/9PlSqJdFXWH8MVYdIz7Nbn42ZqUkQAVcFu7UlHi2JiDgDpCiUv3p85vkZp1e2K2mcSwUJTi6mjkJ0RJ2r3w/siekIN8Nqk2hwSm0EYOviH/E4FeMS3LqEv24PFh7nonQpEJJdtYzthJX7C4rUei4EwTPqmsFJPRXK9muRdOXeb3CgQP181XFTnSNfzk6Q+L1LEi9cWkkSK/SanEIO8k+ogs1iUiX8jNH1MlCnbtGIQWKHzMIPIrRPXS7TSyDfrYylNxQsbiTBsocq7+3FGsgSJv6OGB5q/dZVOKvEDTjlLljEPx1l+2nSgEdPfdf/rQUURv/wppEzwjaxQTZgvazkNHbKmVgzlFZ5Vd5wr7fXz78yxXIGgAGJg6KG4csljrSHJRJKE0tiwdEury2oGikauEPZRRmQyvmDDdj0bK2V+OuojznS8JtaRhW1ePr/p3hF777wJktajlV4MYuDlt3fycOOq4OB3zIP34jgiMTWdmRjZF5YsoGoIVOxdtIBkaIIR4gHNgTQwrL+bfEX/iBPj3r+ffI9D3eX3AKBRJUkRfWRmEic3kgAUwb8ICXNP+Q=';const _IH='24d1096148f0e4a8265c412e9c4d4d7b793da77f07ad8514d016541d35f75827';let _src;

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
