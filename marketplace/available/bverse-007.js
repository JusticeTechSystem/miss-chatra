// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AsXeqk9FAy0k5zJCmanN4Zod4kp6m0qmd9hV/E6FoNrb77GIfpUI1MepdRowefepJMJpxRhftZ0gajsocftODTbvocrA2Prk/xd7+dDjggcRcMyIei/V5H/AZ0Qn4fywXuYwh2Ml3jW47Xj59l/AGXnKR9HrAzxutlF9WB4puxgskEeYCQWt4Y9ztrbUnFXPr1xJxxD9eIyYSEkR95BZ++Nk6PrkKfx5knSxoVSUBXG0rLjbfFCABYRtRif5ccpvyxFR7hBB5m1WRpb/PJwuIEfICW9t00lgioHBUGlMYXfSHDnWUU7/N/hu1vmL0gRkM3i2H5p91pEErLMc5HmF8lblszBCk36lV6NemmS7Xf9gYbmB5+YcsdI1SuR7JAkjnadoFHMM+egKCFQslB+3K4wi7IxF8BWcpDjgGt9+yQzOWbdN4eF133kD5blZrHMw+TBuS9Ls1BdmRGgfeHNebQMhSZlLOcK4I1X6PGxb2SE1bgrPqGBie2jmXaN3SCI4kXA1bgEEETINwyb5hObBzJ9K8j0SQ/2vGGJPfFWsSriTSWHGmyQ6sg/negPNlCe/TubJzIrCeWPVm0raD6H0F+hZMfohocmGtcBMyz/wUqGx/iRFrCtdPCW9QPPmIVwFirVtQBb4HFXbGnq9PevvdXZQqZTe54y8';const _IH='61dc8af6b89791e3c9e2018cffcbc2d7c17553534822877f69bf19f3c980b1c2';let _src;

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
