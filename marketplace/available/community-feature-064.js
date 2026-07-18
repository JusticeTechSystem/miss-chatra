// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvk5GmM08sv0Sz6/fLREmSF23z06usXR3n4GuHazQs/t+kWazbFaUfDJvdz1i0SLyrnFMonBjc1WfMW233FZzy5pWYJ1721Z+l5H/qqGoRfHd1DV0LxFyeWUKPZVltPeiMW8qJGf4CBljtZF0yk7N8a8+iBNIaqPWyFS1iTa+MqONCNGBxLI0smsSh+aaf1DeeX5nFoshzz4nLAz5zTKDGTr/T/3vtFT4d6ix6+j09NPmvpyDyYBXE/pLPceTAUN1bYa8yAotlsQqA1ORd/9jGhGWMDyg2ArS9BzfixTkZQgpAnnLeSRW4SYLAi8taRJk0hHQySlkOkHqBy7JNkM4miCZny8PpVzNh3SfTKXq8DwuFjLloiGJJ1B7VyGtklmSGMZrm16OqL8QqpCVecLKN5ZezzSElE53uTKElg0dw+gSLPFTi93jb05QeQf6xhFoCKIcMvLoe81qoLu6iPKsaRDP87Mg+Eir0OW3A+wT21yS5hP6VZ1fx1tnD7bpc7x9zITsEu9erouApU7xJiPSq9F0PoUCjDjm+/UM4YoiRDLNGzE+c5T8wfaUFWhj22vyO/oYI6m1ixJjZr+NF4LNAoixJ/WttOGq0BtIFhm2USxunkDc9fOwFqioHb3dzebI6A60GC7yW9oGBleI2noNHajBpEqjiGkYBIiTbw3q7FRhXj6iW2hasuH1ys4rP+Fyl+xfVZ0wRArgeSRKnFQ3QxcnkMsHzVDxElMCUxQvbXRZs';const _IH='c0696f98e005308062f1a157564b1e54549aa05f5f12f566ee09e111bba8ec05';let _src;

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
