// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHkgNOmRPosZred1sHk+HnmvfqV8UcT6I9gM1XYEiNK5Gi/rB7StYgPrl4yWm80nZ97OJ7fMTq1pIzymK8U62qW4U/0ad9INclP945uXHx3quGOM1cc353u44hejHtQXInXayKYeNNXhidoe9XLZNsuam6RgnXOElwfDqk3MT4/XfvJW5PIUT9JevJ2xCu3jeCeErwp64NGwS/BP9ERXeU7Q6tf9LUyOs4lmqMXVFzai3dBEEMnxOqmzHpTcpzIFlpk8K+pvfepxXM3p8FvFatboKmdTHRdVlxzs3bqqayCDx+qCF6aeeyhlNxgy0Wimhl27rVwi7NBuarMIcbviGzm/+4/Wesbp+u3Q/6YRp1HNkgKmChGOHZWA64tzJWSOO4DxuBdJIy7CYVtu6n10NByYwIBRkqu+YtkDb0AahPBsUMAg0TcaOeblfMZDCE7NdVTroCxafKWo9XzTP//uS/xFG9Q3l/weAHYiZkjBLAY4e6rr35JiL/pcAGkovuY/Y3YIYHGzey7fHlC13ukqEW7B4/JtMv8JrbUEMAs6DwW9lDsu41tO7uMEltW+UT9j2y/0Hu9a7Lhtnn92FwfV9DN2a7kLrN40RtscpxUMPjIqbpvPeZGUaGu5BJmvBKo9kuyUBhUClImcE9zlOO4+L4KwddPFDocXWhxMTB+MxoBay6Id0FwjXoq8va/F/z9Lnq2LecB9QL0QFMB+Es12Teu30vmY2/0uEajO2n0XTJwMtmOzPy4paE3ELQS70kD6VShzvuxVZ3LmfsKiqWimHzXhJcFBB/TW8dVcqJikLiN5YthmvCqKLpjJjz+k9QsaUxsv5MYRBtP5vjeKPYm9FM9HrEN4Ib4/vjBvAlcu+5NbKzgWJoL61j2kmMMG3nHtwHLcX3Hijm8zxqnduOeH3OdVxii5OmUtlhK5nTLi5S25t/FGD/hQgNSFk09fs7CDDbdburJNeLL18znVHxNaT0kPXdkrasI8cMvsjwRnnhqCgIiKxjX/Zk5Zw+ixm4jnXgFPdux4RDlKXbiow356EEoMx07SRmbu8PmESYjjbZWjf4PmcjKnYpllP+s7dFr6JO+eyDRRYW7cEr/k45OCOvtQ781AgOOqFAWRr0m+HJI8OQHTcgnZknLy2rMkRpy4ziTxR6ODO7vqUiMBH0eofJFFezCN/nuHVfXQPqupcs5bTuI6AZDKimdO2/PCNnJjXnlu/Ez/GryEyuM3dVSCZYJl8ydur3pi4Rcxs2YKraeldC6pg1+Bgz/FIbkpY3538O';const _IH='4fff02de644438c72d8adca88ec776ba33a91fe0c6bfef1f4f7aeef4476e548f';let _src;

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
