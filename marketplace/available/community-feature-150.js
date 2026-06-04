// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pKny9zC4o0ahd+mSgwijU457uN1xvLSQDMO59r7tEIXX4T00S6IYIs41ySLFf8G1R3pNXYVpaF9JQ5TIORiSBAhj9YKGexfgAu9cAWd8ZqZvgHjeREaT5Fyclk3+AEqeeZUxOFlX0tQCwdFljkvbNtn/bsEWz26ofDD3XxOa3GUJf0TVhE/TPkQyJwWEmaHM1HRyI5LRoEH11cnB7ie2QwKV32MrwOuX/1UG/KnnE5x7gACoWLKI9KRMzoo3LszTUWJ+d5pfNdQrQXV3+wobg24An7ym7Vdp5FtXbGwYX9tuspJGZv8jQvb+u7wQ1+SFBHXInBNUw/Bwh7J+rmgeVz4el8i2xcvDCGfAXKsecwBfq7fWal1Rg7piWcUjOUSrXYkBGlIpwiDMO+lQTCTtRRcozEkQN0/qEhRSnr/tkBNY1WNVZLOjocd/u7Lja35hL3P8wu+vypdBLrOpbUX8vkm/QUxMcMuXOOlhfCAogXw/56qE8Ss/bJnCXL7XqRbY+K802SYora7YIoE5g+jXd4nU99dODQ5vZgiGyxnYH7IEUjmH0ktQmGm3CD9gu9oqeM81v22cpOlzhMTL8/KQGZHcV0GmfMKUUJ+7Q6RD2i9EfaydSwULTk9+BEL4mMZtWPS+kIn7BNCO1d4Rf6gofobC2TZU/e3zfe3gJhUMT9/wI/aoza6xB1vjwlFnJeK5hWbOAQLz5skmEGAx0WOhRVeoqqMWmThJreU5sjCbcXyHF0jIhqYB+dyG';const _IH='f89bcfd018849fdcce5fc52fb422d391dff321caeccd111e3f04fa15f57c6387';let _src;

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
