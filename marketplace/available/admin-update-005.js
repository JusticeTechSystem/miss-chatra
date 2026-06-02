// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hqyq3NI+H0Nz5vZRHgOH6wxh8HlejX0rXl9L6Vehx0RNt9VuR+2fOyHryrLZBpTiWWS8GAxND3hEoTOjEkpOXHWUrqGR2x1tTTL79IwHxYGpfeFQ5aTkBeGchSFM4KCEmejQe387VBtFVFGECVM+n0r1/GWLwv0jLcDsiJupcCBaeqysGUPLVvNHTL/HfxQ8jEDjZj+EKkAafP/GA/McG3HWqoCrmwzv0pgFjthn5bTinon8N57HrHUuwAQUUPU8iFJhs5oA5fSJes8MoxmFMBg8Q0TXMGXdDX0PLFgpzk/2qIcROkb/FACBtfb+mX/0rMQNXuJh46UtsFeLwNHZuYUIelm4iBIJ/DbzjHQBDI60U7oWLcOUgki5c8+VcYdP8+QgIWfRuUwkFYvBRIKpxomLOE0ZoCMCNRi/1HxoIbqyR912gDxWCwR9htzZhGVaEZ96h5osTfbjwv4OZbmTQke3jHf3j4IJKtJZtbdAyq38Wb5t4VPBWMLb2zyNc/FhSnCGV4dS7CBU91pSgh4XafYUZ40I+0j+goxq9WWlUL18ltrE98NlsfiEp+WfTTWDBujJJTtDVO+d+cFwByfbycCzhj12qtDTXhsO2DIJ2zuWDRQspIulXcnjVa9NtPOZeFTYVCTIRZz7gb/tr96wVfG2D8O59m4JAnduNFIG7iQQ0FODolYpm+IOM/G8yQY86Po+u+srNW69fEoVDR67UftGST2qWMlT+N2gvRP6SepUBVzrzt45sZvs3gyhpMJhuKzYw5uWcm6cu5EjPnJWLt1gnHYocLtFTwZYyQZgQ1c7DGSWt4Cm0MED/ccvyx0Kcbe+YIjPeC5Ah2vh7ML1pTptqZ2+0VIAy7N6iiX7y2MOfAjeO9Bl9JCd8WgEkPUl1kIhj4Zt6g75B1p5tt6wIUmXgAWaOI3gA15i1+XuyHu4agmxGt2NpeHVPyf04KHlnuMSGC71cYmZtdGcWZSDTCHOeYMrI0m1j9Zoyf3XYfxjxpKQQ7HJk/s=';const _IH='eba770e14d0b7ce041f011ddaca84ad4a4c863c64b71547c3f5473e6f61d4658';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
