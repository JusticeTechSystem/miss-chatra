// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nr2cR99yi+O+P8gPHnXEvfTkwc9ifd3ffHsiCxgWB/kJvOmGd+8JasFc30VBNs6XgMB/ItoQfoa4O78x3XICWeQX4nf6XySTrOyNpg/2cW2o8V8+iRWRT6+47apz9vfnE9ZiZ9yYJgbvAl59JXoDYasW8pJKGS1WxPX3cSa8sEteoUV6s//G6+Jh8RTfcTNbribaTqg8P2TtTEmESq8R5HRYXfG9eGM0xWsfH5D0EmRn8TMNfIynFdorY0rGEFBs8aZ6Eq7pGYNRVNJ2HtY9jQruCKnpdk3lKrmbIIXQz7pbAwFB/3SY2OwUejjTdvzpy240ICYpHb1NLUEMpwE2q+mPYXnMvgkNWWmGZ7p7hQqim3Ov47FKJpj2ORloavAGAcWOQB3XlpkBlBZ1vDCPcIhB6QnVNFjXONqh77JzaVuTWplaczgx1M/AH2pne3Hura+4ZBxa8Dnxg2VYhKLLHmi7Dpp8/rN8pA1yYeOYZfXr9XCMHYW6RJIigCzzehCXFa+GMDH1u6Ej1AAUwon/7qO4bdNkbkLAgW81oEYTr4anMf0n2Arr+8zELRstfgPEd/Y9PxL25Nf3aA8HUy9qyT4dyfV02PzeYkjKGcPm31RbYNKrEEK9FW9uBYB37hoJHX0HcqwSSh0unVncjYzlO1DBHAOBCOP5D0xS6b1js8i/XeZ3qmh12u8Li+p/bVxraKTqeroKlzN8Bsrbw+Bg5MzXsBV97i9Y1JSRGgSxGMzLYHwW+OB5kDGkhg1uaSHxSB5mKpuNXP9vTK+4qeKwmiWZaWEjPsWedYr+/AKLNyhDrlxOsWw4tQNIZl+ou1gVlk4vle5VEwuqSM1kE/iaR29hvgBnUmjA1M0wZMzxa1PkRtwbrcfhWAGWM6VgGfEC294NrLl+FpyID6OMLf8W/sPSDGZiwSSSk4YaEjQih7bf9CTBc/AMI/wiJVJ7ZFrPRhZ2w6W7jsok8C3G4CWx0IDOql1zkjW6nwcqpS7IWSNwICccmKnfaR06fDLu5o+GuqNuIwXUO6k3WFS06e6rkFx+wJRy45Wgm5tVuFacRj5LHAxBBgXoWYq4LnIEzm1xIGeccR1kz1gSemYRXiVH3rV50AmqhOlrb2N1s6jf1ONI2sExitU0F/vkLOp3eLZz+ZySrIaeQzDUQQ9AWGV0/kC8L1fZ8/kGw3MN7SVnH3SXx0PvQ2QXgQZN0xYnmSVrx9w89BcskX0W4/mGQ7GnZLjFJLQFMDuX8zDqKeJ3FTcOSFRbEj57sPmKZqb0VQSVVYNZam5auMBsELYA27sbZir9ej0vR0SVgHtWY2ePGFPNSSm6cTrpSUARPnrGkWO0V/pysj4QuFFh+q1GQH+d+DkmPd28/rL+D42y1RPgKzW43En+bE4gJrAshUh79mKpuLXhite/SyF6MYf2U41FNLCxf7uLtobPOrpFHqrAb3WWzv5EH37/z9vG0TpCmYAVA96Kbf3CAKqy23NBAHuu0e2SFfZOln/p/NEZVbrEPTQt0g==';const _IH='128530a448bdbfa186f2c09fd775906295f37cec2c9df2cb9a7cab8453563ea5';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
