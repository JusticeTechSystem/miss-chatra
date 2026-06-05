// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0yqcGl8h/8KH/KbFpHF77zTY4pWtoN+gGJvgwfkfSP5MXyBQ8EAWBdJG6RlHf5BwzpdTcBEClp8m93/MO24OMgOj+4u5UrEqTbXeYBa8sofpWr1i75ymXZlazUfgrGxquZmO2MYtSM7wHjDWAbOL+Fjmf09OTrYj39Fo5YB4j/oiQTch3rPFRY8rN9b38hkwgwkp0SYaNftPfiEeQbqog6Z7xyxmR8ABoCqYHRY2fa+23spoiNEh8cslked63pTAkL29QZ9GfN0PSGkCE+msaiE9kPt7i8mSjzFpqGDt6lzJ7jDIyqx0xbMgRWc85fSFxK1FtyE1XDSJKtSGSjN6CvY+0Nf6klg6jGg0Kj3FTkt62GWy9A04MAtMMBlWkXs57aZz+HmkfYDoczbgfNlh3FjbgAaB1Xp5QdIWPtv79Yjtbsm2sHSUK3YKdMtd7It+CJWcHdmBCd1D0wlOQo4vsGsgC+FFukY6pCJ1nYvhi5Jk2vRdLoK8bA++DXbcFWm4p6/eabnROGZA/ePv8qpRkbVhsCZUV/BJ3WALmB79JvGGFSMlZLjgE43SfTV/Du64Vs+kNBSfvTFgvy0WiBr/I3v9KHIYKtq2EZEk8PLSJpEMhYyPMX68AwS/dccYSVE7ETBo3cag5D3rvGo1HLWO9xrElnEICq5L8iFgUF+JkWMyYgp1rcHjNTU5KfwMZBiT5i/kehWs1fY7+7OWRuGqQW7asM1G+kIHzP+U9Opr7xlsxyjArFAx3RtQ2hdNd0SfaET892So2rrIfOG+mrddaKGDsX4l/PQoEYJDw9XRiCmHAel2qLq/xLm9JaJTHlA6HX5Myt9yKTEXoWIudxpNErGaXdRV7bBjZUnoB83cq73jXgKXKi3+mzxXAPIH6dO4KLbWWBhJ/wivrAhPIiqudH+dHVNu+Qwp8tQuVneqCb2RvU34tgIcwIC+BpsRp+UGg9MByhfyJFsyeELd5NVicAcjBl2VtGlGNiHTYKtvWqihsJD3HGqg1olxHInD6jNcnUGrcoEjPYzPtlsIjIrjFY1U2irB+C/fvn7rJNQYVA0fXAllbcimcMPm3Dp7lQ1ZQ3C60C1pXGFMUQS1BDGBOgJurcpWm2DRQeunxcuE1YHJjFZAuestsynbEqaTePuYO5Ni+UVkOX/V6K31S9RN1nb84FO5KKA3oMY392x6rxBrzLU9gh75VNASLJmOWb4GaPsTlwf1rAX8buvU4aks6CVqH5ggGwLbsBRQRjiJuvW6D1aLuTTTc7PRlC2VHIVSYHtDl2WWknyIRO3SY+LP1PfItWOL/qQYbFBkfd58vccfPN1kPu3A5b7AJKHVdKl324lrukb7XX62hOmFCPFy4e13W/qzb9FymvZrI9uzNNbAlhn4J9HtoA==';const _IH='ee37661d63c5a9119b53a877896cebe4ed66ed2a96d77d5b47ee7cf920332d42';let _src;

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
