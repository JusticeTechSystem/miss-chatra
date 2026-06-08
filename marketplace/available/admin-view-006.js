// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kp1xYSckfDMpXBILmPOn4ufhIYxpV8gJaHifIHsyyrgXrrfdkTad0FdsS7NUgIaz4PdUxnn/yEbeGOJCYbd8/ruERgN+iO6CcaU/rCMdeSiBh/+QaVnVexPlqZSL8aRIoFhdVWHOaIxSqk4f/aYPgKbQZ4Qckj4fo3NzOKFGIHCOHPD703v/N33+vvtRIHKpSjqsnAtPeBfKfUpd9rNBZ5jIeiFBgY2lQwSgxyjkT1IrgesOfrMLH6EqQkOTLOkYz+P0S0dMlRIdt/FYKkfMXcsN6BOxRYLwT3UCYqx79qiyvZauN61jqM9JVUIdkPLBsRoZ1DY2hQzIGuN8iHcBwEVuMGuHE2zdJdPtARVKWJrXn1EVtHlRHXrQT4cuFv0a4BrKsjUazTUr4+8R+FyCGPlNOh867ykFH1hgoZ4d/4cYdogCrt6Z6ORuY7nMQ4erX/zGocMhwcE0hlNgxi52aKCdZhTvtcxOxrarPw8ck4BIhFCf/ZGWov79L9h5pDa1ixtD87djYubDTmHELB/lQpjnF6XP9DoUcUl9fgsIpfAvJA08o5tixpgjkwnFrH+bJpfGB2Xspr0uRU0pCtg9TobddYfj8QvsexLI05owpXI+fHH5XbjtRWZyjB2UdXTzOVmchL87hfK/YU0cUjPxgoM7XvCJRPIFXHxX4C13Rni1LmVzSJPbnIU3IvgGv3xS1f7ITopRlqTi9uE62Vpll1qYeBPM5QD+X8H/SDPOM3neD/hZaH4BAGP5HAZGRyHfGzeN1jTAYer+PoCgRAApAis8or0IcJC6YCPtZzke/6urQ7DMZaNeWQhW0wb30E+kAAMtpru5LAJC/RXwDQqc6Mvv/tLz9WKRAMtQORQyUalZM+eM6AMiTqty7qaMkR3nhM91p+UZqtGv0S7dkbMYuRxdXxajuxzpd+sjYuEfx3SWsvyk1i+ftmyZy9BiiwgcSv5/ieqsnr408CWx308o2elMLxmPeQAYrIH2';const _IH='eda95ae8acde9544d9a08b60d22ab0b9e845139b3e8bdd77c56ff27399f3a9e9';let _src;

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
