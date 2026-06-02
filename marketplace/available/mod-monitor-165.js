// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x5YCuVPlCM0ouk/z7OxAcdZrkgcJyphk8MKu0p0FEYXqO5VWHuY4aH0gD9gYwAZ9ZGkbeOo7BblShsqPZT2GAL3f+bH28khPJ3qvY/gTt76ZDHd0dNVW4yRTuv9Ak7F4ca7F6SUQbhQQ6XBWURBRIUywiznhF+zSadtDMx7APb3CprBW9l+kLdwOV1cNHT51m2pGj0QMiDVGAeFwQnHMuurjOku8DlTB9N3TjmZRTm/a1rOO46IMuQXFpHzb8o9+GztsW3bLp+qWLbSsn3KC/rNGapKLsQOlIQQ9O6zVSFExtQu1n8lK4wV87YrJqcA2SQ+u0ns4D4rxYyZgAEuyYcIvGaixEIYkTE5EdEDpNUISr3FWIV5erjj6D1BTKyR+kgzj/J2nP2TGDIVzksyQ60hG0t+LArQF4h62Y0zLQAAAOaFIa+STJnXVsWP+yRUdfKZaqo+CyR+4Q563CgDBO8oNvjgECuMNZfTRSyT38CDh9wryNen5eCCT6vUkP0CJ8DVuNB8yho15IRI+f/5KlkBVX/YIBwD2yP95FQYLEcxC0j/OEE0gv9PVQEldV/zTfxN55dtGSR2LpTBxLmfGxKm4wYy709dj7yEP6j6A03/NDt3xsNVE4tLVxeu8i856y0T3vKgavA47uAmDDFqmahe8w7ZR2Vduqhj1Qd2Mv4El4IP6QN7Y/bV9sWKK3VAsJYXz9izMRGslV9iZWdG2fJJEi30bqh1ADgqz1k/cTS6EhZvC/ml3H0GPtR0xaLs6HhYFP/x2/hKJGDYximiGDgoeWUN+WO49nce1+k8mWyjBLFniT2BVAdX1EJmQ5IRLz/sOceH+ZEcxE+JyUnd61F9iMLwdctiH+BexZETGEx7aFcjzVcuSnJICLL1QNOq1d/uvO0+bSsoW8YFihRYRKmD0Ftuz2BEYRfxZ22vM7vzPllRCNhHhMqvBb5uH0kB/P4z0Ar8yFv3fjU1dzmeD6r1P20oLIZrn1fqpfmoA2H5zly8m1Z2j434WvN1d/HvVekHL/7Hd+Kz5KlqY6W0heqDVJHnY3IlwsNeSIKwJtKgeL6svvl7jpSR6chgsQk/slxZ8lYnwBNB43io3QeS4eJTgBN3FkZn+1KUDKzxz39n/Xy879UQSprAD5isViYUZhCU0U0ZnSNvPrHyebpHv2PBDxOlsqWP6UoFZnHUAYzOWC6nV+/mi9XBIHo5WLQn9jM6sdAVHQMcVjrYoVI6fSLH1suGwaFFpQkhnNlFCPOqJahmSMbymbE0eh4hGsgGjAUoQiiaWgiISNTXpKOUH5ESGAtciHSeTsxlPlxuCM6qLU72GMcNoNHSoU5liQcpL6j9NS1gOfQidy/kIxXB2zgA8TNIJ0vnQk4AIL06L07Z5C8NC4GxLj3ACiF3Z63bB9Ng=';const _IH='4ec1a03d836611be2e26c488622a2dbd0a606defa6daceb28b19d78ef9a70e9b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
