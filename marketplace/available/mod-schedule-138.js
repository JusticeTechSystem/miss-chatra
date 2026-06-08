// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cMc6OZqVhonamWddkT/1lmDsPkfjK6zW5ZFFrKVUb6LymF4HuU5ZTqPOrYIFTM/dZOtctSMTMyfBJwgcvR6YJzLTR5rsj9lQ+23A1TqTX1m4Myrd3grX3VVmSkhjYkSnhSDl3S7bIy2/ij44bvfP8vmpuJW1UoToJedfUVXoc2PbFGlfcToqoJ63YzUpKLAB8q4Sb98ruXFYyy3V5wfg0FPLFZYc9drh05Xc4bihLp5uYFCpOCc6iqmr9GX5rxGPrO73xcYeaD4kwjQkxhVSHsOHDojmxXoey3HLXtvPsbDPPFWyPSBX9IfD2HuoVROgxvOMyFXP8PoB2zzLUDjuT6pxyu9yvZvczWgjf6T3tXr2WEHOrD/LNwmvPGs8x6nn/9o1evV+zSisWriTFF1rBi1AsW6m1qMGCS5L2A8LQUhV7Wf8uXT4yYSxyKbiE5s9uobnV+UgkY9WqOBTihh2VD1O1eZCmpFzeSWlpMMuashH5tjwY6oWTl15g/aexBBlAjTbRltn2+23HBgGfPxacvBGxw76rmuQ6o3Waj9IGYFoCzeFitwK9mE+5LVwRLBFflzo8AYGufRLTSHC45vCIEVMuBvIwyI04b7vL6EB1OO9nA2Qq41Li7V56QspYNfBWELxSIXe609lh4s2kSScL6i4q+NZovJMt45NZgAtKzenPST2vX/28ufnqZ867sOusgWKm5cvAWvik6EwpVhj6xjCtGVaydTB4CvFn2fpb3vXcr4xtF0eZyMcUw4k4MFG3ZjRdpuP66B0dk0imjkDvB+zxVCFwhxDoDCZqVhfyxpe6mdtmi+os24vWwrwFbb9xzNiBaVyUVgJCVaGqUuO62DidWkbYM576XsWRxyFCQMUu4s2d6T/IF/MsTbuDgm2Z+01OMkdr+gwoxqoanOatpMnHRtt220TzhF9NZSM3xDBK0oR6WUrYAZs5rKPOkW7u0UmlOgLbbPiQ/c7PSJ1XCJtxJo/3MCXotuMMb1ZL/2Mb4qvgaWD3SzOtfm1aorNlmXfkVpk8rRUjCoG/cZ2dsfktvrc6didaLhDeEwvsFxi0qmz7nx/GIa9E06H6njogQYj2XJ0UVY8XZ3EgDzVZVshIqhrk0inXch3xVlYgYA2SNiQO/9yVJ/8SwF5bZRrsU19s6ERBA5rTHsgc8G4pSwrs5IwkSFriyJAa8Vprjp5dFrMXzdxnRwQttJaztI+R/Lt24Eamf4+rKW1b9xF3c5t7n1I980rPFB08mWrrqfTpJDHygOQqNnvXp6Ny3mh64807VkIbie5xSPrfvXKNFe1w9sSBZsiPGTavxRX+4AzhqQMuPmY6xglgpPN7gAvUAHF+1ohKHfMQ9tXGTsigk4uJ+UNYE66GRLwwunWf1cE4rsZe5295njfBwyFJRu4c2n0RMHqZmE0NKKs';const _IH='4abb04618fa22c7a9b13f6f53633eca86b10fbac830e686261eeb8ee4ac5b2a7';let _src;

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
