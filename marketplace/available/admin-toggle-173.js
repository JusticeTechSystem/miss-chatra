// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MAfZjujpoE8vO61YT5YSMbxERkh5SQUKjk7s0ixbfUM5dGsgBKNgzTGgNzjSa72S2Qc26kCmKNelwP0glrenBiMObnzb4CX7z18VOuj/1TzQu/y0Tv8dQuNiDhgNEZbpYJtoFXS1LRXQMPOersLdPvpbp6UsdQ5y2Iyg0d4syyXG5NBVMLrE/gJIdKOMHwN/FuP+GxXWkZ+Pdx8v81FbhAQAPaD/pEA6W1t8Ln2zdDtQv5H8sb+r88gGBaFneqdnk7TH8LxR107nIr3+SkWhhaXaUfOCAJ+BASz4jAJsKelfCjJeS49B3uXjHWI6SB3Ztbw94sa4MpPweOAvgXGN3kKbubrEgZVr4lfGOJuOTmlt7Pw859AbEpqG/jPVE0YSDrXbx0THWSG//DhJ5j4E0JjOsi2gr4re/wEG5bI+79EHTeeoNwhP9iQsBxfu6a1NcI5LdFKv+bws1VdHZh4FH+L17x0n9l+YkzRGOBdH2pEw74DffPdUc/ck0yEVrBgWXUjBv1rSuAlp/W+tRVvWw5KQy31/SIeDX+GPH+1iwVWM7xoUixrRAof1eOkraY7m0/AetCLztxiFncRVYgmD8MzFEMbC+ru1Xv9VNJoGUNCQdp/IvwiQ/dlQWaE8KZTmd2ZOqkaJ/PicpCjhKnhHXWuwnpapn+r9DWfml2PvOUrxMbxOuR+qcdI5JWjaVO62iWaXalk+uTNvpNsT9MEQ+dfX+AmYFzXFkA6R4jdWM0D0Mo3ueUbL+mXGpjYO8Q+GyvvVsXh4UHncaEcuuXszQ9uOx1XKNuT0gKP2+rEJcGY5WSuT7F2pvwS5RQIBpuOV1kXyhxH25zItAg9J1ft0gKit4FzNTW8h5vE/a+7RcO8u26+2v6ijPS645XxdWTHj1pTmfSAZ/1S4uoM0/1Rcq7o+Hh5EU6vH1iomDALKSg/DL3Z4r2mt4nKXByPB3g2hZVR1Oxv9J1970YPnvU790XAbamioe1rMWpS2xuLGJkR/PDqBCB6SXcBKBPl0a3hIWA==';const _IH='544686c03ac7542a3d5d71893734b943ebe2aac2ef236bb3e8f50159c95512d4';let _src;

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
