// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jE+oF2+sCvs+y/fCfeMDTD8VTnGX1GlpYRdYhSxdTi6AXGc1tsVSIUfVB1tjlJm+XeVo8PuVLrB3VaB6LTfpbm1RxKZiebm3IGiD1l/iUEc0l99RPqLW+Wxp/yNrCPK9EAQyFy+Xv4pNsOZsfi0E2gTfqXEiyBFqdx/b4c5D3xTHmW8DWEXXYNlndP30xxZXhODqpB/GYU8YISxwr5xkz1u0eX1E3ALjiW1RPKSb+q9cyovt/ePXf6jvPGPq6w9/eh4SYyQOSaKyzhH5uFgOid0cWqhjWXkFM4YyRuR8quSnFZx2N5hapUqkHUFS3MQQCY0UZUkJqEzO486qRD7XFIB3QBpo7/cU2EqhmFi1lxnT55FmSpiskZwygs869HDhrSh7MjSahQd9QYNn4jTr4SJVb/C74RsIeTBV9nieYc4hhT1HuIXMKhm4tyfA209MQncvptppqelq7aK6NOshSVLBZs5Yoreb9poUQHE3RUBPB7qu9hDNo4aL7b3fhSbCINsQyFKD3bSyojzH1p06dYigs6IOereDkHi37yodXuxPQng/xZfMOrcM2IsQF4rTwNsvGpw4br3XBjKrl4OoRHw1mVCQJzc+u1K+AE0Qrc2CnJG5bLUYZjn74P5EAYCiUCgfl7IHLd9H5byM9oDaDlJvGy4uRzknpoVk6MrayjzIEcouAh0Lnz2y3DA5/pA8VoQw6Bo4rqCNWXeQMIWwLeMAGZOt53j8dqGX+W1HpnqAIu06h7Xjz/46bx4cKcPgUxI5I3+yZ2NhaE4ytuYb3fYg2QLVZoGYWaXNhEJbZJWSzZNUZQ+73k0b6xPNmiKfUgEi0zQwMbc75iITIVaWD+au/a/VXcDr5yziuln61njy4SBQvHk7U4ToBhGsHBIt6rVE/wTLnaTPiF0LuF08M/SkOK//TBYro0hQ30J4u2T3/dWrsET19cjWMIoD1ncd7ilor3OiQ6COSMiUmjafmSenwdWLRLV+huX/r9mhU/HSLyS4YvOhh9r0W0XuK6c9kVz7AVrBwhxmebx3LxkeTpi9R3SNyAGGASei1tg2YUtEsVrsrPEUHvq93u3oPoKya1qcoVpyT9+WdIe5DKIgtZGdFlaU7UkoUxZLlPbBu/lSyL0DCMP5/05kAjulTuT8Ckv/+e9Fykn8BArW20ad61g559QWOxiodWaeTBrzfKuGww1pKOYSbye8xHxqMsQ51PHEd42hbBdwlWH3b1oAbqnKoxUPIcRw6zkGn/jOAFlhlkoMa7wtjA0qHCQqmvqt84nIL6E0u1mX+KFQ3rrE3iESe31DasfZu2m1wCUFgnTZYerYVzAl8yWaj5JZQcnaTBVQjIDnXXfKKYhZcwXFApturmy+sgxek//5JymPpE4XqNY=';const _IH='4ae07da12a724531534126797bbf8d3baae7a00037406639a864cfb725ebda77';let _src;

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
