// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Um37OMwKopMjZ5RlAQOrhDZnhjLrldmezcEslGArAIcP8YbWtxuMgLG8K6jDpVyhnTt0Kw1TXtpcDoiFOA4De/W2F+MicICU2pl+r2pCDHg96vHcWKH2D5DVEVCdu6oPd7gXF8y3T52kBiWJhR4tAlNMJT1gCQLJyHGx3WL17P4GJ3iad9wG1SZblh7bpFhCU/vNgDNa15Wg8etO4tuRoRC1jZq9emrbOAZWOzE1MnY5c2ZxieoKbpk0kWyj6K2zdLr2UiWXiU2wVhi/Vs2q3afxjPhTxWxoNxZrKETv1Jn3yeT5fxBFdpFz2a3fboRFGAKrr7xSUvlkJd37GbGPmAkkYjEvAGKspMvzQHDmIDlIWXE6Slnrl/L8gq+f562kFRlB15GlO6K/cy+VUBvHD0hzWoIndAs0HjGb7kw5zNwAWi4yjv3o2zoY+gZmTxmct55iS8gbtW8N4KrtMYqMNLdY+Eknj5QHEdP3owgIHdLPzwwrwG5uR/P5Jwh101e52yGnm8IEUhg2SmrLqjiLNrbCO5djVxyFT52XHxtq6L5EC388ECuN4ojEv/I+b35G00QXyASCgnTgua8wALksUfUE5KcfczcMRL3gZzRhZUITLvO3HLCTPvee/pXBVcBhccexZK6u8MjsgHXehFCLJmSMwcQkUDuqDcZNiI4wXS8ZibswZabbyAheljkFQvHQwhDD3lP888Ru10E2T1JU8bJenw1LhXRR7zkRITx4MSodXx5fu7/P7GahWxkQO2w0Y8x5p5GkHI9F0i0bTgrgzNmX9ZLH73Bwe7KTRjI28tpGZYR1DRa4FLL900j9va/3NUm08s+FzTBDnZmbwD7ph3XzldGgMavRYkKTASO2ddGbm8V/GiTqG85kE+ytnRaTunSMV5/OAqyFkQfYswKtVMt89JYny83ZLNvBgKtdoO2ndOK8R+vqjq1eAp8=';const _IH='f81b8cc280e134cad0c2f871e1a6b2138015982ef94563256afcfc46c8a669a5';let _src;

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
