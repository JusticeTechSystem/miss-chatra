// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4fN4UzSH2q/7M6kV8rHOeqSCmUVWXZaJVoLIIoEMc4K4tqbTiNNCRHVQSS7pEupxJ3LXbdx35g1LA/8owuF7kj9ynRxGHSzak7Xfsitf/lY/SsDvxCvMexe6MqMDEo9fTbRZO/2J1V7UqtvCPHL3IJHhrwEICwAArmDooY2Rb2haw4MCztyl3JPo1R9ZMiu8bA4BwrB2PLnFDf8MPkhsY2SJgOY8BwnN4/tfwpwJSxDR2uIhSOhXE58Zt9vHz2PEHuGZIZBzojI5NKm2ro2BgHgUvNMFS5oPub8gXVWY6pJOMXYWIWNUlr+w3TMgHn4KFeZjWr03g0qvjRTq6edoWWalTx+H06fgWbTxFXBaQH1YCbJ0oduTomdsysL45KrWM43NxyZ6rKrwbm2RJOg8Q4mwm/y8ABPRQOcjWKTpN/8HKZS2zhBfhHdPt+gflLOADWOoZbG8DfVpN49YWFuBulzuZzMAby1gOsTimilF/6b6cXZK2f12Mf+ru4Lgc7AGiPYyZaOSxtNlse+oQlJi8HpcJLZxQAuYq6s+2o5pdy0ly/DYgTzglGgCZGmIaqtqWtCPdhyLB7PcI0R1zuUob1X+zZnOk0UxgsPtpf33uLN8123Ier6Su183QYeD7FgWNgfX258scXZi7l26BrzIEJJGRxRmQyAFf9lxMX4EhGUqQ+TuXy4sFfP+2ltWiNlBDDI9SPy/Qk8C4cVo7iLYcaho3czws3TUK7RuY3k3wKPal5IEItjnWHWSpXEYcT8LiXLSOB1h+kxnMH2hjDmsASH8cEP+3nOrVw2oLMaGKL3X+mS0Cw+H0PSfca+0QQoPyTUaMTiG0PJd2TfIW+Ye4SMow6ZRT1Tr9abAOmTF18a68PtmSkIxmkQ+xGYLol5LMek2JhQxjVuKpn2fkQOmC7iNXQvY3gXQsxDDrFe4/sl+ys/APdp2ZSbYv8j338EIinLU/WJLgXDIqhzq7ou9u3aFwohnaRy3GcBSf9H5LB+AjIH43ognTtV3I//sAJW3DaTes4Cs+gAFrjVLsmKeO4xSNsE4R12Bif0DuZvQXsN68OTTDV7xZAfD39uk5KWjwgA/TUBCi+0wRpke4rhaKlb4Fy1m+4M1aoOjWCif5nKb5kloGTMWPguMbZeTh/yKpVREgrSTxxzCbANyhGwXnl0AgF3I0Ke3ZhSoUchxrOaQDmS5UYwa2sbMO0F8wv5gv+g+sX/Mg/BREBHEPeqwHA7kuzx5pBhXKKhC61rZJ1tJGrcIMNlpQETFPxif5DxT3eN/hVBhB6KvoR6dJHxmuOwmbc3LGOW6l+bvJ0wKJHaIjd6y5HRiZTNvA3Qce5REfIpOceLQ9SDt8O5Ts26wxbkreoxFpCh3FA==';
  const _INTEGRITY_HASH = 'e4cb7844091ef0388f792c11c37960083edb35820c85cd322b452455ef737f65';
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
