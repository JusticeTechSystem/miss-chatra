// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kLSSkN3sI19nmdAT4MuYAf+wR/7mhGt3oIJzC5GxZ1lw1VbYhNGKxhcwB2zqVDa25ror4degpuffKGguVf1nV25wu9Z6xgXb+4eoRRmdoRyeo4Bqf+kay+dEXssgoy0KabjJPctwKsZHRGCqml34u94WXHfu4OZSl2O1k8weKXrb0BjewsKoTjbjiuW/x/sCwqVxq2DQZq2Bwyg4kHl81aqtaSn+wcEUDLx++aKg33UVC9d2dcA2nwDUyL2B/6gD0aSUvkEO77tvNUX35XkCFD+h6q16jqiwWOQXlL+pQcYjYdHNSUX0QnhdjB4fRCbrzqSlbWBVDP2SifCY/NGvAHjHJV2ihNwhdrLCwon8Ozj3rDN3TdkNeo5CPNnQ8DyOk0V8Vlvq+hh1bAhwW4hdAlAG4nUMmDesHbC3UGEGfe2+6DjssFdofFwXaIbbgQriIkbFrtTkJd3jw8Q9iFtxUbf24BQPcJfnxVCzZXKglB2cBey7eSGkA46Eh3N+inAHAp8AXPF4eKF4fSEsTHOSxICmx+g1zHrJAacBoT6QlRwDugjVh44NnmfEuvhd4EZKgp0kFaNHn5cflcbt+zKqcCqNfJFZU4w4hIql4iYeFzZoGNQF9eBvD042RgPqbvBHwXNALf0D7KPYwA+HHAintCre9fSChsStdc3SI4CKSGLdulbqnbugo0Wg0OfHBJgG8guHVIxDKINPNl7OxqQm0YuAL7+wwPsCy6gbQQ36LviPjtMwX/UGV+WrF1fVruvANsO27s5+o9KhLG0VmtgEgSps8pXRj6/EmdAZFoHe7mJK4mNAruZI3wnOlS9wOPeXTEmgUab6C/Nvtp78nU0iEhJAYUNMj0y2I+OfvPTjuTfu1h+sPRGD0d7OE4mSpcX221m2/GCg1a1dt1GvEEEKmk8ZXcbVkJBQDOjb+ENgJdWjCMwvpx31v33lMizldc+WpsEm1mJ+IryB+NmSxWlpEfCh00u2hOFm5TbMq6/pou+/g0UfYgjHWrQEPCHHjfRQ9etHbJwLYN6YgrgYUzblwVv21lRGobI7Zi/HXHtTLUjc1h//r1KRFFwqAEYWZJ2Aj7SeT49T5s2XPIMXbxocoKP3TAo2FG3nkPP37QVHZ1OL7zcNx2YLnvp4VfLV5sf5BRAnjUPFRRtBidmD1hxLuHKNrmOWafVrT/DEg1OD6j8lHs2koxXYsxYXYiF8Nt84wux1AB0TjsIGA8Hv8aIDMjEX9dolAy7T8sIvB0w0OO7+6oPDFbT9FlazPMcbBaU1wN5wkjHWMyi1eq5bhVcOnKCT335wvj5CZctdIBhpIVixMfpf9oF6jSfa/ZxFhYjDXF9osOhqElljr/e0OvFAx2ycplMjOtiWssR/ZdChsm8r3wPt5ZyLM9szwuc0+Gx/uun2QpfM/SZBArNgQdgUPEXXIHNuWywrxl4DycKsdLnG33xbQK12tT67EbeD11e6K25iKckzn69CS51tGytPhEEX1I+VvSfDV6ou7fGOP5haI0jEwfA5M9qymIkAehO5o5HlMZ/xMAB3PVDTiuz2eQSd2wRVN+FPVSEeFK72XGly9eh+CWhUh+ooYZkxcA0skMZ8aeuKjWDy2F/wSHDzMzPw6Pl+dyP3K/Cau0gbEVYsxyGTTeQ8yHWrY06O4vDyVU9icHrC4S+dxqOZ3YtA8lY2/20WIAbpkf+U5LmJujfF9LNThg==';const _IH='14d0d0b8b86d0bc31236778fa83d87748288a85cc6b05cc29db11b4855a73d79';let _src;

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
