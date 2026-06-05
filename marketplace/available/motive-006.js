// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I8QHj81o5Skrg1MDbcBX7vgDrimlrBWGcr4DYTPS4RgxWaV/A5mQO8kuRSy8+iHoa3a6Nu6BIy2yxQttjjZcxS36sq0+wYt2sbse7jhMRyT+dTlXcXGPtrX2sVxKi51/De4rWNiujUsR+NJUAcA8EBtjZsfb7l20P8jU0wA5lIL5yzma4tYuykYHnsU4BxtOc89ofDWEOwO+xCJhRMCkfs8xofCXMWCCASn9JhjSm8dJmTOUznvXyXnfEdCm4TsrD5dn1WmuucgXKG1bzGsLuXmXnIw2m7TauLHqXPy6z3gKgTeIiP3H10y/+IoR28jUbTLs73wwc4qu2TiiOWXTHHChbbfeIUeGjjj948gFIZ97r87oOunRELrPioAJ3fKOko/GkaBh56DTC6hTXXdfCLwPhvuhKsjq+X9t0l/L1iQR0hXA9bOSSmpwHV/bl7a83CUXgEM4ox4XzuoqSC4Qhx3eWXJHZ8oYN+u/R4wBkLLXH3smCZp5Zu85C4MnVAUZR7Yusn6BJZtAQfeR9hM1DQ5EPnCmGlQsJJE6G88r7c/RoNgrZqAYflKzhS8liX64KCBrTm1wzTDxrlKyLcpMRF/4y6UA3Ox4nrWaO6mHzf8hNGTSEJsXCaCyUN09DbedCOTQ1OehJqA1lpbDcaVTm/SenkxCWMDPR+4SVVFBGPhXa8Je0cv8PDCCh2v0Uo7yIZgToVSfNlEtp4sG6r1W8CaYVnFHSjXRuQmJjtyYpmewhZFZDhKnjlcJkYac84D2+T29+H+PUFdIlwGH1QounkoTyAXY1OlVIkFMMMFcsrIbizmTg58Mg72blVOpVHeUGzVDfxUJiUWyEo045IkVPtDSzCaSMzQhLot9JR5zuf8aSwV66jrCje69TUP7gpHZio21RlTD4lzeFh8QNuGefiyCNzm13hCLY25Fsr90AAPj2DDEi/CoVxt0ZANGv4h6Q1zHPb4/fjrPuF6Ti5iZdEBZ5Azc2MjBwdYxiNDZxHqeYlXHMlsBA4vkz+3bAsGfPXiCoUjL5hDP12eaUV8=';const _IH='520e994ea28528f1f5f9de390c9515a3b3b79c8aa096a8ce79485ff2e09cdb4f';let _src;

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
