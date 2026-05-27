// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YiQb7N0/dY4g+g8ZGYJitFh7k2FWsw9aB6IZVUm5c29g40lUVlLua35dXm6kukh0RdH60ftuqEOQUFCfQtgjN+Xlz1XnBhM97XH09pu9jCT2Wzm/jwTlQ+egTrWoVF2zprJSS+Gne5yFeYtEnQlT9DspOO198eU3NOD+ZQilpkhKhJ0B05/Bnhpd+W0NEIfjCfC0+8/G9UqlDk1k3Xu3/ScIVRrgmfBH1wfyAo/dwCtt/8SlnTWgYo+eE7SF+vUje4PKEkL8aq6bohSvmAvuK9leMmT8lRBjY2ZE7/DMSBcnnYuQJX/3JWEvZBta/AKMt8YYM9CQNNk16wt++gKtW1eVpBm55Pw2gKBU0ULP3q2oxl0i2mAc9dpl2Knw1y+wZPlyE98i69dThsJl1YmaY/cFq2aZD1I13fownI6C0MdZ+1f/oeBLojN3mWCrUDcBpU3vjwpbtwpAlVHKXnbmG1cuvNbCd6CeTotJAd8pIOLr9oYADO1xNLTUqvI9RSQwXoJ/16rsAeWYbHUaLht0/dZXyGCTAqREChMqeZH2+qKMzglKvJzahkNesv27ActwgHylzXAGVqWWPKXj+SMr8x3ahAJFRY/3aKGkgjOqJwHtBJ+d2CDVGCUF0u6jjJITSejxbjelImmXiCXtCTbBhyEDKkhvF1Bm6vaSSYLOlwN30QWCqdaQRHEkbXxcFhaEiXbYmTOivHScHknUeYciJZxSMi3cn6WdwCV0ssTPKqI3dQWokcU=';const _IH='ff154c7c649d7fee4ac73bc9ebf70ba96558362975123e7c71e615a89fb376df';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
