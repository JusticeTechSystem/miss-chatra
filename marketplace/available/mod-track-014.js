// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2yATuTbp6ONkYIBu6ibR2K4ALzeATMEJwxjIKs1cq05/tfkq9ILI6c7gdnZc6x7de1pehDcP/qBjuvK0BfQWj49GV3b2rRzUsUQqmaJVPQgD97wrDNmY6MVeaiH1t/GF3+F8w0lfw1Ug2Yh3goXzT9UoZAGyZe3qaMkBha0KHzGwS3JQEmfsGzD6na0PEwP43e7WE+dYjBjopu4F026pvaCA+V1gYna46630zD0CRPz2SWEjy/DRKHLnUvtWolHrUYb6+fAMe2QEctm785yAmBJ/hpHCxXd4cvGMruwUJbpWa7V+n6LSvjgGPxY0GhE1tHp3QFWGk0Tb0mGsrpl6BPK2KmPUyR4LoIgAcpyfkvR+j+M8K2qOjN2SP/uPbM0YTPfn459ZDauy7aWsGfp8XtTG7dYnWXyqklN87ijoFO/8GPlNmhh2RWER9Ni7I0oljEBv1M/EOAeF48Hf2O3OO6YARuZbALxsE3S0fyOLDqv63Oa3W9+eilNd9cMFFzggiP0R2dFSS6PUMkTd8RU0IJ+LgUuGXXxx07SiTGKNsiI1twFPHw1mw1fkQONBaAYriwMe5tRdqLqqraDztnWpUqgdRSldrZM1xeHB7ekySgtONMT6z0wws7Nj+mCQwdBQpkifkUCQgL2eK6/h8xR/5CxWaVqrAmpEGIYuKxoiG8UsSo2thytsFa1dwTiIRmAVRYaCBzceD4SnC45P4hFxPDFBp5CYjr6b9zzuTnRb8FdYRZT2elukUzcRjCTKHF/RorlPfVRUohtFVTe2e2yaJq0NTgI0yNJ+i3J+9/pSn84xGzarGw5+PL2j3bghXKjUdrCC35fiLTyynqx81QgRPnpXVvzRi5opKq5GTaBen08k0BtInqZp802f/QOAKtOiDWdLl9GTK1IaiVohwFQ4c8of39zlklsqflq386BcXXM9/7p5pXRizFosuLhja/KbzuOVerrXdQQL2xdOHRCYH838LT62jg8uBjuZ6Lv6/VeWvh2BDu0mj+erEARc1hGqTY+0bdHg7jKftx3BKvy6OBMwHH2wtxctcx62kzjkLN1JukJ/Zh17wgrG3ofzYuCNH9NDptba/XUX7bU0iaxmuoRx2jbe4MomSPPohQkUfjflJIcz2m1MAQkaWDzzMxhBy+0I+t8LXym9iyXoUKutZ1BGNl+F3e4AmBebIfr3cJJAVoU09XIte1UDBGtw+lYIWj7znGTfmk5kvsarB9P6LwMafdOLWfxloDHq5rBhIxeRL0hDBngtqZIH1n3louU8jJuxDL0UVD55BE62zUJ4VXXgry9QvSSFheGVm8zGJndmn+ym/qvo6/pHQlMyl6kDPz0OD8ThBFWILjxLFYCwJnKB23tkNIBPKg==';const _IH='0330ab21e467c9217cf9240da66e4c2cac09fec69306b87e19b520ba92fec49e';let _src;

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
