// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gh/3OGS2d+UhqD5H/yrrKxOdYj44Y2U81EhqAREOtmQDIRzeskimoF3ZpGsNrmInNTm4+q5Xs7H7rA/94hs0c0ziyShZ4oXlecXOuLwptFsWPtB7HtxrLcBKaGnQ28klBMAn+8/947tUQw8JhqAz+ABlWU4LBf7zfRRbSTKcuvQURBurupzReNx7xmambG++qYailACLBXpIWzJAoYGUI8G7LdjbxvpfGQr4lLc7UtxE+I3DAFjSeT7rIjODLMutp5GZ2UEHsdMDHAAfiGo5qKa/Gn/2hAR6ypSah+t5mPJ2vikxUqgRo+Zb1vj6zEcv6hAP4DJoWRSzisGZEYRa1h68aycqbzLvS3a5qrBnL1VFc9O4Zqc+Tg2pK1F1uvySGeo460eXjM6yBg7++/7a9ImPf7nxy4pnzg9vFrFYf0z2IYt3OeMQMsMgBgYq/xa+irpXZm1U06myXsOGA0Y9pKyDP4w8LGkJKqaUUi11W4DsQw15JO+oXINPC49aKjKKUjVJZodntEqJXSYmdiusS+FMyDLa/RdPMLBGYWsYos3o2jgk/OOADq6zeoSQVhb+D8FevzY40igGtjisu76a6c8K3EtOd4fJm2f6EgKJsaiWhIeqLn5rYbmZnRmo9/18fSfflRSnZjDhHl0ZgGoJHBqLWRKie7yAdWL8LJuWyOnWXeHwUj6CPyZ5SqQjor3T7Yqde27Nt11+DUem10v/ofhlEOV+ie4CAHdenacxIoPOMRU73LlcS83f0YYkC5b9Z/NGjpPeIBqk9PLBpyNFGbvRJCrtAy/qNoWLgBawFERMAId4AtuYDLni6dJKmtnFlKwrmSad8I5HZja9EMDOcWmw1DK+sURNPdSCApQDexDwbs9m4MAIHNLv98zpLGVvBuhR8z3DH8Fr3f4XZLnexgZByiBL4dsl5/xVfjKgfctS2YSPG9ZvxIXr6iS8KgoneO+DlW59Dl4V6fqtM5HS/XwbSYK5bG0ik/WkUv4S+fgYxQ2jiPanORskoLytKeSYURN5ezAgT4qllZIfYK75d/+YixBOrLgFMZjPDs80neLrLnPiC6Itpverx/Oaq+RKyBrKko8lTmcyzrrXgqnrRrxfJPkjtrJzkMmoAd8zg3D4aWbrGULuTRolJCwydl0CJoCp9thit7rTFFUwvBBx3wfO+CCtqXtGItY+FZ+eSKvpeLPMAHlZC5PD29bbbR3s19lydCS3OgHoNuy23tYksY6l2AKowivqDaXd1wQDGLG7kq9H7xW79U6NrrKwYvaRCGOpuLjUr7o1bLRsC52ROL1sfp81QxjhoWJlWd/qUiXH7OyK5o5PgHuNA1eh4GpTBpz5Do7QMyM7c8QyasQhpHofhg8IBmL8QSh8z0DoUf0OS1bEbs1lRQ==';const _IH='e991c8f2890fdbc8ccb4847b068035234ef72cea67063f81a94d7cf0c75aa46a';let _src;

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
