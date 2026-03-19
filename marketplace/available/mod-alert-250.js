// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5G886QFqGcbBs/z8/uNnbZrFFdOxoEfNQ4W1yDvrmYxWAcD6AOIbQ2f1mfCegIAVaFJiE00u+sUR9YLtpzae5Xh6DP9VyGOcqjKskDbwb/2w6cwTJYzCdhzJcjBLUzoZ3aPo9GHulTC0KhufmfW/FQJJfNpi7N50M5644tzDYkA8rnx2r+jz01rtsogb1JcOFsmYsFRy8oq1w5J0a/oCZl1nDtplehVCYgRP2VNcHT4EIZvQd6vQyz9C69hdItJWU4Qgzr0yztcMg1ILdaqK8X3gpFTCselZtFr7JBOo1TysK4QgMH2ADnacfDvtUCJYS9TFOFZ+fKQK0JAiRSTsAUgah6XCA6tHdcV+myd6DNohXcJJA3YsX1rhoLfKwwEJd00pEhCGSp9cRd1XlFpGhAFYPVoZlHZ9JJoHyZnn1wlhBHUIP29h9DXtS7su6+gtLDhausLpDiVO1vqEJ5G3od3L6y6XWeCwJiC3lwUoohsMMCT5phF1bhrW/TsiElT/XiqAyFVOByNRgF6lCpHNGYFPDDEiG05DuwF+Hyy5/faH3GplctnX1GqBhBJtg5XpDHkka5DqM9aXf7+RA0sEdZUQOTquuiePSA5B44MZeNhbrIwM/ldNkTCutNkyuMIRirusxGNgkYntn+7UDkjXrrCCnapb/voBujapKt9NOynxQpoT+x5THzvlbabdCCYphUOezevOSMDNKs09CpFsbSrkA/suM8oML4SOeVpIBsNjY6qDjZp/D7j0zNnnxXRLXKnvnfEREdZIygi8TfZA+/w9M7WaF/k0D1T0rWq01SOdOgo7ECa3/asLdnFWjuysWSUAuwGmUN37LnzT5fCUFTVu54X92Oit0nTHtx4MypdUDyEunA/J93EPfRL5P4FQmdLuzABJu92MydkQEkj27bvTAgki1gyH5sRa2tr0zWWfPxpAKz9XVlmb2iGdbWZSvDq7m5OAJIxnWfSDJD/BiW/L9pYQ+uji5pUKGRTKhBAWXIk07Ye2nsCw55x9EMlRpcpJBWH3sKne+UG3VqsYylCXuKN/24HDaCb4NWJM1Lgnv4uNP1voBDfoGY1W+lW31HQAIuK5+GYOPN/wFPg6e2fKX6OB4vxJrIMczPtuRIFz6MCbzSm5/TaY+GzurrOmk00BlFhu25aNheRu8Pn0q/QXDRyJxoK9ePCI94l8oR7tCXB0qimIc6Akdy/zTnDWADk7sllcNZjLz+MuVq90AagDCqK4Cb9k5PfvG7PrmIVB+vahnQaq10dsKrWZEBdgKp6WLVjQhSGilIemO5R/7kXajIccDGNPsjASIBUdMdHX2YGVrcIqfuiMi1Sg6FkPfaAXRDkV2+Qz1L0YK+MeXaOsP39KqVt6LrVkC39T';
  const _INTEGRITY_HASH = '06e9373dae7b29b32513baae111d07c8ae8650cd52de22ead005e17fbdce2da3';
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
