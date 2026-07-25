// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRCxpnF2ZDoNod3s8gCpbj/XhB+qnySkvMO8V4DCkpheFwnRzTzUuYutRavOWqbQcmPpW9NPF9USX7eS+gVCOjThHDqdyEin5FBYZFH5aknavtNoFhPw4lDYXt/6FduhfHhHX9F8bCa8YpEG0IjVYGR+OtikYW8uKK7kq1eaOCtkMAmpAKOUk7EzF4P1lRUmWigVb+PhMVDVk60lUKY+/vW/W+O5KD1xEl8iWDLvwruSjxoQIoUC4IASBXEcRom7fC+Kt7FTCBbSZq6rVq1zyRoFmzTRf4n+PWvS6Q/xMu/GHZy/Udp1k7mKXY+nrVjMArcH7C8NIF3+C7V55P26JRzE6yHs33HNWcMw5AwiCcbmw0/faW36POJp2Y2NYLwEQTP4v5SGAu0OM3AiA+OCdNAl7KRWnukJmjRCDmohAPUgiCgruJyPVEnfe3gTtj9PKVoqh2SIuSuWZToFxYmn95DH0gcQ8t05grcHL2n2fjSYAdyr5GfuHqYApu9HBD/RjmtrMnKpQujhJAQll1jOXRmNgrLot1cckZxyCq8asjwudT0Gu5gQAldxTRwN3LyclUfXYuu6hcWSpMu6IdFnOYuur85FLgBCodtkxjeTmaEy23g9juHB4/6JPtj9ob3Up56gKkGXHd2Q8x7oQSnNjhNHKrxrB9yXoRSnpFQCh7myAx3ckc3l/VZlzBuoTFxNdI34fZr1oL3gBRYbiwquwEmk7I/P5slbLN9kiofZpBGcAzRtYhr+QdYKt4HyjwgnQZG1QmF7ETWXRH0025yge7Zw28BA/CF3Mf1QsETw7MtdodOxp2PJNj4ujGcRH/jfNsjOZbVcMdBgjvG0juO0z378siERMIRqNgM5ypFl3yuFCdorx3pteN96LbwJuqXCuOySHjWOZeFHxRUGCjAz8h2ymo+Ek4mzyotOKvhVI0MSidLCkoD9bGz51ZOE6NR2Pxs9U31GtXuFoXxrlFzcNelPJMYa6F/EE9R4h1XFKg8hhw/IYyHaT/MhXVk8rykJmgtk0g1P9yAsk3015QTtC2oXE5iDk75aeCO9R0jw02UOu+K5YJm8gSS0GRF0bnIE5zad+vo+FQuy5rvXn+P0hvSEEQjKD3UHCFEyZHndEIC5lpUzgRiKY/N/quXndjv6cSFpS7CfzxYH1lclRM6egz1eyTGPSmEnxcgi3VjdVcZH5P6tfrJnDo9y5nc9KOs+eXT7vEhVu17S3LmQybBSTaObtAJs0sU335XannH8Lntxr+MNZfuxe3iLDQ2ZYMV2BnIjfzpu/ym02BdQhC2t6yHCyzK0Yf1nTAOduCUFttyOlxrl0sYB9yi7ij5QjnntszgvAq3dWCJgiIeSmTlBIi57ucPWPLQSea+';const _IH='31672dec4c5fc7d6020768e24c7a4f854f2626fb56f64aeb61888c7beacfdd22';let _src;

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
