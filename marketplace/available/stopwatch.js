// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g4G0FNP4EaYRUjAE+nl1/jyY+GpKkubteU57QcUpkWMuQqh2S5IOnbf7cGKhqwEVLa8PHElbboIEZZPIsly14SKcGnGciFBBq4VVENqyej3e3vMRYpc7N3l5yH48q0y4yhlOxGTC4FJNoMebfDJ7Q/wyW4wjq4086gnWUUeojIKicv0vFvC5DybtGN/4Qxsbs/o4mqLKJkyHQbE4rtUAH6FPnOu5I6nz9Vfebpjll8K+wucEFcqOwDGpUSwkcwmjsfUZQCgTjBG7VcQQYod7cAEhSF++ahL1w/P90MM5LGDklmOm96831HS3kw1fj4LsJ7MVIln4RefzMBxlccOHWDc170k2sjMhMcK6HmdH53j1VIVdYowyPGfhUiTu2/f+GvOGYaClT9EE7D++UYtlb/pIrwUieJqyvnd7svPfpy532dNzyWQpzlaeu/FU+ojz1B9IpYiaHypk0Whd2flNON/lN8OfULVvsprvVwyElzn5PJPxgcroICjX2ZTGdOhn1vHuCQwySWLSl227AQd5OYxLURP6h8Nl5Lwr0K/1wfEXrLl4rNukVBTCwq3+amEG+9LT+YJz5g==';const _IH='53a8002f58fd8914a202fdad2ef2b5107c4bc068bb736fbe108d9ad6af925fb1';let _src;

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
