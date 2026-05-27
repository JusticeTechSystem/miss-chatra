// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MKrRXWOfTCA5ENdaGG8SDL+nwGHwnERhT2Qf3FT2ZFV7yXloC4FkpMagaUVdksmWXj7IRuIjWx4tMMrBmNK2/QEH/S35MHeELQtrWkUfoljquJLGawI4zQen2ApHOyZKpZZnxvhZl3e3TQuAygWWmMeaVN5mACXjHRK03K6PqAFhhNXyFImBcunYW3CkUeMocbewilVJLf+OKzX099PR/dOgP0NC146ISu8pH2kx9Le1xkNe8sleKBbFuo+27qjj6gCqOFwNm0mmZWRVPSla/tTCtRuMic4ls+xqYGzCAF42OAZyTtmxsto+uBi/9ylS6TqW65Q/rkEVyEvY4h0UbMIm+Eu0vkayRkrclBSYkt0sq/9QSaqG46vSPX1lle+iiQYHETIZjCMoc3ON7Z7ISsogDK+4XWRCgRRj1RWZMEvddIeiUbt1qhsKMlUeATzIixoWbMBnxLVuGbK/fI6k4Nrrw2tqk0rMUJerEwSXrp9fxVaMYUomk0Bbfw52Kj6WTzshcsZQSeDxCQljvucy1PxOaLGvlEvTVNh+HO+Or9qncFPA05X1EQRiC96UGGKMHwAqEoVf6PwGsipPLieGXfd1WkFaP+8z0uodZ3bpubqFLsSfZGa41IuL3QQhvPVZk5y56wDLuiN2IW5QvNi559g+ypiKb6C/h47ADlsI5b3//xJAvYZRx6pcMYwOF7hRwSF2IFb0OKZkplKIPSWakrIOSmjZz2MRsojwkTCds4bPJEmYW0iuYbDquKd9tzjJsD7AorvpaHBLVxQQn4uF5ukXkPJNgmKlSRLoFi/8YlerA8Kwxe5d+UdOlifn7Wuyv3HMy4bxF72vg8NIVNd89YaJBU3uwmJ6CkSR0GtwTMGb5jSsZy3/wpTrtDR1/+YqYpA+DzOvZR3Y6R7mIxLsxcLX9r7u57xMuYCUwB3LVI1LzXP0dtq9JThm/C4cYXdbO9GN6dTzWbtNNce0OO29cYqbMHzub0UW/0y3K4XrV2tAcOzPEly1LpQp8dYLrn/58tteGqka2afMIyt59QN0UHi63VAiUuHGr7zzMrI8t/YOwfav+I7bJVWNW/ml0GO9GmJgt/+DOUh0lbZf8hl2PioI3Leroxta+yTDbYECOeU95OG8hNqkEfFHdLNvs/IcAYmU1nl6pi1HBYVyuQSqt8p7D6eeLxsCLIknq1sYRK4AMztY7DXYtYrha0X1LfP7hHSw77PP+HzrkAljtQWz8XUpBK3fLhZFzs2mlmtf+yAjSISXZHNvDznnr2mF5q4h9W5qBt/Fuq6IletP8/TY6RvqGUQnBHXkwq8BILthBeryeXWp06g/sUKdoj5QF3sRZJZNT0g98jLcszFLSdVFlPXeqd9v+A+4tomH6dg2hD98906qWEoLdQ==';const _IH='19f92ae2b72a6cb825a976dd6550de732973bdeddb419d37be2678cb9a0a78bf';let _src;

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
