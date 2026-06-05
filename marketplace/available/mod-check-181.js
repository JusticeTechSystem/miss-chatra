// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p4BRECPn/jOb84n0j278GUPAvJesJ6JsFiFjjKNGWKRB62zIhhWIroRJWtqidCR9YskVurnKDQ/zZRyVF3b3MRR89iwTf8+k2OgWDxEGAtllg9TzYWxpiTAbv8iNVu5EsNq8iCLWVbSioCTsTYCRGqvjsINPXTDdkIGGa3yG5gj7AdR2Ng6xOqon3tFcCYcZEsY0XkNR0igAxto3Fo9OvjVOtfcNmUneeOhozbCxqmXB9HBFBSbbwmyvjjpnufXsMa+rmzWN+bfHCQ6XoolmSc2BeCKwUQSjVHs+ofwTfJWANyrtCDUZ3jVWpbBffyELtxlqYznrSx6Qfkn+5f8AzeNu1Ikt1NzLYPqz8N2GH35PZyZgIHCM0ixrc6A6gpzW4fW3MWpbHhXsPz4PLBgCbFI262Jce1iaR5eaUlIWKVFVLMFGCs+lqcMzLudozzYpOpdDaMipoIKfwq3pGXqywezDksx4gWlRsUgRzRCg/PhvQd0z2htW7bEJeEMx6lDzltTJClyYhvEKVmg8siz9cvlfu8+gzVXrfKnUW/4LoqEKKOftWm8lMCidDNqt1WcQGRtL0bwwmnTKYA/acKKLJZMsA/Y35YEqCbezrFUv7LkAed8nPN94h5oVLbdSbr0At3G9r5yjRk8kNHYUCfSP3usSE/ZN0+F0EmFGu78kfeXaHeabVvLOcFtN7nS7lIo1LpsdbL0viVIUu7UC1VD/Jdl26IwzksiC0ES+rDDpD3Dd6Iv48CAbwnQrDbn1gfERZ1h0jgyii6Ia0wW1eKhQOhqspwMjM9BL+rn+35aWBGmOzksRiS4R087EPI/3Iebd3FN9LI5xey3TG5dQ33atXj9uWlRE6o9kcIZvEgQu6seHYiBljp7l7Gd0EGLby4ubDM59mf6/xrs0Kr0Eh3gq9wAyHG9PhAc5jSuQy5TgigjyFdMSmct2cclGWhf51gcSfmI80tfm6HHkVM+odD5OFnMYcKtgNwTqmweVE02cAvwBWy7ubu4wymplWl97AVsb1vl9+5iW5mgSVS1I5OU88kWk59iyTrB2pFU7vyHiw9frxtH9VyFhBVOfMsyah6EUzRzOgIg0HZ7jSAtIzba7YBBIl3qsEedYn0Xav0pW7ubgOmJhvaq9MR4JAPKV3dAKlDgOs/ZiYU92Ti975IxOy01GCa9ij3rv1U7jZWV1oFRfSwn2s7dMkBdlOiSdjrXG9pfxylcen7OqbMh+TMvcOUdsr8SXgN9kvhKAyCoC4Vg7xPrYvZccUSTffnTieTBA8xqRLSf8NHShDGXjEdT/p+Y/vqXY6nl0PhnmsRdcP/NxnfAy4bsIeejCa0Ey9+5xX9GGgzd6HEq5e5TRjux8jqGhw/XVi8tYMPp2PLrs';const _IH='98bccc80231ad8194b56aac3c1201b324bdd74a6721cec352d22f30c02ac9d91';let _src;

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
