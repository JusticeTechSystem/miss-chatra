// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RJ8hN7kmCCGeVSRqTsTY2YhermjVMbhRf3Q0DoaYFvHcErgjLoPbU/9Z++1RVG3eoTITprr6Fv+LMbjzWky3ZJDsePQ5IUnWlV2q138sleAzQ9/X38IWcDRoAC3i/TmiFILl/ZOeX+84zUQ4RDh7FWCHB7Fujt87xS3hnkJh3ECtuXiasBD9PT1XVtJ3hTu6DYq7r3Gd3zOrucqlo0V1eP65S2TXIz4w36eMp6ynxCL1sz9y4K+9oBrXIOdNVaqQrH2vEmzoNtF84gYkE25/qQUa4CEZGUeIuCiDdX02uCVJCtvsidEzuRaWOZXSe8Vvw8z+GD18vqVO+aiTkRC+DMxVGLgIn6nF/nDs78VUmGA/WwxV/3+J6f5Ca+QSXfcClKgBVAO1fALd9SgCDcFLfz0ilD0GH0u+7wjWratLSb6vO7LMliC27emGK39+QdRUMC0OS1+PwYaHs8W/6KNOEQFiSi29qx3XnclQ9jc3d6W0dLQIbmLDZzHt38XYrccDrscfpb44pqJtbYT8Eopy5zqoHQpDdH1YloL7iCg0wLUm/HJ1d1lsNtfKXPDoTdoWX9pGWQyocO2bmg7SZk0bWxsGpHx3i/et17xDTAjwr44Ru/1hAxH1LxgIdtVnbaFbQo8vyiM3zpjq8Hxup+tgrQbA2/PSzbXfrDRCQwXK7e4cme7TnvLa5eu2bo4VKD71NAIG+0GDa1oZubPbs89E4uObr6zJs7bDrniVEUigFkewc32c8BjDGuSmv0uSlUuQoNsw9kq+3Y8kOPV5JDDtCyL/UV1s/fqRyBf+fhbLp5CvFSuuIN12+o95WNSRDYVlxzQQjrb3J9D0TtDPAXdIk0aq7IyX5V7Ol/VuXygHLRYqligMzVlC51EIg5leUTl5ubm0D2w2SjtU6e7MTOwee2GAuqf/BIMI8MKQn4OEoUEOdp7xvH2IF0UX7ND2No6CmLZkVAH9Rw8lF538lOo3ybux+SpTniu+R4rvlmOuvzx8BquicTF3YHE7N2kJY2wK4b52Tzl+7GTjNNO3ydcaJ6cZxmA+WLz7kUUmlr/a2EoXnNGdfr9Q+Y1gR5me7hG/HHZjXDOytrhed+IsS3HTuzEIjUVw1gl2kfmNikNWCnOk7JEJsA0Ep6hnwo+LSWsV1a9Jhji1SgFrm3sKAyE2sl9sFcTUQh9g9IdUVYhrl11/Avqm1X3B3r2vdhCgOExKwtwlJ+ypiOo+t93kRNqbedg+VvNkLHfT+zqIiHHl75Rj7cZA3Avjogm5pjF6dtLP8XvlcI+XTA2SX6VvFIW0pz87bNKitJyfEswydrDRq1ES+T9kJ+zUmkLN0NFnr5XLtswd0719qmdHJfwHiFSwib5OawPHnZM48Oc4qlTBHBvQ+ME=';
  const _INTEGRITY_HASH = 'f34f520057bc48a9e8beb5936f730b4bcfa544854dc2708b76b7dbc7c0679d95';
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
