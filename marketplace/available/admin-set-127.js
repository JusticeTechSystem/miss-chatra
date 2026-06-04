// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AOKb0hLLXbSZUu8ETSivGxFraH9TudtDJqidek9PEZ0EUAzztYsLMp3ppL9tY3LULDM+y0pLAHVVCx5i2jOicqTdwPcnP8oXOZ972PXqr0HyaDGV+02RdJ3ee9msxKka/iltJDvvatWRODDdG1OVNjuJ6Mex3E6ZQTpnSckV4yJSltsgfNbgiVFC9NX1cwxjXFwpJ+2wtI4U8BU61DjpYM8B5lemTElWdoNY38EXeSnTz6NV4hItTCmrSQ8/HLyIIK1kGv6kW8H388Ktr2p5LnWcbwNaUTn6XF4xvlgFXTkV308jhJBLRoehWPR0dV9X6m7kHStU/QoeC5gGwGjXheOltKASxHLPmrOPzw14y9mhDYHFm3lZOwySkdqJpka+gsSazdS/5+hcHDGfvO0pSZS3bV3f7dMwsM7mrJZ6iF2FYZu4IbEofombuGB8BH7++Q28eID+nHTxJEyzRJ5EC4uuU8CvM/2zfltNfyxoQEGNy5IVNvMSBN2pfhgExZj1lfnt4Ml0V2sMjyGYd/4Tk9JVHWGV0iI7lg5SsXlc8ZVx8y+Ac1ehu3+JBMrzxNcEBNrovzoLn2YH1nO5L8vciPoqDmT+/9K5vvpV/nACbOFQy48L0I69ui4lKb98CkPC5dRpuuFF1S3xdEuotfjNVuj72Z3TYH1s2VX3hSdYFgVXtYgUSB9Ds2myqJlTJE42y6bxrpOrHXQwaS5yo1KbCqHXFquk8M9DNDj/x9ZOheaKWUHYbPqTBT1VXHGdUnsX8P7h0zew+gSIBn02c/whiEQumUKiiCFZnFyV4l134njTlGA7FJaOGBafYOgBwhhmAwIKBbLfJsKhkSoKP12YG08A//IvN/OX4R2UAOsXiu47utU+UL8/69gg2jg5htuvlLGhpjTMyp7DDjaNnz20LY/Hrwc8YPfDxVDCpLES5Xe8GmZfxnJQKMforrHdOYltwpm5XDuTpw7KMlopliNeN9YR/1hye1b+fCFdpA==';const _IH='b9d852d301c60ae613c75e2f98ae0f374a88a09121b4109783af649902f5c3c9';let _src;

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
