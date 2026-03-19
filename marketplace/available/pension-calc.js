// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZsU0hb6KvOOhWtGBrAWXJiOi5VkJ9EbAquGjRSGSMUcx7+Efo68NAGr1ol29yYsYgm2zaZP6k7s6LXXeXeo83iZMbMEj/gpvsT8sR1ZIs6jL3N4pn9ZLR0iwRHG0l1Sc7ardqbHh++4wDPICi+OVV2mJHSyYmErp2VKvR6z49YKlIwXJf1TOxE6sgf/Zc58cMk4Bv1CTTV1st4dwGIyHCQ7Yx3UjsD7jlKVbiYParPNrnDNbBzxS1kotmpFGeyrdrjEqZ6UdVpj19zuRyFkfpxDQiPQAU4YiWXVDA3ttAGDTPresVjjni/jk3DvZToQDvNxous+5YmlIT9+j581HYuzdGnkmrB2BQhuk3DDLN3uGeZDlA520HjUwzavd+HJKTgEtdCZF4/1ZUJwR4qjOExtnuakF/I1ryLDxVb7yd46tUNbR27dr18Yg20DN6FBlJMY8ZaEabN1X4XGAprWSZFJowC0r3btkxzg4q676uFK9Hc3uwGCkFOEVVigkGBu0DjNHOIdPcFSBiOYWWzkaEwW1OerPk3DrnrxGcikrOG6XQ4OWiCoxLyBRcvW4PG5lDqqlGbz2G700CvfJXkjrDvZOyu8P4D4dSP91hUkiW9P9eGDiOwkwLrq9r1Nl6td/cGVrme4cwczEYsFCOPDyJCaaTphptq8mn/VWDHooNoKgFs8xSu6oeHhheNpDKbKBdzQ5ctLgCyKa/iVZcIobPOYHhOEgG4esmikR9paMhQnURbyq4NfclkDj/EM9wVdRyc0uafvhBfgVsGIBBZ2sLX7YYBpY70N0YpAENQgnSR71wEl9sn56qmXwBHAFWcrD8V0hrxUjUDHlqvKGG+/gA8YrFJZqezaPXAfLDtRTtXAV4zSejGIXNfvVP0QPQH/DT7LD/a4oWQQNFC4uBs6YXD8Nai/igAmQvdEyNWTV/IwKyg0hHAgo7MZRjEy6WCVI80o/D2Sc1gqgW6ctiWeaWkQhfOTB8TCwvojZmY38S1QvPV776KMzUrLVs/dwoM3q7wyalnCHNphhq7j7FUyOSz/EKX1Mx5VvLDsBo9JI3ndjF8Hn79KpZK/cRIhkoXnYIDQQ5br9bf03razX3NJm80KQVjhZnNRWoBz9mPf1kVqoF76jR0o2v1KeM625QTSXAA2qcj1aVsLpHL6GNcKO9Hmwl39+Fu5oqp5C/rd2ZhEHn2bXDVLG9oW3MDZeX5z209kXOJblJEc5eAvpM+RfQGgOI4MJbr6bZSQXtcieZaa+folqI4ipRVZDrYtJmwUsnRR3PwyB0WnTJXjz4CNwcmmCnbWYYAvLI0uvbdGHvTwoTqVTDwmdbg==';
  const _INTEGRITY_HASH = '97f344d67b556ac43abdb4167e4277b0edb36b30fcc536d8ecd8d81a9574cdf0';
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
