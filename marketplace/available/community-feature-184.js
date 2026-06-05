// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CrFV8RtTy/89voUns4fTPOcHqA4hsDWMvWy3F45ZrTOaKA6eFa333pix96S3N2bLbOvcu9D8eeuCU8qfgjRYO0oG6JCTZMfwYyXJDWuCbbHjcnjVrGH1qohS8sHMO+iZbvhNrjwvmubIyC3Umlonh6jOzozvlgdwqrYp6ApOp9dWk1aB04C6aWAWzsgv3rgj8Y2lmpg86cxloTO4TspJbaHdpUUJkl53C3h31Js3p4AQZKPEdw14hH63K30sg6LJ9FE90pMynk2cqnC/mQ3BMbJgbBAxNSFtICrCMpw1DvxJPLFihvGMpDJqvs6Br8+Bk/urV8oGQfAM3KP0t7yZ1CX3t2sZXkPAz8T9EueuLs/KG/2YsxvO88vxjR7F8pHoBRW402lBmz+8k5yU1g8xiubptYbSebliXbvWF76rjVpC3vpCB0LAlaqAIuMi0SXdWdYg0WdRoxsZf/3Xnh/xC4hLo3yi61HLMl6X7QyiliNaadX/pFzMWP63csYIZqXQjE7ClRYtfyKVv6Whm9c7IJryyVIIzEwotYZlX4pNoMllzwgUAJtlMCIuwczLhoTGRanW71I4uwVdUmS8NlkmUc6sWe62Hn4AmaN9osl19Xi3iufuNiiS/CTnUgdApErRKWI84MhTcw0EjYtNhAosxkegaJ5Te5JTE8daz2oUC+lCAyYttP94fsygqtKmV5wH0ueQFsYlej/+btdORtyh76yhqHGDiD599ziEj3/LXGAV1T00YY8=';const _IH='efd13de37da71e7b22806d9d04d368e8a8055fbb6196029c914d858155f89705';let _src;

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
