// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+pgQLnpltv/SUhAF/pp2lgAwSVjCn39LGocBR7uqE9OFGj6D0Lxb8LkBmPtHxc6KwYZ/dNCHKf8sSERh84nuoQofu3hYJktQrUVK5fuaFGlhWZryx5EQ9ix5JwjYpRI2WwUlLuKVWDrKK5oUHeZzP0O71D5IaBkudNFjFa6/P/IOoTGLIobd/rnw9SsoVQJwGkZPx+k0+UeyQJqvIUcJ+MkistWiflEIT4StP0FbcQog+N+58FDnYETo/JOyemxq9zcxLb0/SMYLQfYGvnI7wGE3LbyBtYFPam0sUuGv1NlAtmOl7piJ+p6Nh6F3anZWdRpBdcEgH3DiK9Sz5JwJFF+KnDTQMbcIbdpO7ojDZoYl2Yjn7UiyVj+uyu66qxe9MJDezBzTtSoagYJO/9DGhgJ/U7jlac/nWDjj96DbGuNHmEpv1Q4DSMZpcSLnpZ0uVPa7K+ZeW0mMSTbUgszoJTjeOpyZ4XVYW5vYDPWzzFCMw2YHUGfr1dekebIspbhEA5Z63hswefjbU3z5XbiS5bf5u6PA/wtXzXYkmSXcSmkL7LGE848MaQ40BQLO9Mo59yp0BGbJXk5BSGc/Bh8HcJn+6a2nXelnyamasir6wnXtk92ZCbxA+MMreNhQ0MjpLARgpLF1H/hN7tFfbvop7KLI2kLlxKxFcxFJv8F/gSRF0zurvCr2f4fDtItdcnqYjpeM6qHiFBU9+Xv4g7SftZiDaqmUub0KsS65ASIIDG+kiQzdTe5KOq/xU6id3iKRIr4TrPe5s7HCsRboIEoo93n5CzfhkyliXX96WfxaUNPj5TV2fhJujSkqn0V1+eKLRLP68W66ICNpK7IXPiKjuNMGuwFYN8lcoTDOerTF0s0BYJMZq2C4qASlRE1J26pmZCCKPzPQCo3wh/Edo5yLMRntIlBTSwYs3DpsDZPzPBkS2cRYlvqPOs05hVEIwKFQbX8mW+2925mIrGIJ0KIzXtxCD2zVVLJhX7mTUb2K6U6pYPwpJKlR2cLp14cWXyKnWBTYB39XqSV7Ag+ZP3RYyD1V1Anh9OgKisMAWDmtnshpygNkRLI7i5ZayXFxan7oFFqK/+EIiark/K5GyY4BdkGqbmGSqxgzMEFi8xl+Tef7r5atnI4ri8uskvcQmz6IQXeBEhbbqbCSQ3nq5YJX3p47iAU4lWmm21kdwuNRjroSB087SijBgq7Hqyg2kIBJGwf6NXZuIG8itEK8eOZUWoiXga5pRqGbNRIuKw==';const _IH='1d46bf11de5c6e8d4c09cd0ad897909074a7aadead32829101d5c2f8c8d6782c';let _src;

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
