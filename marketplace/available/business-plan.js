// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NFDqiZX/PwQ18akW10ZnbX1/B3ub5H8Ec6ieN9mDjvajls0d2UBIzQcALCHC32LuOxzf5oMsWwjMuX/tasN9/wIev1D98fTFU3uGD6MqWOE7WcvZ/jkpR11ikP2B90X+1ZCpXEPvnOCGfb6WaELZW9F3BJ6VlocucakFc8KWLcnzNgyPvF0t0aDa8POqKks1uSnKOvDVb8/dSWXJnyM1e3ga4VefFyF/21mlgHQ7DhDUTQqd0nq1tAtG6rOHOrBKyhoYY5Kejhg0RTvx1YlfYEnDPnuggl2qFP4rYZts4115fRMxeHEGDehPKVfXQSjV5xB4od6WS9/L7W/cozld9B8zTMqMjAxJ/h22o9pmNqzUxphkDXaw5wfbKd9sdS6Ui19S5JvGqfC8FH3Fd0xyJlnJnsWqugBSvKSwjtMzcNAkDRheAdT+tPqK5CnvS3vU+Pgb5bsQ109PMhYIQ2kNfugOxCJEnmu2OcxSy6iFTXrmLRd99QAXeIZluqlI0uS0vHO2pPxS/FYB/PLIk90Fj3mmEhQpLzbaOMuJ4RVxxLmlPA9jk20whMnPnIkMmp+rj6EucQevI9e4nf50e9UHwkw2Jb52ySN/cOKkzURQfXii0h8gPedAej6hS15PblystEv2sVRlcW0gWmTvrneeXfx57tdPVeswqeS+b9vLQtrZ5fhgApScZm7Oa5IcvVc2PRjiy311EJFj7UMa5GaOdibcCNjhooJK4ezh0kTZmothSAre7M0AF1fd3PA80XBO0v3mG5FblogUZM3FxC7Z3JTNeyM3ARE8OeS2d66qtZJInfVqxhNz9PXGHBM1QBeohHtP0PSwoeAUTrn5Nw0fgd8HU2l1jKKI8euEz8fb3rkxUoV2Gd2qxyafEZZTyN6eGAxcbmOgbBaP4yYA58fvArKsaDdBjvRHzITgzW4OZB87iDw6KLWMWB9917xnLY8+MDDfbNvBEkyV74jhQB6LgxnxXeNWcKX/5P8oCNIVpZ6ZeeJovaWxHhSPghu1jipTLgS/YZJuL7S5JjO+OiFUaPDKw9M0OQkR0P08NAnO420epBE9UyES+Sxmc9PCP0NrnOZ7Ir6sdzeQEs+z3071RiskBU3jQ0cKI2UaXDxY3bbhrb31GjmOCpizdXydtYc2RTpM0RsNHFa4aulVkaFoSBbEJ66ZiJmppSMRNoE4aK8kiw04DE9LjvhD/lmKsalmdN7dUMZC63wP2fpccikM+hkGriWpPQ5wrAVGgvBuCQCncj6891a2qI1Kba1Qm9SiYGd4gTLQs+3lel9c0kLotHcK7RMOjo2VwW1naemVeXGywsSXKn6gfO6FQky4whiE1O9Alj+tojogTHD3sBl54sbEdkfzPZG+GMy9V4QnQ9dBQ5GIg/YTCPiO6RPyDlt0oeSedaWSNMDxk1yi9KsuGf8yzPXAhLT4+A7Vrbx3EWd5/c0EB2ZS9fFoLC/lCC7MEcDve2rMGwXKkuSi4ahC0GXVNps52og+AQp0kRVjqhrXTPcxotZNY3K7KTBwfI3rdnOjFVNsA4J00vEU+vXhKzpBtXQ5M5hKWvAsbuYEodbIL2cfl4VcKoe6v9sQlW4nlqBHnxibyrTAGluPc/83b09QJRrp8lqPf/2XxyKwVsBiDFcu8wl8eS+HdOCGukfupq6fvNaGP8KpiNoZICbNvQ5b+a8rDR++PWmlFPYib9swTSVpB1ImUg7FJxONnsvUlDVdbfXU0+zrrCjtE2/h0NRmxAF6ttObxfAXsIKKWW2+td8rxTy4S1Zt+Y4HaBc=';
  const _INTEGRITY_HASH = '1df5521caebf647002ca65c57eafc0cdc3e3ff8b94e8f81d910b1dbef1b9f6b4';
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
