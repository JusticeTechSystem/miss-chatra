// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAkTpREhXdy4C/1sea87jsk4QQkHWH91zEZVFR6g6ZJ/+ga6ohhdvW42C8W8gCPE5lVrg0OqPtGjjVSRSPn8GgKSlntv++1fdjmMT5rCcwYTE5vlpAA7yrIClm0uuA5TxrvK+txxnffCEJJELWbq52wfBEDvjQyEk/ePB1be/VgqCnhnO0iiBt5secs9MzTLPBsDJc+VaB2WXbhhS1YRkNaROtn0GdxKV1wBgcpA+N9gRYEj5eY9V9JtUtmlvCJNeaNkGkF1MFTDKKSYwQkVS0uF3K7Rq+DWBRjSgjSFP9QIRA936UIGj9znpzgd5VxqG1QAUVfqBWpz9KSBno236ZwnRQaxynCkFeKNAY2PU6B1wQsr3uJ8F2TJ9F2nM9OxIg/RHqRKEiOIHs3S1AzkUyqcVEZ9/YsUTBukve8t2FluAfCXynVVC2Pt+5Ttcvc54TyKjuGPXEImVhdYeIS1YFc3jbCTkI9/7HQcN+YeMezY57bc6oeHuzdxSHARZBhgY0rwVVretjEnMGuEn1rNK2g8Cck2nUluwTwlajX7TEX/7ZgrXzKOPPwk3GG0e4r/9VO5vtLkmN6O/aZBCaDZ6xwD/On0jjbtOYE9oDLM8q+0KuNTzwzrbU/aRCIfD6PxD3Xa7JqS9KHSDkmryPSfna53LVcIkoP5oCCaZlYGEltk4arWa/e7XnRR26Wg3a22bauBZBITB09bVKeDgjMiUJPhr27ITeOtLozToqGyWcpF8SUKqwIQ==';const _IH='de409bc1a1b670487a9925ac6ab38855f0b870bab2ad575dc0f8f67f99d9bc12';let _src;

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
