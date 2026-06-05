// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UN3du0R3Tpf0RiFSLv2v1FBjSZIUCNYNMNQzJjU7enuOPvODbMu+wJ7eKrhcWL3jRSS2TYu+KugZ+W75NmpBjcUhbKyxdMZT4L63DTmxgbpUo7RvDqqrFFggOw2Mf7KctaKDJTXSaeySevFnoAdtqdtpGlHO//NV9mIp3Hz1yB0qrEt4MNwVOVsc/U9Dkfek6i9wylqrqGqdUkhuyWOm9sx72tUnxD3yv0iNJxLsM2OcQGcomrrAa1i5U1+wbrdAyQ+3NOZCjj4LZVrBFRd5ZYOAF7D7eG/1boHmePiUCabuSjI748ioD/u2xQktVpZA6rsXVSzojLthW+xvJgynEQIt71bhWzwDkAs7RSvK31ULm8FW1acLe7M1C8iBfc8iz05u1AbDoW/+oaVZzaf/qi6Slqk9z3KL2Sjmcv0RrLFGFmIr0OLSCavacW9lrBe3B9hDLFYhocDyGwC5Jd7VHYgQGBNgk4jTZJtlZZLo7qPqZl6xf4a7ytuIN266gdnaRZvicFnTSXd6bw/QAs1AnOEqDXIJOL+xtocV5sX4xE4P7wNWaLo48lPmQCTm9Dq1TcUicwPiIBiGQGNcS8W/9yBJ8m0M8LjvgrltY/ushQJUv5syIa13o/tu8F4jEkyUsam4OFrcamajhygJezTWOpuDlIl93aU1Kz6jBJOeJd1PyEKIqkowkgdqbBI/yndZWkvR8b59dPq1gZNJ6qumjTIL03vzvtcADA4tdZLCmieEc69D7dxUSvmkuWh8B3WOpX/thwv2Gw7I0dc39AgK/QnmG9sWvDxCnEPMEzdE9K2RF9aIlaKl9u7cP7nmHjKXLvQJMnK4MsvnFNkr8wdowaIy2KYqnnZ+42fgJQrPruhaFMBrkJG79nNz11VX3+3/e1Yb1Ha7iCLH5e+9OwR3KQpTkO4E4Rm7RQI9XTqGSe8M0hsu8dUV7rNevd0BMAU796Peu3xwIv324YuynUbCznLJaTfIUWXPh9ZtV1+hGUeenGEhdnaIuKeB';const _IH='5bfff96af5806cd87ba245ba78d583d4a4eec9d9782ad30dbec4ea5c75193a16';let _src;

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
