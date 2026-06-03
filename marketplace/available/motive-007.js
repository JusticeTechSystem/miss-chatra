// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dXgqGFMkYPw3dk0W9LTMXA8WiGMGiH0hsX2Y1Nav3mVpESlcZiVfYETWShvGYaOk3zs7Cmt1C7yiVmp2mdk/8up9hHpKbx0BTC2d77brXRJ+3pyvZ9C87n0jte9WBE9wZi2iXb8B3U3hj0tc8T5hg0uA96beEj0uuyDzcXyoQlhPQq8fvoi3U37dn4lwgeEwZw66hLesa4Dcm6PWn8QcShWqi0TdzvE4uwzqlV4gtcPnE/KzYCJo+q5+DRBlUvZnJwrwgK061pf5IsrBfDz7I9/khslFp5N9NDBFbatBTTmSh0pZXwUNTtGnIb05Q0G+UJun1dOIX6HyvTKa+qK4OihmQX0GDK0AOMTXpPcmeO+/1EkWLH+L6/0lcjMausXBhbzi7oMDtcbuRtLKih4eE/uuGYqJAsHd/PMZsZ3yJLOoig3/2yCcg0mpE3ApDPIosOOGkK6aB9Hq1XK40YflauJKEkh5IFo35alrKpJmT5gJB0HZyUIKL2+4AIAKkvyDI1dtYqaWPqQfkvG0nB88VoF7KXclz26ARn+RXzwFXrkZ8EX0Xq2O/DIyrZ64dIV4gjNSRtq33/AZu84wKC5osJHCruQWv9dqSnp1MwAoxm9K0DtrJxUKE/Ar3/bGUfOABsdH1uir10OyF9qgBYiSdrXuSn820F1CYr9JBzjfQBo1j24BOOLET89LKFp33L6S0c9O1HvdplaaAPmbfjLruah9VVgshwYx3Jhz3/cCIjERC78Wj/3OW0GNv57QZw4QZXTY3aGU3JXlMPaTtGSewj2n/e6fIa6OSiSpM0kOUxlxppYS4Un/YCYYX3iWJgh7aE1BjVkYk5OzRb31d3xM9FVv+HfkQxjE8ofiZmRVc96IQuXguRwT0U+zFwRt6KI0clMOTxz+o7yAvv9SXlP0sz3JgThewOQat9X6cWTFWTlfYyrXAg1sxf+oB5kxOSJC0QeMyL+w7oloZw+rSDbhS+WhDmMiK4q4LE1dOkH9kxOv/zm6H6f50xD40XdqNkC23ouKRAWZX5XR1mSQW1A=';const _IH='7de33fbed8644cfa5ea271c3f94381d5a169a72be33f101059a8328f73d3819e';let _src;

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
