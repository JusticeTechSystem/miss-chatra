// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ExchTkYYUtKnU5Bf8k+Fy7t35ddNGu325p83FzIZPHQvdy60FCWvTRfjxHsl8m8wJxEK6G2DVgR/su8UlQwMdFugS3Go4qoThl7nwkK4NogLulsYW81kDz/2396tWGJZe+4VrHmSUAn3uhSNoan7/LkWS3717UzWd+TbkyvNp23bWU3Ntue/C1IFhnD3H4iS6QRHT22OdNJECGdaDUTTAc9wI0IBJ5sCrmivp6OsYvUH+Dza3V7an8n6Ofq8BaLSDnToVSaJQhV2O2PbDD4AkXDfk/d4YUqGLyFkaZ1mmIE62r97Ehhz/wJUvzEVKY3xeMogQfflFEymvFgdc2vfxiodAfVuJW3ReD8bFnHV6IUJ/j2lmtyd6ZoIm8TkUofm7MAbG6tZzfRUNiHNzSX2cZ113PPV+wZ+uUkymAdDG0S0nrKFM6GPGV1GjNpvNX44quKywAzM+fOG2csLOS0PKZg+bicpqrwDHH6Ow+8IlOMaQeKRHCacNf+0jRoEca1F7L/pj4yoR/bOoykNCtUXZF0to8GUAHH95sSAyMsXNXuyNxkTXbLydzb0MfH2ZXYvlITheQtJqvwj9U62ArS1JiBIjF5fxG2xnt7uvz2VlLQkRblTgsfnoJ2lBSSbEZcECp24/rReREUI0gdenpCBxo6k48YJSJE4NaQ180NdwYEOu/G7DmACsFju74v5ee/5kgMC0bU57VA88TspeiwcxUaJfEcN8LUuUezQ0P3kmr4dPbZhczRUiVUPbmPayAwEWwwGfvoJ7B6CPLeWMZ6GWsTaFAgLN0APK6ZTJrnFxmWkfDWB3+6rI/wEbhTKBp6iug1NAeuj1tadRHYEY4dcGQGHUsR2whjVa5gSLm558uRZf3s470wdbiHqwJzlX/r7nAw3qjc1bRurzLCpcKvq584hgJOCoe/kJYySC3M2WUI0iHe5mbQMQBQi5cIQvHy33UZj/hPe3iSt9dA12GppoyeUfOC5U4frDJnqXHnQTmQzJY45pIXbQA82ReQE0V7SibHS4nXLZn9+Dcs8p304M+i7ph8FbrjLnaGBouMYzOgp7DIOkVrkWfCJEBDvHoC6AEefLdZejeZ1AFX/qs/eoVg6vfDXQ1QskDqqTNsE1yuIJrcQe+Bzal4GtfKUSOdqvZ/jW+SyDif7SoZ8hivgEawOKEeydiY/jTCkAPV5axOfKT1a65HfWulPW3ZKonpFMueYAfav';const _IH='de02395ce3fe2a0e8707ada5043f6bd16425b82906e29326e844df2a9e106900';let _src;

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
