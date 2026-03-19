// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CovgArsTfDCpYRk2THjSHUB1CTVLFhNLo26MN2OTg9Fx7x0SBxTh+6iAb88upEVeSFjeFHBJ+uexIKgSg+imwYlD6NDcflJON/M6XTvG4a0mD2qt969dhGywgxrEmlpzD2SUuC6Z7tKiIkjkw0nEg53z9pQjDDR6HmQXa6vAHnqFaK8MOTkPGiZTk6CWoT+n4IQEMUo/bzWHLILvLjaCuEplVyOAsgUzX6tXigdLTXo4dTLgJXLgXEvbEj8xGg6hbMALcI4aJRNCe0MZ68ydfWm2zvrRUIthxliQA58LEFtz4y/sbtC1op9JdJe89lk5fwVpET3tQ9sskaZB+qb1T6RCpgZhdejuR60IP+6XwFiK3+D9hsPaDWR4Be90QX4NTBbeCYjBo6MbcruYG93u6UV74sA9wKDYpCS5GzJpYSaf4wwXZuIut1YQ5fx74/08JE9plGFqdPDvEEz6o94F/0mEVD6ul8cayhbd6c7gTxP2eoWdHu8vnyrryUQQ6460fuYnhsv0Ag9/GaFm10Ojrbq8dQlwBa3BMmxBjzA5558+HO5zLuAck3sQ/K+M2fud1scYUHGKKKJaVkEm4myS8GQsuAMbHuWyuzqEfbURRoNPwr+6cgpjQocBrKDR3/BrEnhRczA923u/wqUzwxYNCvqpuZ4fFRedJKTbQrk9iGQErX1BMDfcGkqPfPNw/wqtabZqGU2eIA7JQIqtO4ZBU2N7k9YKGKUE1jZRowYpvEfKLagOUDq1AdBu7CiN6XIJdaHSFnsjdo7bvRXrxOcJ7qQFK9+3F1gjBGz/I2aKxR+ISQOfNVyuxWtvyQfR46yMiF2s4f4b3vjLgSbZc5z7/mcqFJ//Ole8g/ojI9DeTkpCndVI/pjo+eap9OvxvI5IFp760LI0ikshD8emvin1pepvB5ovekOp5i4ytC26/wj28+y+ZTtIbH0ZdrK3PGorQOfhJYMPBhhhS92Mf50GQsoUm7Pa9OA0YroQdsfeUMY7d0qu5KwY8weM8VtHxM8CcQDVCNm0FP3qaortUuQ77pevezOYam4X23bkh/p8VgO4vi6QUelXZnCzKiVUBNQELdTufHZODJbTAlXVhGs3PRG1kaNKcTjPQMdpXZ0dBzP6q8NXUOmnWbckVS5/VfxBbVWTRWIzBiUIyX7Ny3i9lWFV+OJaJuT1TXIqcMiNxHXtlbzFSb5Rv0nD6OH1OQj4L14ijYuzuzQcBWtPHkqJyne5L48tMxb0e0mFK6KrTClYiA0amK030g2Cp1Pspun4lZquUKgwmtqT4V6iIulV+AHDYFZ78J+fPFeLv7Bag48wzHrahcgnk89HPI+Hof7Fs/jum4X7OCjAbS4pXyvz18qpypkewCIZ/nwL9loP4a+fK+lSeN+q0wzQMRYkXLxKRWHAiousSA==';
  const _INTEGRITY_HASH = '1826bd96378d0415304ea28d34dec1bf56ddbac98aeec2dfb3f584ff6e1f859a';
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
