// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRb3+HdNKHq6DGa3kzPk66f/9sb/zV8G3qKXprpSesoi/pq3p+OklsDZuoUIm5fxSI/4Po2+GFSLcNg5b07XhwOeQnEBU+cITr6EEGP10HfbXjz3Aym1A9K6FBI0a5nRF0CnGf5HfFYDtHQ0j7zdvxzkbmVSIo2xMp1iWglb/3bTJ+j7sHWJkG67xnlPCKqyRN7EF78VU9/1OnAR4CmgZxBejqoyYjPuL96X66/Y/3il1J+sX7FAIMrCo3gPROipGIOm6lh57oCtBdL89XP/XgYq74SduV/QXJGQow+JFAFzqjkmazSM9WIMaZEBqD7410OZQ5GxkyK8QGUykGkAWncMb/x43fOErD1g2IG7tXtbjzO4MuX9qXd58c/8QB4p83hCBh5s/o3svVKETeuZ9alfclNhPOoc0M2dR6GykNSsfNrsWjawjTY7mXnElRTFdlq0S0Dr55xCODXBJvOzzxvIiuk9PtO1iBPndZ0/4Cz2gzr5qIgjKEo8QR0CVRekupqLbn1SfiNRNAAsvhfBfBTZpdqWzKHx/Fl6QFx2VV6340sfx9HaeAkeIacwS8qVEKoohJ9XqPHWl8=';const _IH='c45feb284c0f098d0309565c4caa8117881158a4af34733d5abd8dc0573c7e61';let _src;

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
