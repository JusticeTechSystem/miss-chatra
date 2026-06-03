// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wtKzmBXesf/OCuP6P5NOtvF0N5yVjP8L/l1IKvCT/bZjNSM9UhANKNZ3aC9iHUDocF5XFcE7kAjRJgjPUQMhvgk8uXcD+zYvapcpIoJef8yaYrTSBHrU2AXpsJA4zgSTgN2MaXVJIC0Rcbt8pHqDwZgUQiloSToCYS+0nsjVGcovngBn8he0BuQTk2KW+/Pf8WSFkPomKuhAMhhA7djOZdul9lUSk+gi8pQfU2X5SoBziTOuTFZDxn3tPauHGYg+soz1Jhb90TcyLDgcTcEZe0A9f3eNM2PETFPYFALc4W3OY/QeTlc0oDATODuVT9RgLSq9PhR5UZ0dBsOeeHBw6VHImVrYKb6YJpXqP1ltr4Kmxus3Ty0mGKgJQrQ2t8awOlXBKr1Ms6GhPf3jvm5tQ3dRNqcuWPnN9YBuIfWUJZsedjUhTtWiinDNIKUjUgl4TWvaTIPaedlLsTV0nu4+z5oML9g2HRlrnQJ2zPaEYZ9oSh7Eg+u1nPMfPldlXPfxiLSjRsUtgqjjUJTNUVqsLgvxd5KqV9Oo9Kx0QK0is8Afh6SxF5iBt/9fSNkuYAteo+cAOQu4jny3SkFFc91Aia/b+UKBYf7IB5cvvB7vkgDCg2QUUlSJFbQx5b9y5nw1e+ayx195zUY0X43LhS+2T0Y8o2QWJujOB/rsTMqlH5R2RklmPa6MCSVe2yV7MlYpH2CzNtl/YuAxQMAlEbDvA0x2CRx5qEqvimbfwP0vSpnXMSbaJmqGH0O7AD/rvrXB2mRofmf5bipPeqT4MHSbNnMkM5qCWNGa86dnyhGYlNlw8rZ/Qpzn4pVpga6pSITU8wAvgUaFGissTk+yU+jjuhLFoDx/omY4vRJtF92EaCd5SxTk/ay+KlVhhi+PJCDTOdzzebqvaQiE2vt086sP+5+Fx0liOhbhMRc03rJat5naw2ze7qCEaCzRzg0TFlfMyccO449MPQ/m4U8PwbdLpKyPOoxYwmEl5znRER8JiMvYIc83eM/OeBc4lSmlT4ag1rgatCHbwBwt9TANwMSd4QytOwxTFD/eKq9LPVdjBjhoHPZStv1k3EUS9d1bXeoMjZ3m6i4PviItoaB4NtVdUQ779QCljLwMa3rke5EbTpSt02f5M/fZ7+0DacgGL193fEl5LOSXc5TEQHFnrQPeHCyCz7lcADC23n1j10xaRUiPQu+wWYRxpDmy7UISFbeej2nKN9RAYTg5PggQwWzRDde4PeClp4eR3ZaXrIx+e5BY07T9O/AaKD+SCXKoPJJTbcpajEXVNk0ehtFW6Yeuy+eI9BMAhAAb/DeLcM3znbTMmKdgVhNzjYsRNVzyRK+dBoYpH4tYuUfgDT39dTb2X/CRbyM0bw+T7zi1mESyUyrsZpNGmzLSWiS87I1Zo2H1RqKGfn99WRqlMFvVrjmRsEQ5owxU6Y8NRP9gB67ZqBeyrzBc1hfIEdbL3W+UrR2AcwUUbo9o9osJww3FwSlIEtXK/D6Wp94rLj9wRqkGlCUF/hRnn0yXn07lbTPHeUGFLA+FeGryY+q9NMj3teCeAlwD0vus134+qtMPtB8qQvWr/yqY7xfP4iumuqYqztQhxxpJR0QJQVuCGGB9pvbSUA9PmNBKTdRnLvK8cezgp2Ae4OP3VvKe7TyM/XmwYLeQE5OZtf3raI+audSynpR2TkCNkQ5pBqnxSfXBVbLlxS/NxA==';const _IH='5f95864347a494880fb5bc916c6c8f2358fbfdea2c06fa8cf79269938fe376ab';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
