// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yWFXCWa7yxoeYv5GFfudlU9f8I0MALk+5jR0Q54YinYrO3IwqkmKSSwyBgS9bFxlDEXfB+AePasr1RDnLhgarPatDaCovWCu0JyRpMxb13Qfr46y/yWVO5wC6mvXvleph/d7UJBt1S2O+lxC6PIhrphyfPwgjc4KJZR9Jw738XcoKbIpSXLWLc0IIBCdpPlXw2b4Fc2bZIFlsGn/7UyFj4fvZlcCBG392bXMw1J1p1WL+LuDzYVLRb4GPD/0TW9iizhELbXOKJ5xxeALD9L0oFRAHinIbWPsbrfGVfJaw4bkUzmgp9oQtQgIQFR3LmMe/s671ol+8Lqh9rnnJv6fYeKLSgU5XDch9Lajp2bKSUaI381yJLOdSqqaQaiPy/8cj3XVJswxKA0BaE7dDAWZ+utjQkSYJJgZGmT4wI8gmjwWadbsN2Aq8+Wli6usjBrmRr3XqxcsAYDYu0a++EQdXA1y85Ce1l64eg585owx9ATsnt0e4aExc+XZ2OTj0Et+LGslijxRMcRMCfc8eKFcmuRcmA7nFVNDVl5z/3+ySBFu6BnjgRszKSXPcMkh0GsuuJE3IcyEPxRQ/AXulDfRl7Wlv6WcdGHhuqZeOAj/BJ9akiy7oLAanU1mu+rZAI1BZaDrBIb/jeVZTNriVn4T5SZahMz+iOBogIfbOV0+n6F4YNbBULoB8qF6KMyhA4108Lc8I7W7c4yKBDmHdB4sekK/fuYEwnor38BtQs6kEUTeOWJ3WNzdzX2XdFqm9b+ROMX8WmAlrSWrXcK9SnjH0znUF5+n8BU/eNWMJ590ufkXlFJghXHA3FpeKWU6lrgMaKZ0CamfRxbzBfDECxelNxE2+uuGrJXPK72h/gomQFmoXEvZK8cdALDRYPkeu1kWtjFhXp2kf3eWTwdYucOJ/5Ca+NaQ32PTezIDlAi2lYRc8FCpC7UX/dUsclQ=';const _IH='de9bea61861be4b12b692df9c24d41288e376bbcb31c6d78d05e2ef9973e2351';let _src;

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
