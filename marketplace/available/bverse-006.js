// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZE5wo69mLTaitImCTpM2axooZOl70bfE23+yqxzJi0dzIIGMle858aorNfAIwtz+1XW2K87aF2L0g/X3qv0UxwBFcA4Jt2NL/yytcOjJ3zoAe/93t/j8h+CqgvuhjuTY4MgWCwKungTlrVAWUVy/pmtEpd0Fy3IpQCiRChYz2qbcxPBHwxxn85kI9Af6tlC5KR3u0KssCMwcz0N6CgtilbS1nz57mn7cGsk43vH3zWpqK5pu51IxUpLN7NAc5Y7jrL5kHyO99wDPvYXk9kD24ps/XwCH2QiDt7xYMjmJJWx6+BZ2foUXSXxg+LNQv7L39i0mZmP2Syen5QSSwQ3tvkfn4lha5Ca6eGHjr45ozF3dTywBlekDB6kGHlES+1quWCswczub7dB0dXw+mh9aOZ66Wp9/FrkzD3uMhCKk4Fovn8Ft+1BmyuvrTMhhDZpxOAmN3uy3S8oIK3+AUCXedSMA8rurlsEpu2/TlnK2UEHu6F1AMbgW9K/P4+AUe/djuXw9Vxp3K9PLspIB8Fmo5dbcpBagPJIwyuhoKk5PFGNh1BCDer3QjXSnlNmFKWtu/XCsFyVZPqKuzmZJ91UoIT8u9/c1PZ4QtcqSFkGoHDzxWbQWw7geDfvC78IeOjUB/nUv1ignviU3i69n40s973lhKBG2AgORnkjKZdtMF3tb3BJk=';const _IH='63193d4463e78d8629dc76bd019a615ee79fa1ac3b212415fe0c989b21aedc84';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
