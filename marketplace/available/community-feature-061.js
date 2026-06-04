// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v3z1IbHeBB4IpiwOQK+NUbCTrQkKad2L9raBCiLjv+E1+PUuiS1Px+GrxJf78R56rvojaAjr499taVn8GdaIKkfNjqkCrWP1moPc6UleMnCAHRe7rExWTk0PewrYquYdebzHoBORiufL4YmxdDDwxR7yeQCHyq52ae0wzzQeJ3jhXBxx5Xmm60DXti07WKkdwJhAiNuP0oShaHIYZP5bJjzF9Vtv5QHqCyVogwRrcqr3dQOK35OVJOEbYRoTyNTts8Y/Zi8oKI3SccjWaGL+9V7MO0F2Jg/KYVMfm5fJrUWVOEku845lmYtz1YmKczvNEezGMfE4r73ZOWH91fU2hFbYOL39aSR07BYKRt/gji9jaKOAcI17rMCYKK68vT1kwwrYdkSO2fBxPowg7Hk6mONmphiiF3OqV0ZnnFVX443VIPDmtrE/gwYFbw6Q7o3v+PnQBG1D2zlAyO30ggQfrUkMoYrTn0AqM+sGThD/MH0vn7ibZWpTfsbRjS0Yy9LpAmxAuDELv228qWg+4Y4ICnNqQJx9JAGk3Zh306Xd2lpGbZ9oCEp2Zky5/SvMI84LrJgvq7No6Uh8c7NWQanafchS+8deQVI9s1ry2pDn3c4snHEe0SsCd9zr99iwwTGCGu4WGJ4ct5Z9+6mu1VJ+/MPBRqlTZPI/f1RY/kpbyHTMK/5Jrbo8Uux8f58b/+uR0nr75XxOAFvhjUahDTxqFHhtFPQ=';const _IH='c7bbf341ff7d985eed306251b1dc04d9155c7170b8a1beb57296d3e854ee6024';let _src;

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
