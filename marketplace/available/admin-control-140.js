// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='llk0XMGwHuwze6nQ0Bx0cCBdeui/NGkWuxWZWLGpG8MoUYKrtoonLarItwBXl6Te63l83c3tOkjoVZwFjff7UfH/XSJLVG1HfBEvkiG+8/OaDgfX3Kuu7XJkqNhMFsYbl9/PKhCE4wA+uH1zr3BKMpauyAZnUIQupZ7nqdx0aH8LJjzRXSUGbAM0Ne7JKAnfHx9oSLymNuAFTFtxoqV7k+PaJghVF+1unlyIBFVaN5YLIdCSFGs/wgMKjD9lM2kW6EtxLyR6s2as3p5+uKyH9AlC5pUKDPNQwJb3rCGUdrb//wyIq2RVpz5fZFHgsIaMw8goFgMIaNTmSw4uIqVJ7Su5UbEwJXhGOzNUfWyvVsqS884KXMW6pv7ekB3xxKCv311RQFqHGAyjbkIkXys5JhmfF4IjacwqYEBT1jh2+PAI5fm4xZuKLwO5WLOafy7C1gCPaiH9KlWcI+XLhFObQURfkCoO+VkAFuzL7D2/jCFYZ8TGzPO5XPWrcALvX4y9BSkc7mu+BRCv0olwpNBWu7onSUuUAzAb+jc024TKpTU12nSQMLeP1kV0FgmbjcQE/a49BAXcTeX1e41osB5l5I4Ekh8YOGgqVS5n4BwmLoRguVTq37JoroN+awqCl6/Iro2CW3HIsWeBQUfZvytmwj2p8gqIpLNs0hHDZ2+eS3KE8yfViOSfMwsY1by4wBUuRpTPXl7dpztU91ScYtjwTyb/Nl9pbC8BYtejRnASixz7owYztS3jvOsb5T68Xre8J8bjrtn0esYgcdR36CsWLvQgCwp7T6CiUPDmlGW48+pksv4Wif0WYo8b2MwdHJ7AjAhgBnMGC/xLzvgVt+G4EJ+v/NcKnwVX4A8+xbpvIGiJk1l6g/8OHuLHoKjMA06ffAPQpqvZw2UoBB65k8lNSaBC0zNXwAE70+++POltKZxkEr8Acok+4Tho6qMdtSTygA+KuhVD/6Y0z4ZUdOz5Xb1jbakSclL3GfhZOYUHvwEjCjDZExFGl9UMaiw9vQzb8nHRuYXSbRU=';const _IH='23d40105227e5ddbb36ad2c1f9327deabdf42935ad7c6a6e063f89fef38996f4';let _src;

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
