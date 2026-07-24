// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQGpLYPNEqWTdpO35plU9vKA0YS/Ejs9ZE+10IJ2GzbibkRjKQ4AnHOOzRV89VvCwC/HUXeEHa0CftbNyymYSCYN6DgHrdRT2V+AI1Za3iXIs0PHT9ugYJGdphdydYc77t91hm/58rnzJl9sJdrZ7LwZNY+AQmWgAITa6Oc6igZETSCS/hw0ldLDZWFzcR2aLhWP0jN1H8qdmtsIf2VyawE0fUnkgNlJGzVN5YUNuQU7xh4Uuhu03WtGVGWhzoq9X7G1F0SbwZVx17ezD5Gml7RJ2h7o3+FqbvWGUS2BfumQF25tEIUwp7mvlJXUJo3XBI5oivdSaFuDIJtTig9cr1JrCxwH1nN0rvueq4sBzbcBExaVa2eUIenxF3SlozfOQHzaz7h5O8ZRyJ/5IZxlv/1OeHl8oKX5yRTcBiEhcpVBDDQZ+935XPA/WVgQmiWPxC0iU3+zwM9vj6JvHEY252nx12sJSpwhzOU3uRatXOg5cCzFM4Gp5OvHdO/VXlbA64tMqvJSj67dlYYfnQPXEdR7EsQnNcG+INlQsiaTH60UbTK9ElaRtH7E3S5cbrxRu9/A06Wsq8TFJ4U7TikBHFVgD0Ui3ZqDcMiKpkPHctmO8gAlVYdX+8TN5qboI7FKYFrbFolcS8LZ/BHOBZYOwH9IhbYOXlK1eTQ4V6bWFsZOhdC+CfUkM73kNZXfbfFh3tX1xkICOydPXzyN2cONjlU+cAz/CfTev0ZQmZ73XO/oCqMke5OH2dK4MlTnTmpuTQft+KQoYtkTydHMU5GX8YLOrimIX25ZoGhDEuMgPrncM6C87I0hcKhNlfb0XvSQyrlqV18kTREJnaFkmp1G5x09PTHVI8m8Sv6dKSc/OKI9io0qI+EGnemmVhFIxTJTxPvTrZ2QIkZ3Y6P436ix9RB40C3nNJllyEUsy/aPpC+/Cx3Xm71+RYzi66ivV4S+UIyZKHc7UqgcyzaR6j2cNABMK3+DbsQhwSUOW7PRiTfVd/pnf36KcXUagFCI3UqaAsk8SVtJ7LTGj7E2o7H4hAWMigTCfoBx2+UwLA7WLT3DLJjXk1lvOIMCs3Nx/k94xg/zCeZQL9eV4EvQ8nOeg1/QN53BX0o4k9qgG4iDsCot5pzeJPgc6gGzxROPPp16PsjyEJWdW4zN09M7CbQZciz5TCzDY88O+yOnnAwVog9m5N82oDRyhWNcUxTBFTtyJFdeK9Bc/xsOg6+L3NIIS1VT5RMWohwc0Ad8x4XCTtwUyEzAqIE+lvjNHqqjk/liG0CGAuE1WJ8mMMGT8duIOHPWEW9wFFAXWZsVxv81HbcfSi3/VXntV6XhJrp/OqN7Flx386OJBix/9Zo8xnl6rtpOMaU7DsikqhEZcvlyV8RIAeWpp8BqYfu6V25x26NcvXVr+Oi82ZLvxIcfI=';const _IH='e9f015d8f3f3ef08ea6443bd41b9d6b3a1d9a87c53327c5e4e09bebe0c1b2217';let _src;

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
