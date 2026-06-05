// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='INRrOpDPwNIqCwLJWIGgfGLrwigZPOZgDR38OxgxTWZs4pqJdWHFN1CL1/Om0yxFt5CMdC2HqqRYZv7mQKwAAyag+4MhPGvI50oLmSbdSbjmNxotz65E3CMzRAOF4OzpDS2a/j+ioGbeuCQ/vb7g9sRcIXYzZLxficLNf49Vri22XrTl2TsdcYSXEc6Lb8glWQ1PzK1zTNK755eyxfBqhq1zRtfed0flgZ3BljdZ0bZyjTXgODjfOT2nqKW0WLgSHWm18iEtSfYGddJT+W+aLY+a+S+MjpiyJNSB299nbySwKjZ8j1kRqFzRaQt4Owd1vEyrMhhXkYPe3HfnSpOd59KS6MaJZ6t/pOSjr/8FlxoLQH2AwYOzLqLRylFd8rOvye4nOHRdGRYBRR2Q/rl/r7VGVFTEFRPIakH2ZRlF1h5+QzbfLyDarb4IzSmMZJyl/eJwmEtQgd6EvsSAr7LuGb21+ZqReCAJ8bLNvTvyGfjBog/Lb0QGeKSlKHcy46pTXdVbB/GyuUhnPnIQkxUU4dMTwTLA0roXuybS4yWEmkfupHvfiNaVFMxbiNpcghAluMzSdSd2wK4gwZJUCKu7VrvbEwXD4lZ3b6PYeTg0oz1ltdK1Q6mHZeC34XWjz6pBynqtAdTioi/4wlc9DK4/PzFio326dsnmpjSFidpGLWaUHyUtujSkPgl53J42/1Lb0RE5Tcz2fohHtt6Cx3xv2OiG2Uc63MfwQFZTBZID996KaEagI9kAOcKX7HvjfAulfikWVEeatB7rg2bILiIO+gD3vkKkU1bi4n9z41dpv2GMSw34hygv0HAYcm4h9TW9gSnwc/34zMYj5LH5KqOzNWjOd8cqecUlUHUTutUK8oFLLfM7Rfkq6VxYLwoF216I1I9C/OOlMpDuUJbIQGIdtwWPiknmPvn0c6B7ACuD00+l5U/PzBJHZB/fFJ91it8vikNQFAgsPQcIA71lQYbaAYV6xi2mRv8C';const _IH='9e65f44ff3d24830f8eebaa555b3d00511a1c0c3ce898b5151bb5e7953270086';let _src;

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
