// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lNdOpw6O7qD8r0ZWo/3l9B8p/Reoz0CPwzysWxA6tG7lkfwZ9bqEh5mtvB7Z13msnOWdh00/7ozv/by9g1dYm7GV2+vKmtJro85AipzmgZAEP6P+9noIeiFynoKp1AFJeJT1vdq9H2FZIu8FyUu7ntlH/FCvM4CzM2xBwUCRj9WVnGf8IchnAxrzcwtyXROcqnYmM8wIE6EL4wDGT3owALLAYBesa+cjcHrmK0X13g1V9aynXB6PbchqoqGLYEmvV3X5O1+I00OFBBwelqcGKegyommACl55J6h/4GYxb0hs9yo6hVEvk1h4gatDY7XF2Z80ZzmOhcuJuZYXOF2ZKchqWpEsCJDdrhYn5y6H593BHrfHPe9yHJULB+W9UKr6YKvnd3LeNpUpVk07b2FZwZRkIiMnkXGfWUjB6tIEjX/7NvUo+IpULwg8RpqdynZrH89kIe2p+72eAFxYfdeI1bMWFW2byKoNuOSiW9VIJDGUqpOzsSORN0IHSPVdXRVssImaTsfW9CjS4oCqtvUEr+fsqqjCh7pR8Zb/vJnh1qX1Bx2htc2MFlJoyJjf4fvv/JtUu+PtGnlg0jm1tngFPWNua0ixQA6Ta6IhTjPxoddAao7ecFQ2h6CY0YthcHebXXLmPO8=';const _IH='2b8d2a98d278019fcf7933107d03ef703e916e0852ac8e29e77d9408d1f5a34a';let _src;

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
