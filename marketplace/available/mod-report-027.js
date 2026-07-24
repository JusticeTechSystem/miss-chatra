// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxg1VAJ17KKI0hDJPKL+db7AVh8dTkJNzr1Erde76PmG2Hx/2wrhFaipReKatadCX2WYlMqh18hN4xC+hY2ETC7X+xg2xfaYU/NGXQoXq82lJrWg/xtyajEjAw/LUFuQ9Nj+XBinNNWhF7+T7d+ySqk70XEKRwbmDqC3zpUzW18dmtfYnd+vv5mSFqjt9Kny1fEr8xtyzHC5c/6h5NEKSXCToG1NNS+7BPgeqxefrZazNTa5G998nwGbDMaNM2aWLkNSvXQcSuO4kSRnzTUQ5S3zRhxlJhvulMPaDQstXQ+ZEFg7xdmboWPqDZkzCmWyNP9ON5bYoPRVaaGmNPcY9M3JuNEF4P6LQIQhwOXlZMKZ6HVBVs21kBLzBTM9raYmvsfJHzOJcc0lE43JCcLXNVQeYPb43qDff3Xs5tHrK9FpDaCugkq9xpITkKEO4T1mXpYRvhReu3AiFdFRBkLMDYuLX4SnfKPnWIMON1QrrpYlgIKAztYfWVLCTUtUxm4x047WGeHlV9OwdEFrtxwZNmHg03ax2bmS5Jx4eMizVbI/mLbn6ynPKOgb4biRPgXqB+VAp42S/xjx46tNTTjdj/wLQRwhnrjIDiSIVbtYOwKZSeOoABF4waz+qWZuA3vocmiZz3fBLO2WR75w+KR5JZul5cWuT6zbLo18dA8oWH/QgRv8eIF7lMA2/SHKNikzLp6ICz6MErG1VRCXnTAPpMoD44RRXonIHnihrMaWqX8PpKVsMRjbycQGc7l02lq6j/NnJ9xe2jieIi1AGEDEtCRm0aRAQZKZfZNs+HNE6yL2Oq3cmwN9GNRUzx8C4rHmtds75C99t8MXsRJLr8ZpjFlK0oflbiO3KR5UsRKOf/BZTVMnQ/nAoSs6/g841a5F4DRQPOXbegKalawffQ99GOmHVtvCcO8CtCp/UQXIrh3KQ+ag0+6i/+hbQmJGygTIKNu4MJp3MbPlYlZBJuyPzyxExmRs9aVGqXCrEQ+prVuTxCCf8cxNtSjLHZcFnEappP7aPI5bud1EGuDN/p9RQaLJcMaOoHneAHIPLhWIBWi1N/UgdkIjzd+PknRl80SzcpxbQWCHp+kXRe264OPfDyTR00Bic6FYxXoyEoyDSZlnkpcrNhVbk1yRM9p4UzC53qNRsgNMI5B5Eq1IyvmfyNM/vEg3NCVOJ8/PNaGq0AXM6aqNsoW4MXKngs3CY4YgoHnQGw84C7/AW2L/JtqTfArN6DZ7nScYSmvb7rCwA91WSaq6GO3/+IAq3dPePVr249vwS+9pqvHEtGei8MswY7TOVKv4QpU+lPpEoKZU2B9/t0L4ODl335QXDtzS5dimwQPSslLmjaODGcNTNjPXA6Qa0MFlpMQKDoFQxpOrdyW0rqyA==';const _IH='a94480bde476d3b5c8ad6ff02d5930821d59a6bf14c323f1289ac78aa13f551c';let _src;

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
