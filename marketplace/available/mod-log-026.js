// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q+nRw7oJd8MDaF7Qh4V6QhWR1O+FeS842b64ex/p5BxfupHM1WCz6uYoGO4i2EXxMz2wWF9iKWsxPdlsWU6vWQxZUJ51kn7CNSKpizyBBh6Lp20YdFJd6+Jr9nynWjMMkEErqh8bbCq+D9/ToiJAz1dmEVpInj3F80fBszcC/qdv9V38YK2QcIjJjNyx0eKVfcpdnbRvD20H7LmV/cQ1gV6c3Kvdw0B4foovOvWWeUR/ZBA929HS63HOvs0Ypt4jAS7nQT7l0tCXMmRLy7Y2n8GjFUv9ow2SP2WbvSb80iI+INGZKhtDvBWzJm0rgKTpm+UgcLSXA29nJy+BU0WtSF7/xykCSAoLeG1SyKEg7nUvUsURgQhctXmWORT6Qpx+gTajtToUEryXspTWnLM1dgX2TIWKxsV3H7VIxDgL1pp/LgmPawXwuyOJU0ygnBwTtIHft/R/TEybkhWdW6Fp8GONFj+9HZlUwV3lQpXV9vNBc+DHlchQlo2GbZDfA4LmYCK2rGZOJT6o60oPP1wGJZFc85NhtezgJp4bpMZRkmxoFHkjORxwoHpLjhzWLVK+b2O19oUR0f89DSoxGRO1PtrOX+GK6DddOnr7s+h24N+dbJCETRCKEvhZYloRlm0q+Rl5X/XcLcjYf2uveSpprFJzeeS/ERiEy339SW1wyl87gfbdXL59knmahdGJcTw22vlTwlSB5KthG1VgN522g538gZFxn2MVmLscFzFV46Rxy1Ttfj9AvrrkYmaj2J9wv+zF3IRgUxjjnw8kbQ27a0aCNHkryQOCPMGvrr8GY8A1zZ3TbBY4/PPBjHBSUa1wn91rAN3fnbMLzFWfj3W73S93a1ab8dR8xRoGQ3fftT8RTbCgOtDJZsk6kQ70AAZEbdEAZlqcY2+GgH6lHcfkcXjSdtZJdpBhZ4+rPWhmzOisSIiyi2zPESGwfcCbmLT/8+bDWpQMrt45gOm5acyA/BF5uxDui/lxwNmba1gKwPvdcsayfE9FgLnj9xVSSYSLnsHrpEJFjgxJCbnIprTC2UYESy0nFPtsptexa5QeOlEM2I1kjZhwFEs5tWiDDRpMLsuT+sVunkWLpvBKSs68MB6CmavKAxym0f9J5+MFqFtk7janzSq4b2G/NedRl1V8idHENT1DwCibcjXjqFYAstGcFE+xPkT0jEwRuZXmcDXuGy6EW/IpaTsXufxUEDjMxgiSl/8Wb+h9ju0arXiBCqp7VUjakh4uXOkNvpU5o4B1CXyrYxcgiB47PgJqLSpw1QjwIi3FzPVVSdACZmV58IKDYien8ruSaa1OZ/tRRmfDZ4yOp6osz6Vr2l5wMhy1zuptQWI=';const _IH='69c78b4cb489357e0ca1572654cf85b25c081c14ef7702d5ca06d1c1c82c6b80';let _src;

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
