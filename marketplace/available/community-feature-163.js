// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ibx7WdbpjL9qQoC43krpNPTkiOyHnBpP4idic7RlNRlHXgrqw2hW2S6idqirrJye5nLAhc+XqtyQDv6SdRgyln5Bcv5veVCQqYczP9kF5sHNqK2guddwlYix8E2bKMkPvqXZQi7domNRVUJCUPmz3b9QPdPvzPd78pow3wvrEhussM/Ap9fiVBx4RHgbhRl+KY0IjLjkt0Gv+Nb8yrs/46HZXL8To5VT4F4EJgN4d1+kvnlt5/Dov9+89aHQ3uLxEov95LWzORXFfOqSD3xLNfeGU/j0JzwhQ5wyAFj3yd9g9adkuryPerTk7HDxQmdQz1o59AB9QNKNmVaw1dxZSSzB3iZkHoF9RC+6AJjwEM4gjc/CanDyi7f7vmqUI8WJ2Ma1e8c+IjWWt08HMehwVHwjejQT24ORFU0h2HfhNLkEFJILCervr2VCUrutgtZQi4dviQc/3N/LhzYcATUvJ07QUR4dHwKeqrpVBP2zYpYfWNi5RSub9Fx6W8BK80DHs+Kq5+8+9SRjXF64YlIj+AvM/7ZEJRTcVzYchYks5FiEu2mrq2TARxOesgdzaEazf8/Pyi9Xpc5dtfYru5R6l86VBNPMYOVv3rv97DhaG1wyIqocDCFC0gkgUS3HEyuhNpa6YhYHbDzKGjhGTiM7oyq/OqEtYk8GdGj3Eh2UqMx501PVM1o+GSWMYaO/npCV5/WK2xfe16l2P9uPSEdefpNo13YOt5Am32hfcII=';const _IH='469eafd574764a7501ad6912591a0f31d2b5858ddd79726da40d78f948b1f355';let _src;

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
