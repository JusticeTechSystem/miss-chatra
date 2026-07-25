// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7VQeBmzoj8VdQDtluKCZBKICLhQp71CWarAlB6mLUyjY4s7xc8fUBeEX26vIP+2csl8Lc5rrvxKadxe1Nbd+GA233TUqDMiFpmtGvbYSdo5bv1n5F97rcahlsKPm6uWdLC9YlfCPua6PyZWj87xkCmtq7Zaocb4MLLqVrBrM0LMYJeEtDuqVHbfpxTOoeYMT5pySy/kmS8NAqjZbmIW9kacevGgDzsq8BI/xbv6VZ88+/OihQWBV2VfV77IZBHvwmvRgYrloognJKYjalwvDGRenamiRiyTNyofXttXppw+yDrCis3xFplOCxIY4qImKmzkHaIQESkOJYIaaeWMQXdFTNiUf4lFMpWclQf1MXyrfDml9OyH6B8mYly2iPUx2XqfTr9ZEAaAeDL5Lh9kRgM/bjD9RIX9jGwXXPRKeICwWiJwDbu4y7iyapfJu6t7sng8pnYevxgLAcGyoIH4XY9ZbVcqiMPbVIaaA/yKI1H879cRQ89HQy2veJgNvO5D/lQvyCpTPVb1rgiUyGGg7GVL0/AZlhcR6effucdMiTCX6ZYiaYVIgAWX9j0Rxx3zZI+2wlP8s9ii7v2NrfeP6KkfLePU3MGXx7zVGzWZd4QP9MukCcE3qQytqnjKrUY19suXnAI48fDXz65Q5yWo8ee4Hm6KExsmtFzaybiaLnDAn5D7WYwYN/WyqpD4bWqWYPrYjcSoqmSbXQ5lcIeVD3YdkeImg4wsaaepLI8zRgA6X1E8TQCW4WCHKjWw5M1ZKxP7xKxXOiLDgbaH8Xnl+2fEgONT3GxEtxj2IGj32Bxq53sraHnogfFk004dUJEpK936nn+RW3fFA8Ru5INC5Fnqufm5adWTOVDac5lc+RZip4f4yyt4LFVe/0Qf6mxMHq+DDl36EFIymo9m04EO2pfsDDujh7UvXvNEpwjNftZ5NJ0z8EIrjnKAgEecLLlFISu4zO6tlk4edEULYtY3DCIa6Q6RPY3ql0Lov5lZwjkBPh5ulfZdbMCqIw8PPBuBhuepYX7ir+Q/StCkZ72Y3StMW8dhCXReR3dch9ACU=';const _IH='8902df2511086e89d7b8ef330ed68dbfd8361a076987a9def4a7e5c75d27c401';let _src;

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
