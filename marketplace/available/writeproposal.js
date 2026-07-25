// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZesgHIp4zPGFXJQwt2upmTowTgXkTbOtoBYO2pW9HzL8Jo93eYqDWY302RxzlWS752ka8uWBaswwZu9PFL926N9aLke2DRMFPTNcS1ZkZSQK/C3C5VYBuX2Llx3eEi21fglPM2l72Rxg405soOS5Q4zfzNrMJle1gbB4jXQUNAcozEhd79NuYkSMlFIfR7cAtEyBWcUdR0DCqa1ArFkfizdwNAGuCNqBLUQjoPvGmOmrYv91gAJzLdh+pB1kG7XdjbZHkUTl25dgVWEkwvP5Rq8AZDLVfNWnGbuLcDHBwttU1N6804FzeTvRg23XShdx5yRQ7QNtKheiphz8RzG57GCb5xFMk/MgKGbTdLKGI/FLYx31I7O1xq3m+AnRnZOpY6ZDSrqg70q840x3AOEBviB3t/8gFyKZ2ajGRYuoCvFqlyJXN4Y8BsbEdZ6pximS9V7HAQ2ygddBFVDNRhHddVf8EL2C5WoBCY47tKxBCE2mO+BNtkWR6im9W0ttrfo6LarCBiK4SFq15fPmxJsvwJj6VL3ox29XTCcAmQKvm6NaV7wrRbOlDOnAvPnBYPqVSEFnrJkVXF6oIOEKpRGZfOnYn8cvukz0Nrwx9Pm3kz9K+hA4LopKW5HVsT2kvt9OGyX6RWbRjYR1I5ouyrJCxxkl9e4OAunoLTT/q6XXtSPfRrFhacUyE3bVSxpdmG8aqgc2FCVzJBSkp1dt7gT0h79McHf7/m3I0z9TUhyRiDJ0ZMG/bIM848Hzi82Arf5qSdJNhkj6znR1NI4Vu96GVPgUCgZMVg7M+RtR8XBTLOqfj+CfnFT2NlJuzeu0mB7Y/gDt8e1eN6tV/saXZu6uNuIMGgvjk999jkF2a8VOdVrh7TJ71f692J7oQ3fkUdr1/hQ/mVKvQCL1968ddvl299jVIA/DxIVabPdoXQbIR7UAp0feYAGDjDe6ZmYFWk6gBm+VPjL80R72i3PfdbRcYrKHHwV6g2i+YOi8UrGEhSMphq6rBE05VmNfY6cTwkyRYaBe6KFGdYPL4eFlkg+fkf3D9QeRETTphI1isDuXbGAAMM7hi2jW5FMangDgFYSNNs2r9AYbqoe4CZxDfPKe+va/FqXDNm1KAr6JS/KmBduHYvz1eISP+65E3sGPIC7v1UIm5pVrNZMGcro+l2tVPnpYRDVV2CjMSYvlOs3hJbaSj+znsCoRQ+d7zHA3lXQpVBLSqNvvW4n/M/fbaDNy/pLVa';const _IH='7af3f3b45a9ec2afbe3c1f9bf07b35555faf9910a95c0726a86e82b8df3d4c24';let _src;

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
