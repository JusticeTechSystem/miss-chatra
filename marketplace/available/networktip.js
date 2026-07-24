// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtYHvLYHzgWT+640IPJBrBey/JEa+jbXhZ2sZG+8u0TN5gRSXScdhd1yQTla4HH9E9L3F3sytMlonDPlevM43kZfAicBL+GuKkHZzF3C3eA8jeRuEDk8iEOaDFsg8fG+ozj5BC+54Ttff1lavFsGWbVtlOOhJB2spNixT1FDO7SHVs4qn/lAKuP/F7cuNSPFSgwJw03vfdOKSIn0Sq7LIZSbfaDJyRW/QtyiPvQn6pCtnb88zFgvpmCR83T9afrXOhmPLubLLRLBdEJA0t0U8FpIAwtt0pH2vme79dihJ5DXKH+4Q7EM2noQ3w7Cll0f2y528y9tVkTe/WrQ46GYsmIz/lwwuN2vaEimI0iujlcrbep5jd933hTKvCA5PFdHNJQQYnqqmDPmMTSLMwp16/YwhGQlpbHOfksvudjGcNMIDOD79AZzzXPnWikVHSwujf2FUiyvWGDKXAt07LIZPFKkJvdGThajRGYWyLK6Kmry4sKBo7kJEEMQpY7tCp7ecHnycMZFPvUpf8c/2FptTbuUp5crfVlUe7NQ2F6lZ9k+C0Rdvd99PSwMniGNXppeunuefKm3O0KE30NEdBvPjceLs/DUfJNti2Lwgm5Wg24k3wy8IKYSPiS6wBwYd3BFhwbdmskdrNS4WKlrDoFU6MViA5vfcJRkDxDGp70/3Csbc75PKJgiKqFNAEQMN0mQ9/1kY3ehb4sTvNMN7xboG8jOkG8hTCPLK/YSwUGNz8XlPqWpMDGqrLuYO2Z3iq2itTr4IU+btqTUBLY4l4ypOf6DAGwzwSFxgdbcOEJhNnlsJVrJfb0dp0F4fUnBjSa7wCHkdjhB4NBcpcOq9LAvm6vJFddw49dh+qeuJNSbaMHSsfbKfiuapqBW0nW8+DqPcfpFOOCQm2+BObO/mCANX8bTfCmFGkJmTcBT7zgosfofimwlftGZA0QBJsa9uay+vvNwkM/0ZPz9nIpVZWJQBDugZb3/pXvmc50yt6BKLxJ4b0O3MSsTnvMrf0N/5Z8hAbnpBnnrdpM8GccjO3uH3k5spOvV1EXZ2YzJ4enivB+zoLPxtNTButcB/wL/AiGr2y329z77Rb0sNme9nh4VLVfOpggkPlLwQ+3MmuYkv9zHhUK3vU80f9Z4kQc7CDbUCQYNeU/JGYyHtUJXlS01Gc0qCzdP8UDjB4psT4DsElx5WhiTTltwbzXfnJBuvfhg8PJr2PmiHH';const _IH='668976820bd3fa127438a5fd7b5b6ac02b2a60a91611e36f86a3531d38e5fb00';let _src;

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
