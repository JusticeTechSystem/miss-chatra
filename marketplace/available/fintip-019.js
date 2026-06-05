// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PzTCCm2fYwylLu/WJpLtO1P3SwDn+uwHzdaEmp26kO5kGu8Ny7dcsT9mjchCWPdLHHoCMfSWU6kSXWvB70yNbytkqb9PrWVX9AdLj3zFCjxxijQ0QNBKF9btAH/f0JFHGfX4hJPmA0rMMhxz0b3BhY1jmfmiWcdevjirbxl85z3uRr9A3jiGwVN5Xw5PH3XGhMkXPKT2Y+wOiNKoAP3NusLKfj1Rv+MesGxOUdnl4K4OpS1oSsbpOqcC9P9GO4cUTF1fIh2d+kUr9CGEB8oVTD17b8v2ElONL2QedxYx/L/N/l25YNYXPQBJ5VzfmX1JWdQKsju/gbPLghRI2JcjBvp2uiS0ElVm9AZsFAAST6Kfs2RyX48JYYicDU7UknVB2d3HOprdlNDS2ZOEulynjwc1oWNUGKSYHwcNATgHLcwaDEw8zVtzezFcpMavXkuJUkLgce8mM/RWDT06j10trdSn9v9Cc20IA8E/FdIiLw7nq+GZkGb7oi+FmONX/gJFqwDHCkkqUubVbHFQbVMRdwfboD5wH/Z2hyRngU1gv4VuJUeeaSkiqc4OUzKic5Yhh+wTjFMU/a+YN75PwsPsezwzexQka6cqmQA7efYXA0dhMu0q532ZjPbMs6eBOiE6T0wEGv/Td6FpMBDqpqiU/x7tuir2C/u008tKQdJmKptGYwuxinUT48iUjJ73bMCUw6UM6tZ9jsGMUKbJNEeIfi+batsYedUz89kvXoMOnT+W7mUxCpWYZpbjlWzFcw7JVfgXQ5sDXn3uLd56qv5Zw43xIqB1edl6qdpKRWbNnY6Af16Fm+bKdRd+48ew3CTYKqagEdHSYqZbOpukcsCiA8C4EFrWyKwDhBbJtFZiCxGB7VLXYQT2N1BK0Ppmu6Hmndu7vpm2PlwKHarNM0MdkfP8g4A27KtG/9aiqcz4PLa1cgvINYul1AFqCqK4WrXGG1lBsWN1yavl1jj7N+YE5FvqJAw4zXVNn/VXuGwP2DRcPIq3vmfiSPXOXaJTIPj963uyNgiWE00vTwl3VDXeFY61qRXhmAfgTXnIn0vyLGOdOA==';const _IH='6979f6157b702302e60100fae5dac028008d584b1e867be5877effdca8698c75';let _src;

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
