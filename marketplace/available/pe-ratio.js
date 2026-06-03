// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5wYmEktecglYsiRrkMZs+eZjx2Ac16KjuphzE5P/kTeIevgZDUQN+oOHjL1AEZyL+tlAoWYpTpCYHotwxUq31SfJeCHewTGg9buFNYa4r5uGOy/Sd2Ryd3aST/roYwnoOau7/6ESuil2La227051lxqkx972qtgY9NoyhwGUvtsivc6oyvjfrT3LcV+ppZ4aCla8Yi2rKCMoeVtyKDO/BRaFl9XyYGj9tsgOeYzRzK75sWpz59R03FN5WnPH1ABzy6FJcE/n/aX70nQ0OY88OefH43Kln4gixWuSeToEL+i/hq+c8dkBzZUITNUGev7rUTuQxGUxqcPWlujLylsQp1nXMJDi7P4CIBHA4fZ9CMCBPyBuHQmnwMTOYfe+FTMuElhxmGVqDn1zs6lNA1qb7bsfPu5wUH0o8pvOK/ts03koUZwm9xkKCGyY362lxBmtipZMeCuP3tfsAQQOyu1bFnLkt54m8YDwu4HHYD3pVya2XTglnxeH65v5xMYRl92BIBoklRCLZaRZ02ns0an3tfY0W/6eaZFFb+2o1Enx2JpmcDSYMb33m5DeovDvea8lVlkZRhkf4aizRWA+0L+xNUQVIWu6PCqPLzgOC1N+oDJfX92jKDUIV06iBXH6+EX2kAJt43qp4okqSr/lkij7145Ta9DelAYoCzEMViLoDNP0Krz7xyVGa39AOASxdIu4iQcEyi/Alp34TfH7nNcrx+LEOmwJmguhHlnO9CIhpWbf20QgjS/qdL75QALBWFihtXXcnYLvqXheyoS/l+BwwzsuW4cQEYGCEthZKy/nbg8mVQo1zjqNWgvwym7eISilL1rpD+08UA6AWtZeArIX8aEDlEsmigKkObnbEjNwOyLzPXbu4hilsZcLzmmj5tqlVvw5rAuC5XISJ++OUJz0y/J/M+NeH3ghkcDnPqU8cIVQPax5uZL921eSdZK+v1WV7RO2PmS1BY5Gui8+22Vnbl8m34KL5aB3Rch1OYwc2zh/4g5WegXWOd8V9EBrz+4gRRb2JF3v2/Qli84xohCZVk3RrTOjMdfac9VEoNFtBIGRjv4kGsCsVYRM5PHr10h0E8Gizf8oD+3CxJTKLo/oGt1DSnzSHWeLtuUwb9AFmun7KDa/djtNKZbHCQ==';const _IH='6a39a978ae9523837c9cdd87ca9511bf219e4780879704d647af496b1735722c';let _src;

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
