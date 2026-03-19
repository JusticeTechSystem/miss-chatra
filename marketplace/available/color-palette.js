// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+/wHmcnm0JtLNVESM729snOIECIIY2WNEo+RXpE0I62qdr23P6AECnuJ36hKmzO7bJlXn2Uvnmt9ifaAyXlZat683mWY5y+hlGXFgzIPC/vQ9YZSgu7MIg62u4nR4GtmcOUC0n1QgfZ/sgEHqhxbNRHmkCtDcWSC+6wmP+CJATh1EasJiPeQ6h4EVO7NRy/mu0u6CVTXr+y4xk6A3kMHUjTQ3lo/t/bVHo2HwHp2iQ2maVESPBN/a6wK27zUQt5xJZAFkAHI0+6InVE7n+nLVR846Oh4cOLanT7iaTyl/fOW84aJbrvT4lq/ywUa4WJdWjZOInh52KNvJjOeSeBnD/TNZj5iOIV5tJPJNd6zAw7PCXLHejvxsGfA1j7Mn7q9UvCoFC5r/Zlduw6vFGZFjOB/aTJGlHAWH6gCQHibSsYw5QcqGqWP5n8aajfJ1cTj+AuHHik1a2PEpO3+1IyZ9wEQcIouTMZhCMMZIcBfIh9E/nG7S/Acs6R36+2vvY8Zexk4xIbBX7ugH77aHnJ1itp3s6endPhl9mEIhjU5DsV6QbziVZubVd6nOUSZF3sWHzb75pTNMWITbcpbYJWZ50WCFsRZOHEvzYZ+WoJQBgHERe6rpu9cqMC0FLpDI3DiuwJhunjh1WwumEh3YK0irtPYCb9Y50/NAsJAQV6U0Pni58vw5wZj2pkGzDvzisQmSXk3/vyQKFo+9i1u3llXJaXKaJlFlqLYg7dbvze1DtyoWyCPl7rNYvTUDlF0qB3pNUkqNJErNpgF8qJRqomXqb7uqWuFRxUSmFFstE3coRKYFu3ZrGmfNOLZbuLN83WQg50vLvs1yiNUYBzIB7QUgjatXyKizE59isnrDBrO7MG3qmlQ6m7EY0k15HuAKjMMg17wCSQlcyI5CB0TmBUSQFOjWPOHGxyVvr7Z1koEb7j8xunuB/iVD4rdhcb77LBcllbPrzYaYiGtoeFZua7V7RkvTT6QagXuuO8lxjKzuyyWcVO6Jy1SRSfxX7TCLoruLL1w0/rOULZZqwBert5BALk1d/dKXFOdOQnesDP7phVUyc4a05K6eoBFYfH7zPy/PyablUfgX7hVUwE+CGnRNbLUa77v8gXTTI+HM5tEnxT2I0HMDvjjGNVl8V++fm8IrTfmEbtAI0CaG3qrzIMo9ln/EKsvwvVy650vEfyo4F0w2LKY+3L9T8Q4VqNkdMkCtHePXrGEq1d5EVygQ7TzgaH8S4e40OkpI4Tg/4F0xwr51Abk4ide82Kpulvy5iT2b9R64qhbe3fCl6OeRK8WXzGllBsFm5b9km94FA/M8vxPkoKWElPQyXBsBwVyHEbkJK9TMH1/MBvj0KDz5hP15/2ybXB9arR0G2phwy5ydRnhysKIXEW2RG1RWyKXfzzKNc/V8D7uBWNIfxW8FdnZt5Scn5GqbXAfZ+OccvTaweBsBEbFFO358tmh8iDGOWV57Mh7RDr3Tp2qT5UfRYhSS6jPD+HVC0eTQe9m0CtJleqxtX0iPWGFdzd+ZwxPKCT6/TQYCMWKFV3/68z8b6+1dpA9CrpDxY6oHiwSGziLOhWI+D+7L2G4IZvXOJCyw/cp7Pxk';
  const _INTEGRITY_HASH = '55807af4a063eab545df0cda52b692c86f592379211398ba4b629e10577bf88b';
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
