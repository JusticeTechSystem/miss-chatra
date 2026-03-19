// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gpmW+K6WyLt7Hr/DsJbhdBnweQpv4/6XLtTyFPaOJY+0IMnCswsGOcFFSD0+VPDJUKuP8nUFOHQJ/QPnTI6BCmPghfrneTJub795OYavFGc9U63ITs/n9oMxjJcpZVFmhveh+KY2bPel6k9shYGciVdHofEq+yZZpqshpbbH0tpifmyeOfIlJbgoZaYnxeNFh1BpvkjWzFzvEjq5iEVJC3FfuHjbCU2+Jxrzyt6elYHpe5xsymSIWgwX98u/pvfz+PTz5jtOyexV7UVn+Q36kcUXh9jSRdUeIW4+H5QC4AsNLG7AIqJD7yVIdDpDyYpJHU/plRsfvEU6FaL3sNXQKSa6CEiqIK7vrStEd9f9C/23MrGC1/FkygE9IxrF28PjavrB1aSDeqYKerkOGOeEGV5B1BOIdgn8SUrno1il/cVbbhcWisceKdskuyxnejU7kb6ut8LUzsV4AjbrkcEV8oW3PgY1yLvg8X6QpELZwvRZ8zRFmAScPhg897JHB1ni6hZfWTusuR9hpuzTVPl77SrWwvtrFByTN0iD/Q95HK5dHP9Ch68G1Yn1WJrH9PWEjs/kuwmYflkajC/Wpiy2etNRYKN0/eJxQHpxxkS5o7Bx3vbJXv0Kp3FqLCijLfCadsY9obclVk7ScBrTpRY3IGdQ2IGOrBt718JR4C2G4rQCrKGdrbGAnPqpxrfEgAJk9XymhUr/11dpjNpOZgxXkb2eY0ZoTUwhe3kRjsr5sDJp+6IP1+kmI7AlVMUYz+8mLXkKa4Z/+C1JJoeJg3NkUUzEcx4UohNlbD6poVLOj9mNWXb86d6dV5HyRAw/eKCoTCfz0bqMtc/bifAejGRBjSxHbneHiwqaIYl0fXHtwVibJdtM9FyrbtZvc7fhykuNpp8xBSpTzW2346+HXnlGvmL8gwHVzHV3FvRPVP2b9mKLMcq5uBIKYloxzocXrl+pwukPs8uvo0N8HSoNR6hbI87mSbP5+YTMBsaZcYCKe5zoO7WjSf/qZantqEvxLkQjmFFpqw8ziBDM7g+4kt/fE5MwcLmkK4cdFiim0AVu3gD42krv4x3qNJKEqEtR7On97B6+aUV+C07H3HziiukbHjz9gT/ibGQYGtYnplMDS+EmcBC3fERhMGQrt4UO7cz9+ThknsOxQ7y3JTLrDS0elZlBsUbRNgX4ZWLdcnMIqfjRP0isW0QL08njCU6PePzpFiFVkygUHUxwwIbDsPV42LYoLVAhMZBttF+QBMbL/HQHo02iC6OkpQml5O0Mf19s7w3BWb0tIonkJd3sGhc+BNllLRfaTIW49KQwr3EPAfjvDOFN9V6pdSC6bCfJfK8zA5Tc/vMNoTfpc4U4lgXbcG1vR6ZOmidO+g1Kkd88PasBp7IvBBRhDeqyTg1EjgBddavnfxodUqx1+CckIfk/mjwXgaNgkW+/AIDG7HPLGatqgWdeaSE0VKG4KxUaDf31EktUUsvLFCmUMfRUAE3QbrnHq1A4X1eEzFeB9hBVrdKXVfaTxLIpSAXNvY6gK6I+btqD6Fq3eNv0ExMqJjbV2u8sALe8UmUvBUkB2B+9Vm5Ympr8tqIVzkVRmAxS3XKXqZ5eUGSywL+nDW1U/KKwD0bLWSRlAcjyV80t/UC54Q6qU1xM+Kr/H6IBvSHJJWJlSC8EtgchGlzSs97Xmh660m80d4nzRrnrKMyIicHqf0l+GpvVENEN6SttKhE8oa1ieU7zYY/gwYFDlkbz0dfIjbYTy6t0tltj5rgTiHTMgYx8O/kJcBRbpsiLdB6k9N3zTZ/Qsv8BojukaHMOvhOPIePzaG+d/sOqVfIy5HG3DGl2x7cqoP9kthBcOkfJX0oECdTiW/faxQfN575n0P7IEGraL5Qtt8KL/UfJCSdfFk7vW1Ll0T+Z6Gsy8dmciNx8hXneKeGC';
  const _INTEGRITY_HASH = '06bd0d68133c62549b290483897a91aa997767253d21113c2a859f21c427df81';
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
