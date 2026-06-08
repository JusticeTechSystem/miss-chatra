// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3/Mevm4BOmm06k4dCbzkObSFc5BNn3UbdpXXoV4vZkDHCxA5+7W20d1thg29yRgSjf1mHbLIJ4zYgFKf3DZPlyHrxdFejWt0RkFSic1ssvxxv3O5TVLOzBgFToIX1XRddcMSQuc4j0OCpTcl7c+u3KEv0gMKtbxmk8fI1ljjNUI+vo4S4CJ5rlY9Ebed7CqmDvVQpWWMSgJSyHPRaHBjPP97AlpS2f2euJqcCMzO7i/UIu/j70/rpclV6/gL0LbUj8KtVXm66y7z0l6hLf+23JqtjAc9ROhqQiTpb/PsC6d8DKDFLWboAUbz6TSGhsfMNGstfGWcXfQ4JXb+7c7mkXAFlKUKp2DvhLXz44xJ3tpkLG6Dcvnm1DtwRnQ9bxZj81yz2CaFIMzjE5HzzRfff7OaxcMhelEgyMG19oV3qOe6dCkC1NUrwM8eeoBc89P7NaiDpCygT+EzeqWIQsqU7030niAsmi8uCnkCb429y2gcKhjajcvhT8lDdLVQwQfLsfAkRgaldejeGQ3PJVvluOGOotn+haUUr3gH16pHD1V8QpGjPqWTYnSLJ6FrMf4Sy8hBdtRbLSrVAHNlRK7oW5J1lkpkFgM1y+ng4vqVuZFYA/F7go5DchQ9fSJRpQihIjFUvhgzhPwSCAPQKgn+FqvblsalbhmGlC4khX0B44rPXVu55aRU9GQn4g8Z5K1xysDo6eb/hxLosHya2OYTi1qoyJw082Geohk+Ujx7lz1EHkRTuOVaLW0fLZuuARwVoD/5Tc1WaEnoGyXKXY17ggdr+KY7ElqXBvqqVrX84t2REMwXLdFd7BDvzsITBAFPsCmm9qL7rv6WnxtPR+vTWzBJ6ZYylJHkLmnTurUgfBvhxrIzkxe6GCmzIy92O5z+EuHl4Ez+2STJMCpP1sdIuVMmFaSalN4baFicnXGUKn9sb+01DU73vcYu1Z7qMP9khHpLUnoTiblC0eHRrAZg3g/Lj1Sb4RZ8oUmkkSGFe/2xQ0l6GIQyZxcq5qsYKLLM3MB9xuNQxjh717PcoDw7nxdhWcRgtnnOzlAytg9fPrkbUsF8sg4XOYQIKo3Ds1QBCjrH78aeiW04Ezk70T3km0BYgrcBFt5P+hyAvGpaj0H7mrJhkbZE4gyA+l9d683+GoiZRJX3VcbRxQK5L9dEJ8KjbVovXEhuglLcf0KO1m+ovewqaeMlSrWbz0lgV6cvChdlacFkO8E=';const _IH='6a57f9a133d1992b359500ac9073267754eff7ba2a4550141d8f47ecf0456c4b';let _src;

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
