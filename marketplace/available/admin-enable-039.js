// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+I9ISmtT6FLOyTHX085VIWRszhBfYy/uZyscBCspkg/0ewfB8a27a1CHr7dPRlAVA1dUhPbJbR6Kpg7yMSclYPmsrBj2sHS7uQdJTrlT4kZGoXRX6mTOdDrcJUfJ+ygkYSgN5VNeoeyR24Y+UTnMnuE9iyrTxJ+CcpjsscN8+Onnb+S5DzBpW4imFL9f7Z/FVLDlVxpwUJw/JEJoE6CCFkW4EufGeTJ3WfJHTrZMzFpOvJWvlWOfRsCF8m0/lspKQRcysEhVIf6nMcWXetF76FLjJmpm+dE8+VLpI3XMRE1yBRVmanaVslTAM40s9YwNGPT5zGSdYgQ6gw8gxcmoJgr0g6P/s1N/CVVmg+JjweiTtn8fhdLeUU8Yvi0iMneURaA684wg+DeCfxJ9Lp3RWd9IMLUeAOIsR5RZBm/NUucvdC2+ePI7CK/2yE5V8F4jfX5k3qNMca+aYejxgYu7kwOKtKBG0Ozga6c+/xhrrX/+LN0juB1hO6W35+a+Hj5t6rSZ2ZlMAkiBz7whQWqnFSplbKMYNU2rzXpVgzrx+fZ0hp1W56oq8+/uDo1wmoFhNnhhuqrJ3PV+7dF/Q5y5jzKP7bQZcNnnwkEbnAbWUikOliZxLtsMVSjxRVMjHYV2eQSla09J3qY5mKxM35WwfzDam4zTW/PJQO13yU0umP/it5kDGpoPtdc81oRaAkdlg8dW8qDcgSsef+KkWBYagrrUdzfnsUq6wKpwA/BXce29duNl76OAKQcbbmf+dHHQHzUT6Zb99ziC1VQ5WuNig+xEJewKvmuH+ECODDaI3nyAUrBrYNO5/2dfQ8A+Fr9L9e9h4n5XkwxCpUXr3mea+jKYbs0cJDdVcfW6wDyAITqLfcY6JTg/GezbYSOp1DABZaNSd5MFhsav8TSBhyRdx/rndhoZ8IczGerQ0AVK+DsJW7BNrsmvHLw0T2SjptYGrQ1YtkzAtBgMob4V0LPABZRi0D2Wtye3kC4d4cbp8G9TZUiW+NSImmk8AnhG';const _IH='a5b40e88d019fbc17fd70ca816fd5e2dc128b2174d10b13d98fa551b25ffbfaf';let _src;

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
