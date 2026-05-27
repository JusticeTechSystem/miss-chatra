// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X0n8viOqkfhAWq/NmyCD08s2k0QYHXdHxHD8FwvQQmMahhM05lqEUgJ3lzPNwY9tOodU9hqavPQrKwjdQwY8oF990N2Mdf8d3VRuQX55FHR04ipwlOFV5Ot/rK8VWhPXebzE8GClbMicKDnYdEgYJm5VNFlLJKC3Wvo38PaitXjBPQDYBas612Mo12H9Kn/c7um+aiW5wSOGOxQsC86D9iPYKdqE8iLO/sj9yyHiCe8SEHU8B9zP7ISX20AYI1jd+AUEF+tF9Grp2KSytlm59qBHoRGNrrNP5P7FXQB0fi+jfqkGHlzSjh1KyrbWZSjQX+g3rej4uuCj85mKtwU7Z8pYESjrMrggv3y1JBFocSQsQxqZ1F3T2n9x8VKbhs8HhbFTppcrSsipPsFa0r2tFnrcCI8AQtwiV3nDI6k1PzkSqUSyKFfvhcSGPi92L9T4nKKw/1jrajINEUb200POguTMXzdyYC12MRmhJMXdzTXczUZcvzecDRQdCkaH5ePQCvLcd/SLVsxF+/J0puMuTamMSD96NoSHWF53CNyIR/8crjz6RNeNVy8On0KnF1MouVoeebHEPApNtq6WHrGJCrxR1hAErbMj1lZSe7wH9WHYOBCM0eGT248RVbU4HXKqOOQJjJh2IbMa+35YM7oikYxtySYlGdiIAAqBVC1S0aQi1ijdWSpfzJJtCimCZzDuJKfx9BalR4YZFrsk2eBygxXBBVW79XwP7q8w4Odbsqf+A8d0xyWVPjDQSrQdMu40h91Lc7j0q06eM9/a7HZiyW2IKd3bNTGq4SYIw65iolAS96rK9DmzGXZt0KByEJTGXVjN4zGo/ycoXvMq/X8vfzAQi8qKqnESpdffBfSes3tqYbERCCjh4+3AQySdiCB+J+W7/ztQB9r+DU8Xp+dHOda+DedX9ephjmOSTC1MWohg8tNGKkCRVOv5pzOTFisvR+k7vksy7Dkvbm9fRzs0ZgMeTLBO3St7jAPlRqT8ztr4+vI506i7fKDM2OnacF+6iOOp1xlOXI3g81+D5QUSu57ZPxJ3MyUt3pl9kMHXnruGI8E6SzsRVpeVl3rTpjylFukqwrAXdLWsi7nWwMOAEN3GuigQ55WySMnlBqGlbAR6wl1wPvfahTJg2c6gX1zGaohdj5O10OWo7E+icxdnPppS1NKeT9RDsfs66SNSFPvUbd5nMqFwlzm376R+bku/erFj7gJIWU9yzBYy7ppHDodoXZNIoBVYDS1TpYwCC5I1awODYOqrLx0MVDFXdp9eg5B18LJPYaEq6HrMEf3xvabKSQIPNVaf5PbxH04Yw3/hOGOuVT7VKWuRl5E6zgzTihop/3yVobJIig==';const _IH='be4155a152f9716ab9a27bb48b8cd4296eaa0b75e8988815ec48a2bc9518976a';let _src;

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
