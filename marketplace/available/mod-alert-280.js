// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6sEQf9tBCXDUNllJ553VhuV/7uls2f86urARZdLdHOzIUZ/53x3IcuB6f6A+ipEy1m4OlRm+lNxXtAmz2UpoQ+GebuEEhhFCLGVa6RiZpw3z5tH4Tz7E2pzPpFZF5924TE1pgn/Ip16v9NUglereJgacYox6pTr1HE1MrH2/M4skYoaBuOBjgv+GG87tXoA8xsJAxlja4uC826vwIYknVs8Ar3U4Jm7l+rJpbvHfb0LVMsFiNk2bhQLQaIRSoq1e2FIlCIVvjXDLbtnGSuUS4baIQJuoHltfRxZroeFOIECf9MsuNa6wcLzOAqbAab4PjvIYQeC3Q8wS/L6WHucdj88ccw/uPCZ855ZtgkfPI0BSBFg81BPaDG51Zs/L9Z/tFTpI3VjmlswMZhhTZJvw/1colndLtlXiHjlbi6jtqSRKht4YTKOLysYk0eXU39JPoenEN687YE2HWR5deCHEG9iSo3hqdgTdTy/pGyNHC4Le9GN57fv9kjvhdZyI5G21BeoAoOPu9H0aAhXDzVBgR+fnt4TNLpjlkpYOG9lRHQhslvBCvTXVZgCzAd0gYJI6xl7T926h2fJ6CjsWfB2wrnutqZHdsoCQEzqtEGyVIHPVZHubfB3Gst3BPODb7qJH5p6tADqkmNtV2Fs1lpDvUMFFcXyxnjsILyJArZLlJsK9WYzMBncoMtdTqBQfEPshLj5RUb3g1464p1kyzKopZLHnssdndOD33mg3798jXpWOtvnjtR9siwz19yBHYdNTJU/GKt9XA30uyl2xNF9T7oIZ93B8TgnXIilaLeIdm4pf5Nuf7nVqQkgCjW+yNkQn0Qd4KysbBnWUqoeQ8RMiAo1qtapYn2/iCOf4doiR1R7HceOo9edUMoWuUJePhlli+CDLaCPpzDIO0y5gEPQjZhisdrJUiGKYIq4SFTPRCb1tVtAC4tNoD+p7LCxoV4OaMdY6YXIIvg0QVLDW8KXkHKufQsUWNaxWsDIVKAtWqv5BNAbi/TLT/M8VGs6dNrCXldwjRpZ8ONnlC/9Mg+YV7mXuu7hVqal/90F3Otet6psEk9jDfb1zq1G28ywRoe1YLZpMSKxptXFtnWNUHME0AdTzo7OwdLlhbXdhFVz98ZFAFtfRYWNt1hLjvbki8GdKcs9fn2wGnNJggEbnYghIVtIstEPz1x8FaSce+icZMXrgytd/DXJb4BbVGfMsNgMT5RgssaYKP4pwO09mFov+52d6O7cOqbrEgWaiCtUdBwXZ0xVteDy0KAN/nW7L7/FQ6IRTj3OoZzMde1v0W5Xp7EGB+D8LnIrLLt32p57kzmxvPbe8LUV0l7GCerVgW3OJvkEWupSkMEHuHK3SnEx1dreNyE0gsreEhjmCTZVw=';const _IH='afbdaf7d5884f9729edf563548d219a8ae5f8828f14f7dfb44de95e2c80951e4';let _src;

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
