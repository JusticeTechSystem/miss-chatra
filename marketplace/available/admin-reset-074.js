// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LiP104JpabIU4JyK5mBrOsvXhdglQ7BG7eD/VytGOIHqzGoC3nUuhed7dUwId7Tu5lcZ/P6l6pqPfCOxVmG9TPpn7qwTvpaiVKHn+UbeYfStiUDEppPDLeXkVscijXQ8i+A0ITr0dVFSkEqUk8WLaSnx8wNLYpHEMEFRvi63jTQL1UIKXMHjw+WdM6p+PphEgFEt0bJtaCovAllHgcKnUpseqp7PEa+MuQBFDlsWWkR3sGAupPTEaJeunUYiknoAxB4ylBEB0Gj0JLKOqb4Lc/E4JH6ahAdU6f0bOHori82EMq8au/qsntQv9gEYrTdYQHGTJGmDfkypVS9KzYhuv2KJo4UVb88YFi+ZJeGm959Bd0MWpkFiLIDnhNez/locmzKwbxZOlRyP+tRNfNjV4Qqzn+Yp+cRO75tkCdpawVJ0s/b1I+IkdZrhOFsGy8CYDQ6kImH+x0o/475SNZopcKHFekzu11g7u7d9TiBCueio05n5MqrKgnCAO+Byxcyt/+M+EL5wfyexNmhG0SCAJKnKAXO6CWEGmXwvcOVoP/PofRDCf/BDxSSRXEl2sUioMMtgXVF+ZJT5B/fJ2AC4xc7TgjSRZ4VQ5QvU3xc4o2S6ViPdJb73xRmRYBqneuR8AhpTjjnWAiiexF9Ml3ihm0BDqVKpYhxhUYjss4RUCtaSamkuWQmhDLaz1xMdROqeEL/Y+79RMWgjN5QoubiUcbAHTVLv61XBKz4Z0yhJJ1lNSVMveKW+E/k0kh2CbZwDZcV0K+XlMSYx4B/c0zCegwfSwwJSDHypBkja3fz0gABNsq1Io+oFevUlO1sAeYAcn8HlqZc83ctcmrbwsDLsKDgs64EN33sLPXnighsxlIeHElef6VIX2ZxK+yw1jD0EUNdb6b8zOfmfAZNXOG2rf8GluFnU9ZpSWBNZSqEMoYypRSUmScgPfiCmFW4GqLyp0HRndJa2QEIO3v4WfdJhJiLBU09GgQF2HZf5NGgUajvDbDugY78=';const _IH='768e1328577d31c1fdeb3cacdb92f00d3f4bd6654d374ee133f13f5ab613ce55';let _src;

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
