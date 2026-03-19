// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FaVrjB1ahddOYjL25J1TVuf5CrCkfFSSutMYg82X66nvcWjjpp6yvUQPNhtTlW4rPsBaLURtfyb+FEH3Ec+wG8hvsfoNHcncq1y7Qn0pUDk7z6tK4uVDFINnWaGG6gMH/GhNrjn0+dCCjyq2otQNISCZUIinpxwSZsJzw3WauR4ArQ2Izxta0WMHI/fWq5L5IKUcB452ErrG3298K9yPiP4L2hseV6AML6x4LYMw2mAvfb7xaKj1XIXlpXOgMB08qmufLVvrNiXIcil1Cadswz5vkEjk8qq+2sPcVcLDx5S6HoQONz/U5VDJaO4D6is3l6rhK0FftqUx/+izrgVQ3jXX0FCCxzbDjYc/FfRvY+FM73NSvm9PmwjMz7yAFGqzLjRJCGwvLbu2EoZJ+jmoItt3friFTmpjrCoQzkp5+7gLVE9emDPAdGKkrkF31EFqy/K31rZFbHTZD57vDgkCx5xkCWPuJiieZpZkwF6szvpOnTEPCEWGvQqm53fNdB7unQL9MOG/gBtaZiNfBRv8ex7+uk1AFjVL8eM/KYdnsNkoU+wSbvcYAZrksB8J/tfYwnOziZeerCs4qBUjs405ysFhQe5QwY/rKNcgtjBAK+isCj56YYGGkleeIvNvJqiDRt6I5ozN2QA0wTVp37Gm48qrBT2KDvSCZl7mDzBjX4K0PkzXMcM6o0HOAoCc9hte+JoXCiA0b2P2khRniqpPOWiEaaPIreL3fLtBYcgzkkUPccr0QYBecffhrONgVOfzPtdjBD4P8F0ksiG58x3nGV8j7PpgRWPUu1Fm0njnOFR/PyA25smvUEv+u6VFLumbWnj/8ZJqW/RrZRweu12jm2qXu639J/ZJtpoNxqIhbdDT5w6cvmQv+oabBtd+4iV7TahJ2Kl+ZkppGjoJ8D+aazGS8s8KOfBHjWUVhuo+4psbBQLC10RR7H2qFKhEWP1BcBb56Tj4wov91EY1XmvTvmDJJ5VkTTtCvbiobavo81529jYmfBYqz4WPQpJm/hoNpcO0ulge4gjEVP0YAqFBNYke2IH8F22M2UMfIkXD0BF7UYsODTn9kLIfRNJ6WXJ/VTAvuDp8TzEzlBGk8a9VrpscW/3KAW8Lbzeu4PB3SsvsHL5v2O8Ru8NNqLB60l+Vyzjj0DHDdQr4JI9z0BGpE4SSFiVHzcXIfc94L60oP92O0JvYMFrk3Fcuw1/1W72sDqXEBnO0piwN+eqUCTX3fasdxdAHdZujn+bYdznqC8yaXlyTh6NqCIm7j856RkIibxaswTTflKSul2jtlGcS7fD3847fslam++JZlAbEAxTFG9R+q27YuVB2QxZEv8FU4LYfNNGhn5HM6ve8Z1iljZJKukNN2tuxsXez+ZWJUKkCVh+NgYw5d4/aYLEYVvQ8w+qNIMZ6DRr7Kp53';
  const _INTEGRITY_HASH = 'e5e1359757f5ffcde88bf48097897f3b4850ab2f2b10652439adfb5a0d969959';
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
