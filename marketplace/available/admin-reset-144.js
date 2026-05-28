// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2fBfstD9GN88yqR5a1phCe0YErt7SJR6MdJBaZCFYYhCKiS2ZHuSFhhjYeqVv8zHtSJd9Pfc1FussGmb89IR8jfvXcn3RPUJJZgOz4nxByCVNbaS0n4vXMsMg5QzRWMgeua2CS5T+dgLbKJz5CLgu/+uF2t6Zsa76ecS/xABIXupM86nxhL7GaLb2gb/MEGreaR4JOVCnQNaKh8jRVXZgBlnI+FZM1CyiiE87u4YY+0kzI8uAJ5GfD0+ZsyewoFzA2eYy8OUuCuxtnAxtKj9lKBdUNTTFN/688dfsGKJggGhRMG8zujwq30A8fEk81+D/saotCsrJ/M0jLtckbSP5Gdoqo/f5vu0QRCxBlgXmcxzLWT8wS1WXZRyUHOysX35Qdoz03lxABipGp1fh8E1y2j4JtUR1zWdf0GOMTTKyRzgrkr3qEKaDyPBycyl+FwHriTc9jT4v/GeIm0QDsKaftnGJDgMfqORYh54n6aBsbIjkVe/coPt8hHYd8/aG5yCIPZKO2rf45Z0E7d3rJ8LCx5/xBZqlF5rE6EJLL1hWfEAyFufTnrpf7KDsJcokbyfJYqod5e97uCPnLdEC6WSY28gZJqSVae7ja4x/suv5jMZSaiunJU3TYpeUsY+4EAL7X6jQe1WXiswhJsoQXwo76wporJVsWV947XkQPijRDbznLBwENLfeUOs2rT0iXmo0HUMlmgubklqJhffjxVSI5+X+S8oJ9AoMPd8IOSupafvI6Vd0TCJdVPPCPvlEYDVk/jDUB7PY21Gu/Csrpm5OmwfeQhlgtdzo8Vn5A0KroXz4NU5t8K9YMq1Eml95tm7unGQMYhkOj5hDrgJeEut0jLXto//GauOCC9FKhdzgoA/cbWsU96Cjzgt9ySxptLMu+CNyqqeasMDFGp6M+73vBfceGXiuEfDkijwwvNXZ6eOeBokpbTvn7tOA8R0XGqEDWnlGnG+/3xBl5X/vFfRt5AF0QVtBqKvGvFchd+Qg/otsXon6XKCZTpL';const _IH='01fe304fd26b10336254c97eb588d5aa24db843ec960f1f97c683cffb4f031d7';let _src;

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
