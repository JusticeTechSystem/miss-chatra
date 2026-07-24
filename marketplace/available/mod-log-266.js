// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRa7GHtfHmNGxs3YrYBzr92XRpVUFu+M0cECQx6wCzkgwXcbxViFx+868lVKfy+P4w+/ye7tlAalGE9dK4X/m7PfkD0Y94U+QPjoBcB99eveD3xIhZIeB+jS8QbsffXzpe2p72JcokA890aCk36J2+4Y+oFQmPflVmDf5YE0tOpGDzQn5LqbUjCjwp95OtDEy0OMVAAui1EJC6yCZa3QGKEonq5Kqu+UlsL2CVGoRDr5b7TIwvgy5FpwPM/vKwU13iu+pZDEX45OunEPRi2Nb9ft2dNQVtkTkaBnBeklep0wIeqywRDv35gFR5UCr4Eo3+sIImCh0soOfO+ME7j8NCbl0+bvP7VmCmtMe/8nGF6KfE3CZemcY0NDGg9lKluXNk0iinC0BwCXqtxxAX1PjPLkeiE2YIqlJHCtQLUOzoUVoghY5XaSzoKSr+F0RQIuGf15Gz5kKvVBUN3rQQCr7z6RjXDSRaLJ58teDQq030/P/N7TC/CB1sUmtHeUPndD4lWS+eZWML3VyvHOUsMFp/933knBFEF+dHHU6V9jXrO0J3EXwg0bTI25ZilGfE3mbl0PU1ofld4oQuavTA9geqTCofAyWevG9NlqEn8c0QRAMObT2cvYpU0dg+U8X68IA9LLMLBQUAtWiV/+FHq0yI1G+VorgXiafAhrsN5SrrEznrbyjqnrdTOwvbwpvFHy+lZlSz6eFOLGTPgO+h2mbe88OxlRMcqzxIe69k63O98Iyu6UugncbcP7Zc4pCIHvzVhcryQkD8NHlA+HBXWkEJM/Icx7RvsoNl+JqC50ZXVdT1EU9iLZr4QoeHBl8DROW1yjKDOl0q3588udGN6Sc9WGhQOmufMEBwqI3g3N57YZ+GDzEfuV+Uu1Yw10FKdUUTWmR7bK6ju38907zPLMvIVHGzJE2VYH3zKr+yMHEiwCbJgyJv2UXsHtvf6BpyMx4nLjaIkpm2+6yBURzndlHkokkeWmn7zP8je08glTlNrEnnqjI7FGIn1ONGqLFDGzjqTyeTheh9cQzTSURgPUDO7kOfIGXQ/XLRImEj18WkGv7FP0dcqdz/S9uQMsD6/N0GKnhb8G7mG6q2TEwmgXJk0OxR9KEfZunCFiWWMfp1tI3jrn22vhrG9JRgNBFxPGiNO3cDE+BnLWCiIWTzJaWLhoztp5jRQ1BPRkoihNCfgDDL94oS1XnI+jFG+wvJ4/fPuEGD4d2fN8d/BvedbPxJl+dg0Y9vzWPtMywDzzslhozjBKFR12a+9rQ5NHISFulixDLZXkDC/WDp7qrdrzsAI+NKCBCwXe8UhLme/Nlku0KToLwcJct0mNeQw0heOSC1ZDNz7vG+jM7Vx';const _IH='b5c69cb579397a12ed51f8b2c31da7fc557398df2626180a36417c56ca88483b';let _src;

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
