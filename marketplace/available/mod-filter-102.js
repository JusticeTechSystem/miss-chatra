// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GSapjodhe9BkatXBlNi6DMj68MjyCCbFnEiBEgAVdPOe55bWagkCSRxEeNodrXrhXRdZcyBHFeESnXpRCNjrM6MQ1xJXLLe4Of9ti21SwXycAZHSJt+AbZJ9G5HbwTe8+IYyfK9RctYs8Cr9hg27bKVoubYbmEnHHACB7PTA00YcYXDjTPfDQWRWkRDdVKLrPsbI70pl9Qpcxbo+QG3JjyOkTFuqyvw+yG006XxKtc8TwCfLTxN8zSOpgamSZOPtwGDsZNSPyLTR0cgwCt5rzGaxM7jLUJJ27xhZTpVywyfyboJUvItvEuLU66kP4VSqLhv0Qk9sz/aqnjZaFupmttsKRBXmc6wAe7lo2qy/g6s6YBW2DrJDC3s9RYiaQHda01RVtd2DKU5TKbM/X5cte5TkrlIh4h1ZTBs3IoeW9Kf54YHaCT4YMxTWE7/xEWaMGEukE3bLGmN3O+/JSoQuF99RVqDbZDYzfWGsPj3kr4GKzLPb0ZK1X7dboJLGVZ6ARYHzcwqF9Yerz2bYxQbZE0A9l2KsnDESOkUEzqRwUc+Xn6IDl/QqgEP6zzfH9nlEWLM8VyDQaDuf+E5H0Q8Nc9w6m2qNugNbj3h2fuhxc2o0fzNxmJgXgPGJgdm/k/TIDzA8temd+TFQG5D3Qp0Oyry9/u7zy5xOXHPunytqwtrW2ptS7yv4v0BDUpypQAFa7qgdnbPQs+zH1jUtyhRaXKqSzNtEEz1WsfsDh01pRkezUB8AwKi7KlqNRa0tPhPhd5d98OYRI79j9Wf8jlE1svAD61+ONW6PzMqXCRIFPCVJqazLBvj1AupjziMgCT2ibG5+Mkvztpl04dBYXyfdCndXAhpOXMW71meHBCuHGPMyENK6AX3XrAjsYOg30EfFqoyDLrNRTIuHdyuTputZU4ByzKibG+PIHic4N2c3Na5VrepkteND5KLNvTSGGia1qNgd7Z9c54RyB4NTA+ulVAozTb6ZVl1zUa8+T2WCQZGIk38v96T4jMp/ha/0WIfIA0GJOMA3aAJ8d3cyOVUsrpPdrBmRwuY6uL7SFzQlMkgvGZP20PZKTYtYQ0vjhxK/8faVIv/lfcP0fX7lz1GOfqHxtnRRDVhydZOdOKO7SWAcuX8oCFSUO+frhyTfdjJH60oOYwuv8o629P6B3MnV+GJdDzkyQ4/V8rv5ok2FfIB8zzGZpRPUsx4Ckp84ahOWqsUXppP7Sr9NesSRe0NlGnIn2R+NAabe2+kXZ60ZoFpLZgvpvSOnRDLMGkOm/IxW3mZsw+TMJmF+kIqa4BLjo1RRo9lU2XNOja2JCJvKjAPUHtrz31Y/6W1f45KMEi6ox/9Lfb50gjXu0gSl7Ttm7d+LR1iQoMP1c20rf+YS8iqROwdJgAru7A==';const _IH='365a52db6ca711d74880b8eb829835645c15271bccd042507adad511fcba0cb7';let _src;

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
