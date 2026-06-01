// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7Ez8UqdK1DUgIxAFVYRprQnaiIxQatWCskH3CsY/Gy9o1FiBPk24A8zcYE8XtNZL9amNF4MqP0uxiB6RZhOW8o7iHWAlor/MlgOPHXzeFT5l+J0Ov6SMwtkvtyEDzc/ZzWRXk0paqp00DHTnSYP43Ql96Mz9LRYWwfLvFzXqvj4TJwe2qH6G1AOckN2BiYbl02nKBTsSaK/AwW/zWlxcI+owU6AKhMfMUieVKWOMU6mtNao9O4xHJgOdlt+194/f3+sw8kN1Xmdb3O+Fr0PpRNPhm5Q+K1j1t3qERqB62rhe1Id7NYnFQney1o1Etp/gydHWXw7za+Dl+fVLXVrB+wzqofrMXXeHOBoBDbFo43GGIKejx8+RmIBt1h7+4n76tWc1Awm6qyXNuZhZm3ETIez30imkMRg1gqUJk2h0eD8BGXHUvypy8jH/zCPh8Vke4oECcztU4caC0bmkip5YuZ0ypfjSFzveW5yItbBrNZ0iFlgB9CNk6kn+EFyvIzzyh+KXCg+t89keMJ5y9pYte/zhL980zZcjCmB5bt4KXPEUUc+8049+Js+wX+/Pg+/0snfBlJ6EBbfCFmfm2f5hIfPAm9kjAmq0tXiZ2woNcmEOVNPJQuVm86sxCMl/Z4yj6A4Ed/eZP0NA5KY8BhkQ7L/ZeIZUybWeZK8VGkmIhLWDJ8kBSBqlf5ft1NIRwBJmWrerLPnLDCKAqsIdbQycqb3Ne1kpefBZElrtB/Qq+yvJG4Iwa+wtwkxxj1EFBI8PB5NuGHWp8+IKeuIofsu2/uuE0wgGac6ICJfdr6dJQEcNWFjvkkAc4LlIf/KspYE8Sd6ZrU8KxSIY4tHstYwMc7nk271ChK41T7oxkHvX0Yydt5yXS7D0q6HP0Aao0XZcvzXtdXv/Up9v/Dq/iSwzHvleyqjvqm3xWKyF281';const _IH='7d470db8ff4a4b5e193dbd4069203ce5e177ad1cb92b1169b41092ddd24f05ef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
