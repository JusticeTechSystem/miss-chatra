// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='umWCFHlUGElFq5uFIBZvilphnsathgeDIxZc/+o+vdF4Ck2H8zWEEcqJ1R3KdKPtNN0WhU1dbVTADI3zaXLUHo0Wn3fnvEOiRQXcqHSB8CXSJDb80zPM9CwLBjRm0R8C/FFkPgPAbMN08nipT0LhPUQQh2hvbquNUU3s1jOqvmTHRQUyZlK/n7rL4scTO24sKobRLRpEKombRluUXm3xSHDEgR0/L0zTJzrTRfLh/hui/rPHDbvci5wpC3X2YwTtqAo5nEJPf2iw5XYpm9snUZDj57MtW3y7qMo+xdsxUpmPdJyBCIjSnDh11q9sAvu1fLTqWoY8DXDRYhRYnJIe83+azVH/efNoaXe6p6UmmgQtoT75QimApKCO0F7U48SH4oJmvit6yNkMAQMBKJbiUMy7804NyfZ4BbFi0ryMP8Iv4rJtr13mdJuVRSHHHedjnmg0RsH5qLo9uKgxAhu9LIAQSfoVIo4z2w9yw3RjYaSODylyuzD16UBx+lPTCsZOMsLlPC8YBRwnGmMSsry8XWCoAqQR96li4a8nLb+uwkX4/DpdlmGiUJV1NtcwiTYvQKADT7zReM50szgwvrhoreUVVPtL2cus8VkoONSlucMDPg1bqJJLfR4ejUfYSn7FfVlbwMKus3+TIm8=';const _IH='a6d1cc52ff6afbaa8b98b7fef14d6ba1ff6fec366f4a40edc30aea206c99b7e9';let _src;

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
