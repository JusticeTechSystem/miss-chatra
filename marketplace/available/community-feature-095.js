// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHPETa/21WfPDWdoScIf+OuKIPm5Ap62N+UA8tBfkxBEApXXn4YW5CAQ1aZa7IeXQV+iLJ07CH45+aRekd0WK8LM7f5bFRiFF43cpQ1AmKqBrVZsSHAuGziJH3/sGojvCjkHfd+c8HtsF3H8rm78e08QMWFNa+6nCrDuHVCqqgHr1wgP3tfH9wmdN5BBBwM+tfoBve7YOI+30ebcGlwsSa5ykoHKp9Zoc3AEpPogA4sMOvySrfH0r31S8//oeFGfa8vZtgkSUfMewQiqeoneXQ4Lv/TAYjHqoaFFHzRJJ9mzahUSntQCE0ym9TmNyGXYGpXFpN1Soq6E5Unkr07DMovy9uW637/x2DlS+8/88UKciYvSlRAsK1kJL4pK2ZkgJzFv/DbRf7XZjAg0SwiGa/laFkvS34eYj6ELcfp5dHd11TuEOqqmT/+QnM6zNtE+r5Pv50udKSjitMHgjSUJRMqjAoR3NdO9kv2ps1Fo8H2XTS7+5JISW8bzpLr3W2KiFnwZ/4hkHSoude67U2iBdDPcqz81WIsKBl/Y9TILp65lk9CtPIAyFhRUuIpN6TWncN+d3yOn9S4iK3QXEiL7MUECk3lNqO5mpWQOaTBv7nsYOr2VCsDRu9gWx7NQQY3vaCGtsIiznhUKXymyPY6pmJitl2AdqFz4GpUw23lxBnK4yBEHTQBGuNpCPkZ2ssbo637+oUPvNqs3scZtXk1dwx6l2SETPj7aOji0Tvd3/zuQ1gcbh8LQ==';const _IH='06dff52234e9d58ffaaeeb1449537b9c85aa0ea27b1a164fc1358b6e29c4bc2a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
