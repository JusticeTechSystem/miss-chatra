// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9OiQn8b0t9DK7vNfiSWijZBwJvQg3GU+lG9BDxPizTqNPTagESoFOhHvCWb3iGBrx4BXCx1EkG6yyzS9pJYNbdRPkHUh16VwXoNkTKguofMjEe8AdXIvgErNWbY82crJkfeoNOUlPk/iI7ZsmYSRDDqowJFHkxuDMow6zbOXHVs1BCaJCrNi6LbWTcRX668YWNLMI2nadAE1G3zNEvspMKCuW6xa6vVtxFTyAX1zwdyb+bHKh6WvCOwbDbOkBWOkRIbyxUVkg1JvnTr3kzyT21uEHH3Vjyu5IDVOwDR+0LKH1hbDq4t2qFQMwHH3+LiL20CG8bVVQtHEokwwAI/JknwvLL/BIcwJLbTwsXf4NyPBmd+7KwTAH6h0FXwmONUhPYuGqfzVvfg/e6uGg9R9JSJstzbuJ6nTgZ3IWnjLXYz1/i2SZQFXcpQChZlw+6CjCIUy1xf5xN0M5L3fmFCsdA829dlvUGeAaYEIU2e2gH0SEiCnkGinmbQTLS0CPaHgTJSFdZmCXiXRuyea1K15UdbneFXoQpZPdMf6J4eCfPrs47hBx6y2nqdMJ9ikJbVczlL9F3SmjdE3HIO3Lc7oQDRW146tIjp2t/Wgz1PbHVFsUO90Y/bdSvasElbfd1nuMEghYlemnomi5bPXCCAesu6FvUqkM7oN7Rs7NBqZNUmD7aREidF/tZ95gRjC3PVGYAGji5uz94mALAyhidmYRKM8coE551/sfC/PIeCrFTPBsj3iwM+jsngBGQz3tYVrLseSpJw/ODhkUIeQM+aSH2u/Ie22ZluhqaXGI9modvEOs0dgjnSI8svlCbkOwdfkObjulBITIDoHKZ9XFGcHAefZCmK4A4LhJpTnXVBf8mTYBQKTlgBRmJJkT6gMcQSLz7wyR1UX58O45qX56s3cl6TtNmNVrtL4zQ9IbdgSgLad9hRqTiikPA==';const _IH='4899166e30d60dc1b54bce82f3e84592165bf748510231006023680195db1e0d';let _src;

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
