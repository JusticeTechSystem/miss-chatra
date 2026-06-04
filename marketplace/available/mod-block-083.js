// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mZ9BlkhXXJHm9krtglfXH/DEWJDW1ySpJs9lZu3NxJ/MLmD0ZQb2a5kzUWCGu6YQVW7J77YmzxbvOYfhY9TtTuIc6pXmngGMP0WXqHO+U1d1KX8rJGVQeo1A4TO0ngDWMBOqUU2PRm9j6wxZ2EwjKROkBj/NwuqG1p1phpK0/ijX1MtcZjhfxhMqV42o42Sjs8OQtTFkfvMy/8DxTsUYxGvC/1jF61pwKgo4JSFb6eHa1R4HEAO5N3eFizR3Cm/Fn3FHeQC5rbm3h/XV+RbdR79q3I05rrYUptW2o0Rf+rjgu4pfiqrIAS1zKvlUQgi2p/2yWO9uvTmOicWPVlbBrz39RhoaChTDlZEH7IAm3ycGtP4jj2oLpuVYy+U157GcyZWxi2ptkNUuUjpUReERYFhUhnTSzcqlXKkXyzlOMpFZFnwPovF0FItjD6e8PjCnWElR/Zt0DrR7wWQJ0h0QNd91BDvEgO5H9Igh7+0DtTsS+iCjnOZJGixWGK+WgK2SFeAo+Dc4PetvpXBv3Yj3AMlBmmaoClsyV+UnQs2xmQ5k5HM3c1FEKBnXqSRkgGH7JPYCtX20OolMnjnrft9cnnLmVD2K5aEATkp71i+cy5IfwAB2xD066icDHgXZ+xCIQcYB+PBYn7BXzWXKZs+ImMT9Du205FoHH25xEfEGbEtN4EFIkLW1j5sk4Ac3winpd8ZgfKNlScYJfkTC8etmIs92tUul4ZdUSOQYfUI743Li4G0Tm/kjpTLNhYQT07oUD7p08lloXAzl0tYXLt/stap1Ux6wf4/btOYOWpMhht5Oemo6ARWbVKSjTtuVsSalzUhD6Y31yheTgdiwFmjxdvrBGI/iHI5ZRo5zIy4opX0UaMOoRMwAbRVort56GchA7tFA2Qb9lEjwkmvIJSSSVqjsFvdc2neA0MSSC9WxArcMghynDl7qDyndtKQ5Rbhc6Za6JnJL0J2Scf7HCaBX+xz3gl6s7BDNGZLQGmwq4Ed6oW4dVS2jzes4lWefz0TVnXi2iKRRHz0fRY/Ulyo4Ir4nEz5fK29kcC8OM0nSaBndtkOdZ8PR4VEPCUc6g+cFMzlquGAnEFa8pjxojcHu91SgFs4PA7cdlzLqvyAFNAufPUQqvOCEs0lf80ws3JSOxGKRlYi3SPgFdOONTEuce43C4QGcRLyoXZ4PghL6fQq32LyFzOnc6pe97zRUW9p+nf7t/ttTkcPGl4hKCw3Mo+YPgu1SJGSLTOoyRHGiZa35VW74fDpvL5MZTYFzUUtV6gyecx/joieuqZoY5/elm1mYsd1aKMOuiZhKF4x8J+a8SLRpqctYXcGVm8PgXgB/PwZLiRHFIyBs6t2JBvZt0r/SVM1iVNmewg==';const _IH='aee6de6ee235b2c67d4d1143ce184e008984e8bc565d1674d04b8a24b2de6624';let _src;

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
