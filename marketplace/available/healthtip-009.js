// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5gPlwRAMtFxAmTEjFwrbdTU878fSAWVrP1lyLxoTBFFs2T1gR8wrdfkSNDVkMOlwoMsrC93Lvcx4JtR7iQE7c6LeTlfaj5LA/HlRe4P1ySG0TKpgwjf386eckXveME2Mm0d/URkQzRPyAdsfyZ5shlxlO6kujp4BHplCUfproYoRBt8+JdxRvO4G8h9/pq9rY2LVqwCPLfYBNi134A0pyk4xJjszjDa2WDyEmZZDhW5uW5ni8pYQ8AiSsgKGKFmOT0I06im3rBEBCQQm69Xsq6VmJzy1Ow9ZwRHls6e7LdesSulzjbxrTHDXSZuH08x2CGr82LeDisUe5LOlTvOErtnDqvtsi1xKfOOeHvl0bw9gcjLSYc6dikpo9tfvW3cfjkjWR5wLs2ogCwP/ZkWRY9LpWvqSxon2ZdZIBgEbRS/r2O6AiSMpdmnu8Yg6qpa3XBIUTy0J1l49m1kpLhfbcmr1v3KAq3DS7uKWanyKq3E1oha9t/YnhrmD+82cdQiQigFUgGD1nlkjKo60TYXu96ENSYuicb0+EkxAdkNBPchKds5kc8z03J3V4liZ75r/hKY722p6gvUzMlHE4m0x7v41YrVi/MnV6rBhdJ0uTJpgc7TbftbyxJ5HwL+HqrxthCYUSxhO/lOqEg22GgOK8/NGlxvWXrfBMA1gxWBijYlY+iN5iwtDLdn/igFkovl2Dl6jruxdj51CwDuEFNBI5MmvGP9cHyJJyiluncyzJX+JWPiQ+uMoEWyw0f9N5TIVWGre36cxZuiD552ZTEYzjHuSAwKtMJTbH2JlWBg5yRanVp1/u0310xR51b6e9bZnAv2bFAIf/jVZmXhlSEv4jyJa3zfTlYnOGl1vyfZ9VZnWKrlGBa+dMVD6M51FMpVbOljcva/N7FDeFQDs0DjZSVDW4t1D4JxzKUTmwjdB2ZWF7rtM206SyA=';const _IH='1f7df04546f5925bf1b6d1ebb7e2bdbb8dd2d565315f1dfa526a775ed9fe9147';let _src;

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
