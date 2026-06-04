// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fGqlgK+COeHE2OXXyWbMWEuIh7s4Imvi4TeyhLhrUagTXNK+mDCvPmYsR7bQr9RnoyVobY4O2lsh5DvfXgbtQ8A0h/d4MYbLKExaciMzCKaseoQkgWmHy2eUMxbBBdFodmrE0AThh8x8r6Iy2BGIPj0bdLY4n52EOW5GvD9VJNa5rlHnAdkud+e+/I/9H4jpT7IAIZx1SKvII2Bbc79t5f4TqPBGPk0Ik3afWCdkFIvSgYcDz4h7b61mSPKswAgkBwyM1ngKaoH8dB7e66kBwvuXM3rRYkUL6ulB4ZGddUIy3s5SEL1bkm5HMCf5+BVTrR1xy5ogY7s7BHBO0wcw+OE1rRLH0PzPKtbXXUaIxt/TKt1SlUG0ys8kW8JZa2qrpfIOIZZrmzwirP1yzJzW3FHDUKSgRszVIlkX8Hg/U066+/7ScSANXvhDT0Tj0+96T2ymzCGBrOwzqw2m7bCmWtADtP/xPmoIST3FxMx5A+eINeM3Y2Hvj50353yiBafu0PPbVrbC2fbgD5BccCRoxZNqTrxzb4xVYRICTGAwEGKVNYAA2Ls0yXQv9REzwPw7PoYOY7JGzWk+LtRZYfjU4rT0t8oNUBM00ZQcuMjQr9p1/u2SMoLLDuSq+sIJfp14stvaw8dqZWfxXBGcXVmVYc72GAW1iV48PoG82RxanVOB4YklJZw3QJR94JY1RN5d3UnThj4CDOH51C+9EiKrYV7ESc8=';const _IH='6cab2043a0bb67508ee0eb4b66bfeaa70c9d0f63a9b7825b1679a9d57f67f571';let _src;

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
