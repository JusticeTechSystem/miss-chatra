// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2PyN2u2lz1+FQwoq20s1QWFQ+3HezM46WfYc+qxRzKiKFQI3Yzo4BK0zpGhfnFP7Au4iCoLAVhY8B+12sZ8uKvmYufKlSLoLOXRHOk6y0wSv47wziWLGs3WFRL9h53I8gd9tsh8C2ugI8DbI9rzw5m7j0RtSAvZOwjisO3PmkLOoRkMaLH+qXMWz82amBsBYi2mzwxcU7OEng7z95vNANzM+VWkRhkmqVD0xDAZsyYj+O4O88H7I1gtF//NxXS3COEr/qABchS1p4WjO1DdFcK+Jtk+eKBcRd1iKO63ximU2psuhG0L6HJH9MxbwlV7hzdXRnh6JhT0d3U7cg2DJsGqXlfHF9caVvlwP3YLVN0rQbFEPFi68KeTtHjK0q14lDHnOKHKhCPQhsSeQBWXid997D/fwvEPk8auO39VLVSrd1hjH+5v4g4loMKi/LCmlGBm1IQPtGOFnjxYOrtFVhIliFuGqnuxJLXEjTBl4NMMi+KYsN4SH8nh6jTYzg3QBSicmfuiNUJmCAB+kA3/wCaVtt6YgjopCPSTfVeyribP8kWI7Xts3mjLKAWs9oH4YZhLulwc5WYjaY35m0JNzKYvFB7LIgHQ9y5ZR2o12H0AtfwgXf437wEmWKth1AnyW6t3+roUtppFFwyhvmUHEuupJoJYguAUqGCvWV4xwdDZKjcZOOxHCplNS1RLixUOrhmE4NpK5h2t+Hirfygf2UlI=';const _IH='9ba974c6eb22cc9cea21b6e1a5569bc6afaeb4317caa347c0addf0662ab44f02';let _src;

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
