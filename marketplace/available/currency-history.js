// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0RAF1bR53ahF9/i+wjtdVpuKK8iYSuzbQ+nfHzhX50QsHew6CdmtIMMedh8ZnJBTHLKspJ8C7Ky1E7wgL+xVWxGQ8dTyl/rG84z8bJcTBETrYZjDidE8PKMk91sgE/uTYUCDG+e+0nMoUOVYKnQZ27eXg0dxcHn/zJGAkRUvsGPGtwqCePJO15hq9Zsx9qeo2ctpMCxKnTptoLgcrNDGZhYQTSvyWy/gSSKYv6YmvIxEuDM3lzwG2vkOkcVVSlVWDwMyL4VKTcz+R3rMbA29Yx82G5mcDbYmnn/YRav6CRnKkEd2T7rxNTB2+DLDyoWg0B4abX2x+/4VtK4rQnbEB99X3SyRbfvLeTgh3392P6xdH6NQM5Ygy7O9SUgwaFs+kbdx19Wi20w5xDkqkoAKg3YWLXj2hw1SOHnPUb9sIy5jgiuA/SLGIYXAjxhGcCl+5EyDskqmipc6y6ctlTE5x2TdzIlikVDPuG/vVFqgZSrC0Jbuj4X3ZvSxxjAAsqxWW5EzBs/K8pcbW9XBE7QaezdqZpGgBnn3Lb9DRHN4lMMMKbnvMlApwE22vvJyJGe9Tl6udSpaDcsAvkYHifD62ffwCDiNJcV4eMoBllGTnuEUKqQUGI0e5p3gL1AMpqhGo5rMNus/jYL446a5mnYwVvIBWSLjY8TS7ErPFgrM6H/8a9aMjaLklHdsTSUuPHl5qDuMfcn7eWD3tT7a/SIOSZIIowjZdtbQX8pxhxxbXjyOWlSqw5b3FIwt4ZmTKuzuVj0OyMZYlAx6lo3YjFpCGa4TG36OotQjlRqZrDnD7fdlKsSjWVQa8XKTPbiORlG3z9kD9c5Oho3ViFDaDn8eW2uZ0aeSxk0JeGk4z67cTTIJ93XyO/uIdgk2qPef8AJyEa0SrSScmlg6aCYWcEcVaJIyXMTjwMCpvefFmZQ==';const _IH='c0c4b7e2593709ba4ef8a63411abef175e2ef5d3cfbd35c50600e418c95c4568';let _src;

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
