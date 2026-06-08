// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HHkqkLCVEOyiDKgXC5irBJ6BwrJRoXzI04Ly4wPeKKmcLD5u6EG7RYJk47Dl08Z9QgjW3WZE29jXWRihQNdPLoiI44F1fmyjsGOoxrY47VBH48aZ53D5P/eHqH14P64giJcGhdCc12alsxxACpY4aF4DxcJ+YJASToOp91u0u9a4ysCZfB/mb4Ui2KH0TUglwyKS+i8weEjJ8hdDFVkq26QTDr89hp8SCREqgfxDtFrIJ8ydkTUV1Xh3PhoAcLRlTGsIBdmGfZjlmLMEwGu8RD9PCDLs23uQKpfZ7R+Qp/qWETBrdJoVyRugOImGrYnCVo9Xypf3ThnVfXEiO7ZL1B3BqtYTuqxFAHdgPAwh7xvhLrOIm+ZYikXpL84IK2qvp5G8Iz7XG7Nm4JA8eZkdmgzlI05GxTNlmc5dkgUHkal5b2HjzquhxpEw1XaErkyMFDUcqfwo1LQuqcW/5hHxikq6DkeKP0S4pPfcToDBdkyQzLlRE8syWRmEl7FKR4uzRzrQD8pCVYl35oaeyRmal+LfptkH9ZNf/hKYt6x8oZuquuX6ETBP9X13bXFON3ZdymCMWQ0qFgCtlpfCuvh5xgI4SkaJ7/YiTApVhJP4r6GBEF2wOMoVD1pO3FyQW5aBsGm/UhfzccyTVaOWnoJbiHTmIRaoA52AasqQwDzkf6nCZRS958E610dpYKzL8BZWaIQ81RBiQ4Pp9L2Ss6D2LvNqh76LH+sJUBYuvA8J43nszYKlCl7tiHZk8/YlvM9nEQv3quEWJZG7A7MUOk0bv1TgdWeGNSrY9p3S/2YT5Y5KCFWrvk0cSGuNz/v9VuLGUcDr6aa+a39TT6mDYB4gxh7LaxC2u3OFEXXtS51Ltac2gpRtDeA9Q8vmbhyTdZg/TGQPoTY8O1PvE/l0ee9q9m6zZ2QK7RjjOSPwbbIZJ/d0VWvlDe8g3c1QgFEw7qdXT4sx4tHFTUR8dSff0iS3vTZkQxk49eJjAFrfskJXZuYz56c/YKtrIWBarYNy+bZ+jpL0UrERcGBZILUSOD/PFYmcxTnKnVnoSz8v9Kpg/huwW1+yxTqx3wukE8Mz4Z77ARVkoZf8S1T+bd1hKeq/c24PLnCJT25p6rOuuCsMefwmE66rGFafzfasidjQwKq7TqncdQzrY28PsIG+LHITxl5n6dySlSMNst3d5WBmLs5EpnUviIa9o+z2uDyKwdl2Rm3N8XrNK0i9qxEOv88maVuu3AKS+vC1QfDxEdlOmvO+WfEDDh2jfSl3sSapfpUjO4ERed/MfjoCDH4ushsDcMZPT42BG6Wga0F6Y/B++jlRy7YDnHDyr7KT3ug4Rh/nFhG52NXBxAqEdQtn4vA8IJBG7pP77w+U50K0S1R+YyCNrfMBIInPlze2Ao28rfFr7zOHIOL6N00S5qe47+rbZjCSEVcfCI9fwWT4A1N1btx/S5HIhecAK8UefA9khCqfuhJlegy1';const _IH='679ef02ba9d516ac668d21b1c7157c552ec1bce687c4ee58adc255d0e292f17c';let _src;

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
