// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J+oYt8HVAU5VsduS1DNWdu8Rgj+lYAnLFz9J9SWPym20YP70E8bQb3Kv5sUByA4ShK5Cqqs/nu3ZGU3H50lUIO1/RD33igKrNY34lYJT+Z6HUgVkUEZNBU9TQ4zMuOqPZmsgKN0chSaiH6mdV+6vLIUe2+6aubnE+HVNYdZRnK0Ie9w/ghy+ZPjwms1TREPDeQxCQCP4CYpL/foQvf26QNDkcyT6RXE/e3SrJSfQq4W2rIFjrNvKKDhleKg3Cdwl+pgdNhN2bM2jKR523BsBUasdGwvfJGcmSZk4DSoAEy9d/wgc1118Q/LvV96GqG+gZ2DVffQ/DQzkdez34Y0gDh9w9M7yeh2I1Dn6IHcxjoa7sWlo8hu5fMb9sV98jIrq7IIWmrT+vt4Ep7VH1DuHzsFHUCg9ZXkjD3yXz6hr1LigexS5rc46i33pnAa5KmQLDWOL0J7EZnXbtmis6KrWwWZ7OBct8mKaa4Tf5ZAnawrEN4bFiBApUdAO5SwOG20+NZMxhUcPTHTe3zkJ8Hm/WMcMfnE3gxLM52RSOQ4JsTzPSnE6lVA2hKZydVDA/MuUVIawkcpECFA4uxr8z7ODCmivR4FpQw2jpIVQJ/NscqBPXWKgZh7UvZDeQLzM6bWacrf3jDu648lhwnrTlRtfIo3gtZMJGZQ4auR+2BBjj2Q1YhziG34I+DDtb6DNjF5rG0Kr40VeC+f8qaEP8/PYxFmRritMCwoeGmQ8Ae7uiFlmVWZezFvKOwVC4rlojGGUcUmXaRJt2WNyp71LbHXVM6qaoJFR+wndhL68rJIdB1xLD+Q5/J8vzeOwxfP4FmNfoUUgzK17ed6ujIyJ9eKS4jsz1CkTgudE8ASpuu7QmVaM3UhQ4KCCW3rVmhnrDRrpHZYeMZkF4SNN5aQ07HtY/siN4yLfxGzDWc50rxVFcm3P4N3IW+ayeiZ6x4+ALQKzm5PT+97G1RsH8zUrUEV7bIOnZ1iSzEVIPBRMkmL6NsFvh8LfB8tDXDsonyXLiZz1qnzCFxf1SNTOsYSvE3+qvDVhGujjq3KBJF67R6fifeX+NprSCMnPB4II0aMA7nv30ZxZLhefrR1hxlvIYJ/c/mudiXKo7Z1iCXu74naYxT79qsoXc+S1gB2p8URaX5HSt5yk+Ff+FKpv3dqPLuf8UJJclupzED7xqekgxpdz5VWzOsCiEQIoHFU9GJAICDVyp4ksU4kjA3iunCwxr1gnBdGe1HivNP44+yEuLByl0ipWvQm2tp0aMiZ8yBjUiDQ7SsHlF4vDx3YvMJEhOIMPB3OfXtFSqDHrxrAxDQkO301MnccyyBIYuLvo3kDCPASn54XpPha5dtk8SCnPNwN2hoYaj3uKQmyyeArMbgbSPiPAbhmlVScMhg==';
  const _INTEGRITY_HASH = 'aa853333f98fc6d295bad317702f087ca13dca057d799fcb415e3064636ede2e';
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
