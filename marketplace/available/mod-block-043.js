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

  const _b64            = 'IwJE/IBfhfWAnCh5E8Sn5UzqKn2IhsZ0xn4M1IPtcItmUS+72qZL9wAo2atvGmJNeS2dLJdX74VqrWZSP7/xleSQcGxRx4IaDe+AwoYIW6DgmZvWFe1qWgXkGuAXMzNeDbdP7EDg1iFwIwMuKWQa9PNH4us7mIEaDULhh58mpoRYpwVwj664UIBw/MKlhsjek2UNOk5oUvabmZDnia0eWX4MvX04uj/KLBzLloBE3kEBmwvJvthFr6IkJ6be6ioQA2a256wafn3YSE7WYoo4amLoN1edso9KRxzhCEiB+CELJYeq2oZuU1BPgH6rWvJv8pbg6qfQ2HZInQ8vCbGRU3IiCCjGSiSGa8jzn7n2LrEuG48Yh5MVnt/wHhocoeu/6NDaZdOovd4le5UYhRU+96KkViE2kaT087IJx4pnyBOum2VKHEMAZ4B4hKMLmILkACRFYuqYZxvMs+joL+HQoZk1rtnxRBJFDXnYfiPw1DKGSuVWn1dNe8UCtiavZ9giRUZVBlt4hijn8zC/3SRfEy16E8HjpzrX9Cybt7HUwoXUsCOG7hYnWZGJLZiADZU3aKwp2YWFHVZM7dmpzeJBFIUPmt6ckF+H0beDk9WwEf098hj3VgMZmRdxGqoQUgN/OjI5xH+Um+GYMT3ouSBWBwpag1eRg9xC/lA3idjJzSFmtkzkJRjfzIziZUsSMgcHDJFlizd9ODXLb5W+KuQMkmrFzudj9pgmiWc7ojFMTdyKu3JxKjvuxZW8y8q6TwyQJvVTCe+X/CjbzW0/iaxYHsyQRnXq3XPCC4cOhdxRsjNGRrEP/KAL38kugF4kf5W5HMe2QGIFEYkPSQFjAk4LDrvTI+zDKyL+GvUtU4i1vpCVDHqvQNR9/RkzvMbKo5rk0y+UATlElwsa1uQ5ZrhOalf8HAIgVlXdVAOlLNhUi6h87EYkf5yx4KPQwOfNcfNDH/Hlort1Y/4z7JPB+Wf4n7HrqyAmIptkSUcxx0hBmJ/G/tCVnax5QOex/Z1D9KsajD6fO95ut9vUk3gPU3ivjOCixNqy07PB8eHE4emgQPWL4Uqv/n3vn3qKXvweN7TDXrByif01CsvUse5N0+HsA3JS0QbZSVZPbIb/GBjudMnIQsrEihhInKXzgc+Lb0zUNQZGX//UBygnld4WG0GcvXK5aD7Cm43kIseu66/VaxNZeJ7QzQTggg09AkG16LxGVlJBYvoXmpqwLhS9rInh2mSmX3j/kaxygd7JY10+v2eYV3+ZtVpMxOzJYkQTQMiWbvQMKwR5RZr9GO/gDb1N2FWWsBndVJx9nrr0WUdmqV3p7ocAQDXLi1jEyPowCDUBqjQHteaQfFchfd2m0hxc5+DFSpL1m9V9Sw==';
  const _INTEGRITY_HASH = '1af5e2e1acc7239281fdee5d02462343a85a5ae5e9e53b4345794891f5b4ee00';
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
