// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XK3NdSSjdyEIECtvB9aqJF8o+/PgWPgxwvrNAWw5TMtYTGH0RM5oPd27/4QeDbToBQrXWxiD40bGsP8pQhQyB+gyb1Z/iTwe0P3GZdJ7x79YA2UFGzTgUZuySK0qqpbIscTqZbfF7zGy68ajDCNvpEL+y2L9jqY9zlJy5r75HQdyJnLnLZYdhUnYGUENA2OFyjvYgNW303+vyDlbE0wd/NSX0jwIEnLz4aM8DCwfemeW6em41f9b4oxqKnWW9xjgr+jlG11WUSowg0CUBYIePfClQeGBfNS5Bdi2i0oHO8qIiY4r0IiZH5q97tj947JevvWhDo7KB77eXrKevtspp/LwHOpbI/5Ghx3V+ILOwCbi2y0d/baeV4cZbO1/woXlZ3zGim+DY7buKSu8v0rWd9pAKTIbFnavr0FdnbsDZw09etlrnbuWwYaflXANpIoFkzH2+jEwtd/XAHdta3XGpPSHKljxYMDnDCny1UGSXJO9kiXUlLju/mbvk2/YB9YaM4GEnIntMIssXrkpQ1pyR96HITvmud8JChl9nihP0gDzT1f31ll9HUNFqjC6pFhZ4cXy46ONBaufFWAG0IBzWe0/ibcvxmQ6IGd2RTPJfjX860vEUt8zUcdcQrxVL7xvOcssbIKXaYamUaVZQ4VGrQp6xCor2T+1+fhdYprF3/PQZ3bnPReYnbKTw56MUuiHi8Ug819iOt1H4rXFjYdGkFM75LewjlkDEMogJArBpMBj5Y6KM9j00DAtB7YQvo/4KpsqIlDr8reQTJkfDXET3LZBmZzyhq1o71NP37NlOd6mJmVwiVaGEsQeHitUvjeu0SxGNUNP664814ocWs6OtAo/br4OXVjaxCEVhuQDoEwA8S/c/d7Qr5DLQLd/NK5sA5C2c245Yn4xrzaUH7g1YlWFMQ9kFFHC4hHTa75/F5WsNyw7nSR/x7n3TAM=';const _IH='608484942b4b137f7289ed449af4a1cbcd46b4be606785833ec3bd1161b87416';let _src;

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
