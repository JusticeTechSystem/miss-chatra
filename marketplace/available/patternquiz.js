// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WTPUWhRF7jNaIpwSA6dNu6tMK2jdd4+7G+onCgxNZtlmtzIFXQWYvh6aQhLBOMMdUrjAda2eyqMIbscwyQg92bXKyOhf9hBZVlP2xB9XEVHNbiUq+DqdB/u9OQvL4ZxHL4h8/MULdk/96w0RbZPWIDgK1iuEECW+Zoa4NfVlWGVOukamzRV3ysT8iJqE1YGPkmoS97uEb6ofLyjnrn2is88LU5Y6Q0fX7KZtdCREj1ZBIL1H8isbVOeZ0cxJkHn8udBJOEYwDPywXzJuxy05S4cUiec5DdwkJbg89CE/2UQAdQMHOv4Fo3sT2PW/+Yco9Pp7a/Q1NpNkUfgAv8PG6QjYbn/UGMs9JK4BkQ/ILB9ocf9+0YK/MCuXktMZiLPv2DEql8Qc2xZp+gkXiZqTS5wjB++NmrFiqH+XvjG8KQeQK0LRDJNpXXQKFxcXdVPdjtIR3XCxYgRjFrkd/8fsfOllMqfnX6BJW9xDK/kCNXRs1BS7f49ncy4dAhoSRORkveqQjNjIvAvEqmC1Sgtn49tT0xinliqwI13h1eZ2wo8uPQVrwuiGURPvobmPmiPSq9D0jiNK6dzWhRysMybrsSPPgx6W1RBtqNVu0qSVJtk4dKO8TdR8aUDlUD6FVjTF9Sb3aY263Aj6REthCFrbcRB3H7gXz21933YX6HPa/i9ieFHCct1lFdP8YtbL4LSq58X75DhIMAWXiJVUro8XTM+0dArDq6dYg0dHRXi9+xjmUDvLE1I3UKqZ9bQgimOGuT7D8dVti/TZs8S5avLblPRtWg7vwwzyvEPBc1cECDXpr5SsLmZ4iJsP1ZniMjqCIJA81evWQmvPGPRQsHEKRjj9wFj/Ott2SBX4OUveR/SAEIUbWfCnHxwGNR90zOcE7UiD3fXTXrbJTXxww3FMkJiZA1HbDM/OlqJEMqxfZktG5OL4fbBzLfe2MiiEKSrxK+XhFdT0MuSR9JNYBVsMWQgiHZu9derXyDUKj25ObJnBMKaCqUy7f5G+EXgLRX9Z4hOl9x120bjts6FsurTjZrB/6y/bVxymihnjG6BFKmMi9S6y2yeagiy3fMMg0REQcQQICHDF5SHjQZDOxnDc5aK9+q6jYITjV8XPgysicCw8FAsrw39mWmVEGYnGDALj5/Kwc1hStPcGLMej2GSO+2adlrbsrPkdDY6EgXCblLaNkUiQeyAxR2jHrwNm1ULFhNeHeRpluyab';const _IH='b034ce00c2b3aed15047dd83e9323fde278f19c21f511a543c2000d4cdcbcc8a';let _src;

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
