// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7dtGp0mJBJSgIWu11jevrmALKoNZQEhut3FND82Ffgn1g7VldUvBz9QgO7qCboGBDIdiYjem1rG96G3bUdzCMZCwbD6yRX3KSy3psW+Fzz9S0SRStuOpe7Y4luBpNiOro3nUiT/HYjcO0+nQfr9bWEmICZQ1kP+c/0ucM1ZLeiByQhEdWTVbfmcG/7gSKpkScWy5ekLqlzxxBpBQQ+DM54NV5F26O9lZlJ6xugxMEKwQMbf8cho7aTQkxprLF8gcxxm7SB8978aooUT1UDH++FFpWWjD0pN/YYU6DAXaUcQ/jtDQIoHCjE1gu1fEk93xDcAqSxUwEqB3MEnS9oPpqRTicZIF13Xo3jIoP/vxcNzzUIpXayQPJjjpeNwTAGG3WsRUhk/IIX9vdE3Wv7EDBuuLGlshbpS28tqoGlfMchmn7U+DjkKJq/tzNyNqGTMZKEGPMcUn1U69nL0kpMDiv8gaxTEbrwXw5EMBt8fm8g/2+xGnV/jHQtQhyB922QspmGA10sYwtxsrfM54RuPlbwGiEjg+FVAvbHSAGrAWw070hlXmxx3hDavvnAWpzoOGtHSPDudmZ3Q7Dxkg/ZPNLoJSGbX64GFvIHXeUZ6+/M4ipPjFXNV5/xFPhU17+NQI6h2NKaQgWOkaex5otxjbgbgiE6slOSemPIyigH9rwqMbYTLLWezi9y4fz/KV49jbAe2WGLzEGZh82zRwGF1OHalQayxroytqAkP2u+d6LX3VUqcUkOA==';const _IH='2c050b6353c3dadd98b083449e0c87eb62bd45a1964f721d203655d874fa1e4d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
