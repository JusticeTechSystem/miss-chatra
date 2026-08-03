// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwvBLuQYmI+CogtVMN8nJ+mNLA8EJwf49Mz6fpXKNvBWHamQ5vwnja2GwMQTE0qdk/wZ+VOqEGTIogWqt670DyiWPvrKIC88au1Lf3HzT3FqU7McQCIGY6suwi+mHZhZgCoB9sj3w6cG0bO5YoW3dlSTUJJuejoRHpcnrzi8H7DDqk2/Zbp6wz2hytpY44fTkRYVPY8xQ6XOvyuFJxPHCcS6bNPiOhpPoxQIRXBwa8os5YR0c8UTHMftV8b7QtAMxeOTupGGLZX3VSndIXwLve0FQ6k+zKrTqenlGzbn9VnU0GKmN8Be5mogdeBq3+ZvTg+EroMbddqQJmHFl+1b18AuQzNM2/PqdcZ3pLiFbY/f+R9FCn1uHQRP8MgbJcnhtFIBTHYUMpRD2zAmPbuuSa85ivmh3aia4xbpq9M4m2Uoq03bRv2JHScZRwCXxoFrLy+E8l9wHunty/bFUjUs9bfCPEaW2rTXhT7GKZjrc+PhiqquHYFdWkDNLzoMWK//Yymwjc69c+igpIorkHWt8xQky0AjFVijT9Gp4hVvrlA5rq6s2SEmVW2y1zCDH5mkgDQQ+9gq4JCtwE5zDd5jt18MUDfIfN55y8dUocj6GZDwU+T3hOf69fjRkY5CuTpyMI9cwGhvrloed82uQnRw6tIeU4J+PtFnVQo0O6a6yq7BsQFXqPiGZUzYvwZy+/FqLCKjWJHGgqLDyr6MFJtr1BHM5ui5AHvAPR';const _IH='1cd74908153c8f66da675c78293c647155dff09aeea32b14adfd7b3ed57074d4';let _src;

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
