// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6jBiHg8v8EQMr3Jzght2GzLNv47LnWSszNz8xDn+cKE1FBaNyqswXS4yyazpxapgfgOcWSdzrfALsH36ftgG6ornIXQjpnz1GaZEQ+NHT4eWNBvaRMLCsI2w1VyE+mKN0rMqHkGlKUKU3PJ7qvCXCgxmiS7VHQcl9fDebF0keP7HKOY5Pu/orsxUTTb9Vlf/QJlaYuD+xh6K4cp6AkQIXbPpskRYRWF//DifROVDv2JQy+5RMYDbj+jqVjitzQW8/cXB/74Ujod3CHwSkRqSSdI8iGHSd8i5bk8YjOUFREWWu5qDR1Sf4f85Z6JsZgMXkRUYkv5XKa+RPU9bnd/vfqWK50l9b2aAZKD+CHu2qPuy7MttlGFK8Vx+8J7jD71AMsQfPqhDVcZeJb2MeJt02qW6nNmh6/PIELm/eT7s/ubAm52kbcqJABfSsgqoldKw2pyVf0Jk9ZDpUyGcbi+fUyAz0HaWbhjjHdfpuhHut+RsStbyyQmbO9I5RGm6XfscCaSjkTZq0WhkTvXG3pTVxtpcTXb0VWU5JCpiHii8D+PNvvpyVXNMm6ni3f7ZmzvNRJH6Li515hYi/vziZ+Ngmg5Vp3RyRAPTG7dfVXL0oWS8JnelQrs4EVHMK/bPlvmOg25Z3Ac/N3zZDQZQluuqqNRO21Z6eKQZN6OFKoQq2XeK+9qf7ZehI/F2legp6JF0XYHTIa51lGaJRfL/QQiy0iS9SLqzpKFBJIun5RWUPMFvaPjKsDvBGa+5bWRWHIg6lO8jvDlcaSOugQpVHgmFbMlFXMywv3NpvkWXFJ6kQd53OZt97xmWLaf+trShKi3TOBsovIFuQRgA0Dj8mVIg86LECIonSdFYBf58dKgeeQAB+sDnJGWAcX5MzTPo1U8y9iqd5T6hRBvNQqBvvbVAuX0gj9n6ByMiK/pGGgOyDGBYEsOFuxIJoUNCxXYtrIN0q9l0P5aT3+XP3VPJ9PdNdFOi6QjzEeL4HRLrhCU1QTNytJQ+kRceyDFdWzvojfs5/zcujaB5qNBZwdIlBntfIo7lNrstViopmgJrhksLmE4LseyVp/a/NcQFGtXhOBB9+nXR2SGpn6hL75MOrYEDd7X/uAYHwelqAAhcxsXnPie1IXU2dZn/ZNHN+kzPINCC1T3gA0gDwFBejVx6l0deat91ElTc877P+sykho1nGwsFLUpCuYwDtvTtQVMK3wypGZYscqUlZC98MLoaxrD64Blggb0YQ3Mp50y+8DD0WgcD869AifT6OwX+NL9LuG05zkAFG0zU55RLoyIVohsf5Vbe5xtKB6KMJOW59z63CM5U/IAwfl3rpCji9HX7WDr05B8BQqp+PKdKvRMCUKK5u198NqCSHRrWCijCyzLUqqb45j8zBgV6J/DILmS3kjuQm+Pg5/AAEqeK1FHv3GlGowOXYowh/CObCbxhtr1NT+jKzTQBUWdQp+nrfReR6LJZkU5Fc7q4N6RxTGtToD3V5zpsyW5yLtpOO+B32F5NaJqD628ylTHMDlBdycFIgN++jI2Vz3YQaHLkYggXJXinaVdC2zfuxPkw8zbXi6f9gaoiqiZ8qbmel5meLlWpND+55HOVBadjHWZTyz57TFkt2z2gD/zSLAfc0iTgHdxgQLqsiX3MjKZWv75toc65ORyO3zkzAMAEcj2yFUaBSGMVB3oXHFLizkVMhQsgAaZXHdBOCh75GU5CeJx3wMfQac2i1mu1Txi49tGiLyIBvPy+g9MUHT7mb9fiBG1gBckRCbfktD2xxiDZoowDx2Inn75LPjNMT2Y=';const _IH='674a4dba63993346b328efd4ad7bd637ec969baa00ebad4b6b854a2691822a50';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
