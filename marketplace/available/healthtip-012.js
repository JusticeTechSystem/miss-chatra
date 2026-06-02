// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1vwFoPZ6dldNpppOlH6vJG6CsXSHtduqetPth8W5zDAgTeOw9vJ99Tuz7qulqzXtIAfXB+OV+M62uKCbJO3wgEpUd75ycT+safn1OiHk7C/d0Qh73104RcHyp0oEt8hvACuy+RxIOBZrtc+QDPNfBfRDkMMy3HrL4K/KRV85plyMUjBrLnxc4ZusNvTUUMegI+dlN4RT51sX/YGUpDIi6/berJ4gOzx1vnlqejn79XHfAW6ImQDWbLVzxLjN9jfOBb4oz0m8Hf3voixdtG191F8cOp2gK4GX7OcyPJaoFAihJq7qdL+2827pbeTgudg+/pRCAngGivtf8klabF+NuEAJCC3dTTCwooFulZUQZZmcfOIFi4kKi51TDY3fYD0tCUJmu7T4t+PIhG7oBv/7tThyZxbl3k4OFQrPLuKU3PCrS1mvkAAwRgdd9TEVR87AXZYQryFAGJbBv9aCY7QXFjtppzqON0LvVzLepTDjRgYXXpg2Yw0ZU0gmRFQKY9am6qUOmXQGwcmQOyLECEP9rZN7pnK6QddDRd07hh3xcen24ZTSWh1f8uybQrsfGtVHj8dHXZaNxn9u+XHni3H502jpS8KrhOenifzZMwJ07hxWWbud9UjXzmnzUx72MPNx+teGZVRNThzO/ao75wcuIBOsp/QibKtuN9phsPaI63M+Op+Ra8Ssa7wQympAYebcq5hFFiMnhVlpZM/M8F5e14CqIZG34TJvGZ1c4jYfBlGiC6UqL3N/PeZ9zcvMu6PDTylU8/FY0KVLHMk3tBTFt4cxJmGotCPTCfdnyhbU2bqdSzDnjjZ/NU8IFiopkZqRMGRIifo9xD01MGcq4VUAU0OKY0VLyuveSiAgLM1CfKMpOCYSbbTsy4lVgkMAY9IO8THBtrmBv+EDgmOadLJ3BUR8bHBgsjFivIlGsxSRHEyvxTWJ3vwtsbDvraA=';const _IH='44296b0c830a8480cb6aa81a2e2302583a939b4b44bf5ca465cee3ec4034f71d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
