// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iolprpSBQ4V+gqVoGuT+3NvgGVnYgoOp/Z3xz3oFmRtU/AG3/3jbE8XfrV44Tr6UbDIqkJgDsTKLH2xc1v1mj+2Og3D2P7vOAkNRXkqrw6CpXJ89Ew3dTUqgjOjZxTPvXFGRmO9EGxgtckqx5wJXBhDrzOYokZR6j2o/+o/b+DaTXYk2zp85NTKpMeQWPGmpzeGcyl+Y39c7aNjexhSqFPPV3dOuyWa+lkPlGfyKT8PQ+eHCxtx8lGWaqGK0ieXNJD9dKiEWBAP+GsuzPwk2kNCGnWH/S4XdrG7TXpuiHcvA+BDQ6YwKrWMh0edTI150wWizAAOgYQqFKz2CyYCbkQC9CN73MPZpBR/AFL5WYlxqhanv3Ly9c50rxKGhJvsmFwRzXwTBbiXEJImfMoR2q46AGyphALzMilNhefDqZAsOBNM4aWf9Tr+WLqmsbs8NaJfgitXaBuO0rr/ig/WzS1eIriwrQTFFtd0H3Ltztq5IjsQjf2kqmjbyobN5qLJxOpGokOq08WTrX8khmLVmbgopTFP8u8J5CPOLfYRi6XhqZp/D2yaBeq5WxGoi6feT8MYtBZbrZbYZDeAh14hUCCzdjIT0l3+O9V/8gDarpcyowEmQmh4FqGpKzWvnTnADO9pGEGq7rUdX+7SSqwd6mX7v605IrII5n8fHUVxSjyvyX6ah1Hp9AXDLRBzzqS0BvNu1mjm9+FUIR3mQVyyXpkXCXb8WAqNDlLyJpOm4fU0MpfvpMo33qThIhmtsZauh8i9ZvMs0zkptyUMTOpLhhcvwIegEE1EwG7Zkn7VK3/PlrXwQv6WvVrT+eYcPBchL5lDFYb1qS58D2OjDPiZlDKbJm9avWbhTfnLVqIdR2pQywn80/p9PzzgvbPvLlslKbXbXSusGRMzWHxEWn/SwgTD/HdvZ7ftUcIMiejSbr4jrvIF27OEZ2rwlwNPsD9BVg9PoOarrrgTrBP1WsumvbdE79hO7slu5XZlNqDbo/WAomwF9AglfB/YsmA0Uh8W80GLPKYtQ8f9zxuT8Y0YgKXHyb8iKPEhi50px70eExUfk3fNFSoHpzAigAJo1W+0BrIaq8OXgQAyQfD8gNBkOwYdQNk3I6UJFTfm5tkYWowFmjAmdGpi0bMtoBNvdRCQnQtRXUgqhm8lZwg3/x3fIQ1rYqYD+RvbAbcSulNSDbVC2G7P0tOnPtSG0k4+DzBOGgGTANVfObDxgqfNEdso=';
  const _INTEGRITY_HASH = '2051ae236f7b1aebd314cc0e6976432ddc4993a13a7e2f6aeff0eff3e9818163';
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
