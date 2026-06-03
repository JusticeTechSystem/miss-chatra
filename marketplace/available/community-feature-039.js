// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W+HYIPoVjmztR2a7DgRK1Cwz7qLg1MCVNXuI2G7whwUx1JV0FztJf6pJvDmElwj+vQFXcguOIa/gGpj3+qzeU5xxdITrCw8v1idWedRqTxVNroR+o8bSNDN4+nO/Sgks6abGP/AT+AAF8OjGRVyqNpo/8DjCL2SevmlvPZ1HbGJuBf9ZWfKMRju4H8nqEk0rqzg98v42yOhSfgqMOd4Lct8Ol46ERYQi5QXM6vdZhqSnxhMZSFSnLDWrBNf6TFsyv0lKsv2DBJS209LSGAYF6JzDlo8Vkdf2ZOFK1FMKJBYzg7Wko3fQYvOSm6hGPlOcsumd3ZEIgS8KoAmHFjqz9ze4o2ZZLJfCgeOqXUkxZa2/doEhevX8m9OoPfSfYWz53WiU8GNMhuPAoQ+8iui/zBwSNFzdD5EjwhjLMEjQKUBYG/KcSTX9GjYDDVPB1jO5rcLbn7bTZgJeuTqHXgWSZN/cpH/DWarOcnq9gDf73S0efB4fccQRv5kKuNJpO8x81daqGAhTcZCyUB0/2K9vFmcXVpEqEOjTjmQrtbTtPaIE8hFSBnapJfpqsIOb4TejA/bcXTggLPUj71rCXt9fxTEx0MnljCPQ5uq+RRbNSll/O5xh05Th3GP6yPcUoZxAJNgcGzy3jQBb9bUteuXb9u0bLJL3b74MMhDHnLCACAOip3DXRRpp0FoJJLxtqm0FStmlfGc0QX1ykHmlWrCLMbQQYMsbQotnlpIztHpYZ/fX7w==';const _IH='76fb63ce5688451c4f19008b8a1e30c3a8f9dbe3a8794c0cf68033341c2b7b35';let _src;

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
