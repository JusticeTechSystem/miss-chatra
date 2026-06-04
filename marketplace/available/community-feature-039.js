// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P6i3XfiIJv/velfrn2UGDkAD/0o2poY48ZDp2ScEyDzt41JueY/Z1sYi3FhYMlBF4vvCBlHuHWkVvaGUy2Vnmc2I+BoQZHyFtm1j+d/HynJzsHI6Iy43O0uRK7R9i1V8TAN7Bmaoae+6tXTL1gVVKjpJ0HYIr6moUrzIpc8ujvVUoiWWTWWYFywFrzYIf4rvLtRk9vfya8MeFt70y4rB6QErSrplKY4aSi3V0SS2ESqw1K/OCiSANEZMuF2XhyXBneC8r2cQq3MJIaqhn446nT/w2aXqbD7sQOXsYHsSy1z/8vSDYetNLYU/Tmw9VO56I/bpIcy0xBy2SuaThv9LpdFb77vj7eq3nNuuFOvpvageVa3Rzin/cODhQ3Kx3wC+y+T05UtEX/o5PrJs4NLlUVYnI3e7MTNVAWEfbOucXCJcVBxyYlYQJExIezeZ9HuUDb3Lizuay69Itbg/9Scz2Va8yDwCWsdHj81wpHx0RzYRocUwYY7XoWViaDkZunhLFHQXeZWmtoDJKWX+tIrlHfzyqZw1GsvTsJdD79EJ3ZyjWKbZytj4m01PTZFTadRpkCFXlYYefTIMKmFYKsY4VFYMhlayZk+RhYks8Imt4PK9X3nIPdQbq+/yE+gCrLWPbbzJhjf6wX3PmgTig4cEboeIjmGQeDXJ3dxkOWhuAadfh8roTvExI0VMa9qL3S+b8O6BtLM3f3+DsiAfz6gn/LfCOm7PRyVjKLy+fC6xD82Vag==';const _IH='382c6b0819677edc60183be9d48b11aced70c85c737c69f703efe7495584819c';let _src;

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
