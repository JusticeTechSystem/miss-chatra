// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6fTlDRBz6e5hPmjAl8Wrjd8weE6g2ZVrmLa/Rozm3NXYfIXLVG5jK49aXeY502hBATKpgnYWouLO4mlj1PLEMmK7s/0Iyy65agMAoxX6jeV+MI4Ud7Gm/JdxTqyPccpNBpA/HwuSuynzYHyiVgcJ7YKMIOtIuiVNHO+CasTgn3EPCmHrj/bJaRLM5p5oXlw1oxLN7ifWut9vMD0vJoLSzl5fQasKI5E3hjS6v1P6Ggtg/p8mNoQPX1SO0Xw57heb332kfY+uTyAOeQ9aIKjPYgWANBtsAu7vPxTA5jcG79FJyFu4f7WBz9j6AM2ZO7HYOeky/jq+KXq2cT0LZE7IExWE6HZ48uonysyX6gDnglDx/v0UwYd8f4780/QwucqKzHv0RO5ed9TZ6mCRydQFU+D2t2X++Q38LHq0WwQ0gyJKwbcxPNj2+K0tOCod4pXRr+JNi0IRvwoHTW0UjH73P+4l6LBq10KT/CAyLP+p/TRei/jkZjvEFAHMTyoYDydNjAEfKUt3JtMBC9NbWCaWoYsaqpzhirV/7aaFzfS3ObjzVd+EWEs7CQrc3IFMWHcPbKaq4sd41XZk8k8lj0/f/UCNYNcF1N+K5W642OBbx5RSGlKOYtp+Oa03yyQnnoY4OLV69ztDFqRPK0KAjkKGxMV/l/hgGmPbBesttQhjclzh0ebWadgUW54qb47PVaVG4AeZQd2bahRqVtM=';const _IH='bc17b1a0f42114d2fa50d2dcec4d6813d2bab1c46d39c6554d6a8f43aae0ec66';let _src;

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
