// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5RzydjjCkVnJnqZKb0xQN6fRbwyf5GeARiyyvGQCXtVvXteLcl8DagfyzgTtn58YjEneHTCkYYx+MlFhX6RnH1/lrH9XYWGwtgXI8Heko4V1M/L4ZMSKeDBjibcglhtOju9C4/bQ0FPzTS/EkvnlynLhf1sBMULofiA04riQ79F0TamYlyB/ePbgUFmnMrIM4NT/mvnaXfImRKtjCcjc339Y1htBuGssqImNu7u4+vsmujNxuzUJSMgcnqQ2DT+hHRA82+b57OWYBzkTYaf4LRVeJANlprGu4MwklR+qpBSYa4BA3LP671Vg9kuXV6pxw9K5tWbUOmsFvhATWTpBOcudYB3lFLQYKajmgyKqXZOXt+W2EclTTW+2ZDB74Hj2N4tyAfPSxRANFDNu0XoXrR8/IEnxLiVPhFW5nuKBmgxpOu5ChbTs2Fho6pyZ9Lu8IDxyuQE/dTNks18QfZmo/2DMYIaYM7Br3yzGvnkvxkpzzp9X22RPW0BzdxXh1GR1KnAI2aYjMKuOKbLQOSIY7wZcVY+ySyDaummD2wJHhDfdRPGtMBvW6EFzEtJeWwXdGzPDZGMdN3pB9mtuxV1xvU5t8tAOvpgDYUJwZcHKLg0HXMaK7I7vOrIMuJVW07AfvQk1fvlEG9tZmi1jvoVM32wqEFONjAQRZPD6x7GXViuwob2ZR7pXNfAy/U/c5d9yzV5IYExSygZa4eW/Hv6aAOTh2uO5BPm/YnpGv1qMDu/I0sXn38aBhr83WcEBylrtKPVMXmPLplNXGEFqXDC/6bJIsbuPwx2Ocd+KKBcNAETq4ft622E/EZ7IUk0+Pxs5iC35R2+Wap7/eezv9ca2keZJ/0iben6xSHyGaAwGG7DelAkoQfN2JsNrMTBUYpOiGdJ/DUFxRtekrklGaBeQxdriP6QwRjEwBqj0snofYgrewmmknKRQSig2L+45fuPt22e/4x7jzN69IdyDAsCAO7KGPBgw1osQhPM6xwBKswxa8pT5o1GcfPdUxb4uezTJC2ILShZNh4tid277/6/aHjK1lFsbKJ9Xn6axJ5xjyQ5PtesS3/BgnJcphFkEDxFKmaMWKM+iidsGzGLB+/DQQnuu9afGcaKP8YSsSOmNqpMdNyQrWeYuVYwOsooFQabgG2wICZ4piVSUG5kt1CTBLumMznHjpfJlwxiU6NBrWRn9xi78deQzy1aemPeVfnksLfIk+yFQdy9qvxkFLcJDl+QNYwu84ZYi4bPnpcjcL0O2jBp31p5THxFe1mI5Eh41sePiqWkijXagZ9P5LJuhDMzTgagpEItIh8tCuxt/4f2pFVRKUuAccRMNbwLN4FwU1TI4+4mi8m9FWasIOonr0oA==';const _IH='d46615e3732fad415e82bb9fc8be568844df33f526453a3525a8e5ee7d92f754';let _src;

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
