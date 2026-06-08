// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ApD1tHMV3tYHtwUWPHh44uQ0mPQuma+o3fcNKae1gmgHia2Si5qpgSPosmyIzIxXM4ThUTykVKh7w77sRDiSgnGv7+Vy5+s28OFLNhHM62YwW0/4hzmm5fFw58rvVrlPAL9QI5ugHbYDe6o0QNVMHcfNDIIBXQlpjdY+Atl9SX4WiuTZdSBbY1nVgzNmmxN6upEEy6yFgkXpXBKISXnaFxpvhnxvcpQ5Z+eTk0qqwK+Vm7bZxWzP9IMi4zpGeIv7ZtwVC7iEDY0JRctQE1v1IAbcWhNqMUcOumBt41kZCl+9Yzylg3iWtshj7dyuJAf50yjEW4UTW3dUzpnN9unzpfWOgi95kWcyz4ibvfgu+eqWaLBc5xPR8ul8NUQB+u5PaEf5AWBJ9HboZo+EWEZdSQdDUCGULAsdxMJ0w1iLEgEW/HG3VYJnhtlZhv19biiURQaRtoNxDQIVcE1DGnMMyUjlQHNpGboHUhbWXHBI0ojHhvxgSgnXkJimdw8LgzccH+DhVou0MjYjT6NP4sp+hp8fRZi8gz0yph8pNeW2FdxA4rgg8CXBwADZ2fbFKejnoT15pKhtqmEtakgOL564dzvLYHg2mL6JexjApDM5IpfcjA3Fm1kdwwz33qPYzzVIHvVUZ9QA3U4JmguAFTK7L8NWWJPHoUyZy31DweL+YN0Hs8eF+EOqnME5FfGtKdsP2ZRC/q/NeacT+kUBI/1A7Kuuhxu3F0DYkyLxoUpwkBTQdCj9bN1mRKJpYv5xDdfKwTZUx+GsH57QMMVQC3CBg1aCfNoFdyTJsnIRDVdS4arw237LZZtBDFgRaN273mQBuPCFy21RblLEHpX4Fj9qFzTwLLq9o9hJ/Xx0Wti0cU5hsEnQKus+/Ledde9A7Q79byd61EC1AstMk8DoJ5uMgrqOnn8tL4sOF3EhWMDJGSkSwGE0ELlBWFTH1muqkyV96fNnN7lpcNMapYEP4WBDyyHRn0uQ8Ie23HqSEqmgkfVHXXAIkXkDygU41OqZcyerSfACzHo3Sb6Wn353veKfvwca444bf6KHo7m+5TIMTZTr3w4cHtyIMkhLlaqqbGQD2DKwawsBG2JoP6VHCXrJIuSA2ZKY+nbCfKCD+3AxcvPqwK+2MOLNob6WA1NX+pH/uharEHGaTOu8AhDBu+NwupScjc5XNTEjc3Bv/UTT8lNO1GB96xzVHyxXekwBujuWYuf/P+AmJeLft4CfqEfI2KJTOPOj5YUyf3wi6z7JTCHhqoy0YoddbuHJRVOeCO/m1Dx/2SYW0TKVFBch4e0shlGsTL9H8kiCmQeAwhzAS6+TXpmvDJK5sI/+CGUpHHhkRmBeZ14HEXWAKzj2V6GzS96SA6KDeNTJO3aEDRj23FUP/JXAQtKDL5x0zy/A+KNcbwetJF304rM1IDNSxG0/8yfEim+I+L2fuaipUnfhwPnzCYpisXxuCXQ+aiPeY9/Rh9EU22nY40WeVcjQf01zH5z0NuuvxIFWSQ10xV2SRNQUDStfBqccDfohBrFndpG0dWwEUUpMkYyOkECEBJrG9cqf9ia+IXCTfRULnMnJkqWk/pBi9k9RT0otMhLCax4B4RgR2a8p6chWY7AhxAS8L4sfDbj1fDzVLnS2j6TmQJd4p9RN/RTw+FuMbKsE7w9IJOS1xNICID3Ja55Knaf4xKkXTpJ/OaDAS2xaoTjs2spv7MRJqAI9CZeIYt7dSfShzxFp7JyYPTOa8VAu9KXwqh1I7ljR9PWq+cbbAu1/Ak7eTR9B1c7qV1fS8BOqDWqibCeaqprgdas2bf1SubGD6NvzURCX+3He6zxukfcV8x4+bD94IXyEfkYYdml2qH5G5STCdPl621hCtJHqkBICAoe/Q/mT';const _IH='b23a760311b247123444272b142f8d15d2bfd7b74ae40f20d298d0a1c06d4dd2';let _src;

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
