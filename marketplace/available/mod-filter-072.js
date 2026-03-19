// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dhC/DWLX3RMBChZy7AVQEPPhMVNgKzqN3wleyNTqJwE/jrpKCQFWgHdxQ4BzKfgubYhzWcEuYhssc6OlHuEqlNLPWv9+5jAzpWxx29Re5KOr0ToinYX78rgqKtMkTagO5iPLljqeGhf3GIrj02a+5mRe0YW0500oaHZPKhqzD1Fi19eVKcgXbKDfbD5ilujUXs5ZyoysHVpEfWwrSOXIKnT3aCC0UvKQ7ATZhX8ZzgSuiXizSusHaNE0auRm1s3wiTwqYsZW7laxgndCJlYfgsuQxcTHDdeKlfqL2+0MF2fhxFk9YOCmiXKvAVsHUT+N9TXqY1A1UDLcQ0gMAtaxOJ1Kgb0YFfrmtKVHGprhCIZHbYDTHd85NUTzHhzt2IsRNs30gf3cUqKkg6VDEV+n4TWHadwZxauYbj7+5g7UXIqdObdcK3d1ZPF078qQGSu0oy8HTWmoSvU5n8URzrmFJtq+T2qi/GRQG1QuXnTQIREPyQz7pXcvo/dWlyUT4NxG3wNWT4+8DsyahVi1RYX4b7ihnrTV34CDNz5rfUXBkKwByXcmZ1Ymh6ya6aagy6aNWPcqQTfv2cKdNfpk2OOSIYUiiN5/+IEtPVPM9RtfHJHkVk2rcna5nWF0i1QhS3iVW9q+8XcCoRThVzb6DLJrlX/pq+odyrs0i+8MbPnwh58D/1UfPBtevP6iP4JLKE3QwGyguxkX7MqGOyhiTrVNExFjD4FBfHOjxscogr6pMMbbF9AEZsFOmppHyepAja8w3DwlHvk5AysVTJdB8M51+4DFIlX+UhbskODTr6TUHr0FGsDDf1/EdonO1e0RAnEiZA8Ggik1iIOHBzhJXAl/BqW0edxLCeszkuA1kLM4I6xGQLs6rLD4k1Obj6Lw3Q4hqngbtj84p5Prqgngin9HqUOrw90zZS5fM8EcHnagbdta13Vc2sHQ2FdbdFokmDtIaccklnTUHyCgmPT8/sYqGtKLKqn24W8AWv5dkSFxk3BoGHmzhcqTTbZa19sJIT7rjgS9/dg+6K61uhUPskWI/M/ScTmI2WUYA2eiLoK1XGRJeb2qYFbL3s3UjVfZeOG5sQ1EdX87BhJ80kWcbgK7BGEh/SiwMu7LUwoPDXa5wfKeV3BKEtp0zv6O/nAQYhjwasmmgR33zph14SNrLxgXwwUlvY7BXSUAnEY5AdpGMPId4jy5mZO2upZBlexpmg7DMMv6ujCHVyrDQ4GYx2vXlNze3oVttVBxlDinD9igZVgOONrfqEe+9RRvNuJDyXivQvVls73SP4w1NyrK3OvQg2G+jIUq+R9XbKwCf/3xpX8QXpeBVwWxcaoikmu47K9JCAOCAgomBfeOVkowmvbGThsRNAsc4o1ln7ueHOzFrewspjg=';
  const _INTEGRITY_HASH = 'e75e3d122cd8e2d243bce993ac168749bfbfe47ead905f3bcbcac5d8f7e27297';
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
