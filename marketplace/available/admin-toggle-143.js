// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XnX/VKVXrVA61vWXw4xDVr2DHfkZryuTVERk7ZmhWimtkgYV02T2GoO5KIAoZpKGUSfiD03LW6yj8T/yIIe6DPE2Gbs7mdynlYynMPfGAtz94UjkQgFPuuxilWNj68kQJ62iNs5hhoZ942hLXAw6qQajdEBXz4u+P8UOYYURoFHVYQPRX2padPOjPGfU3rEuUKp67XdCw55slrWuepqu8uCI91smrQBAEzU1olM3cPqWzQiT3E3YYDP1QoPoKUmJL2tU8WXmK8lWd5cHpzejH40oMb4Y1lqa8i2UJ9z2SRu1Z03Uwr1wa0XSDsOfay3kKXM7zI4ZFlXOLKHolz0J+v++VJv+fj7MCCnEPuyQefYwVL84jufX8+IKeWQzK92BKZMGMrKkKmmpBiaeuzmhhb14AFa/DbgFy7Ere3ShczF+srEAxhF5ifxF4Aj68Xt5fkXx4/yjsRZzny2CIPSKrxu6b7arDtshZJpZxqQNQGy0CWH4xW4P5kS35uLWkQ04KuPRp4iZMzK7q+n9SAq5P/lIBoxOfWKYooERAMiU8v9nrltjzBW+fKiU1CI8Pomi6mzcv2sqINhvMVSn+jKoly67qGEU9FGGGjwv4s29V5pJ/vPwrdB1zOPbMgwl1J/tDUbK122NeYOi+Y06ZclX7vAlBWr/A+hccXU+ljpxX0IKkUeB28eKSSeWUMsdDl31ioZn/obfFlG9ZQ2PnkNpcvRiBsj1luvsd7c0GIYiFrO1mpJp/mBmQ/0zQBnYVKnoiZGtRSAiJtjk+2iH0QG2snR3uR5DkcA9BEjzRTu6Fxh4CddgsrbxBD0fr3FwmJCDQkJfiIJSBL6SPrFnv8iL9x/3VF4R6i0f7Zsah9LU7W/DFMUlkh9+dk+yi4icl+WiAPA1z5d2bf5qfTEB7mCHchvry2GLGzSDx5GF+mLp4T+GgEWEiFp9/DQk3jGDbDfxtWBFQVSnuEJSZQsCp8BaVRUiiEgWgqWqqSl84DB1tUtDuzrQdiD8asF0SoHMg0ITsw==';
  const _INTEGRITY_HASH = '0d7430fb0c90df33d29aa74c6793c417e7fff01014386b9fef1167103a7df41f';
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
