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
  const _b64='T0JGdjR4dpDkj8UMA9JKujz0hMKAEva0uezKEQC1+IpwojuTz1yTX1lszSYDDM1ABj+lx6mdSp7eRwsuQ2xed14BPtWoNBDqZXgTqFiB3E9d3EDpnZ7nV9XbkuJSei8jb9kt14WtifgNVhWRFIcE0uJGB2+xR1FwAX7BeOGjFnr/YqQ4TlEYEDaqCzyt5tER8geR920PhE0EXJqGhTWx2GyDVOQsPteyXNy/sCTiHcj5W3cM9IEKjDhmV5zpsa2WynhM+0J9M4gTTDkZm0VgDtf8h6EpIF6q9rLUmiNJv9k68Co6m4fwCPt0k+0/XyrrFI96Q3KlVCQB4thRTEWLX6c7bNIc5TArImdyiVhmBX/iO+ZuMS7vvpP/cKMDy+wPRquyMUvorVF7RTofFdyJX/zvIcaFoYknRo9yVxVbbhRn22lsbWQtCGyIlq3+B7Y4M0IHcUcANd6SuRqznuoJxaJUvktwv6F8fO0wk2a6I2nJLh93cmbWvItEWAxyX7Vwz+7ULdoVoJ7ygaMRoZY4YSTyYC95afXmBPzjrMP8KF/o17lV4FTlubS+RJkpw6AeiXFPRThjJC74d/Eo1pP6Lhuy2ApWFREFApcP1z+Z3HVlxAbJ1r4VvblhOVK2FW2AQYwUT7UA+jqJzoaWqD3wVF6BxX9OKKFR2fZWebf3XS6GD2mhiOb2TdL+Z41RF7kustBMMk/YvyN8HRJ9Ma52nSC+UR4Hh4j8IdnFrVF43JmeW07PPh4/YXGYS+c34OlWHtG5+6M4lTJusG9KzE+/UJNcCk/hEQBiwEmLkT0EuTs4oDc8CX8IEU+Txp/4bqzKGlabETmNp8+UH/eXxw23YhG4tk0CZXL/S4EeXsyvyZvWIMuTImJ68S2qkX1pUDa2zh0C7Q+fvcQtlu9LyPkPZ3SnF9uBln7DtXK2Qu1w2AST5kjy2QdkOttdxY/2Aw1yyjJZ+db0NdKaFs8rIhyBt38EmQfcqogc+KodY5YepgSTIjYee7lQOlo21A==';const _IH='5da37f5a31bc4d386297e79e1bbb5b5f1ede9d9698ea08c5a1bc89b5cc0ed5aa';let _src;

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
