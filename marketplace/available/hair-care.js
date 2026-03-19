// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ky0TLz2OYW8WC+1rIYhgre4vnZajAwzB9A885AJ4oO55qa1mfNPpq6lim+eimkElPQsUQwbzAwJW/AHAesNw7uHlaMoCqsRiy3ToKQNFkv3UccNAMt3iX6J28obdYnAS8iDsFzAMsUuUxI4elSu+RyDJWAZV+/jFQi21KeqocPdzWql0C1wg+mtr1VG5yH4AaSeh7Q24g9ZHFAyzCM9/mycqdTPDPYhQL/vdGe/oEwllPKyyAYXUXdKfyUXgRLRAlQ0666ZzTmaHZv+ZAELtGkPzXiBwShc9rUj83FGUyKpP8hrGw63x0GD22+Z9CkHSHi9x/5BA1lO7WAjo4p9T85O8egTY6EW5rGJU2gpp7NbS72V0OKfcQIFa21FUlaQki2uV4/AsQ4MiH26+W81XTVCVsr6WzC0JQCksC1LvPpilsHy9YJuEi1oPuqIAOs9Ss1fncFDuO9hEsy24vTiPTuS9y2BGWxbdbKhFFiUHXnbROCfqH4ooqdNIym2n8p+jxhIxeOkMBwB6mT/rXuvoKghFcshbxuEZLiE3l5CocIPEksIwOVnm/aWeMhIw8yUihSlvuX1yo71BuqR6UBiFmLogLVUiKdkbmDjEdU5iVvfolFCQzAuWedBoOnVCgijb6A4bl5X6j9+/9a2z5v8JTT5rzoUDLSPjyNTiJtn+XOpnJ3NPHD+hsTrBq9bHS7P2SuSSUO9GghXWR9uFkHZId0zpHGXyPfVzwpBvH/EUURPGC0cIzaVa9UvcaPN8sjrGCU2+8eGfcHfba+zoTqUu1BREnO0VbvUWR3idkeRUUjFq6DZ14OTcQOX5xOOTNE5SAleZqmk7djLgmnrwA4hn6ErnVicwI3eN2iqYWIMThUVkuv3Wk/T6yEdIio2Eqd+RErdfyT39lb1VVFg3xJD5mv5tqQC9FDppjvrfBujaZWtyT5GzRd5HIbdNfd114CZL0AzMaRw0ijD7jIMOLNnxPLTHbdbBCGu+IizxmlFZhiUWFY+LjRretuzk2YriWpz1Hnyg3cWxV0ENm3mu0Hbp4KCTElg2De9XuaW/ZnPmONqwgGJG7MgOSewFpMvlE9V19kb3HKi2CLk3OiI/fLHyms140R/k6ggDeCuURAEAsRiczH79G1S4ubRt82n4VmK26lS53vIkqhb4RxeeyV9eoo09QOZ4nRZiSr/KIqkTSwoghGfFElFyQEsf8wUKJODE5J5eKS2+bspSKXRGw5xtcrDY320iPNrs8LWY/G4RbhaunCln60Eq0Sy6v/0ciLfIzJny1HZUrAUuMeihs4QQFOHD8zoe4R6vakpJicocdPIofwSDfmRJHEKCMaLF3gs4FLrGV+we6I7Nwdt9sNNMFozWc3a8q5M/f5RYMr3VYY1EsTdNIJWg/wkDRrUZxFhSixtMKPvVFT6TpYO5uPN+QuRAu9KlMTb+9YSWbHIXNCl/jX4WyIuXDdwYa7ZNUdSJBBQ6NqDDwvRltxlvTMfAgQtWfnxYu7Jdy9FLKkb1+C+DwH3FWdiWUYfaGPovxu3U4mykn60jISkRiaN2tHHoVjG0OgZi8PMcuSwnBRGBaqcfS22PW4/+UuXMOZOhM7mmdNxh+4WVaU1oPXKViK/iRvhLEsMLcPYmkYOzdg+ZnBhDrNf3J6CUtqJCUj9PQ2PZO5fOcYloNZXdiTpAib2Ttq/BDUibTxUrq64D+A==';
  const _INTEGRITY_HASH = '803ed7682c9c893d76441494ddfd355c1d77c530d4e0c83ace5e14fb11fde3ff';
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
