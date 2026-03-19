// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tOD4I3ColdD8P2PgQny0ZdawUF52Ko8Cx3rPGugMhGNHSFrQ1w8x2US3UY57CU1nVLKsX3HrCbvflKqp4Np0klXM1VZNGzc1rdZ0nFjru5USs8D70+BA8UwiYmHGIg1eDy5wG6IQKGCKZ94eV8wfNZ/K39GXZrBTjKJxChiJlylCm31ylHFXA/EN0HZMf5F9Iib8ehJ4FutAY4twnMD32e3WhjiNzOZAC4KGupGrHVIgEUqf93rwcb2NB7vDcSKXWdUuqA3iBw/RD3Ta68o3Jo+8yvPzG/sZzOCXVXDmjbWu2KhmszX0hWyrfYCZEtOX9uzzTcDmf6TlhnIJCHFT9vP/33N2hzkUQQLBRegSKNql6NbpDWXc3eGiyTTT/spM6RQrRRg8d4POU7FQy78dMDeWt9o8VcPERsaMd5g3NenD8cayRYw/wS+R1ew1ilVkfwoVADRgo53KOIVnaBy6AYPbNqfeP2Tw1Ae9LpDoPVZ/S/Y4GTUdv0W3IvWcgpMGt3yJAVSagf+BO4WGa5+jcs3F2cRzJ0EknrNX/hu0eIccEXFvmWx5d0AmNtjmvp3imAnH/6vWb2PHVSaVU0xQt2stoK0AzWUBHEmx5CPRQXuYTSVPzcQ7gteHawFgkaJbRwclYFNVrYGgYPt9t3vo2AlcvPTL8lFXIzfK1UtVGz8ME16g/cJ9hkJI1/Yv6Vw1c55I4AwCKMkBAnGXeHEcJ3Tl61sn8nj8LYy4R0MGAs8EwoUJQdyPq6YUdO6jnkf2Xh258Nwyn9mPbN/yOeorvDDg/1SPmBW23Jz+EUmY06p9ZZsHl1Ei6uULKtGrDB5dKVSJv2YrQ4S+c/yVvarLF+JEMMFrGmz2qSfo+DmVlCI4rBd3D3lmxFvSjKi7occafRMSmff37nZxMgiJIsEst7b6kMb2ZBB5pg3cwrQoiIoVTj+cYV+yT4tGIKVWbluE37/3/giZPBlIk0c55MwFb6mhII0MyvdJXaxv4yjinH6IPNSD5MkOrDLfXTMzRTV+78BoFU+lzp3NuDyW1zssCB6jU67shmmUUjhb7yWMIb30ufuEMm7qMcJ5ETcRiqcbMj/BAUvC+Akp/cRjlC54zvXdr7sQ6BgynUAj7EmmoZdwAg3gOQwhfl3Pp0yzctTCplwJjst9p0/G6+5fHim2xxfFC1VffWbT5l4Z4C1jnKbgWtPC61zEyutrh6sWomEcctw5AOhk1F/Ll0ExMJKPL6fE0FHk0rjwSrQ0AiH06KGHOlDj4Cqju5FhT7ICzs2jKtkehhFSLn1Skay7E6ynBNSG4FhMlUdhO0o3sGy3pkPW8ZRynsDzdGC4ygU5mrnnWLxMf7latOEcPD2YXhAPgP0irrEVXzO8CA==';
  const _INTEGRITY_HASH = 'cdee2103631518394a0e4556dab1d42b84ac60ca556ec3e7c065834acba9e694';
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
