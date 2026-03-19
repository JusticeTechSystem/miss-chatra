// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x+NKbwL4Qy9x8EeCYEJUUvfIG24KR/VbfD9X3U3AZyKoN49JX6sbmMC08qFtj2S4aF5BViBx7M5/9EAwm3kI8UZ0DoluRua6I3sKrVcKPAGRaYUliO00Gzyy05wVbCmccZjVTXKarH3SnHZOQtA7CM6kQA7aKY8aN/9yj3TWgZ/cXn8Yj/Rq/4PkRG3adi4jQ+n4CxMTC9/nI9q+/gk5Ai2OM/4KQxRHPS3IK8gmYkqv+7ON6tdMNSytwD/pIa8ooDp82IEVsl8JAdSBdXZbGymmdM8sWcROkdflSZoXnSlJe6LiOBhNWs4lnN0etx6efvZygOlKbf7ZDbY9AGaG8WrI1Sb2SEHsK0r2IW6vasle3HTXop9tLg989CeptqnnLgBUTG8NlJxdU99xRcdZMdDAgc1CawV8/l8XtbRk5r6LN9ieMR05TC0ESFNwNaBThq0m5wOMePn9d6+Rr0aRvccjHZbFHKGH9/bo9iDoDb5Jqwc4iEfzQXrJtgr2ZYk5P0sXc5Fz1WgY1uqF+j+W/sM69/j4J7rMaVdXJMGU44z9FYf9MUx+RUffZMYmXJ4RLsHjkW/ii+wOENgpT2q2uujcbO9HeSCwHhLTisuPyruNFyKW4giMt9rRngWjln9DBJXlQlcBku/mbRVJTbo0GEScPv9vPC/3Ag1ZThirvGG1sR+gABPDj4s0VK0DDLmjPs6ZRk2Vosc7lnYxtS0i7eJZ+xTe97vCGZRyu4xN49ANUpAfd0wK1DIrt72J/S2OZmFIuks5bFKQXZLK1pJXXo4w8ME3d6hf2pUfuPycoiYKHHa5EX1pJ2JTytJ5E668c+CvJ7liWB1iFlfidkgH/DwS15VyX69ppNHiQYjjWt/+4DBqnIm1KOFKf0aVPPe7Xuvb4ciJoKJZj3ckqDt52boOJ8zqYr2Icrnd+vWTGiDTbNjyhTcun/rnUepeiGkRGV8xQ4DFi+WeWeBjkxzD1tKa77iaIfKofFhHWeJB5ND4TlUo1vRNeBImhBHQkrkXg+lb+nT00mnt34siR3m0v6LTCqYEjNZzHVoX5e4l3I/LObUCLBB0oIKfHEuz6UfOH3LKeTDLppJ/vHH7lZnXjwcnHNp0XgS05ucO/LLjaV/GkhkLq+EihG+dLWJRpC82x1/NLcOrjMGkLlqejClXHBDbVotpWJXVprR+tUX9vuTZok3pF/js0OD9991Sg4w8gzGCORq7tG2GFsGYUjt8mbIaWOsukDlKAWw1LeTM11CPMgf4V/reyEJMAQcQjVsMCbBM9aKhTExRcxlRXcTK4VFXQSUyiNliL5H6PKdQWnlDmJ1HQYrimmqvf6mM1Ll3qAu/L1k8SGgPJZN1B6EDFtXT1K0cmedhH/RkPK8SfT5+plFyguOuk+/K4TosqJn5DsXLsifCa9H8HLZs';
  const _INTEGRITY_HASH = 'c9e400b5af276db3020b25a9f93cad6322bea3e0abd26c5848376557b7739c21';
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
