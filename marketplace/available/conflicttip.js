// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd8TgFgJScAl8CNMr2dfMqkmvSYsvhDSTs52mbksQ72vbx4qnwqE0HQslVkjxahoOK0Sg0RNqdu85fqhACGMb8+h+QDd6NBdthwl+9DubQmq1AHp+f4dO8gFWLmjxUZc1yeSRiukgRRJJ/UgIZhuMzmHN6Qq52PHrno1Xp6LRVM79F2l3gioSJ/dRII7WfxzEsMXVgHMVemqA6I+5HI3+iEYB2s2QkbGvHARmqiQ+TZbLqVWQ22FFYYk55XYAp9r8NNFoqj1B6G7SrnbxNv6JGcpyM8KbcXKuD9if3oFoaeCka4UaY7BrkgWk5MYCswOVZvhr9ZjX9Ta+1F+4XXXQ6FtZc5x16fKYxGdeI18JHQPqK+GvX/ha+QXnzj4K8G3vl9rm1gX9fDkUYrDEDRHek3RBOUzfcBwKgbkwc73DyPLnILms+XtyOR/1n7MfyUoWYOv65Lr+SHMhRQxbpBdfdPASd/zvdeNYfc1T+C0kDjx4HiYWGniOo8i0qLiIvOv+UConyP/IxVRcMaZlwU7Woo/Nk9182Wu97THag8MSulNr+HsO3YLyp1diEmUCc3somBAc1caXqJ+7hmpWmRcA1iAmLcGD9Te/92DEZNgpe8vR/9Ie3DG61MSelTPdSs991qnnkuJJVj89+lvNOXl0nsEhI2JA5JbWBgWh5jvD4+Np9EARHGFfACusHAVxA7gTdZM2g1P4Vxl4Em8ZCgVsKwMFejnvVuvLhFUA7Wg4LfLj6alTSCoLSe2fGxxWTyUF7ZBCN8TGwn//omYsPyM5Gsbed4H1IYCX2DgmJL42yv7aC9Nag5A6IYFqO/Db6LaYDegdPtmIf0qVBptHYV5HIBLZo4tL3H1J46MBkAnD0C+seRwmhYJ6pFqOaM5KH0rvBDbISRcPm6L4CuS/Njg4uy+1xD+UjVFxNxxAtIsk3R0zgkg/zaIxIHnIDwkDiAcQS+F3N/G6txJe7vMe+km1yELTa9Bdp0sqcn05nWN3yzt6K+khAHHPykniZirn+Une7oE5xe3RmhoOmlgSNxBXEz5gSMWqZlLlOGQ0Mm+UwZo7DuNzX3+8f4HRT2VGGuyZBr0QbuidoOVLG7TegulOkCckpjrl8xjUO7TqaFfhduzuhbhOglWkGQtj5PJZHa769qZ4ueUNarEcAm6KaGBEpydK9d0j6a7hl4kZdDgv1ML090khJvVD+nL9kmICKkrKY980WjZdC5vrwld7';
  const _INTEGRITY_HASH = '96ad86f1819c07c51dac6eb9f41a4a044effd35e0346e307615f3c7aaa95644e';
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
