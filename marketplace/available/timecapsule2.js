// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+NnxjwZB9l8mUXUVVTvZlEYliykbBa4T877/3d0PwA5QxS9We5M6zwYlrco1i014m0/KfTsz9itabkd1ARDcqd9PLrGzWD+iv6byKK+ocA++mNr7vf4/pYRbX/jtCPIOgbIMa7d2fxNUhkX1rMOX6fbZVTeHJ82Vfouovy/Ard0iLsReIid+ki+cXYDbI9uO7Qiv+EFwa70AOFReQ/AE9xOSfxaiMDckWHNSEhQn8QQjwT2Bv4aPGgqE/bjy9zqQ5c3lcvzfpPtR5QnRf/Y3fw5wQwhRgi69X5vyIWvnAM4wvDVFWhbnXh8WYYUhccrotut8lRLtT+vTq5MmazDSCSJqehkp6URANrXkrZjzrgkTX6nTf6cKrrLtoXuA7tFvaXF2EmKcrCcNF8ovac3XzLU1Q154uxZg/IwSbc7gyXg48DIM6zvXUWqyedFhIVqJjOROHkeTO/pQnsCs/yoARQwRcV22n3ExHSftkPQ/b4H1UpdzsHyjxXboOOtX/LfuimI+Q6Tr0Svsnb/PNTyZCn+FeAw14fDVcOHGel0YUJmZ/ShST5MVwkVSEm+fJ/Mk1jkrdjU96mM7miYLSubh2QWqguuSmMXjUaz4MIRmHlzkYNffIf8WS1n1Ft4yTVCKAqPwpM9TtDWOejkqtOGeZsPNVJoJTSMdwcdlADFhzBe6+Q/A6LiTWv6BZ+WSesp74OYb11lvGZ0p/44+Gj8H88g7sjRQK0dfbV/F//uy+wnHvdw71Vi3iAo0qkCXGKCUHsKw/vjwaJmy7GsbReJc5VTMIIQ4NjuTm/XYJPIsQSskBYmWVlzx3K1Xc1yGLdPb0pe/pogtJDEnI6q4VGPJWU0h1mKoJue/ArxOfebbu+V/z4hhwRWYvZN1pDHAHRVaZ30Q/c+WyuBv0QgwghZih9w/UWlfvidmWGIxTO7DSioK43f9yH5ES421cg2TsqBmDrHekMNukEmPj7JXGYcsQ+fFMpZ7Ks3Y6AiKQMlAL7q63fEaX3qTNimx9hXgUDLt+76g/jeDKwC/KvR/9ingvGMXs5bFVeFwh/fX7zQDBSv/6hc2er9taQCZzLSpFvHMkcGZt/z2MYcRZ1k9ymGyCD3KxaN6LCR+2n67hPMn77uIjUbmqjGflp02l6pweXEdnmxLAavQ0ZHil87WRVveB7p5oYvQpHikhC3kKRXp7IAxJuz2c0o7b6F3yQLH+9LLG3bDxaI7Q17Jw==';const _IH='5be70804e720635b736f8eaf3053b1e883c1ca3ca0e0fa1c660ef3b03a58eba1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
