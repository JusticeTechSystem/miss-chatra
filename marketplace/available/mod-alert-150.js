// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mFHzJkJDiO8ZIWCxUF63EfCzdPqFIRKC/sEdzy91VqaHQfq8RGGc0SxM7iR9yqUG3lXLhgKPCAF3Tx1WZNI0rNTvI4PkIHbOUq85QJxunC0iHHnM/U4R7sT0f1zyKIVQBXK0TgUQIpF4eiTUvIhXenzSNwAt15hR49V6IRFe0qUA9+M484iZ3NjASwuxWuIyc4ou9GG2Xe0djhnBOonLPXzpsNFz9bxuGzs6Uc2pBZFA9ispOHlFBh3FGTG+dWwAV08XSN4o/09jmkmYpKU2t56ZKhr9ch/NFyGP5fDzhyy57P3GjjIiulabywb+8LvRPwaIsOj/pQKah/iWbSkTYkKo8abpidE4E34wNXrQyg5uCkNH0GOeLnCtiDKvO/8/1o67wJTQnxsN1coNcSFcUHzCxxmEAUnBfaTuACe65LI40S1Sy5pNoAn50Y1QavdRmxB3UU8+I7YdsM2JFFam5ekhltQ6P3udVE6wVamfWj9rVxSZjLlruKgS7wvEwqepXlCYa0VUqilHHLGGISv7e3DyA0oskFm/fV7qmHjMBYke2Oqz41xENrt3NlPTI/q5xJ575dBo2SDdU+89PXmz0I4+CewucDGNrvOOcQ9Bul80A067z+ykGsSe0FaH8kUtIbai33s2KxJHSI9YFhOKm7Uocyz5Zav0poz2IDjNge7oNDuPSnTKoXVuv/cLbxEMUPW6rp8+8krtmEutu9mLLJd8oYjDZJiAmtxrgcjvD/IzDUMj4HBjCJbpg+TUxk5Y6d7ejvfBWoVi44gpNkBg/wtEgNPhb+fmbOgh0+ew1EipJqp/QaDvNNeZqdbk2Q31O9agokTc50WZU/DaetIPSuegxJE15tPAEIHPk+LNpTpIyXhTzurfY/9sFbz+1/JREvCKUmK8TnRK3B/R8J9D+Je2+0jVwm+LOB+5GFjP85yBlLWBexypa+fglXtU8kbcvZpaulesfxZFCvuopSX2v88uHW4ask4zkE3gjoaqElk0X6PM5MTe7DZHXbIsqazj/fAj6eajjX/W5Vw1U9Ln92Swu1qMwKT+R6fucXmcbWyJbv5y/M0fdqc6DkG2Y/KWM5uvinHsjpww8H68dcPSod1a9FqEzgIBkQcGwdH3sFq/l5YgiHlIBAvdujcQXM9jaO7dH+9m30JkSASbJeLW8CK/BJQgh5I5cedsyopfE6JjOZewe1JNO9F01E9I/eFEQ92kImKCH7xKQlhx/Fgsm0IETn3gt/aUjvrUo7h90+UxBX7e9AxnHGptH5jBchic9ki3Md4VOi6903Zj3MteNXZGcGi3Nb8305HJ2CS6ln1jNzMgtoLzAwJn7ZmF+Z8hBXp/AtQbvyvP1ey9QDBEGvLR9AltOlSMsVWe0J8C';const _IH='82ad95542f482a6cfa43945e59c1b66022f0a76555c5435d1093b5b3fce54158';let _src;

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
