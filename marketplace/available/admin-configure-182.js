// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1PWAlH/3y64ml8MaVAST6piPBY4nIHJT/ebpP1c1323m72v+7QkApsdi3AW+VurZ68po4wBKarbGrJ6+fJSsO+Lzd3wFoqyaJCINAPKDLhYNtRT9Fqlj8SBmHw0LMANyW6PYnUZ76v3XpGBoD3MqVlDXI1fvG/puESuQVhURktuRsHtrOIrMUUXRoqWNgpUA6P1qvIS465SdPBRJNaaQ6fR76EzFDxU0WbGz5mfDjI4JLSJoTNeDo23N9olVtgOf8iXztkOdi/OfnQhOWU5VvVrHy0Ecw1bjxg6wOBccWkUHWbccxzMGDa4DRK9DZraxzUaVaPHz8893tLjG/E4z3i4kB8BbgN4c76AkuyWxtjgOPWZNGNAMpRXn/BW5YzzWsZdcJL1AM+TwFEaf6MHBbdtobVwHiP8uvYV8vZ1TmHEewG80UqHFs9HpxMqiw2Bu0OfYry9FTiqVPi+yAQ+LTPQq7/jvx2cwAJ3NuQt8+IOOwAco+NsgrkYrC5HoWuyK5sIm27uf+93Ne2zO5QsxH5y+1we3Osd6hlCUpT/xJxNh8hTIiZyk2n31qtDyFR3KNDVdl7r3dnQXoOOu8AHw4q83YfUAsT23rS2mCg81d/QJMtADx3sCyEC5Lx+ZYwpLgOB9eyh1CbQTGuvdnUnbWN6gxTmfdL9MF51mt8FSvtnday+oNM7bHSuQccvFYj0PjSOvvOqOLbz1ZnuyEjVyKkM+So0P/DsNkI0DuffZ7xYrlg1SK3R+D8D9bjLboMNB4VAuKEM5+FtFlnwA0UoodPeGmNwYnY2rKkNUwfZtBGc8lt4dOVuegTho7cIyXksqwqMD7J1yal8PjqcKVxOMlx6oPoeMoB6v84iEMRlmblons2VsU/8FhQSRp9ygaNhnq1dUjGYuBbFT5IC7nKrWAdvB79+rAdfARTfOiqDbxlln4iuDNZASsQ+lgtN2dFaa30WIVMHUaEqLaZG/JWfI5/vHfBnBL1vp1CybiqLVC6AB+UlPJX0NddcAOghjY4yNNj4b0+NwHzzPBc33PI2QdAINFOfwg';const _IH='24e169c251e03d50ad75392a5754719c8eec9ee5313573e39e7a407f8305fc08';let _src;

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
