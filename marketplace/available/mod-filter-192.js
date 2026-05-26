// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zRo23ha+v+OY+IhV41BZeBYY9/MyAt5c8btU3KytVssp63IxJ5yJOKlpoMsuTS020A2axSLUugjurVEoU/l6De/hA5IqOfM2rBsON1t0+6pHkOojTSP7wjzv79bHOlfOwYX+BgMTh6xxvtpeRDksmkxQhNmWw+nAoyOEJGe/f3/cQgUHt40ZVhOrIjSOcRhfQXiuHsXC21Skj6U3x7Ynb+CAZgg/Ki9Hhp7fGKKg9FEppxjxUXRuNJEz2ZeK4v0jL37ryPlcyRhFNgFIoe/Yq3JoOt0FViiZKzxAPMVJJzQMR1oQ0CFKN1sZl3CLOQ64x6n6WO5j9EzOQu6i6F1Et4BmzjZau/W8MHtNhe2ih/zKl2BIU8OFN0NOioW3D51IP+89+1RMYWe/MakypDElkch1ZuuB8PhroY1s/gc8mphgd/VryUHR/gcHLb9vEQGZVeSoQzGSk0qyVz4pkBQp79iQjfAjgcj/QeQbHKFID6GGJeuqnXyj5/9+T9j/iOUMjujNdEhCtxeOK5uA95QanjuM/2Iv8SO9b/pOymASEaKx43KR2DD5pg1DE8xoZAANBrH8a/dUvYkQkdhSL3g4V+9gSP2kQIHQ7szcAI1enBLoBX8I/2Mu3p46O8YVVhwHklzfpQ9eSkkKn2VBDhBJU7fQd0flHkFhVz6nd0885Fzx2pQopLdtdLCSQsKeUin7u164guz/VAu8/2q3i63VjDWUdKLy1z7yYhRo0vpRPf3yTbgLQJ+T5X8M/42uaLkNR1CwhyMF+eIsAI2juwXxsrvMyX44R9JuN+uvsZACg3kCuUsfEs/t6aD9IenccYzacEL2e09YohSX65cSdcPASdMOAnXxX7Ckaw0rbVf2f63sDp33iCzaWTI58oW/wju4+v6Oujkcx/4H8zhVSU2+M1WQvf3dME5lr/sERne1Ovuvkoru4iTpq8Zw3AEOls50CbooJ+9UnUcN0zjBFl3SUyfII7D9r+X07GY5iVQoQ4dggm8OFk/A54bnvV4KhXPkYNE5NmFQ6OIlRC1WJWvGOndrlMrJqW/EtjFWOf5dSes0g9UaN4sJJvMBhpF9ckuetUvShm6iDv8m8zAMTCgZe3JtUQpwnvCsv7sGVnCU6kzvIdLFuncqdrZQfqjq609gyEad1osPHmGgs5MXgOsqgpANIbbt6kFtdWIOHXgL7D2qD2xnhx7F2olwkjdWwa+W31fZMZEL5ZC7bBndvkIVrfTKE0UoWSfDiHGWS+OiSvfK6rGArNAoGjrL8bFz5J9GybZlmtFbKk5JK6PaHXMQCDKMT8dpLQ8PK7RDhbdltwzGMMnuAA5LSe8CXpUoGdxrGkcAs1XB10cbY7Ee1vslpgWIAMSJelzc6bWD4oY8yq4BMuh1xhjUuQ==';const _IH='947d28724a6f6b4cfd401456d3fa60224e94f6f9ac0155b3d6cbad56786fe725';let _src;

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
