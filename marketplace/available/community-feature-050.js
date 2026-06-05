// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1W/ryDyYKfxYib6DzGfvpUwIrJWhg5EG/e7J80rEmpNIXtyuq++XSRh3U0ajIcbdMujIHuo37udEFUVmtnww86RZFFwgyZ9IkRa8kixcEmDXVY5MdGcarTkwT8FAv2CQiYld6B/IXOXOKIGk3MMTiz0EpGXVI0MqRwzdy7NV5pm7GCzCBcUwmAeL7n+HTMxJ7PguC8jwojmA2uiGH/lvA1t00UgVv/HEiMRrB3c1R2Tr32lNh7OtugwpL+gfpuwex6wbivrLywJ4vF3dERKS9EaGDm1Ga/9Ye+WN+h3rGrsvAGimB7k9aWZTqtXFQGDoWW/SBMBgUkcM6vJuCifTO+maeESQtI93Q+5re6afX8t0C4FQYY6sovenVaukb46EPCT9uXfc4WEg1Z3HAiof+JukVS7TGQ9GbAbFDm6MsjBMzNm/L2DvZYVkgudCM8GK3aZpeE4tMTUORAy3MZXZeQzpPB+9NkpQpIZPqA6nCf6ahtDaa+55W2HNq42drUPJkrk/T6ArEhdvp7VEm0MPobc/iva+7H1zlX5POnyx6zXZqSmDf9C3ubreNBMxmUNmrDAZWbKEOe4hmUbG5WnDRDRe09yJr87tf7W2tMbCK8e/RyZKsKnckx8JKfOVQJQ1ckcIUuHxVtVi31NqthkjdW2JruFZ1Rxl1cXDmuPNq3SQclGtLoZL6mzy/SqDgjmSRB1xO5+yAEE2VrR11tAY2+DC2nTswlsgznSuy8PJOyPSks+v7TE=';const _IH='13afe506eae8e35d2e16235424c49206bc26945be6bbdd28252553651b586212';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
