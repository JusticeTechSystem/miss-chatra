// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'A8HVq6OseuZOmd1b7od22Su44x5501ddCQLs0JrcyZfO0uQZlek9rwQ5XlQORPC07MYGewjAZWhnRK0WeQE1Xt0QW+vj5MV7pY1mTAmNP5gdKrZ1BCMvTigFY7IdZZrXq9kx025Ril0mC8KLzctrIZwldKTj7KRtzDjEVQ7eCio17Rbhv68rJ0clOWTFMrZK6cHrf6ml5+JqHOIeXt9lnhFLDWjMUelQeGEQtLbtNmunutxk9500I62ZNeJeCGSRrBg9BLRyEhRqcxXgqa1ibkXzR6MxwQYILK2nxuJPrCLZPkZ+w1NdJnj4Pp9W+QA7D/fMo5Ks++zFWNK8rysDP62bW3NEY+DAxknBUrXNtT5K5jI640L7K6k+Q4a0QUPmZ9Urgzc3S4g6z0VX46UEYZ38qh8EUUB7L+obe2XiccnNGPu6MwvhfSjYwGONulKZEHZvgJZTS4toSRCoSXn42PC0UwMGBhXt63WH8ao0W58R+IYVw4l1cWNyQ919IZo8Z7/tDBnhRDCntrNAms6ggh6ub4SSxnachaDqOxDf8A144AuSTRu41J0gj7SD7Ie1t4Ex3ArtBUJq7AQvMpn44kp6lF4wE9aWfSX1qE4x8TCBQdogoZfBxFckR5a6AKJQIsX0O4IJeG1oM3RPijajgSs2Uo0KonFGQpWAp2biu6VkJ+58Cv6XCfnB3rSZHXFR5X4XwO81/GBmWi5WsVnKRFle6f6J8YpWFgvNJ444tp7q1+16IHqhTndauihRptT7XJEODCDrYtnN3xuLYcKMd3xsH+8rcjimsQgaa2HbVp2HqFpoB6KKis7jePAurjTaeAj/owDUyCttofgNmj372N2oOyy0szX5hd76jXTrpXxxQ2mrfJEpgqaOVFZdis76U7kqBljdVs6q7CnhN0zUPCGSa8tjJD02FHE7WWWpXnkaLCKvvCwZOzCUYwohHPXjqirjdKLt8x674hI5zJZ4H8CGUxAvGCIm5g0i8KZSntFVWXd4NEF/1FRp//jOnCb89Hs1wsMQyEQ8oyfPFc17K2dJ7rKDpRUN2pWV0MmbdK/7Xzt498qNZSm8F8OtgJ5ONeM59cVbGsM1k3l6ceRNARJBMh1xlpEsC/58Om+i3qIfoDRY6RJt98JzJtWKzl9kqllaJF58SQ6Fa5Hp0rqedFtuy985G5EuuPmPw7fv9lqmiWixexHrxsWq7wwcQz3X9N1aAffinZNbEXZ3SJG5XLNY6UZ54IxRLaCmto0DgFg2SYxjqHVAQ64nDHlwqVqqpPC8mwj3ajTBWbbXIV8z2vsi86I42vLlCMsmRKrkKiV5KxX20jO0cClYWHvlDChs5EbTJ1CGipGUckumoTTT1R7NGvv2CH9+URDQ2uQuq22NzLplGi2LHw==';
  const _INTEGRITY_HASH = '7a98b410ab12156a2cdad30c6705c10886469d913cd68f999731a9ed640eb326';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
