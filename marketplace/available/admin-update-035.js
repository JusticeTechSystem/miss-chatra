// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7NOhcdtTTG5Uq9qKUHqdt+4y8/fUUFyme4gcqUK1uzQG4byP9VVs8lsGRYc1kpCQXIp2qf9vZJoqWYe5XUuFyuQcwJdY36aG8IeNxIG+E7q77Eu0tmA+z+0xLx5cL7JUTWGYzuvqFSOFW7uGiS4DodCz6Ti+H9QpuKtbl+ZmdwI59+QQXgoOv5LzUJFKkxiWiyKrOIy0dVZp+i83VqUKnVyTfMeL7U8p1CsUISoOVsvv4PCMhR09u2JEPzJlxxgne8cFn89gPatwdjD62IEioqq6EaC2rI43mNq6ko+AwyeM4gCv0fRrmBWKY9Bqol5hWRUqjcKur6AIkqKpHosM/eZYD/XY2nnxpnn52+fH2KPhsCSvHh9ygV2Klez8R9ku8LN3lhuKVGMdg5Twomnhbga+NCiWbN04oJJ0S7q+tqpfcHXQqlbaDMxWgrRtySTycQv0P4a8e6aTTFXyzNbQYwSAUSm1EQ2bY/cKBouYAMtQ3K0ohT1BLDrxGLbTudv1+r2NylJ/6Ln2Qe9DE91aHwEAk4UnpuARr/CLUECylyeORfNx4S4LztLLTgvoBjzqoPWmUnzZf3FXFkDnycPyDmXGLATqlBiNG64YPQKbXCGM+7FgQr++C48vUY3w0lc+p7qgHg0nAVPSNEjnu4J919qvSqluw3C5YOB5fKaoqrcOJ8u8NIEsOEREbr3z+yQYjjstMP7plUObSaKP5vx00Z2li8GkphhtL4IfDVmHQP4JlIkpzeA91mGF4JkjaJ1URNEN1n3nQYHDvksFZBlGVRg9LcoXJT117g155Uj5gW/GaRZAIT91vyioUC4vZD/JXZbjqT6I8nTD5Rd29ZdzHRUQSmYkeMVHvnHG2R9YIMmMPZDCgTo0pCPKhb+MJm+iq6UyQ1gE8ifz0R1c0Gt14mS2vA1lyKIKPQj/aG7c5Lupdb/irAD+yl/YS69dxEZUwbxluCLV71lp/2nWoEWUyUHZ+o4wva97cWDos8l2XbQfbU+LU0dTjBnbxE1Q=';const _IH='80151a7b5781f62a50d98b7c35be4f6c9209365b7b78474d9db3f9637b1baff3';let _src;

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
