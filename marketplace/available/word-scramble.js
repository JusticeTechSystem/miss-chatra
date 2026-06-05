// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f5A4GesqxCc3M69WOaZcQq+0Ec99KZPaoC0QA0rtQv9Z7P2KhBS9vRyethmllMhqWuNJ7mwP7zICgSXDyk3+6loQVOEl2OiaNq7TWHiPqFSOYcqMlnYc9fj3TNbxstfhwhqYUfogPwdNDApObNvzR2vXKxYaw4EDBL9FV2FnT45j++W2cmWdAUTYwnPlO0A8v5kZ4kdoqF79Wiv/EvqdRVrXFanHNCyKb1ac9CUvmNVjJftqv0XxvYAAdMDj8GnONUdpb17XPbrAEZGBdAapZjjyQzE23xPo2f6rMHxooTgQboKocaKqPRsSEtbiTEdCU8t2W2dzt9YUCyuRSSj2NSApNjmhkU+qMJUNnPLAm3kN9UF9zMouIBMD8Jh+iIoc0RCihUZ3sWnHdHYOj5yRhhcPiw1ISCxYbAYS5MyEIelYRLPMQ+97j4bianOMihq2d3TVNYL7v1SdZ5obJ7U/Xi48KKChHs1jJwLjSVMxmge/6TmCN278yuUh4BAE57XcSrloA0WoSaxe4Wniou83GGKLB74hvGjDDpxfH8pQVLtIdoMHi4+gD5T7euIGpq5C0UvB8ue4s3fa67pxJzla8BPC5ULVua2T4qYNUZtWXDdxofEteyAxvl32wNRpu53Yjj0/aBUq7MQsYdfoWDTldxxt0uUsyBRjBJaRYeDyCakdtAyGTbsEn7liG9ewMu2qFt7P3OdTeBaealRFx/fpLb4GSUiqQYa5lQpeL/8lCD6Gt2BAIZwhTE6sPlyxVBrVslKtYfj1Tz1OI1g+aHI/najTX03d2pycjNMlp3QW8UcVTTsFCaZz/JfbzpATGd6uGV7fYwlQloBWqhIu46nY9Yl7Xb+Lx0plM/gcbgemss76HmeXGVU+U6nDv/VvXd4deQo7XoZaqKGWAVPbFqKL2s0yWJih/7zSWRBnw4Y+hQeAmtCwHMwjubvy+pGpTPF8/TxBCC/HVgHQbOe6aKb23w/0cuTGtlzCODzo+nt0e5s0nE7olhuqp5djsegpNL90pWsgv+YH0p7i+663sClufNEvc3xbgXg2DNwQ4ZCCAGaKvyqws6+FZQQ2IM34q4E8KSEgwKMAANto6ZvzchOn3KXuh3wT0D9A+/h6I9PgXG779GupoR39J2O4hZ4No7JfBgvtZtBITyAS855TgecMTza7BSByC3MXkpO7dU3OLe6UBnwQA9d4U4Ky/7YLKxLYbJ2zpM6rLF39EQ1STEp1Q+Tt8WqWBA9R6BaKhOrQlrJhwaFZBXRn3+Ye0TriO+XTCEddrrJwpla5JDpJnxIeJLwcovYv+g33RxRdw0n8qsgC7jWXbjKZoyX1oncupTIl9LidY68P/ItL';const _IH='761ad9650ca553e18ab5ce02bfaf0db5c59f69cb06b4ba419f513f4c854eabfa';let _src;

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
