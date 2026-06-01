// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3kK2hq/E75u1R2XMwCwa5MnJaokvZ28lCVktBK4XYkFqkl6pvLaMsD3IrIB2lfJZZb5IeDcJOyb7h7le060MOfDQtQvSDPUbgHAKWUUU3yHJHCMSRBKQ8kJVcTn3FsjVitUe6undum5SV56wALWQAOr8fFZ9wxROJYiFMdJyK06lfcRWXV+oUTkebmH+oAhuYR84/cOxp6Njo3k9LgLwlhY1UO/ky7tXyyZGkh2HZ5FGeRXr/c7OHRhi0mrn1bugVqj+rcvDsH9YEDTObzkCmc5cRkI8h09tjwJUuWgka070aEMKCDncu6tkRYJaUb36Rt1w6FBprO+ywTCxQIh9n+LpCwEtYLQgkmlLEDK/vUfNiELwA4GxM1KUh1ShNJyqg0ApjZgViKwH52fACVePslPPHHf7fKr3RgYSX7Pg5nsOgzUDKj5D/bQJkBdudIQZSukudgYIheFuA2D1iEyTrqKXKpt/mGyvDfOZLw/TlTsFRhIRqAzyuG3CweVdilOi1khAgGSYvwhZaLGM2izvcY7Wg6Ol8xm2zJCW0INeNidD2R1C4i2v6q58QbCGhPotRf8sv+K7aEDxybwe3+VNDXU+/yaOBiAr7x9jTKeZhiZpqMdu7QCQEQ0ySmaMbL3OX+JjFuD0wDoNtC120yaz8zCbBgw0xV1cAn77lLFLazob6dBAgOVcnHF+dhbuVNPcnJN1u4vr40iejcqjbdnfiaZIioIgQ5mDuTNMujmb9rY1evzxue1ooIsMeYgcQrNTRm3Hllmz0DtvudHMXNH1ijSsPh18gXoVR//lS7PEnqC4UaQpWrxUEzxICnuM76UVjy9YKCxL4w9OQU7UlGZLbdJXUmMBNtMUpTPBybaKc5xQ8rWTAel/Lqu8FG+nAMF/co5HNWMt3CdEm/PbXNunFeN2Nw9gkjR7YWG/kruefd9a4LUD9elBUsinwzzNPqRjChjD9n2DNE6fl5mu8bCj+38tnVlTVCNUGbofzueDtHcJ2VmoX4T101JAzI+dEsUrLVHxCOwcDnJDIdD9mzRLdIqbpHn5nE2WQ4zCtWEGVi0I30v6LYiqTUTxxADTuxjx3YWqLyEHnBH4vhnzcBrg/XfCSy/JmYntA1Iw0DtoFu+WEERF8sN7fQeQLQiCOpYyilW1k0D4+RusZFOmjxXSJgutrhal3fyPf7YVtdLavmdN/jZs+gzdI+k6+doaURUyYnT3ilG02syUCZFe7ntuZHbVEbtfSq8TGxSb9tzsB3Phg60usZxxQqWL2wS9tV4bXOqvIT+HMGBhYqoXHIhJ1N2o/feDQaKmeJaRjgZiWo4IRVXuOx+zJzvNxOOsk4LrgGXAmrX69mzGLV5gl9QgX9m4D+sFK6M4aKGQ38oXHGxq6fDvzvI/CHDBE1DybPKutcphTmNjwJNLsW1xWr/oqEwigjEIE/xQhpYiqciQocYbQXdOJCpDqcvHZhNC05EEDUBhK06myVBR03gtaFMimD7CbdAzx2JdZ2oswWB8fFM1t2arHho5K6vJhUaxFzNlNuxY8DdxRw3kSjdBfpZTMAo59YfM6XQVEuDZ5cOz8o/cxMXHiIJvEcFb/xkvMk045BEGOOkQwcg13KkH8B+wBcs8lEGvUVD69QPSLqnE1j6JsWxr02GslDTUcy+V0HPisOJw7r/WzzLPLR2rhYC3I5iSL23X6IMU6DXQhihKmFNj7SAinSp8Ixm7gzbhfoK3yHKQYg0B7haSclb+urqiqD7jsR79ZpJAUuTyMoY8qjGCOzAuFoZmZ+4RYk/4vzEU+ZkEYB++qtNwKMqbYU2cR0ojc7bCtcBKfly4LM2JJdOkqDL8uyCOog2fQiPaaDM';const _IH='28ed19ca2f09d0c6caa1732abd0f4e6bde510babb944a11c2236b2535fb8ef26';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
