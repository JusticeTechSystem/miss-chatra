// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fHMAOarxf2MatIVBmoKssbDsd7FxYy2tj0noQTr1ruT06qh9fSQiJ3YYAjNqTDiNfKwjTdv99DhvhTDH/xDeO58YLNoqr8qfxJIoMXu+eAmroNdu2HBMy1kbP1FJqACcQoqez5yMr2lLTY922mqkBWURo6CG1LLuRaU3uhbzSU5jvcFSlfEw7/X/M0uB4TmdaZi5uTfv6G8OzQGLCLJNEN8MBAk6oL86Fb2FHnE4TvfATo2acJ1RI2JBkuUTT9fjhJ+EecHe/4YPUWUf50RIwzfGriaAOVN4Ulv0fs8Rno+yTJs99rtDf6s5PGRceWAsQLpQ0bNSbHdxNPV0f7qHStsCQffe8i3oZ38UpAmDkI9eE+6lEkuNXicTn/nAZJjBnBOIDfTjmZMQRl0ZgTbDBhMCB4hxdpvqgxkg9UWi4uVvYN8Pqdh14VIXYt+6wz+iLDkX7vaYY66DI0RvpZmI+9zsMN9UhpZAINOvAuQ1VR+SNb1Vfd451hJA2hSsWRSG8ApjxxFnoEiBu+b8Yyu8QhlSasYsAqMLDIGNNMz5I+JtM/uWJGHE+f6K6esSa3NO8BjmRpC4KYQpVN/wA5BhHhpXMdfXFHpeSAvo0PTEYog2r4S1cp1jR5vKjl8xCUVvrb+t3J5Cn+AzxTfauwQqkcEqetxre/sr3sguUooWrmh9Mg2nsTLRGPwPDX4BMQRI49UsUWSaf6DCXIPnfb5gfOV/7eXJnJ+VcK8mB23RkUQkYycVYwwY0KT4XXhATJzfoaa1Wi4/+LDcI6wiPlFVTLt8hyFUt4ftu3D/VdSGqesuF/85aoUP36+a5iOr0cNc3DP+ePtCOKjWRimU4qXpi8zwmUksbKltkUZ20y+YjO0hKVQO7v8Dgku7ts61yD3mrC1QPL//N125cSG+FlhQYwFTJnm1j4QejGyuLKPXPq78JZPhQxxTP0FQgirWA+ST1XCv8TWts2qW1QZ4wyptCY7tWNM+j7Lf0lmmWOkaducM5FexH1HiXxAC2zSRYmDVktl4EUMAYsuDmY700e/use0=';const _IH='d907dc4958cdb16d9b099b973a2e7b28cdb0877549beb9f61f9820ce4e8140dd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
