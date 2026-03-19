// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QVg4fP/ud/ugzcQ5WXGcGiIidewZwQ7BMP9z8n7K4UDcciVTqzgrciy4iUBY5fTwHXnMG+mjZAKus9yH43j21DA2Pr66tSY5aF5W6xaumoD7xOBZhbBmQ8oYtW2LYKgyuYn9gJGIxcNKCBhEn9xjPNgSLcmPfY+Nbx+FIif3E1t2+8SLD3/zwVEPYfXngZR7CnisaVpWhpDec2Jv7r9tF4ACOmxbUJYrJrcj/daOmYaR4SB0Crlys2BytXf6gu7Kx5f+gDbmbBMRPnJUVMNZKXxzCzusQsbXNgz8ucgX/nhCzCkqloQdqV24zBZ5sGy7ioF9ewq0nDjBr2MnA1jnzfPhwFXDfebUr2ZLYRgrZU8O9vAf8oAdRGazaxRQOote34FbMeNTQDo1im6+0wD1P+3G3ZQc1R4GUZqmL1jusVp3YL9gAbTgN0dYTW0kNIdBPBF9G6qZ9IODvws5muXN7QE+S6jCJbdnaKyc0I6dLo2w3uNuG625imck+1c+hXZlWiOPONkvOpJpTNz1NiPGpqa8ZMpUuIjiebo/v78MRjS6rsn84ytPxxYXcr7yh2/MvtmSu0wOBoCn1BR1tehX1wXNaNNgP/JKde1QfX0zDIhdIhFBijDyb7KAJZzDDcGIBSEMZIR1a9yKohQvQIskIlnU//dqA219hJ7riUEN/TpVNUoO4JYdK2LVWIgdZYGxSoVj2G9Y0Os2TsQmU4CR3daZn47KHjwBFr050+9MyaKrOnPvPZ2BjcBeXYuQGsEVH8aMPXw260XykuwSceJo8Q9f+s/VxW/Zgw+Mgnii8v/J22Km7OsX7YWqFHFkWL/XvwNYjWCXw2qW4wXxY0pE/kkwFSE8WOO0+cnsbjAJp4ahsHKOVLgh4f1KFG1emOmaAY98tP2ujMLkL77VEHFB4DMAJUL1CQPGBD09pZth24lxYZMiFFhFtZBVro9rH5dqBseSoV6MxAqOAwghTcJxziFJCkhnDJAM/euze/5GfVsBxrbk2nJvpgQL/alSK3WwS0ZxbJnHb2NKp1ewLw4cMRjOKCH3xtDjVZz4is0/E69PlUNIgXD6VUGy0RNoT0lGSOAfl24cuzhta3WaDidr3KsBz2IZLv9bxgdjR+uGSpDsVqZpBaPISh2wqPcbX2iPFFvnHoLk4aykT/MCc2BHh6lVgVS3WqekZFrLtdhcXQjO/zcwHu0CatSxFU+480+hkU0sYUh6rX8ucqL2u218mfNrxSQ/ErWLN7xKJaODpBmiynN86jPozQaLQJWdP43MQsOY+UW7jxH/UWCq5kQ7JmsMWa4jXeje5mvFfrYXgjb4DXLW4L7LQNiz6aqlhDcnOnX87GaKlTWPU+ZKUmfQa8OifLUHC4DPlTXj2fSK9JfXgJZvMXrv3lS9I5CZN0nezlO7GkKA1/tpHHGD';
  const _INTEGRITY_HASH = '159db8c6f5c401f8a15dfc8acc65731012ee65b1527baf38cc2b53e063be0d8e';
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
