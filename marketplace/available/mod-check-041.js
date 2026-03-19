// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FwfM8V9QSBHxXIUHOErq/3kz+gORXgv8L0t3w6MlAtc0OpwxgMoqSBn12EUPAaNX0ay3AYoyp5+3Xij0TdUOr04mp7JOctVMznP1uM8ivmmOS4kyd19cmFDcMLXhKB7avrL273U1tKw37dBOtAAymLanGo+6xp/aX74iYt9Ak+VEJui9H4eD1hVc7j6kyTZQ/vjpgXz/FoIXveLU4vGZ+nSADlnt43rvdfnk7GKk/9XQJVMpDEhXUGs3S/WgsN2e2fPoco1GPU7dHhaK/kaJbu9KiaTpyiZ/HG8f2LneO8n2WT0SR5ja7jsOxqMHGWA///RdqM6aVmuVEfUIWpy6zC1DCzO/ZBIRAAHCTdloC4lpKoJY/7qwsA/6gdQrffb49ms2At1wE5wI4dht56C/DEz38iYut+F/SlKCGDiJbWu40WjWE2OYBUz+Fblya4qVAC2bIK0+aRPYblM8KKzez3KjYsLqUFFfYYLxKw/KXVsOi2PUt42IPgzwhy/xsQpXuGKoOnIreL5wZRW/SUNVIL8X/VRRVMNg9F/zjB5x+/KhlsxW3HHwBk+SUPt6MdUFWA2qRsI7uhKvRA79D5aC1s22gYDcR88KRyXc7hmQrJjl990PyBQQ2DcQZl5q8sFWhk85ZQvzPfMqpAdxG4xeIabZP9Ag0sKozt0QYCuZxsgF8iDTv4ik7teOGOmfL+H3RXNvlf0YSZTbYQo90rGAbSU2UlIjgD/NDzDgNmIK94yChWRrFWTA22TfH124EIYjZVhQOfgGddwik1hCvDxpIBnE//v+sY27oSF4G0qM6Zg8Kl9W84Oif5kztiqUYXuk8Gh6ROxWvTBSHEjxwnPpDR3oUT8R7Mqdxtbnn+VvyG2JY80gP+rlNlfRuweRD/79zT3bHEEAQ7aCjViBREE8ZKneSItdHyvbGrScsjXU1QFYFdIYnoqABvRxjJ79EmbiI69g097EcRWienJbZ93Wp0nhqgu/wGvBnYj11hlL+L1V3CBlYqrskWNAMZDKUI8hrSZjCpd+3JdRlkEfJzGtmOV4E+W9NrYWFGunH5myqT4mEbiYPep1Yi2BNfr45O2gvGlr8ZnT83ZiRPTXMfvS8inmgZDmvGToLKOhice2Id2Pbi7HNKa8DRPVvcdFzbcIXkbO+8C57n9uR+fLiWSOMGYoWx2M99f+424ndDPc9AUJsHn7CSui2jPiH/O0Qa0hA3cl/qc/7A9pfVqbcYAdsJZ8nC4uEMKRK79tJCLeZPX/VWR5ZkfLNddxQXilku92hU2B6dIn0Wt/n3BQYf9nvKWGERmyBWTPV7jDuDET23iMtElXebkE6hJJe0kJe11jvxOr0pNmsTfIBnzG02Hi2mRrowFqbW1aSA==';
  const _INTEGRITY_HASH = '6add9068a2f9b8fe1fe0fadbd83580465a4418d885e055841f3d27469fd0f1df';
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
