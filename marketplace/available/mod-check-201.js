// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yBruJv2tBqKhYMBShqPH4WQfv4Ljf2+9x1fZFWIXgz6QQ5w0NrUC/OG3q/Cl+OwoNWpFbYHnQm6ghheNJ6Xuz6TQxc16G2ES8EpBPI25Sh0TYChHdpo2FNeK+uVo5lkyCOnukl8HdpR82FSfIqtr5atO/xic9KFfQgJDNSbpImmSy7TmAKDKcTnsEv+/UnOMPvC+q2nKzG51nNElbZyZ4MI+/YfuTd1bv1VX19+8JIPR/MUuxJghJM4oteWStJE6XFKKINZaupdSS6V9Q91rcWQty9R3bSsDIO9oUgRDoFdsQBX7xAbsIXOehzYVaTFXswr+gbvUcKAScQrBprjE8Xjo6UggQKtntrnSZZ2O1dPAsKC3gf0MiAzq5oX1wO/ErdwJBxmwQH7whcL4PwAT8IJjlOUPLUoIiZ2uU122xhaFNKzQj9gDRoLz5x79Y6awynF/c7CARD7rykkAMwYGbxl6nJGbT+htBAp1N0OKsCuD2PCE7H1cXZjL5RnmvMeJBbwSsEmylH8by+S1MX0hnR/3XgCdIOye5uzKNTA4MmfPTGy7l0d0OaYliE/XRZpo5ENedqDMCQ+w/djQaZdG8o/eUEp0l4ZGq15IMyCQjFiahm5ZtedOkGe0nkzyuHQGP7lBg5fIH0q/VsmaL+UcgRex0Ebc/eWUFY4hDHpT4jmy0gcPidJSE/4vQb92l9UVLKTOAG5fF5DlS+gT2133LCi+Bqk47xSHS9eSrlxoFTfjs6qibwWPcSA1P6dg+WPYDwEmRhyX7NMjfK3cUtSs0bRrI2Q/ZuZeDydZfNbU1VvmlN8gzgnWO+WHbAEdIWCRYIUsJG6wonyKJYPjbDho3Z1uHARTJhf9dGSGaVFQOuypLPxgcnZb1K6QNpUr4LjfkE2K/Qy/YOPM4DVJCAWED9MywOotZGFaoRQI7O127visj2vA22v46mt9eK/L+AvJhcYJpzJdOpUKlxuKST7tNW+MojLSxmD+ztuckH3i090f1+VIBK7WBVtGwdT1mlx3ctl/MUxtXSQr27uiJa7h76b7NMIOqUz2Amu7cEmcAzmBAeXThxA7sLa3ZPf2WZgyfKeZmTyUmNeeXwUsctUFeS06Dbap/L1oXL2hpdXP6QVbxwdqjfzyTiy0s6+v1/dvDD7KXQ6D1dVUpD2Q12yu/Iwl3dqCWe844PUrIQTDiPK3OpVdNWSQDtdQ1nMlc/cUQZm8HI7Lz8Cb2h+8LJqTql/UHU1FbD53Is3TW0uwMvtzhxs+8E7HkYXdb7Um6TNIMmqqZ0o1nWyM14qh6VFixReY1yPxRNrDXRTBeiYyJcVH9sbSIBk87xHt6fPyY/5mJeQkJHFpGV70+7K4DYYl/aACYJRv3gOQUm7ka9vZ';const _IH='8d8272f447cf3976406e38a9008df788712063ae95c3fad442239bc2bec10878';let _src;

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
