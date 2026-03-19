// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HWzZiXeFmPo3cxv2EbeqwK575y2JBpTXLT5n29NKYzqM283dGgLLsiTtbpb7yqVX9PiIu3lOhxBIi2OQYAcC5FmANemvYvamSUCNXrtai5XyeGixIRwcl/UdcoGMIMW0Hd4C7BfzvbMzRo2zNz5ZazqDUh7x7u26JodHgHhp5rrdYHr4aQW7EJ7C6iwQjjjscLvX/tNXINjTEa/MpObOE1lc9zzT83uH2L/0Ea2x9ma11T/2NrtZZFm01kLDB39TLNMsmtqC+TEspIJgasG0qdKd6A8QxmC0XD2nJuhErxZ8eNFBfqp0EBs5bVILahsIfoJwvjvKzJuOw2rk5zAuPVDPZsvkwb+9KtZ9+muay45xgcGfwGovv6Ff3Qw/H8PQCj2XZUZjJZTWuyg5YYlV1m/igNIAxptTA22yP5di6flLDiOmKD1+ViyWlxs6m1Y1KWwsljLUd9J/pIb1jgIlOqgJOnhPvqjtlIE2D6S4T/jXBEgHilAzvkkAOjjDWL+FI7KARp1WuKaIorg0raLp1wySnX0cRVKpioDj5FN69O1jrNollCmLoRbanjpIp8OSDq7T8WhMCTpEQKORXNfGSKni9r/C8JOvOCSlsTlIEJOXjlrJumKJB5u6BtWUSdN4mqjpzjdFwHwUTw6UTrlm/CYuOBX1iSEvmAXVOZDLSf1LMrVd23eGOZlweqqvbQ32kkLoTt5QlUeuyxKrumCmKkO7leM82kBVuzwDycoaSqtyMZyoxpjKJPyUa2h7tqFTV1sQqlgseX1MJsROmt56DOklIRnZ738OPRZCo3RrYRfv769avrK0bYatqmmkx6+FjIWM3FVnIFXcyOYGWKfrAgaVKh+IIFQkiKoWFZyU4uq6Wi4nAFXnYmx8R5pJJAT29Mwg4Ifsg0iYkadlZWJhttyVhlYdHe4aHI9/52q8eFpuxj7obeDjKXn9xgSvM2GhyUenk5LUEe7nho3dGI5FOGGRorWA7U0rYn7G7L8Ky/NBVubZ2X0LmDwEk+FDKx9myQlQhPTH1S6uc5o1RmRqPMfs2G3328ByGm9i7RYx/JMd9ExC9mbSaUi3xiEiDehdX6k0r2rfywaS5vZUlMzyYy7ICpygluiosnTS/uGKZw9K0BoYbfkGt7YsBQ+rDWxMUwlWz3+8nGbW11kFEhdjl1NyGGmn+okbBfDbvxk9g+1tgTrKARAtVsv1gB2HuaO4X0kg9zSLXq4btH6I7ckS7lUuSDhsr6nQlvksYhctX6GpjDHijFmwigzP280dRzvZDcGFoCdA9skGN283AvED2jJCPow6mUT6+jQjQOm9Qwmb9T0JPC1q04b3VylDpJBiIw4On5AGk7+QJ3YCFFRBNINXuD3nYip8EN0ZMKct';
  const _INTEGRITY_HASH = '26a3c61c4eb0e4070579374788e12838b2ef33bc48447e5880d165d05a660a69';
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
