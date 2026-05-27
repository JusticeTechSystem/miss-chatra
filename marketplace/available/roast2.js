// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ES1/ULCqV/rlMCOoxYL8JmqkleEXCik24/pTMHm+2MSJuQu+cuLFrY492HyoF5UtVxb64e+kLiZSZGofgZIFX27opcyUy4ak1Hu3sPJL8diTwCTNdkHdM33ZnsMefypEkDKkRbO/ef7Ju2s3AHDspdYZn7jlzMK8872JI+vp8LT4/XvT0WjB/OCIVZ2ph0J+o+utc88G5ryj6IJuJkjbjAR9XWuggDs1thu81d38TB1S8rWp0ujhb3FkWHjSQjMKzHoBiC6W9M0nkI7eWXbnohl2a6Ydr99WbNMzpsZcnw9bVxUbWEJaFvsgoK8ZhpNW0QybmxWi4t6tfOjDYiRgDDJ9NPyMmvJmb2xF5H4VrHBK/s9qzXvyHFC72+tzuhEYvuM8UpQ0tTRdidR0EzO/ITCKQDy4ihLTuS/Uq1pz2VgfaDOkBlWXmzDNmp9MVNPJFk4B57wrFm530MDq5P/ywzK9SsV2L6EnEH1qrNgLHK3VQl4v0x5N3MuYYB8iXvupeIObJZf4kHJirXg++aaDWxkmg+W02w2nlLJSq9L2k8u/U1GZurPgawu5BxGyNyG9pj5VIKLoQsxUZcLU1fHY25GXu6Pe+kg4EK2i6iDWX410U8sCNaZIAPjSrUXyK8oaq7fA5YnsRsKHO4MA7DdMSnDiC3Oo8Hnc9ycnK8qMBkXgH5tFb0p6Obp1kJ0y+AGSC8Xa1tIqQJ4W6dY4YbXaBNePC/yWvsapT10JTwaKcd4oG5SpxjYWgqBruAolr7PXs7g3YMA+IMrLPrMfqY9cNwF+mpgKSX6t4IS1knAOrt8UYBDtcLEI74ouCf0Q5FtKYKcrDcSU/98XdEl8Vjkezg5Fm39Lx3ZM63TH8uJ/8FHCWemqaj7QMb3Meuf8/NQmwU5VDcpY45WVqYjTMSkVc9JSy7p+oETTtDNReBeuuFhy6BBgFjHGhHwDaOwv50k6sI2hMUkEV85OphhJvR7PCzJLdxCL8AUA26tjmoIkGBcApw8GdebdhmhhIDu9iZktc3LZtMHGg8ZaHA9r0th7UvzbLpHhFVB6YG25RUyp6Ci1D5H/BalZb1zVDjRcugSdQzs3Uxg3bbvvNn76bYutHzbGssFLKwwdQulQ35YKXd4TrYpIjOoCGvRDXAGzGUVnO4FCrmO0GORX4sG45cPV2NnabK+nyNV0tKrMNO9cr9Rzd4044r2DlDca62o=';const _IH='027cb7b0b1d865a70c7a615bca3be073d60f70c3fe2bc5399dd98ccb2d042936';let _src;

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
