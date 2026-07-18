// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRU7L3PsqNAFaXchgSqH2ZgjugAaPOt8sTMkq3egEnf0P0reOQrOYQAfAkC5tH6+N01z3UjOzr9+oXsADMOQlE9c+YnRaY9NtXgFwaT7Kim9Mb9MBcLGHS6zi52M5+U839lNsCu6v7vahSPbb94akfR6zBJOnroKjllJeA4FTFhqCrc2BUlSLIzIweb3tMgireZyHCwmu4u66tp9Yn7QFkT5LUhFXaB0mIGqpz87MAln3dV2VBLqkEb/kW3MzG7Jdet+ETylQl98IGIMCKc0MsW00pG+jm2uxnLxtVSWrXhguAm1/3URRbFkO2SCFArkyeBqlhmaMebVaTMf9B/XtNn3XP6x1uXBB35PSj0nafPTf5+MhHNBusyX7cMGEYKy2b4usJr0c9RQ+gpMpCZCGay3kA1qesnuMK723UgQf5P8Z7seXhyed30arq4MDLe+P5bEQqxTDOHbJSUdeMv3AriqMhH5mhIXNaVVaCgpj+tVnR+loP5G1f+Vg95gEidZztRYcDpnj7rApNihcpKuXK8qoM7j3885JlukXhZ+yLWLu8pk6tC25a1jZzIrkXr+6oy4V+6uKLTSZLg2C45JW2ajOoq33wl3owmXmDMyBc5YbBifv/B4CkMz4m9j2Yb6I3VvLHOfw1vF8CHIt5mHtaaMOn+eeZV32U3pJ5o9gPYg5WYTlWWf6YJFeY6CsEvp/U8mKUHzgmdW131JMe8oXMmFsrTrlqI48qp7KDUTkZmtXZTnW7q2EBA6PDEKIrar61pzBES5g5LzNC3nOszy43TAPwItgn+G3zmX27NARqIm8IXBXh+K9vb4ViP5Wr0ApQ1mD+5QVJ0qWxUBCBLhvJrauLAc4i8S1N7LDvp29iHIMzoFQY0oNMaXJeteWrehYxHNA0OXOkvQ2dXwb9l+be3i870ykZUH7PfBFzXp/8GVG62ElOtVy1p1Rs/PL1GMVwKOrSLbySnmNXDlQ/qxghFcsICucDg0gpgX29Ch7aUx6fgP7Nr0YBcDk+4nNe0m1Pen0N1WDKSbDoXZ595pwIalDdVFIcLsm75ePus9SDyO+wqorTmmpw0kX3/kZOmP+MjLxjbxbyM8/1a1Q==';const _IH='e9baed75123103e11012fcffc82e6776d3a0d1db5354c2107b6331391ec20fa1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
