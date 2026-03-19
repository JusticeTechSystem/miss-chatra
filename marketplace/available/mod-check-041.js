// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FNc/EejoMHeWF99dN90I2vqXfdkoXAc3nxV/eZaMF4izyLs+aqUvkN9GuXGdI2qiTL9YxORCEiXDmF6XQwSZv3BcXpuCI3zZsv9MlzoC5UVSiISO4fPENKNAVUzyXIbrGui0NHQM61E+OWLaBg+86kkZGCNmvHD7vhlc4SbtBa/1jmwwVjf6w40RipOjcwD9vMFeN1Yzqw8INtea37cyUVeXkI98FDHJo1SlkCfSxDr6qzRiHte/8Bka/CUM3MBbkhJAnQutPJq0otnvEmEINv4KJFI65RSMH1gdTJeN7uEaHynFujhgOdPqo08T3EkCup8DgmumMcfMCj0QBLHz2d3/M+jlhtshOnSSQDybWb8vndwWm3ABE5uTYA+VsCDyQFS8AGELlWV2klr6qTWzZuAFLh9Qax/SEo/fPlPVrn3kYlIYWBUqHghAsZGMb2v1EkUmM4ifjomqRLHpf2g5MDgliFlq20+44cwOKOhWGsKodvZE0pB9DTbEWJoVwiv3QJKUftlO0ehWbPX4A/RRFwzYXCGijWJwkjD9A1yz9xVLsaghjDMfGRslaurm8zUGsyhTxV+pD1gUj5tEiQPJpHzPYxVqNrpZR+pwmhNpznTob4yEYbC0lpJlyh86MrxJ/dBSHFVc0RPzB28DXHFgY/b0+jasPyCwNvCVuIQaXBZZChmDfoLvhKFbQFW4iyYSohrRz9R8wagsRLPD/dEDPdRvK2PikPSlO9Cg6o2j+qFwd+HOcdYlS9ymCMM9iFGgP7cn4jxRVlughRtTDm7A6ESiYCewbVPDlbu9L+TVI7Bw5lfFXGia8VDlqNA+OHAXlLCtv6d73Gp4uelhcEuJhzfzMdCVlu2HAtzBsdInt2beWOUxq/lfkqAigbA5V+iyh/AZCeGzcuPjauQE/f9MEW64RenVH0Q/l8n0QQrOYwIrk6Vpp2B2juxerfMKoSgmmoqjeTT8DC4QyEoy2VhS+BiV8fBSmYjgLziBKNQSnqfmqDzF6+yLkJzMJZ7GOSjVShVp4TNo/Lu0HZXl+iH7a8YEbtkwg0AP7vvIkZTGr8Ob7Nx/9hMpNSWrZfmgYzZuURLfoX/SJb904F9Tq4IzWJsdIAgdCCBHIO5hBndIe9y/7J+eLqE5Wu4iZgDAc7vx6n/cpIkcJuKpJWbRHFob1YYb+BYrW/7bKe8MmKTquvsGa8+22617zGsQ4bSAAw7SSaSTvhsx8zsOWQnW+71jEf6TPaLhAHCMGZVPRH9QYTU94DR6YjSy/xS8YPXdNZ5xndwUkspt61xLX2z3qooGX1v2T11VOs89mCB6fBEsdpsDX3utDBAX2u9eu5XXXZxJ0AA+4lRYaS+NDLpyeyYRuTIZbB1wrq8HEA==';
  const _INTEGRITY_HASH = '95d45e66cf6e2ef8facf3995caff8726ab102237266bf8075e0c54dc15c19ca8';
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
