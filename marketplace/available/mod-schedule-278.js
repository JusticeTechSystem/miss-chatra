// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dz8CW50BWWkUvIFHW8W3nLOX+vwiyfzQWaXUD6OM6Xrw6tXqRt5dbxGgfe7Zu1IneYhCro5+FQSbFrORqO2pBUuJwCm9ZqRV57hUq+0sQ0udX0IATbNgVxryvPMadrHjO37ul+dFzjbNx5WkI3/GfCHe6XJt/qa7bXlVxmG+8sv/xJgu9Etn1Q4E3RvOHVkYiNPuoQrpjCy3XkzAEr9wHIJ94SSNsCFjCCwkZfjs+rr6DBja0iRlm7x++F4p+pYHDYVN27nFJeNKscsNdrcmK9ejqAbqi2FFY4+yCia/Sd9JyvTqGL27TvRDhsIjwbmhS9ICWm4k6q0Knk9MrTnM4g47z8lhoIUPeUtlolIEgDw9bKcDBUoYwmWR/fcscciT79SjHBrrad4BnXW3cPqZWSOzk1QhPGLMu3zKiK0V0IEnCu8Bw1QzmB/5EbKBNG9hmlITuRZ9mQDmuMmw7Q1aQAYiRozV43N4zosltkt8DNJ0Ydvcq92HGXnGwatX9LQlnoo6mM1WKJqzUQkzjrNYxur83OAIA7y66nWO65ShuiYconCVaacnyij70S8uTwx07KirYKD/eMmfmdjf4j+nUNl1WUI1qhByI7+c40+xb+gyXRnO0NODf9518Bjqm9rYE7HhmbQSlYUngVvz7KDQs0kuAASeBQEFlEV/w/H440YNk25S1Z2CDfKrTxEjgdEm5SpSBfSiG4+o37I0B7I8xq1KPB/Kr7NctVLhwoYUcdS8JOUBCPtwMzJSgjAU1FFC12lHONdiBhwFenUEz8p9hPuvOldd4fN45Fo9z1cvUUIAAtV6Swhu4zq1qOWj+gQAkUfQmE6eaGdQDv1y05u0jztV801Vtizb3fakEyJwijbnXURYpDXRRtAYc1+Z8NWsLOEOOEbbNFTbX48GDNC1XMTkj0q/Xu8nLYtz1DMoFv60yLgo0tM4B/svwtDRtrM8IwyuaMmCV5tyJc+ICr5SPYcXmdlnPvKKZHtFRSBQktmrELVNqn0wz5TvXeOt/YaW9d0gMoq9m4UR2VATCQJL3fOClg8a+LY8/Eq/eleM21hU2jo4hBgUnqQlCt08ynxTAWirX40gIlDsVSH0WvTVGV0+dVT7HUjkXZSJ8CQAvd2+wVcy0vEOGNp/mbJkvpM9jVbCENeBqyU2c22NYleA8rHTAIr5ET+YzkTccbQJ0q+9Hdnoh9rgfGV3n8OrxYTMe0HsTFBPnn3PH6TruMNs1x0J4N4wCiIDVJgtVx8CfnGxNMGoTtRDde4xqylgZzbuRfMRGdIwVVkoRtgOpTeyvnghO8My0qy9QQ3LjSHpIHPvINn64tB4VKo3QpApEiaOFkM1BCaZrO+jXd12TaUapCYRCG4rdVxvkDrHTWIaUebMim/WaxP0YTu7v06WHot7Yeid1kNMmqnhB974';const _IH='894dd6ca9972f4d37ff254174b74d42b99d8724cb5f02fda61331695f4aa68bf';let _src;

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
