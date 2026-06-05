// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L6pAeyCTCA1VEoG8WD44V0+QsGzoF34vIDz9go9nlZwMVHAXdbwb4PVHW04EWFULumvf2DO3s7UTuLCWNlvMKiVmJHt5rz0HXyvHbue4/WT7iqNitInvLKLk4wzK/qUBaMxPVQR6jAwqgoB8FAXotBWVj98PEDMBTEGMPeYnSRAEwHWhe6WxnMMecX9Vdmt4Dv8VX+73pFdWFFj3bMZ6NlpQ9LZpDzuiooCFP0UDfLljuKjpAbX3eYPasWjKlqgSLAyBXxHoL2Mfuy9NhKV+yw0qtxYqEW5pyUxGkc7iZD4N8QqZhVZZ7HwIVOs+rB172hdxARJT7GbOxThXdUzOdLqnOzdg+3egAmzxbLX3OIXBwgIlgrKsbTxQvc8ECZNiQwXnLHOqkkxpN2cCqQzKj13Uwc4y3UD85el8JxqiWjgLVJeNa5gml2DJjv9eWRwSy948wzEJvUiGVJWrq/18lWhrjbGOc2Wma4Aqzr0YefO7iwMMgEsSZos3t9wHBWw/VwUgHEvZo5Eo6PcsLVZVHmPzu0Dm6BjYPh3M7JqRThnWY2juaQRBBj+SE5W4NeJQdHjYzq/w7QYqIE7wjT3tRGqvHxRog2T722FIBYnm7Hczdn5b3jLi377YrtutLEL2RCZB5U94z1XAN/9oTT5Eu9EppNBII1OtgN20WqKfBxIFpiDiu3+5MTUzgRdQx8GnlLdUfs88/V0YQ3IKCjBPHRGr3Wt3Yy5Fbpz5Efdudywd8wLGuP1djgD6s4rXISKP7kpG2KDiK258YIDxyjp1jEo54MrmdeXkcoBK9I3mQLk/TtIE0os3puxHFxTCZNt99m7uIhEgrFCDiSRqp4l+So5oNBf6NfzGFYhgNJWSgCyapYuBUwtOtI7vory8g/xlFbYjxKpyTKvLhcntOLO4GgnId/0bBppkripKc/VelCEBaISn+jWgi9R0o6wgqbbep7+jyXi8EdEi9K2guuxS6+l9rM2ftii0+jxayjYUv+VLL987hVFDKuS1d7OKs/p5DUetG5HxTjt2uTGjD5/krUKQlI5K4wIRZocd8/V1dv2unv7RDaASz15e4ydVw4Tw0B4jy54XBZkeRsEkeoZOfxq3xdnMkRyaPqTENu+v3Hs1RjHxYD35d3e87+kXeJxFWI+OhOlxsT9xeAh4ivdX6by0YTZR6kv6CsCnyd5wIiHTtp7R0NLLMQ5HjUBRrUK+VWsQt3uXIsY9jgbDIv4w5el4e/Oz8SqJzlk/mK0uyk7M9TA8Th3amVV5H2zfbkmZQafffpRvJlrcxztTTTUZqK1ZesTGsslpDMkM3fq+mh/I4NVqInwp5n1iiS51/qTeKVz+JjdRdBCsPiZF40lzN9zMUj2DF9rcjoSrX54aMiFj26jY3+3DFKrBGLr1vq//2rwWegeUvA==';const _IH='819cb530cb6d50e5e8b65bb8e0d2da6b201cf33076e36f87bebbc8e0c787c582';let _src;

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
