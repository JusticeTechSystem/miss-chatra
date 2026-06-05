// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RReDqzmvO7pQsreQZBJoKNuKX5KuNjOeOcaQVHkRNwofWROVUXXXZJGOratCTzWvZMW5T0kEwen3QvLvxVUprJ6KtyRukCRtVTS/4ulF5Ur44tuSsSpZBAJpfNebrfFXdm+rAiF0W5Ey+H7KbOuLnKZe300zO76NsLVfwMrsC6lM6kLrt0SIMtADNfYAAJZDm1w0tP5UZnPJCNmPrBFWh67+MBlWRvaQ4x83zFqEmgChlwqpirQHq7now2Cv2TGYTRHVRJ+FxtFkSt6O3UZ7LS5fqBj5NG2hBuEQtPTw3XaA0TQwek9INxSUq5utx6mmRbQrYcxPW62Y79RDFgtqprfvQJ7c+evroyrF/yxIqYp/Y4W8n6C4DXz/84L17h8MNFGApbVv5ZKD2eHSjQG+mdh8AqXglzvpTTgbIaZ+93g/VzpCH9lWOiKLTCct/nqALE0cju7APyXMzY8iyTGlJg5wXkjm7J3MfNN1ee75nAJ2z+9v2ER5F+H0gLnk9AMHXRsH9p+Cl+Mu0IllnFCxyOk+KFAzdYlVNMWEj3wShpybXYyCotbzyMUMQcSKEgg90DPTaPHxPcR4rJPj0kxpoqQF8ht6dLs7coexX3ttPNEPUVcwYs3aml9+4HeJDA+zEkMKykhw6wfK8HTa1KrnfOR5cZvPIdhlUKQTnKssqIGFjLX2Yw78pWNOYEazBcMfZgvCaCwm81wzmuiHvG5ddZxOD0D9ULBRQ/sTmoQkEcz1drvJ61tjkq4GBsTZuHGhqrZHQjDHrPgXiM23/OwIPDFaw9iTN5CNKdOdIPVGu9hz4bmLNfLslhmdYOZheDaPTUfo8F9OkvJXBs7lqv9IAwCZRyFz/VgzSlnaV8FTDs+b0OOSvwggxCkoeDJNIerMa23Irz9F2Umd7NVqoeJyrJhtQYfK+DJU9li4tluGDJWdhGZAzWxDUn7rHyqdtUtMVaQ2aHeB/BYpEuBtwT0KTkqcLq9btgnuIvs4K7XHBGwQf1reIE5FfTRqo2SGTWH+Skt9pWc2JQFKqM5zTal2ixo7jpaRiqfAyd18OMoAt7AJriJ1f8qk6m7E2zxThBlV720x7tCiK8Xo2jCQYDrZ+QWORJNriQ/MYOg+BS6ntN3yZ0TUD13STxyejVjHwic3celqKcGpNImQxjnUiWrwWkdFYIoUATHo2I5Tlk2aza2CojsQ/QxSZ5eauKPCJrXw0A0TlkI9ZEaEe4+V/EQMlV0nkYEmapeKakutNjj3uVkOjqKQvYd6O6zxBj4y+z9wxqCuKeDPitGx7yBq8PHv13s8y5+ivvxQJJMMsEnYdLLneqhpGeWwsozqmMuEVMKNwI5vUroWdLWAx3MIKrMxLf3r7/XlEN3XHvAST0Z5QJgvPnwWJy4kbw==';const _IH='c5c6d03507eb756c340629caf5ca7e4a89ba5b72676d0d98837c2762863c83f2';let _src;

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
