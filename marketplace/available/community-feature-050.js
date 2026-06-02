// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qgISI5LRyO6v64nU2huY1Ar4BUCKQN3+6c6RL5qJ8C0ouLoBnUPsxYuXXuW4GjJXYuwhS8C0JS+W6QAlietoLcxKe99WYBWyFS4de0li2q/a5J7GcvpsbcCP1Kq/4H5j/TptJkU5qAqBmZUt51ndUwWqf5jGcvr3/FcBkt3cZAe2NXmZ0Ds0r6Bu5X/Vi/ZyoCEg0Q5E7VNMpvKaf+0kZY0XWa5TpJH/5DbJpkUL/IpoCR1yw/zCF83u3MU3jhPvlLdPmJRL12Bi69UY0wuz13le9UMtADxFLjdTrk4HFvpWuV4Ns0kmEpLPXUm9A6NzBWFme6XknYKEABUdzt2NmPzqMzQ8OUz2wtEQPlw+CLsjOH/2/q90kygiT4ZLHFSvvAJ8emSLo3lxC1esRRcJzBLRvdlnZCH8ieHaFuAM7mLC/gShQ/QBPe9B+hkeLZGCspTMcNfG+4IOjLdaQ8hQwb1+VDYZ1ipfut0UEKEUOJoCQ/852x29P4GHSFKeoQeWuOEzVmq5vwHVY43xLXHvlXoSFvS2me9Fwlp3ysf7GNoPmsK0ghsCoFP8ts7qlnHfpte4LoCKxdeO8VI9P4uTwiCfrIXyKBDCz8NvwX4Q4/iwVMnH/jTeNGcVNkykdLb+SabPMKoMkXUi9KquPjDe4iC/2FjKKLeeDjlOc0YkUVu7WEoSYsCYi1GVRdSpeCVvv6TEOEyay9jwHONOfNAVox2V7LUAwm9WMaokjd5ruNCfC1bAqG4=';const _IH='57d49d6c6cf19c1010047c38df0edab486663f403b1375da14d4c82c21a6d6cc';let _src;

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
