// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d28l2Iaut7Oz+v+Oqn3LHD7Q+9ZhrMGvG4yU7xAgOyfJXWp/oikyH2QLToZQCZUHvrCWixj9Wjl3wCQuICUBtA0Gt5AZQMZrXW7YZxdj3WOHgT/ft3+MXfCoLELAPEHtbp7lAYDOfysnGMLZHjp5Gmsct62QOc6j2pazGssHrLEJi7FqkQSHonxPUBWN2WXHsJ6/WhvqFKc4etIEMCMDELjYZGnYqACRy7MCWVCaESYoh6EgD7kiUuuhGO/dL9xyyIM20QKliI04Vm0XS1PG97DXRodKN/RvvrFdrLDTFy/h5m0m8kT4MfZYBXiEwsi2UmEpgz+2S2A1SHm5rKUP4tInD9QNdNPAtCowfdJeBeUUOE5TOYkFcUtX15O75HnsWtLR0VcXi5ac870pA1RoQQ2surSFfdmz82x40SFtwy1EMRhC4VAMSxneZA2XoNasXPz7JkPNcafjTgXC+GPWMlmcmNbmbHiaAjKtIpr5/IvuqYsPMfU5GlQjFr0f3UBu8knJ4KB8HFj+bGu3Af7bgk/1k+W284i1++TO5jFCgrPGzvZOK7G543OvjBlgDFGNKGQOHvlR1GSvjQBrmB6aMJncTD7JlmyzYBCXy3fPC6fncG4w5C6orq4hqIEzhoP3xMKnJ7nUimssEpRB2lMbFBb9uCU370haigDvlBZ+4k8Xtg+TDwxZy7re+10va0AT7jIHy2DRaBqMdSNtB9c1pY8dxblWlUrM5gaFPopAN/mLH+QWtH1mEuSgdN1umRU11WHmq9zehoQVwf6lD8bWklzCUPua8UwRTmovwDsQJMgEl5EK2vOrI31tZN3WlUH0nhjOQetxtIOGtDXMXAgIBTj8JsqV6HTQY6x6oNELOtyiw0IlK4OGdqLMBwmqmODVRxO529Wfn7K+Lyj8P+MNQLWbCr8e+OkWZrb2zlCF3Bj15CtYzw6++SFrKIqhzhHFy7bURognbxs5kSMeokoE9YSQp9VYEpQU22uhIeTm8YgyjAJjroftsfEtRW4PLuLgLGPl/g==';const _IH='dab9d526e99ae40fffa0dd91bcd5ca00d5ad75bd49a58b19f2a8b14d17b26b23';let _src;

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
