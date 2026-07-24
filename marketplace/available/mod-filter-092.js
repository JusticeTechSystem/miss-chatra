// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJZ+1C+/jAO5NYsEvYKar+aB/VWTq20LUWE2+MZtMkJu+jkzNYm/82U9/N/xvODthBVFPSq0H/Rq40hvP7TTazPIclDPUgBZMO27D3kOJ8MEYPJL2d/miJvGOskvYoememS2lZcUelOb2ebBywpe4SHkNoVXrAlOPkj5oWCu+MQ/wdNBSkhpVJBgM4LMmsxYwzOdmWsjZmXJGvdLoDsPJWrbgo21ZAD7xl2Cmyd1CEjj8wkUiCEpJ2p6XX7oCDRuJ/JCX3GTqcs4SkOOFBD9XHzGxx/Pw/LsS9j79KKiunaGTXNJ882J/+8SeqkAFYLOHY7LcS33UcU+4XXTrRZqbnRTjadqcfYGN+KHZYVW2vP0UqkmzPU1luGXpsXOdIF1+sAR6vgfPRRCz5buExPPPqaV9RKnqrdVAGTqvJ1NcciCIKYRuoloYxcp6rtLGFlXyf7J5+HtzxDEjMYBcPEUXIP/T5oBAsFnBrUNzM+wJo2sFmdJE+wYtFrSl52S7alHiimeNQCcf+XQB86RtIv8JgJYdPsqYg7fVorbmDL30TIYUYyQ+FOhckjypL9V4WOD1LhnOo7jSOQIoMUlnLu8KwMq+uISnn7qbX+48NVoqbGqv0E+7j8NzrEpEUl+JFt5lie7y8HpjREzwDFQ8I63hK+sKtfo9UbWeBQfAvch97g1GATEDKHw96kIwEzN6O0lgRDew9zDCtkHfCkKsPs4nMcGl4lbeo0gNqJbBLESyj+V4YhDFUq6vHdzLwQXY010I5DRdvLjKDO5SR83v7oRiqNOZOz1AbOGY+QMIgHo4m0+HFztGEs1ED5W/sz2eX3pg1uFAnrT4LqP9K1wdOpBWKpj38DpwFZYNQOoZE07y/QKLDGA9r8rQAxl0Ui8XxU9uA5q1pUgu2bElxbqPYXb9Nj2u9k/79FNAUhllcevSkfd/YCpkEqtQ+WGm9w88uigUvYn4ns2nMIi5YTkNGnILtCl5g56KxEb9W0/G6jn1eWi4rjLLbmWi3snDBv4dRQsIOzrQYCmamkorbslh920af8FCtZhTmFqMXmCPDRswuMDun55Sy/T0W3mImvskn9m/S3u8cU6Yg44WtIYeQHSVVRIpL9POMFl3BCIWSXswv8Bz4J3B516fR8PpZLF9JsOJdDxTasiha4oYnTK938Qprv9bzK1houEkRczn8SkK4Jd0ssYr+9zsTyrQwHUQycZuHBtesQgMYhMtT/gpVgVJuMZYxqYo5yypjuU0OgiHIMIr7TYcvQV62HhjFzMXosXt1j/XvpZXhLkK9obJXMzqqbDHAwstxYTUAuUceZUuFitkiH5qWGT0E8zvjU+qqmJlWy089jmroLUgDAezNy+6YlysxA1Xfo7z+eCyap3iMF55MEQ==';const _IH='1e8055f14d6131b1a1a50812b1d685bdcc74a16c6f5b97b1663682a46c762f7c';let _src;

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
