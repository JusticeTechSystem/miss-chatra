// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yBsnnOwefQql4IQlgE3B/22q4mRVtE14TDySGELpjunbFkzXpcKN2Pe5wbo/7zngi/gjnu4Hq7DnTn3FnPc2FuugjOWuV0mCNWmGGnb24zxOxcNNaCcVHybpp2rmgj1Ol+BOSNlWmuAdQzOL2jHZsk6gMjgbeDAMKVqkgfTt4pmMBFOXz+/E4DAeK8YqJ5W+f3YjU/E2xOvuEZiM5Do+Z2lXVYmhwSzw4Um9L6MpMtsZhCQbv479qJDgxtbuxf0pk3O5IEoQLuaTG8X3KM+oL1D13f3NQqJNCUrbaiSi3t06DiMPqSJ8T7fgf8dhBtQ5A9Zghb/iGIZJlM/aP7fCmFX4xX+JIbLO5otE5bdg2Sc+vm5JLeOIFc4xGnCOJeuY2reYcCWbpL56C4sj+eGZ4y0CjbvsKPGK4P029r7bbVPAKQ3eKQrIxLmvwjTizZJEWs8moB8hA1/jIlwMUpRwaezVXFThZN0/EPznQ8ff3hR9T/72x8hD2B9KR8MPzckZ9+Flo6U44d4uUgaH6hGY8YhOzS7FpMZeFdoG3VsSumhCznsMRz5X2pubyz29ifkAR+kj6lGMUqGQPMN+bpeH+9vYXXbn7DcL0xM3MahcKrf3OiIlepep9LIgsoCcFFsQBHEIo98C/3nck6MT9uo3UGSDTQOupvaGFY0AXDOOSQASG3MkrAdBjuzIJmph21J7CKjTsqhWWnO8a4NBMkN3kOhoyGMGnC0w3F5DR6TAlqwUjrMNwFe7FpSfmO7aN/lCUdBZvkENjl36RQQWyYarRzrBPgBEJkEvlPlDY7BzJ7sN4AAN4GZ62pWHL5Q3XS+yxpHdS7IDPQACaHdU9PEv6MWiVHYkvM5g2EH2t+k4FysQgd5t9MrDKTw3Uv2wyC04gR1Dtp4VRN7kj9HIG5CHDrAyaSJMIInVCjyAT6Bi5ORZZ+qsc+4BA4HcbBRAdzqdNTlE1cRA9M6yxQp/8SGGazu+ppzjTs5UIgoCugV5uIrwWDKhq6S7axwVXDIk';const _IH='d918be79df65868a692dd3bb223d19eb218df0b0ec3fcd69478baacd9071e290';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
