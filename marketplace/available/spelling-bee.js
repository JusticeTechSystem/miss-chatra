// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZGDW6ew+1tW0VSEpW5LvF+5Bvc37IgFY1Hce06RY6P5DfbQrLU2x+7/rNizcNC8aHpP2V0fYEJhaR5+y/9xiRT6SyjFK87fEYpx/75IncDHdn8wd8+9vgg/hb/cTBgSGylq/0/2pWsP1M8xEuU+tDmMnsYbb9GUWiUzyw5rifEiTUgE8SIay2ayG5I9lc3qoHQEs9SEVCib/GseFuAIopH95I25BUCTMMfOrYXBKOCWy0ZUZutn0WRmrDSCj0ELPivj8i3wic1Y0TBmj7xEll3VSfJNS+tIdtRywd/vTOmUO+1ZoA1bKbd46tJh2eQW09xH3iOGLAax8wz5PgfQdtX3sex0aNsumDTOkWT8ApjM43fuIxLRB2xSDluQLqzCy16Jz/oibP69o/kqbDjWPush1rc2RnylKyIq4aOeRIUfDrdvO4vsFTQzEERrLhN78c/Wtm9EaTp6MgY/IJT5a9CRedumOPT2F5eL0LeFXp9nfwUEzMNSnuz5yogk0a7dC6NpZDKLXS2KbAA0RwE2AY3cjPVa+pJI2xRtNJLLFPLfmrp6jZ41Dpy2dM9jtPB0li39nfdtkFwTdwmR44OxUnJymrBz0dj7Fiq/fLptxhJrlc/eBWhRRQAqnIq5OxOrNtwU3vSM66zOJtf4ET6Eh9fYIs+DnOJRQvVLpCSh+/OJOYUvcWT0RBdxw5qIuLVC0ytnIluVyz9dwxWw37HDaxwhqfFFMwZtyMLm+qgHzC9WfuWt2oUgsfwUo/vIHzYzFlmdl8tsge7+w0671ZJNdTUnO9xRTjfzNUQ1w0AXImnh0NH4tKWRUld3zoKf484csgHZJo9jPsZJgP6RSM65sGtiz43V0im71GKO60RQUetk8YiUHSjTbWrMj227Rz4a5e/wm4342Y9ClvhoLWPpstx2N+ClVtiPMkWHyl1brmS2+UXcS5InczU82VboZHKfSHPaQBvzaJb7CBV+qTRlob9M11tgRXr1xXhvJAihoWr7a0rhy54VjxZ083AZKviKI8g0UZpiHHRmvu1JYWOR0ng8EMe98jb7+4CLKm/eEEWzOs2ANMqvsqsRM2BSGOOSWW/841AwiZ1zwTIlPn6YWR7+dUYp+SQJs1ZbrNKIDxyJxoRKZhlLbjfuD4gac6X3tb923ADu/o5JU2JUPquqAKayETxhb90nMGU9MuIpA4Es0EBBXHoGnDTJ4E5g0sHbrQpvdFjCyQHLX50OztD8ftuawSG5S9ocbkVuEjQmqqVYvfA8tSGt6IdUcijqq8bSk0/MBy1IlbGnWK0Dsj6ztt970HiO1JKGNReL6WiIuT3pJZAMa1kSJRbbVMGPE4Wot2RyA+edicz8vj2E12/rpOHK1NYURK9rWbSd+hYCDbQdhnKPUqzeA6ShZjtOi86pfH34LIXTon4dCk2evKy2PFC6p/FX2sB6NAfK4dAcgwhzRBoz8rDg8Xjgdatt9gFVCVYvZ1OTIysz6JM47kmyHb0Py50Mm2hmJ6FZg6T5oiFX9y0A5Xm800o7Ru42eypxpu7YuKJQ7WP1Rq97IrPrnB/pjqZaz4bWbCgmP6Y+MYdDs2m/c7VU6hkLwNlrljFLaS+DYUV1b297pEUBy7Xo+hZooh0X4Ee6ouomoj6dPJtGJqdjmIDUaJeAkZp04qmXjQQDA+K/Bz9eKaMc/v72Lu+JxD/yZPsgWvXpdIy67RCsiC1aeXFTH99K4wpNKeVU+YzMwWVNj3h48iE+T/zK+cPiTt8pVa/ILnJya+RAGwXRF+9V4MtGgx94cEYsWHsj+p9k0khic40wyPHHzjAh7r57eSyTK470bnaaEvFw=';
  const _INTEGRITY_HASH = '67b718acb91b11a5f32120743bae914d5c3164da47c1fcd99bc3d88902517e70';
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
