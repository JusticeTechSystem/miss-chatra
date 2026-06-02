// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZxpzUJuY0Wdk4JKUl41r9xFeKrGaPplf8FBqIpNKzSSkc/ToG4AdcQBiSOu57w4hC/94D6ob+ZVSxTb4eSwjdq7Agd2q6SfcBh5NNjvxdzN/oujwyMd4rVzRWPtpCYZuhhYeqIbi58HzJLXGRkY5BC25Q9wV6wdU9voHLvL2ABy0rv68lbHb6USYfgjvQ2emxeaqQQqYFx5taEWzqE2tDKjdfSHgz1L1MNKuG9W6fbyXzy+hkP3FZKmalFk/871LIlpdE5ARMdcXRKDqqfnPXxTGGj8lA6NRjDq2Cqi5neNxzBg4+94+CgEiKAmOhBsmJIhYAVQkTDLUQEkK/q/Kp12uJw8jiQfWgShpFZn5lscOLhscssRIbQ2rwBkWyLDQbw6G56U4JS/9QvDRord5pNOjuVG/S5Xyc4Qc4667F/n7GUKn2DaN3CTa3/GY1RFkftRsO2v5pPky0tmHUzthnNGgzNFVunzjAhhD7ga6Q0PCnvJzIapMXoiPezm8pePCac0NXJZ8X2dAMMjGWcuEjSTwLxpANGtBEdAqKbeW+k59IGoyhudo/qcTUwWl9JebvDQC2NfwEr4ckJ8qFFWL9L38dni3JzKhZTr20Y6tBO4eQ/xm0OJKwaG8x8kHOi+g+WJqzN4mK0yIvkAWhFO5QEHkfB6ewi2Fvnj3wuibUDUR0vbCy01hTWeeJ8zabTITMQvp6lLXQTUdK6InwHqcjlQrmhgtWILw54qqlA5HTBCucFvVbD4nHyCpl9Nz0PNT6Wn3HBKGFndRN69lDAI/xoTcWzmsIxYo7K/h6u9Nw+zLZsBkt8ROWUKbh/DJ0j8WI+UT5A64iZPYm1BUQGQoH8Kh6JQB/EIqhpjNg8FWBJEcME2Mb3ogo/CDaRziF+rC7NUQdFc0kdS7lBYHbpAhs5qk8XTLVutdcLCQJyiDEQNfPPLJKylfRePk0r2JXaNNPbXFkV1K/sHxZ+v++LBSZbD3bNO3TkO7VN8TVm0GgmTSDnOXQXReGaX44MEfpgqzRXqMhs9f/OKJ/uGiYBJlpdmcNYeV73L36Gpuo8jMgcMerksO/lVjQ69hP/+NhDNM7nsVZ9MoG9Nk96+mkypmbYtbyCUuVjuCRFijEfQ5JrnBfC9FceGUAWXCtDEWCqcFRgNbJaVoR2+hTi/OxcnfQ9hfYZa1WpjNMM4SbqVwgsp4ir2WJFIqbdHRJntSgK8mzBl0Rz08KHKPwH0lNvYl/zWXHIqy/yVhpK96BTUHPMDF0jcP3znyw7mVOT0kXXOMF/cUPbpmrsxqpHYIKcSUKg1HeBHuMIbXMUc0f7OFI45uyZizg9jV93jPq18g5c6xUFTXpSXJrKnx3AW3yKzOPJ00rp19i6SYr+X3Lw1PLMnIlSIHHDIoKEl9e9AjvlIhoocITFUzCeEMH3JsupheHUCEejkonIMGzVD5xmKB9j/bde0Fp2VxW8czZ3seGIDLDZ8x0xy922mG4PVLugtRzHRx9PemZ31tw22ZzEJTH0GRqrnPtqoAWOkvhVfa4NLO9ziLYqJ18+l2DKtuHYxp1q05lZ0oQfnZgHNR4GYFfbNDL1fbQzgEpC48ea9kVjFgMbAghuYOEPoYczJNF1dnLW28sXMlX7lr8g0FjIOYDEgu2NBm1nd5agOoO+UeGKZ9HaEKXNkAa9N7growFhkvOLqm5lrH0l0+RNdiDSrv1BOWSVhceg==';const _IH='aae4064360582375c2a4c0a05a6bbe02140598e5617a479346988d392d9c03fb';let _src;

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
