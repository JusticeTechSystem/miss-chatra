// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ul6A7QP2tdp949R7+F7ceEeJSuT+yrdk/owgl8WdSYTRvPJ4E0c3wwifrVURHleLYVpFS8mZ5Yos7NH0knggBWQR4hx6v+IVPB+oLnRwph0U/EKacR7kthL/gvMj0xCGsqkLbA7BJ347E8+b7jc+pMJTqNN+Z43ab1gMORBIkXizB7L7JVJu3E2t7lM392YIgNbmT2MrR6pZ6387jsBYHDqby2yRQy1VU9oUiqoB/4KLH7GRjpy4SEvoXX2QQ7aDFOBc26wVIvl2DqPSQ2PtxiIzJ9MN/XhvlxI1W7dSpuazENvSg5EFD+6K9ZFQ/IDDkGMHV9BCDOwFu5oah9CmuUbAXQWy9IeHw3NCVHpDnc66/cM01XpLhvcOgBnS/8s//hjKQKHSg4SdlsnF3BVlyhXtfy3SzYsF0fvtDfNIXDYKmeoryfvrv+p7aLSG+IYWi2Qk4cBglixcl1nXMHy+9xz7cpOaWiUNUAMyMd60ksVyMpUKc9TDqnaq9to19U6FSo5FX2egA/FxngNFDkZhCWw7dpsXYwsGSL8zZcdQDgxM1V7uHTlagt4j0z6fYFEgOSdqrKWKNM0gwWqj5ve/pEl33hwWPmgaTDPw+j7bbpJVvRgpnwl7BpgrnoU16qJk1+oHPdSIGU6bHpc3JAFLnGFzeq3H5UNW4Y034Rv/JzOzoUpq27Oj4VQVm29kXSDMU4sDkCi00+/wmcEHeaRZ5V3Ggr0xjJURU65qJQzDCJBwxcHLNO9bi0tW+1xiNjLxfXs0ZfG4QOcOJitPJuCNHIF3g++Pppbu6Y2Q3eA9OC55MS/WqCBHNBdiDxKDxDLG562I+lMYioWMWYs+VphRDrkYjSaqh6ueBGR96WG8KPfY3Eej37DJnPYrFqZwfSva1wucPIG1Y8B9GIPXyp+QHdu3LbTQGIgWe05g9rslVltoxv5of/aAU6nSM2YBpK1bx/Gr1+V2Om+NJJqV8fyjYVV3JIRdzvh09vhH21q+rkTGKU4BTT58cM6V';const _IH='895126467d4bfae9aeeee250de25953a51c8b5ec4ae4ff72d7bfb1dc8408a9d0';let _src;

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
