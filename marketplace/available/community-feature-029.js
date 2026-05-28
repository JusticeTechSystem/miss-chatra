// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/uQoBYWfYt8cpO239lDDdtZ9v1/rX1O1PyDM8zze7ESTcSAhbsjbktQ9pY2RiFRwN0gEtwfU5uG/jWfQxb+psgQ1PiHMDGLtpRvLNEWQg98td4FMhfGZ9ROGq5UxAB5OK2aIQ9Xad957yllfsxOjaDJGmjh2yk71NKg6qFMJ9kMP57c8jaqHnUCRJWCtVZBUuNbdH9fX5+UHZOPMsBuCcRP1S8pqCEfBdCEsnf96fUqdgloSNO8xq0EAygZ+rGLKlqqpltIhvcY4Hn2tN0OtSm/+4o3WAQcBGJWbtdzWO46bgV63hTGDWfleZI+iHXCYtwZWUhUG8XUh62QHz3TSErgEuEWwlE8bL0u2Cg7k/UJky6mum7rX8EN7wVhS3zF2of7+2S2PZsSoRa2hYzuynzcY1dBqZBbqvmkXFy6lTN2NB70x1SAOB8ZqaJYY7hAgKJwy2G1RtfhLoKHxVjaDmGqT9XOLKQvzrxbvY4OTPobBGBNllws8N9pC6z3QhypQSTYRuS/qy+ronbQrH6t8TLXPX6VBwyumaG8+T84Rt5qBnSDBuNXGOAnZbdqzqiKj6pKjHeOFem0WKWJArcnilExEfUnEnxihUAqU5cdMVz+/VASOjTHmtpGwdYFAqGc73cQJ62JQs1iHzBS/AwiWD604Pli1009ep1VXfzJABqUV8vODXEgDHwehe8GZys2iN7cZWpqJ9b31UbDUes12HOm+eHhq9wU63vp1fZfo23gfmg==';const _IH='5f89b69e9590fd6cc628ec8995837e083a776976421b8787180d28bbc5a48847';let _src;

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
