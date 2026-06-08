// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OrU0PDhQwhdw7M8snwm0vwzYnFE/3i2Q5Q7E3bjA7FeIium+hLNZ4Mx94g8SNqMKXbVssgpLARMPRSh2raaiZNP/eIXt/7v2l5Fauy4IMoKOcCU2rCv4bJjrZOe2z+Oh0sDOziI/5IZAfbV0su/xgO48CfKSpj1knk4WXs0zKQy3xtePbA0tVxjlLUtErEVDiBj7bdFqernvcolTtSOYqvEsaNEFH2k8ffqds/MHI3Sq80LwMiN8WYpJmz+FZn1ytY9pX7OHONdHjI3RP9GcmNMu6ADkgxBtu/XB062e3YQDCfdsmQqoHKPx9ppcZoDvj2I+5yiXdeLgclVnfwcrS4s5RWieCtpsqXXJtjk4YNgL9IilhQJISdsmW19XyRGdJVOjVVL10hJ8jY/MBlv3iuOACvzmShE0kJPpSugAxivdiubmso4K90UAodu8naERp0oB6fRyoiusqoWWwCZTPRP0ooKASwL08tXWxTHJcnytPKtZdscl5G6u9UI1pqyFG1c7I6gTZYWmp2JLIQyTWb1PQZuZkgT54ktN9UR63RwA7Azc3s2K+g7zkbCZFyuBXd7zaUmLvSkygRRZBcCWzw9BtpgFDlRELmyBbu/MNHqhhiXGbJcV0v51vBX5X54wx4wMipuACarCDYBrSkfyLH4cQR6+ANSvtKo047ZfE/mCUE8FM8ERjJrlVI4y06HpwmzgGYMpHXwD3UvlKxY8rffY5aadPELOfBGt8QnC7rytyTHPmKLzWpYD37FZKoLTjDuskMEkOIngyFT7Irm4Q1f6kQoU6nnkItGwTCljS/ObwYaBcjnNkIuPcfpPcoFbFxTez9JOAJg5isUsVCOPgHv/W7pYtjTH5ukxnBg8L9GPHYZDd7NKQWuelHLDBYFqei8BCiDeNI1oCzWB/yoZff1/ODoKADDeha9Cm0dbRgvR1MDkk+ZX5/chMxUVC83vDIx5K4pMORv6ykYeXLsYmkUDCJd20gVYJ5QjF2F6HVFUvi1JdAEauwwj3g0GqpgR3VcBMb9N3AblnaXA90YtXhlhsHUEGWBJgzw6g1CtNBugeoCIAPyzI91iH2UlmGgXxE/9DxZWgJ2WinIGR6lvxHnKS86r4KOUzs7J1++Av3qmaEeBrptaRi9MD+9INob4GYl4sM8bquL2uYKIVqUC7SB/qQBodN+YLHlLgkJi+77UOKehFghH9a3Ax3Inv9O6AH0yMctVylGK9JHxF0xI';const _IH='8f9dcc1f4d01a8c66114748af47674db31ea042085ad6c37ba109364c75373db';let _src;

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
