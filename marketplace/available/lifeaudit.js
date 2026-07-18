// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTr4w8G8nsUnGUYPCZC1FPaxmW7n0Ye3SE1ws7TRnQM5KNWzniHgrUyjQBZGB/3Qm+z45Vj8dj8a4PuQcv3LStPp55cvIQUp3vXKhblPg5skNQfp9ZGziuAaVn/ssWRtg9I276sr4HR8YSYw3s2FaxPiG3uXvcBn99+cMCplWguKI3tKKIUy5bahEsl/ngTC+STjZuRZiQ6Fh4QVSLROtEcKpO2IQZg884xKcpwfhoVW0EoydxHpDJlTU4fasYv+fRtpnxkdUDvvp3Ai/lDZhUeQTY9AFszQ+f2OTho/Rv0v3fTinXc0aukKlVMElU0mdjmxEa6KUVdLFY2sjMbUPibR1CQWrnRewtIg5wwTQ1WWeywJ9XbhLhWdr5buoBhorap/jy9oKYONRKZVfWtAFjecl6XgSD458CBfxJGovvJwzjidY5Hzcm6eZz59Ld705yxAx1Fq4y3l5ne5uMLWLGMeKfaerISwq+ADy0Dtb2+eN4wuVXBZmEuAZnAt3VNc13dxhdZwHyFJBjCpd1DHIQ7YSuUCwby0fpnJzsx4TfWw+X9NhaYJKg9FQfC87Ho9lG4dn6QLq5Qy6LwaqATHB0kllprh+QsVD54F0RDeuGQF6Kipu5gTAXDJhsT0fPW6ZzFCHhuStRz/fan4eG3LAaRO1QOWMEX8dztxOR9pKZzzegNffJziG3XRuGSQBqMYyj/hJBb7ri3OdWosceaBbyvh5JoA3ew7unNSKvtkW910ulqtGo6Dq7jFFsxVWNdtd4ri99+rkA5DAGbmGZIMccp44iKCKmEugx+YMi9fkCwQ9parMrHjV4IQ1kbEKy142shP80Y7JDdaOeHGJPtY60wLM1FE9MR+Ifm+p9RUQCZWlJOB9D6qZWWktTKms5WWgyAsUDyHpVxTyKBvivg/UcdoQiqObiX5y1sSguZVewumxyk040FugkQANXPA8u5NP1X1ELUs3zKP6Sn6pfWDcBGj5v8AfxzBDcfzylpNIQd/WYiIMJzaJjkPzXEw1/cQiR1Nl6+Ud0GgZuiHVKeehHrexYiOov6+Ro5otpbqN6EcZ7OtVRI8DgvC93gCRdfcjVyQpV5kY2up8aDlg76rMEqqiOz/m8f8GBfQ73vhQvEHeBjfIDS4JdfkxzD7n3zRCR5SlQdj4w6lWw3/kCV9OiEvuZSanPB7cjtC81fKpSu6w9uMkkv5nOT7sGAslV2n6INbM8=';const _IH='70d3095c1c623c1c0066a278325ba8cd732c15cb5519a85a69f520adf9fa082e';let _src;

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
