// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mEdn8oZhO4vWgfiYHBN353oO6BbjRWmnEFy6ZVK7FTj0jCdzkqcp8YMfhNKdwBswP48TxgDcRrlmTSJONvoYVouI1yIIdq10CXudKH3UJbfvyFTS2TlptnoeRlrEc1e5+Gl74qS/4uhjb9kzQ2GLDcaghbrA4p7DBgOau3XZqLXOYviTcSvJOiY6KL/FQLVKARMUkEHICOBl8Prxp3NrbZ0TNFfRcDi+u3yLZ7xTE5fAlsdi5XVwXQFQOa3HG1WfEsvlkUfDIOKDOmI/cHiU/F9Ve6ygp3rsPvJxkiSZ3A7lCI7jakDShWdwqv6szUpitDbIimcLTy5nzpYpIoUZSHzjGQQU3Fw0N5KrAk8zPdZE0J+Je7JZw8YF7uxP2ULVRS0K1kRtqXihK2K+lYGu9KtZcI7PD/ih/JDYq07RXkDqFZM3ENiTl/pSO/fqfvhXlmmnDrt54nfodnerq0hy2+sdWSKOYnpWcTOTe0/C8esHa+Qa7DwWkNFi0AYBF0lWfI9tro71/ixOBqNz8kfgKWCH0J7p4DhaOQhGjKcpvrkNdir0vZeTdmX0RJhrOr1ntsGWcZoJhnx0RJOC/eOpRaCFy+qwLCgkFOEnxqPqXh16+VNk2Hc/kjl6ytrq9iGLgwhA4HtvlCPDLaR3Y1UMPxhj/eOTrpsuJlaRcUDKuIlhZ5zIiQFKDWH9oyapAykJ7cFYTft3L1LjE+3nocYUlzTokWBk6+OY3Nd6OPv2rMH1BToZOrpNbocFYOFiUKn+jSKA05nekSfVmSqax7bLK80WebtHSEqEea6zRBYCC9OJUJ7PKaTHkkqheJbVos548kxNw74IRUHs0M9WYCwcLcYBy8tbimATAoxM2zuosC+DR0HhS6DRavnzxVfiAeIAtJ8JRMuHG2GTPMYFOO1GP06qgP89IMggo26P62AfLxUMq3h+NojC6k+ENLearqYCY8SKgUBZ8BLwB9GU9ecCKu0LwCLitUhrrIEq1s8AIBo3D3amDEjU4xOvHMhWay24AYKaEHn4Dk6ZaIMsF/oMo+s0y5zmO8X3SGQd57hXzYE5DXBOeu8A9a/cLgwe8GUy54Fdmk/vLcX8f9TJauVMe9tRV89grqfYgnDhXeYzxCRnZ/KKIGhSYx3swQQFq2Ccr7tR1oWqyFQyAjgrVaGTnodY6UJjgiYGh45QIP7oqKGrdJWdgYFQOwP4yCFFj8Qh/BQ2Hvj0OgKjW8K38w==';
  const _INTEGRITY_HASH = '7bfd4ab70e479ed7e26b182b61e218d657a719cc283958845189a67ef000a44a';
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
