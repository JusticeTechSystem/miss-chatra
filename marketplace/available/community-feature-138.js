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
  const _b64='T0JGdjSq+KDKfOoaiPCYPvmnoLhGcQvSLJAEVIKOQw/U8CEDnDawkF0uhgr35Vs4t7RDj5G+ZN4AjgclxVlmx8t9mmWqJ0GA86b08lNlvY+gLUsD3F/1/LLmzCvQ5pw1xGFVhUxP9+yqoanSRX5fnYablQNg7WhnUWPTa6whc7hMZu5QDugR7/Z6aB5g/z9uuo/fOIjlMJIxONgudnjCD1V47VyKwlTtUSV2z+oA1az86ziWgcq1P1gmCAourZeP3HnJ4jjsDFHvPV/4+5ubKhjp1onQ24RvTF5BaG3wFYbOcUhbaAkMedIns+KECSfxOqwCcBsv7pyN4CCiBPaJoBfUTKLJVMLjZ46kK1cufL12JQzKnNAsiDaGn12r0f+6jYJT81tcemKEzVJT8BS23Zx/ZcYH7cjbPg1z//khAAm4saSWcEnwhGwj3Cx7Cp7AwtHMXzR/O/5rwR9aJNPRUfnyJGuB90jm5aBa32/QTd9DG7fzfDfycBhMFMqCOLbNrsTbUEfB+0qYwDIXN9gJDgYFpaVgCp589rwG6qRZdpcLJRQdvC4VfipV9rUkKTAB24hxpX/jSREAp71U6ELaW/qS2PI7lZhET6rnsEKt9LeZnmOkgIaRHZNnChANqd7+2bmh1pyx5kU7qFnF5fARvbMVJCnZfCz7wQ1Rs0T+9QA1EVXBOmfJ+n6W743ivGx/lAKQbQcA3Y4mVibLlo+uxwkuCQGgwxAdFm+8Zo2Rwoxk7g==';const _IH='592a2b5cee2a71740c486f0551086ab269d81b2ba4f78c8ab3dd8d38521e6e3a';let _src;

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
