// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LFCbgs2SeDirG+C14yPU/8XdGaockdrFe4FsSnoHATEeQv6BKARQh0SPk0z06ooFRXDq90wogtn9d4eCmV23mIWCnRQNgw1O2GJgMOON5Zc765R7vo6uNbyp6IeRXcn1aIlrSl4xXDYh7WyFalZd4hJIvW8RVa2GR7y9dWlzXKM0bzj2sQENE5RQEHd2kECzwHHZlqGSeVLhUewZDlCTjeJJ/e3EQPIO6eIhvGjClljbyKD33DWbFJV33SPFvNNnnVvWlUL3qfY0OFOrbuos4eDOE9qddQ7ek+Uj8dP+ZLxIxfItGCp0I2/70qbf+fjuFPh4SoG2T7FPvp1WpkqGY7U1sLYETmRlQEPmi79O2Cr6GYX6AZQe07quZDTmz4jGYkl9/oPAwDxcFowjNtuTemK9ASTJgjx95jb0JIcb/eieEToHXWLeRYmPzZy9wGJsfAbJmu2OyGzoa8LuOI1qcC9O7Ch+oRPz5u5CuI0G1bp+1K9mfe8MW+3UhSajD5KxRAtXotSIBZ8uv8cNLBaWo+GuH9xZLQdScDwvI5eR/ZKY+chNcTfYcRjnDqUOlhlJlN6YMcHsxadOiHk8BKzJ1Kbas93yZ77KAg3CGwo+rpE67vB/CfQEidQK6Eelk9hbnxcw3RIRf1mxn3/rEuJzUdAbT5kZ83+WVNWT2U+ekIm++9I7DcbkKMgqJLyf5qvYIPJXUfvxm/4ueZAyzz6MYdMgKYw6jsL1RZKHR/0MFcg/AAYXPVfdaKMJqD3ix5Sk1SjVd+l8aXFf318e32+Hwngmal9BKLOZj1PQkawNlYRu9KAN5ppNIifWGlbLJx40ZdoydG9ti271c4ESHeCXMxYYcPME0HVveWla4ssd44cVy0p+Ap72qzjsFsk9fDz4cS3kc+NMmsZ6Ys1B/NhDNyC5UOsRBNKt14pOVjIwl44ivHmfXs224b0zjfea/5kae7jXdoYiVlhewPKS7i0mly2SCn/I4N+tFXUKLw==';const _IH='6c121d7dbf2e885d5db295fc459cf40b342278c288db48f7415759c10df9ea6c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
