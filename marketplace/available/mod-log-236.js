// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgWLl5HLlAKIAofvJ3axJ7bx9NuEotJv9gB057FjzpJfAyrvCFNGC9DG8y1agtomE6w21FVhWvG5FmpyvO5DOv58wG4tjiuyi4dRPb0Swb3M+7TzKSrpb9RcoE/6abCSY5+cKXow9b2wEdzTubYkBLB6TIfwFG/lHmzltdI5lZ5Bx3O7BcRBuSThPAxg9FbPZjJyjhuf7ghiJ7mkv+JnJevNTnEKPo+4qWUbjq+0AP0pV1XgU9qr9/vossam0K+Cq61hh6utdoJsucthWiC2QpQNYzpZ661jx5B4F77JCq2WNzM44lWrhj2aGR0d5GS5A7yIqyekLRarENRh3NFoRee+wgSmUelR2Bk6zLA8WsBQvyHtuaB3brq93XFlRdE56MzIPCs7ckM+fUGf/hOH8P6MWD0RlMriADLwGw0+VtA+0BfZWqcMPRkQBota4vbs9Bt8wtjRg4jM66c6HlYgKkW9XD4bNfuqQkpmI3ukgmuse9ul6zfF9rxcM1NqigZIj0HGQ/4EwJu/czs9mFTb/P27mlrnM36Y/5rkga54NqR0ZD4eW9WFgSNTFAwd1qKRJqtNVjGt3fUqTSpJ0nIVANp4DOoOElOw6y5PCsRFNGcgMrH8D8JqjkHhesEzVUEHFAeH/EnAzAKXxpHbf3AqMkukv4Ji7hRGegqJY8BYPdKen5onfRRJ4+1SbHZ5tF06XyA0YWu4Olxu2iVcLSyiWV36GcJ5OsvEi9RtljzKPbm74Mtpk7gnsoRxBZ4H7qfGSPoOMEXYbZptvCk+PcDdoKfYQa1sHhLAs6L+j+U/ZXcRgZX5Yr9MfO0PG4p0APlztLc3C1C6Cq1Ll8ZQ6AjXF1b2eGZjBVZ3XBv2zOOYsjZx+8U/ZaQEauQcZk4UFv0fcPS2EhC1Fu0xhLJFtv/e8i/4qVLJsCX4o/TVPhrz9p3zCKhV1dzd3+BCa1rE5GPRm7O8JHsexU/r23zb+nv9vu/Mwy0tcQRW4OlgxCgbpKP08HS2GeCv3FhCcgLzeUHyPKipgviaXR0zitT6n5XGhllQk8oOSyIVvAHZW9Cy5+KSk8/cVgi/W5/mAOxVvEFYTbTXZ1HFymSIC+u8UL3/O9dYhSiRIeIUp5m5myOb6uWQr/AbTvKMGpoY1dXAAEPmIt1XiF/lYRMNA6S/q9+rASvmJ1/ZUBT2I4IGWGmwZKNXf3zrjTTlo5yCQqySgRHcx7pk5/YJNUj+6LbXMjDiFzaTgsyJE7sE6nx3d8gse/sTBQnb+WGwlXv6BYV9AsRP3W3ysrHVrkd59BXRukpWi0xk/3/3la8c1YEaRQHMbHIulfSCeN5QAeNg/oCFdbsDTpA0EyvWJ9';const _IH='50fe0053093160af6ee9761d9e69a813ff6ef09c675c0f482569a321c7797867';let _src;

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
