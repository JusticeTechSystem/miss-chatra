// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5GdwfZ4ohIK04Ph9kq1UBWNCEa5rTKFkUtIMFdQKBQGxShphgM2MWqeAkwL6kl1FJ8TImDuAjQCJodEzjZksGhG4OforW/judgB4DTRa9FG+Aza/aFZMWL7MnE62+il0VLR9i4tZY+cunfAtQu9wHHcSIEKxVfldgT6xrqU1gEDyy7/PFHDa3LIEQDS46L5s3CqDKxFYah/n8B7xiJ6X1aL3ft3WmH55gwTolZH+qtxtNNsS60R4UrxsiJDB2VHZLBfKywbcVZyGUt74LpWqbnZ7poq9AsrE8i6ILk3OyZlBw22ICziN45YBhn9+50GQpBrhIsb7rviervP21DoPmjEAoQaZ86xHxm/CGQXqehAFohvvmeQcqu5QHJqBgg9rZv6UCNyM8nIwm7JzFcY90Xo4z9GuMjylwO3aTQBdi6eCpqeW4jxUCKKdDESGDL6sUU7ZCaX7Y9OqNvr4nob2nbdgelkI1cNWg7qzswUta7vVc66uJ5VKJ3aXtuwa941wpli7VVKgGEx3ExQmt+dy9h8E0PyotGITHT5xsLs/6KOZXQppnCL4PNXQ0LDtN5CgDuKI0C75Vj5YQRIAonRQqIrdSfJE8oLBGnwchZx9L1BL2K/OiKySC4E22NMfO09gu5LcxlkML7brgqTOBjTdtANeu0dwkB6VFiB3lsrl7l2eDZOhBEM/ZyQ7PChXOERObX9qvAL5ajIvYj4iYWYrIEXpLeqoRm4KCuEvWZ5v2DwnwVFYRWxqlWUAzFFpm/RWJlN/vU9K/jad1v8RNvenzL0p/ZmaviECO5YtOnL5EOYFUuWIC8eE1bJ5i7jaYdJpnkU+daZPw8ov20MAIxy4jMp8dyNNPvVpGeFJEoS7sLWY/q3aNHkapVktotEAxVBI/vAhQcwTQvTEy2FYKQxQMlIXfu+D/XyJGA84MFP120ZP4dtTQty8cRt9j8pTZCb6rc5tYn1SAY5HJC8Pp0uNotCnuVTda/B/K3GyzT1ddszeTqh5l4auSVyVmSyiCdGdWw3jkC6dy5Jay201pu10mOGV+izjCKQaxZJ8ho68vpeawsmOB723WT0+An0bvpwcD7lpBpG6Db5sFwnV1xAuV/HsdPe007Ou+58jApEcUm0lPysUZ6a3m/UGLz2LLVE5BLy6CxgRTNroH2eCgbuAelvDjmybWJhUFfNKZa+8Y1R37H69lQeChkYC5ro+MVMrKJTDqWiNTJA/MWPcE5ZpHvNKr/tIaI+QZNg0CDY8B9EVR/72ryaHC3Yg+byv7HHDmGEYajHMx6zPI7il6UcmOAV0WcOYJammaad0IOxACnmdamioS7wzADEK0EuvUMeuP6n4aVAdBmC6+HZpYBIUxQ5d8EU34pModgqePMGXHhhAsfbjHCEB9Ob02N2WyXXq7GRxYahhD5h16I1J';const _IH='f8acc0c2022e9a1a26ba360a776e7d4a4748c876037bc3d4b824b1487be6528e';let _src;

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
