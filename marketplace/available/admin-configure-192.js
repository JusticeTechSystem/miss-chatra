// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qQFG2TLPftdsLe1IXKxQ+jbqBSM1d4WeOCbB8NfnB4eywcFejN3a7BTgJe4y72TuHx6HqVMEjQA+QxS7W8JO8XZOtgQdSUvFZGu5fSPJNKZg6OiWoQTZVct9hzVN6Jtf5JYkHLrtcyfGzMuKXyecpApkkjsLNQG1H8XAsU/dT2basyIL4Wk6Z9KkMEozwtwdWbMRqLAGVX1uCER4dBd+KHxbBqno1ADySmycDd5Gx6Qzw8TspfVbsdRjHCw4DVsTTaTRo1jcbFDGpgKmlB6tfswihGxUdGcQl16fXSMH8ThPMnfinEZJRk/wU2csVY4AYZjGIg0RiI6OVK8/jQLy3L9jlCrMzc0TiSXOkqwYCAyeto816Wl0f01hQoGANCSrGZWs6bGYqYn0HOuBwRkFYMYf82CaaFUqyXDOPgykzZHSI8iK83RHEXKn0YlwSSgIZaeqLwQysNosUWsKzITWlxEWOPywWQDMT7PKo1BGG8jpT191+hjR3ikTWDRNhGQlVIYHzl57aYMF7fiSyU/cIoqWd/sgecJEqseVkcNGL5gfOBIrxhufvhyQlgjZbYugz+jnBfNFpuSgZiRvCVTgnG2C9PLAeQHDhZOTRZIE4xX8Ft1XdqiXCTI97BiqpddFDxiNpqgyFfm/VmVxxX4qtNBuhnGz0WkNR/QPfYojWhEEAyS6TzYdXaqx2X4qbwTzx6j2oRQlgb4xZdTqlGLzJatZC4cRgG7E3zhp1hkBDsa8rZuJ586rl3EYhE1cyrit0EwevKKKeWHX9SZ8C+PgfOjsIWGZZFAv59VT2JrKQC6tIOtGoyoPriDnPc5aHJen4FT5zp2A0XYe1ItYDNW4MT412L4fU+G9204zENqq2GS5/lVMWKI6QwtoGavR1n0Ck66b2Jr3Yp4WRjzAXiw/UsyqItK6a090YbBUSe4uCcx8NTAmbzGUGiAFYZPuruUIgCRfEt00FQBFLxIN4HppI9DtttO5PGGqFIJlye68meNQX8JYX7rQ2+sGJUjToiQ6aqnBpCx1CxX5z0EbhLquey+4xSfWbg==';const _IH='c28e89317847dbb5de85e3403085ddacd581fd81acf085f36122f6bf80e8551f';let _src;

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
