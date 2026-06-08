// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JxxyN4eYV1Z64kwt2pTqH0BTxkqAG1+n8OGi/5Ua+DVToSl3Fhnsdgm/pEY9vuN8QmxUxB8znthOOjj4jY99ACZqVnxeRue3EvidcyRp9K90u1X1j6p2mvklzLmKQVFVKp1ESw6pPaxheZGznMy4egjnBW9hvohyMrchPbgpzhzrBTU/sfcLrmbc/PmSurc5e/ebGyrPWCRSu2tzsf5hcySfip19O4mqjFQQh5Hz/um19nHSvrRlj45JaVsc4dXSyop7mmrs5mOrkmLMqj+gFGGZAzS/ueR8fT6pQpNplll+89PlUnzH6dJeOvDAoElMhvzYStDighMTRERa8sOIBBGrQzsdo656uktHjQJMGF7TSYubOj9GxTJ/9aOfQJyJeJYMiq6B4sugiP1ttmtDI6tQEIOfh2pnjLpc8A024MdHcqpObE9VrAr+CCYweAazBoNzNSMNOMK26va9J58vLAQ0mBcyquma66E06wDUzcK9cJazb7VeKkWnk2tMr4KzwkHmEJNTUaLPL4DhW7zWPFJRzE1Wupx/gQyBaTXBxhAvSitgad4+NhBhUEdYeDjRQx/olB50oOtmQh+Gdvfl84ATnEe9WZmZ1MPsRjvoAzevCtQjbd9LopPgxtyQeI63xiNxo1geU7nBvFtWSOvawQzN96QLMn0wtZrs/NLxJ51WxWFUxhEFK6qgyYuDHd8YzC1QXGkZDtxXBhkoQFvAt3nnNV7Ddb1xtrczyni9/ZL9wkiL6jBS6fky9KbQRmd34uZQ0tsb/VPFu+nAwI670XYpZbgH2sRyA29ZyoRPlqFgoXSzkBoyVfrn5uQ/WJGe+XlX4YDrRzAX2PTr9oXFUDI0RCyeP70zX9K+A1kGDcE92YsZRleWAE7jwsc+K4mL4s+122MxItx27Hc8hI8V1gk1y6sfmG9HpxYkHWv8ykrXwdenSbK70wsT+ZAJNusaR4K0Pk6ipmoSAFA/98dIvVrNBrf+tbTbuFrlSZuvoOufNQR5872m2exbEOfLitvEZBX9ct0PD2XuyBbePcTfE0Q9Mif8BVJR0rRhqSfoajKB/AptvFZB/eETnewAA9Z7sFA14dIGXHKFVlg4F+n8wk42NteAiKxW5O4Tx9FJwcCcZ+CpNpUiHifFJxh1FquuGGk3qg0wpeZOTy/FACa/WAFMl5joWkQSyoIQk1NvHhEggL3EzBOcViaWTYz4WHo=';const _IH='ac967f85321371c8395c8a2d56a87f75376c7a285b0137a5aba61f0fc2e04c6d';let _src;

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
