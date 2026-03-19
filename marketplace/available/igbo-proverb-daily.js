// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UZWyMJH+W4PxqF6LSVH6jXk4Hm7Wmg9K0P/jR7gfg2gXyC2nv9hLhiwKRTF/MTsYa5kpt4hlpQRmZZmvQTY/oqkSB/kGHKC0CYYFxGe71lBouJrzj7EUJKPGKRes9HFQjagOfCheF7h8/S1Z7VyhP6H+ligBUjmYTe3Aiofg/L6Bc2L9eVF3COVl4aUQkKcvKqQBErrDtMOTlFYG97RfQQ+C1tZFKXSy1aNSWJhbco5tPFRWQ7qtwp1pg7za0EUZFZ9eRtYD4sVNYghiSfoDQ8pmLMosHbjoK4ysSwIOFYBkuZa+gqkexDj0/XYvv2xE+CrS6s63qmQUzWcJSJzaEVhcC5BDwr/GsktilVIJ+1q19+7fr+A5UC82BrwQ3pq6nLNhQrh9glcZi4if5mckZEo8YthsSXr3+21SNwDCSfy8iyHMV+Yh+Z4Bnol2+nU5YKcuc+pzs94gWDspUT7dj2BF/27bjh5+GiqTiYIdVFocQtu865H45XHya0y/06T1WCRYnEYHKdOuXvaAKQabac7w4ZhD+/cajmkckOT9h4E0klq0+JqAAWyZzCg/Mbl90Q5kzVcjKY9zl9vq13U7ElWx+Ippb0hWxn7pORWR6vK6+c30pbZGttifB0WDWfQi3QHxbD4MtQE3lLFNYt/CVcQ8VwG/2HhiC5QFoNszxN4AHJdl/3SuzehNzh2va4TffoqiY5bobrP7N2vSzqK1u68ymd9i0BQ5bVH7aPWh+61KgHrAhXgMylS49Rqn/z7vyqdOgisqa2sLRAFoDzqGp+u0FztN3Hgl3RXISejtnunH6z2oeXdefOTNBkBiOOHkp+54OTGFQ6OEY01PHRQp9qObCSUEbxDvibBoetNQdJyakDI2ZxmzVC6/+2wDkqorfV4VUrKXaHK7IioObrs8luItnESWyC1MBsGj8ue7p8/Km2qpfHd2Ng8VLKpKhSkobQ5q6+TrSpBVs3mSZqaGE7inM4yWcqQG9WW3ctPnep59YqjvdzuhuiBFzvJ+78jpZJXzBywCHO+8vrsZLyNPc9hIPtsLgiKKtw8E/vlGt/W1t6tQzFupLZZcreUXN5a8KlKkqcQI3IV7R/5Tndey0kLj72mSa2GLIhNY7BBIXt2qK00ZUPNRJxKe3bG8Sx1CzuuL0N2S6GqRvoAXzUVtTjK1fvqS8v7k+Rgpshfgq8sVAyuU9KzwGGprqoyNW0YrYGc0mAW91dXUSkKfnP351kFN2CC6mSnLSeNkVV83b7NVVVJ7Zkj+N7nFyRLN7XOC1z45x6DFmKVl8lykWl4nwMWqThkktPIu4C/Gv/1RrK+hm4Pk0gICZfpNKvTVim1vsunazhruVtxNVT195pJiQvwRH2Ph7GPoQvKoh3MD1Qi0WC7hRQ4EOby+dqQ0gFCsnS4gGAe3Md+8m/v399h82B40VS+8tBsW85x21DUhesnnwlirzI57GPDRkCycCwL5StWp/EdNUnIOIepxInD915/1n4hA+x2GJYTKzbH7qu0eBisbyW8N3vG3bTmMvfknKXEFczln7hJV3/LZNriqZuCtJcjFZ985OVD1sDCzSS7z5hO4ppw5T7Y6QH/Qe44slUIzeDn0n5r0JLxCLTbjcB86u0z9ZHp3wUJTuW2AI/I0gKIRNULXy+1Fz/POCKZhhNzJmPz/zeHht9YjtyD+63M4Qhi6Ink9St7T8TdPFW88sW4OePgGaR2i97FMu4ZV09N4kH8ddbtP7eXpjoPoatIVqKl6/wgQL8QCASnsjxS9Re6LwZ/AzDq+BLO1NZa7ZDtpdBzfvOShjiwe+Z8fk/gZYBuUeNvcYmJpJcOKyLJcagg2KuZMkSs=';
  const _INTEGRITY_HASH = '87b6a98b3c71248f9c7fb3ec0e8ecdfe4e3ee6c8ac7e8dc00bd0c48032a01f30';
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
