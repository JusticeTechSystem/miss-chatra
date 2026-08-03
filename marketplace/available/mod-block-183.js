// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWm1KoOWdTEVhHavsImAFSKMASHT94wYsCkftbjc7X0h8YI0A/eJGESo9Y5p5A9yNXEFt3aPL306GKnJ/o4YaGppeEunlntbRZ6uwaEHUVYCp6z3HHDSJ5Nw3o4ABfrW/3whFichCwPKz716GIxmc4vNTh8EJf7+9W+0BiurLRrpRIaji2jYc9kTuP3H+QxGBC1ckfVc9i/14KeV0LPwJOkV7nuvEmLHHbM4QFcVZKwyFQ3TnUG/gfyXlpdjf+dTVfeTgvxK4UoPk7P8CAKQQqwN/V8rChXT9voEMEQaTdk26Fgb3ihYbi4NsEfEAa3t3djnYz6ppu3MWUWgrbFMsyr5e3izOLdu5qrUF4Pg2VZ1n/F6X5vgIZkMk7ziQKCAY0IsUL+dnlKNtRPQILyMLOTDxvogPq7yXHMpOu4AlOYruGuagkoZDIT3dCFi87MsNOp17grxNb4LuozDhPxnx6rzF7V4vWfMDDc4V7h3jS5/mYipQCTqdB7FJqhUntpouSCWb4k53e4puKlE1oIOXblr/wpHofuLzmvNCdrq6lcK2HLg9VBIkZrpve20pRryGbWcOeAldihzERIgbn1NV63hIwrxbzs9DwH9lNvu/biKgWsO3iNFoCw6h/FiEhYat5qqgqz1W2Wpy1aEBxw1wv/Q0OPgptPhMahLWYfcnIe76sWA+kXt7hURO/WVjH/OQ/MrnqulkHF8w7lr9NkOYWepj4TYKUohGBM+bKHftNhul5yei0zk3EDsJ5racTw9FYWGJx05ucVvk/f4B3o3/6z4cMH5Tyt9HnIJb0ZIH8F2MKeK5qXHRa8AH7NN6juOduYc2/GsCy7NL5o2Zu47YLkrlkY3opNF5TKg1slmoNHlnQ+kiLTUxu1O23hoiYQvYHxgrwNsV0eVKRZDalbbczPcmJfalf377ZZbSjcmVM5ZQkerS4RFytDZl1Pa48Qz1ovmtrcyd+g1KfA5VnJRjHXOYll1E2U/QYdzwFgAAffugIUf+qt8Q12Y8oAQC8etBI2LhXd20OxXF9oN/ifwlfbnrZ55ihWEZjSfYXfGDjWIOUuC1CYrjkHZOjfdElBnn4gAfX68iwKyrkRZofzYlHcujLpvHUEmLafwwi58faMpFyg1MbzAUB2ptaw/ZgvHGOyNJzRWDFIEOTAX1xXAelyEF/HkOA2KUGuNOPrRLuMVhjzi0MmpJlAWuALozd9oVkIv2LCrXdKxQKDjK/dUOIr2mo0OqGWCa12o6t4iBMBvd3mgnvZcR9Mc8GW0bdXspphPnXHyFZorGhmFBGiZkiyu7aoi29I66uUj1/5vgxYMSbwDWDZuM1FgMRXSvGnCDQiRTZvivbpQTRcFX1V7hYGNsNLUSZqBYV8/g=';const _IH='98f3e689c5ab5b81972aadefdce5c59622f0492d090810a1962fdc0ce5cfe76d';let _src;

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
