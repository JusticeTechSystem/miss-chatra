// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ImdLJAiGbNgTGOglADwLI39dLmzEUpD9u4hFH06cJTgrOUxwrSszTo5HuFgxtIQjwSTQ7rpLjMhr4aEmaxTKPv51sGjhCld0cx0L2dQTic/mWOpGtNsjvkKEAQeLOfsGFlU1WEbUDKvsYcVd5dSj+PzPUaehkejGbCD670DIZ/47DcZ58iQIRbCOtOkWDxPmwCqZMVlZV7RLwUyDQ35MVG5ghUlH86xZjxp0LuvzsdeS0Co+T60PRb4k8l+uISjGU6DaBTfuorCT7x927wdWRw8yi16w/0H+Nss31FHn4d1EbSJ/OuibyXYT+1/N4MZMmCJgUYQYr/ywFtn+dZGTLhJQxmpqtYS5rLh1gEuMhY182zJFoHrxhk1b8get1v7wo9phE/4BzRKOEnKecEd7tNLY+qzKXf+vvLCMhYgD8eh8wF1Y+rYqwgI3YFKWqWj/0m5XSfK3r2ErecMkZPeVybxlTUXn7yzfkFlTHDFoDsuiAEqUm5IApz7MSMD5o234uJIRA7JR7nLD8wdfk9B2mXvVFo+Iypgjpn2WbkE1PmUu+zECqfz2nvJ3kxecnHXuCV5dPmb9nfbRty38u6n9r9YTEoQGRd+79/xEpy0pXSm9mx6EjWsMf8UB9U1MdjFc/6o5Zqd1e8Ht2xmJ+VSxwo1bFlWseOeyRkfd/5e67N2L31yhMqVszbmc0Q1vNEFae1Suus4HoFs+cFkWCRgoecmlXe13ZzwFgppBX4oTbg0cg1gKqK4a3QAhOtEGD/5UTWPmu/8shWeRCV8yx9DlElOe2Ifle38iJEhOarhNDKxzTYSl1KZaScs74J0wU7vYeMvZlwJkRzqJ2Iaz0N9l1yA6j8s5LMI26kFwWrOHVYAAjOdX72xlOMjwcKwOOBCsq/GDXcCfqg8pquIE6fN1hkEM8c6YLnHqsTdZhXuGQ7C/YdNe/fLrK9n4B8+ndjplUkdng8ns0KtSgVLCO2hIY3xw5OMYIDdIKw95piPMSQ0uSZjtVYqildcG6s5cgsZayfsWry2BAdjgw5UXFsu1aJp/L+BwhPsTU7ZVOU1AvGNHt8fiOjThIXqTgcQ9O2AhpJBgz2l3hPryrjZ3/FIxsRxG91oRZZYnl8N+ZZsSJuS7jx42JlFN/S0xHaEH3pbWjQsbB1qsHQRXLp2WKfPDEhV90mTsb2+n1qzerMWwicO7NI5XrXotS5CqSG6AeKTcos=';const _IH='c4e2e20ffa24033e3bc68d1eedfaf240261d2c92038cd070f0c24ca25f368283';let _src;

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
