// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TastGv2e8/wz8/hEC18WuiTBq/+ak/v3dwhADCXRMV6f+pX9uPRxlzdxkynSM+J8D1Fr2icNOOq4jwuIdwmphDOCqUSodYEfm7w9g68TD58SSgdy1nmduwjLwMxAfwKubdQ6L8fPcEU9uauRBBbbgtOQV8YAb+hGuElI8uk6aVA27exYi6/Oe7r0Uiz6b5a7It/Nq2TgkqJbuFh4GCMd+i95WbNIECNeMpfKrhyBynVN58TQhRdhYDnDyPMHeJfxKhT7+pbAHP3IpyBrUqsTGwf+QpPBR0lr0lv4TkwPTT9ILmWwKfrFhs1AzuFKVbJHdmBL3AFzOgP8U0hhI7lyEtk6s1C2qZMe1HUgxTgNC8ZndkE43Srwo0/5B8DSeZI1pnU1MrnW/hk44ubPswvCjQMJ2+IZ7p1CcXJBpn5g+CKk8ftnyd4nw7uAyz/d9h5rq3nC4gaLRkAweN9U26lAG7//r8DJhBtz8uhDgmiB1Bhei1HlJa24x9427mEnnVi8YDtxjn9db0Z2RWVkjA1l9wBs1zUokz9nsdWSjPUYPrKWlLdjP3RbLyXJk78rC4fLO3YDYjHTNyt3VjPCgcWgPLDoG9WGSORvwSJU8ZF2sr171z7FrjUAxGWW7gHIttBvNvGYprmDiF8VLE/givZZlMXaR6jwxzNmdN8Bfs0PoSfXoQElWbXqhaSHvf/ieOJYMwOy72UypLvSSmbiiUNxlQIAOJSyR1iR9y7PQfj4SIh5X8h5iuBJqgohhy2umwH7ZcO0rJgDS3LRVdnkKqSPmOILUgla+RhZcUgIhOYIbaFUl1hdLUnIPmBGo+PiP/GU4lvIP2k2RjnNOQP9rKyobJLUcA0gFHOJuHko1g3mG5dSjio1/tWji6MyTeJoci+JawWqN1djkJAW/yiPwkPqvIt5H1MW6/F2TASh7ukxJNw4dYxXTB6WUFm27yhQUsLDjJgxrvU1zdTiKBijo/He4TMjkqNd0qis9Cnb0cTN/uy0P/8rVcQFYmr2mq1vgL4RomCPWWVsc9qJylI8hqVdG4+MNuVD5dvQAq+R4GR2/DWSTlK8R66ywK0+PDQ1sG+NP7ve6YHhNbM+tfaUMIvCGTyhkeLAYYJNtM+eMpa3F6J4nkd2CWjSi9TzmyQzPfUgmucJz8mQBPHRWaHWeg0RYJwjNzJ4dE1ZnGQigKXaTOIsKtea0TvNPOKLN0KaiHI1vTC00ZX/2Q75p6bg2lu52ignwiiPNajeeJzz9Zw31j1CcR3cqYq9Vy4aSFDYT0raw3BNrer8Nvkb2zthPqkqGgwBwjKpftJ0sezjalOLfaIfK8EtM7Irg8jNJcHMdeqULh6dAWKMs/77W+nUpS25O2Z0H+/77RhkET+/OlBtVY4dR/FTswHdww==';const _IH='0384b02c2221cfecaca8b02c970e4f813806639bbc51ec76bd90364b5bec6455';let _src;

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
