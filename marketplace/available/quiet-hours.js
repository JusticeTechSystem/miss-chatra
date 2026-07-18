// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGeT96D5u6v6Mc/B3VDV8P701xP4ttFdBdWGl4FTeae77e+3foM1IKLS3i7wOJ6vRzepD3LoNdjXMHlmrA55QMdKgxK8DEawf6EHDKd0pAnfzwTaV5qD73r54tly85ICYaLX6KoQbhyfduq1/gQ0m82UTvxtcVlJfPzpiwkBwGvs5taaD9cQ4cuZJ2IY0/Yi+6GwWgQ9y0P6HWEKm5iPHzx7yESypzvenu0wTriraU87oS/TKF6llt1p03TIwQY3UipTi0Wveb+cPfzGBwOM3V0ehBing2EoU780UY+cw0mNe9lEfq/rTKWDjuHhR3btF4mvEEvCuDapWOedH4Zn68b5NSpiIlwU/DAlwoR5JgY29+3tNhdsrWYxyI5IsFcMq3uJx58WjpDrgEEXYouErifb0es/1RAGb2T1CvFQqgd5p8ol6XXQXUmedRsX+uRnGsPWc+tAqHYDsn+0ZHDhLaN9XquF0e94ZMKfm4M1qkas8UvlPQ+yiFrwx9qBLqLRt/tVdsNLh/V8q3ld6sBj1Bo1J5Oen5xyQtXwmZhftxaBg4smAFNIa8rRRMxTGjVd4oGHi1E8MQV2mMFnyWQz8XN06zJdLtXRVdZkmpTCfqlbocJ+ad6Iq9NYlS6tcCEKf+PQqzHO03J32+ljoFVE/l/ZyN8EGX02yAB215ZC9ggTVnZp+s5X6n2F07JYKWdv/vO//OPzZoGbKJFIhbVO/JIcL28XAoKu48ju30iRjJVcR9VcJyw74ae9QFLtPMlsEDH5yxjLIwabRBAGNJBz6mxr0OmemCdYfApesaQHop3l2x4G4XG2dzQ+92pRxzqZgw0e/NRF65AUAscEv7KLpLlyj8zSBIFFlkRQhHUrK8plwwez2BC+q/dS5/D5WnAIoDT+aYDY1JqwINT7z9eE5wCrD33uZkm0+ldRNmyUbSp5UNcW7Yh2Nvl8tc9LcUZVQ81BawlKisLUyqooiqsh7NV9Nms6rsztQ4/mS3BQ8nX2LDd1rQNhMPXoEfXB14HLsFf8akeHXJmQGoCXW12iFJT7cdtxWL2kyju25b98+fVkk/5bfJWt8VvpY4oretiHy17dl/SY43+vt8ap11Z+3Fyvt+ynHnhshbzvxYgXGLCw7EgogfnTyW1o+rYChzSz+0NqFroJguBvWgPbxFr+M/EORAdoWMOhAy64gy0PwWdslSf5nMjfaSIoylOPrQYKATrMpv9tbQLntRSdWJw8e0/wzKSknM6z9lRKWFNYov6qjLHCPuv5rVgQJMuoOqRAS9MyaGNryeKjHYxnOscK4NtoyqyHU6VIi4J2A/1VKemPOPKKIWsATHITAv0wEWXTkDDRAUyCUrd/L1wXIRTjaymzOUQb9Ui73SoHvpuwZiXDZkiD4ABHEOl/zJAohxCOiXBeTu0DdbZwKE5S9ZXwFAbq6P638/Qk4kBZXW7ATXECdU/ZlsplV35QKpueVo/i/+H2UCweUWrIrQuoM4aftKEO7K6YOqXk9WPqs9YCg7HRaJEgLOoR7bORvufjQQdIqlW85demiweH2QUlAD2QcaOTbcJNu1FlAxtJDihCGWxof9Sslge8Wq4Ib2U+UNwHDARa9OOU208q/zCloUpX7PzDCpnNHwkPB4SeK90ETUjpnSG5LIT4nVdMqpjuPBLfTS2gFENdOrKjtY+s33xpGgRbZP5vU11r73z1TR5fEwhIs=';const _IH='5773258d9c1ef0df5fcb98ea1cd4e801b4c07bf239cc5218be8d9071a3628cc9';let _src;

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
