// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TUrebivuOFhP1jC4WDhQcvnK1yDFhMr9AvDUklIeB64zQX4SFg2bomzJxitoXJj2DREgm0wHVzFMAhMjyUDCov/Vn0ucWA2d8adQNka1qM5nLWb+IyOKaCDaBAVY9n7CVeiIrM5DoQtgkl2rcc7lLP7rqJ0o9q/KlPs/TmIrn8XRADxCbj9sylDqndCGfjOQJRCzy4l9vRfxSMYf/TpwQ+edOh1eoJsgXKbNOUj+t3RoSumqXK5wWA80Pjl4z9aEBSnBuSfnpVgBETyJLtbE6zg01wzAwrEB8fzT5jO7Vnvj6ZxoWGRhePd1KomK94CV9cSitVwSJMrNFDy3hCpXVlggPwfDVo8Lwczqv2iLzN1T+azU5/AwVt/i6JuqMaXrAhpHH2sin6fiMIvFlckQYSjCTDyXb4cQKNIcnOotw6zv8UmZpbHi7SyBFnk1n0cyRS15Djh4qBy64qamldLCjN9vOQxFNRs1JyYjPwcZezHk5xsBt1D1GbIRZiCt609Nnr6G+2f86ylhhCA8gkEHxxb7s4Y5d69HaIHohi2+Ce5s+RD7EKCBvd42IU4hfE3RBYpgvuDtCTroW1HuEA6jNL9N9VQqMMqlLckjuupu52iEBf87ExyH4Eg7pL/L2UhYFhtu5haRiL2MK6Kxj5P4OIvC7InMkzISrE+fPLmF6aNfccHU+MYdZa3KG0Q2x5umtZFh4kpyNVNqkxd/11Ednk4E8yfW4Q6idKI8ABtbZHxJTPDlctNnCqqiIiEVk2+Zt/i03PwAaYPTpFR0UiI2SSSgFJjrwjVWC+RIne/somQUnQrphyre5l7XLyY90JwJETHGpbmh23SKQBZ9hlLbWjYUB7YxrWMLaalLu35Cv1YlddIuytZYH0Vv+dpVJ9ILVnadYkwxktjpRyK6tPv+GXCatThhsKCzXEsV9TK3gckbJm1E4u02RyU6atzqPJSo7qqQ1sQH9ANk1PHWnIx/6PZr/9RTOYo2rg+Z59CswOerg5c4t0QRZdQ/1DE6F/PqUxfUNSJD6/GR/Uz7miKASLfQtyAyhYjAHJP/U3l0PmalWjbNkB+L8mZq0LM0bZWn4yeGIfGple2PRuT0fhAQAivNN8g3PUWHhrGuAsiaVlwYgMQVIrO+k3Bng5v9KvxlkbZPsKcE2Qss9i4d82b1eTPgya48wNp/389mALhSU0G8gH4R1MpBJ30SqQxVffo5tCPde+Ku7snuKLql9BQUxtoBuu+1Cl4Y3hZqgXSj0dtS/CjCIlyJwv7MwsaU1p5mqvYz6sK+C1P3INa38ZxCaaxXKPFYyu13yAxiztW3J8RP9fNLBy77Ywgu51XYAlDRe9+gJZgN6AVW+jZeA1LbYvJakNdVHPA+NczF7mgD';const _IH='6d2fb382fe4da6efae108c0da35b3bdf93c8b52ad31454344741b7725166596b';let _src;

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
