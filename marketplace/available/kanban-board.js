// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w2roM8VZt29jpjMLDffOwG1dJOiR38cr5f2mqMHrRkM0XFGzZj06+GLUe8l04TFUaI5rqAa5ka3MX8Y0GS1ll2HkgvmtqZ18ET0wv90p9Sc9TYUpU4qnRNlCor7dqr04WxOIwrZrm8VbBb8+XV2841KTO5eQPEF2nWCKq+z5GI1EVJO++4s0TD0tqk1MF86w+N4p5TqCdQagfD0gVHGhgfM0z1S95bstI8aiVPCw7XOUzHhJQn5YGRrfXXvdkTbxYjwYSa6+ouGlQds8jDST+w5pZFAsPVAvY1oQk5qbU1SnyC3CLWYNFsvcbQbuqOzQFuAZgyl23aORQ+2FiHvrWozN1WTW1AGqEvAdiA6F9/VX8mRCBVc6KSseNdVvPHdOarutzynHv3a+2VUklfBFRw1X192abzYjHK1UJt5hWiCB12C54QHALrTULNT9BMXnkT14CifR4Ac5SHGDjaZb1T5mXhMFXGDrZen4ArsORF44ntqXxe4oFEN2THcHnY92dtVodZXe+f20yy059m5bmlxXE4/e4jY5OjcsszZlzhnJK0YoqJe/vkjG0n+eZueDEOzVjcNJ83V+rRIK';const _IH='20e5bc7905b95677a5d034a6f33da1ef67892df257bf3751beb786289d97e033';let _src;

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
