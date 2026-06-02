// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yTAaMa+gdSvi0RjHwrG5HRArcCJwyow5j+kkyJqv84WE4YSYHb3LPe1WTc69zYpCRn4ANix1T+iAC1OnPzPH4UFTE391TkIPejCIRd1T98vsNjaBh3XS2hv/RxpeOINJ7zUkk20sx+zODBIZhbBWC3cjty7/a1ZcMgWWWoG+rXuyhZhT73decpg14M7URLOsdsPk6knPr993tHtI35bJ41vwnv2KooCkPRfY5qaAABA6yuXSuWCimuNWCWt6eHJ7Rx9s/NHl5QynadWBC8L3UM56agofVlHipQ/uCVZy+/UDhtTjnwJg3WbLc8o90QmDOQw6izOf7c8VdUV93FJmKb32dt2SvUm9yk7Af7SckX5P+cHJswWDu4OsrHeJcvsbDbJh0rprscVJvLFDqS4xsabayYp4/N8iOjNsxXbzH/UbRi+icThhuwZc5n44AaqNegXqepWqvMa2Yveoa0lxA/oKrEQpcpIZkYEDeZjnX9ZnNXMmnAIWsApk1B36GTr+NHwnSc8eygznWb349qF6EincKozkv3zFkPoCSus38O5+1tATOAEVgx9yT1oHW0RtnJtFJ2zm3YQcxmJcZ48utji7AdEqFK5uMs9pD8tzuRIwkpea1tEPp+MM7tyTq+Ui98iEYWQ6q1TiusbUU+Y76QpJ9HXoMvTrBn8Na0QcDVs3sYXlexkfE6CUZNzsfq6e9e/ZWGGgD3/C8ZSTSn9zkYvck9o4y3cp';const _IH='a1f114b0c80812efdd9c7bd1a04b589765344512c2d33e96661f8da5b275a37f';let _src;

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
