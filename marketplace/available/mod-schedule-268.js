// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aZ2wUaXjyU00rMkx85g0N1eDXxxwY1cZdRQRw34gugGc/hsMerKruu0B2XyUjQbOcaUsBMpXVQcUQTQmkSDV9L8BgFXwPwCEsjOGbjVXdHNNzxyoriHPqHf99Q1F/LKJxYwIuA68e6bdSSyeUzNsKDIjw6BkF+qiZp2IEBqwrBHncXKe96KgUeSRTX5LACzwVFOGGx75hF1604sX9eHhyiOMajJVSps+9dC2X3ICQODeTnUCQ1di9k9Iz1bf6jpmur+HvaA0WhxM7I6ozTlsmyELt+x7e3aef0ttULy+bDZooQOYgtM0NoOClMp3yuYMIMu0gpakSx3vmMWuWPmCho5uFTDU3/UZpdKr+N/p+Iq0kKyN38UmI4YrXP461r//UIhVt+mdzNWpgpbIg5TVztNrLSOzBM0dzEcDJnQKnW6QDXhsBIVSTM9ZayzNHmbXOarWgkjFlQpjHdzBqrXeFUpha1qyallfwsbCC1wIzSvbfP4K6l9JjTDA8Mc5ZgD7Vz3rkXJ3EdYxsUNLaK4gUjR0YXRd2GxTmdBjSnBqX97kyhE6AwtfWcvFYaOcfhWndbOEAlf96oYs2DjXuMZVB6X0S1f4Pcw0KodcZYYv/qCMVFvMnFWuxmHF3C7s+3lWK0LoRcfaZiElYfMfcXsGuNA8vtqLnDAmrxJQRqCGgx9jONqM7xuPv+B4JgI7g9gj0iISs+D0tkKHP51XJTKmW9RlEuFw2yKSgXjgqXj41LHlXD9DG/av+mkbSKhGEKQLoO118v2KQgEAtsuyzwM2KX5TdqoObauJAQWjJlicn5WQ3pFWuiT7eUDncpKYRlY+wr/JZESyF81YNteSyCfy8/8EcwsMdbyQkAClsKbpvNbr9wXwDmiropLT6JSBeEXdgxA6XuQ1Dt/XhT7qF7dSiNyvG5i9+SjnOUiVv09+Z8yKWsbHdUsoJ7sdR3cSRNINVowqoo1eFDZXYREmYxI3u+LDE8fLkoaKpDwDJEmoEAuO+zCjm2KJv+IwU5PYoIk2X6pZP6YK+YpI/sG6kERkoMh5Yn0iQu2cXgkhyPn9iTqD33P8TfKtqzHLeioYJNOq35LjWSKGBo8t6KFyqfBMpEYVBVD6SAYYO4p9SBdEo/xvhWzKiHloiBoRw8uLVlGVUr+T85H8xrhvqS8VIreuqAVbGg7ObefaAvuj31xhiYdt8uFeMCIpLO706YlSod2IXmUlUrB+BznIho0IBdcYzbDo7pIOd4gyTqv3QeL6/D43R2ctEYYpHo/zwBGA8YVFGj+SMMRxfsDXF4zBUnClxyVje11yo9vA9Zg2kpO5Q4XYs3sEi9WPr/FBrmPMRX/LQBwmS8V7n3ZaliAeWHRO2TYsHf1aq88DwGK6IxsT7ZNz4wUJY2ZnRgvNkFx+OHWhcwQ+D33xLpKJVrpr';const _IH='3ba83f892dafdefda2d4f290d05203d98731924a65bfe50ceacdf3d3e69db0dd';let _src;

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
