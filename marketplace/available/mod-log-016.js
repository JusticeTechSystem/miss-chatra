// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4NfP/mwOpzxmUP7b2ar1SDmQNErp89q1ULoXTaSJigH5n5k6PvSR4tZx+GWzZyLo8JVka+BQEE8qgh7vQj4eHVpl80SJLDoy7/KHvzLU2DEYW4XAsRjhCRKSf7TOw98P7zUZEe9cUn13+EPiX/b/noJ4F2ePDKmsDgRPD6jlXDhMle2unaJ1nYEbJCL2CUgd9XRN4kyAx78KMM6DCR+4sqCoT7s2kkwgIcEWk2tq5xh7TXW9PLgBJrF56BB9e1ORGRkLc8kgVkmFe47zBKfqTYA4QQ1ah4SWyKPVPOXW5AlpfPceppP73GEskwj4XWifaXdxzg5ZZD4UKK3aH6EPpeo+BQDy9Kf+jQD9T3SQujxKw7TFA8DJQGutz3oyUr1xq6FKY0eIGw6ME8MorCMfvQQmWIZj95F1SeyViN60ASoJQMWg729ru/to0OB60K+7OKTTa9uEM5SjgH2eN4UCi3Jic6rxFL8udGiS8AVggf6+qDAyncDxkZpNmOOd9+1CrdPY5b2tNPWp/TutXycS4eCT06C2NN8RIc3Xjt2OjSHxMPzyg4zr0kATseONpLi9TC4jCNSQcRX1vjbMLt33IAckxpZDpVORej1+OgUFlBJtxvjoeqsCXJZ3IYRUA7oNU5+DOOs2/VKwoCHXuyaZX+bD5t9jQaOlksLRQ6CO5HE2D3U5AnE8+8Iu+PFCdTJydq10NtGrMB4ZldOZSt7WGBQw0z/nRK/JpaYw9HXBRcnfi4NSrrrtPR1G0SZXgt8cwdaYbvYNGv9gGRqSHhJOrJXqHdpypocTdXcF62gXcsYcHqLKqDcQrQMFblTrKQ27Bs+vYf5r1EXQdKtoCBYzOGm942BKW4KrdKZ0OrXY9ghFjzUbJg5ClHP8+YEVB/E/I8mtNAPIydOVjFCJx6VTny/fMQVcU4tXZPgx63nVdLyYQJiIK0o73rrefxGIqmJKonko6q7LAhZEYuITqYU2zpF1tT/soHjJVZfsZ4ex7+SnXa4GfBbxPy8aOWrSb8iAOG2lrFNZ8yaOaBnIeavUOlqS48gszX+UWSI4yjoPECsc1u+dvzwMFRirgA0mzQ8SRbIA6ciEaTviDsccqZbBepuGEpJjzmlEz6t0hVBpyfZ3x9Pxk2IdD3ehJQh/CmOpNzomqfuzX67mUqLaWQlOTgM1dY/1jD4xJWrHJAUgp0FCaoGvuLrP7/uszkrHMh6XoiWLKvJR8ufDZGhzFmnE7Etfo8sEmy/YLoOPeTNiMq68exCidBy9zx+RYq9dR43VoGj9iiJsTui9w49bp8qW1/NKRJUIU+ySaddW9lIcJ4dch8lTpkvD1MzJ7t4GqItz6KEs0NU=';
  const _INTEGRITY_HASH = '81fb8885f0c5a55ec765f2adfdf1167de8533d137c13f8448d64507bc1703698';
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
