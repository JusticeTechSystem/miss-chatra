// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KVvggZMnj2WToGaLrHvz4PtncI2viNIJ1WtuhI5eghZ1XqefYlhVQpP5HpfanobWfyyty0SZu9usqdnKB54HqvOn05RBbucQqzYc60rz10th/eXhOV+/BVweqGJzEcSPlbMRwlcUmsiV83YxtRUNqLB2BJdF1DvB5ZGRiowNxNkcKgqac/48PccIaggHiX17+/s0nNHVKm1MGJ7isElFZkgMkJtRoMBLG0zZhhfJ7Y7IXWvkMQe9yV4rtXIVJvqEkbrVf+gs0rgbbvu6153fPrbZ1D7r7bciI1JzBU5ku4Nz5k/eiS0GmJl0GyJcVWkoxhnlVlY02kBHnypeOD5O8LKb9ULSxhXlTzxs5HXNrbPjp3AuimMgHh72gp8myXJbxO9MKeDbhO8P6eFNXcN+13KXii4QkZ6LCOL1byyHMXuv7kHdZomSq3NoVbkLEX7D1qwcdH0nxN5lc0SCkmiSVCZ5MKWiKJHagHKGyK7Oc9eXzEcGS7W4KmEXXiQBOMpppZnEMv2OENH+UleCnqmzbtJfCl/sxf7c8ijs1nCTQI+Rq2exFwgh4PcVIzaHtBZ9wwb/ggIcvbz2eIkW0vv4duvptLhIeVaCIUii5a3tNIRrsmXYVpDqg2VYc5/KSb/hFOeMYZpc/IvikXMEt+EoPSkwNEkLajP2WjeXEn1cNDiUpI7yJ3/lc0po5G/qGcHniL/gWQeAxQmOHNmVbTCjb3pdap3rC00zpHDYWXnJ/uRF6z7x5/409+B3P4EcwReVGs1qQjP50elCsl7HM0Gpa+chTr/+UVG6NeOeTtur+F8j7KzSnGYIaF0DkgBp078ZH9oYReM/aVcX/mzjA2m5RT1NaRUwIP4l7PTS8LYTkI/eoYiDSd7VLCCL11qyoDQhg+aWaOvGBrDvQkt//tLWGZm4yPOe81waWzZgscV3axnMyayBnFu206HXQg==';const _IH='4c46b4b40642e478ee1af2f8a9975867c936f96d5bb7a8e1eaa5b8464d629830';let _src;

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
