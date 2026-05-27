// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7gd3dwVt8jyJXlq5jVizSlBtCG7kmCC5m9pbnIKm+HENelmrHKq9yMV8Ji6Dsmm4feVsBSCSnrfJ4cPQ5VeK+0AciCg+Jt/tl7M/ZVdREiLryAx8JWKWvY78hCkP1Hv5RGq+kvWIZTxAqFm+q1rwwPeokXCl2w8c5JjLFyJZr6UN7nHAhQs93ihzVcNXn3l2vqihKBeEsWU/94ZH40CdpZhGWHsPx/oWQWpsxp3Puf/8kAuhqokJAeAeU7FL1akwQs+YEHT9RuF5rbGuIsmJJLEjQvaUUJ5KyQhwNkyct7TpSqWv05/tIIW4oBW80rQtasTjTAJ3zd1bXZR5mfMdUz6lhciiq/k3dojTxClMRQD4wYNVy+xjWXFaZeYgZszBIWq3b7srbiBrbEV4jL7/nIOb1dk3/5/ITWBLDqIPMPsoKX5fAY/uix+Bv+AN/wBu8yYdh9Tazx9O4S2JSXV7xEWMF01/U0VZOMAqrWgLTqblMTRdpFPJUhiBtx/91JlbhJXqk/DBMS3aBKSCm5S2CEeQ9IxoxpWA6CGr5QnUobNlZlqbSB3h3oxYCPPQRM9Qbw3K9oXIw1nXbLr31PMkRukkdPVr2LsueHwol4htikgjPjrLHNF4EzGiyQPMqxIXztK2YqqY2iFUrxJGn4Fee/lDFYIexmY2jtGidNnOVHhuwp3gL/RGJ7l1Zrr0ssoF09LiON/fbWNI4Ryd9/FdMFk24yaQN0G9g5KMKTH4CIwl8baZ4aoZYOj4EALeFEf4ExBpZ39kIZ8RApCgfGa7nCXxRzVyadlhC8pRI/XpzHPFDeXPnFPnSEfk51ts3mWeOSvUH5KUjLshDunapbL4oDQaQPyNrX1XEdU4027FHVWBGdPn3vVTcnvVpRRgq5iEnMnQvfnG8WQpHI0P8nFJcnDEHah7X0Um0TsyYgS7Va0slqUWFEdyqlaiu7inG4DBJ2uapqdBJyLYc6Qk/vKOS3TDov7vKuzuzTfGo5HFXjKHbpduahBjV2koZcuh';const _IH='a373e96ec9da240ff6a65103dcf4dd35de1519af2703c2496a62621f7f5fe73d';let _src;

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
