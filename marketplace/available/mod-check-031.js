// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4LjGL52wBxyqYp8+cXsOV0hoKAOYQk91AJB8YXPbyLsCZ8H1z+L1fsWhBgcUoVo9Ebt1bRZaYgNo6N5GzjiGYXBUBMWMQ6lLN4aNxlnFgKIwSrkZqo8r/U2hNCc7KCA4BVLxu79COncIQWKPcijGJCTBUsgFNCWjSOPF0O+NVYhpJrYAFEkITqUWsIXvCUUbHdog8Jm2NvExIoin5cVg7c/aPqqhOBat5y0mzX7CNOCHAE107Z8RYgBo4r6Nd106rA/8MQ5T1m0zQixF6xa7q15+Va+EYme4dvqJALQFMQoessnJT8A52seSNqa2jABg885diW9Arth2fRxH5qdmKqIGbEZK/pfWEP4G5Sp4Sjk0GoA9iL7HNAkFpirQS98y004cLebiH61QUDfA40KSoN6VsRmlLwscVRowI0qMGvGkGIZJo7Ny+Nxjn2X9jNKmKfO9JZk+qIKTwXoNLvR00DgnEAI2MQK55OV1GDxwwgUfuQCI/xxFQCBwGx4/b/xixpaBjtIOeHG4hLYqXivj5a2fewZ+UUcnU8Uwng9Y/ht37BGVyqA9MUFMAWPFvcyuYmxqLp0FPiyvL9jtMFOTsiOrydo69+jfYTbL9oeoaA8I+i+Bg8sLsnz+rB7e7V0BSKc2oFPrt1LM6g1bW72iXPOP6IRDwI4xm/pOSvk5asOjDUpizp90kyWkY6DRjyUlvOK51zB7vXsioiY26UqA+eu+6byrznNQCB44LfXD5Kc91g92qMfhV98kqgti6XQvzmiLVsiXCVh0u3SgdORDBIVhl0ITTq2+lQCCh8Xk7NqjpJCkJ47cZuJK2dP1rbRfeRXtRPRZcrfFK9j8l5hxLLM76s/SV114ged56A4KseFBIrn1dXe475S+oclgGlUUoxINaxoOaWlIFtnSmmGSH9UmwtnUcoBMGegmFQhW979beUsO3bsQ3+9zZW5VVKlCUPqznzEK2BD9yZkUrPgZZ+5pUaRB+u7bByylG/fxXg4A1Uf1Ek8XDVvMOlLXB7Ch4ysNY4qjjUDXBz0eP1wOL6eFLDb/ECwikIzaWq9rpt58HnttcJiEr5l2xU7x2EVzl5Vnm5Pr/CPzFxq04ZWSoC69j0qfiBD2O32/ey5hssfPJDMS4mbWHWmZf/UQinscirbuvWnHx04UrH9dr+WGcRqskdSFg0iihkrH8VuEWGfyBbbkrisEU5lOwPlgiKG9+1su78BkI042TH6pVzdxLNvNu4vQeaAcqvre6MVTtQvMUP8zzwN+U9kdyB/sxyjL9AYtWwYAyAmdac7+HcK4QHGNfMSUb9Aw7Qdgk2FWeihLEJ2Ri+i9DXJGPj7RTtCk0uD06Yhk3JxvMPbzPcsCFKTFP1vIrpOkRQ=';const _IH='5e56622857fb834c6525d7978e8ef1e2a839cea0c8604923a7baf8cf7c9a2e85';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
