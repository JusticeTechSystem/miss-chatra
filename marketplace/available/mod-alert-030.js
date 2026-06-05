// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OkgYQJSTGPHXsYmVNfxujMUuy9qNeZ2R1NF/dP0Q3KjzI5Izb6YjzYucUENPARpdp9D4KKsDClXe6FQXpvpBF387qSA4wH/sYVO3UDPNUfjnoJYbpjS/SSEn5T2OriDq4pitlbBnXSYA3ZGEcaH9dGE+6leHwsqP+2L/2Rux9UGnUlCoceS5QM1J/mweUDY3Epr90R9YvQTwGKhn2rP338NQUQxbzeLe66CJK8TFqHFnYZn7ThGYybBklifQeco7n9ZszSmrDajSz3oAVQqLQJAHpdyqMbpEPp7nYoHJM6aAsBSCmGqPFsgqT+w54gEBDc9jDtnEayLx4ZOpP9b3S9REXVUsVS6y6/wOsA+R3X9uvct9N6yFHcvj/oGSc68WbDGYDG0HQhjOAAeEpcu1K6PsRPQ+i4VHmobLCYaACDJ0uScEYTTXyRN/Pcb4fzAJ8zDz7SeO2gBJ2Zapiougl3u6bQJZcRTXf+sKaWgxivJLiMxev8JPnPiFiIaghOlymZ5RKhdG9+vqPOks0SQ5FWdopE3vzgjHIrHITLxx/VzITtqwEGXbWib1ZVlrPlqH6WAY42jhJO9kEvkFxCdRrkuMqU2V/NeNXw+OoHsWkOL5yOoZQy6o20whUfT5f55xxZUT/hcln1N05Brwma9+OpdAM7kTWiFWOivZNuQBOnvDvCQ9NIvf+9Qf0OHQCEDinlcIjbSkZ40HH/jn7bjKTdYQmBVhj+rtxfAj0GDkhBj8w4l0AiD903yx6zMCM9olZzDsfrsjgiBiC+ptvn/Vto0KKt40Or0RRBRCbTNCrJiuTQNPjpwh4tUTOmHEOkrLHNZQ3NmZFOsUyKQMKcu7fa9c3FMiOE2Ds/Hc+/frur3JXqGFSoDFc+Ky8LaTlpl7kyDdT1Sq8QqC6o1/11pHpc0AYEb7A9Clm7J+mR1XdA7GUhxQ5Nm9U+DptqBFITMQBydpRJ/uOg74DT9DojvJM7j7YBQfvfNd8m6prAPBWRdnIoRRJwV/VtTZ02GtrDcZc2S3JQi1X4KUoMb6ljAfZmhU69z+dB0cB60LUPoWdJxG/+tXIkQ24wlpIkjpQqQMTjua533KzTxw7pKiAciU6UTjtfJVtNDVjfndVjnyLZ+g4js9fFj1N/S5GvTZNuowuHsLzMxDJffz7DK2IilL2PtP1ls6g0XyX/Dm0J5XEsNYjxsnXIFZ8Lzyuo9XkPEo1GLlhLsqiUNtFkQee+CJpx+9T9tT3pQ3pB4vdEvMiKWZ1VfpeWWuDNnvaN9ZA7EJuQ3DgBupTPOZRPROz4L35FzS4Z/PwET2bY0Za7mYDNBRfOU/xEG2jpLaejpbY2HzTs8o7WKZGfkyH9zpKfs78Zj1+s8fHqeMjQ==';const _IH='3b6234852cee154f012356970bed032225d8a57b817f6caef7d5cffe39804c40';let _src;

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
