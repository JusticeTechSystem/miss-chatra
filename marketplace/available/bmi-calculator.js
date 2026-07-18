// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSO+nhuXMU9KHu461lxIJ8K190rTnXjKUWD/manv4YFu8opNG02DzDv2h+gZYTXAgansTgkQkJxyq+VPekle5rVhcv2NME79MYqtuuj1kbPIVis4hgCh/HoR8pLUj7YE6CAOm9CNzn06A5FqlJpQaqw7iM1NLg/YFXLBWMgxEy/8nqBcApmiqSRjvnzGB2kXcItHO+Yx5IYxtwYrTP+zf4oyBah1cAmBU8de3QAVUR7qiuBzipHwfu3H7y7CtuVMlKtQeqO/3RZUYhl6CBesRWadO6St/7YH9W0dcn1l/7pKhnrOgEE+Yh7Um4zDlwBZv0xLhAYrssDx1gEnFRkhYo03mgQ0rf/9LBfOlPqRhkxJHVOhCbMvyn9BoeacsL/VDSW9myvFD0t1YHlysoNB4zDwqJHfXCvVrFpoYoZFGTIcYYV3h7ldW+v1fCNqGsyPCOvVIlLDhsHBpv4lJY/z40trsTEMP1t3Gkx7ELtSK2dKD0zThO10/knHNP5O1y107E3HJvL2OjoNjwOQRJDzFokowfcOR3+xme7TvjsVxHlMEBk0d8D0d9HyxG52OcmFFqt1BtpphVQFITZ88gPexPaXot9T9lS1R1RYZqFzcpeUobomYpqdmPq3SXeD1hsd6Z/qSmD2KTIHCkYw43WJpTq2hs259W9hsz7x4CQHPJBTGwbRi9fgbAiafuBNVosjt14Hf3wI0rJNKORzJbx5ti4oXSrWSNRzLto+Ir8E47uJXw6oVUgU8EG29j3u1qFAhBVO5PpvS+sDtUgwOdlzzeD3Q1R/ydMcTWlHoo+6uphS7uHqvKul4XgqDVlaatbrTn66nI0O5xlp7jgr5nmz0liZ64loDRSrNCU3Jojrnye4jGIVRnOvUfcb3wPbd306cpfzpfKGzykqjfFFoX3ynSOyE68BJX+OwJ9T+XRmOcNf4KdDobcjQJBU7fIdE/0Fxjd8i0Nw0l+XvNBBQQvA6XsLEhQ111up+tF59RO/6kbmgChRp5QGuzuFiOGI5Ye2EiKAJ3Pjby63wrm4HOm0EpfcU1YDSiQ1yDIUIkJAnRRO8QafrJpZ4qE9YwtO0JngpI4aN5b5XjeOWrMmeCIMInaF5o93yyOYI3e9NRqcD9ZkhkdACedi4NhWMXKP6OBTT0TarPYQk7YjpBNmuicM8cKj5sO1UY+UtUV9ALWNWCmFw2xKXWIwNwW7f3S+Eb35PkEfz+KZJKT1j3K2MA+3DcTQPI37cHIw6WizUGVWy7/ztHRclP3f1hmiFoLea4hpHUKVlV6cq5d1NdmHRrqQqnzffjH4Ve9XR0VxCtZG4ECxmfUCjtgu6Eic7oNlWXGDR9gbesCLOxjR3ht87N+4YjXEltuxygtSS12pIHHQLA8tRKMxn+4QIQsHzf6Fd3O0xE89AqONH2BulxbRav7SUGUe+eXhIE=';const _IH='df039cc98a63547ea9959466a837a3eafa7099c93bfee63480cf1a6db94f4743';let _src;

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
