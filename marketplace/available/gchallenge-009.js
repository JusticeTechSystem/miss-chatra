// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kx+gKvm2pP3wWH37LKVRvGkL4/EDdjY1D5MNhSXLEws6fXNTcpvw+puoc+rkfmVtymDRAR2gDmjry825JAQaPyznDhlBJjTwKnMFHSsnD5a8pcUhBlK+L2h8U3UdCGFHGhKEjQ5qJv+nOuUyYXCqve8J8vd1fxZ49/MUFfdg25IkvXa4k1k+LuYTOgrSN8oDzvWLjVkAgTuKEOCF0VU16TL7panEWXJDTRst+boRt1FQ5ouMlse1jvd1VPx2jT/I2dQYqFzvn220zK78GqY8BzbqPa4oHym71B4MIv3Oq+88LG8E93tFbfPTpF1ybLMa2+PAaudv6oporbYMncIm9aIFtk5NFfFmx96FxOxXbTOYinxI5aT3HACCm9Uh/tj+zYwGlb+2oTVvGa0Dv48sXMm5fcCTJZrUQcJmV5kVcxSSWkzINSUTbnKt7NKfPVlw5HQOWu+qUmvK92FOHZZGYwtU2/t62OLrklGmhA1V50ICYaoNlOUU548cYa4l6u2ELQwp7/bmmKYV5omWg4dXML0mcLnF6eRtO83jFI9zee/7GS5mMWiNKEZgyFtRAMCVAzfFjvmJnXD996JKSx7/NzOwDO80Txlh2mu3eRz4cQpw9C1woTjodhRLAqLqp69Y+1Rd1v0=';const _IH='7538e36aabca0a2ef7781f096c7335ff0290cf80e7116fb9f63634b9b763bfcd';let _src;

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
