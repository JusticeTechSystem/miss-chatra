// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WeLo1WQvRot50yI3r3xQFWu/C7VCpAyncAYCBhdbf35i6efOQz66hr37ySy3NxamiQwCYmLS9syHm82KQU/FapwshZAzRxUoBFn7Rv7oSnFdCHS7hH58MMnYOsju94HkLJzom8Cqv58QkS9zq6JB7wxQguerrE50cJjIi1DI5kC2Vj6INgT1SpfWpohYe2OImBKhOn4VS/sHu8XqV6BdBDEInWsONeHDccLNbLA4cMmPHiJfHO/fOtCN6y+loLyO3gU/0tlCevxHyG+uMSvAd2oqlT6rN/mwRe+eDqb/MiZ3CsexZbBgI9/ac9OpHt10pPRKIAhvHFNWpu6jv7KdcVM91NemLy/szhZk3rq6j2Pj1/YHXp644K4mJf7KHWqheQLvUkGrqna6BhJcfntVrcVhMVZVw1hkg9TajEhCFISVzDXOMQELWLLxl+/WXjiHWIijKL1u42KcZQrjnk5VRfiP/G5pnNTaRbc0GOsG3RxoUCEp1grPLzHLwhEF23lPa+RmDAU9FOgaxFJTrQhDTS9F6lCZ1lPfk7N3ItwpG7WeM/FD3BTuPiNGvmf780VP3O+Pa3/97CW47IIIQ6juyzUSZ6205SK5d+F6L447EhiBjXfEOtdHQF3XzAQ4ivgDBpyAp4gsrL0u5KYEoQZfgBbBQcde/UX01i2tRniOxZz+1anHAAxS0BWcQ3kKTO6Y4qQqWaovZjKTW3ytlpEtBunUtTdrYhll9ObPz8RIuYxZ16Pj1VhyvJdl+4HYIIPNH7aduYATnG4N8iVag+gDMgsl6zVky/hiaH0bPQp7Hy0bgRhxwggNjyrYaujk8RH2HYO4ueey7m40X9uhW+Ot1/jht1wfWAVBEGBqK1YTkoPQ3U0SenxnJkYU2GiuuCdNAHOl1876oQBwMAxvbigrDkEwi9/FwByL793/tpbKR4IsGVFtb55iSwVVKSaZ2F3Cb1garwmWWp6XvAknJ4w4/1qBrs1lFnRnuippsM2/FI+aIEMqwYrWROwA7D3DKbKyjI1MP71RFTRAKzB7zXUN46GTPRDthq9C2Hy6QEI8ouMpSlp0llht0IZ12dIzRXyarM4JiVlgwnUHbNl5qLxNTdVjGArTh/1IMCHCQlbPqBz/ZcqmTZneO+Rj3XRCTbiXmWwHK+yRJ0DiJ+Pr2k7RARDd+l7opqq7Thw401094BpNmrzO0TibuwqGwUfsyyIk+yuzFj/rWTg=';
  const _INTEGRITY_HASH = '00e45a30b6372eb71da648b37e6b4882c701154dc2772a04d7b5c28dc18c6724';
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
