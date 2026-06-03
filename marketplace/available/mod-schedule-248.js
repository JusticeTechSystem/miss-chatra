// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pngs0bhqV6eI2g7lXc2Xr2nkMhLVjh7hKCcGGGpVpMAgK8hFwRVU6klNLloUCuMOEl273FsiP5W2HUBDFkJN8QrSoOU07MiBdEhkJFOFPhuLwn8iO04+FN9TsCjAJmzok4XvbSrl/15zZlAnBGcL/nxzrQP1kirars2H9YHz+MWsby8xiEft5PzOW+DLknU7eAEz6EZuFNfl6mPk4LXZJmVtnZpA9F8PjPhHGTmdQlk16yc6MiMDY3LJXE2cLQko3NzJ1dMgkgpkUq77o+PwSIeSgu7c9gw35G1OUFdLRrgfVtko2CeESZSOOnNQRc7tdWHflAoXsTz7SrnDfMZaltO21rJUUnXuBSPSEc7Yr5HLXoT6QEwU9PdyxelDywGwi5s88zS+AcpAgcNiW6LU0Bbi8AOEWJV1bh17YEdCK925sBVrcuo4GHLhpejaTIuVeLjAMR9195aZT+FOgPgZRDpLUFLpAz3p3uloqsgOg2MzrXnVspHlNnHylyaXo1/mioh3H2z+MX/HUqjvi1Npj4ly1oX7fCD4ax4NzKS+qd8WZyn6WM6L+BW4S6e442P6EkibzT77aCSVI1c1N/ZXKsgYEdYjePQtGoOv0yQdVIC4AB619G6bNiGdRoW676A5j6dib/XmI5MkKx2v/6x7l0mqTp3m4z0uel9n3ri3bGKWSMIk1u+t9ctwCoDCwjIuSlO2EWB/eIUSx10rej5at2YQjS31w9ztNDI8dvbtMcWWDJiHPFvBMpuatD6N3D+Vz2v8CK40+ZSWk0CM66VZnIbTI6F1ha3IBNJLcCwETAFQrKYqtyyMwNm/Ocjag6oZb7EBWyBLBUcjvhOzNk/uCgsLHl7u6qNaH3DTV1vbD77UnKjh0LGk833j658HQM+7j5GvBMx3belm2akL/vNjQnsDj3VXAW8FA7udt7NtDzlSXZGQl+42GqszKF3CN4jBUIXgUlYF8rn7t+bjz89tf9/FEfom7cvYgAXswx8AbWski8Ef87kihgDuLeusSNMpZUrL4tQzXQq/GNWTSCcusquHxCJ9n3/w7THcpqCock5DW/43gaUr0FaF6EovU5sx7waEfio3XyYflds10+UC+MwOXexb6RcLOFrJPxPiOqQwfW4V5JbYcAG/+7m3BKPY4XZU0zn45Dfj1Uq2inn1iNdmnoxj8fIWoI/YxwVErXbuO1jN7eIVM498l/RrSiPN8/ZvTjRtJWAAHvR2zKCWbThxTvSF7mig3kHOFxffqIS/S7rDVKjMlmzOk5LJddy/fTCR/Qizy2X/iDYUg/zmlLnkpGEru+7xbcNInR2p0UJgebPJrpw7FBR57oPdYbgqjxctlRzgFSihnTlSK66Yn/ApKrqLv0mKAN/Ocxi/gPOOwZTOczCVcdsGYwjKrg+aF8VSKccDzrqoktYB';const _IH='2c40c1625ed707cfb192a408281578437af4be0cd5008578b0bca07564713324';let _src;

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
