// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SMQnYO0ZyOrZvId0aLLfiT3JEtUvBvPrM/JuYM2I7Wfv4nlDeQweSCyIuAHiwJEqGGFe9Nv+OJXTZMo56e4xoM15zx5GnDWAisCtw0hB/92fLRC60s4LiFwTeHbnZC5TCopwygHlQbjdhop8DB0rqsKxpVQlgSHUBLMtxCtIivKQwK7UMo3rfapNMHn3U8+otLpyvyFgYdbwO+GSxyWv9K7VYvtrL5/ZmZyPYkhqXSTZme9LKIBbB3457BxW9zoqo86WMsVVzfOfIsUBrRjSN2w28wnovuhmQZ6HHON/wDP4+mhtMrrmmofOjYeCwotMSarb93tvl0syHXJnMpSeMejDp9OCbWJf2dYIrGUWYsbwFEDvGhr5hqF2DjILuXdhVe6tSi3zqdnqAMRclViPiadb3900Mg021bpMwR5N/hWyWv53+SK89cqCvhXCemyZdWOqLGlLcGNvbTEyYgVCnmnxKQryD9Hie1mKUjFhj+wAlqJuAvMdRbtnHByPAZbvEasxM3/LfNXijpd/8QE8CLErSeaSgbd962o2YIk//VtJQv8RxruCj37qol9jvACrAb0a8RB4Lud5kyXW78WifivkCjNj7kZEl4NjEUD/GW3jjpR6nS2Yawwl3qK9qElc/hnRITldx6k8fbiEPdxO+OGVxvjECvculwHc86yUyng+/vqMmpPljpLJxVh471EDKzozSFeICWT7BRWPq28g0XABZuz2WgPPDk6y1kD/JKHQC27d/5K6+wUan2+4aCwIgaD5JUb4mpUJ8zAs0jeziGJqV1aX0ZKMusQAsBfz3Yy6+7tDa0I4xJj4fojjjCo4jEeL0Q8oadXy2jbqKZ6hW9AwUnhbPGw7hxJQTdMB/34ZmQIO+UF9P9e/kIyTtwIlI9yvjzM8V4RAf6KmG8eW9/rWR95Qh/zsamGy25bxkC0XxtIPZEZT7ZjZFZB93qWi0X0pEtSGeOxc5C8jXc7dHh3brDuE8IQBrFoJPVYZdrVt62VJWTGW31ehHe+6Vtyh+VDGRg==';
  const _INTEGRITY_HASH = '8aea0454165dbc7fdc518e17d68da650b777351bd132d7f18eafe5854c0c7462';
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
