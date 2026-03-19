// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bAoPrPR+fLOKbju53mCktoQao8VyYLxJfboW5CHuaUemiLeYQbDKgifhrpsMz5jd2HRrXrfQ/RhCLMBkt6zehQPNe8AB2ROMIMJSkpJgXgqxCuC1X3uJzuOtydj0HEKIUBka/5QgcwpwYfhvP7CkOC42Lv6GwJYvlavnO7hDhlYDGvXl65SU6GTY2J+qCtdjSl7rJjjo2sp45NMAF0+gqAPrsznYxVyu0HqVlWf2kGu+HVE6kcZAiGrv6NWsvy7CY5q83o7uKhOHB3Nkg+Wj7GTJdHW4TuasJJ9OPBBHxWqEp0lhkWyBseYgY36XpdaSWH1s63U52osb1hOMdG3VIBov5fhwYHRNuizmc7pDLqNJ7C2ucfVC+wRplLluvc+1ArbguHT68h8+kuhbmRbjMezyjcWBlS+d7CtgB2+t68V1CqvAOWSMO6ONXgxCCg5tmX8HIeGKK/Xy/q2U73KU2SoE3LIJmxN/jWHra/U2ACFBty6URxhKprUAHD9wlBeJGQpFsRNF3OkQqYtAFE0qEkU3jqeWFrYRx+TWgMaljmNZqe6kCSiSJQ/+TBQe7+2ESC1qkJYupsXO5YD91ypGll/YB7D0CGaazaFDnGuGlo1MB7RaNVN+IK7YYCMy9WBteZW9RNJQniAwp5vIqZ/MwoeivArF69RN/0G0fUimnnw+3XOz5hRSdYoHqIZFJtdCRVxw/EIX1Ss2sBFviw9bg3Hx6EIuHTkHxUv/F5cl7AbHfoIjxH3TOKxa07ls9pi+Ggn3DPADHXG1rd03bqTxLAFg5nbAPpJUg4s/BbLdnZh/bt3Uzkap3N7i0vQqtVAktZPLzZkUY8RNfOlyg8WqDaS2H7Wj4+N/N0quoLkKL3LKov6AvZsF1nfx24b9Z6O/4YckDvw5Bxac6RRUBNSsnhFcQ5NqNsMOK1YSLzG1kAb/GS3l7DOAAIV6OKe/wk4LUyPqnLWdkyJCahHenZLY+FsWchlPqeNLLOz/tOceMHfliw1QD/0OGQKYAd53a7c2+GETrG/j7i0/qpWwEv5AQ12/Hmg1hAt3vRP/Ez6l3EBzexvxe+0h9JmQYVuhnodaPiG3BeQlx8VuK14fxPQ3gNib13DK80tlD8chbsTgVYpb63szC8fECN1NFH8hQccevr4grbNTOPy1fB/typoPK3W9lHZaaid4KaoocsP9eKUAlbQL+MQfTkL1FRZYzN5tNFqoH8rb06OuwSw32v+Da1PbkcphJDaQO26bTkVIF9UCAfsDnmF03lga3hjr/uxh7uvi7pH/wbkNgQdLtFxJsJcuCq2BL39RwFbpEx0NXlg44igAnXbtr9xGQJnzobQbKueUAxCsvWnXbEWWdDIclY81Xk1rA4M/N8WyHyhR';
  const _INTEGRITY_HASH = '5c89003af90ff84548b0cf1c37c41678ba8f7ecbc95687a2b5b113bf5709bb55';
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
