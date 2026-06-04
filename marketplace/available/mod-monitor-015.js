// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pMPAx6BGuhH1Ctt9Q6AyojFUfAjV0Dxc7oxSne+j/it2BckZHQVihQc79Bw/uuSpXoqSDveBiV1ff4+dNlue1N8MrsEBSF9ZTtgAv+H0iU72r4aERSTmM38PDyBixQoyOoUktrzOt49MtklMtGAZaG2MSjeVgNsrm1ESCZtdsD6Ii5PNmrxMUdj8yko8XGZQtT4/0Q4O/whYoA/uvz6niRSxfoOxgfle+ggs0INAw5imnoMimikcI0Hx36kX4zxoLsiu4wGozmoSAtuFgmjIIBjGiHkATGQwR4c+6tNcgsv+BeaDW2EyYWjrnIbG/P8RZEGYvKZYSpebUpBOTbAY7y8VzTC6hMiCoPKYkAnvXXIk6Mh5C9mmf/MY/XMnGb0nCyUN7tanPG+oPfEzQhIC9g8XAAJmW2f7suShqy8VDMYQlEtycI1iTRPqYOOMrEuzhWIM9wOD4+vUvw4s8/C56lNgz0J7rVbkvA8eoQNGatFyxWYJHdDR48Us+57eJHT3NO4wZWjKdHvrTQLwMb5Gof5RUcrNpyx+v00AoK8jO33PxOenAq2U1AmlypRNUhLyDOfU91FnUhik3f3yJiLhDUW9WtnKAp89/F5SrljDo8n3Xb1oUDmRMkgKJyOaBL2ner9/tdqMZwV5vnsxvffJW9FmZrb5o78F47m1wo0ZEFm8D9hA9d/y6+rGR8EGICl37rpXazSKXLnX8KfQpAHmpWclQCUPIrCyH7hIu/XMLt7a5yKRHPPRuyfxLYOhvdgvgA7yfaTsWpz1uJDsCuu7AkyOaGi/IlSHf4jhvW8DfDiVRKytX+N1oOeViWxpjZPlKdx8n9h39pPXOa98aoNKbtY9R9UxlYI7Msym2lGRGC5bGoyvnuoCVIonyLvqLvZo2tBJrnXlY0aHcoiTMqvcX3/JeQSt1ja5e2hg7jqu0el/6pa0gs+ZuyVC09hLRawASfFxRBodPX33fjxUS8bS5ygA8DZIz5C8AdR3RJMDlU86siCZQ4A/HKoyjjdYssuIe64MtRKAoyjesNW29bfOCzkUkO2jaDGfy6TRcyQ0L1a5PTzW9P3r2aEgTcVQrGQgS/VH7JXsNMpcxUG18+O1wFwrtbHyy9VwdWqtz8+uitb6jcCTu8FwXUNK6nlZih+FZ/e6sB5gP+ILf0sWxiwG832/SvHtY+PotdYGNLnhsjfRKASR8wSvF87rYvRxSIm9CWjWLV88PvHZYeSvM97ccjUGJcz60MC5RfPP0KppZZBox20CaaVN7vDR5/IAFMJWVS1pvSjOIbuf3dNVDM68MstzJpUmtZPKvbbcLJzlyf39zTX+ZHdUluOtFdBByjSn3Z7dhHt9jMJpnk9BwAoB+adnn2UIOP/U47+oT7jcqVemghtehv3n5n/2N+aP';const _IH='2f9b4f187baecf1c206b4e689628bef2f6b298de2322f8687410cd4a2028791f';let _src;

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
