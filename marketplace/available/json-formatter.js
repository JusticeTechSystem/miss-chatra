// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NXteV+uNHIdMzFgeJC//GvIsJM05netbCRdaSS0oqRaj0d47otmUR/PPGvJt8LVQpqKAPY2GW7IGGZUGECFtDXlrCHZrBsk9MW4hWd8VMT4NJP9ue/OmP39xSvVvZdVlhzFNTH3ixBzDYpmzBLyecjw7dGHy4ovOPVlCMhSF5HnQO3Uv2BozWJe4pfpuvSbi5FwdoTiKme3Dn4mvRNuSvLh62/eqPzVQ95Q4a5/FAf/2E0E/yJw5kN4Cuygm2amLPSck1TC23kpmQXE4eAoRyDgLI2FjDeflFz4fBZuTt3oIllLIO6dYUl87rR2+9dsA3CAn2nWHK92JtpHS6xGZAJAPYRp2O6cLmlTPQIX+NZVWeWqIQItUZa75Ih9f+gP9zPgVhDR1cg+xsGp8McJSlX5TGPaRUPbYSEMS7TtkUiu9Pv62weOwU+5aqZZjtNSODZ18OOqB4AswtER2Zls4JBjVvx3AO3tPiMv7nESGnE0XJbfrcxqdva3l3UpeyPSsZs3sjQtrI0A8A7XDY/tv/02S9vh6ouPcPRrF2d0+eBrDuMm8BWT4ms8I4KOnIfvzGstoRxddfN3PGegrxGdtf5RecE0N1tM9537JtFIcNWugho7h+eEYmqEGDfXynBaSvCGkIldCFMv3Hv1+cKq/Fi43tN9pGTqVzMVRCwGnCPJNcDMEazZr8nhjybxhmjVxX6ATsfTKO7ZQzN/XrO6K+f84j4aLYcEgNdFSww79/ER1qdRGdisBtaoijUpLiAkUpPknqrqCBdFoPo876jlUeMpND78Zbo6ibx7B6Wot3GruZh4VBzsvS1dJ0b5APft1+L5U71Z/UcKNTgNjMTENRbA9xfRwXK/RXuJBZ1ITY0YqGckZ0fUytlWjj+IHOiX9QIcdjPCKL428GP2IHSPWrjgfYQmWCfoHAdLIlsZz1F+KoxeSDI9vIA8GeC045f2dTHAPItC8V6dy13Y2A0cS5rPl0elAGkhjfFhDOdX5q2TvCmD53KR/EB8p8GAPgE8Oax4YXNpIHtgIravOgi+daMBuojYMdRwoI5jpnK969s3rOml1hgW61pKag2vViwEt6ciscBNaPfy1bZ02R4FYElkb+tKhz6nmLhooYdOreAgr7ixFW2zVRV7rLAx2bS4EZ063cMSeRly6XqU7zR7CYoe4nWdQBkHTeSYF4kRlw2pRmTn5tMsHywMIr0bfKGllaKRIR+RngycmR5UTCjbmNM3HA2YNNSKYT7pGg9D974jujxI2gDvCIwNgk9zvB3/OVmS/wvoWjKJz5UQYFJRK0Vm8hmmjXy8PvI2OzjTgNxLjlug=';const _IH='8dfe96770c18158d58a359404477385cfe1bab20ef38d7d1e2563fd04a396046';let _src;

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
