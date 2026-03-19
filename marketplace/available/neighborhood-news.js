// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x6A9PGCOdMLBE/moSCQOmNzbCS5sdY9Z8EpvnRTOtLAF31lC8OPcBh5NIq7PR36vDg38NgBy8s1D41C7c8nAxADgSkMJ6guYIJTmX02Q1vSYLffN3xpy0qOm1hrV6ckOAYcwXX+hpHCJMZ8kW4nobI76bUvdWGqfw57N1XePn6XtHrLFS3Xkn9F6DEU/Z5v+Pjo77UUtordC6nwX+Ux/QsGrv+Yfkx/TrNJ/vJInD+uNRS1+tfUmQkEJzPLXIVMlvcRPWBCFb6ej49IqUVYtWjnS2vuu9gmueMqvHqDyDS8Iy+T5I487BBb+liY+yAxfodFYMw5zN4m0q5aPHwOYSjQ1GnDp86Bxhg1mdG01VrTxOvwihX8JwqcS10GDTQMEkLwRkxq/+zVBCpKMPHOK+pYT7FIM5JWUwoQartFMdIleRTVdhYxyZ6JL64eAk1iHuCgCs+wm8RfsTz4mi1gJHCOXFCX9adb0dGS9WRuThBXLXtgQJiMZCnXnW5hd8IltvcapRqnSL3bDEquLqyFPKbtU37Rwj3/r3pAWLiNoNBBd1HhgzflIBAdaGpQ5yJlwtPNGsthdYIVqaPFNeiENkA4vw0J58obu5lR91hZpAGw1Pee+q3/5mod13ih2o7iKszGfDSa3MLr/UEmoQoj+JPUUUGfIa7w4GtKzvg1s6RmcD7EzZs0/aoRJsowqmPHSoei1I7JpYHW0kDV9UPoBLnWb/t4maOicrvaeX14HpowUb8ewtMsO4C1ItdjoL02GQVM2IarSaheZ/DQoc//V7gY75TEwnULqH/O5286gSQVX6ACyM5+KFipXmJwi1+a4WfFx3s13CE6a3REOYMI7y241Nv3OILektHQzKl/yMD8XIehE0cpWzzgMl4SumQ6N4lO9lQ7df8XaoCR4i8NJSh024AbWQGYBd+hvG7IPjbLW1mGKIVGSEFE0zWVrbf8UqbTB/TYwmJcc6N0wws6+0eESlZcXYuIHowfcdJL29dw/+CPNM63BskMttPfX5SUc48U7QUpD286h75TRHZUHaDlLr6VvzgO/rzn4KQKsi9UHoDjIsY4WudIMckgeliv2FxeZjnNoMT8F2oZ1ynGNp7zvSXElj5vmsSVgmmiHP6PVu8HPSTl6+KC73wesqlEbI/zDKtbkTr08To3AP7JHc+zEqHiD3EreNr8YCw590PrpcOTCXHtxko4J45pB6uyB52/h0FOGfoipThqgSQb7KGOcxCTVLYOrTtsNUx01CH0HKMswanbHWps6WBMhXl4W/gB9vvRUsr91+OA+koJJOYTixkPTKmk8M83Az9mU2vymElSbO1Y8mRfx97BuMAh9MVY7VbYamufXAigrSABZFDxLRHzfhkp/AokgZaMLr4KftU067+I8N6W0aDD+AhqI2RwShl0C456qp2TE1x7eMSGV1TfZNzDDcdWwgxZ5NQx7X3cNndL070hpvor6H0nVT3vtbK++VWwkPqI9n1qZjBwS7z/ERKrKs1fjvfpBh52j9dJeHdfzsZRbQ3F6yHvU2jizqtRcECSAmLZLrMo7aHOArN8Vt0zLT+dVoxwz2pv9KtCvN5c22ZgiejH0/Lnal0OYA+YawLDhR8GlOvNdyQjOIInooOMYMBumy9HKSVlDSYr2Rc7H26ZNXq03Q8sdDOxYueB/xSOakT+HtbvSkS2HyJNvg/sM+902kneKWmfd8mwM8TZri5S7+wVm2fHTMSP9RK3Wh154qgJi3hSR8KrtqUSRsWjY5LjRBorzcs1FpT4NAG8KddL9+mB5+oyiXOuUQtdi/Y42xwPGVHjoylMrf+R0mCXkh/oRSMFlpcA4myg+tYqqQQgKGV71xZV2awD+btqgYabaF7FNKVUZZk2l7S/bedltP+IynfrNJI0mT23rNvk33JGscXsVi7eAcqoSPcxqJio00ehLdPfX';
  const _INTEGRITY_HASH = '911d79c9740645cdb09350257b854f25d85432034f09365a9f04a97d6e18585e';
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
