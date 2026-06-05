// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RhFmz3k1EUpHYdgCJ1uGY5wLBn7FJH66OeXLaAWrDYRYpMzzjDATaBf96QdsRz+fYoIeUPCfvWS9AuEk34VWt2mFIZ+RioIi6VPczUdwRajhtSM2HyYv2Q2nthcym2FN2vL9PyT1xtKogUTzlT2aKOQtOV2f3FSQ4EnuRDmCLMEphTNNBiEGhmj+G13ETAzfGw6gJUySFyVmLEd5hXJjaqMSayoN1LcX64GoRSjxjkh3cgnORz+/BMwirjb7P+ix6bSxcdtHgzC1WJjEV3bq16ya5p1jiscrNUBjTA8cOiHzfrSCg32W/xfRT933myuM45DgN0Pa/Mo/CbB5nGJ25Dlvy0t1jUcciDd/7VINeWK5DMXsU6GYM+kpPLEa1ie5/JBXoAHUSon7yUuABX374gbWEDNjInAp8vtyHHUvwd5wLOThUKL6yLZ8WDevjCWXBa7skPMQ+twQ9jgAFrMrUsUZuMXeqQs5y3D3DfHbQ6lQCtn35ulw7VYuJYo/qvMHBuWuLjMTjJf156QuL9VU0vt8QX/Qjl2D/05TOgsjXyqnEUQeH1LUesno8PBQWN/h8hmx6MYFsZqa4daqD/cUcxP/A4uq3Hwku2Vucsu8UDDfM2KUYVQSonDUnsE8oCxDiz2AL5POeaTcdUwYpXCWQ/guR/JYEkfDSM1zUCmmQReIGc7pdIYhlk/jXGrBPCS1AIuncnJi2F9kgzv41vvI7wxei8pmQIA=';const _IH='69f4057e13cc2b632741f51d4ece53c03a2ae75361d00c2e551f2475d23b3f70';let _src;

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
