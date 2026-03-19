// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FkcHTmBurFvejP6iydEUZmwyIsVAuAB/herMqOHB6pX0ySGyLzbz5ryJjSPniRbNPWv3P5HPCUxOUZd47d5DJK/3WnZ3sOhlnbuRDZqkdHk3g/Nt3ulLc+CxvCp80DcGodmxGx1zyTvJe0bsqvLGrTp8JejP03CIPxqCoKrhtOqmwqSfdbjUKsAwj0l9lKeZ7eZfGVY7q9ki74vFbl2heOnaUjp2neRDF0J8qdxjdX483smdMUbB/vRD5lpDDbLlsvBbbmDBOVO1W+7f4Y7t+lovrDQkQTfwU9nY8SSqLtsK269MRb37b3PuN81C4J5Cg11MDPTbyi50WDYM8EeWdh34wHfPYBGt9bZ1RWMdJEFME59P/GPs6GgNX71AR0lbGqotMYtwI7rntlfcSzzIESR4Wv2twOi0nfgA6gn9jYbUbTgXAERthm5Hnu/mXqaR1/H6BmRTJf8epzdmlzxSrQfL3wT0usoX0lNl+mc+iYtt4jMyAZA4mdKBBxyvJtv4fO9nSTSH25DhK2wWGIAMWfMCJhZgTin5NJae5e2YWw0pfWjz1e5hbxkMTHxQtvhmSsjs+GUwlk5hVk8tEDbc9UZ6Zkd5sBbTwQfTL97VEreB0ZpJWxfNOvMOE6UltM2n/UXLhujqHB8zFQcLhmFdyUJ2GsMMhtk3/M8pdjgZuaf+zbU7VtmqanWdLbv8I/hlK9TNAVecBBNo+GbwfZzpO3ng+G5+Swa1iHCtdaP97oGoYH084BYteKJyALsKZYFbiyLGpWQCQ/fvyPBztcqfd20SW6328lIFIXBaEJ0ULUgGJ9GAwwszUi9M2Q9uETAz3bsdmQDRo+KcORO+vuqcOa5YHXKvtQPKhfELXnwf/Xa8Dnrri6F4bb0VCskSAPef4HG00QD6Wx8ELmqVShHwl1mJkSNfrb+1PikNoihS//stalRA087ODvwY4WqrtbrheU1NoEPzvfhUDu4gzm18rnRtib7KtKu82c2tN8w8cMpxf1Yrp8tfafv8Sg2BOGKHIZzGBQ0BmyaVwyq98rfFq/5xni+rkm22SFDzArrN9+1fI0w98AY1+Om656Fn7y7JxFlf1FKXU38Y67r7tLFYve/3a052J49Rw4gnsoULi+wW67qdABtGGweEmPd8sVL9KZw1hIGXgpOBVu2c755gU7xSRzqNmMGO3YdcrIQrZQ5jclFWt8psBhQf6EY8UbAU3uhxdktVpuZFeS3YpE0xC6CXV+8JJ8s8hcYwfkByB5quUyCa1a2v6eU3zgDx+2aU5dzHydB40/+rxJPHvMpk/7yua0HlFvz+2GJzg/TnFcF28pDEm6K7gAIjAfbw/N77t5ZeBbuh0b7NkKTzRSbkrIsC6+HZ2DnYCspsT64RKon7RRpD5E9Up+nSeA5yx6DoTb4BmtdVQXb6Y1Pc4D+aKsm77Rlucm17C03fzHgHFEzjfEOc+jQm5dLhQwCrEjGc0At+Zs4z/TUY2w8kLc7qgkz0YeEJK5FonJCWx5e0X9hipJGz70yD3mD1DHwLB5ceo94OIBoirUTe6XuCKU9UhH1VmpOYtMTKCubTYhQe649S90cCW4WDcMRsZgwY6eS4X1DX9ujrvds8yuserED91D8uj3Jv6c79llm5vPljr/QeO5gv2d5k2gk9N+7mkh8l3g7gFI81Wtnm6MWoXwkNAkP7ROaLYPpYEkLqNrStVQsSaqs48co/3+J5XxxbZyyhfPZDVw7ZCHtmESxl1nk2KFYnOQgseNdUb/umqvZy8z5wN0bxJj8wVBiEJ12srKhCpKoKLo0kgcXOS+eTGObSivXxMA==';
  const _INTEGRITY_HASH = 'f9694b1d0acb199121e241f07ab08187102972008ef996001052717bcd490f41';
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
