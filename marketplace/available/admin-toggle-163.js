// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qlgXy0WAIURO/xgyZjFG+PazDFsMj2EaBjB6yPEnFAZfEUseAKaO6INI09JNGTnZaYeCGUoUA+4+joSjM6y6bnZHJDljL9tzPnUiq13TRDADqzglKr5PG5TBGcgm/KwwkBZIAq2fYxM8//fmOSca8vV8S/nkRm9XaVNnWVDWqkx+fO9jzCCci4fynrPBYUsY8qeThYSuTvqMa/93Q9gOd6rjW1LQqTbVC1iLyawTBfMcoppiWRspU3tGjF4+AAhT92dr6p9xQNezQzbEf+S0afYnzzvYef/D4ypUe0MvLePZPqdE6d+UDkRt4gMe3TEs/xmMPxHKSimUNtouSN1theHF4ortK6XgjXgX22Sn54zDPJwmo4sb8+gd3oyN2xy2YVlX5SEKxQUG6rGVgh4n2gIN0oB3F6aNaaI7fUu9Z6gxqZkvux4+dztFS533uW+6DY3jqzhHpx/QnnOKrdpd5qsdglwBdvR8Gq1WNK221ZaCveOmYwgk+Jqr4h3Jes/Gf07dcrLtU+UU05AoY0K1rtZLPfZSR/k33ir7XgB5ul3OyuoKOJ+tYJYB56PXIMKKJKd+BoXYKyx2xJQ0wEhc8BF2Gx9FRIW+Bih1Q2wk3BwbkQ51DIqmKyC2tXxK+nO6UAhVAEHRTu27aU/yzTPhUMqa9xyyooZFP3XK22+NcBGSWxHDNMRuYRRxSImb+YeXUZTcDA8u4A2vPszdrP/HiBN3FxVWxRSmVdl5BMzpNP0wRyapsdYSrurA0N7TdQJ+tBYvODyzXhPRSZSaknvNhWkgY9yM0MWinjIjUvXGmZy7XJK52PPdsVy8XFpGMP9Ubnr6MBE5ITq/uqFLjaBdWmx+8FMS/217IVHsZxeY1tRa2wUQtZr6zHYm9wWyhp6jStZlGzRF3ZKYaIw8gzfCXCfJlhQrKX6AK6k0Qhwzk+d1K5W7JhwT2lCT/ZtBxvtohVVN3sYyWBkiit7dSdN0NnNEo3O2udCJZFPQIt8Uc0+DlKXVd8c6RNUiEqmFGWf9Ig==';const _IH='735f91649970ee4d42ca5bb4807cdf9c8c9184f81a6caeb277f7d8c245d027e0';let _src;

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
