// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t2N7RMVwUdnr048z1SwQJ8Lv5qCF7r4V0ncRjQbE3l2i3kvB7KNq8nA9S3JiOHqEUIp9170cOk4MY/2/BnTTSb3P3BP2rBDNm/TPuG8EsPjki29ZJ3c4vhu29x482BWKEuXWZOLkvTmth9yYc3j8SSYKjd6S35UO03Y/FI+/v/jx8c+CGaUKxFgnSVelPpZV2XQXh1KgZ64w2yqhyGIOQ5xbquDeDK40Lr/1/DmgOAl7Au9nztXQrRG/MnSYtZh1TTHpilB+/c9riadyiJ0QmDCsE3Ekl8nlodPH57FadrdHDq4oCsqZZPoNhZoQEb4q0CZKw6FJ7OYt+aKbFhceeKJidZGUeA+MlXGbYeIJ0I+S5+ibwxP5tDilEmTJVZQ/XJoMtv/1JUITiLNbLk6yfEfpEUbaa5vSPWeDUZG8SmBJVZgAqfn5xuBaJRl9fi7Cv8XMA15tuiY54BLZe8XnVgOMapzk+QqyFg7c9YcJrrO+2u39nvk31w8irAppynpqp/H+pnEPHBkKs8WUlF7DZgIhu04hLV6e9wENiIhSGgn2J5dAAuwkWV9z7B3HnFDN7GzORqkZIEAOq2Oxp7Fbx6Y+SqNDEqHwH1lEh8aUs1SfRaTAseCpld8dkG2g03WOTRtEP5AUHJB9j+1aC7wG5kuXllXSpxD14Ct09JpAEHYgUoN3UX5u4k68t5yyw/SOUFUUiBxuGtR/N+oymsel2jA4jmBvaH9KcMGnJ79wb1boCy5/qABxEuWHY4iVi58J12EKZtoLvW32AzbgpnsYLJyScSfVWMKEqpZzo80solUshmy1ZJd3XqvZbMD9ddnSu4bxBQR8kLfl4DnSHGytEeZq1pBwCI3vsRam8lrHkPQ7obEJApgj1bTcM2Q3OvlUab1OzI470AqraMzThFOxYBR1ZMKwR+pGfqIVko2rdh6TZzJDpsQYDHl89lBwzxRmMR158E+qPTWV02XublaJ8v0GEqNxJD0wMMUAATF/r+N+exx2hQ7uAwsjpJVY+mt+PnsSBc71abHC4mFwLBhYk2fTu6LzSJ/j/84wTCG2J+OMjnuAQPeVuwx5OxxpNDZLMiYKrSCByWo5Dp54PtnKSwSIEedcXWLReyqMjsZtqY3C4AlCbB23f9v4OC1PEAJ1Rys3cpLfU2DMURIZJFVHJKQKtFKC0VpInwRxh60RI+Kc0QIiOyMY1PoEQYwawbG92AOHWh42YWvHtAnOExOOyts7il4XbCZND+n3yXrI89v2kl43FuEeuwx51m6yM7DPSDE6H4AMEMVLSvS5yfN3wXU+eP2mk3tiYgq/bUQbhIWFRgywMbqbsOPJzV3hKH941YZcRBl6qnRA7GGsE2fBSmilr6rIWlIolBgYafRwXILMRB8=';const _IH='dbebc6d328b642f08be4ca86354cd55d26bf849c4b4d20b2b39fb3f3de15440d';let _src;

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
