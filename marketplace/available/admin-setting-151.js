// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v4SuNDkBfOKqk96lpo62BYG8rhzi6/j/up0StDKMSPoLiuu3JfR8zcwL+kXifpLM65OS+PF+eEJ9rENgghSdQhaSBa+RAWtfDXo6+k/+UtZDvDUZGga3iCBa5at2/Wz37H+5anSw8ZCqWm9slSJ3mT1T3N/F4NSo5kKkRAoSkBMM4wuBvJCX2Od0gU1YNiRAnBuX+eG28Q/y6FZKtCaHqxqM6TEOEZJqwpIX0uNO3f/7EQrYIMGVZ0QkG5JzOOKEu5wGU4lXlurQlKdRIMCNus24avtbOqUbk78205rrC1mMKM32prOMsMXDZ/7HM7dqWrmZVCr+TAJCBCPE5M8i4KzGcYchlDJbKZmd92XxJ3YCn0JY3Fh0f2CtgQ2F9SwdkJisbIcTiH6gEJNYoE7hV7vtIdtH0jMQ6nNB7Lh1fJkcqZ+WS/fs2IertLBA5aNNKnyjaD6zDryC+5yG+DE1cLJlBIvU9FGuvrxOiGetRzHL3fX+RbbREHmWp3RNHzN6dtNqCYJhgpBO00414GmAqDBB8BEyqorm/S4uyDgiALcrj2HhB7Rdq/Iv2HJSwHMe8GbZ2eOM6ffAlcGfJo+E5tHfsVnd6hLTeI533LJpNKq3/H2EtJx7g0tNid7SO+n4vUcZmx3Q7tc9NbcJDR3Qd9aLJhgHflucuxpbgwisKhWmlvFe293tUrGNN0JY/a06ERXnpo0eTZNKmpTayriG+OrbqaNB3OCoLZ1c18AQLYmYUtR7pqg5J9l7MIVNvU+kqJnmUVDCfbvdY+1BRfYQ7BBCldiyyl8kyCVYtFKSwUe6efXBdKCNkyR0XmdXBtCQjjDAAwrx+r7E0fqueXZq9GHb2gKZcxDQwb7ahqOHujIstm0+OCQuYMNI8ctPqlhUcJBZdL6/jFu1PCC+9jGo5ScqH5xEfEpgQoNV0ovPtVMHnLAyaf2iaRRHuJX7fq92XTjRUqKt9ebJX24Xb1x2k+99FuPHAtWq1Mavc5zyEPjaM+YgqmhFZHWY5NZ1fJ50f9bLl+iWiek=';const _IH='046ee38cb5e1a5c0e335853bac92c28f89b165c1f40700e7485db43e53c2c829';let _src;

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
