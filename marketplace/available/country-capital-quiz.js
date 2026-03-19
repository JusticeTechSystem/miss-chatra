// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eXPKy3RLgwKc9GdngiJev0FtvcG1A3sP0Wx1+gLTJNe/amZGdzTV/JGZY8BZCzds8ZVnfHrjEy7f/ZXMy46GPXuPigcakqVm8SbL2T0TNr4fm+QsitFhho67GjkIS0UE9nJA4Rs9/SfgV24DZ1YQHJitUz/j72K3v4ZzbcJHeBnDaXZOiWJU+qCVJr3Sx7vhaDnzeeIahbQkuLrMopS1U8d4u4xX83xQYWvkxlvt88Ij+X4g3Ww034xkJWNfzBbavtlMDuLbs4A4AwGiIHDxrDtWQzrvjq5ecB6QUk+n+HJjOlTmM4bTBTyA5UHnDm2Ou4WkeoJ9akMZLRdv3yliPkoXf4ooFNaPe+Pp1hKiIjNBrQ23JdfB42ZD4xLXkpGoGseIbODCmMRUdgFfHV1OlymsolaYuMGWhCTr0vPTDRhbpeyMPySBD+zWJ+jT+kV37jWX4Ilkl4f9HaL2lHYVPNFYfx3yH6BlWRoNkgfEq8LYDfYyyQNG7cLX80WDk2ROyvuk3Utqh78VzOVzJSu30CqwMJS1EcPE8MIdsffLkApg16/eke74QDG3WKZoo4hpncyLLvIdUuFT2cuxYYxnSIvNJ9c84BKYtrsdKvKrvusGILdMvGwYj4rUbFCVv7EJvIn+xgHizH4C+scZ14ue4OFAd9t8r504djUBaq4OqhNxVmsziPt4ynGZsBorBjwUJ1Eq7LoK77PQJFr35pMAELntG7K0kze6WG4Xb2nmyP4ty6lappME7JAeq+pEiKrLqHdPptVwpdKtL6XCY0EUcJZGbLoInm5ePdKvFzxIrs3xPwP8EKFKtic2nM4dd7L1Q9BIarepjOv9Mj9bQrXJaz8ntf1vXPbhqfdcGrTdmOLqy6sUV6n/ruhaXDl8lW715D3DMNsy8F2VzCLPdHFgbglgeXzdXuX/HfVPoNlUJaAcwurEdj8h5COMJPMNOFpoRtuH1esEwWacuoqoGWmVibP2JU5PzSf5hvEJCf8nsMKmoI1qAT2NbX2MZYzJcS46K08nYnprC+FpkCIM0GmV6E3CrC8IM3funnZlQijSxcg1OxcWkraYdP2GRerLoBbjVN31pPWFeilRj1AxuCsG+bWo8TBqKLQ5fzlyy/EFe+gm4yByiTVI71W27lsQe5eS181Vb0M/t7BvsAyIgrSij9RhFzDqoxHxybmM/A++Dy0hamvqeOx7y4V8JJP8JJ6itUmcx4iKyKbaiZW+HaJsQSHIWNU+WVQkCqMyS3HvKYrfZlceXKatgH6RAc5FN7aGzogZTpZX9SqFnU20MdpUuIhZX03I6/xyloMoEAzHSM/YuIoFN9zg5ywA10cUN1Kh8JFG76RIoPtC7yC6GMSfDfeZb42pN3gc56iN0DqsiAXDMP+dsuA6zabXG0LCWl9UGsXMl2hlMeXlYqFYvhKRAhvmZyyfmNQnR8STbR+CnEqFV9wH7+fYzbLn63EphriZUJ9AnLutz1aZrml9lIHyd9i/V1sJ+ipwcHwNqe1DfZ1Q6niJyFIgCfL2t+pr5QYV6EiNGFU+YyBP/qUBpegFYSYwnVddnxKND8npOpWIc45M+pRoSfdrNAYoxDNR7NYK5yBOYAxfYh9SIfbrFE6ZjTkj37+Z1plSpxDs7srOK2vNx9cdM8WsvJNZqYPzvZv7020Bq010vgTOgCzg2x6dWIBYSFotYEpM2BpFGpfCGB36hww5wbBWxEB9b5T9wixFmmnYxB7jhc3iZxjwV11NXmb30ObSZFEFWRAeY6+iXr7Lf0B4dagqy6v8NcVam2sJhTjsasej7i2227ny7ZhHedodoJWf6YRWLsRUpwWDU/27coShxMQ5C7mBznTePGHG/RFmnuMnKYFRw0xZlPq5WfnlBnhstJTVvRXyzC+KKwJ8WKJXbR6f';
  const _INTEGRITY_HASH = '0337578f6544d2f2e7b429ddb1cf3135c5cd71646a963a2540841efc2369bd6b';
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
