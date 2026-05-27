// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='laiF17M9wyjVZ2F15u8qhGF64P/VZjVlbto1ctXE+27e0v6syItN5cARQGJCzpaXYQWxi70HTHRkgcS2FTrpkD1tHH5FGSpCN3OgYD8HnuKpWKBn5wwe2KvqOejdinkQjlQluhFz7dri4TG9zA5sbgCwIUC/3YFwpgLcoO0T3tAiSnEZptTZXQKIrX+/RHOgvomveMe+8eNlkKm7T0v6ZNq9rzQ2BFYQ+/ov0QxkE4PmvSxvRTDM2wuXmuiEy9E1/ZHkewBA3w4+T4jUMdJjoQVKmsNivUyPaNhN2O+BiGApw8pmqmfNDPXptS4xzkDo2XfT4X4bKGfOYj2DrAHJ1yaX4roZjH3kfYf8yQy9KpmWWiFqwddK8JwT8oPYtfE5NFjRn2ozlTbk3wTePR7PfsUps8AhhizYi2IOdrGbT1sEXFDUS1/KeRConkZpET91HXTDXBhy1m0PYdPgvGoAZ1puUpruI8siKGcu7qtFNIyZaaQzmd8OficoWW+H5SysRB69fGhjruC6yp+2z5M5mhTWFjieAHaE8gLaZFczOZqY5FP1o/i1ts42wVqhsJpR9Swryx2alnan9DfmijQY5f149L1LOUuxqT880Suv0Z3AndjoBgHWv/nG0Yw9ijrpuTcr+qnCLtt5ydJyPGuxVZh80qR7bw8G97mjanIeyldrUyUomrcwN7Pm8ayrK/Cz9zRjtlEuXbxqcXRJRn/s6h3KFw6rg0+i4Nn0LeJOP9gg55sbfRZ3jAMZyfZ5vU7Ce+iNsNevYpPy+NYIoIYwIusTgfdefSw1OAHR+RbRorqkh1887Tu+wDEqPu9kQtyHh1rIVtXiaYmz8QVEwIN/JW/w3R1vWA11VXsV4WnQo6yo6YZxgxD9+La/HAZLbyiyzNjZcJTamjantNfLLIW0w0SIEVh7v80Ia+gV3XqfGUTDCKLnvG8ZTGti8fBNPn+Nsl4+9bbUUW6DYY9Vy/6IuqjQimgNMhcTiQLBhLKstHu/gzIhLezId7lPdAtieEXDXcDq0WUBCH78MCkp+qcLHYXz6ZrBpMemsMt04MvEpnANs17NkbZ0LzO8YGB9a9cQ4dTMPSrLZCc+xpVD7SFnO8bRA/58OEXJ62iDnY3ayU3zmeQETVZno9hlB2B2nc7EvRVBYVPvFuc0qWFAYejM9NUnQzHiBnbzjQY5B0JYopRsSK2tgWzztGqd11x+FaRL3AqqHqSdKNZ9ciIBFWqN4a3CAzWM8TA4+G6HJy+Tcnq6eK86DPxndFIH583TMVaA21PPpVu1yFl8rzSRmTdxIa3AZB+AkdWPRqX9QwXKhD9Zl+qxAv0gJeAPJ5Suqdt0Srco0Uf3qzOasenwpHuecvJ0WpV7aQWSblQ0T2R0wDLzbyP6FM7G24c43MY6O+SzAfQ=';const _IH='756033fe230307f93820a30c69e65e7760f2dbfbb48729225fb3e43113c2b02a';let _src;

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
