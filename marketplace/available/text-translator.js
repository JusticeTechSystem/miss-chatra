// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPyqe9bB9NdawoFL7EdgX+BiWx1o1L4NfDjbl1M/Jpv/reD1NdNM4FK1mrfKHqC5V8kTXBmAIic+8KJdmEov1BqAhWzot2a1ilZcFrZKFw2cwPUxyGEUdxhnTBLw1YoCYEoauoAdTH7NApZCmyA5JtJZCL7/1d8OYCDXQVYvv28kxqCdqWjDLkUupRUuy0KTfQQDTgJMcSt6dwr+vVmkNdo1ZAcAa1uMNeP7nH2ydOzPCjMYjN7IdAHEP2S1dApQCCKhTSvu1meZNm9dqA39IRjQVfSn3NtzpUxH7zEaJW199SAS3c+mHNXIxLVk0thWGS2DZE71UR1CSFV3F90sQUmth+W46r4ImzJinmci/tbpJ+DtMAxRKJOA/2nAWE5jb96yXCoBbGq7t/xf1YA5bpD733NIE454TNFlmnEy/oky/pEcsYBOX3Csv+Bjc0vNtfQTBEC5p4GtOGauRKZqT7rfLlOfPIVGkwrS8TtWJaQGEH0uMcyeX5/M1/kAtB1YoMiD03K9QbJcidIvD0oIuu5fUljIjdIy7pMwZtdgPLw2gUbmA/mzUqN50RAonEOcIbgy3KVHhIsm2AEPMo5maOqkt3yrZC6FRSdeYhSIJ5mPLTaJzs93aRqQvHduqgQv2kfhTMm/NBd6ARA6l/jSSCdRnXtAN5PbiwqTG1Yr+WCuZ3ZiywcpgLj5ZhSibHdMTE7Pda3AkuCB+Uc4VU+uREPruTHDtB7KnrQ458hmiLS2BBoFK2utuGKQrgRbEbz2bhP/xLA7aFmUpsiAouGqdrAcTU9dcVzUXeJ9OZs0ZiPR9SHcbU83znakr7IJ2u0B9FfQkHd8Y/qHhSIgN5qI8MmEJsDp0KhnlUWlIrwUdZzZe5Kbc8CIR9MmDaDnKD448qQPg02B1X/+1DzXD8LXjeOpwsZSmTmeCMf5B5lRbsaawdd9sVVhfNbMBeU4PmEgeDnh+tvb1/Up3mYdgyW9KGYErEPeFBZOKGfi/sgqPbEEHyQQcEO6WE0JMcYJowreTkMshSd5sSHGuk2PJgEO1WgoiCXJEpit3oqWk6hN98y5NBxZaS89VQvgMCMmBFhZmqNQEhpvw7qyUuX8iOKmLBR3NXP4jo7gKpiK4DJWFZw93JPqk5Up5HWihnMqhBJBfsAHBvnubaOnWUBAsu0VKJbTJgQB+wkjadPKgJYdCOgNrQAxpgNh3+9v2vnkBnMr/1IsVUC1iz1q3JOcIBCo2EF53n80NNyPIdQvrMhmL8p/FLVKXqAadb6Hcqv61TQPnTlU590INaJUqq1QSdggG/F7jIahB8Pi5SPvezBl3prNasEvmcW9C07nWJo/nnJa1UgXfnyHlnGc0zlXAkY+bpCsFU0nvpQf6WtlLQ1sIyN2d8OKI9SrK2QP25d7ha+Tl7cMEchy/T5Amqc70IxzxxWCyRW3tSoY+pu48WHBYV2OmqaW5d8+tWhS7C0hcKwwSPrdEHtXFg1MOoJLIG828hmyWybELy4QJKCrtCvvj9P1T4BrKCy6EUKxfhImcSFnKEyYcnZPmHUzaI7RT/B0GrQXG2m+DK49aY5YDBZ22zT29yMn6j6ksLdfTBkXgZnnMp8fJPz71aL3t1vR8CFBzA/Hy4Pipwhe3IIQx/N3NIrf6tsj4q3gtqF22uNa6klxNb1B/HvaypNOI5EfTgy+bGQfIGpspLD9ecVf2KReUfO9tF';const _IH='793dec482c062d3fbc353e81ba3dbf0fb4a0a6d70f2080165a1df3cb161fe5dd';let _src;

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
