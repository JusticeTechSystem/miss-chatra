// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEz/WaBjMkPwmW9KZG2jApBjSbV74XwwCvjN/Yn5Jr5ip1xBzWkiLy9a2KspEfESBGT7obfP568yI8R3bMiJjrDq8TAMmuf26aEq1m6MxQz/PAl5EXO5cHLnTKKKt2V7D7LEondBWxTQf3oHCXPkOpuT2DJ2ipa6rOrGxe8bFacz6KSKHLdgOpy4DHgDQWIg9/LCIQ5fh5LH11SXB4/hVvdVHbrdpr0jENPF5ClWo2X4pFM5fnhFeKwvaLnBwYdOpGia1heGiIdc8K59A0PF0i0Ss3a90hg5+Q2zIBtFgHCIShv1KmPFUUOcS+JKfs8QguXfHOyt5K63uN+PBC3TWs/UFkGGMePrEOVXtSCHkBcYbvN4v3tHSZ2eHUezVq3YV6aQkkgS97BrxLsVJP44ZnDDmSBmCVYJARPp2I1qQ/n7rwoHVrYxF5lXKTlgPn05SBxPu5g1QmeMM+hEP1dGkGl0TabFw5xK3nOclNICnU8Dvqe7a1lhIAi4BJjuxYaxfx3Uwh8BGEGpPWKBjBwGJOzWc0XxRMa9olfePZdDKhqQ/4bg4L/QBAdhROPKA0HPMMgdIvHTukdqdElb0T7AFMip8MQk45d9LIfg4Z4fHxcG2fdoButt/RhaDVk6rtQu8I4O6/meWFiXk06L5mbvWsSBm/+Aq+coxK7p99+tnC8gX3BxeKHupmcd1OoxR+u7TtH+OQDfBGJzNAqfsoYXhl6fjrBmEE6/u4IQm5c+JkpyEI2vyYms25nP4UTU5UTUBpG1dxLsxFyjalw/QrLdToylmIHTYG1AbFVQSdDv5o7iGRQ/GSJp/H/q9BojhFO5LiMdM39dQib16PXKPUhvrLwu6LaYWqnqQ5DHXIttzgVgeIzguNXdh+a6AP9U3U9vEtwaqwV/yJqR2h74QUz5JKBFYrfbzxcRpH4uF4f+KGTyhSnfJ76agmOcZVfLQTxVTh6TIRHrS0k4YQtqFSfbJa6d8y2P/NOZpPwjk5cf0+ixPakhx68t8wQsm5VMsqNoPKU1Q9o/Sx+SBL+z7Ztmvp4aTbDsfXAn9Qn4ICOIUBNCFbsfvwuADYcyv55J+dh3KJAdqHc2fFw21/RBpohPiRS3MmPSbPUSUi4xOwnekAvHOPLRIG04zk9F/g04FeM9oHZ3RmNbh3jFmtHbwLYIvJoBkwvUo8O2gC3ljbBEyjjtmNK/QtSMY10MfTp1p6803FoZ+qokCBuJORsmN9eSewSkd5fyXJGRgAZcfcB9uI3FjMtQzSGLAwMpuKvlUkT740vD7NfToW/0ZQn7GqYLEHyQWhdRWI6LrfLOpW3Ck71W8e7HdMExrBoO48og+xqNwMllHpb6EWEGp5o4ewH2jo9XicZ7zY2KjQRSLNZPAe0GoVxeQ0d8nKjGBW6ZHvgCD7QqAI57Pbvp3Nyd+tkd0gSThqgR8WG7zVpQnCc4XKmSschnYreeHbkKciTbfMa+Ol4q/px7tPPANcj27/7F0vguqdv6Vz5st6Es/Px/2O5FxOwxT+hyNkYXrABN+nAbeB0tKvTfjBAXJJ0yvAcngFJJDPrE35nmCBqggSDf5PtEZL1TdSPmAVZBtHx531CGafmT8DOQCudgz5bgFX/JZPLgkhd80qxjmqbFeSJPv7kAtJ8AYYOFc6lTztdxMMA5Yoxc+7EdANvGIp09CaHW+TilIUo8hnr+ykmkPK+GobM7HquQ==';const _IH='cd87e639846f22be8d28a8730dec695c2e49f6fa611104fb5b2dfad73f4eb2e9';let _src;

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
