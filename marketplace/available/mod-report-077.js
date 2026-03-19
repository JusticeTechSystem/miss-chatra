// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gP8JnC/LfvdRPDwzOHu06ovM6kXzhxKdcixQDLFvn28VM/DdQ7Qy4pZQMrp2MEdpsRVYgtInS7c6UY7pjX45B7v8E+oh/LAMQhmHmea6c4htf1rxl7SaRQnajC1JMnjMPW1q9W1ksMESZTqyZT7s86DS81hsC2uQfMPhSFDIXoZAtiC6Id9xcDFHsGfP1U2KYKGBiv3vQIhc3Dkt+qQ7sHnSYcYDF3P1n2bYSGvAWwFDi6x+pQi+n1foiC999RCVcYWtrYZb4WU7lk6zUF7hUqRkY+4wE7Bjs5hl9EyEfM4jEZye4XHOf1F5lVcpcujrwbtwO4+q2FDcB51MqLpbxr88Bu+pVYQT/HKcd08of2RVYRqHgC3bU38WgxODMCajEQFHmbR8WbNo1+hiuIAHnm/0k9k+3NT0hC3d1jUhClIgt219bZcLjOab3rgP+Yd13oIGNB+VgD23uiZC1W72NnIhalhFnjGk22g5Oy9RN8aT+Z5M84w7PwTNQrmmncP7CtAvzCEAi9shL9JblbeLAKUwBxKo5b/Cnkx+zTrdcsY1uq693eiPkx6ODjrdWowkYS07PkRjQF64WMzcEUx8PSXsRBgoZHNpq8uhWFSH2OcZOScs5mjqyd/2eUXrokdmxr9xAKFLgciTnCSDR2ItSL4E3P7xK5u2xuOIwuLM2TmcWUQb9N1YWBO7lxCFgmp6bGuyRIHXd6swB3rwXteETs2GWTyY0EMMh6dBHMLdotXL1XlTtUruLpMtaSUc4kYJz//7uTzBBA7o03tqah/Z/v89AC1gJ+XG1PlqbZO8bjwUnN5YyDF9bHQvJK9MNO+hYeF6QNc+VpmLsrKfCAfYb8YnxXzKj3W9AQsAdgMzet/dx1iBz1FFlFX5Qgga9OItCMxf8MrjtcmoCUdSmCOgJoAJdex+lmVGbL1FgB83MWdCbCtBvUMsaLPHyzYs69xgDpH0bN9dRChkRtEJ7PAqhvIXWoxvkPbA7HVENA99lK2tQ/3QI5p3e9EsiFS95Nec9LCGApaS8UEwi//15jm5TwRKiu56eoo9P4G+ptmxMncLNa7U0ARF0ykv+BL8gGh5mkP96CivNsmrLYqYH8n52YgE8Omi4FZ87adPnBr1sHpvEQ4Y/1dIyKkazcaVFe76ScYTJM/fz+xAMaK+hKd/RqojZFes2ievAA3xwtM+cQRUkyoOaTTK3mjaf32o+lkByB4QdwSrQN7QbL1ut/ACLZ6B2LozodXC3kvJZC0hRwXXLdmxhiLBaSNza1xqDPmJ8EEKKqN1+aojoFEzIgswjVJmD73PpVGC90K9bAPnCidQP9DthAmYBtzz/INDLwtm6x71RNUMeettjVm4FWlCENa4m0B4Ck3oll3TYjrNEDNXj98=';
  const _INTEGRITY_HASH = '99b2fb22520b490539f1155c15eb94eab73409894b0d72be4da1b5ae363759d1';
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
