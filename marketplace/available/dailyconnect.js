// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRs0bRq1tj0Bjbwcqp4iTHHSxyT208W61luG20Z+hpSBeUYXcJTtVV9enubf1II1ZBGqw9aINH1gE9AQKvr3wtrt+I2hjytkXoRF0PCySrY9BZl9Jo/l08L9xhN/MXS17XV9PXf3V6tI/6ARI04irwqMV/mNncxOz7qI/FU+IruTrYpxdQTdeJxrX6GvK1HA1LuaYTwsakzoWfaW3R52J0TRgcmezrGBwkzXvBZPjX5ACkLlQX06lh4GBqhYEMSyDGqEQj8TXSdLn1HU+KuyFfHL3RXuv/DDdJgRaaWwKYXouIpWscTXi2gSyq7P36JPx8VYEj0/cCRJKl08WyzheOBy3KgiL23iAkidjUyv5TtM60y6vuMP0vqtVdUQVf5i4e/gEy9Ergk2hPH28SxBnNvPTZ2pPrWkWktPWkEG1VLDcedhvRyn/p3ZzZJQsP4BUQEQCRLxqqQKmB5P6mUg26FXHyNI0/QKkzduAakR5yEFUUvRR60EzOEerjvQSNpLpZd0K5zwHHOb6Anq1dGjbWr+LBnQ/8pmOCsnNBZpOyb0f+eN9f5JT2ia6YV/iqNbfJriyt47E/DLOU4ZceuwGL9ttv/BjumN8BTIzQky3sg+9myB3+hqVHJCVUy7pI6I14vX/th1D7hZXA78hQxD+zpx373yRoU0t0UI+rbEaDPIcupjxFmXVTg5r0yjKjD7B3uQ3Fw4m8t8J6wGMZ//cdkGZqB82K+sM2Y8QNCJ66JNQLp4bdRBpO5XG7P70s5bqZLYfzhfxfj1ep6+crOGpf6VSe7Ce9eS7LUCtNpVmCLKbD+ZQu9SzD0yITpIhOj4YiYnhzbRekpszpESyMTJDapvQSg6meR00kYYykO3CLQUMYcU/6nOrYdt/4hIvAw98Tg9cc0/S4fEIZIKAtQ3fuur1BNCuLjTK2QGBAKApJGNdyLMEkY4oC73CJrC8P4PGWT2hf8ZWCh1PK5CyX6+9QFb7LaVdADlwDnJTsX7GFdomZVEMIBzDXojK3nwvWuzGguO1kc2Y/kJ9bP3liPjxB4UFmxADn4eHDX/llugHHRsZNarFp9DEpWEb3VtmXn0pml7C83RlpNN1UpDdgfAXQ9UfRkVd/fuOeE0E7Oj/29aTquBfOYd/DGWYR+AeMskOLLaygooYbtJhLs+Na0Ri/nETQjpzreP2OJcWyU1NMeCceHytsvezC2fG3ms6YQUbq/jP1fqg+PDg==';const _IH='1d38290c7919b82877401b4336a69b2f417fab7b369f3e5a9c6003db94ddfc59';let _src;

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
