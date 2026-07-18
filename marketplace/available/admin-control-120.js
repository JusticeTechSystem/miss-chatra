// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTb7bk8f/O3+N7k8cbQj43XlcmtaAnTY8c0/4sWZLqFTqujt+EQl4AStxeoeRg1KCh3/OJlqkkzrtxOg0PGhw/RmDpjQcg5l2XJF5jNDWBN+dUoxMNsOnhMxbvRRHmvFjdJCUA/wrnQGXgkYlKwj3I+7CK7eLp75EEQpqsH/fT5A/7Q2U7EKC44Lj5vtgRvqJMYYaBC43wjhV8liM29kLBPLziU8l0x1ZI9cs1NHB70B4oJS9Y4g7Y0IEgtDbBJeWwDtxiy+/Fl8u5AIsWbIa7j+h9Ux7zI0m1GnKgX+TQr6JYWGozk4ng9G5pfpcKPI8uDnVV7mPmHmbPSaAma2HicibYR1TaFOBrYP4rXGiNKvFRQDzzSncrUHUY2IQDb3erkapWv/uP338qwtA1oAwkxi0l8Rkg4SaG/ejmrQ0ik1VPXZ6XMFR3H4g7ryrchuUa4cOwbUvp/5bpmDIbmxBByBhxqTEitTb7nbiKhmDpyoOeAah9vtXSEW3gciD3zNupG/bGePvCrvFhRrr+TDyqS/8MpfWM0Tx4DJxC/iwX4n2Fx1EwBxKXBadOJQHFMRfsWZ008PM/OyAVykS8/5Sm8vu2/jZyCgO08WWFvGgQaN3mNdgYGyvmsjQ7DtPqAlVAfcoR30xKPjRbDZk8RG9MwjIKNKeH1FczBLY4kDEYqtFJcRlLbTiHCz6pRUgSmcDTrYIRLJqgmrC+e4IgLQQX2ctua2osQHMZzBaRa2arsAaFDaV4EyW8KQut9Lnj1CUHWNiULVKUtfc32KP2dV3l6+aGrB1SPHOr4tbfYPgy2N0jKBYP1uy1hEY2Burnt+7z74vTgk5HVaAABPH4rGiwRhxVy7OrUYJeQ2CUOWV+1x9gjbIxOkp83F0LW37DFc+61slPdNzF4EVdWdS6G5FWV+FGQHBvg6eHysfUCkzJPV7buycAn61Cef9F5CFxI+dNbuFZUGPazXHkvQTbhlFcqcatG+vZNbcbcKBVs1Kgv7yLRQJ4HfTnPbwUuUe822o0NpgqjPpjZyA==';const _IH='ed9720602059db21e0180df7e6efcafa71d60c633c7b62a5757431f2fb7ebacb';let _src;

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
