// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yugI474fPXLJpl72ooBCX2q9dn5W3urrWYEGvApBuC3UDr5xeCcYBkNXub1Oh5ON09L5HCrxXxCrLRwz66bFYeYzOAW4DwYTm3QaJ7IgMcko+ejDkCYqoWGvfydw/HVIKYSZnLq4mxSiXWsGDqf6QFu9X+xzgcJ4UE+ESmcWDCVCKhPiNz4DP3bcAlHApDBd9jAneYuJV3bYdVaT2KbtSJvmUxdSrYeAjO8O96cG8wmsgxtTxWcVZv+EYgNYPi2bhLtgZ2u6FhllcDPcSMLp0MdYyxguCPLVgGfPQxuzwJXUwH32K8vfWAosbPheAZHho9dRuE2VYUuq3NPGFPpSf/e4C9kEPhdpQZQYp9wu3tuxx2rvDL7fOLGDHiT9LxH8xOkoN2IXiixgz3zs3Y81KBbAJYyk7Q0PeNEfKSqvcDckaLGA9SsUwLyqsrJqpPC0e3vctNEE00v5Bxw5pB07W/tZtNzHUSlsLyxu2LhQ0aVO7kieKSSDJcLzsApZsIc1GWGXZoPR+LZblaY8Nbu9DnUnCEscXjXplg3IAqSVo3wioR8jiVH2Uw1/ApsBMcHXjboV2bHJ+iGpaerlNPCjk0GafT3FFdFrCumYn99suDtNtFMvZnZmo/NHP3sAfNGonc1yLHDwoer79ksuxQkwDBAccBtIZWtnchB31i5Rc/MuMbJBWM2lO8Ai1LYSondkx98VPKyPrreIs/txk4sbEDR/bAiTRJsTi5Wj3Ur4uN3cRilNgckqJHXAkeEMaWugrnAFoGrjIsxSHU6hKdpHzlBKfCZq61z63/7JRYeD+vSDPhjZhhXWM/PAM0f4/K85VaVbyZGqh5wN2kDPo12J8JGQyUrM1kk2FDpQSYJma+qIWK8v6b3X2dImZwwwwclkiK64xDW8QRm8Ifj42ZJI5sVm5z3Kf8whZtwM6KWBHjLU5KyBrU9Ub9hO+TLizMsEDB7DnhGKta+kxN/DfbjldmdVkthqQuMOmOtFYrO5Qc0nmBKtIh6ztnqc7xOVn2Vh52KOq0A6PkCh1/woWrVwgz2d3n0/YVzyxoFoFyyOvpT3nLtQj6KqOlHbXJdASEDP2v6CMnfdhnG5100ndy+jDE4JQxznQu/UPUJgv9hDrsD2ejjSsglgK3LvvN9iWKADrhXHwQsJvx5fNsAJU2Ee7CjQTwCCFsqXjqGAU5HXBV2LGqxbnX9NElwdLvQ9CyjJec6G8qtPHQ7Lzh0ZrGxF9mCGXA==';const _IH='e7bff5c2ad3a1b66d12d81b1b4e31d38c958b35459fbd1137c8e82bf992029c4';let _src;

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
