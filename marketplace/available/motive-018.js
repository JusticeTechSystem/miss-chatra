// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Th9O/8u1ZXRwLGrBtl5yvL7tt9dDQ/aP0RABNBoOPduSO/HVQkdnWoonJuzzmK91XHI4UUrSFFwBvyvTE5Hc7TDNIhcU+QgBBiZOinsOkMNq2RCLOSVwCSQgiiG3P8cV3LOK/AwDuDlklGNgKRv/40DUNah3FnfqN6wPUY7G9BRkhJBKORcsOFa0FcNlP5KDsXZwcnjM8gvGU+Rt21j6ZeGnHf/kBr9MI/OAbRxmcZqdHmuYhrNPaByaVvYCcvy1XErWGoQMdrxjepAVSmxxm2MnRbvdlpYjKWbgNOBUiEcH0orGRebTD5teae0t1ch2CvXJdrLTN5woTXIr3vkwE16WbaOx72imuuRqjkQF4VTFvI7rnNI9A7VdbeIJC3NDXIpbfaySmucSpW5PgYkzJJbA+Qsk2L61WLapa1Wcb4rZfFNatfyKHTeYaoqiw+iGmrNAGoTI/r8ZEZXVpt81ahtHBVfJBWXmvIMCb9c5+tKrs9n7ANVCkm/TRMsEki+vUOAkYpcUVkjVCLJcAoGkpB9NSM2rF3pweeDRpnoZKMPrzYyWAGmcwgPrJjQ6XPDmsATd/cZaokpd8RjsVvuZpgUvSC9Gxr9gg0Q6bDvFBQTQfnwipNqe5sx1PXf8suskE8UzC0FK1Iqqhx7Ez4hZ4Yddq/YGWqggFl4/8lqcYLQc2CWq8+9qWzHL8akHnjHsaSYfwOwmViczsuucR1i1/ynO1m58GI8mCzIVIOz1cWHeVjMktZqy7dmi6hXGC30Hyor83eSxz+P9bdalMW51hYOIIrpV57w/3U36lkNZhUSUEhOsocAOgwP14HyYT9Ce40mILbcy8j8eWHsfoq5FWAIjicKwhEYX6L52Db88AKlIRYgywqsq8ZN3Dbu9VmUWY86C3aBpYFT8b7D0K8LdmkbMOYCGK6JfXv2OERVeoxbUHQfwLFrG0UGEwatkhvWBP4zyCnte9aVGHAynZQ2qi6D7bWMgPV5arrQ00kQbvXy74MMHCYZAiu587po5uWlU2CWNRgJzni4Z0/jwnGhkmcXM';
  const _INTEGRITY_HASH = '0092dba6885684eda8b61d538767ffc0bfb03526c9e28d4d2512ba6ac1bc2e55';
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
