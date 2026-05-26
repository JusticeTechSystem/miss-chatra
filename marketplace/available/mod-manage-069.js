// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ZrI/hOfVGs3SdjMKNQHE9FInduvqCWhRAP6x0H56J1KjTrNauO6YHf9+69Np+stc4XTKjPo2sIb+wTVK2zL3l98WQhMC1VnTf5rOmC7YkZVTNLVmBZyxoU9vtin+zN98ddZ+isH0Jc2PKiYfhb3hI/jMrnXyjkHsTjS7TFOvVQ0gbrIpx8ix8o62CIgdxH88TbpZzJrcMmYB7bitgUXWU+tIlc7YIiI0gWtIzJ6DLR5iiBb5Y/i3TTCdBBBPHZa/hcKz3MlffMyNBBseqxWsTxiPDRjTJ3TyPUtv32ntvQ+x9KOhYYTk5yUet4zHY8upHaAwDarAfpxypRtV0lHCcGjVxXQ8s6b/ELDQ2D2ZDFOTviRM5rskFevnajmcla9Kg2CSLTZXLSOXptpkPHI7i345x6cIngWtpkCxb3BwzNGDENgkGOnWWtJrVOjAUmzWFsW5NXjVzfExuLJe/zgySdbVEtKHVrXxDZbteLq9QUUcfZlI+tvrILxeNrrD7BXeJwnf5vRcC3bp2Yfimz/DFqtq8VmC6M/msA0vR14fJlqEc2no3SUuSs19QgBy4RSr0MzwmaO4LIS76EutFQYPaaRqOOLqlZmI4clD0530iegK7YRg5rjxX1rYzXnicZ6Mza1N1mYAE/FLt8YlaDOJk9wlgASqeUsebywES+OuMLhVPt1lL0RI5wD0m2hgM86SPcvlanhJeQG6EZAsONMrNmaRl9uHDTBCmt4FVxVYfVOxe3ntjFV0mGnUlMkDkvYDTML50kGJ/1vl/bERMnG0nJy9UPDvxIsEoj6xW0r61nfs8AcLk4/Na6lPEpTkwVRHmnydA7IQxGUhxzTwuGKYfTxZWv2ReYk6/+sv9HuFmIbPh3yT7cIuk+U9SFwPYZF5PXSOYUM0pXd/00XGMIK3ybSJT8pFKDeI6YbSX8RpR2WgU+jYEHkUfdt4eI12AepRyl/AIPasb9luac5MxkQZuLqksbdkvE/p6j7onNOZFsJcZxlSFOVFtYc+BIblzV18OePRzxUDMzZq90UjzM8H7C2Px4+iPmBGAvAtUhcREiXxHq8MgohK+1tDWCOOX4ompAy8kx2qUj1MkElYZ4QQFzQkkwRD7o/IRs/3esFjDwO5W7HwPRBpvdazNl7QC9/R/PW2qYUUcweClC3Ciyf2Dlj2E3X66gKApbCnBF5yWkd8WdwHmaYRw3JSBPgrp1Z+r2vMnlOLOV8KPO3jULdmoZnEGBoJAn1uMafXpbW7iXr6w8wZmkJ18WPFF/aiRmHJS1ACsFXhGVC7FQEYxvFKZPlpakubOYWW6GKzj4OypR2plQEK4+gBkFaMIiKZF8QSmCcGP9W1bB7XVf9MdT6gG3/nAqUroAxfhJ5l56NeysbWmc=';const _IH='82e5702aa13e5a75e89f923a25708393e524d5b677dce48fcd8bbe3b21f07d28';let _src;

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
