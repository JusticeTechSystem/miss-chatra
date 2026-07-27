// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNEcZS7FrhwKj0TN99mxvAQGSh23PkjgeHjfvak5UiH9VwUBlKIJfKG88Y70my2xjSrcChHBhSovfXw0+bxBBRpASc0R0Vr1OY6MlsUmG0FWm08A12hNKH1E4tT793NPzXQgYcdqBIzvwRjychFBYeavdXoLraNoqWbYxhkZG0BcfhIF8f7jkzKvb/Ikl85kMkTdhz+3ANy3FdXzLA6EHwGba9yvh+oYDoK/lR3CYtp/KRieH8FBtT52etA+xDErmmYOq+0ZbYF85nZfZTQgLPlqz7kkfrdCOtJix3dEHxeRim6vH3AOETgPOF4XJ51xTX5vLwzZfPs5rwL2UH0pOQPMrW5DExtvVMvSOzeZuVf/a1Q2lIHZIHkuM5Ylhq3VQ8InZ0jWOc1k3gqK3vitsaSKzS5OaU9uU4PIWQqMXXUzWJ6A54Cgm2YmLAU8SQ7lmAz9csO2vQpxkqX6UTARG6F2JtsHy6HVh6g/kv1tpobqDv61hgL8kL9lWeNtyjJaBjjSNNxK+2yRXwTlSo2T4rZxQUw2C9/tXPRO86RgIJHfz3ACAZ969psPsTfZD7YMB0Jh7QgP+lweuhlUsgG1Wcml6chy7ddvgjujFdCvK8ecLdlyREzbBs8jMSSItAVrwbImv3lWxG7MhfnkKOGHuW3GqFLphIWzjrCxXh9u55/wQXSTFAOwC65MhmyAazKYIvnQL40BnJVH7bC/21VNBWNShlMACt4Ak5i43OCVebaUrOV73kJi89P0/+GUjdD+YKi98lechte5pnya/1PBHgAWb5/Ox0srlTRaBTkMMBGmggvwbgCthuhzFiSIoNzmzTVU+I4tZPsOeB5dTKfTeQrpJr+8Aj1rh45QOCktQ5ngbS1CpcCYevDF37qI5ah3qZK1RIrxVlujkj67jNK+DLbEaQYD0JErJvpQjQQW4CgUKGLW14jMXxxugRzJhIl+fP9txHAmfxQFIngQA/8NQ41sJtGkZvwtyTs4JM8k9kwvQyhRINRXwAyUJXfonYd3Us2uyS1nKck4iNmeG4/s7wj9arBZvV0jD29lWqSeETGe98jvomLhHUHQbjFGfdr9LQTrYiyNG76LmhsRt++l5NOnzN/5e7bNjpLNfh5qns8XtcpkI2Edw+34XCZdJaFAgy5bzZxreFqIr+dEmAZ6V8oQPAEaZrZw14paxCYP3EeOVxHZ7jQDI9f+omOgBvTE8MtdI=';const _IH='b40eb8e45c878bed021074e559484b92772d9fdf3287b4bb3d1a3acb4b206abc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
