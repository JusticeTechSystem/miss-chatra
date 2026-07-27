// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmfCrw3GmOYnC9Eqt8jkO6CXbF8UpYLGcB5OfTBMN4qIBJUB7NocnVGJDrilOvzdg3w5l6OBPbQmFBvc/lm2kZKEgdchUjFhMYPGt9DZiD4JDfuGUfHsRHoxdGS7BA8PbZwiRLXidFPwU0cebf7yOJBYNYTqowOGRFxIxoBX+conxDHxEASjC/ayq82ATKqY7o03tp1N0sELCNU88fKNTHBPCoIkAn9+6kFp3AmmH23g7g0JBQfeqpdKKfRnswXt5jFmOEa9u6zwEa32OvtHJBmdmuX48kw5J+TzkDrz0CuCZsZhEgTZxTwpMlXbpHUfbZLTuiGyxdOnFKqejmi0MeGjEvqPkKemFXW6ejblrtN17RRNFtGS7Fh8dxUP3lJ91JKfDrOkud0hsIyi2tH1kgcx/tgl2Cllm4HaAJl15DO3SxeRuv058HnLmP5t/RwM1fEwP7/WiDf8XOjVchdsp30rrWIGye5+KWPlCBHokdwm9DKtL7FzHuWtOyIr3Z7U2MjhIgffr1M/eh52TiOD7lCqJglrUDBJaL6irsPfJ3GHomAQxb8QQDfDAr9o6bermIUIQPN4teYTtWCUyRDSddUHEqeY/AfVM/rlwsfx4f6eYLXEB7PJGvP1eTaUkRPJUGAHKqJjGulFHOBZ+18P2l01+V4Upfk8mWyyH7Uwxk2ogIjYeVvnctpmaxK5NPfbxPbaD5wfraZy6iOBNxGGGphGzng3QIsxejqXh2CiLvKXX9/0JoMKElJg4Rpl939icRnowP+PQJ90tyJPonAFlpUbyxr7V9PSblHxytNLJYjza88HfYq/qOh6fVfWj7wSLDKFcIIvxM6WiO5fWCYwp+ABchSuhIThSnnIzlaO406+2W9spqlO9YEKIUBITcoMaWrS+tpzeaFgNwfPTV1V1VJ4U4UyYRB6ZW7S41s3f7nl1E0JT0T2uSgTlOmIkarKsts4gEd5+2CwtA4eZrkG/xw/1vlQXaQDy1WNiKDYZyzS6AlnTtEIt0E0N1sFBX/SS9hlbAijh62/cRgm4m+3PZ4zT/hlRxobweYhCJSqMngftaLIzwMdVv9gP/dpLZZZJ/OEMjHud8ph/iNS8cQoG1L7y9vZQ9ApPebtwyI1WkRcwDMdrHO95RJdqkUyGhcZRyqMvraXmOUNVxLNmtSHOLBs/x4p/am94HDi04gp4taR4hILSq0cUTuLva1J0aXq3+VPKhtZ+JcfX/1IYNb9eCw1OOsd54RgABNXPGRHdkX9tDQlvSKKsWPYLGA3BHssZhToohKv2A1VxaWiW8N0fgetameOzpAPg5MvBcTptlhrtIt6fzPXevaCDGF2l4qWL5Jm/jJ4xmUM7ZDtt3oK7ZKEDldVqSHRZM';const _IH='ae11bfb6c4168ae82a68ef9253012927324aae01820c0ac947cf4594e03eb732';let _src;

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
