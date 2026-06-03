// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v/dcjI1ZMgvVdRHgO69IKds04e+4jfJtb1fNiRrYa4miSVdbapXjjiJUg7QhvZJDdxg5sjKwRq3e2G/R5OsqPPk3ktRlUqGhtZE3p6OV8S/VdZBq3MoDu9YakH1nxHMu74I0UvUicR0IMEj7YHhiO77v12JszoVwUXmKIQ6czwRPvnEjBBmh9Z1bqZ6E+PHi6tZq9TVXvgm9QETNoe+mv8+V6L2enDhcu01ySmPdAMago1Ht4vroNB6ADwx9sycUMlCtvsakW57F5eB/Y+k6BFM/maIsSY3ziQnvkyUEOEQZ3thmHn0qd5JH2ilamrZ5ApSNJ6kNo5CzW83F0cYByGZ/TVh5og6SxG2q6WX4UWKeStvlZePaGt8aP1xut+s3+UrCIjlJf6/sOCJlzDxMFdnhb9HbuIW1yWWmhAIayh2IaK8EO5qTG3tuNtO5STm4qfjWs7YhOE6DhQ82Kwl0atUsohUUdaqNcjIpQY0GNlIPQria0oz71GewEJ1b7oi9dhzjQk9CAN5NAWUtkVtPXZ9N1r6QeN8kz3aV6ZylHuDZJwjYLkwqJVajBrk/bSmb9XGO2BYn47BO';const _IH='3a9ce456346e6e74d758e4a98ace7a6f83b57195fb68a61b20cd63777cef7101';let _src;

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
