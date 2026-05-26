// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a06yzIhIrXJPwG0lNLr3kPsq9FjecmTOIOBx4l7Gt3Dpgm41v0qWR51DfhzknJ04XcAOUMme+dAMMWOtiE44H9DhyVqCLLwIAz2vQQkQjO9n08kR+YqsZRzh2koVjMbsfohy+TbyloJ77KpNOJXvRky8N65Fr8i0fr1hiNhYvvAls7hfobiR4KQP6FMjg40nR0PVkhi+kXO6pIHIDVRPNnuQr2Q2eGGNZONvf3aAG8l5S+/YxJ0vsH4oCdswKIdZMb/yZXFK0iA8VPlXLE3XBOo7MclIvZVpIiabi32XIjI7R3wIUnE4Pv9xZno3PERzWjI4IycE3pd9tAUOvrJObuNaV0HuLX6rjtXrvxKy1vD5RpETS0mT0bdiatsI/4bMfGMUaoRQIPZVkq8swjqfUAf5V4KEm0cGUgXu6IJXNrkvOnYcwpg1Bo1+qDj+4W2+p1YbA2OB2myVVPgBVECrRKsuBPmrhK7FAGEjIrvtk6jYyb3MgOUIJnZJxtbw52yqtkr+6dlNFQAhbHSeymDYrHBvutx+Y6Kx0rMMhIo0WwDhWXSGAPqNcWTvm/XM9B7+ii4nalRMwpZXqX42dAe1iGHyhxVXZFyqrFAvKRgsVkabO3WJio3DIXF5NGVEDLtwjZCZ9ALwf5aj9f9VM33odvh9UkvFvC8Uez0LbKRjtYe/bzBv9xJ5/cX+tCGRB3RdpBukPca3forOYY5EfMuX3h6hzl5KViokQmtBxfek2aH5UOAkq73V7/Y7GBhIm2V4gW+XE+OvZ1SNFhp0OC+Uikr+nEGMhRVyDy3fU6aFskJ+H5esXuGMfTG7U6958oB1n2N5vrH1Zd6W6kwJKGvTn1DrlH+8sWxWDd54HiuLhGNjUppXid6+3FeZ3k8LDES+h9iz8iWanzw5KiCYQqzf8Yk67TSEV6APgtwmbOiGO9lHHcG7J0AzhuuIinqkJt7Yni5A6aakMsC/5uRgA1DxDbnyqaEDV58KJ1FAIWjFU8bXetr71q/C/GeMJo7RtYM2R7wnFYXMMngvn3QXrwBX87wVNGIL1w==';const _IH='58a308cfafb38879e582838804807669ad004fba7f4d1f98c26ed1b5b7d1b1d2';let _src;

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
