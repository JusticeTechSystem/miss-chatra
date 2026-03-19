// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '511mnGD/F+azpNc17izJ5WdR7gdGW+gUOjdQsX4hzXdfZmNtOoay4Bi5VTYJ0o3NMH1Y8Zr4JN9gmeuqrpU8cNLoSSDbUGr1l8WeKD7BzD68r7am+Cdpw7UP9VW9Qy/Cs2sPdKzCRfucVHRztzwOE6NnjTXC9mnWVbYzPAUPJp4DsyQs6mlpfaauaQrWF5ISFKhfPBu0ZQ93RqCMS2fNgkUW0aSYWlHf/WJy3UYknZnKqR90A1l04eJEgmKdm1CFrapxypvF98jvyz6MZtOhzfHe8vmY4MmpSDURZ170cboCsDVHIgL9P0h5TjnKwrbmooFIQnQnTxy4HaQq+sRKEQ8hUy3toIn6aabuqB5yfq18ThTl0FupX6OBKYDP7jcpQBnbDr7Mw+StpIxGxRt/8cw6MrdBUS6a5SBi7gEqHQEUQVFCL90Cp8maWTs8gUOD6fM7YSXrrCixljemN0UTevjNATiSiVkSW9y4I0f0CEKod7qJ/mJuA3nCU7zBoelgHzxvZwnKUGkbtrP/yZCi95Ayqkm8Y1l6aR4PdgFErRI6Jeq+JeosOtDMJ9TUX5CMhavD6SYvscd23wJ/iY2VG+XXfiGwM9zDytpn0JGXx5onuYF2SSG69/Gatmpd46h3DfQJkqn2sugOrFBE2Dl47+2k4Cjn4LUejsmaPviHHQDzfWarxShmPLUoKr7f6iEs0yGl7c6e0xMNxuY3kZzCqxBw2ESOOWPRcZE9+8/gK6ZcGt1K/LnBsMrXlENmgB9o2lfUtBhR3bWtPFqfFHc9Zrla4SWJ2YPFAXXO03M9tUXsaGPlYksKMiUInLAH8V/n6HnIlcwwoXsg0/vuUuM2D3GqkArQYDQujwAgMab+eP09QeghL/HtpKsEdq91FZwdiVM6iCgwwgh0YMfGSeywO3ZxYl0XITfzM2k1vQb6iey4vnw56u2FwAuzRB48TiNSg66OFygVOXMNbXYsBnTtWUOvWkqCZ0tm3HGONO7RCiDM2xrHOboHdKk1ixl9GpMwaap/cC10lXvmeXdbhPYRNGYowhgowvaZzuvIfXHYxkEj6npaIbwGEUmqMFunOcUEIvrm9tXOX4GRRC/X37EdulE+SCC4zShQjREOPFDSWXnCB0DXBUjWDhva+bs7u/29DifnsSJiB0LYSDSLU0LA4Z+bHP888IgdHVNQTv3Z+Cctv9MQovNqdcy+kt0+lcUOXMR407vqeQEPhrdvtjtQWEgvds51cqMM0xIRIlObxT+iqUcrnGnmU1W4efOodMTy5pqwSmmhkeiBjX+WeErgyopIvplqcznhDjyg4QAEgG+FYhds1DcOWFUJs0aGFQN/eD2bvKWw4ABs76rSG480ngZPLV20wEbuV59MKFHAJC0mAS15c3qU8Ms9jidpYDmvN0KIk0wZ2P8jwyAcOXKMyLlWeT1nH66wO4NKeFKv4grp5upASxNNgY4zLJZisw/BkMNye1hSU3HIb2CwsLmU9PsU1dxmkhsD/BHoYx0oIZw22S+YB0YjvkEcA0tcCg3fIQFaskr3MPlzxqxY8rWKBSX4pzyUkoBqaO27TS6K9z6tlnPpn8cwlKjToofJfQMEVDFqEJ+FrAfDgmZlIiXWbi2vO7IB7BOYe16pL/QAYZQM4RLr0aaPUrMSJblqZC5ItWMwUYLm5wzr+RK/ZJK6cCMgx8pJNAyww/1Qmsx7qlHYKGfZ6+iRCVqFmkL7oxCKKe6Zqqu3v7o5eGxsDRPHUQLqkqQ/Z/d5ZSFkzaptkRS0VPADHHVGSDX/ZsfZe+yisPlIqx6tQ11izornokJIyxWzYLqIAudlj1ltQpsWdtupHF4/e/RuIVYr6ntSkDo2MWG3w/pmT7Br3OObieBkDyspNNP0jb+mPyRFkhQ800ZAkjZWI41ylcwWZ8D1fAbCUcEFWwoJBsPtNQ==';
  const _INTEGRITY_HASH = '71127b803aa04e6a2ea4dbafa5f77ba050cd212399985b6ffc08d92e8c976733';
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
