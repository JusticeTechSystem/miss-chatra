// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWrNIHWixsXZCpRX11mwzPWWte/LISrWKbCoW5x/eRLtwr3B+9Hev6bPayNd/FvKcKiXmE2F6//ki9/2ZR3lFrkNa+kIxl6QMU6H7kFYHsv9+pQ+8dIo73f0RsuJyxzuXYLLUewsP1k9Oawl8dZjGhuZaXoXQnSMJlly4uNo3GR8KhZ4U/XO4Dk2T09EzM7pcaJfPDnNTLacM5+czrCQjFVXj0dFJ2p/4TKjUa8hO0eVkHvG6VyZWkKZOourG0hl53HWsmDlZdyzgkT23JsmAWNlGCy2qxkGhPB3NSAbBpNtVBfDJxUSHJ54RGaPwYk38n3bb5FzJYF9sCI+Xn4LcpwMPkTvvXGsSppKgxSNMA5XgA0Ygl7CHUwcjg20Xu5bKyoQLUEHjX1eKa/tqdWqp/1fn08Gl05lghMHNsz3Y9T/HJQeCHB3pnjcTzHN4JQF6fxrDUsUamXxmxDSwFRO1evCpeIWzklJn/ty1QY73YShsQ/fRp+0iwOryu+Umb8w3XVmL1RmAm1+VJT1bcK+iB6L97d/oUVVbZZmPyQOo31VZRp1R+1/kmpO0U6mqfXO7pcRf6xKXz3k7mja6GSG6w7wSDYfHaShPTNg7HzfHuQqNTPThm/2MHN8QfBI6fODKjLMnP8o81xIFGp9QkOGEL1bbHngdYDw7vdU1IOs0sTU4wfxW8mB/fyR4HAuJwTaLF0gMB11K3XnTGzLCnHuzR2rMn5yBT0l1tNo8A3XuT+aly/MarR7QCHL+kX/rr4hqNpB6rIryMCBjhTrcDXk+wh8C+ZMZ7hyNC4hRFplywyP01kRwVfWLxu9lpeYjsQNd58MfZGbUCZ40KLF2K8jwRJq1i8uKUEapr9Xdk71Dy7iW45B8CTaug7i4kIieUhbxh2a5F5nN+BqPFLp8P+jkiUkvQfHFw3EskbDlRJs4jSt3uUoexCLlklfk0NaiAUT0Jc+G0jJ0qj/lLkYwAFSmYWusFJ8cE3WAjm8kEfmWV8Tb8cn77aBF2cENvapNHx10ao9Wf1BQy6fpyIjTyri5M5jc=';const _IH='35ed637ebe9d845ae0bc6953adea7dee7ed07908b6fa9af2ce0153294122c876';let _src;

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
