// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BWT40+/wG8BBvy3pfDMWh8Yuo+v3fLopc5y6HOymGqlmokgZLN585dbrvdsL44VODppmw6tsW5ievI41gDwvcsue59IpG9JcJDy5AktkjB2XUNQb7puy5SWoS1aYh7c19XFyvx5qdDqPcFEqVYTibePe2MW2U8myrR4aP0FRu9A5GhFevdpfVpsjZxWa034NAFf69Lll+9cD3xk/S9l+K23rm+Om9FD7oyVT/AyDopacHRvYVIiTc3cEnaNumH7g7u39RQlDWf6/twe4PggzYJQOxWH6H9ZaLtrZryNtiRONYRCaCXhQTK6Sm0nm3p7EYOIeBbFI/mPDsprab3Kix8moubJKMR7xiN6ZY96ZC2es4CZy5zTRaaY1baMJQ+mYHq8/EF9fObgpnlJkRIfrmz5kJrG8GvvDJW3YobeTW5guKm7J+rFT57CJ+4d7uzx+Smw6nvMave+W8KbgM3tcQuLs+zxHEvSv3pQsFprTPb2DZWXmdweRxHbOtwDC24mni7pqeRFTgOHgDWBGKd9cl2gZ9FjijB087stEk57FK3LJKSzWi7vCcVeIGah6UtH6WyKhx6SMREnHhotrb3xxanbEpLa8zt9mRSejcsfC4aDlMIHA3FQnsg7QQcCx9via70v0bzOx73CSPE8Nn+l8kfIO754aYgR7syseX8YBxWmnIhKU1qMvUQEMz3psgulHsaINA+p49W1NuwIN6ruwKBljHOi0AO/jklixhuZAiWVbA9l7idlurfXgTuMUCzOHTCF5UCM7WueqDfcALnYGLCUONcpWag8xjfu6sTwUrK6oyUZXmFIwblS+gUwH6TwHB2lboDUdJIgfTEedF2ojQqt8DqYBlsHS4xEThQiF514lm3GWsm6gTdiFD+Ue7RFS/GaGXFIaQKBLSNraEZhoHWgkGGt9vfYE54EY2hwef4HSCF0I5UXnHaIbE255vc7R9n22NvPXIHH54HcKUB4EHU4WlNA55mi7iEkAx6NNmAqF93rectsNPtD2D086/47jZCRiXNwc1OZ793C/iaED1k++Ck2EyezYqmxR0sHlYDa9D/IE+ej14GqHXEMWvluPEtHwXZgLdHRTIJx0b+R4ZUGjqR0f9lsMwnfNNgDXodUzKBbbk1BfNg+1x5deusjWLbJOZy6lAFMt+UCsXCaQrtS9LjcO5SN/3vfSdO0aQDCqmvwXb/au35/eWw6waipiRUhwtgDM51IKT/UXx3wZKRn4NWimu4Q37Rbp3yZxgOjmFVaxp4mXpwsLVze07Z2Z0cI6Rh8ggAmXaHLZ5cjPF72M+5rE6wSmlcZS9pvDlGJGvFGqw8LWkkWMTECCNaGiOTFTdu2Q0mzRp5Eypj9A4SSXhqDhAEcyBtGQjp6GzSMucJ4dgG3v+Q==';const _IH='1479b2e7bc9ac3e31648b5d0249b5b96a93c12b3f34be965e5ab57c92ea86153';let _src;

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
