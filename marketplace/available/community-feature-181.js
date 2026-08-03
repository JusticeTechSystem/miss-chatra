// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQherEA1Uvd/MLkI/hlHDzQEWeGiPEtrF2qufES2U50Yr4FwQklHnqyIkNxopFkRvOEBZI025SCSttL+ZntWeB1ngu4h0QcMItpt40Yo+rAfNq06Crpc7qNyhtD1Fg0rqChlQSsRd01ulcJ1tdwabILvBZ1u6gxQlb0ONYuIRyFATWdP/w/jd8jXHKILrmxhk6lNp71QvYEd/U+CRB11ZRXrV4N/etNcEYjjr0Ymoxza47X8lIjZmm2VLswVmu6J61VK7bbcsfJDMRbdS5nQcuqjVGzGtpKHphe74SxXMovMdSIgup/gXWRXw2h7aqlcp1WOqBhQndELNCX1Wasg+cRg0UCntlNFNWQ4saiypmZtVxGQbZt7ECcUtiaenKO8VrFnh+ZMsqUZdbfwiJKTzu+s/UomAfdrj5ZPq51tASupD7OlG66KYblqcIrAwqvOvWiKgOj18mbWRocZ3qrpULs566CtsZSnz+lrIfpO3o9Tk9Id0D6bUd9G+hgT6pxXN0LGQdeulOHZm4v9a87FHTgbxW0/TDH++HTrssX++JPjc6UN5sK/Woc0jErox22NmNISmgPs4d83rM1xI1zRyuvGS/GKFnRa3woEIfUcEuE4tm2Sd8WApnOEaRwUkicr0KZHCKV6ynA5AHQI7rSn1G3HeMm4Z5hGq0wYB2UcYBNuCXu5PUuO6oh9Bom1/wvp1FdTwkTESt/q6wIdDiH1/ocMT9sIA==';const _IH='97e96327a4f183eda3d566276b82c41c38b5995007d9262763f2a653bcc25b4a';let _src;

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
