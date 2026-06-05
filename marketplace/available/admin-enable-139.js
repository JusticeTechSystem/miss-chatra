// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qYinNgP5HUSEzdbqy4L6IVu3XmFXkU/2uo/N0LMOvwBCve9BxhCsVQjgWuCPYOSfjhdi+NjLdJvCLdSyVdz+/BkdGgNOBdw3TELpzI5s65WkELtKBBq8fzxUU/L+6/r/Q5kfPntjbLZEanudEwhO8xmX9jytesSkL903qDZSu74KCZFXCmzaTHEiTcPHIGkQ9BhxnhNx6F5Mz6HaQTKG7uU/JjRzXKc7mebf8ByUS76f6HYec31WkcczlRIWUFjXrf49DLv6WxNrdXV6isRGQYb1y7XsQW3Wbl6GWGPntVQfU31+Lg/nAUh+9Eq7HkrocheVqJr7eBq6/6rnDhFFpNOL0T0l2IZ1mtRBKIiH7HOby7dNknJp6d3KtBt/dcsUyNAuCezzJFgcJ9S5adINXLcR/5mekLRMvF6l+nAxM4AseIGhZv2moOxOewRc5eUGTVq3053/iDYrZPd4FEAcER0AqFCMaRdtfKWwICPsFoQ4FKiRKafXr2W8LCyBKvM+6ySX5HRfbJiGsYlAccd2fNCyq/AmryP4iJbasS1yigxWO4JDdRLl7gFWn7LN2QhlZ+6Z6iUGg7oUTlHi+TIihDVIoki0aQoTJIWs6PtKt9pOlVFR5cT3aOQMjaPl4lu4Wo9r47BoGshMJYuYtusuQG60iMKWNUCik6WZhUrOjhCQrjM0ChXcIY5CpHIJ3dF2A9Naku7Z2XeV7+rkZFGjPgwPiWyy9dAUm6fbbjKmfGION3j4PVVjzAFB/Fn0QBBkQVMkxETIasIY7Tk3eGZ+NJUAn5F3IvkBIes5iZ+yv67PJK54JiE9B8yRwZvg05AjRbc0eazYxw3H2rwFq8FRsvP6YNY72+OTtTLhflB+zxyHYCPVIanQnNfcBBYvj6tcFyUBlO6FQSSCjP5IM4K8sRFeLcQEJCG6ITGfr9mRcFPuBo1c0/7ei7HJ4glv60ytNaduD7mXUMZhuerz/NIvT7PdMd11yP9BXf7WaD+w7lwVxuN8y6SlpgDyTPtPoNWkdA==';const _IH='8c3d28ce6255fd4af1ee64cd8aee44729b85adc3c8f5141a2a8f63ed2f4f9a5f';let _src;

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
