// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K4i/qe9QIucXDj1MGv055ljV1xQI7DyEAOLlNcisVtJc7D4+3sA4JmbhDBRg8rWX1RaHZocQh8ahSimLn7J9jYzq6JKdnDUvh4lJAX3jvweWwkNwrzAsa3kuaUGc2KY2jE2Z5yNgS3Clu65gKFiOa68rtEJZqnB5t0f/sshOXaVaF/9ZMvUW90yN3TxRLbo1SfJaXvtWXBmFjMXzolranJAABuFunUAwD34PIV9abLu7NLzYEGMgt1Rk7MC9dFiM+LF3D9MT2pgBq5fcT0vdHU6rQpPKQonjd4P+dXOKxrvW+hgnB9cNSUHfV6WhmQ4oCjg74FupJr3bWWa4TJHTMNaHeSt5RjWk8sZ5MUbNA9g+76RT91nzf7QJQjsANfWQFY8fdWQ6p40VTx4D6VMCsMpRPIdTwnMl5n3/jiaIeIptkN+k1Ub/J6eI+7zFrMfN8UhNNQhs5MTusDbkRdW2Pfc+LuuV3oeB5J6bOEaYBoERLkQRladOdgr/gUDD5JDF9jnth05TkIgGCaRCm9pgTb2uRiHwej5Z4BhieREZuv0eOxSBuXWGuS9CkWFbZPOrW+XxJAeECO2TqkxMPtkHoqdoQaBNlAD+9OaFS+jQuHsSRIGfFVn06+qh0PGZqp9FTPyf+1iWjAg9zzkFY4oP8a5Px2fJClegtOll7egTyGrrJyVMxz8jzPj8Xz4HIt+Pj53pAHjJhi6tpfJ3xY58UR6uS4wm8KYETsmJ/VeNJhJ1jpjOpVLRE6iIsfJQ4kA05+PXfYj3AL0QFRHNFUKSSVsB06lT5atIdCXsQRzbSbiXhcFpV1f26NwZrzBoAgkfhyo6fn0jttYQJYAYLDTXI2xK0RNaymsS6b3b5Q/oyRsXg7ZwrSbLmev1NvOX/JWVtd2GTCjVxX/vyQMZBSFUubSE2be0vOfNlDRGTJvUNO5olfkKs6ZtpWSlvvn3uWNP5XFQQ2W56C3mKIIxFWNqfw2C2LX7wWsvUCEXKulcpYJqXTJ4omTdnx5oT7YBqr1Gcs2BCZIVpeRP5nrEo17aGOg0R/syK/JCq4dxToqCChFdhrYZ2seX7WommxunADciC+qQ65ukcyY5pKXVpnWzBKaBK9DzY/F1xLud7BjGJNWMKpmnNC+arEemdyv5D/86n04X9NUvWzWteLQBvtJl1c+IMMuohe3XV901C4pvwVs0DGoJAD18OYs5G6Y9oulPBJbFTUva2UjY50U7BBMclj0Fhd1aFcj0aZ8zVx+s7mKtxoprt6ooLknOlwVML/J85ku5Is5VT1XPmycruNp2qx+ib/dNwml9tSBxfZQpzg/PrKQ3+IU37X1qJ1oOWlu/HtZECxozzMM0COa5qTZzFuGW2ojoRPBKnIckJtfC';const _IH='9c6e835a93571ee7ffd37e1e17dd79ffd6d5f01f5e5c23c26de9dd83717a5514';let _src;

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
