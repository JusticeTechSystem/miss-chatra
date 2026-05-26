// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='alnvUt8Swl/yeJjog5BqcF9Pd8DAs+nOEzxb6gH+QgcAVwM+7WiKSWlKKQUpmdxX/+1a7N/U+WW63nY795fi7aopKvqxP/tAZN2/TtP05TG0qYVNBiz4bBY80UYj7aavfDnTtbeyZBSg8sL9+YaShD/YL9SgSBAwHp67WTJO4lXFo6zOEk7wfA3ej+/gnYr2Vd2F+qMAMesd1hhSvfjJF9R6ajFpD+Li6uubaE6bb1e2hQczP+c8VuMngfSiuPblg64X+5qTvI9x0BfN/IiB9APHOCjqNOUSwAxku1JhJlpTdNTDGSzgdGsk9MYqx55xBR8YC4Eh5Jjk5M7XICAJPh7tohGa0k/xGJbSXBgbGiQ8f2gdbw43nLE3vTMf1lUUmnYH+w2YQ9IpwYXXXhekIT95rI0bgPOzHccPx1vttp+69W89SkUqdUo6r9+8TKw3q0FHUBj3WgLdHXWHedSyoeQQnQa3lCofM8yDeTdaa2g9cn0TZJ6DjwboThr+HzoccoGLyPmVoyGBcK5vb+ixINvTGi1rwdlll+CRF8igf6mfL2NVxePmElOfiEgX+da91fQ/mt2xEHGJBCzAgsx+F2XcqD3SZiNbm7Qz6ddBmri1pFbS9JCCGYZFIhc1jPswaptqquoyh6m37yVB7/zTBhONH79dfcunIU71TDdzCyGKLtgrPYNbb3fEsUKUGTC36O+Mv/247UtazaRSleJn4gAD+9pDBYIC44+fz0T3Zocq6NWH/7Pgi2XE';const _IH='545ace8036bfb4d32f17b7f97ffc963b2a4bd0701c4a41974f9ad361f3ded851';let _src;

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
