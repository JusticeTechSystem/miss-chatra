// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BY44spkD1BX+lnWQTVVu4qZNH322i52nDdrLHIU6ms7tuxzi7ydAc65AU+erM1YN3XCrRBsu0FP4FOq0wBNajrWBs0rvuzwTF+lIofk2jtzFeoXkVOhlohe2N5ZtEyq0ywwSKQxdxM1VJs4Ku3+scmWunjmQoG9zub03bOMJ7bQuSUCRywbPCEc+9v5GE/vFg7+TEc7RQzHYWPJf1ICy0fwy4cI9to5lvTy0dH7+f30jUZHsCGypoGleM+k6rAE9aKN7ZDn1DHJrr50gJANMgGeN1Q2A5SRWynNDjwguCSNJ2wgDCF3LWYzHx0+A+kOMCQmDzeBhVoxUSYiFpfaQKQXKvLzwpcfw7ubn3EAiE6nzoeJE5CjtGHE3Tu97kEqKB/7bvm0ee6Ow+j4LvAIpi0+ARkmYLcjBbU2Mli7PMEqjKsQbtx0mxdXuR6sztMBgMAYwuthgmJpCOMROsYODBXv+lOMDhWS3Mf35cumGHCRyHNSq3eExb9SxnTMtcAG6xZ/+N7zSEZm2mH0nF3/PO+G/fhU7mb1Trcwkz88vq8RGytjal97lkdjjM6f/8FwpcbPWySSkBPMrQzbVvaEIdGT4j3mSEjLIcUibZ6+8/L1RIJ9lSa5u/umYxlEhdgK+8kB9M+Y6LUtanXFaCRrySZyCKYkXvRKn40NPPy+JQNmfwwFX1hKU1BIyfAVYlOd75Pt+bYelsaPGXvof2GwLjctdQ0tozdCLa76FomzboVDBtiINRaFwsutTFKKvhBtBqQ5I/4KrLKpwKgvO06frHWQJXCIHcUwp7gH1Ma2tEH93CaWXSSZLEyo03Ql0Y0WORw1foKig6dewZYISTqrNSAGvf6/64eio+4qtdIxg4aB1FzBISUhVqQrOfnuMeellS8Agl67DVoW04QxInMVeB1/+0vkt/HyFy55gnjsTtCMSHxU39AUlhHv98NwpNxx6Qh0RURlXj8Pk3Gu5Zg258QeVmmtTxaLsbtnWd/UwWTATLzVk4pEozn8L7H2xB4Fez8qucrGAjnXcpGHSgRpm2yzj';const _IH='b85ca525e36cde87631746483bf744c9338003e73a2e7ba1d74d6e79b3efc6c4';let _src;

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
