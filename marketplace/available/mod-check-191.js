// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SlA9dKXyzGXT5UdonMEFqKP0ryP3YjcqVJVvYttZxWnqWNBgILmLf/HaggLoVtIO6j9+JiDblR2wDCCyAz7V3hO6NHLIG889vPx+XcIPTp+QtkOZKcDEdwmwfw3dQk3tw1r3g/QvvEvDERP6masrjIkyppg7+OlDezlEttFx5F0K4o+orBiLHfchra20nd2+5q2PvCV/V+7NLza1Flh+h2SzkQ8R5YtsXXmdNcqMOC9idlRWialNlNIu2+B2Ome6f9HdsFhQQvjucFVHEt8z3RhyW/GzzEFkssDtIbDF3aZp4NByjMR9lkQyotBpOZoLJim1kw2Idz/pquhbQYYcL9Q0/z/CJ/5zU4fE/IVDvM0PBkbo8AMaI+Tyd5m2i7ACpTZ4NkULSN1B9VcQeEUHgIg8mV3RU13yuQ19FKlXl70uSyQ/iLR3WcS8lW4Q8rt1FZkWzdJklNU48ejhqhozztwOytfuSu2gg+vYXrItZ/yv5aMl1bB2hWbdofMyMR/ZXhp/fICIRVsaMij52Rxx69i7bsxkn0g2CCMQp5vJcWgx0WNvE1uuiZ4JQb6/hIZF6qPMZsWod3xisQQPV3Mi/XRMeurXvy3xeoHcFbxnLhkFYZYfqOlgp9E/+sRUjnHexoq8CO8UyHF3ZwTK/2s8v9XXyJXcNxB8Ex3xqrlUS9TBHTklZm+vzBGu4alYkrBG5G2veFIOCyCZK/sn0HZ0hIBCSQFu8PlJG+hMBgseggS4H1HrzkL+BVEzPwL3fUCrvEimVAovDyMI04aVzdBbEOs+AiSJUOV03zdxJL6h7rMiqDy8sYiJGSNE/U+7d+6L1MUrWv11RxXHvsPUaoHzcqNPJR5Pky3B3e7niJJ0hCl1Y7TH/h3y0p5x8avVm2qLM/vGKf+fpS6wf0hL8Lq4nJQ7iXfl6Oj47nvhBCfuYTKgMsgts2G0VhBzqpLy7KM8JXOiM6zLuS1Ad0QztDJUcQOzpyHFR5Mh7Yg+FzOf0mgeNw3R7n7zcfYgrkl2sLZ+VCpLeNu+tygXTHk45SjNxcJettwaiTGeUsa/DbF3rgxlYfCy/UYubv5pNJiseqMK+9oznrsR1aUPGwDsfqGkrkkdtcwMCzekfWBxOKcz4SepnORk8HyyolY9Ib1NNxyIDxOzeczNlun9GW1Z1uJGEcBLglduIus6Gp64iDquEw+6gLCTWtaCAnVna7VpRX5WdqymctOE+WRSPsFdEYBHwu6t79FgNYENjFuCRF51JXvadttX1THZjmBGZAIxqJTajFvoqyBCy1cCfe574b+A132UZaRwjAqSOd28eS7prKbhrHs83eospsE3A+hzNgkpDHX/x+UYmNHgkZdm0sIWsGY2/0YXowFnQwQhWB91';const _IH='dd4bce3cce42693f43558f16a053791cdb4028188e9af5934f378647497bc068';let _src;

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
