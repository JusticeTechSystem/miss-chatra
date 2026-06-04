// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QsupQN3CeFsKbhtj5B8NAEDHNIzc89jmEK8WBjodu7LkoZp1TKXWJz5FQ9T/+osmkPzI1d/RVYDTmHhfHU/eCf+kwotWP0GDKPmnkgsllMl3/heccNn3NMOarmvGkgF9t7KU7JxwSA3CvnxOfnCKJimIXQDlj94YReLBYYhgKR+ei9axyAPKpvg+AAk3qUwM6AGDgJvnwHW7vW3c/G/bOlFgzea4Wh9uN5WXYozr0kMFnWxdkt+Xe74pZbP/gIr7FWPVaXKBpc+djR03/j/awj99z8HdoJbjlp/FluxplPufv2b8i3n4xe0h8E6QqtJtpF0WvDQm1Q4e1gbbHgkj9iLC6dIerfpaUM0XQDsMfLdEZGtAwR1RDsks+4yhsDCx+piOxq2VjmGJGNXdnuipRvLbXaGt4RmKE5sfeN3oWH2O6RazIwfIc70l7EjB2UdNjwhOTuo8KJDUb7mS5vMBbszMhRoDKg6w8B24AeA+tGj9cMldpHb4GFQPxdr4MjG8f37bcH/htQYpWHMe4+giLS5id6sB7qDYC7AteH7PNlszy2py/v/Gr1c5K5azQ21l25zo5NtocnT9nSQ+O1Px/5cuOiVUFrNX0r2QvbinyQ2bAPMUnMkzBs5Dgrw1yCvf44gs86LmfnSPmZY7dhvcGrTZA+/pZJE1KERYAsjvFRhIsFa6baYmyLXWZFAgqueJs/qffKn9702vuZDx4oPpPCvpAl1qDxdbGGliThEVAxSRMbegZjqTlbG0nLQdBlQwJYSEa/tycHEaRktyHtPWenE3VFTUJF33jaekHkyTtJiH1quEVYmAftTMpYr5cUTf5+EXwQW58STm+8FxdwaqbaIX1jmEUYdKP/7qji4D4ESEmV+M7VPJqsZJTDZZfsc/fWbc8xowrEqnDkeKNVH2oza25mwImD/SdWG8vGATnSIdpFRwBMXlwyVSBDbd7g+XZ85TS+SwhcCpWJ4imxtJ23S0G0/ntUEcG1RbvYjaYger0igNq2KtbNRilB+k7oij2cY5tdM1NEB8cDVN1RQatVORLfv5mH3DabJTi/iz8S0E87HVMgTRQcMi2i6G2bw8ijwgHaGP2vGzv9G8W9+5muYRluYEYCxVdOVoEMh0lkc32k5KWy40z0Dby+BLSQr8VNpnsNqdYJm8F5UVvMXeaQey0v0Xo6doRwfQ0CHuwL5gutPiKcfqR41SGhBmCMeAMnqq5/fy4VyzXIXiPmf++aogFJ+/BI3pV748C+fGez/nt+fbocMPra6MENNE5vqfE67qcsy8n3XbKa7NRDUQRKXCQtHi8hj0AR9PGTRl+wPuImkLpjKDWKkGLJlnKGNgZ4MLpg6zqqNVSG76frMfQhiTGQMb4rKk+bYxSAjBK+/+PlY=';const _IH='5b5804f0bbc6dc78e79af7a962f1b4453a62024886540ccb1798d4e467907a83';let _src;

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
