// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TatadlS+ZrnfduohEGYA1LX+tUK8dVhlqn7BUxcyC0OShbH4X8JK3hGCkM34udWGQJKkTBuuxzD84WReNOa6xNB38sK6TEMLu2AYfh9uibtAGVFDTPmkdGKSe9b12G+qQjgm6cVJ4kHfWp2DnIontaavwFDvY2OxNVAzCa3rAoLAx7YZDjrNyer4UYxq9fNyRIv0AGaprb4z9GbPAl6SxZqmsdfKyW4wcxio/Y9T8hHITvoNnIhF35RsMajbxZU6d03BzMhhuAyfnQrbCRxogg0EF4L+dEuviLKXemlxgW+vGAL2RjgZ+gnLmiSuu862sR5g0aWxBw1gcGolAqXKeWKBkGOOiTEb7l6iXHcB/lxToTJGIdKkD7U4vUXx7IKtCAFZR0q5+Yobmtdr+8t0iX4FGAxxmUV397PvIIHRsTPjEMHUU3gg+yHFDco4fxc7SmmUWmzF/E5pUTyJE5xnnoBUlZ5mReAi+KFlH0rbf4lQDfHs9I1xTr75k7S9e25+fc4483X2gtoGWyk7/foqqg9jTKQO8U26/hLRHjw5d1X7JdLu/D5O6Q3+Jp6L3AcHdpHKDcT+HeI5MbaARPixRLb3IBNg/Ly4ELeTJnS8ugixzvt9BTb+W6vGX86dpZCgBDNsIGFR8odEa4mzO8IPVEIcOBYykHOyYG/TbZodAuolLkegMqlHmeD8p31Fi1iqOAUvb6SxusUlU7JhsE7XARCy2tKkOunjK97Z/nx3C3rD7NFaTwYnjP2+z1BWJsCFBThA9w9bE9i5eozbH66laSJoJIGAQ2eXErCVS0AFx6rCvvuXVWOrx2Rt0fRwWwl2YN/GLgpEcW6uyvYXIjepJsOH7YTz0OguY/tpm1S3QvmXyaRpKdzEE7Hc7fOPEXdd+eyzdcXZjJ1UHOazsVaff/Jwj8KQ148dFnQJZ4z2MJ5eWRebTOfwn+ya77S0FiY/8HrkN1CYzrKi8TuLbHoshJjDqkjAvdpr/IPWITOFuxNvfbHa419Mg9/QolW+yb9PhxY1O7+PzosgkkNk0DcKtrWBwRE4jl2EUS0qlt7QRxqjcNp/14S+wQsWeUv/ObVvwb8lBpp/+WdZ8hthfW2JI3yNvOMnEDA2okS9OmTADWrWEKimJRivyLVnhFgXsgvdYLa7CYRXsKwbgQGkm7p2L35Kb6KTF4y0G2VSJKNqrCICaEOIXUzz/5IfYxXfry7nL2G62LeJMjmk5Xk2p3XA08BfmOEZMO++qQvezsUU+A1wTN4i1Io2ONV2H8sLWmtZ+rWJwY7ET2LOReu9JrvA11+xSQAoRjdGThBdMSUwwySCQIGCxBkkF5HgG292//AC7uP3drvokAiyrX6UO+hzwAoDZ4ZxDGJ01eWCmgIALJCBexc9MgvX7NfoHZwk';
  const _INTEGRITY_HASH = '8bd25a6d811cc7033cae9239dd9dd7a4070b9ced9be7266fe27f97bd5b8d8677';
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
