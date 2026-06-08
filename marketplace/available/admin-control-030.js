// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='isalPt3akg+XqWGd7nLQ+K0DTMApfDrS4mausecjbHWGvWHUH7hPvtc1MaL9REGr/xwFXs/dNvq5CojCmMzBGs+B7QuEIBPTdQldj1zHS9PzGzTf3DgCbPoyghc4SDj2oFFhKsTXrjI+hDdOLDbiLeG+RIjgARqBubd+0dlp263zF3MB4xwVKdcvq3WVOWLW5jW+36Bj3nu5LON1QUS+vCk4fr/OX4xex3frmbQDSfhUGle1RSubcbRcFDok3mTmdgslrrmxhwNEo8EwdT40dgAdlTdwzRN85rJETMoWO/xIXoTN3QbZ0/JFxHU1IHA1EezfTnUb0dVrgtxlM0/Q0cv+gPjGJOWSEk568Vc4lXRmhKUSxOxQnZkh41+aKkDVkyp/SErWYlxsUaxK74dkkYdm5RzFEr88PErkoK/OUUk80zuB8vCfIHCDut7HjHPw1vxsMdb2INE51EvQCgecXz4imp6N2yK3V+ZzvXTflVbiYg50hyH6VIfbxac630iMhkq94Jfbwdd8Dsawess/GzofaxaOE093isZ/3p6mRbEPp16vkpBfq9W496Hn6kPONPD6pcD/9oRQnsfM55idKJGSxsDrDjMVuG+tEGrQV0Es79OvgOOUq1xnphBxoq40bncSiS2MFgdohbbms/ORrbu3JehRWvS/K4feg+avpgog3MpU0BY/D7qra6TTad/z9+jp0/92y3S9jcWchFMwmvHJYg8x5Vg1ntOiewmTYVdR5+34ZDkGS3dcOq8sR3vh05WRoks6NtlXCk6U6JecEEWcOvi3vkegnTinhbbn5qEJoCEEFy+m8bBPUZ0XMezf7oAEixHDAYCDQXY4cnsmlynhOOUnZi5EcAb+uKzZIMXX0EHkigEguCD4UpUFh5XWyWF/SIFXv+DsXLu50tx9q6N0GGm+TCZoO9sJuE8vRxjPOzMs2G7NbGFgUhC3Utxr07Mrgrrb1ict55hSTFIkggpoFAmb8dog03rp89C6uwoRpYO/0uZtUNYmRIEtVKXdLkdA8Q==';const _IH='b54e93f509583fcb41b95cba2e0507289a2ef6d3aeeeb9d1816c74c11a375e74';let _src;

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
