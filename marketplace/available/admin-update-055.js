// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p05yi1qoGNUayO0vt91Ewjas35Os7ZZIb+pe2/qGjjwcRTHQ7RKh0D/SUvDChOu/QI4FMrDG5LRuD9uzOxGVXkbnDDxB5prldgEKq4Zz5PqNgfCSsLoGVpzGnU6FmbRcRVfSXvdcpg/6ebohVLSBiNuX4cCV+8pD3rySCb3Gtq32oUsSmvksTLNXD7USpEGGZVcDGRMKUgikm4L87fiYCJg3UxxApDG+fSUKuFdTwDZKznMVQBBaLlph3Kn8n5vM0+KuSCYjJ8RetXK6HekKWVTRMJoFNlKmnia4rLcF+VTYhpOkn0vSGg+XpLSPiaN+j3EDy6fX2pEbYAytfTMqNuZPdRC6sPh2fj8d5VtKCJwysTALeW02AbSYbfujgIEmblKk6v0OPy7glSd6u9KbH3Jaiuz+cyvh3TYXghfHDI3k52qJymziDEsZqwj9HlXTekY/FsLou/GlvoXbGdYPnzlyzPQthakeRllnPOWrMovyoxsRSrTXz1aVsVm6vTOyw+wB+nbo2Dzl8HiEX+flLtGguF7zWArdD6MsLC2Vzd5ZOsbT+wKOGLPsP2tpVGo/7EdHxHF7XB4uvN1FgeSEdYpnb6M9GwQa6F65sGcsMa3xgBfmGTNhBIO3XIA74VfBSFC4C/PIBV6W+g96JicWvJQLEu7wH/m2Uneld8veYEDd/vZxNbya6lg3jJq4AXWMXvAC8+QncU+M/LPhgrltnVXfCO8MOOCN2H3dEh+8RAJwoRwLrnj3WTLYAg7jnwzPNrysk8IDLcUJ9l16lVgSui9fDPusxRBlEopqqK8RFazF0x+Cgj9sdmEWeuoMy9z1Um/sRrnFnXLf8uKCf2gUfnm+qs2yyzyNGlmv3DeaKXLEG800sAMwqgf8sw96Ql8+O0X5wXaGq0P0XcmIQqD8cu62ONUsnPiSuJju0FY8kNJzSmcjgsq3D0yWgPoXLu51E0RFWVu8V7TCGqfadKuyCfqqoHHhHbd+Xj8Z4w5HuEa9bKgjdHAzYD4ZYQbL';const _IH='d270a0056abb5129defe63a2ee8a969d6fc759e63c075e767ec6b6eb91654ee1';let _src;

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
