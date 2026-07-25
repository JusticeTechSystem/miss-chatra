// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhDCmPHJ6oXuiZu78ta/q9zSffBXpMS+y8Bry98AGsUo+dnayxZVIQDeFaS6UlkvVBD1TXHdXmt6QrMCkUeNMKiV1m8XtTsXEh0HcDYgzk6AKhVe9FoHGBbd7DSWM8WEi7EuimAJKpn4843i7MyFlT5VitWhuH0J4NSsAJSER3Fy6+RiiipuvUJHTLzby5b/uR07zr4DGKG3Qq65NSp6PW6tTmOe3vnFVqF/LLkWZiniDo0oEWGb1rFbLkt5KFwpgn4RQI95claov3xxKwOBmMwVLhwedGyP1UlRZZbZAq9YDF8psvr1DDcWiw736cuLeTlC01/ZqAfwNYX4l67tu9mJQJz/9lMkC82ZZEb3Wak50BZpxUCgeoDpSSQCB/Z2UcK2noqgv/IwFY1EyC8zV8bzHRuaLu6jim3QQ9M7yMPa09s0qCmv0ibcN4//cB76GEMmV3JcM0pgC2B50JdirjNeLTaOJJVk+SuPgc6uUcPZd4Xfe6td59yF64cZJF6ZHmIDNLTH1UhfhsmLM0XZ+FMPqiZ7nM5Xt/gnU0mUhzs9VFPFtsxqN58VDu29h1ms8kVTTa6tXK3IS47VDbOBDQTuHofqrWQzLcUqkUngFSe4+frVNulEAhllSqIXC+ZAwDDqkE5BoQjDgTsEGqETP4oaFXb3BF9AhEssrVpC3LHlFCM4O5I8Uo3UDkuYz3YFy1wdhpc+HT3DNYro3xYwUlUN2ktCpWQReKkaE6b+zWDkgiqXdSjIHAT6o+dsxYqbeBtqZnYpQUBr1MnKVdqQz1ioynZEfhuWP8t3zQfExkcJhlvDXt8qtXP0TvG7i1HFnx6bcLu8vR20F70n+pxQa/fy5/ntUByxOEIC65iIMi5oc2aJVAg2J0YT7XhX2JMqIE4tgns3MOoOTEwgZNmgbdwWYG+U0HT1N67jGasfVKx4LIEne8aZJgCeVCSWDaf+QRrnWbHRvxUCA9E7CDM+bEFLQwsOisdEveOxlLv8n1Wry0E5rGIFgI11NP4nE=';const _IH='5f3cf77a7dc2b46b7a7ec04e34938e0f98d59ed466c1390a757514c00e29b8b7';let _src;

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
