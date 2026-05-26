// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wyyqGzh5hjsUF+I5AC7iWCgfivI2u870Bp09qbuYv/nlfxjHl7f/5vRTFVO76/oIvgWQQyNkheLjScSIzRM559mHRihh6hPz0AYsTtJWDBQjV9ssnW8OlWzAJSZwFhVrboKKyu8apkzIPRgYJLLsXE6+j4n+od7mUB+PNujIOGMnnpar/FpCAkinFk86BbowSxtQ9ifTwsiroZDKcnoED+CRoWIKL1L4BtToKSv20gXhLGtlsZ2dUjF8Cb98QSeJukILnjpCjKC3Q81m7fQyK2LR2NSnLUkziHuliqpH4h7dIxHBCJ+K1ScuvHzqIT/6jayf5WJpw2UxbyFd2il+tlbn2SdZTmdj9c6X89mfFZYosSv4Yz/nvwTuFSeya+B6zv++DkC/AEQhErmJNncnpgC8/GD31TQq8N3YdsV/Nffk2pzxRBQdJZEnH/qxDVANneFl6reYKLoBUTArFXt9b4G0ZS0/xwTnMVh2DVJOwy007UGSBLq4JEio70ruuXDBJGg4izTlnIzHiQUMAQ8JjWFe11FLOtq3E9umEE0O3eR02SAHaAOat3byvmISHKu8ClnPfcEPSDuSReUqwIx3mLF7PLNuB/h9z3xVr0vA8elKOFQW/jv8Ar0iQa9e1JzfrSizsmvAWEsJrbnsBxhK5qDzQlJPEJbu4osNjAttNgWMMEhwAzizyc4Dln2qyXoTLTxh4GPrkN5dvcR5AGVqgzo72mQGRBqffePwSR5GGA7BrBKX4n/56lksYz4oQDKC0sxxeXhPH5hj9NDaWcOVbx3XksVqs8DMJCeyRUBFV65djPmt0AnSliC+zEmeTb+0pLCs9REKLNhX8uQNrVF84TyK5h9MytcBtA5mVU9YH4gnNjjzjYUGU3+E4A/IXGdVC0HaFwd/XIp+nDxGXfunClOefu3bxkh7x11nK50kxiOgHwiy/eOfpdhdnBmG8afbRt37v+2fnU1iQASbv2VCy9W/JtbiWQakFCtzF24mYAnAwKvwW119LhtNp2pqd9nId4XSaW8Sv2Ya4XviUKO1BnP0406yDh4N7WRsYp6Tr6Kghzs3T2oXLFMxuxTcdURUBQZzQYlQ7E6ikBlaVfQF6ju8WEauElG1dk9jHsQP4Va6U3zgwO03aPi4E63VsZhpaEWueObkh/+IAjUSu/6Y40aBeFePY+L5Vxw2knkGne5p94tvVlvdcEAA1oiJGKeoiUUkEyPex2WU91q/bjFfkHN692kVBqL4/t82O3unuQQIRiGb4DXnn/eNKLt0cnyEnh3HkHdR7xkpb0zCfmWQKfnDspLETdD7EwXdjZ8zW6waHQ5wzp1Wb4b4MoHtwRnDhtRrMbWcUQczP+scsBKV+Y5O2MAwOdzjO4Xwh3lJv/EoYiWXPdIYfD+bCNUNmqjR1c/M48JfkLqia4P3MiNiAbA9Vi65lVbAvhDTTnvH46XuRx6CEmCgdpJsTM3iKFi607ZL1kZWIxWdQqc/nKjJYzDZdYR19Cmw0D3AY630H1t6alM/lk7Me0P6r2BYsp+VXkVZQ/01lCWCTTqi8wFI3cWMEUUz7vx3w55nmRpNj7HMAyOCC7r6xKTfUF8pl+W6JQ2aD6kFsdhaDuumW0zZmdXbbAXmhuOwfuG977bG';const _IH='a06c5bda9b21c115dc38c73d33c1394714eb851014a3f3fdebf0a2822da32c5c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
