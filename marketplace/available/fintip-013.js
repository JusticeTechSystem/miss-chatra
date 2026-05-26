// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LrDP2a/7FLjAOxZH0eVi42fNZPqUaOzWOUqjdqQxhosfYAIjx9HhUrt3/vHDyQX1Nq3wvttwTa+9MfbqiY5xEU1TvlEM/eFQbmhWKCw+GzeD8gHx3+nvhaEswk2HiV27PKI9moaPpvG3pIuIwtnc7T2JyI9eGgQguXjV/QazBfurKMZvyDMi2YKXombcBloXmUGYSUg0I1reiaEGGLTxSnY2qXt70MzIWz99ntFfLcBbO2xjVLW55qDWxtRxIrNXaEdgdn15YzMSb+dQ/8sYYRkgvx1S9JMoa8C9IOpJ6QxfGOBdMuHz3vvpaTY1AT65r+VdW68y93e2BWVfoeJS8HKDCNe7UIYTPX/jPujAypfIAIi2RmStSlZT7DAZfW/bDWZGCS8alkd/inbAmaxe3q42HU2KkJa7u13lYhDfEms+bWr69D9ZITWBzGgXNlqhnC5VltBAN9nUFkjBxVfKxC9ux4kMgeQWBwXPqnnDwSad5r9614CJOZv53oQIPOxzwdBLg35Tot/EC7AqBefPFJNC84dkNeNo8F9KKmZ7pbqy1Qv+xxwKGasED+BDknotwt0P9GPMzT1rQhJpKTT0LyPB7c5GgGGfl0/CmDLX4dbXAJibojF3BmnZRb+NFUzKt0NV7xKyNW7jrtce6F7dLsEDcoBJJZUKcfdHNBe7fwLNHCQNOUxNvZzZXwbSweIqU6AhZtNX3UvXQArnV4qWBKxueZnshliZPAgNES2muE0LvtZKODAToW01zFEaPT9VJKMooXi7CIe6A9fjIc4quXCghxwpAgAupkk4t2CjjkUh9emPrJJVKLj94PVOqIkAKkp3tIb+PbgwfZUKfWEemhSHHNcNxnM1COCNllt6+2QScHhVAV/J4ntowW8aZmue4yMqyhmimn9VJ3fHD35yC8LfuVeiSmdLyl9OsHw5GTeGeSpTUiQ/MyZU2GDRLY4SN6E3F+zY5lP0WbWYXxCLuC2NOvFf3ja3UPC/KRI5QaeLkHh972BaxrUjhJNj2l7GvBSwkPV3mIMkxGqHNx2XJIQq7vTfWt1/+MSjelCU4WooQg==';const _IH='768c97467be4368b4678ab7ceee243a94359d35a704521af2af0f7fca4e6a30e';let _src;

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
