// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MzcUCQB/uYkvSnwu78sCgpyy9r4vxga0VzHEf95tvnzIT18HDG1uEbQtOtrfJwiAuVhMwTC87c84PL1igxZlGitY5kqB7b70tMfWveEuAQjrJVJTx5PQOARZvfVFkn0VdbEQc+veWBG4cnI7Rd90kRKj9jETOp5LddsrPT1CQ9nZG8F+U3TpzyOq23suZ8m19SmPPccziJVE75lXsIxw/nU5kofqcv71rXU7WBvgTYlxzD/8uBB08Wrnotddee601YWNxxeUKio2UsRiAPhp1GnMa4T/C5KxRJTP0Y5xYy72Pup1DDoFCV3AwlkKkHtZdZee+DoZgbpBgfnzEQCwOAFTRtJm/3RFTa1J7cPf3ViaM1if6VrOnV2gxbKS7+OPSKSCt4UhK/v6xaGtlaqbvli/J7U0JvmrSm9TWGz/RGE0CPQVJVv/zg+Togy+F5ONoVBZ135+V6x+xW5noiNmJjrzxxy70TwdIxbu+7XDQWrjFi6Wi6piRfQkbGv0uQNGiW3eHb188UXR7re7rmEQtGq9M4Des/4bLjY6XG4Ii0Hx6B8BK8xH26GaVJvYVst/Yu+g0sZyF+DQBimxO2/86yBlupqX/rFcl27Z9EZmXhPXMg5nuggI/ImluubxVg9e+7Hsi3LemxgCrsIK0tXliyTEStOvd2acdBqF0fokQmQs1yU4hUc4K3mdUypRlko48xnnGZ9dABAWDuMZoFuDtQAv/zq7uh9kznMpus7RD21609dmqg25ziLGDKWUZO7D7iYH0Zvtl7MtYTeaqc6RPLWDUrpeBwuCzkhtdVb6ESP4WU7p5Z3Ri/qzhZZ3QEK4Bu8uVyJN4fqYE01IlSgcp4MmwO8YslP6CosEquRfLdNVbnqrwNtngPlH4hp6aM+oeR15iWYrtoSt4nmM23JCPYRtbtUeJLm/3DVUoOgNkEmYf7PZcag8rtde3y/3xt13TI2X9FASp8uEqBHxsPJcWBoPSvV6aAdIu6VpyO/hJeOtDNU+rhfYAm4t6wLBmBN3D1VpvBz+5HQCUPCLllawgu0=';
  const _INTEGRITY_HASH = '2d4dda72acae20e6a3bc4ea3fc7aba450627290d5f2cf279103610b5394ea7ee';
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
