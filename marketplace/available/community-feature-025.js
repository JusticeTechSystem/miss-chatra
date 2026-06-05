// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PpcdWQ26U6oOGIMi9bCI5CgfItu8n3Y/EbfZFOQCV8fPIUwIwTe+wfgWcq1rey2gX6q7NkYccjm3x0uTOBWEyz+xbiWF1IZt/pUeSiUiprbqzJwifXqp77CjFc3/soHY/by/lj3a7PnbJe00dV532aKMKrTCwwu3Ys5mdjsLhWW2uL5ygIASVJa8awO0FJytxc8Nlhipv44X5IPsKJR3SBMo8wL4xJwoiNIAbKN13cQekLT14b6XLI4qGByRzGy6ph6mxCHq4tF2kjbs5u1IISuVlUSyGg85wMQVr8HCvB8mPpJG1aSxUG2qh/LZFn2trVz9jnMi6yHG1oJsCq/N3xOFt1dSBTYMBaKBKTfe+nelFLKDuDMYhh7UmYCZd1To4UwQw1e/XNnnFJnjW0j8FgHcUMN3SSgJecaYy3lEMhRB/d9OC7tJyjNKH5BDwIGlcBo2yNksH3Rh4lGMfz3jw7UfFEWsxR953vB0XexiOWEiARFY7pZA7jJw/qxjtYZgEnQ8l+nYK3iNYjEP7PYKA8SHYeYehBHUQvV5w4wccGjmoUcd8fl2uOqZHQiXxZnJQ0THGUJ5iTFbPUOubx35lWbTWdc7fWIQ5LpIP+lRMNpPsnShXGNpcjg5y5Bx3k1CkAUZsiHPcnel9/vHnNmxRMnjhL9A0ir0pepF4ewHLC76Tj3w44V12qk6iZT4WZNTuyY0vwIb41wcdVUW0OVdDan+cqTNoBCbULP9DloXswHoyvt1HLc=';const _IH='579a15a6d7eb5bfa602a55f5d4ad38f23f52cccc0a20a8016b931c5031b7024c';let _src;

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
