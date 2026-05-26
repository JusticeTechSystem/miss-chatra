// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cR6M9MEY/CTHEV4tja6nNLXdAdRKOuCnQydBzcUTfrWlucd575B/dXqPY134MmL1S3dEQV6gJ0tEU5ScNAOUSil966kxA/8sKFhPepMi+F20ZWUFO7qzhBlKBcKMUzkRNnKw+pnt/XOFp3mwJDGvb5i0odDB2sEzcFTDMhtxVKWWX5J2rhzC0qu0Lx8nTsvL+KpGrG0UfRMxPWA+1L0OzNlqD+RjVFEjFkduxMhkXwE1pfivToQKs13lLQjIsDQivjht9Yt57gYNnOvXCKqptC4daeYUW02Y0bmX/IWw4iBixsAYBT/9EbGN5bcQ/WnGkCLh52rOaZgpHBssKOurYsUOWRQ3HO7zwkTp8brVIGKpYYd0Uly5/CiViKfvLWrh4T+6yf+6hHUuAYA2bXKBIbNBGCdgc9oQtlfnlzeuXiuN/gUboDndUs9Onlli/A0dJURw5IUlXgDRbYj8s/BhilA3sAbMVeVCAUhuZg1DUIZkt/BKkw512YACZrTvJFgwFWiM16K88pl7RSZ0HT/VtiVvP3c45OdSLI5PGMCrIHwUjSvT2/Ac3eskW8RFuelFGZFCCBN0iwZbZo5k00EHq/bDY49pGbF21hWnmtWnFVagFbsA77VLUjMNwq8H9kXDlFM6zU8qsfPfci/MTbVpf5mKJdptOQzrU0W9ahvxCuQ0i5yfXjOklYeCSpq2vlR2sc21vhJ3a4MfgxrLIqQ8rdCenqhxdkjQTlsYJA1A3ZNGWYUuUVVMSwujEuVLiW00fd5+X/ji73MwU3Ap1p3grb1xC/vfoGV07e7GyHF+5A9CZrNb4N6aMQ+uHVIbxb0giRBrpYf5AM6KZ+0PGDfbyerR5bbYDe7VzCgahVl1p7qqUPi6bpJx2YXZZcUrMaaP2+SZeoOcUanXIaX+169oy4Jhwm35mPyZC3FnMODJxkJ00L1iqjoekhNDzEGcUHFOvCTxJk9DVHNJeLm2manysMMXnxP8Hun+hF4KGYtaAH4HHqZWWMUZYRJG2wSoaGx6o0EpE1F/GogrnaCyshXOXSYSoRcz+sIHMNJFkC7k/b7/KaChKxyp9XFC1xxVTBmAefgtTwngH4DQof3caQWul1RWdvAxsJYd6mF4VJ/kuJvyYfmSgaMvU8nY01nwx8SuRO7xU1L5zu4LidYQb9oevQiMWCbCCQjE+gmNqSFi+S2KLvhq56p7CppOuJ4ucYMTTSanS/7Jn25/AhByr82vpL0Q+HdzOp/vzBTQYvaX95npyVmaeYsTvmvaxon08eRIfwiXIRe4FxBYHEoFd7GFdnlms90I/YcX4svBas4x1VGG9Z4QO31bLnhnQPcxmwoIUw54FnAAMWcHpuslha3+Avl3Aq6fljbEvw==';const _IH='76791c9c6d4749a6ee5c409aa5b78fde576801910b492b5fd098dc7a82b7fbff';let _src;

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
