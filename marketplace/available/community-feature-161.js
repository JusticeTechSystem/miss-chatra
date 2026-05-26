// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OB1AcCxiV64QsEYcbMucHlrM6cLUeeb3tZ4tMy0TlvFc+0jzoTkdkj/h5V/atFWeM5YSfQS9eys6YpWP2UnHes9P96cHMAJdtEnRJ6uwSzpyxOsv+gTp9y2l6WP9aYKYtYR9U89fepI8MfXTkG03eV+1nfLV8EJ5aJmxnQENma5WKQwOf19dHulJL0sMOpYomlGKdm04hB/JyTvGw19oO7mKbfzhcx2autSRIZhd1CQ6+dc/hb6tH0J8Qhoa19piUmbHOMVLpG8SkoGZ8ee6fivsay7B3VxS0dsvXEEBXxT7dfW7Bk7tPMl96zqH9f9pAVeYQnKcnsBkL75nCcF+CJ488V4zPa+yDX/DI/Yh37Xk6C520gi+Xjn2Sht+U+rErjthSzY+ychhRPmzJjJRHxcr1eLRJc67HcCVzOpTNKXJZR4zkNpWXGm06pohnemEHXt4Q+l3q7vsvDSOcJI7ItkFPYmMraZv6NGP3qNAEgMcSF52c8ePGff4U1jqJiqm8xYqDRU/TpLzdD3w5EkUsNknZ2nv/OpaoGSf4KBPM4WeszCLqtwaM3vBhsR73oVh++SvLceUiyVPM5McOgk6/xUdXB6Ni4hsn5mtSN0MNf90pkZJJVHyqeGp8bbT2LtRlARIDA+Nm5OfuEBe7R/+oMIG8A4m++bKRXG5CSxMDnrXjxUsFPAAVo3lTCUG2EvR/mn48S119K/vDQAQUllf6jyrFON4XdcP';const _IH='46566bef9272936b86aa3ee3627f78370b6c1c8d8fff4a217c02fc89291d02a2';let _src;

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
