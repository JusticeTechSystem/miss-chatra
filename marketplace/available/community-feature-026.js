// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZQ8q6yXYM3BNsIq84VAr3ozuFkSvPkAWY9T2GE+mJTD6rmflCTkold5H4iS/uuFHzDhCTlLw4xBF2iGG6dOC4yrP/t+tgV3wd9MumMcBs/pf02EtXdH7pte89x23SCiIqVfUDgDs3G9p2Ngn0m0iKfE6sbDaIrKmnNYEELr9+CP+VjKW+dvKT8bsy1IjreH4w3et4hqhyL7rnPpxTFJ5DbjCMSsXYovTsSpL3VL6MqYo88EGtYuNTVLVxSYTv24A+BpuxT3wgZntQuvo5TDLz2/oFpLFJvTg6sWdTU8uEi7MqPsKuRmHMKFryU4HRs5utuehXdTZXzkQexoxeCHL084+Q+cdWxwsJwXwytlnP3LA9BdCASSNn8NjajKaEShT7wmuTw5z0pKaYX/IGCIDZ4C87rO0e2FtQaR0m9MMAC7CE4xW/KSspDP2d5DBByMh5XvdbNqvLAm4OL2fgvTZ+LOA+5vPKl8dYt5vteXULwzweVeCWH4wp3TRWIlncd7NWemmnUrKhd3hIVlaUVZW/Auqb7ti94ey7kJ65KlBe7DD17sd7iud03JlC4Cjl9FWHAoh0YSBibOdqkPvKfcd1S3G99lI4w5V1DsZEShcbWSVnLhDfYb2q1b4gjNRaVz6vYzDnzZPFOsSi2+Nky9KbKIPMslTSc61XcnfiTdFYfQneuJPwN5QjUphC6158SDIl9mNOfOKiYuXMZx82Ik6fx5+lis=';const _IH='d20cc1f599cb3e4d824679f7af3cade2ff75fe66c63b4ce3d4b06c2fcd47f66f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
