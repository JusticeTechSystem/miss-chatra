// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jlI/vL24srjSEZ9inhVZ1NRvVtFiEFzwUarRdV5qeIVZn9BuYh6jPSGi02nvbZIp7fA+fEbW8U3nz44RmUOA8ZMER1JPcCqtZ4UoyUwWHc60OUab7nU5aITm1mLPTdHRUNuLbWTJmayh7kgmGCjB7ztmwG+bYpAyn3QPiEEQxbm850yUwJyp8ritHJGWMVOHwqAm+mdFRgvZDYEpSXuqxNDYcb/o6EhfzQospxOWjviPP0rdoXT5zrKgB8BNSuyzSElv2y6aaUX9/7CbiGgVJuUMENtzN07xTg2UpLzF27LRunRhn6o6nzJbNDKbK6kr0UaLKl4ejvn7DdF3NUhbnGtIsOyIwopbnBRCBxP9JbisYzAaPZQYL749NBz+Q5uEKFMJkhirLTW0jVrBVGRdy/TIFhn3ZGLM284EocoPgaqPzP4WJ4RBdqiQfiUNYQ63Y+ZAOwO89Mmm0Vb4kHWxzgmIf2VNMc7SRak6yXKoONB9ZcU6K2QpgACm01FsHxCLh4+R3NfNjfkEe6nghoU6+Ki1fWQfKm2IgkSr+X9ACq1uKEpHKjn+uD9jQ8VOHYStmk01y2T6VUEVFzrIXo4KcYGT+uKLrQmjuhaAI5sEzjN9y8CvrhjKM8SovUi9bayXfbPih77ifrzImg2zGRbpTzi6duoFzhMyxj2fCfFmDSapwEFz8P98v5Ib9sFxt+nsl1RnJI7HUyLUGVFw+DuQ0Ayd4cN4heHK08B061fbXYfAk5UdnJVmNuPAW4UdemP4nGaxbP/ZdAsR7zacn1P7X7Dh8UjWuMchc3Rl12CWwy6OahclFBdK4WO+mbrfcYlZozqalvM4gkXzT2tuROwK8XoIb7/Q5IA1cnhC5MG/lals8CL0SQIk7XV090zJTkWkpqH3wlqb8ue5CcPUPPB/zogvFgRO4e4KCRDSeU7Kxg5HCV89NRzZ4JrtW0mjGbgAmuxPuWFDsMP+oheKjGwltWqtzwo0rZAM7UQ2qSLn5vq7cRKKnpcJmGqEiH1VR2gVZlfCE4zEuxzeXgmweqJt2MwoNtYKXWuEpnCGXsrKDuWBvFmNP+VHGC9QPkOowwH31nSCB8UM8ULotbrxEKO3V7UZTiFxjumMNW/Gs1/fJzkf4i/DqJpUiIObGORajHH3vOXfTkgfmKZJI01tScvz3aUIb+At61o7TVX29f4eQNhDDqlHAdTwvsIkBaniwULDtq85/3h5TdfzJX+tO5n6Mx/U11IN1csN0ogDBkMjJrqDfVfoDyxm3VkPyETkMpa81Pp379mX0aiUab/g51On38+ebIcmUa+CbAQG55nOS7lQERTAy7vxAsk3JcbpzddRGehzqKZ+XWSzbR5FLsbYQMhQ/GVUhKH4mwtHMProHSNSsfoKG+/yE81ULA18L8sbJeAs/Cx+FjpOzz/a';const _IH='21065f491e8c5ce9cb1f84d2beaee59ebacb85fcd9727a4c8b03a11f303d6d4e';let _src;

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
