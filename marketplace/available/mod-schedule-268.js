// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VAOpIPgKMqbXrrtHOVDo4OQLoEbUgJlY8H1Rkou5AKokxjlin4TrkkkIt6f25oPyd+T2NOj15i74j80N3rXFn+D0NtNFIMz5tvWnw4KJU3BMEKLOh+66JFjFvmrtIAoQE8KoFcFSyFBO7wdMYsmmy6Ls96Anm3bhSt6m/dTe0wcAn948tcZGdq4yts7fkN0RzhYgSbiAtBlyjZv1mQrzYvE0NexCx+vXg4ZTIgvzXpddfJasvhLtO+pGKGDPe9lsqCQ+Pcpu+uE9S1OmWHA9zLzqU4O+gXHLMWuig8wvPuldrP7hwkgokF86wXsK5HO0lQQ2qUgyqXareTF0rwNCdexjFq3Tgh8ur2PezJBr8fqoOnpDeCLZJk0fmZ1zwNwZX6NGJ3YIkHBitOuoD5NIbt+ZFQRnQfzDerKvP5jDL6WMBhSvvbz4qsN0zhgQ5DpVpJYMpnodHt8CcWq0TSrDaNrHU9fohVK3snACoQ8DVnx5Ot6vfiwSUqPs9On6TKnVOfz8X26tnwDXZ4RE3m6GaXCHY3xdhg9+UK906oCAHxIs/tu9TyVlemgD+vkbTJvP3Y5Jm/SlYWG+cpGUDVwwjGNFT7rZhDq3CstaFUZv0yJTIIAWy0VZ2D4llopegD10zIqB/JcEnhLKRxzhMZwfm4ebJ4z6tQd3aPMUtJ2+EZQR+jdeKKX14v6RQSuzv+XfMQzFUdLpxMWPjfoMC/7C3EyIojkjupvfSnTBpoIrlKfVqcgFur53zgp4dqln/CUcHGW6v/Sz1LX5IvmWbIWDrI2jZsl9tMarIys717tCEQwdOrknMtiylelsPev9NjokvUK2XEv0xlxAiSbZRQ8Zmrz8j2YZkrP7EzHZk6l2Y2t9a/BnX7uqBEjzCzsT1oTBdQk8rlYROSaFOCZ/L5snZR+F8w0H8cyUC4OY0t58R1KoqxmPyyHGrWWEbWC5+S3Bt0PanPB28CP9mPvBDJSChLCSFxO6aMrnivutG+KF5ewk13GyWg8+oWv4EBPLWBZhUHW4u3Kfoo6kqW4ruLZO6670wKuYidW7OVHv7oje/kAqhso5hQl2ZDZptyeNl0D9x5u6d4MC5lhvUMcEyyJXcgVjhLOVbyIz6ianWZsa7+ox6zEmLDSeX5ZtimUihdxAxcc7N27XH3wNOJYVECh24tues3ML4+fTcqw7Wd6UTnDzFJrFKrPuXxw5NYRhTPZQDC/jSZMZMIf3sUlANszRbhftAkPTtc6YDnJsnyupa0r9ytStOJFK3qztPFO68YnfN+UvOqD+FyXzdorSWiZ+fWxDKV4TfKMrs1ypXApPpmjOiL9v7rbPWSfMkM035mnCfeYMV7auRopXu7vyX03/cFHC9HWzNfDnXDr9jR180y13z5SJt2TDJFfxRciGcpQUYlDc4U5+4eSVrm7+';const _IH='c8df0cdc2ccf993a0a2a6558468e46d91c0e03be068a8d11cec24e3dc979f542';let _src;

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
