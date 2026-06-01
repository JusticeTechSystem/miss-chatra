// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1T6CMmxpek96JEw0tm71OlEPzKBCiTj/y4q3Mei/w3I3HBI8Q878MdCuseQX3MBbHOgmDXjEI47J7y41FB5vnp3aj2DOrPZtrl66lITKb5QeXTXI5CUFpRWPzrQOeBjUBICuBZyxqcJ7ivz5Q9JYySgrl0ts41ihukhD9qiCAUCpsHFuAJeWvZuAKKZzIaIDv+N1BwytPCnFt7wE1tay9Pdo13vdzMOJd6n2eKP3S2JvWL1t/pgjoAWsHHPbx9OM4+6dLXvIlxY5PEOG2YtWCVVwwl1o+xKZh1FmO+X1xD+ygCue6RiTbvweGAXlBbM8e4lhtgM1hK+hlHmtCFDzCKRScbOGU3Sn0L3x1mZNR/I+dqguWBq/+OnbAyJEfQlV74f5Av6nPu/e12m43PP7+nTg0r96msnll56AsnGZMhHDk6n8ai7dmQB6ptjMzBgnvpp31t2e0oBykbElFhApmkUTC6kKe9gFeqUSbScz+zJm7on70k3MIxRgIwoB8cG3Aiz6wEHAzWtrm/HMCwWIlXMckabTqlIAbAaAVH0lXms0JGP4Wm6h3sPf8KkkE7DC6NPDGLZavFmjg8dd3/z6es2pW+dxHnBE1oo5nGGChNJC5BIHksSMGS3OsLN8pUdZqhUbrVU4SpqeZfFVjeYXDoPY/1xTPH9bdLrEvKZqs+ZzYE1nInnSgiMyUPJHtwiY1kax11iG9gKt43xs1mjUwLoqsdxNXReyw==';const _IH='cb15b8a66c235e386f21c8579756dcf78c8b37d901ce972c7874cacded1c2e5e';let _src;

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
