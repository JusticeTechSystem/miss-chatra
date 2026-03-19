// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BGsnnp3ryS1VvJFD+B4a+XRSVO9+ulLkIStD54R189ngMJakZmINZOQj2gWjbmTBCVZMOj/DoT7WiHt9WTHu20sR2H01niI6MXtfvlwlU+iDrUP+lonMDe2CREHmaVdvjx1wLoOFykZlock0N+GJHYQi+q3jVPflo2h+VD2A+3Lp/DcAvkINcj1VBBTvK4wy+TmW7r5Gssc28rnsiGNjU+utcgTuCzoOokufgbYNlBiGk7maaTN80ioge32PDKp9Zq90wLUY9lp2Kj0yLg91Af8wnh1Mf6NXzMvm6oXLBL3Am7yTohPqUEIQwbby+/pvKvVPfJz4NZGjZ0v8AfucVlTx1zA5cJQmNhK6/nsPrNBc9pTlruuq5oLDOl8InXHXWzK7rj5YQWXnAbivtF9UsN/jAh4c6uxHRjmSeYX97Gibtgga6ZRXtDDO1j5rf3GdANLS5ukVQ9C0j3Pd+Ephm5b2/MgORRPcGiSUHjiz+zKppiypb9zYSqTLNZOhiixQvgx6cDAo5xi5KS0EbZq4KgtxwCbPUpyfDFt8f345n5bcF8EUmvLJrjr5uuUuS0SYn2t/DqKZwXge6q9xuSB9qVWqfik+T9IsEzSokw0DY979FCWt0GpS4BkFYTi3EluenQRAOpezZWBuYtlYqdzrMT0oDEjmtrT7iNpnYvHP6ziifN5c/PQncyCnyIFqzvAHH9K4JUwplnCZs8At/72WyeTARpACuLU/QX3LbnD25QYE1VAq4kGm1nYW0FYqW63JfzNUWzF5jgCxXSvZMKSFFbCDWGsINSZDX1FWijubFg4tgDXDpUYBZg2sgwsy52O238xXFuNTUx2Dn9p2n3JJsw+pdRNnQSCUJyAi4vfb8Sabda3wefd1hoYz8oaQkrBI9spHzNlJY8comnTQ7l7ndWXLa+3JsOXDNOGK2u9w8QQ1bsnCvComkRj4t28abHaahvug52DG0GK2s2RDoIsGc95neP0l7ctuVbVmTwQlSNG+zZ8e668ED7dHO4NPfyfG86ZPXc+MFb0WEvd3OYAynyQtY65ZZrRaSmjuRytwJXERqmWOiZ+7D32l1opMc6a+ax1OwjdxMOuxQH3lKUJVs6wixPWDxpTWa05n0ZlI04kPG642b55BS+VnczCUXIfoDOIOVIf1e+Zly5a90VzWXOQrUV+qaq3nigX0Loe7YUJKyVAzKrJtgnYrTcq65iUQBuG0Vu54lxoMCSsipaGXpUwz0/GAvGqbpsiI6qRHslSLOYHeEe6rEgdGUxH7c0ShT3SR2RdCakQ3eH9+1X0EKOaJFPofhUgSeZJ1RasV1g597egzLf4IKmyZoq/wMeXG3geeUavlk74iDGW39UhY8kfyaBo04ZJG2q3Ieasr3U7ycafw1gtsJ9/FE9L3njn51n7T0LyYJ5ZknRpausoDugl++tcrfZxmiJqD6dpITvhdc31UieYipBrMvut0VaQQ/z7LcOtB/P94kelAB1d7GI4p/T/jUf5lFSSnetnzeh7j6xb0tNfZqim159In6Kf+2p//4Pu7SGzcK3ClgsxzPoRBGyLwzuuXVM1Ct4b2qWwiR0Tcbk+8V5ucl03ernODPJQmKNsT7Igy7It3X2sIA9OsoCy9kOBn6/RptRzc';
  const _INTEGRITY_HASH = '407764a9926ec3a3e7b830c83b50d8e0641da65f098fcc2eb48f2258075f3223';
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
