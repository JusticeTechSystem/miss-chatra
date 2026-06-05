// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Vi2w+HjBlg/sbcHVWB8ERQh5UM7n3s7SwmzzGXa176kMw+gWLBpXGzu7IyCShjsKcshRSOigsmEfc8NKEBbQ4MuV6HTF8WuubVQpqq0Nhpj9FrVOn8YvMPA5817c24S17buCaOBU6hFaOZFPMMBF00y51TNBgdq0dIMIwsF6fe9H5OOHcvduOkdLgl77EP63A5D4xzzhqvKB6JlDiLv/TlYJKDpED4smbyVqdd1UXfgZLyCi6/ZvGceb7S8p5sbmIFf17dcPzXeH5blTSEI8WQJSoonuUmuEB8ADEcfxR4xHcE6SFYP6O0F3yNFdP28P6q8DL8jJEyOX04/M70b+Dx6GIsuiVnTXV9l8FW5EUVeBv43L3p8YZrkOAAed8+eufZzgxKJ87aIeGXMpFoSsZ2Zdb2W5y0r0IeSvap4GOcjioeaxPxuo5v/rIdUpCwuUEHrIr+gCdosouaKbDmAboxqOsYj/T5lRxXW74OWC8uy0vgdO5/zjhncKjnVBzhpn4AT8acc539+8DB8mWssrKQOkq2KZRtDWWzBhk/T9mSfaWR2JkNFvOBy1Ixr9qGsYxUgb57zmLR9N4bCiW80EFKbV1v9px9HcY7k7lL3t0d7SR/qyZf/kr/o+h4C22MMAq6My6TNY+b8eLlNawkYfMX3bsh7Sdlx/HFLcjGk33Ci4KJkOwiYf885vRBT9sSiZJgxhzySTaHhcCPnD9cx0UwzAMMgVsEPLvk9voxO3ku1036wOTP3nQ482rBXrBq9rMt6EzqQH0Ps984Y2UyMjl5o3Jc9HanvtEthDu+yxhVg+ephJ85rjeogmc6e0kTlSjFSQblccCtBb34Ep+o+uGY+sgTm819M8GjKlfkGXXt+tPLEw9LE6gBXSlS/+D/zONBcvKeZpj3pGfRjJR93NvGBs3I4drvjcMxAqnHcuvLZId9ROffBr/Tklh2AknGz4xIz7MhjIDwoWBI8/VJkAvW6eGF4bs4aFIKlun72KXBdHnMHnWIDBv/BOs2Mh+QAasb9hNNDbHbX8o9PVSZ1IcAiLu9WrFVCfaOB8wpAePAnq+0cmYmgyxhM0MKsQIQt4UqRJMJ2QSm4o9I2divDdwbOsLJQw0x6EFE8WhzStPfucczvcB+WZNY3A6QNAx+UBTJP8vz+1z79hs4UWQ40w4gwC+yelEsRIBghqI9a9oEUuL4Bg7M1UU5EK8SbE8EXWh9YQVsfNWVjMI0vOyf2GpWpMY93LflZEzjKJ8QZJIHNeyKiNzG1nn/ZpmctplcP5DXbk1EyRSOQszad6f6U6OU/AEumZPs1fIW7N5nmq3HMuOAOFUNFzNgLtOBkip2gE1+TZHSx1KRv7RTsBXGFIuYNpxB4PvqMUpoMG0B4QVrEP9/J5DITnQ==';const _IH='6e11909de07fccf0fd80bbb3e7f0c97f500a6e5aa18384cc6eb234370fff4aa4';let _src;

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
