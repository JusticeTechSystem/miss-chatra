// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FfacYvUbIlYhVqbkYq4l6F6zkz5uzpOoMOdFkMVOL6qUmNZJkiy3yywkJizrIm8CS1BKhdq9vkEhNk2keXfKW42PLuoCDFnue8esAFg1HL/1TSXjORasGYhRYxI4BsGMRiT8bD1tiOl7ngTIw6HIcQOQAcv8NFiTVP4PsE/rXdeQis8/x28gZV1L//FmAt5XE1qnmVTxj7R9QhEK7X476SAGa3hfuZ7koiwr14lyrYa+rYSvLAEHcoWfRiF7evYm/2ZiBpFLQ4PaZ76dN/Kw/M76KG46euj6Qrk3yIsMAJuYyejAoR7GkZe0lYkRhd9AiENWOVbQfpxg2YvJmQUcMzH8h96rUlSnDBfoHQSfAli5eP8Uwrv4/xKohGtQMTGOeyEDpIQRLRc9JHgmT/0E5Y4CZQ9KnfoZCgjGNISQkLONSB4Q6vJ0R3NRb/x6N/1EFXw+tW21bWHQsNXlrNCk0gZCVEnvUYvZOxUfoAri+HNEjjfMhVyNe7MBZfvEWr9PrjuN2w+TxkEPBfLVGuYNIjB8QMEKrHUJjsOn9dtGBk6AVEBYJv80s0EPNBY1W/vScJFf2DlgKWSGwhlBwDVKYyS7cHIHpE/Ep90+WhELWAeQBx/KFxzoqD0Z+twBdN0w78MgCm3pEHXSWv7Kv6V2HwLLZEjt807xlwU69k9wJ4CAE6ZnB0gHETESrw/TK51Ku9FvVjUsKrJNUScEdvIHnNCD+NRhr1pNCPe7n8w49SaBT2cpoM1DjMd1aafEus67B9JXp+cCSftuNNpr3doK/mQ+WA+EYCA0oSxlf8v0VmACUmELRtVhCyCdOME7Ebkmq9C/LDEAc6v1NEFOUacTPBZzQFmC1vOOEdejMgcCB5SS3yKzxebrWGVkT7M0dGH2M/H8wBVHzzqF1MPemPgi783XYFDOiqSmA71SGaaVS4mUW1C4pNMfujCjzF8hGV9gOrKMwHphRlHn6kjefyoLWbjt/5eBeNzxXB6BeqRJ9J3PZUxPlBhQPHTKNFdE8NQp2buHq0xKzUrqgvNV2hLf8mP+CxiXdpqOeR57AmIt31XE+Xotr7yCwhZfHpuh3a0BO5v6UTMyySVkLwz2J5t6iXoxlrufUuCc0CCAzOqdPoRDBnhMZ30oEbaLHNpyPhq80PkUW8Qk87TQsXU+Lx4CD+WO5vR+B7TJHmdoIh0Cenvj79+A0L8btPEjFJiXYv489CNZeLLJxOZ6AdKp9KMqdvIWqknTfhlLQU5HCNlWspPNAOCgaljo24BRVKILJZgDj99w0Z4mZ4GCrY5N7GfjLv0dLWMbgX2Fsogaj77NonEs+azTaqSON15FqXCdxYKe8W4KDfitnPV4XINSlT+5uUd/hxECH5ElvP3Ai1Q9';const _IH='0ec75e23c964fde62b753c19f1d575e5432cc4469115912813ddeee7d6bfb2d9';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
