// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e5W+2+/XLD/HxinfBhjbXexjN9/GxuRWHXdgdldFUMzlhdyWC2dL5As3qCT3JMdMBzWAUJ+OtqbANGrU3J/PJ95zh4qEMbTFUbPzUWY2TIcM+EZ1S+A8OuDTYB734ul+jU2LXlOcKUiwdZk/Naa6x22VzVbJHJAQDYKgl6mDfOzFs508ciCQ+hkDAc6D4KfTKzIraMIhsM/VQrVAj6fiJIknZIaH/hBlISkJcYii6iaS4J9r1zqXp/0Co3yWiYKk1po8yw36i7tJ5SzC29udSCMna60LF0KDnR+sJ7O3Y4BBMXZczoJpnly6yU1rpCcAH4T1WndOdWBEqdtjdMqtv3lEoxX4kadesjhsFdhzAyftT+kLyoP3VRISgRGI14d5Z+6InVXUevbwF9qsWpiq7l+tPS+MYdibYKVoIfXanvB4ULs9YYM0PNGoU+X4U5Ndv2ki4bcYmsCPqVL5ZbGFKd6HvvCP+bEeb9eXlaP458WW6/Y4erpAV6/ZhMK/nLXBzkFiHwwSGF6lpGWR9nBl+V4MSiHWkFrAYPx/4o/mi2frtDiBuFjHXMY7AqKtw+g/Lrx2eBCWm3qR/pSlmo25w9RxNG7/LSnMhtGLnmubHv6kYyvNFAx3Glk/queXr0/cQOJitAdNS1sfYf1Ymea0TfzwlBD2VqsOobhsLzSbc+hRZ6kcNbH8BYKjXOtLhpC2qhAePA+xdMSoMINfpnqU3im4v7uY2rKTIqiIR4FD/JLOtwunSzytABjCMJvAkExHnP9AEuLPHE2zpIk8rkf9XwsxYCgKvWYuRwAqlVVPRJw4ybjor3VUjxeXpOTW8aX6uWT8C1GLqvRWBVrluyKineFCp2D4V7YfRhKEJt+SDkfJhsHyPcaacY455ie6v828HQH089Y1IVUGjnE07rQaQBVNGaK/gjAdsYmWYZGGd0Xg3ecJfXf3CpsuaY8RsyPFL2SD5c2rjYLXPXhVJ/Z0zIV8bmgu8cv0TCHxengDSKBEctciwlv26luziHOy5rIwi9FdhCE4M7kxIL3mvgKMgqZ0MqSvjEwXely0NhOpZwuhJpykdlvSQOCEjuOHZV1EHJKignHdqWLMfk4ELq4p/pgRcIUNRKKqtJDFQlYqdrNVuVJiTwK2A1pj8qhqEkrrSrw4k+Long+TXFOkA5/3Wd1HbVA7mP9OBWGq8Y2XPMA0q0df+8kXtmFebvcXlcODjfi6bly6+WLWrH2h3FO7+72RDPns/80uesIYKC2YXV20Vqdb43DpxIV7IUTWNyY+XczivRfrcEaz6gXsV5O71j1zJ3SE/k+HmaMhOtvthgYt2h8UVeKmooWbhZEwZ3+svTx7EkjQlaLX13mdQRpMoNtZaONj+AsX4kaqMcfbKVjq5bDbTX4Yrf3r1jmYlEdrjG6pCpOJwwzKTqMrSaIz2jMa1tzHdXn50jxuiccaBXsnhBpX/7kVlbSejAUSU62r1F4oM5L36zHgoFZ8EBzCOskIyMyITkM5cOg6X8lbGtRGg+PanRz8+4TgDsUqFGlu/liGH3dPozaG4xCi7Rk/pQ6HV98+SoHBBsaFGF3i+9tR/+ldFktThYBKGMWtXYDPepHgEJBYur/NfDQEFu9lClKCieZg50j9ZqU3rV3fbimlEhWyupFxyj3Dbqqhlq3pDzvga5dtVtY1jUWmuOSAwQUNTeUsapwe51wlb6Sn1ucDZWVoMbc0Lg2e';const _IH='2619819b46f22d85bd6ffc1b9d52e80b1e3c47c4d8d825c08c4d9e3f9de75512';let _src;

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
