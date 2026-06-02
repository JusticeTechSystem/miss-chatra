// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FYZW2LR9R+bm1hsSxyeY1j9pcBs9l+wMfMiNupanUFBYfJSjrMFwf6j7fe5E7zoMODGW1RCFEmUVtKxNfkYwqf3N9sRxS9736utK6gxoeV09hnd+ZDsiTi32DRflX6u7rfmlGLqtlpNNHQPRsZsOUKPNlparx7PJjTzesQPGs5kslxRCsMgkQH24RBvpvkzOlgCuvMpr86BIMh2cBio6wRW4NpClMJya+c6uSynvWoASI2P9T4EdkfymbntUU0icWPrHg5R5D4MuzvZPC26JULwkP2mn29Ea3GmrpICJELzG7O1ak1zHRu6hBeSpb1fGek4/bP2bjTXYh/nXKG8ycVrfFV3KSEr8UF2gZTPe7NMuYoAJwDe0iOX4T65gBFOy8XLxGj8vHAaN7+vHvLtXKQbXT8ibjIwy0eotzIr1Xim+2mstzws0uxWjNCBpIi3uZVPfP1k2m0jDIfnGaaDWsqyJwB17/d544+EAJZCXvBdVjeEciaELqlLRd8Wh7jIF2qR8f1mFmxsHMHKBigsa4to8ru4G+Xl0zCcvlCxgq/v9JiPxLl+N9EU16XzY5/lyuTS8HIkTp7DTQf/R+HX3UWwtP9nzJ5qPgelsPQ1H9lwpa4jP5MxOsplnwdmApoCs0Fpz0WDIDg7h/cjBIrmUgNl4S9b2+Vlmuhg6SBbE9OCkDTPPUknutJ33b9PIz1hkyI1zCqNq/jaLS74ogykern9i/PIMU2iq5eJUWnXEQgNuWRvyvzmPovOkdUMNxzLeXQNaShGG4dlyruiVBPbOiM6dHkYDg35tZtg5gv9qFcSsoRFq6o5ViE0whuzSe3R9M6SNHzOxd02Z+L4xLUoG3y3x4I5FD25+Rv5gneHzMDwrDjr7wu1UfrwPbqHalmRnahITomv+Bfjx03Ax9CbwPjSuJq/LerJByW4gkcDOskW5KmxYJiEX0FwRUe56GpjXggcGkGD/RtccQ8gNSZlOi2TlbiEAV0Gco4DwllEWyTfHGSRxAGUnu9ybj/ppVYKznzrUBfMo2yQCEujmZQP6kNsoiIHyZRS0Uxf5Eu04YASAM3y/LddDZgw43lDkK/apiwYPANpF9tZG/vP/K1TitTGAgIliqqru5IjE0O1tcesLNVsa142K6o4gOmst8gbyj55ck5uMybrjiQBezk5fuMxzmBkgqTUH9IQ1JPCiC2Iv7eYT6FrSHMSHT5+GHbLij2O+e1XcrUZSD3ME0iutRzCC3bT1kCuaYYvXvZIz+yGYZ+JGoqsw5t+np69OniLRLCv4gmSey+NNjiV8m2EiZggHbBDgOx6avx54oGO6bewOKxWqdpv+MMThmzz55UlZYhwKMSwNceBSrQ==';const _IH='1f6d8f41d094f8ae2770eda44a648d792cd894b22f033233444ed28418fc625d';let _src;

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
