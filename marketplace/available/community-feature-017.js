// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AzZsZQ/iV94SkkNolBQTY0wdyOqI/WN9U4Z7TRTkb1pGOjSsLManORV4X41RLtcADceUs09zaG64e6TNXReyajpDzJIqptOhhwieZDvy7P6nLPbAVNPNtG/51czdhQzVG3/CbXvsw2FMp4NUE03AEdMmzYwbRsjyQ4uSV5vy07HZwuBFFmLw49hw1vqsGc7NH20BsoxUJsPozi/UszRd1zgflXre3YYL3EHNtNXKqMYXQVdQshBXjStEnKvnF+EcxvK1DXw/TaL5jKZ086Bm/8nOmf7FxTMG1u0OzL/8PLkTi8fexwpXwIIYOgJFEYv+2tPS5f1lUp0u5n9QON3Wo7a1iXMIVueHiKb0DMU9NA0/KivQlg8QvmIUjFCWYEf3RaWOBB1W/sn3Mh9606qHDpt3+lAvvbwL8SPZHmYNItXG69T+6PiXaQaHr32TMg39xZX1PfJin6acil+5YzoRmk/iQVo9YBu0+YLdRQuUXoiSRDZbrL7KW2yuwc3QCqfSRZ1aQUVdQrlDFaqY8QGcJuXpoXfMZC2mH2eRYVLPDQv7rz9k/TyTHQa5f50aI+iqKkLUesYveRgFMSLxlaewLLUqJ7lJM8XZf7MvmD+qVw9ejkejwM/g+dJwSfFZ+8iX6nJcWz+lIzwGueioPvHgYIkirH2zJ0/hS7lP7uBL4q9gjCS/yWFFZ9ZeI6N0AiDWiVNYpgVZTCUPoJ310vYMSdA9LZsk0jmHIKsZFNHZ0A==';const _IH='39e17184ac73f7e9d06c20de744b93e07659f06eee319552e7be82d3338991a8';let _src;

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
