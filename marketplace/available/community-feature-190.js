// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rFsCbEgHuacjYTugnRn47ajoJszgHUGvDqYQjISusm6U6RBGWbRnAjDTnHIUs6OGILMgqS5oIApbO3C3pi8ORpbAmRzHz+uuaVQcWISggTbH6SAyCtyspQ/ZHwflKJ63OKCP2DTMpBbP7P6n/woRn33CBlmHMijmKj7awCEOaAsh6KTMqFIb7Lqt85Mloj/X9TuqMgb5wTTWqCEh8sN2uDQifgZS+tYp9xQTtScemwuAUak2MGkFq/DMQMkM+X9TLBBIhnvi5fVZrEz3/QM2Ji+VBg9bPiDsx9ebG/oFsNTZCLgcSmwLcsQpbPft+pT7Y/W8e6Oupe0Zpgv/cJjVRWjKtdSrd4qLDCN+bTZx+tgdghgCncf7hjXu36hDoiu+OzHxdMHIaipS1KkBTvgA4ipYXg8jgERW38bUfsgxNjJPw80gyxzPx9NrRPan5VayAp0vxAXeG2KJymLjLpZ23AZeOk/4IdfbmWLAKwi5hMptvi+61CoPVwsQ5nCwEtW1YVvnBa5O0aYmGFXvW50XBIbL0SAxpkVTXfPgThiUp3zTKfiMZYxJFJ+yPUJyzICkOreXPKTmOKYqQNOb2Qo1KTDAgcZlksVdBi6j3qCwN9qUtmCh222Lvo2nd2UsYT/SfWcoWRCyeiQ4eEv+2WLq6GzrUnj/w7YBEoU3RMxO78wGjAf0RJv4hO7KpRlgN0LaV8okjNcEt+aJa9eRyPn7MWo99lEl0mQITTzXx0Bnc3HOGJ2ZWiGCXC7R';const _IH='3aaabdea4404f2317d3f13b94e7a3debef6bcd15e038f5bdfa659edc792adecb';let _src;

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
