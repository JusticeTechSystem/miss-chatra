// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sDgWjxnUKFFaFgBmfee98ZIpPcfv/SAx2RqUPO5cGPVNuxvWB/8DlHFGop5ETPcYwlOizxmD39NMdVSQMers9hwJBXaeirG4JZuImb0oMFfcjUBebTUvAcuiHunESPlEVeyOFXhw+oVy2Smf51xZJcIbZeqyI0XSHlwLHqFKPY1Cgze8PqFaFTF6lZimzdAuhqns7T4KAaHJp3FV2xfYWa5jCXDNVWw1GDMsI/oAUT+DHpf0tTc1dXohxTgFpp9pSls0TScxxzrFChooYbiuE/gYdZspaloOBi8osas0zktdUdubmc08uHndECAnaHpVMvhT7kHQCWVomUvdrayvtW/PvKFt5ptq/yCf8sCqzSAbIHALPvxdMjf1LNDNsp69b0MT/HW/prY/4pFPsiEXjJKg4LyRr2SC8/8Tsi1o9+wVmFtxr4TnMU1bBVSmsPD3KTMGl0jKxKXELI5PB8qQxHThYKS5Efoi6+998A1zH14lpTgMtw6MhWM2anJUz5iEekRfO/GeJLthpvPms0K1pmeg+l+IQP9gvISHEe4B00NXieT6ud436J/6TQhEQqpW6cac1WT5vYFSXVu5rjRU2XSRk2d/4u38usa3gCxeqZPgUO3Rsv/ZHYiQNOA/3zLY7b+TYkIn4fAf0niEfvb2PSEhAkFSNuh1mudNjrqpJRS4HMQH2iO068p0hx3xo6iJxmFsxn07LgdVUpamITyqMlwP1OjgDT80gvgKUrLYlnmMrAYPtLFJEfXYUUt1CeZlkIwV6QRc48z8z9HgdwSQk7Y676rAsOdw+SOhw8DT3GNmfBdUmMT7VJxMmRdPSOVRNFlP0BKML3uk4acsrhvvtvd9CZi6+zG9dld3iL7Am+wAbbgYD03UMl+vP9+3reFsNsFAUSDokp1Q//Rk/j+DYir6TcioBnZz5luVz8G1MjP6H6i8lYw1oM6oCAWUkNvxCDhlOz50K7rGnEH9fKngmzrZzwuVFDHaqHkQ6RbCljiPIVt60+M0oYa2';
  const _INTEGRITY_HASH = 'e74e2060567f139f7d3f5929ddf014501b0d28788cdb4ad48aefbb5b1cd53728';
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
