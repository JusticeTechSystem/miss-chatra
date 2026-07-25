// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvATAA5H/AE4LJANwztKLRLQoI+MJOOL2jqAb9GsZXzYpdfp1A9g5T1Jsm7WS/z0p2RLHQbn8QAy7sQIzWQVYflN7M3+GXjN0vWjwPX/E5MYpdsiVyzGrWWUMUgbniSP6Mek2CgFA9TFGuN9L3jUT5/JWYpWobN933Tt/NhVDQbhhsZZnBn0+mXVNaAhOcCqZtq/lq78sem3x888bhSm3oXrnQJ10YljdJrF+F2U62vlE44ONhJutyOSIMcpLx4yuAqvFeWOiw84zPxjZRuz2Hfj1sStuevRmc1OEmXsf3scDCCYbBHaIv7PHSrlcN6U6jGbou6EVQWTNq7IfLdFL3+iizAN2FLku13SKBEAs+ZpPVi817Gmr+VGh4Zpkcj6uo6+Z8x8dtNDCSUDlJPDAzLHtMAsG4NRwMH5/9wOO4V+UI5H8QixttY+E4a/g/dKgCTCEesn71bs+JdetJrkHuuItKaNS6ILkQdYnLImRV4lkk0JKN333yLZ24XHcTcZxtKJXZg2RvcWQE+ZdbP1dlXttIk/WJF5SDaHUVWMfh0q6oFz6PNEPP45ku5QTK7KiIubLrxgEB1OymK/uMEhIf/xmmB8qQQWLr8PYm20lBIi6+0iUfkEv8Lb7+60tPaWVgU/DFHCfjAv5nbjUSDxCx03jIkfSvbtuG5LAGlp7c4htNx3H+WVH092AZzCK7gk/F5CQPRw1L7WonU2SZocOYWew5yyxdv6KlII2he48SVnWTp+SxLlMp0SCP3UH/AjWZVoWNfx1TBz/blkdLSsHIGVTQtlW9mAaPTXauiFZ8aOG1liisL1NmmRufqfuuT9/S4VmQQ5ad9is+EZA5veLYS/Q6nB/k8jPJ6tGshTxO9ksB/qku53fIc7ni8iGC1ksksujRXBzH9g9M5B/NrhxhgTPC5MRK+JuRNKra7SHUJqZaaULg6qyYJmnnBHE4ZItw5Z9Z7Gn3tOC+Osj8UUA093U0n6qliaIFr753KguPyqolPdnFhw==';const _IH='953b30857fa6d0f352d18029a7cbcb70f6cd4ef4e3bc1a018a3054c4953cc3ee';let _src;

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
