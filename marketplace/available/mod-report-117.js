// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9eFnUZtgs2ae4jRDDwuFr5JY1qRn3s2MdJnitGOwC0EcaEPULU05gZExHmSwqYiOAcSm3sA7TbPKRlI0dHSHn62QymHggR9RYe9+bHHPiCXrx9FHc7PkmWtE2g7AlOSxxDvbbcc9yKRisIqefjSUbgYLWUHroGEV8IoDhdgWe2S0afH1WIsmGeCIwmgvPjsyqXF0524waz/axR2EAWTzvFfAYtUO/0fMtw4Vaw3eDSa6zbS2zMzfE0xAznK1RmgdYGzxRAnZ5/YdDFDc3mufr2wpfDNJsPZAKsOUPDLojxGJscm4qh5eCNltnb3SgiLYKIWTn01KKH7Yw4jKH5PIktoOinXR2KbOzzAfwC24JToVwGGa/tkeZx4YtCZkn9YkJzy7kZxYjxJIkpDmmy/tx5wvJZ8JKH5pId5H95qD9IJH6b05e6+T/CNf6ogr6xaC1ehr7wloMtyN4sLxMGKRcb8dA7pY8dcUgxfjTof08q0oRSE8XOgsM1mg1j6rsnOUev8ru3PMAaxjM+lXdgkaTVTl8Kv4LcYynQq+Qqg/xWpJBKYKLQHQYbkY42UaZbqGswgHvASlTnBV0B0bctnDzil/wXR0ZaKZSoYANCQO5ykDxe33/tw3iIiqm0VYMnVnl1SnnjwjfnAgrJJuNJbjVcy07gCd3WhsNK2ONYQihaqkqe61i5X0tYtS3xaEQRMBnNsIE+bScuqUnEsq2ZeMuaZLEyzmj9saKh5fQbjdU79orNtzCt+4US2UhXrvP63Y7y4A9e5kocorm2qRtn60ER/DGK1rvh0XIfrx4W1oVqTzHrhnsocoirkHiATmPh6/7gzP5xSAOvEpRqvH2iAKNCoWJHPnv9bKdcCj/746DkZNP33GeD9zku2Cgf37EfowRcCxASlnHiimFzfSY8ouga8IXgFFGkMDAPWwM9ddrjz1HKGuvb1IMh/m7NazOhkEvkAPltqID9EZidbi4YCUF8WVhwao0Cwq7oCtSCnyxe29mW2d4mCJkpeKkz1nCFPbQjHJp6t+r/Ek5o45z7dtf1s1V6c9gfkEInhaKqIrsPxnjoKuhf+Oa/8HbMYVJri0Fnhl6OF6sxHSGY57tVCfcj1Lr4jQpukzGeavrvTBxI4fUaOfF2rDLhgT0K9kowwXUf+zYY7WyH/GMe5hXgDQieeYO7RC/AToW5F9wpltO4dHn6RjnZTJ4H28E4j6Qk0ZRnYScG3KDG7T6A+pdHnKOoTa2CV3c5fTkZluD9uQAb6sS9PkJNk/dCIom4uXh4xG/dtzAfWmrOJiD3UJPWZURslH/wWsjxCxQLfXFzpxr9Qgii28T7ySc+BFlAIfWW5Ksi6TfxVkTR8lJ2JERRi2IgFoXvNdr4AeQNYCLpFdBsybKBB22TO3jw==';const _IH='22ed4293ca7f5952f6a7d72807b13545caf382e1e658acbd0c5ad76d690adfeb';let _src;

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
