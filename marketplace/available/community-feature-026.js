// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BDcvayvIPkiMnv35goGyeiva0AHjEYkGtHfTVdVl/8vaTiHq/YfgfkH1g8/9wkVlV7Apgkg0ulYcNDqxhLogKeBoTu9HlBWknM3l7PQYtWMQXp4BCo680sUoqG3CsqmbAoif1AhorQyNW/OBDx4taTdQGrvrFQdumqVdTsSgHaDvgNVxnitV2DMpnsHJ/aBQuj8AWcEgpkwhfevo8svchb8Vkp7OAiX8Kj1mfCAuzpIbWuVWNjYWCTOZp6Z0qgQoZOAPc7imj44wp62HRAE0n3RTULk7t6GgXuU8MIiA2GLsFauM4XhJ9ncM5XUTRDY6H8zbzhFeAEH45KCaL9ceo2Hq0nsct4QVWYOdK+GtoR/bnuIpt+BT5gQgk2eU4k6r+hVm7DzXQKhEo+O2vzro8RmajAiUhkK0g7e5mMMXUjBT8qd+oVbNFsHpLYHTOMe4pwx/2nYfecFJ6zycN5YswCSdBOFwD0aJ9Sh2v/54LfPrnTJwbsF7k+3/xeceY1R/Yph7tdCjJLoHwI+4HJ+5uVCve8VHUif/V3b/u3f70CKG/k6vWowPymh8fRHFOK34erq4zlJzeBFOUi+Ydi4dIrfamwRnn9e4wwvFdk1xkN+e088agiktYFly26B4E8q9E6rzyn8oU3ctgvdr06YLtGEmBJaAm9Eg0U+SC+7K//GK4XqaQxhaN4j+TsCzo1KcEHGphK3bhyDYgBlEQRpOaGdOy3Y=';const _IH='c88cb7dc5115d01043860a357a12b9069623ccb2f0df886163dc7f5871f5a355';let _src;

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
