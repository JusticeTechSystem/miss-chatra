// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kJh4N84xSdJYkrHt5X81ZDFUuPUEX5FE6FdUmH5t++fgvajbI1bGsupYOCImKrdPkVKdftnvS1DiS8Bq3Yavg2x2zx5g7VInyAKveQup2UyLO5bf2en+LTP83djEe64d79APTmZU9ElNSM4LILiK9NpQqhfm1GSQsARMSNv+K8cqR1lHydY+GbIJrgULU33G9AVAz/lIInmnfHApg/vfJ4yZHZQUCVPiUvPicHioRISMJuTk2KcDPKHdo0FwH+SDAZrvvXTeP/X8Cf2JVtD71zczwy/9PdROx2NjLzDuuOZ7kZPucLq2tlEwwwof7CdLK+7hL30ZUX/UbdTKmbW05e9A+Xv0Bd26yw6RXl8lKW5tvsamUZdVUJod5SwcFJJSEmSQ6dIbWjVqiNde97SmkvU5KKrq5scqyefpToNysdLDg0/y4gRqc0SpE7/7tOp4syPDEoVo6qIsUTqKZD82Mtk3ilrgQsmMGOOvxIz6VAylTwsxZKDGjyf8ou2xMbnQUf/ozFTF/+AmakyTCq/Xywq49dtwUqlc+VPQUrFGqeCkG4TglhJGQ6ar0rMRLK8zzrf3fZry0TQbg3ptI06kFZtMlyqkVdOO9tJWQvU6FbWebVd2s+0UiG0gwgdnYQJyTEdAs9FChPMzTy8AXiD3tkchiTqdUlB5ek6cJ5JBGyLq5i8J13+IMSHdbuRi2J5NQyTQbePKjBvMh1Q4mRDaOeW0Nnf8iYsbnJtjES/tN0tu8iiQU70JjQtjtbzfPRfgRStfPbXezhS1CZeBi5ppx11S/pIpVygrlENK3UFLBnaMz4Q+Hu0rXj2M9acz6G65tVmzcIqZ3/MuDAn2p6vzLFhIWcpBBW8091da0cZ2fTA+R+rNpH50gRXg9NKWnhqqaIxZQzh5YsSS3OjbFNRKCbKANsvoSJLM6YcxVAYBMss4Qir+2hoEltXo491kWRIfQ/I5FOC+6fF2MvZGi6iVt8Qbu5W57/3MiRG2AQz+Wx06tFBxyPQKzRImqBkpXdkGrADY15qej7NR/CL4FyeiAtaOFn3V3pZT7w9e3prQgKCYNG2wUif6W4z33dfJVhPmyZy+ShiVOm/1AE/tyeEYRE2MU4XCHbaJ6SXUoVa4ejXFhPAVnnbfZvfGFhv8+ozcvrYegNgdwGzvW2nt6P9TjszqnGYqrARIQvaYiRs9LL8DyGA3YEgRSU9s/iI8lqU3Lus=';
  const _INTEGRITY_HASH = 'bec634f052c539e6c1c65f5e18840dc2635ebb7177f43beb02659587a1c38673';
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
