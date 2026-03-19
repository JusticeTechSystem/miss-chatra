// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JOZYkTTWXYSzGt1Ps/Ue+B+KQTEbQR+im4h3kpPpPO0qCLglytUEZF2phs5Gefj8ZZmvir26Qk+LDHZRcaoeRBGCrZTltzfLQMNUckX9SUER5xPep/vyN1Mn2oRRkfylX/GfbIytFzwW/9b3K/yarCIUGz9fWv2Ygme5EJfLhzl5Ivi6CWm+8PO+PQBo28bPHhQ7yK0tWO8YxH44x0IH2XHnfqdtbZkQAKUaMb7UzQCv1jitDWQo3Ce9g4r9Se20lcC/y+YcHor0WZ2zo+0nMl4eNU+aaaGHySLWaDGFxCQhSH0AOra7NuaGKnTydaoB0wLbgzo0O8wwvU9FwfarHx5kVB3WcoXhrV/pnpiFSMkFOY8GFM/lKrir6APjIYiqlh5E30Us3BmJcymc9WYE5GTiY2W68cQNE6oDqCMgZ4iwpf2MpqGQIttIhsa+l+eg0k6WVJahpfpJTtb93YeTYYJLOH6gr7zu8q9EoWk42bH77CIaQ36kETVHoYz4LKg05Oqn9+7FlWsleABy7Qfi/g0o092biFKFUuygsi/WG+4YUt/Ttu5y85se0+03hbgpd/Q/yLj13Eb2743U8zz0T4xxmEWknSwNpGEYug3LC7M4q2eyfawc8TDR39/SUQH7HUOUNccbASpRsjozSV7TEQ+ZZb04fTgg+8cbgby58nP4He7RbqnU1/QKIATi3I8NfpEs8YEH/iNGu0/L4iMuFObRZejT1c29rqXd8vEFweJcaeofOEFQdSQTzXkY5M86rwXbmuwSp8cDdldOLPiVVuBW2f1HG633oyxNSgHe37+C9ERdOSv0lLnsPoa3/Mbc27uqe2bogufNWf2cKd4N/TSCPgAkIfsHehtsyXn2jZ1mUfjpJVFQCNHm7EgRQyMr8C8lPQohe3HRDUfA2az03HjaTulPm8waSYX9rCfD/eZSE0uASkjd3jpQvYsuRxGkOuhqoTd/LbLs5gbQXf3QfUK4nRYOB56J4sUnzx/g6R4AFM19lNGzOrjaxO782/15ik0fqzc1wuK7/7Gcamk3OJzxgtmJpq1mif4z4JOfENY5XZm9L0DKL+Ih68Y6jc9uLlAkYOdTYcF3VwW/vVDEnmMScckwhFiEcRUQ+IFzTfy4+5Q+CS+9YTzMKzW8n+jcFqGcC09O2OdMW6Bbosy0wqRVr8jn/HOsu2uYcEYjjFDRyBxgNcY7dS1RQ8i9a0sku76027saiNMWdmW9XCW4vSJe4ZUelOjCuEGZO7QbbQkOEteIGQklbngqA5/TX5804Eyz2CAYioHamqZDjkUsJ0piRZSqAN79BzNF7k8DRX+b3RkSNMsv7QPsR1BsyeRMZXRkWsp1yUgxm7BhiLNqQtVd1bOzqoNnEO+upE/VA163/VJVBhzxzom3QSOX1t9ahCNm2qWdzuKteBINMgzrvDQIMY/W42MZ37+PMEx1Pa4ED4HNHuauNET39XuSJdfkdqLRFa8TpYR1XHc+4mrnuDYrdi7OyPR+yO8fTYk=';
  const _INTEGRITY_HASH = 'cf5b4a009b7ac7969bd8b35dbe0a8dd702c82953062b36af0022601820d30ee3';
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
