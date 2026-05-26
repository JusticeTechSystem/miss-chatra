// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CQ/Ani63mRqLLGbyUwyxV/ZczU35rOB9sgkoo/C32P4L9DcPzn2xQbgMa6fKI+VWWOpFYLzKq2TgZLk3LI8MNr83q5COmqXTUnd6nDVuph48CBXFj29rTe4j1dfrQ7QEV8mwFMVsplOEeQqGOe6aB13HzYMRuoYCREXclrC617jgk56dKinLzvdCTC9XZyHudFNKagwH4HYMm45Ki3A35h0YQWtetS1RUQxUXXjyB9b7ftOZ116a6T4HU7CtV4CWRXIEX+OfhTihk8AhHFYaAEJnQJWEq5QpNSFOm2Ajx/K3fLlM4fvzInn6qi+59Qclf4EGJM9TyFDvR3d6wON+ugPnvZKnc6Bwp0UvkTqlYYvXZ1zfKcpoBjtp5nf8abBPF+1wEDoEzXp1eCOsrMow1d7YLSUw/5+y6VM55LpPNlvA3JEndkClAsPXptysQKJlPWhWyRfvMFVprtTTa481eZN9YjsxJcjxh4BYyLY8R66OsBKsYlvjsSZYcFkw7HZKZ9Xv4nercOOhq2V4yQU8aqeDJmW7sEvei+NzzKh1v6F04Wym2MM0C2pHSNeqmGwJgBXpXTfaaO+29vlO4i7+t2z+r7Xgo0L1iAZxM7YoQfJa8HAyoIknxFHQDa3/iuV6+kXrDBqT4LiPMHRiTFBWWr/jDpy1P4TjQPZPNoN2FAqHZvv9Jz4lxNELheZ8eL38457lsyYx2EcIbrWFWzPeELGsK8eIp4AOEwVhcCbeqX1FZZLinyfVdVCKR7ldEwqNDHeV4jZz0GZlq6x49M1iyCWr+P1UvH0oZ4/mw4uJPTwyvSXgk9G+3WRxK6hwjvY70248sg2zr0HZhj5fXcwH+xrgO8US+Iz2/TSOvh6f57PqqgZWysJ5EYT4eevXEutrao5OlKEXP7MD6tqfRFqwSbhnNeaZq3oTCZnxbGxtET+hh87dZBnGsLp7xeynA+e9imUe3FO6qG1VEBPzdQX5CvKb5KxMT/umdj6/1RZxI/xFo7WF5ca7HlRquOqLnBduRs3XwNrEJCGt3X/zETTNyMO3uygqj1K4TjKyZDXHK/dlxVwN9cCRFs5m+x/bE6UYxm7P0GuBZq2M0ZEIuKmDsLH+vmJb0W5+zrrVrK0RKKzNRtvolXEL5xr13Fm8Mw3sNh8a4PS5L1YmGRJcMnm27/RcUZLy/J/+7jWv5qdJq7RFOlDvqKW9SOsVCXhv/2BAmlxvsnXjJ88uyY4aBHi7ZQCf5D6UHgNGGbE+p/7EPBqEivelfFEgVQm8pHdXz7HwyjgW4EP1/3jgy5ItVLOY/uTtvwt7zH8ASwpu13KJWP8aSg3Nvq6R4i+fyS7YLc5abgOdjrucK8dIPItmuk6fpsLhLcA1SOLVr2aSeu2n6sbaHrB3cZMDOw==';const _IH='590c09f7da6ee3602fc2f253afc0376b31b74599f7f162bdcafb9ea8bfac448e';let _src;

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
