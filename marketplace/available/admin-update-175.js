// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSH1ZfiFKFTCNGrgAsbBvMZqbWPPG2APPkOvo98UyCtXk6vX5c/ca7QNuCNIfBnx+r99GpjjvxyJu6WFNp/IHj79h3ZsuJPawZCRRv+vWurzOw8qimQQX+Fqq6PpQCH01emZmbZX5+haT4Gc6bbBNkXjTfLrOTAGKiymXs4/6c1j3Ow831kcah73OTXa1j7nHusUTkqHNrwk2JDPOX/uWVqYNhGuKyWld+nrbU6XpOrJir8mQFVHLwJtdTaurAKUb1GbU7OFzB+HwfzwxMaQ8u8ByGLXpF8ALDlbqfLI5V3N3VLjbfkMA2EAaVCn5C3wZrwkope9cY6HjFbvZxjQoOS+1gKAJDAGg0cqyRvsjv/NxIFB+nfV1C+ZSORIGOvG+cLZuiOOEYTG+Awm2jZGfOq/35B1hUtcCvA15wi07KzdTj11dUwA6mRTMMJf37UTw0UiPSN1GpNytcuvzPCJMv2JnpIciAp+XiGPs1OyZdmgoAX5l36vsXT0Sxx2JigX+HdqeNuqob7/iylBuF0FwqZnFndyAgdNqn846K5dLOzgJXK6mOyUUvSJzadxs54uy9MMaBzwY5lDrJkqKbHDTjBl+xXB8f+jJnKuSuRfbtnmB8YaD2hRAtjUIpxf3mUa2At36paHEPWi71tMG6VufC6dAp1MUM24YKWlAKcRzemz5yoRW9sYlDBaYMa8NrWh9UvVUCFiphiXGH75F7D/zP0HHNlCXSpAjZXldlm8Y7ZIgSn+ivj75ogjih0IHbEfbS2Ni2KnQEuz/cPU9x1k7jEvgqOaTLGDY+9WRGKzzOjGOMmlZJqMKNt6rf4fJNrFsAAoaRFstAvP2qFsnc2CFZJNjsEPDxMjJVPOFCuAAV5R83YJMc5zYTsqCsOhkbmYoW4lsVypxyRB7bHH/vYW7elGdRIhPkcafSfcpqjLvehqkQZ+NFJ6Nx2FmyqOtJQMPRgwXhlCosL6v0edlFVzK/xqUwAWENvRCkAGxQQehJm9EePc0alMGKrKOBexe99Mb+U';const _IH='75a574d0ee50b8b0594fbea693e93928cadeaebbdc5b040f79d4600d8632f42c';let _src;

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
