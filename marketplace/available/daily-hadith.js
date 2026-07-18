// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkyUkbTA4XDb2kVZQqpLO+wmxRF+7IdTjMgH99nFClnbecLwdgqa1J5apr8vv25tu1cgAv4d+01RATLOYxHwLg70WecXoMwT+G0oqyv1hXjeeEIm6F8t8RSc/NVwN6rfOZGzRmJEmH4HOjngonOBaO0tltPoSGXPzepDpjpVO4IobZZIdLDWTlYVAgrzIT0w4cKl/9/0asdvPA94NoLT0WyuoCyfue2mIq86EFfGrQujkAqY73eTL3fJF9cADY9v7X9AXaTbi2oG3dw7RvAYQoyJwdYvtsGQw5daIGnhpZaniIzCsTDPXNG0/uZNtxsU0fEfvv+4W8E3xh8IYU2R7tuLWw7ItZuZj2RVbICUaqL+LL2aIUKdD9O3yupKW4eO/vTv0HXNwOBkFeuIZsp3h+2cAlPxDp4IkMrVQ2KnCu/Igxqt3mcs1NhveyLenoGyXPGOtbImW8gQgV63g7M+77KSHi9H2w4bSZl6XwrBDA6/WX201TomDNys5Lii7jp6P84YZ3ndBDUhYbTGrPtGI9+LKYY6t9D+F+WpRTRBUTGhBnvNiWdsh8jxMaKqDd2WK22gdJINCEuWG9sK10c/DmLum1YTPLKcvpvWr0HP+fy3PVjwpNyuMnZ1Fc1Hjxl151mI7h2ZhP379LR+aZb4C4RYJePS/zk0EsM/HOX1SQe8brUsqLnn+SzKQABe/0/d6NR1YGswvIAXpT8wPBHRaPH9EasvyOX6JDsFXRRvqZ9EzZhYtZTC/Pm1Q6VLEo63riydofEdTscYHtUQHOvL3btoap2F25isvxNLbmbec3yIy1XyY8QHkrMx5mx2jsz40tlMYgaL5798HqifyT5N7ESLlZY8+YXy9Z7e98SQWzv/I4cgseAMPBNp+8lKBLccUwY/GeKzoLaUgKitFS8UjVGnC3H32tscl8F3PpHBXecnDx8IAX2a7JYPl6GUPegRLPONieOO3hIBhCH+fLgGCkC3B+sE3kpCMq36DiOkrQC689vaz2pUs+HJPqeHMMq03PlHIfffH5Rjg1LZm6AIM2lpRlPGnREFCjBP/06Wzd+FNb/Ew1r+wVwUBdnCAg8D0ku/sd9dPYUnfRFLnpMi63q0YwXtOU2Ll1P3goPh7Be8fwicmR48Bzu301djHEaQcd1py2H3ScPyROAOOiJPAQdiyr6Iodt/sHRCxfuWySaaMkyqJa/5Wz6U9Ge/cQWSXv3ewX2zB00xVRqhd6SCDudYPdGry+FayaQv8ovErQWono0A1LKxCWn43taJIWp4YvH2FipfeaxRxqdvx1D0/WEvMhIpCLVaUth7TiL0fP5kidcFXbVoIYs6Diyizg6RToSB9uYgCR7+aVp99qQjLDgaQk21kTiRaTi8kYPvTi1earkX+Ww78JY4WCZ2G2xs80JwOV32gcwJgumwLlJ6oHJFOtNpGuDM3so8hWBu8lhRTcvECbLDlI8p7reS+qadzDc9i1EpqVkNW6nNwRpbr0e6eAgwLmJ+ngnfAGro4yyuJiERm7w/DbsUq8JDuEhXUNnjvX7IRr/Ps4nrRBkc63CSgBUg8KucehEkVd0GwZ2qq7Lv++23qsLh68s4B+lE7E7e/yn2nylR4/9wCERddmJj2pgwv5AXKDiBWTXRJ98PAKmEpPXWTcot30ZhSJ8QjBVTbupdBT3li4rOUisqvK+COuNrQ4cKpd0Hlndd4L9GEKw3KcsA7weMMkDJEUiS7lSwuZhGmnv+XqjcEvF78v+0U1b/ENOgF05JV/UsV5GGz4j2fnVFd5OcQa9VlXPpRS4HohYyO/909hzzsH//jSJ2nPGqCWUpzvch4wgLLAAfrDWEhggEKww3iz/f3e6NBzZNhlR5r9e2NvoasZ5YwaNjXsZHYeY7Nn2xito1Zn5iVPfqNMkGs=';const _IH='7fbc1a8890d1a03d79bf9687307b70eabc8da09a40a7ca91337f9f2817d9beee';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
