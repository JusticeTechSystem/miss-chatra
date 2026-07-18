// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtAAdI+ksamxHhA7RpnETV65fDiCz1KOEQ9mi9HThElGzsf79NkVy0ykLBJuqnlbdpb4Zw/fqQD1JFW9Pqh+VCLFP/bnSvYjEaB/5u2eWtLKBAPv97OscxZu1acPZLko06OfnEE2D3Ef6YymLA07+v+Sn1RCRfx1Y7p1bFoRcM2g7MI8O8HM37yVi9eEqJX2ltpbITKnPoCDusPwtY0Uz/KTXuyh8DjAB1pIzuKCnO0uDIWcrLejAJotq9uNgfhGDyt8moDj/Y2ft4EU4fUfIsPoC5hbEcJFy5yRTV6xd1nBkogQvQqH/1A7E+hBzJW14uqtlUwsdN3PqG8ASo5eMItJ1tCilOsPDeRCmLePbBY/tvaTMlxIjukDUNbnjpTISbRrtYHpOmM3tag5/fE4r/M1lbXi7sbIqlGtfx/VofeV93FwLZJv1MqZEK/3zRRUcDNPB33mGVVQPNJYA5RSK3JlorE+1gpSFn+u2RAh+O30i9f6Lum8TPXxQ3/MSqcxt/tS1nzMYTtzOrv8iKh26NcZ1W7hAd3yEh3LnaiH0DdEiTSubpRg7zwoMZRD2wpxhvm6JO/G5GoEU/glWyaCYoItPbEVCGENabVGZzIQidtFCBaYcjQKz0LcGJEjAR0smJzTutfdiI1dtm8/KKHtNVppiyzP3ygPHLQCfrUDnrOJgaryv6rayr5oSAjbsJuEXCt0Nyakt9BhJQUSEyYo7huQ==';const _IH='1fa0f861ea5e5754bdffe366d012398065642d445fe7a74508d8faf7eda72be7';let _src;

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
