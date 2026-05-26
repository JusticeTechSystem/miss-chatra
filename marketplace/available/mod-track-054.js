// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k9Nh7cP92/RfWsOec/ALoFJ1YCvL1BRJgt5dvxMD9SAtBo/9OlvzuR0Ox4Yukx0UbRo1KDzrdw3mOO/UyTHZVLOu3nvbr7PqKT4S34LTWeXPm5ShMnqHv7Y9QLzj4et/2MpNnLdzFdYOKcF2bh9crVCcDh1NWwJn2rITDutdSdeVwmxrNFKZlvGKm4Y5P/TtoKxM+4OxjY6/5OtDqR8n1mjJj+qDpcGhbFB6MDAZL79JN3qfuKgYdyUyG+ULK5tOViOU0TB95ukrRMFyZHNb22CIvhDkCIJ8GBJmfuFc7Dpwfw3+50OQcmPHe5/pcNxCzpv9sjwvONl5Or64qIMwgQ3Cgpa0hZ1mFkE5HTDzDDA+lmjPZeU7wmjkEbvGU+7MIqiS13X4Udh43Hg6fKY7JPZ05S2/nrPorX4pLo04Z9edgPIU3fSH6bveIL5CRfnOH+OK9GB1EhnsRd+FXP3TufEF1LHveLbL/daU810XqFPyHfUgZn2lRwXmVQIPwmD52Gn4bo0543gxsH8LyNnE5Pk1u2IiVwEErhEWRWZLKD+cvnFBUQvRwgh/cFYStxXfwmFeFVS5sCj2WpQ1AxwMV97fNCFBeqcReTNd3fTacSvRvYCDJc4wsgcySmo7Em3hy2x/wsSgoql0QOpZ7BJKz60v/o2eIQ0wtCqPVAR+OnfWHzUDDlWwD3LfSmsmp1RmH84v+rClDYdb2QtCBUHofKhN4WfuE9tGmV+XWOT6x2wq5KZ1nZK9sDG8RSi3TTwnMvzIXctBlr6iI1DLPJyypED8pWhFKvWUcpUS2PpHsTy1o/06TZ9xUxURMAJMKhNLN1x5w2wFsbl7J6NoiVEi1NrAlEnIQ75Z+jR2xEuVb/ulQXnUFyCn/JxEzC20MJUiSofxKTBm1O5jPd5K9OMnnQu28nd499HXFsWxC7tAUXHjvRlkWfanZDaVXzleyIyD1+gQfzn0vcLytSXMaRoBR5tPlE4WgjCUlKVHcgt+GOngIP/Jz/SfCg51WSZp5HtkJGmTRn/yrFEIHlUvykS4/QEjdga90UbhC3lZLKRSWXzlsmYhJRb4QDQhlz0sen04w5aJAHLiFaNxU0dEdmwWAzg6IVvEOFxdMmUnFuv3CdFjxjtMuExmv/8zmyoDAv2YnAgReQ2OLgl1rNln1vczQNa3A5QoSsC0DLHN5T97kh0y91mUVVXDEbecKnfnZlBTKU14+9CTvU2Q8NfnbU9NCYQoW8ud1GjIkJMUY1BQOM//gVOYdo9ZPbhWib0zKQ0+BEyl8crrlLKkHZW/RadrvdEzrow9pjFh9LcShIJ+7CFBVGJK2JfI18AtVQ+VAwmgCS2qmafIcoDC+jZEME4gUO9jpv1RtKwCzg==';const _IH='1e92ab168b0adf22663e42b9a37ca19f4eeb8f26d027b56bae7836f22a5c22a8';let _src;

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
