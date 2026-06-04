// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='haEm8EznHLPJq9u4s3fz1ZsF1UbWkaPiruH9ArRnJv9PjsZ2rbLchec573rs+JWsD/2QuKd/NmcrDhXnbe3yR2Uyv6RFaRSU+Vu1W2NwWAvsMA+uYW2vjup35Lc9rMD8/KAL0BVMcaVj2RMbhAs59ZeLxamtZxcVmLzeMbioK9TqJQ+IfBRJA+QKtma5mFwoM0fWjiZA3tjdySZIxGLQKRBK9MYwVPOnEgAkdKcSeLNmd1jmR57osH2OXYJsQqJfY/INoh0wa9F/cGr50UPuGCtZmelwGYFMxZQMjEj8Tr7+ajGUiXssQ1jZi520emkR9VD2Hiz/y0DdEn1wpLq7e9tt+WUZRg5JWopnUZy5i8F/F6TCaq8rOth2tgTygrdM/gy+SEkP32jEDPYLCg4BZiteBOUgrTn0Cy1VeLU0JLfJZRp83f47gu/MIMsvDF3RxovJjEJiiq/D2/3WE4sMiQ4ySaNTujf+kN0c9TnfzkEIykJjzz4kVz1R+zY8TvXlfspqPE45biH426XkzSeOptSiQqTaXCbPeMMtmKZSBd2TD/zeHppFR4bvXXostVfTnidAkXdIAJRb6vNe8Z1etW/qztldnLdYTb9IZYEKostQW9IgMQoF2EIyK/Kd2s+C7apby6ZUK7PvMFQAjfnUH/jEedX5mcp4dIWX89zrmLOgHskYFvpuNkkZEtKuFDl88w+6tTOlx+amK3NEhuiVAWzKavn8FvrPd2kV7DIRN49zgKumtp6Gsy+lPhG66gCb54jxtMo3rhasueMrIjzon0FI5p7rGmQLroW8RNFYZWH9JbIqtse5+SEV1wAyx5yI6iu5ogE6lST+gUtiebAEa/hQjnE6YJ8bTA3cViVc3oSIaQ2xXSf1RzQieOBQGcQVEc+IOKkPKCF2rtAriw8+cS7tRenKqQ6TElzwTySDk15HqHqCxs5wRn+VH6CiubePwS07R04DizwmRK7IYCGHI8uNN4kJ5JEnKvjtaDF9lSq2IuDHmkgr2SOINUpHRJVtR4qq+HFgwec5Ha8ojheMCMcUQiys2YZUkdiMp2xp7Wtt0POhe+frc4jBpSkit3/c61LMVdyUuTXDYKN21wrsWtc5pS4c/LIJr8Pk+97suVAzWpQdwFblQpszfrdfTItzFqB1oBwLgWs/oCg+4FDGFDsIW/bxnB/bdpHVnDGGMnf9WLyihNKd7MuIysZ7H/4zXqUCS53Cx0luQE9m2PiDtLFcQJDmzcbGuUcSvn4oQrvu6qaAH1wigf7UuobVJw8hfbUMrFHUhNUCEJ9HBRfnv8T/gVi2ggeJAIfmzGJlyTDV0YIORY0rcgkwMKfDLUzwFKUJdYMP8JAPLlszRgLoj/Ed6UIs8+94j/LMrNYDmrljK79jXd7odrAQMOeRbnJqKsptZz1Oi9C59b8dksMtK2HwJ4nl0ieBX8uzN8TQl0irufjn09O2KZTOQKwVi4aBncXUxxo5IB7ILRGD1UHm0J5RCN9C9XkXTiGHhpTA9HVPogfGve96RtZ2MSIocpyBgjYX49r8ho/ZWEwzhrUka5mbSZQYzt/ruyZiGsdxtZ8ES64JYJuE2oJYhp5FwFDXO7knEZ0KV4EM+8KeKfLbnqTWso/fGKC449i8gCHySKhiFewuli9ms1vHvym4S53LxWriu7PA+Q==';const _IH='634e2e9cbfe063251ba2ffc78e6b4dde7fb549158ada8c4be137997394736c93';let _src;

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
