// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hHjdH1wNvxf41CFnCmS4XZFgtszFV+LG2huKsMSO6OH28snjGndiib+LOll+U2Zg9uqksoKuMlOaYSRTWxF99/aUph5Jz2WJpUVeSRI1C79kowugsMyNG0gtdRChQ8e8XuxB+gNZtkZ/guIzZC0fahBdMWo05CkAtNqvaa00VGZ2gFmcEM82IQ7d2PHwm3KdBeuhBKtKix6Sn6vnef/uK3T2JKi6F2U+OojpG0iny/1XRW5cQ0LYnDoNDJnMe9G+3KIQhC1CqiXsnJIGy/+NvRzl11bU+FvIshPgb3QflvjN+QQsozftf3UYnrpn8PdeLDReoYcYBicLxYLeHXS3efElDR+l+GL9hpIHkdJU6VAVU5LpMQ+QyozmM6pS+oJyvivFaOHqnoGS3GRVMRdK1Jfd9Qt1B7Tv7hKZ2DvS7TFJmtQM3NVfrJxltG5IcrBmqGSRUxdZEeBPNW4pWZUDfdxeUgnenNQ7+SaleMFm6jT7FEnXoaB9esW0I2TthNyrf19UlemhUC4kY2m77eWW9sifTA5D2Dx+7mpv33DFVxDpF6jPnBRLH4uQ25xHa8evTyY95RUb7pBYfG6czNwSYHUgqHQJULToeela+Zn0oz/AvlylMjNzd9UnXitx7cHfD7sS8w9b68iFVjpXRzHdYcqOwNf2lgyS9uEqZv8LQBbTaceVkxgmZ037zXW505cpjL5LQ+6P6VYSBZ9gVnj6ZKNRHudjAW5MySSoMcN049iCai9rybSGB/J5e0HMp9O4C3KUqjgrjqZizDI5a/mdX44AMmiJkboRFy9Yn/1hWROujZzNBpOxPpiUIziYqkX0m2poX3vwT6PSD7HonC8QfMV6LtNOWQevlZWpnUxfL77X2tjq6PTnubjiFr9B/e+NFd6cPFcwT+xwRceo8XDIczC3Olj0UV4B/xYD7t3IPpU9gEVrUOECfVeItNk1iZCeg4YXwnOqfceGkwmqRWu2zWCTLqt1xF/5j5I9qc91AYrm/ACbLz1A0qRlnPzKCjxFZ/XGbQFxcFNCabNkxjGlfpmUiL7GGM11AvrwA8oKZfCtCcwEq85FVzWjfuAN+IE+TvH31ZedtRy/fuww0YDOVKkTtxIZ/0lzzEkA+qGOoGcpLpzG/JqoakWlUPvOzupvVfVgwJu/HAFAWXes2AS7j8a2GPWhKlL4JLxPCQh5Aypfqz5qh1zDZNxbKtKhp4a3DMiafNyBtQiP6z1qQmD3WPyfu7Wj9dWMgBjy1wHOAgcqFntjeGESWC8hckZY7W/3+EgtVCG0sUFQVLXvSm59/JPm8ILotic0K39FvHRgmP+h+gy51QcM9WGt0gFtHTGi+aghN/d+zT0fM4cQm5fiHSkPYztjiVh9zzc0fx+wTTnNdVyJ4b19eZ3v1HJKBKjTSgM9goMXmZRqagSpj3S3XjqrbpMvn6f5k7WkzM3RyI1gSo+IjyBesNF7b9nKS2GcS5ecN1odEbqgzu0tL8mE4gsb2YXip9n5DaKDlai9fTG6aj5IIYmz60X/ZSS4QuGU7aghpdCpNxRvf6q17sbveMeLhOEe9eYeAY6ZyGNkCU/CSK5nP2oBaL6yLRTyXta3BGirQ/kORWiZkHN1ny2bbz2zel1uz6U1Ln434a+6N+k2bscHFqSuYfk7DGWbKFpIfckRHYfke2SegQ8omTUodbxszh3RtDqK2/t8heo/VTcxFV3vHC+oJqGd1PtIQHm/7qxazeV9tNc8acDjqkYOexYptDT4NLMKoxJuKvGUonqWLDVdk3S6wAfgJvvIhXtNVzGR2pe7j3s+4B1mWmkT09a2JVOHWUJjlnjOg40wkd1oh6mQMhdoePaeLFzRHgxWuar6bdB2O2tMhAqF1/VPDH0kzkieVEDZKtsVtBZpnNOdN+kLcQzdAd5u4I6J5D/q7f/doPPjd4wAKvyOhQ==';
  const _INTEGRITY_HASH = 'f7ee6656de9e933a932d3747b149a6ead174f13e3c8882ac90e92b45e41809c3';
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
