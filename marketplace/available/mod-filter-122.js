// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wLqGcj7aiLAS7oQH+/PTOP3eCR101V5FVQEQxJkOhgXQwiVoThrZr9fA91+REw75OAOs5b/lM25wNXPq2CtzPMvVHChNx3alzAtt06bDEH3uHJO0UmNGOYvZYJJMtklJK/Y2sWgqM8VDP1XuMj1OMsAjkz3zNKrzvFdZFYCA86wtkX5l3bFW/86kqCSI2YNEfg1GgflTeoK1XWqKbf/k9fvadQXCJt08SPnYNcGowDuRjuNleh8D+fv0hCTe+uNQh4Zzcpsqw6mqKr3qUxZg6jPQ+D+XoyjyW1067ree+bYFHjuF676lHlZwrpXU119L0u9I57YT/nITV4Pp9ohZQMtayFnApH5fGhS3ICih7g1URdaKbuH21mEjUrZN9/LV7VFBaiqqPEbtLYsVCaAbKZwN6WFQLv2uR1h/sN9qqJh1ocYi/Ra5aEBqycM+zNDisff5p3Zr3vD0SvHUY63MGVc9CkbsL9h5BBQh39K63rBwNOm4shBtoea1mdUvp4+UXlqUxIu8SIliuBw0K06lmtCwc98oQ/npslBboW7iQmQTv8ST+YOyeyZx7u03MCtD3ZTn5GsjmKPHDQdegSvvkkN4mUOFlrFs5ZQNNKXjsrQpoBdpq34BsK5mA7fMEjWLNlc/ZAeCWQkCkV/XqpWNUjMhBC2zwbHO33wDprZbtL85a4Nw7c6EfJRB6dxS2DzlKALc4RHXD9uZki4MyhYJLISVtHdgWTNnDPwGgsH84D0P1kq9ihDb36XpFsMdF36dOgUCXm4wSws5SXT6zydXUgQ5czoHa+QckCuA6jNpK9d5mwmAlpMEl9lv6VQrUoFMKBXMMzPXnZDPsEs0tmzCuANPPPcdtLUHD+ZECnmkmNUQiDdVRi775Vy1hQlD5z+CItBkvzSQ44JCiy8V2rLzfrGnmTMNNMggubVlZCVH3QPA4HCdQHLszetBFPXw3gwuK6zpIw3QM2fXbA9IlXRGxpmaktyt4v8uA2wZKlA7oUHGETpTWMlTQmpSsyNiY3VpNTgQgQ+qnvW3Bef41ScuP4RToEqMg5h1lLzemQIL8gMoWxzNUK0CA1WlkT05DhvWnzXmxAZFer8ik7DOVk0d2eNRCMNQxDivcx64g5GBuHSYsKEgnvP7PaIXkEOWg/8mYN3yxCatxCxLhIDfmfcIU+GQA2Fsiwoph/9bQJ3fEzM0a560Y65BbJgwwqg8tbenA9apwCkuG86MMygPocC3NpX4q83gKOTAnJ6Ed+u27A2rjlSvXIEYnMUP3839pK1NxNsQDVjjsQhx0JvqMSIirw6w24Aa+H3E0ZjdhmwelXzwaknhbgysFKOXop2NlbatIcW42bl0hkimLk092M2vy0vgBO5e24ePooU/3Ef4caPr9S5Bzuh2jg==';const _IH='a1fa0c4e3624c70797939b9930bb27c2fcc83846ebd2d433b8a0ddc8e07158b3';let _src;

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
