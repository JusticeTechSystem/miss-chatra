// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+mNQWkLjNEcKaXIoTxmcw9Rual4Lo9l/MSJqVheOrAia5m2GrL1mYgABhCkFkhh4tcTWUiuktOedm9QqOLUFJPxNcFZxqrNRsVnHcr+sTmSt+f+RYvFoHaXn+Y5jZFijKOt2X+J/D3odr+tH/EzkNjLi4jpYY8C5kNrDHMuldLfAzJB+C6snHAMaOOecMKhb3z0lmzz8/DRfMEjjUlzFxcWQY+s+Qa0SCaP4PLpSPRSSRXtJ9wlJBH0FGYVTV3E5PXl7X7weMkLJCgfsplzeAl+xWZSp5a91hwH5rgApozFndabqVqXT3B5SF7nXI4pJbE2PGaw/5E9ewveQsxQ9Bu+WGphiPUWMYhaVBO4wXEFpc7AkNDLLMiML7sndt6EFttYsrSs0cyeqIpaJqeG5B9WCx77fpFDCY05vG3yA6AsGbsws5ozZBxsgLvKjB5MWVYJsPGo4VgnQMENeQIC8RPEGZ+7gvRc+qgheujBprT+YyBqEJphT8Y65Klzh5k60W8owz5nSgKEnqkS7SGEJOD2yew15FS3rTgH7GhsfL8/DC/XMjdZ5veeoh9JpKMY78XYw15pbScEQdUIz6/7EeID2EVxVDUeDdQY+0NlSvmfT4eZjrwJCbTN5CMCOR99rKrUZBJfJZR8niJKseUYikqZwID5pDlZSBh/Zv3BsQ27B3+sew0sdDJsJYClGukCVzf7o1nkEeOFmowkGml7WQbJomQLamr5IXRc/Vat3F2TPK+2gTrZDgHQtoa7dNg6701sRi00RDEy+s88Z/bORIWzOq8Kni3aogrLFZ4sfthinHJfDZqFxx/vyYGcD+4F4kHiLEyROl51scFX/60gwwSKWR89iMeiEDGUJTF8YnTbDSHdXGv/omirfiRFQD72b7WEtmwDkBCGrSr1ya2zmBPZZtuHo9ANJKMTfMICwVXGDx6oSTGDz9WvJ541whd0ucRc3C3ZALLetCOEXdLkWqC7rAKlRhdrsdH3hDFfluLyy8wjAW/o6Hf4QHCsd+SNzRQrzAYd8yqABoy4KiG/pDq2XpXzPyh/Wg6UdEOLZ57Cvmf7rtddXPcs98UVGLALIePmd2vGVcxe1GyGvstu3Ngqubq2qvW4CnMIbWML6z2YCyfaL9UWgeMu/7xGZr0bfGCAp0zqAFlKRFzfDRCRLPWK3ogktFcnUGFVJ5DbWjoEkXf3FLSD0McaCyaEYkhbHKYaQhUcoEGHEHIYLVzWrDnIOQ51mriBK9QjJ2GRj0o0ScWIiBX6ZcGO4NR8bx3as3MHkWi8lYQUZG8a4Srv0yPOf/HUkIzqAQFvtQPWx83w7X1FyDosYAmUNxNWSMFxJg8+FJFgFaTkkXN4p5fYVbCd2RPN7PxSRGg==';const _IH='94be04f06551f37d911b5a7b47aaae19a6beb34da3db5e0924f4883c664558b2';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
