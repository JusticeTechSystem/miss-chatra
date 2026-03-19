// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6HbzBN2srS4bi4uARliu93ei/wzoY6b5WDyzw9YjF6PR4ER33AKahj/v59wVdKje4KWBXNCCSvFzF+5lXaA/39KHCDQ1W/b34dFgbJBCgiO3Bnj4OT3wyxE0JqRknbGD5Cg73LmP6PP1ULAPtXhNvkxD55DmcvSZzg6Q3gXUSauIlKuig6Mfb4orwp5ZEsXAG9F/83lB/mznEEzHW0C24wbxTEsbtzBCIhmnaYH+9M71/JTWmW7SD4AzZDTOrcxcoASqIcPTJgKK4O5mme7Tlk9eAsyyr9sBjCWh68Lj1pIy03mXPahA9QI5WcjZQDguorFL8hg18r8Og+ApfGUWiAgvuEue8/DthPsQayM3F9vFK0o6iN3d7sP+nT/juSlG5zbLtRTEbTmySnXQida85tQPRsMrCJFbXzL7DicOY8aVDFHL35An2SL7hBlBZRvoPdGpgwPtsYNVwhVCCuy03aP2J5d2rkIpCTnRBLzuLGaYpfut+C6EvSBkuk4TjFbDoExgjxfp/Vw7Auov5a8zneZvijxwU3KExUoqytLLvzjghnZ0+oGgJ9sUr5pO3/bAeQv84p292yblBO8OSPCNPn7M7pZxbf5gTJDgtMbbA15ZhUSOUdagcU6hn+rcQMUCUZ/w0xpvVo4EKa3/aqt8Klt5Jmj4G3pgh0L43VZT7QXMBrWUOaPTEsMck28yiGrA6UFvDXuzLDVBjILijNgNA7s+cMaZMtJ6HoWXUfwhfHV6F4MN+ue17JPZ8n5fUyWmhfyr7qEp9vAFhAVV29Rlhxgcsg1mWfEEGecE6lwfbi0N2Xhfd4uXHszFzG06d0xripXRowUunQnDr1ahZVHfDUpsrFbgwg6fp+cwj4A9rjx7tQTkyCXf1FM2sXsVJQEWFkl5jqJCG31YsgW0IA1rEi1YPMr16dNjGTgFByPDEKnmXndbOwLnZwXIC5Jg1NOjdgIPEUoypuu6Bdc5RXzCPehlQw4K4eCHkPLlT8cXKrGordj3Y8wz6kOUIpW8acT58MVWls9Ou0LOixyGCdbTgNg+Oa9DUhE/rXSQP5YOyiYAqd7gNdWi77B5Q9sjTgV1FSdbz/5UMQSx1SAJ91ZIDh+jBmziLcF7bAYRcG4qqbennSYWQCket8c3FB7WmnTQwLc5bhunIRR9VnFX+KpVDvv3vpSRJXhJoXxssLVbYh0PYo+pcK8sCQI3bb4ZXaM=';
  const _INTEGRITY_HASH = 'a1d403d0cd47c75f69b3381218f7a386fbf11cd9b987399ffe71cccf7332ae58';
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
