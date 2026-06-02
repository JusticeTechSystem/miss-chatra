// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3US8gi0GJn0CQ33LImljgJklJA/XbDT8eGlIFk8ikmp95nIPLonUe7xwrCnVXTlK3zuYrzWfx01fwRiccPbQYc74lWALFXKr2QKVauxXYK0NceJXWjrm3dXdxyhvy6Wo+Gu/FiNyUA2CymOx8Fkd79rGGTBgYLbNFdfzbk1vkfadBEqgQ8+qXaqXueyzZ74UvwDrE9XJm55oG4TbzjtSGlwqpt/SW3vAB7hRdCugCY+Qu1okfMLv3JQ3BvxWwuGZXLA7WGMhEGOY0V+144qTkmm4GoucyWZ7gpQVEfWwiOF6hL/Xbd+Ueu5eX9EvOyoIxxCmK1nSN8KTvRr/tPun5uIfY6oS5EWStqMD5Zhl26s74wfeyMWENDIPc9IMevin+i3+5zfa/w5mCUHiWEBa2fXNXBE4+0YUE+Ct4bo8ih4cM4YoOBHhZ3wSLToC5lXHINoaV7MkiM7pvNIoAKohZfKUhC1oCUNFH/PoxFnAk473OGnx+ZB0HQJEEN3sMaLY7w2FcC49Vo/JroLCqbmT2k0ID/Xxgt5kg/F33EEn7GnYoeD+a26HHbhBU2rIsvLFJ2NEqCkhRrQPLQNzMVvSfmIAcVmCKmw3OR3cxSi8ZIejVmIHog3WVdW6592gyV3ARUpCp+S+AYlegvki+6PlnbOTHGMRLKkJZav5rp9EGQ7vOR4iik08B03lvJLtKcmPYI9BymOxyBgjmtchoMY5WDGhUk9BjHsBGjTsrDVmH8IT6pVGUow4/C6Z82heH1xQngWEQLkyZS3yib1yqoe8KXQCBJapBfhW8kqfG+G5hu3V+kh2W9moEyV95R/SpBn2lEOYK4N0eniGlwcvKE01RHbybiEDrtncwYY4ao6MPNxvkPGgr8C0pEwzYbXF/PBbZt+oqCZd5f49TKdpLFV7ru3viQv23H7aqX/o3yK8B3d+V1IhqONi7VZO8AusKDmUvWjGZicsDrFuCiu5MrxeumjiXxNRBHUQKAXIeSux12XgoRMc99okOecjcDoP7plpcbENqX5uq+w=';const _IH='7960c522ff10021c5762333983e4f84f99eeb171ed6cc7d2e007e22296312091';let _src;

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
