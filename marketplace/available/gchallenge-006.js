// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qu50FvVtxife2hsA43RzPN+cwnShNNwkViH/rx+Cq1O1YtdGaJDH6rE0BpelHHqEkYryxsYFokeITx+vmcO8kMHj6UTK/THmyMe2KYw1+Lu51V/yzKpWpqzItlexaX73+bBFrDoOIfP56QK9nxaMa1WYmlhwcIsxrn++FDgawzG/xrCkqhCEmQN2R+iI30tN6+TlXiJwU0ZTEN7Hi0zv27dD8Ytw84bU7xvgHirvdU1walBiTzkk+h/BV/mXq+F6WabKK8lWh13V/djdzKZ6ZDSPCV13VMmfY1ex4hBbHgyCZkg486YeUB6EyIoafWeXwQ7TLowHiGn7O1iHUaSSB1zwpXpNDgRuJXMqLgjcocBlu4zerHIYMNv3Exn3eGPu3/64rUHfAjQ7iLH/2/lDB7upXF7N10v8VNDIMJiMyHWTzDX1pKR5aBHb72YQ8Lgo8ivVSFarXmGnMrWZAGROjc7LLZkiQ6PJ68jZZy0uY1vt/4XEYPJ4td8Bpm8rTrvrTgt2ElgMFrSn4zHMC71AsrCHQdNXXvMS8aYMGc8CVmWx2iqtyS4KaGh9NZnKPXLiUnSS64R7s2QjOp3laXiRDMY/HhbHVxDcvVWorUD6vqeUXBTmsb4s';const _IH='f9402fdd231346f42c043fa8eb00b2a62d4d6ae66547d514dadaddcbc09898ba';let _src;

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
