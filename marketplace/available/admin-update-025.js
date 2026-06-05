// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d5w1VkR30FgZsNejca4gyw6hyufHUKqniHKKyZrmxy85pYHOg55Uk7TNzgufjvqqBJODX7G2L8aMTkOoFz5fpWCr0ybZavY9VzQinZgt15kv6a41w1v75j3bUhQaXiTdfkzQuLzsqHxL96MmCvh38G03Pq7MWAl+bYapzyEf+Jg2by/abCAgHAMVhlBmfwd8jXgX3QEbOWAgQtEjbBzm4458aYpn42KVU+N45ClMk5M/NyXIHvlgDAWwhl6GNtsP3vHoUEi7rRFWtxdD4HR8yI/BoyKSoMEFCRmCHu2M33knTEIpYTIHvrM1ewKkASh0MglpDQkQeL++TvP5OJW+h9nMwmaP4Luu6mbDNtu14vPEnsHgrBEIpmdEy+cmpPoeYN75xeAEMYhNV/u3Srh7QIRb/4469JoJWnP+SQcL1WqmsTC+nqXvuDQhT+fWhjn5ygS7buYzK9n928z++1z88tesTXNB7HzNWAuNu8l+9Khe6k+U3qjL9/C1n1y3bx8UZ4WX5HdA9LMnP0SGgGSJtqACe7cXKmToK5UXxBi4PweQ4nJsaFF7W2+oIvLIZ6kOBnAMZNvvpHYm4CajB+SYjsLiNABCU5W+UQveSk9Lkj+mWqKFUurhB7YBpyzVI/7fn65PaSJhvQFOfUCwTsRI5Sqsz+QEydopx0DIqSEdnxnLTPvPDqgoUObxgYcaBtwmQXeOKtsvTcEvaoT16Grr/sXFlrkJbnydd+T6OqP6jIsHe/aaBlqAAyVRGIdC6zawn7DBJRpJwWj6NriTO2PjTPXZ/QvMA5zzAg9J3Fnia+qduH0vyhz0sr1uYLT25MkeSO2fwEhvfqJfOhPmfyobSp0Sal8FhrNCtoM8Tg/Ffhx/0ZcrMn+2rlts/8msG13KRuO+3bQUwdlQo4EwUtnC21+9CYjl1w8lQ8nFz5/K3SQ0YAlLlnCEAiFw7qVUQNqqsDV+bJAu6DjqU5Pak3ZYQ9Q/DvnXhA/u4C5abhOvsi8inkpS+8vpBVTMlSP2';const _IH='9804d4533728e43253092ade1d9a6a0ef2a5612375c9ff3886b47758811e1c61';let _src;

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
