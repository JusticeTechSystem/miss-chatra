// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Lm2pER+sg8AnCbvoA1Wy3OKH/vaKRb/E//GP0W5CTE4R6AYPZweN+D6uRzBHIu4OrI0eyHxq09jlWkfw2rvXCFN4g2qUfMHflxlANdhh+bcmBBDOQRjpVCqyrjZtEjou6EKuBPWeldk47NirUl+99fTSeUCb2Xyx0R8AM/2OJiAeRt9Mk+tfiVnagkO2jAcJ71/e2X6/Hfs4O2haG+KNvxe8IVKr2KgSe6lztvohmr/TKvzV+9BEenH17Mnh9Mk/RPFbz8DH4DU/o7y2S8ZbBsDumnbbts7FUEBlIaORquTkpmth9PcmhGPOXxtoIztdppoN0mcL13V7KTx3XEf0yUY21k3tqgStHRAmYVP2GpZKm7hek3axaO0WIw+nbaPnSB+FfRtcj/fRyQHWHcUGlJGacxpRdMr+jfByaoNa4kMuupw/evIZlXEc3zGPgjDptX56CvxAxhXbSt0iLLdFL+0+nQ/jIXmLe60SSZkaULUdMenhS4eAkE6SjJyyt3AOwtvSZ8KXzqeIVaSpXZUz9XMrz2yOujnVWyUzyxr8t1Ew661VEW70oKmI0Sg2WeD0DsTOh39j6JbPWUpMXnb7s9PKbliqbXQFhSyr5QvH1KIogA7MZ11bCMMCIjGE5uKssVvygRC4ivRQ05TEhfVlJXXnODYDJ1Ji4wysDDz66ZAwJP8ks4SHi3rhfSz5IzZ3gMjB5mrYq3NAy+FtStpA8p9sH6AEEqaxgsqsFp/4fS6TadIVJLNJSuo48UmkiFQl7TXdHu3aK1BiG9hShxI1k8rFR28fKxDp5HzrgpwLSKv46nK5m3vILp6zXNOxeYgd4II2k8/bR4VlIf74aC7PaR7We82Heau+ufP43etgmFyFGoXE5jlDgTLb7NwzbxO1ErO2Qx8+eYHrz44VSOGjN2F/5ekZtHWAEth4bdlM+5dMbKCGM2mXLq35wPwgy4fDcTv3ExOKJPx1gj9niHedXLDEoYYynFI9SsEH5PcFbabYzXtRP+usPdhgwV61spLCArf1kOcjYmzg8CH40PtDpA4gjyj69yBKP0ql4Hw5uLKjwe3JJ9R8xpaR3JIF4rmpoAkDQM8DrvBzSjw+AqgK6E4AHLWyvhS3SgOgBLxfd5Q1bCvdzwQhF5Wm8BRflXtrGeoioVEFHZPHXqtaUJpA4SM3+pHOb5zIPy62aUq0ZRGKsKcoy1vvz6pq9tURQwbLyNTjtO+C6nTO7nZpzrpUyxWNkFBZD07CDASrSo5vIaz7D+Qg2cJiB+OhNaBzTQgae3w8SSCBL1N8U6s53VoIrXkkgsZgcUKij12mqbe91zc19wWbTYGhSm3MSlhVG5UUaYBtXrpfmuJ2w==';const _IH='73c0d838becab69a0c7861e1327b9fe8afd2bc1b74fdc17136107ff5c110488f';let _src;

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
