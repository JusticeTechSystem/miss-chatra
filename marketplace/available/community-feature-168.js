// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hLv2ZKIlB1u3YTSgE0DxH4PipCpdsHZNxYLKytloLPPSrNEQEDZcTXZBv5gf8msR/yPvAZguAgoCZEblvUF0V6d1ARCessgXAC1hVItaGP2giqzEBsTgrMXhPI0wrlYQRub1dkD1a4LjoZDFUAa4kBADnKR0jgzUN+nxhJZa+Nv4jYCottVtvVRMtPem2y0SkNR8vZiwd5NEWjD3ECnY2kbmUBtmmxhXsMPST2nHsvwW/GHgmoc6wOw+zAO3e1PhvpahP1GeusD1jrualHgiHQp90OlKLWvRNJ0W5foyLS9e3OwAAefLnMHTG0+bHF1P08KR0/jgQzXcwgGiDRgW+uXiNwbmXgsx71796Ro5BnTXJ8bGBjm1Our5JCmuYpNxRDGX8yyQjHA6c6DbC7ubloWL3CzK+XastSrXS0P1nIcoaACL/CWunHi5BW3yt+/r5ySGRfgNciQLvQQ8IGyUgmLuQFFVpn00I0LLeA4Cuw2oBvrPZIYS8+wOfA3GnJDp15HNrGP99TTjG/nmThCIelKBLWh419/TIdloDoxbe10whcDJbWPZR4UcreZQcEFoAovmOiavafdJNlnY0s1SKFr5m7IPzgfW3AmRy3ycVoceSj4QkMVu7gp02Frvz2bx8oLR9VEIBFKK0RJeIasP9CCOS/W+ctOZtANvmHEoxktbsEaoDaRo7h1+rdvMPZ+DyodiSeMvsPyUzU9j/BTbZSSR2alfrcFRDV9YO3U=';const _IH='84c91b67379eca85ac0d2dd56fa13a44e2ade13b409586c8889cc00755999aca';let _src;

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
