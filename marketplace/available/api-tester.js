// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8a4vYKbu82HTm+tbPvgR3gcq69ITo4jGn0vrhsGp2gcoY2+wRjM9ACTCaQpw/aSK6Mu7ieseEhuKHKdo/f0DUi1MydwOjRsILjHVd8oc35dS56GTk9G5pt0/L2u9IRyxlpCvt15i4OJCYAeBjvHlj3F34AupJ0zpaDoNeTD/nekL5y5qLe4OxgRjHsBIjiVw31xeOYFhj+tRMBg4+nTXud0spbdf0Gq2lES2YHE3WkX4yJwXRt7RxuWlFpLztnvssAmzeYG0dPF+p12JYA5qX4od7sav/TInk2GHmPt324ViURo7LEBv38OzgN8ENo3EgVoFZV9+3WxOerAxe/Yn8ijlxk8ep40k/p1CcMXquT3dPuGjFfeVSCa2Ioq4Lpe9rP/9KSw8oA+NXrNrgXpaNKNy7yKKA6ELAD7Z73TxJb581NhAMnJN7m2QstxxAvf4kY4XWpHv2skadX3IlIxr1bVnNxOutxqyVVP69W+HTPJKP8sS62fRhBnU67BsX/QRivH96GcSXRIzvEl0hALvhIxJ/zbVFsMS0ZNoakUxuVySizu6wWaL1XR0HGbZDwNizH46FnvPgrA9edGQeYLEerOsc9SVzh4088zarZ92vo4YvTQj9pj/M4DaiXyX6CAsa7XqAnV0cZvwnZ3Yvt5zTFXEWlWzaIs7tGjk7moc+0D6DtN61mRVmBwUIw5F35gbL95GRwOChfkjtERKuqZLRHQUJYbprZs0mir8pze5DQ8Vpk6EQ54qNH6/9BFaAIBekvl8Zi2yo7dMsnn11GLasjNmE8RSVgXoF39rsikcGp22ILjm0mZgFkeSpACsPazoH+ZiF0UMY4bC72Eh3SGtWnVnZKr0ojHtmNHTyMcjC/76LDh9JXmnMKC8gXQwf2cypCmds8Gs6DdVsWcXI1K4SIVIeb8r+cbAEpS6JEf9AtqHEy57rnAGpjQqUVTWSxKWv8cLYura3jHnrCs9Cz4qQHxGCnsKq/rz/TWRE1FoGHZovEPW/4Q6JWwjpdo+fSok9xuGdY39Rju/u8/ZpjGe1jlAqTtYtQmZ+pVhqaifMxsng1TfO3T+nVf/hxUYgrN9wwb9mPw3nDk6HAM7TvVBp1jblo2SI0IKYi6AZqnGnQjO79yLKbucbjsQvZaNY9qgjnpYkgc3UR0uOqFCQzWfLHKSTccF5qQ/DoFOztRxFRtSaeCmsmtAn42iyMvRUGtVs8w6kI/0TuB1s9ufd4IBlEHXj5CJQZp6Acwy+3l6NehEsG9a9wXm4HcY09qLz6Xwo2wxjgAwr9To3f+kItPraEuZXlApjTdYlzN05xy6nbL5m7hM6+Qu5HXdJUd4wyD0nlNl9nXgwQU+vHfHy7BhYsKnVdycN8j1OvNJZJUqa4s9KKBZlsSjNZwwsGF03Rqv7Q6qxICrJDEFgFxiF+Lc/uxn4j8uXP0hXK0DlB/CoNsFBtIecafnPaDsJcamyueLhwdK7NZ/nZLWBS5ZGDwadCHxR3EhNkzOJ7J3oLsQirP3HO22nKb3OrspQPfDuK2ME2I+AHfbWRZvlMLT32Znu2PQnxBxcA==';
  const _INTEGRITY_HASH = '3c1df0bb8e6df04dff988d1abfc2b5e00a7395ab9561c0e19e348bdf842192e5';
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
