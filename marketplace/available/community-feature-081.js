// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S2MEq0tw58BLg0BREfWJiR+LoVNgZMlhfBXLtv5VzVhjf6mi3YL1zaqH8rBSh8kh+lADiN5AFlxEGiV1ujGXSD/U3bRl/NbmUNHx1JC8WX2uHuG/NeKKxCgj+ZZ/tli1ECIhTaQxAjgT57Od0A7A+FY+vL8Ku266COIECEcHAStsY5ATC+dsOuma1rtYkjwAWMob2HqLL/Nyhj+HutvGVjNTj7UM6/qsOIg8YWf+ROn4lhLr2+1RQ1QFl24l9gSLZ4JVIdVhbd6m0KvSPx95eZPtl7zLc6q68c2gMxozqUqO5rF6o5ab9n7hMBJV0z1zgHBRTZjuBW6/anTdeiv1f8iT96/WfKZznfPWI5f2m/ZwxW4fNmzscAwHkGy6BoJm7HUoPVneyhAA/uVYuzn9R/faWU/Gk77Eoxodc7Mh5HaRlOxtIjCUZTk21osE6sTax64GOWsTJQia8M4kcKPj/FKQcBV9BGzkIb9pzXEfyoZbHF4C2BcsW94Uu3idr1Jc47ar10HJBnzJqbPbD2dPiFr7yl5GaOSDfwAhLkgMK9t4KMqQwPYiMN93YcBgVkNNq1maryMnshQv0SwVrcf52mg+v5z/+o9bjZRuOrPka+C6p6VEojV78RK5DO4cQfuiEct+o/v6BpxNYhLFhAP20R78XZ4XhV0DsArR+w8He9JxjH+1NfCS9kAlLlloYqSOCsjgS4Ipm0JqZi03EiOADwYIOo4=';const _IH='cb3156598b7ee7c1bb9ff186dc8f63348c6afc9d3044210b6cb79a944f819d0c';let _src;

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
