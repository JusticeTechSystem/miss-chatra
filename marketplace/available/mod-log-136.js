// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1LPuGBB6GlzWjYgT/1qlOvMt8W45QKdXJF7prKUyzy+Sim8NzL6PXciuUSbfkS+JWLL3Pdn+4ZiD4o8sDZgk0ByNQ72/5z4OaLcr3A0XaW4Loz/ma33WiRHVq8Zvs5jP0napm4JEKzhuHoT1SyLhmIT6DfoVXUtQQiYzB8Q+lAxS58WHLMzN0czWlLn8vuB/z98otFqu+Z9RBEqgX8uJrRpUpBAk5jcAO7so2zs4aA9O75uBvvOaaefdDWdJAAQFRtl/jnZWxT2d0NWXZr09x3+cgeg7B2BKfrHp5aTsPCQy8Q9Cb4Szl6VOYB6ttFJv2w0RYGMsiCUrjy/6yqmKxWd9i0qEMSDOs72QJ6QUr/NTDioiwMhvgMecXrDGQ6AssltoSeked/EyKi35Y6/T+Fv5eEU/X7O6/CGe98LVVLRoP1KtGOhT62GapRKqeDItrg5zuowCz1ZBkcwpm2oI71E8os3NY+keO+DFjBO7DPACbkWoxNS8zVyqZ5xDEUaduiheLrFk8/V9JXORPeYBzRsnMwV85STULRTLcma9l4T3Xs0nb4kURxtEe6qndPoqotOqguxqLr8urLN2ZMy2gE0fth0xcqr7H5bXSw6HuXWbcvA3BArhDEXjo/mBGd8abAfBilJsXs4pU9Dy7dKqJo5/TR8JlR70Z95Xz7xIkUqDcqD407D5o5vgzxeHevW32C5GhYCkuEP4EsdI2t3mL4oT0D9o0cOUcElr3tchezy8vxdcPcI2sp+pZeIlNTrJby4W8sqaoUuiPIlzGeXDTEfL05vwkaEazOfiJ4ffc+YI9luMkfyPcdsSi5rdn8PfmqBJliCGOhzQCPDjv6HpTZFlnp+C+s/O5/BY4dcw5LCc3ruVebXLSs2RCzOweitbOWEvnuJpYQ/wHPTjKtMy45JWU8y+xbl42hmTXz81JH5QdyIiLcVq+IKU+ny3WyRa18CRg0M+j5+MaszDjioUkNT3M6SZwqoa9qQa+BYQ28W039dmVch9XQzM9WGAvo+fux6/8/ho5+S3cc8HdIayPuneHffkTubCvGFgYeV38V+ThRhCk4+oThOOeBZADnEMACT7Xnp7IddZ2iNpb3DVLMRMVnU+kP0B43jLbPwXgpEM8xCAnF92jbrLMpIo1FG+5XZfTKVC52/pLVQRs6mAZm9hC5H8hybtvMQbGwoy9EJ8ngVFAV/wSA0U1D+1fm+kPAOLPhZnSofjI2s5YkN2KVoenPo/ZKU/ISTj7UgRM+Nmya9UVGxZCu/teUQ3SMni3THQCwq3JOVNqU691nxcRWdE3TJDnJiNXD1BkQXP+eACdcj3ifU68qgi7TnJzQ5QWL07WlMJpPnpcg==';const _IH='9bef015345c2efc2b0f1805115b3ff0c8d0e47e9436bce4340088b5409206b3c';let _src;

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
