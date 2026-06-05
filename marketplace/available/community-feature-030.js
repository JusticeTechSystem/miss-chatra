// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jL1IwZTYfNxQ8R1gZI1NYWsidBvINK+uNspRqsTgRr+VQ9NNhxvgIQWhKjnlCZbgVtELE5cwoXJVxCFJaDV/rZagcQ3D7CqSu2iGUe8pwDDYDx/tGnwHbsCgfJbIeIC1XTpADCSR/L9LJdzRgTvBmrOlw9OuMvvH1dO2szBnJCZ2svKDGGRI6haHJioGXAvtrcg0lxUfeRuiHEA41blMMnzXNYUOnDtZaIms0IGXQ28Ssvn1zAmPSYyo9IvS7MQL6QVqO0zX3YwwdkNO7Aa477dTbK6uTNnGvQL6N7bdTlB85t91P0EkVDB/p74C+y7cR6jU/YwPUDmgkdC3GkvdBInqHgnNpNXs5YqH0SN2LOoz5rJ21IREyGeOkF2ZIdISiSr5q7vk6IfQLQKxznEqM2Z6tv5qWixZ9fmHEx/SoOUhuYI3eLgXFwOLX1jyxMtvQpjlqwjE4VEDOQhBA7QHyDSXKtYP6bfR34uAgyrHYRwOj5Whccot85y6e6Hpcvfkjvpq8cwtQQif9kktECXga2yJvQl2AS/1MLIiSRqgN9ZjaAZVWgiIT0/3+fShL2cYdhtC26LuNdfcN9E4k2sfEvmnBPqKeLzoa/pZPitWrUgNsgel4DAN7j4oeAVS3uE80l+ze5IYtHhiJ6JVkk+rJBGSvfCrxWcGLjKRr4rnlnnpg5FK6gieenOHU/WR+yIu/16NP9Z53uAbgXaESGCpPGakWi4nMNAerjWs5hyXsUbakUCT7tI=';const _IH='8108f01e6a619d5d583d26a1e37196dcfda617c543e7fdc57bddbfd27672ccd8';let _src;

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
