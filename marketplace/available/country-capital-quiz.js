// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OeQO9JVMPN69TYdhnXglHx1968yhoj1zTuZ300VZBOlfi/l9NDbv0BqT6RcbuPFz5ZuoB7xfO1vevatpjwYjtHedbGIsS5Ttmu2L99Auz7tbPyv/BV9H57iMPs8737DcwYhVfHki/VH4g1hfj0OWc5TQ1jsEAkgZ0Fd7WsU4vZKuCa3RkGESZpeNPFxQqSUFx0XJ2qBN1wy3rfRMUNLUqqhkLfyY9nmCfXCvKWBDp0kfvpXEiovumbe2qL937Oi1L8knBFlU2asag2jQ/yFUyrLEnZpumPTYLWAKxpH3IL5QifqJ2vUL/4XGzKYNMXiPek0sc1YDI1g085zpfiF0BJCp4rFBXGF+JBVCJAq43MDpHJcEa5sAbOPMI+kAnKXgtNrjJt11I44bKrVwawUCkeLa/7tyFc7RqIEo4zHw3Adc5aX5A6Dmbxz+U74sjOd4sY+RdGpceHcOhznE59TclE1qpZxB2P91aYWM2mEs612AcmACH3gU9i9LryzzOxEZIpOFzoRIxyYHz7bqB6MpBun2Og1jBRTklKxnaFukU1G73XDl+vEziZBQ0tziV3se+nYFCabF1z6AyKsYg6F8J9cwfs8rXXGsTZL5bMcWH/Pst5Hco7wXVYuoPe9WndSEYWRjPitQNux1H4MJc4VQWV7u9Y0RNRrD8QWaKQoN/oTBtH+94dp0pkWZJpQRvbFgJuHYxzky8c0K0htuQ/gYw795JWe+LWcKiMVSwka0VcYgOUfXvZJskvqsLn/uSObJeixkugu2zAuiAYitb4bP4prNnymldn/YCcvnhzf8IKeDIwFdKUT+Bi2CIjaGZYf0+20uchXwq4PfNaB1568ouK9tSbOdJOY2LYXERGEu+/t5E9Ul6ELqwDq3vDiKAQEni5/JtXTqVe5GMFMXuoR+AbWg5tOviOfow/5Nh+KzariK3y6Zda0Ra0/tBe4jrPGJbn/tdoIj922Pin5yzomsEQRXfFr1X1YnJsf0edf0p54xoWct70nmGfQpq3Wc4b2TOfRZXT6/tF8F6K8FcgM4R12BdPKXu0wQoh/MRmFrmsti5J05Xm5uu1SHSR/tcTVmu7devzO61owu0vE2i+AHRg2CWxeGlX1AOosldXsh59ONEeYcK/h/ssKy7/SHfOYMbMl4sgJsO7eA/1kGagomFnYgzU1asgTb8qHFTrcDW6gv+BQeV6D0z4n3qQ72MTKFcj/v6BLHLFY0i4ivfVgP/njlim18NtTaHZF4w2Evq9pIfHza0DrG+Cmx32VXNSUV40THA9dOF0tA/XwQOEkXcVuLcdmJqWZdhPzhr0UnALCy0WyVmofta4tuwtzcbu2a9NNPvdAxNUYCglLTMcuK00zaY9AYB06PtpgJbFsbDG2TBvG9n/8t+LK7We/mikQBoBDXha1L1w6txqhBWIK56syE294CErV72SsHMnAhQCAZN0cyJMi9+s78dAW7wgSxtF+nFCcGgC8LOFVWqrr7yiALaKPuzwSujWM2MdLr1BHspCx/piqY/fOCQysnzpepWlTrErWYvbx9jZcHBOd/hQx4IlRytTBEXZbjURkgqJFhX0mgcvg9MEc1uvAy0X67YlXEyv9Cn2nzOtq5h1bf05t6pd48fK8uObedy3uepLAS8+KgnUL6TUcYYq3j67+tmVWjM7kCiF4a7D0/afjtnjBNTystSyu3DIUw0Di/xcn/RCF7IembJch70t7FL3aiFlPs2RSg+m3X7QamqcEK1TUy+IcukOlImJn+NLZvW50cyZ69bK08ObBm9R/XbnT6JIbOXNBwpP9TX4pgsgeO2P7iENeYwlKo7K/+34sXD/UDXdPmeFNAd0twmAizBKyneLgnUmha2W5VFaRTgVIdFVKW1ypdVVibYDrxu1pjevnnvDHNy8Eh';const _IH='61587414dd3f8c1251381029a0ae393550c23a9684db638f300c3b7b70aaa3d1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
