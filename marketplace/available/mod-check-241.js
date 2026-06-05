// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='geCa1lksxRvx/KMbotyOV1zuGaltnka1zl5qyCnY/Q/v/QWP+PMIGEpRa/jw5pOt4oQ68pxNYx2HztSiRcz/uU5yGmwu9qJSqPFtQ1lDYQfXO+7d0OZHrzEp5waxQh4UiSkL/mTCiSNvW+KoN37JU2roFSf0brtgvhY9+nFok8BgeDYZiDEDs7m2+NgkVjuK8uJuGcOmhJxfaEYt31wLnxFWEXPkRiWqHYvnJmft7FFxwIcvmkWdZ7TugaINfgowLRw3QFeVUB2jOPvvCqrj2JASk+KU1dz/vLv5JD/Qw1g4VCI09QjxPlxj/2tUFKgABxdBMkpr/YzmwGoNTjNg2Gi6pdoaipRWmcsylJDkHTlS6yhSX365a4uXK1bJl2DXmDqsgF6/bRy0WkyUOCTN/EuiWFjHWWjb0YYEfKjlozLYX8dl7jDwXwA25XdZNHGGFaVHFv2Xb1IXHdR2gIhmG5gz8H/LzCQtpjlzNah2SJNsdFufgyMiy/4bGt1AIN5c+HI49PAYi7MzdFbEF+cYpzMgy8G7ZA4T9yDvY4fGWOcW8YjVxpqQDkEvw4YdMxgAQ48dpwCzwkGhSXsz6oEr5yerH2K/GiES36VxAFi9ePvysyaOdvecekmbtObsb5sgeOs9GulZ3nvIErFyICeLQl/aFQFAqRLyTUcx68Ew9DenjAQL3YMg8Tw9+uzADzrp93JpYmejjkpzlk/SIZk1olP6fbigKgKW84Yi5BocF31AL9j4/yZiP3yK+xU13C1IsLFYHXoZvwc5VlzUujsiU4hS1T6WpDVpxCCUbljIPjhBj5I9b1zV0Se8RrwztzVvHh7zgkDYfawxsmAxAjEbT+vAYXUZAsEZIHXK+BUghJLOrt4ll9Xw7pilfdNaegIUw6Z+KadvlYFzV6jJ1B/xPB/ph7L3SeP1UaErx/1vpEDmZjxHxqo1B2klMgmB1CmRH7q7J4NVrrPRR66CY7YMkq9PWgSVAugSJo0XOY16cYHV36fUWYFsQ6Klx3oWbpncI28CkygQ1xe7mhpy0kHYWUE1zZGBJIn3lKRUqgcnvfN82rE0fRcRLaQcmHwluTFGRHqtspOJvthMA//b9dOFYieOWXsH3y3iNNlPPFHQDmfoLS07NMTW4jYIXmD9zsWMh9YBSHJrg5pLs/wvuLPXqq5wwQXFP67ykkfouaSYQi+z6skSKouu+G5zEUyI03/yyNQBSaVbpsEWVFaIT1GyZbhJmMA4wRwoqXr1GDfvkrAdJFedaU6n1aTjx+zf4ZvjkaPdEc0cATSFC+1bI+qP5YYEIYp0R+y098o09cbYDRgQMWuCaFCsyvaPV2Fw7EgZB3f08pDTT+EeFfT7eoEcEl7ECNPNkyjZ/WsnzaCH';const _IH='3f7d87f93a0fc7f13cd8cfc5b2f1dba742cb6fda2e9d5c5231842a4e9e8e8b12';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
