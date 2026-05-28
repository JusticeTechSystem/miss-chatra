// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8kWjVWq/rAabIgDVw6qH1lHWUDnEfrGdBkuTsdlb4jAdkzLAayf9Nk+WUydtZBXTGdU2y9ezrmt6238WEyjoV0DnmA7OSK/2D2MCIbPx7sJWOL1+sx8bmYf/yBwZjBuOyHog8eyJd4FL7j5a9D7zQWk2DTxyhQdMectzXWwKv90YhOg+2syKwblnNtNcgqit7tvWydnUG7QFvRvLxaFXkoqoAwGPfMv1yWnR74+1Oahcb5nL1L/IhYsKR+hRwzuixWijFBwsN/Fhsl4OMY2gFP2u8flHT3pj3XdR+3sPHv2SSnWwFTPwY2lXFQobPyyHMMD3uHkovzlclEJb/lzkV4AUM45ozHNfv7sVuE/Ac/SDppwm1Y9t2Uu5KeaJd2pWNNmKAXSXF25M3esWm8DWeGVKJn5ErAabP7164n1UUQUT3l3237r1QS1yPcf5qLOy2yJ4v2cTlHtbQM+lOEcBsIM5XrNPA3vL6jdRSvxhhPevYAVjeAbJfKFXy9AIWAFaAPaEXs/vtoQQqS3eR01Aq/dch7G3zR52hFvFFUrwlitILg3P+MXQfI4XUgMf/FO5vePPbmv8i1fwpQZUU03AvbAMZTUW7V62uSre4AFCgaw9uD1CXeznUbUiFB9DEkKd5nmVJ2JbO7gXvaqQJqEpcpkgd1ym/cmwFlW6PGb+4/E5rf6r2L38QEQtnigJrt9T9Iy0V1taUUAiFAbHSSuSWaV1KAe7ApRlU2N/hdefKFKn1VoGin8+ocn4unhlQYNm+/m/+4WM9KM9KNU1GvtcyRgwJaOxRBNFtDvNCeKjEyT0keM6yjyZ0+sA9quV9OA6JmNznCRMfkYA5H6ylHZ6jEOLaKzUFP63drKV5l+rbekDUXXVwvuUwR8cq9su+dpWX3yY6KT8nsaWxtt37o8ESrfhMoTDmI6/mtGg66JwBuaCNp4qXG4VKyae2kSv64u0Cs+DwJsf6zLJLfBp6wyCFlDwK/ySLnfQFhKc3ErbyU2eIDHB9RUDO9Ye19TMyy+jt13DwIf7+S/8rQgHP8msIXJUOINWTQs1TT8sFwerOynDd8etRDD2J00BvjqGLp+v1/AlkwWxy/0WsZHqqEzZJ1AoWmeM65p8txWsfbbXMtEYp5eQtDc434dWeFRZ3rf6focwzbQg1L+bHOqdvpAfD7Y9ZXgYogfniak10H52QP+RAZ9fUEepUw53t9TbV22byKMRhiK3rLajOTSf/jYGElloRWosYnKiPw0EicLmSm8rmk3OpBQ9vLnvdnjOBh0m7zOfvnJQzQyBqwkGFqBnT9Rg+aY6S9Da/xSTiqNk9A3XEnpn6UIBj3874nBrmcEVbIXJl0TPLxepDrwQCS4Y41b5XSiXwEGulwzRaPKF';const _IH='1b03b6e1798f5058be8e095bd9a0bd1e8b5685ed0056a489b0847085c55c8f66';let _src;

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
