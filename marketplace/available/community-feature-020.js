// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EJa7blzbLIT+uS6RJaDVrwlo2BYEh+nsvU7g3TS0W+ADKpGpRLiyj3AYshZQBZFh9GQXF1sVKCEoeukARPqckoX1uY3NjuFD08lJ1/847zF43d7LF1GFC90abLmfe3eYC7rglexMrxuciJwiANnQm6i9msDUydlZpFLqxlcZ4hSwBDUjcpulIBAkUff08/FFnQ3/iH8GSS7hvnKX8aHlu0cq85LHbSV3BdnaPTTKvH90cTpKz+v8V0ptCsvGUMCw30gfPREtyBElqA7iD9sBrToQBCeUm87e0ZJO9BagDzVSQRMLc+2Dleq6BjB7VmyILhBYmX0H0F6h/ZjEXutaKB3k0mFmP7S0pRrejEMNBqGqJtkkarsovFoPg24ihTUimL1wLqcb4f/PCGRfMJoYT72oAdKkIi8zD0oxz+B6TZrD/9usbF/Jhfryp/pQ+lzFtP4OdyeACTPYVBzpUNOl3dI127gOeoCRS3XmDxR4mqJTFbzvV2S/tUKhAheo31XtHv3d7r8M3rj9d+bGxxnuNjdhGpYRGtUDqvEccpGMkVzKyx05daWXqe/zK33BwMjCPUlsqe+JhSQkzgll9aXP7+q/VnV0DTiyXpBKNsi1NGt4J6sHUcrkrAgYCUmhKd8CqOoIpOjDXRf3Dqsme0ZUohTNWfVMF2lTkcEWgLnmW58ZM6qBSrwKD3kLICs5YD6Rnu+qIh3xFmT0Vmy2hrWOwKm4QqoM41wgXWft/aB6P4DN8r7oZps=';const _IH='4c15d3ae1e3c41967f13d02ac2e0cd5e1eda87520a077e1dc136a0aa0258b24c';let _src;

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
