// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fMYCKwoZQOYgsQZss0H32uZszFzhTrPsnOz4dWvI0qwc27QEqgE8WzNkLK9ZCvq6oYYc8rx6E3QgfSkdUX7x2FSQo9GfwOv1KSpS0Q1GsiPN/kPZlpvGoPWPHnOhl7O0/QIw4xKVaqIeIcKEVf1bQrqNNyuOjkZ/BWlkhTaGjTug8qerd5F8CLx+QChjdayAT2w+takD7VKLAIcRhWZfemAguBd0vpxvYayj/dabl9Gr+En2QWGn5PtegPpNNt8iY4/o3XRA18muXdf8yd3fW4Be/JPkDTkR3HDtlIV8bA680w1/txjAfqDtAdluqNCAvhQSodpa0gNNoxFlKRDrk3S/4w2oftMUKLKh7aoopksI8pEl5xO7GzWqEeWL6C9dfF13Dxmm5J4U9HGUWGfsmBM24YYwUiCbkZzKQ+UAw60ZreDJ5cmXA7Ilbe7PkTcM3t1BG5z6dYrlJWE7tbEXYS+L81jVYssr8sqPYkCAiOx/+ZGNvPRGfQh9mNtnuhUyOu1ASwxhk5rL0zE6k8PKI3iahq0TGFm4GbhBzkpnlL8cuqPu4AiwZau27FSVzg2viQXdgvNbXaj8sh63EMDy5Mis6XdoTfbtabTln8GzQo570GA1Qg+BubOlDxUQWBqkUymt3KQX/sgSzpAkz4eBO4dvQFawDEFP4/wihOexLUN3LpMrHdTVzYs/QVyL8aL5d0fJ4tLvnlcaCumSZh2s+tAPlWBJxFZUMlw9QZ8ruLM59tTeYxn9K4glvRJvKVLBHJzPSAQxR1xGsvw9HWrICbLs3ZTjwoktL6DHZw/3juNBg1sm6zktBNPhQMI5c/oQv9SPzgdb8sx8i/Q2PExIlXYc4M17t324QMZ80/w4xI6w7wW7ORWdwtXM516cl5szzTEW2dqr5qAghAYJ8y3IQIgePY7dbxZdAvjhRSuJvFkg5lW2puQhB/smg94ogzPoNwt7JTQgsHKsvcJd9Y7z6Rr3UN1dESRh7Y+mkeAohZwijZJczmB4Q/fs3LSiAdWgZlg3BH3qetVa77IUO9B19Yym5Gjh4hLfzdR/cARW4DDeYQcGtg74tij2N4tyMopu15eKZXM/zpTbmwTnJPt+KtEQBN125l2devwBqPkAgTQimEnfZ/71lrLfx1m/+JDnrf4ojW+pAgy6C/c3ZBGWlz7djKTQTl3lFpHHXZPDYf2ukm0FSDx4PyOHYnzCkvxZQuWyEi7Q3DNCbOAZxxnflzYDCiVS1uuIsICuXA+n1XPhWkX776i+sZtLVbWS3e429rB6WLO7m+2cOtKXZ0cEXlHwFAIJVDOBeqbBY0MeK4j4+kXzXOyLQpdXpVS+WYDxqBU9DdvNdpnmooc8fVgg0gn+SqA+KXLgHqwYuXpXMNDhvtI+ufskDQ==';
  const _INTEGRITY_HASH = '48b9b6dc64e914586f3c3de6178bebae302878bad46dbccc8774d096a3f7aa1a';
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
