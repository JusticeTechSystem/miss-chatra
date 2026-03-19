// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '81ye7FEF7met+bcOgMImKt7IibRqn0omDhuGDozaaOxZGR4Bqk7E5jdwiu/3VsXmlvtg8V2H/Mgb4U5j4loNkxV9NDFBnmieAmj74wio3MsSVnjJ1dHLLw5VNHxiGeeeehfSf3looDBow1MFCsQ79YWvDRwOW6pD4WrQeIg0CBHs9qMY7DHHziWoWni00yQ4963QMk93kE6iGqxluC4EVjCOkyKkWeEljPesUWGAZdQkz0uZ03FL6lota5LtnBhTl7d3ubRjCzOpfuFAYPkjatDaizt9cnfnQsjVj5CTY7uG50+GfK9guXd+b4ntgPDs6qnJVwjYezQ/K2zgn7yUXuAJMHazgXvAzvHJAYatTsvJopZsmXU0GZ7jqZXOaNZMnYGw+zE4G1gibpW2HxYJsifCauqAsmGQr/sgN2TKjChVobEPY6pq19p+KOd5X7skWmv5G5n0XclldqnXuOIfYWMg3IvSSLWshtCeE1KspODeM0ubXCp9JgQ+W5XFunCd/Q3UqAlZRBMzXWeYdmKwaw1a2cfNgMQI2i9hokEpq6UWMXlzONz0Ba5JOX4stgIs/Nv10dn4hi/aDNVB36rdZIJy9Wg0fjTorSYqf1bcPc6bWy124IHQyZwhqf0x0OmD1xS0r9Bc0dGSQmVKXqghJPvV2dJi14aLNA3xCZj/NEOxqqIs90CwYSf/jwdWRFe03XnYO3tHWgbN4CwGRv9naFYZG3ZcLX5n2A9wrZTLaD/mE/h3ZM3LDTmEUW2/SuQ6N04V54OuemwLRo0hN0Bc4/wH6hv1vE5syy5lWlOwf++9JH1v5fEIZfiDcnUo3W7D6ZOueHZ4YfqN9s8q7mUYRCy7is7Wzq7OznM+RpYk6RTykh3/7aQVRNUCz0cJ0MeEEIC1sU3apAbPfzw932/Ihl6L7AKQpn/vP1zDPbWOdTRy6j8MHerZd5gyOLc/Ixiq50X8r3VtmcT/rU7dbubHq2U4TFJUOl9VhHeAkRPkQMN6MjBCviMsdZhA8cfeLoZ7XrupImjUYRQV5EDze6/BPP2wZ7gvbClYPGyh/elmxwxwegspcwBnqQ8UoiS2zklz++gtAyEEtMYfu1MkwJ/v0xb8v5mjujO+cAGUJlE+j1EZPfERN2FBvKV/gyAsIQJGnBGNXFZ0pUcE8Qv5O8rfl/MYyRoOiw1BRk8PUKaRwTx0geTggIMFfPVXtkv+Ag7qnmCOpXM1W1HAY0hrhA==';
  const _INTEGRITY_HASH = 'e52121c289081dcded907cfe06c2607f6188eb9f133267c8739efc6d6880382e';
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
