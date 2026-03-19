// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GxVmjEmoe+DMXeVpNsIAJCH/Z+P/WV5n6ix4i4YgxoOGdZ7Dvmv4ZOgBWGWE4JdtmX6aKHB24h4eRCsLvXih64miDkKyvmZ9BBQt7S1iaSkYP0/bqIoe0Slj5mZLrhZ1u/CR/a+RFy9kp5zLgF1X7CeElM3HcU8TSaDhLc/XT9iYedl2+XcyTcg8+7opmQURcu8Qg8ZD7YH9mZo5eJs3dI8JGhLWBJUz43hI6RmorskSeWUj0Z/eMVv8VkPvadMbvgbIGr7m85GBxrG7PSMuOM4JbRNPjvvOAMNnGyQrbFLrlA8QVedz1DTZCl/46hVo53eQeuOA9NkH1h6O+RvAWXgLdG6mtZxXbr7h5marzTQ+wPxsUJ0W50NesWMCAhrXQZl4XCLViHklcmEEscUcLgdgqRi1NAr0RTGXm8H9u2M3eKeUG/xNx8k47ssAk00Ru3/vWDSFZ1BLsjLHRTTwisKBJSBw85HC9Mq3H8pvOu8tlyjz2Lh+Kb9nMmzNGFF9MnofFUgvJwrjunDUw8Tb2p8hbUTClsxuznhBeGH1Oze6Ab0M5D1n+clgb4UBELw3HrqIYbaj0G3udv72cyFEDkUhSVK6IlGvYrtoGGvAm78mEnEJyIxWXVCK6m9/ABIEwcNEBv2nNxFGzYYP477oMOiP6LbbzJfAv8aGJlDlzu0ZevZjvWjvDTbUbjaBo4kJAEipOe1ylAMuzz4tkjn86O3k5civPhznXaGUtPzOsPvQPHWcrkSL/WREB8WzQbd31UKAO56M7eG7mk3+B6g8NAWgphRleoGaJp2bvMmR5WB7yAVi31VNiaf5/H/aznrMG2Gi3XIOaNQ+B0LHdbWNj0l1EQv6jjCzzkQbwBuNyE6Ro2hbXa0EzE0PaWOCZq9h9msMlT7MvCe/GEP2qmzLSVw8wa6clMfmxGdmWIWuI3ERzUTQLpAY43i2zW8SQAmq/876lubwObCOCUmDJCy9oi/NZ2ebjDfuFvSVl61GlVvj0M33IuHPUIjUWhUmPj8WplEA2ju9+YCs5B00O5Plo8lp1Bp2125BNwErRZJh44WNr7b9NnEaNzmEzTbwKH690AbidR9DoR+iJpsiZ63bWcQGa6G7TF4z4pnWfAAzyA/jGlZO6eXXNpHNk8JV9qfgT0OJWwZLI55ejq1DN5Orhmu4FkwabtV8NOtdkDrQyYxHHrMCuGJ3yPfL+hZ8Jp6tNY1pQ2cMGq6yerToYmu78HdzH5XjOmZ0uDXXn+FDtE7s87EqDh4RlfadC0TnuNNsm2xTThseTUaAGjI41xRXX1r0xzksTBqWXelPcr2TWBucsw46Ad9G71zrerlYnNIGYn8KpY5dq2NVeyMFT8use+KMD20BoLcjnuoKAKAX';
  const _INTEGRITY_HASH = 'a4235d7b007185eaf7749a416dd0f9bf70a147016516ae0c4fc7a4963f96eca3';
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
