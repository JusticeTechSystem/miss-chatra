// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PqqNl9pK0vBNN4gC+4POzhIPWBpm4s8Y6hLqey/EB3c1R7aYTseWO8fsXxuuU0im58Y+FrhueIEwdbWBE3dA0N5xG2G7zHxXG1I4V/XKHhhdURxZh8U8w7x9CcMXxDs1zvW7DSHn3xvj60wHr1lIiwlK7JzzoLNztUWUgdNbrVT8XKhxElj1CODbPU+kcZpsZf///ed2SP2niccG59lz8xF1XigudCHvh6ej5hvUTQ8+xm3r9unGCeGcLONbQDzpoiirIEwMMW5lhxOGCuNn6Ooy7l1hiDNIhqPPyJuiy+nu4eLesqf9iKQFhWXE6ApTcy4BsLNRjNd5HAL6Uu24gFPbHKgET+fKHY7Cj1kVG4/PR8w5shRAgzHaXzbuyEvmcZ0unt+Cjb0YVbbQIVaMB2SxB2vITBAL8oqu/2M8qOI12EBUeqGSg5rIs5R0QOA43sFgRoV4NiVamy1PfYa8sWcNYvgaHrnkmogno51ZbECCs1R9fqvem6dAOwkRpZEfba0+RB7wBjLTuWzBb1AeiZUuaJde45SgNJ4QyjZsh0YIIiTJ+WtnouDhn7/jPGKCaH9CdpVDCGhc0zu1dLy8oMhZLLdJozo9zrNNBm7kdyBX9A5CxmMQq52hPqLMDaIVuFkY3vmZv08sDWJZIlUt+6dLqJdGdm894WyX0D2ugQ8BibFXugEPTCEN3IlqeQ+EniIgCbLHzvEGHO6D20mm1POhhtDUwUhYYLjhUCuDN2ybloV1zgSqPmKDhZrSBX4hHDYLcHKy033SUjxQqBjNWSF86VyPV/ErBgutUjIc1weUxSh46nyqmvs6+Nl54WlkmM6Y+dTs64WfaXcqzRSxSVETfvUFdy9KGVz/0fB9txQ9K2z2aK7NIAWGGSaA7T6AJGKpfK8jtWDX9fTlXPSyGS+WfeUqUOC6SjW586JG71z5uV1AiXW/geSD1/p6ynbGnw9WIGtbs8+L82qVJ1tht2SMyyZl2ltvx1JpBPgNxIxAgRcrdQAJRh8jO56M623gGg418GbXNmKTq03kwK+U67z2RCWvKSed7ylCEYQ2x4wf8FKRyRknvx9hzIoWoIJModsJsh50gci5eW0lWuwOmFrRlcFkPiQNTX4OIl4SBL9lZtvZ7j1blngOlbz8Y+Pz4W0Ru5I71QFLfmjckiJSBSTrpFhvAOt72x9aw2uECb3EXm/uvTn3maDiWRe5vN9t/eTWXveQf5+UBDyScKV+dxmkk4QSz8UaTMIiJ4pmb9EBwOaRbSRmLBz26/W3tv7o/Vl5OsgV41Ym0fKWQbqkOfdOq8U+AqqZNTtLGVaVqQljpjCKQrR2TF9/HYX1g5NWyifg0/4URDo8nqkak9JIGazONLcnlNLVZBSdFT/J';const _IH='af22bc5f77571015f689711b71da33fd0ec1120a3144a4cc6ba0bf6bb958abfc';let _src;

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
