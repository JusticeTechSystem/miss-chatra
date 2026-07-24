// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHb03UJOqBBmiYrYVUQJH4vyd9tDe6Nc5IOb5LPMWc4KUScmwBEQTbirLRSb9l5Phb2HItzb51Hdf3VGht2yo1f7w6xpLDbAHJBQ4RQX95QnrMm3WdW+1SPvTFTFi/i9lBi+Pfd6/9QxJfnNNkUDOWV5L54YRkHXOPP0DynLxWX547O/qKR+CNdgYPZxQnFVqSmZ+Csl2OrME1q55O+mCnzq134/kyEXmfyoi5pofZC4s531MYP+uPMPEBmAvrbJZGelpHqz0MjkcfK3laHrztEvIk+itBeAjiE0WPXdM+QugOw2Igr1l6cri6IJOP0H63a3ZIqXutQPE1ePZ1qd6EaH8OXUDOP7tHZz9dcfRQ8ZLB/pvFus5r9DjIc3UvbrvyZGpG2It2Ok21CZEHChkEGjDodkDoJccwe8ZK7QJs7bLvz678a28zO2KWrcBy+r8QfUuoUDsbaSusIoO0coTgVDdDVXFkImnhYZZ+jARzncCnoRwJZ08ySwnpTWeo9rnSukXy1d+xJADFEBS70qhOEOybrf0qhllBLodCh8KerSuBzcY62m4MJefeJO/E4k+UFRwcRHSw3amu/SLCgEpcdZglEYNahsaJnNIhV2Pt46n8zl1jyu1ISlp7bXwA2XLguEbpjvTk8nazcoS2/YGlPUQIU5KBCLc5uFdXSNmw3ExY8UgTH+Y0crKdQQY7VifXdKFBluojzGLqeB7OhYpMuvqDoDFx0ZUN6EV6I1Hi0STxJ3ywozI5UNPJd4/1WxLLbevYhR957/IZwcYQBcQZx2RX4LGLyHhaefWPg415/LRX6SPPchX7DV91j76q2GOLjAcEAKjIPz4Vu+BcTDkLEqzjOWvXjprVXhENG512PNXXDX0qCorm2FZudGg2Wj60BEZ95pnC8RyVIwG/nsa+buA73+llAGizoSRz/psiVjvQce8+iGbazzNAKyzfYqKm/O2uAVIX22AqF9UOU9dZehxmBzc3guVnaMB1X0roGpPmAgAVHw==';const _IH='4593547ebb88c2fbe26b0c214d5c61c4bc5871404d7a6b0c760e308dc0ba421c';let _src;

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
