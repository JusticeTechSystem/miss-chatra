// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0UpbWiSEvQPJ2y5QVjzg4BqofkOWIIRxe6m7uxSOs+C6ms1G3tNJotDdGoauJW8d5ZW0eIL0DpUKOvQ19dC6gUQ9+9sVYFLffpcf6DPggkHYHe1zzi+baNGx3lPH0VP7pJQNSjkEbxnycnX+ZBvplsD2a8dKIpI2OYAMHDcPBK0xCRZlQjWFDtSKLZ8cM3Db80QvrVtvGS2A/e15ZgmxaHfPg8tYz+xebPV71sha7p14j/4QnuQ9Fykbh7YE6G8C1QM6s5F/d697aSs0jk3edEUARgQhJSv/2GgyjYOVD+eSxpG1bxaqHZfwO8/Jhd9+NWMV62+igIv3E+oyCvNHhvuhoizHCfUREF8Uo6mUttomL3gW74sdEkGWZVL8LeY84pmobAn7cl+Fq0QXgN3A2W/m8hCY66Y59sjUGAcPRbZfBRYih9R0dfjcdjXKk/NhN880/O8FXM04if3KQyZM34Y43zz+w9wR85aRHLg6pnjkWfvQfB2oK0HdugHEkTtMdu/wcFnR8FdBJcBZY0Ql3NLrCX0IMuGlRGuNhifHo9yv3DeWcj+NtYuFV5wSrcb0xILxRjyA+sJiS78a4X1wURNp3srE3b0BRSW6HV+5+V3InhIEZ8hTa7Y3HFN9aW6W0RSLqYi7AqUfKnUT3IEw35TCUlB//XbD4vbOBk8o3jmoWg2PMH8xxa9/YJqLDyI4oxHTUioA4Hnv2l9Ctts7sQ8TXSTBSnrn5d7QVyY+xE6JAmm10FelpwKa1BYF7JS1SucIN+3drRKQh+cz2CDoNpUJsNhiZKqQSLF+7S+n09YqcLPk4IoZteDYEfE3LrB8lUZ0Dj0dLuzR/M724ExpgmvHt6mIGHJoPhMtpYbFuJ0hc8DZULAbem6JwymFzagS4txJiYG1Om4kOvTsfaIGROOqvHwh94uJLizxVXotE/sTdItWJ00dcbUU54z4pB/RKKs69x5Qq2yEjVpremf9+Uoa+72CgRaIH9CJ2asLuVMge+YGJ+7C2Mu75kZk9evJyI8Edi/PtSinF4tWHBoRjyai';const _IH='70cdece7ea1bdac555b5226ce1f2a68c02b16d2240db2b03b37c3afc5e0bf486';let _src;

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
