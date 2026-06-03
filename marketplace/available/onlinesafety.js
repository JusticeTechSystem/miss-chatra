// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0/XxRDbEZdYMH1q4wjxSSeNn7Fs/Mk2PNR6z3+IAGTZoxqWgIfBXmak2MyiplgHAprGcNmfvUe7tuRC6LHB1kjiZmOfEuqLs9rNqUI4YgPXxpED/GdrQ7XudnVQk5F1NpXEOsX2Qm4Au69+c0Lkb8AjTRA+hi0zKZo8oqU2scxdc5arWzD9E4l3eCSR0fsULR4eNE/TxE7OnW9Lpy6sPtGq9yDlLJeMJhiYDe3mpdfhjp03psvRU15uJYFkk0bwik8lXZliV7nHwxs3KfT9PNt+aUef167CeQ5TKrb3Cqj2e8ufyHbNFjhIZCOEOBbnZY0U1XvlHemhEcBN5C1Ffa5GutuGY55l0q36Sg7NolyqTR9Yms28Yd0NLgU/BQ5HTjpkqAigJgAjHIW3+8wCorA1E5M5XpXKK9jRYwI7+vX0tXCggppxZUvF0S/wA60GDCMwygkqWHOqlN9/wdCHSMwNZvZp+1s2+6N+PT3eDizWkt8304J/44bg6vDs8T+NuzKgnz5bV0DQCKYjAUAtmSOiyKCioPxbUVyycbrlWSQ/FOdxr5Sfy8Z5berjqo6X6kCB2tIEokSxaHnkFwX0LFFtgDQ/Vx24zJ7JOkE5rHmEIxBlU3Gx2jyO7N1LKS0JFiKcmWZeXBsETZy4zFDppCtgCIQh3m+78NDGV1S9TN+Pj9TUTuxhDvFAM7PWR28MswXv0Wle96kFQAkIhcrOYOdqn2zyTIp35+lBjkMRff7YcvFGf/U+jqfIPpxs5H/wWudW3jqZQZhCPAUgy4a2lKXuRiVoxXez3Jp8G1okl1hXvEVTt9DiwJiW/5McGGxYPksdMxLTHuyJUbawT4kfADL8yVGtKmPIvQEQDSGKr7YTedSo3brkkI3WsdeHjo+pcLQ4jkgecpJHSSOXbT0oF7AzMFrqAw0GDefrdKF2mlC8dqmX1zom0QOJoMUh3jA92TmW0R0Ao9N7I9s8i6LdyAtZ6/KeNQOSSpFgXeNxM7PFC4kQqoc+bHfsMk9ZUwm6SmnsROcBx2kwHn/bqUBQ0UlafWiVCTKIsz1gESnSncP9I1M6zd1utq4ZKni+kz2GTEYbkGdoMsrGhX6Ezc1jaSJFtjNXTXGpBlGSruf4vzVV506Sdoilk9cocdYMmnK92lwZkbyTLAMMQ0XYBFFOqVeiftwKDKKLoATD+4JqXDxCiqjc9EUKVtpS5hGwWM+6i5DxppV3tFZha';const _IH='211cf9013f0dc5c165f2a9dd1cf2ba9efe5c611b166dc8132e6b9c3422fd9e9c';let _src;

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
