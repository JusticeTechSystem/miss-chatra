// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gWgGZW0mOkoTGQVp74LhzwAGpwbryoexPx0s0CbGFOOQKSd0+hpvvCXrTn7IDPmZ/qJDAbCXAEk+3UQRsF1E9Fv01n2X7vqF49tVJiPdmPrzqaFvxcDwr8ShS8jFdRMAc5LmBU5tN7+CH1hKps6ebBLEeqidjq15m/Qgjx9B6Z83NCz1cuFnkTIfm6zhzFwHtQ3GXyyw4fOJ/x7HO3dU2P/AcHXq1ewQMV93VM4DGC/Y6wss3rbiCOtgKg64hNZAfP1DObLz5VnwtpdohWoborP88nuoWF1sEfDr3Bw828BRokMtgDoRJpAGuJDv/BOwnCtXt4gpoJJnsrMPf6YgMJF5n+eIjSk6ejWbfIyJwdRfWoRIk4a+e3/yoBzGjsFe2WRDXSbF2ub8yyYvlaxizjkEdumNv3QcBmkvns6/mkdTgfYgNUrFzYIoNbgXzlrk6nSG71l7c5Wa2OYUkURFSg/e8vzcJggX59xDylfr4bSaYl8d4hKMSKOuL03tOhbOR3OLqDJCivjI9MNruCNM/YT+5IVUWSO6O7uqqJzGaBwKj1IUdYtbtcdpFvG83NxWKP42VVECHKoepH3qvwg5p/dhXao2bKUpEO3xUR3aHGOe5iPGc/JEQGuvkGDhFfjsTyLuqk/ANZGF22HiqEm2ht16L9e9igzaaX2AQlISVMpTLgD3HqPbGP2alU13XcBNvO1GvdtNsRDLaZFAhBNB4z2AQJI4NBgE8FR1pgbvdu5WTcCUuNsxfKUpM8qDEel7yaNYyRTUdTHQo8aIImlHTFwb7tjbwt8tHbw5D1qlWj4x9LQHMTWWG5q2reA8BWCiolz3TdFNPX26yJoHQ5hL0qhYBEKx38evDkTO/GzvdIwAxpkR5pHMkK+RSuCUMXhP1uTUcNBK8VU5F3pMz9lPdpuMLegpNttYASx0tJVHK1yBdA7AZvmPn+ZpZ/GpSfqmsCaxq1ccbC2G9W5g/1rE1+EIXcp1gMhbM0/vxZXrXF2a8HFRFsxrH0Eh9II+coBqgj27J8sRriI8eLrNkyrrT8u9VCWrzy1w1cefcpCeViPUf/BeWxJrrX98POQBlroJ/TzYmZ2NOhet8L+IYfciH7nSIg+HiW40MyvxAxj8TXSLQKYrYIgMag3Y2ni+iNTzWFHDTlXXVvjhThMmRGB0+lg8atVLNHwN3qyn43WV7jSapopYsL7z9uogXBuvXKiYpcvIZZNBhKKAERKSr+FZif/Of8v9UnizYTceiCp2AgT42Lwxc1pLiqYEACZcxlG/kE0LnMBIZyDNTXOnfJPdA8hAwI9/S6uas+gdPIJ3B/eXAJr0M8h+XJDla3vtiRK1GNsSv4NPpUTAv+qqPqNV8tsTsoJ4l0Qlnvg4xrDs';const _IH='c1388a1d9349a3a6bcc6b9816b9f2d7b5091bc35836e9817284cd380982713a4';let _src;

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
