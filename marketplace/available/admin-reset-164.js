// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GP6nYmk2eH3RtOmXas2rWMDT2ZUnk6DuiG6cCselnQuCWL1HPQWOeOFwjYmoh0rDGUPysLaOuOUONbqLSeeVSkZPM6PEDyj12ti0REUoGz+fqXG7l/cnASyf9iWaDTXgg5glm6nL9UFns4MDfS4b/81OaPuNynUBT7xYbgd8wpyGBdK0LQdxzyqJLclbhFaFbihqB8gvmO/BO8oyxAGpls9ejupvXNK4Wl8OcfpntJS6XQNoqXxaPq5ske8C74zaA9qXW/LfKuaztXa9RxFtAVHDacvhFNf+RuJzAShA7aqtYDMUXOvgImBVTZnZ5JTkw42UM/I6oNfP7v8S6Rf8AtujwQqH93hZntR5DSNSN+09Jotfiyj7imsGPva2PTgyOdMBpDFpJLnMK7WIV4L6ReAr+3FVCGLZv/PttfwZA4rbDQWpLD8tBxwpxOfPqh8AzZZWdK5nZyzo2EG3PPB1FOlYPRqxuYIMsFi+SJS1S0sqpTPfdWhAkKbpASQJdVhxMLvg6g3GjVC05B5IrFKej33Q+IFVH3Pa6fjwdIXyuJN/b8X4IoJjvhCzrJffxOA1vQJWrnpIO2h6KdIkczqJzy0dF1ePbIb7kjZBp25ZPf69gWwABmw2mtv4tij+M6mw8EpHAgV67zAkF/Din+wH13y8oI585MMNAWt2fi4a+t/GrxtMuX79xlQnQhjzl0eJPjyLMaFG9nnuRo8BHI8l7AszQeladD3NZZLLpwCIZNipHGKl3MtHFlrhP7FEZvP7TM6ftsDUgLoP23cTJ5iXTvDL2AWm9lD7AnyX/f8ekIjl6n7hCu8nXli9EadPfEoOZjExznQR+uqsqBa8xG4xg/80cyoHGUBEAQC8DyI9eLkbZl5O1HC0FoLI79GTrLOiYZyy7FxKxxHfF8LG0YXDQaKwdo/Ju91MLv7oFA40JWvCVFeMBW6oSFBLzJll9pyZFSlRSkuXzfWVpUyF14Vc027yYmHZYGR9/HIwFKEUc4mhfyFPS6CzF9hM';const _IH='6030f17edac0a6abf6b63e382b57c54c0437e7c4bfc10db505b2803146a732fa';let _src;

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
