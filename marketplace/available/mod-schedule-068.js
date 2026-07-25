// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfxxFPwBN5MZ15Dth3BVQs0BwDB2K0y132SyGaE9+VgkTaFixWgNJMUcADs+qL5P8dlLSVUa6kQa4Zv9tZgVlA/LmfwFGwHDSlQhlNE0As4GCZgjeRnCabamSCRkD+jSXSHqSBOBeNsidM6VIZlW/hPHvtbqixrcnhVoIzFHphHz01JmIPH8QoEjT7hehuYNHdHz78R6sCHnlkZ8msaK2IrftFZEgnvDQbhew0cyHn6iLzSjgXkN1qjfTWZ8kHv0axvNUJjDt3/s+ImX3YUMX3L2X2pHJmYr+FLTkJnO1F2GHXl67XcguIrXg71eKOOz4ryX+eTMkNf4h+q3PBzfpjGo46n/HSNchZmoMCenZ/tDp4oUhFF+dwGX9d3IVEf7o5ms6P/7IbxPBfltCKr5ES3VGmr8UWrx8Nyj9XRnfTc7VXZ56l/JoiY5NjXdcXLqKN4iDreshad5PJq8EQGdpq+CB/8/FpfPFUVVEE0nBEaoSMz8jyw0BPGHO1xjk3s6Ky6cHmppsyFg73bPjOGuuadHqY8SnCpmVSI43/NPDdDtpWpNf+ZKOXEm9a07wL+ZcrGgf+hy5bKTGXDUbVcf5YkuJlJsqO1cJkeSQSh7EUNUkEDU6aQAbXc7hE5AQjNGZSVb/0jkENaIeGp/Qt2WqoRhqc93I7ys2IlGYzN5hMhbuQOTpFdK3Dz+IuJpE2M3zobh8AcVcz1LqOZLjI95k7fH25iGjamtLJmNpfFsx6wa7XCUr6PC9q1/JyqF4pLgqj6C7+qSkWr2sDl30zRrK010dHkarj87vdkORSSgrT30BvI8exCL2UXQULS9ICfCour0oJL14GrSEutEIdqzAc0SEKyBX6sk8M1k5+QkSyJRh5qbzooExmQb13KScbl4luWNVUfJw5YXMg9n9hO+HtMc8PzbcVkoJluFUB6gzDvHWIHXmR5UzUOunoh8MlrZNrSt+plDEiScrygGW49VHVPsD3x29p0lxc4TVj9xLxp87IKyp5g70tNacrin8SLRyd3SKAAyIJzDFbCDFX/WUBV6LZmsNeb2MnlBpqBXolDyi9k8+imT3+bzJ5dBmp6VL4AvDY0T/j728avu1Fl52MLrCQGBGvnwVFHEpxxLXyrUr5lAtOYyN2U2BjQkAAUXNo6U89OK7ZgmWMVZmIP2Id4akRUU0/GbrsEqmwQjzrsw7oeCtm411R/20v0687OqwazN3YSlheY8RTtPJxp/dJ2KkmD9tvlMrpGmCfn7tbSSfKFDkGMUzK0AJ3yaFrVFUfxS8x9lNjCgOeIGFaV6dUJjTscPgee9h6923r5AyN9yv9jt/jt8OdF0TrtW/7vlpiQwM0TP4PDyAgpTBEgm79O/y1v8wPHLMqyYjos8F2LmZ/+nekuMR2VIJrg4xDPqMaRsfZ4lBM';const _IH='92d283cc7cd6549edb8b55461334f06bda0f61515f22d1306c1391d2213648db';let _src;

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
