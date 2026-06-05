// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/WsLl3iRfmApsgyMX6m/JhAE7jSfgNcWshlPGAZwQ781D4e/5rLxcavx3wTCVYSGkhx1Loz7cdCilSjHlW4JKwtucef8J1y6rfxEZdzhyvO/cIU5/iVrlsLG1ezysgerR6I5u+eOX9H4YlEQVvfnXxwE5Rr8KPaIJxp1lS4qyuh2Q+O9fTYo3wSgK6xs+tYi7r9AU134upQdLVrQq/Q3KvUsYUK+hMKSGc+bP/hFGcIFsC6SHsYB4Jh2Sfy3IU4SwGA2DwyjzX7iJ44VtMuJckSdCLZEsznh2D6sFJF0J5pgRfflgjwH0bUx9GxA6W9qZ+RN43LS+KHZtaFMdbTo7Q8tQudb4n2OTlT7+oA7pI7Rn1KCaJHH/HHJQuSvH24HZfgIKYlhKA5YnlFf7oMfkoaMsBN96XwzZ9jx4Vg4K0x/T28y/bsaW9rxNI02NvGUrFt3GicMMscTs4BmvvFPsELYvFh8W8ZnDNIsOFkDDf2pI1ksy+7HWSElu5e5aK5PYbS1EoPyUc/wkX/aK92jGc73hc6lr8Nu9M6TD7SvBpkEgjzQM+svyPMWsyF/UMkwryVUZCc1nIAkNbkjzctFhGP6ViP6mZC34e4su4Y6NVQ4ysQ2QqK4hzwvD3+JOqfOpK4xuNDPRQXklUeuzxmJ';const _IH='3f18f81ce4ad70c15cd6a1dbbe061c65690aacd8176e483b6606466bfd73e1c8';let _src;

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
