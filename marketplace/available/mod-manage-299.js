// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iqgT+oeMqIiZcIyIcg5m7j0Is/s6WSgGVvpcyjuruHLj2dWIcn/9PBVdLNmbxxkGBLLFZKgqd2gbiz2il09bjseQ9C1+/3MTT0VkpPKlRNo1nqvOlL+YjmloN7CK/9wSjs/yQtEMoi9o2xyxRPl5obdYXbVV/nCtB5ZfirEO5wjOh6ESH3A5zNnyVcoxNpjWnoMh4dJfhiO7Tcb0VCQ/4YS5b4ozpvzp3hP+YEu3njVsvzyAU41Gil0JQ1IjzNtEuf6p+yhoVahz1SxQMAKrAs6vpWGUfhcXvmPJ/D32OPa9/7JKopiWIg0JM9q6kjy8zUnfk2ErgOryojrW2BoCzvfwCiAJX0WOauHtLoV+RUnxsiKt20h20CgKczFZ6HYKHv9A+GShB3kGxgFOcTEJ6R2+ixNFF9kLiOyqJgm6uJfrN2rEKmBTbnR0usJVMN1UPPmbzudmvUp4B1RQcMJB7zthRLTd8XPkyEyP1xHCoocvTJ5/L0xgNwi+q0RVBnKXi/eyGVGJVOlXrFylA0AdIZP7S+4mk02+NuZexuip/rGhWHmMNCILAkT1XFMyP/eVag9sIAtCSuFcOQJux8ReYrf7uDn+0GOpQpHQXAZuoWvrlhbAR1VaOOAHT9Q3TQbcjh/+2dVxz4h+p1q+kceZO7NpEAuswCp501klE/cMFSYdIdgRP/y4uVbDBUa065WVC/dR6Fj2IXvCr+6FGMstMje8UPNwEOjXkWkIIEVRKiUYk+LAfbmEXhclCWTCucbYzy1dAOknrTnsjNXXXp2TjebY7jUVFYyPcBnVLamFFpMeEfztWJxC8XPbcirN1/tSIwfmOOKGheXiQ+0OI1oYLsxe71MtcExe0TacG1Yh93KzbnCYh0Br6L9JBRzXnjItlqp1ucsc/oyLp+yjLO6PS+o+NtAQ5WKZ27EdRS+i48x4NjLT1WgdWOlWNxuOkxAY0/MgXpxm6P19ovkgwfOXRvsS4xlyv4rj4QkfulvJhmLIbuQVrspeciBA7CXwGhjMHxcPqvoXv8sN5FKebcEDUaHaTlNpW9RRTI4lNF7R1X+co/QDw7/Vw/wD2L2hcpyP7kZc08V9XGkFLyl3Vtx2p0+DFsRMRAmQqRiI0SOdY44E1IgTyGQ3Ds8ajHQuhV6lKqGUZZb9AsTohyAReIxT9mKB0r/FTuSIlw6XDsfx6xp01gseNXt/qDWR8VW9DKeb/wt0fsvW5j4RsfpKBL6kYMCz83lPW5sK8z7ZSgccq9IM3m71R8WFF/1OsPhupmNEW2ziDH95Dg6RKKS2xeBCEfNZ7/s1H9na09TZjF0Am9OVunGgrwTUv5fPx872G/CK4NyzaVYwVxUcCL2h3Ty/AaR7iedS/qlPaEEMofRS1Ui1lXV5HuiFyQ==';const _IH='9e653c66a1c0c0bc47e68c909d492ff640480df68195620e444835a0f011cd39';let _src;

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
