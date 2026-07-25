// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQN/zsZ4I/jOWC9dUgmdxj7PMVjeKKil9YAHvFIDDgutWYSYPfTHASJErl3mnxofIlfth7iRhz5jMz1Tbmom32t0QdTNNdwM2JTV/v9ZGBsecYkxWmYplolnQGbvRvE+T3dGSN/UWQTkBJKdFqhcMuuydjl27lU/IvcxIzEjgXx+G/mxAJQLhTJWxUQICdnrPJqTAUAI+wX6GfOU4LCNTa6wHdk1E6vBkxOfJTDsnG83nf3E0U6cWpAUfQdbAwcuKbXB2YRhYSmfDPys/AYE2qbSqceUzti4gBGaub2Q3HA2z5nXLUBEtR/a+SDfIUcnVxduYG4l2dEJtL5I4DVPgQPRj/X82U2zHXghE6dKVXdc1xow2rtpT0DFUF4583SUSO0EzLSJPQu0smcAA5MzIhKzRX8wW2WzDgX2aTyHPga77Ho21wys0BQ7F3/snNNJjnhsbFui6TfquL5x465DqdwZJAfe9OVVHWkcPGxIOA9IMCmuhvwsg2XXWX0CzBZzlPmkH6sKLiH8/heS758YeVFv5p/sjO6nDFtbFnN15xnQwMqG/bBkY7jgl8Iv/pNqTty2cnuwl3i1Ai3TCkENNEeBleqetkZb7Tx9pkcwlmXNiJ+wM6Ty1ohmVs9ceXbtKRYRIfZ7qpML0LHH6Gvqm/rFpy23PxTeIEemcpjNf28YBjAcWYJtL/yya/1hxt0pFGbovF+7LkvSGnrhPvX/e2fNT708MtplDa9BNn7Ncy1PpibagcsJ8jctUNMn3zbfy/HRzhshkN6P9GkifNZBcseBobgCiXTFN/3B1nv8WMZ+m6fy7fceYKBugRL/XRJz3ySL86x/ds0ZnkN9oUtaqG1vnzQuPfvWBQx6MSA82gwPFgn0FUGhx/dPNsudSiFqcGCoL1AhaCZGMb+wXNhx0zG6GOkblcqZBhJsOK7xQhESXuXhthYbUJNYVZNL058WwlNimppR4uOq2BnKyQ0Mwojd+sUMpkPaJkvVCa7WT2y';const _IH='b74dd66574f7a5eb4c8fb679ba278113f29337468b8b47a771ec84116b7e956c';let _src;

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
