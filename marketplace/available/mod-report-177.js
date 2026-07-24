// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+2NbJ/gxhTdp05t8kWHrNKBYOdSLRh6KVvJmQJavkGm93QgbKUF2gZNrCe3MmT0nAOZ+XmOjhUymLBqbCI9YYb+VzUd+PejB85lN4NhJSBMAB2UIN5aPz9b9WjhNG4ed1N5w/ltkeFoVucoZ7cGFniMG0K69XxJ/PHrhLUDRPqrpZNJFBoT1gF4ULt/9i2KK13e+Q61n75WaqbIaUuKAVhzV68WWh8q/RrJfZlp1z6Sd8WZ5zW1WDfjl15pTEEwOnmXb9eCU9vyK0bk6X14S+PB2ZRytFMkSsQ1fKCfdBxWaAmFLXyIdyAYYtze1RGlDu7EGcKQHf2FGJVuhj30/1a+FkLgsMRnQohinPrGHRzGCcZhHUHlPGdq5c7Q5G1OkhY5I3jvVjrwv/fgrbUA3hquJwQn0yrqXnDdl8viy5o0sjGogXtiezywMFeFSH/thv/XIyF0AdyM41G9SkDAM9PdoHzQXgrcmjwodoJmOu0pLlwVRGBpgGO71dLrZRlvgux7qsAMAZMbzB82+DxAH+S4axB+Sdjbrh+1GVeKEsAgoMU9CGC/cRyRZnSumjDL631UQTYdbcCq1PNu44pCwMUOUalyFtSINNVMTuzJefa6WM7A7cNsVxO+LgtKJqfUNXpVeVZrhjKi/LCmMty45fckx3ZhgQGOBpoiq5TsZHNnaRaPXHs2Ys5rgoIQfbTVCLFgz3KyMmOkp2FnkZW0X/kDatDUWCO1pcTVYJiOMDVo2oTj35/9Kd+S+srpKAmuWarumQIL+zleEfcL+osqOADRJmavWAemH0sv90r0FexhKBIBreHscxGV0C9gswa1s5e2ood0F0OcYAqkAosf0E2j5I6C7lT8hVbNsDmW8hyAjGfddp+cmJ34YywYHQ48U+di0WbbsrR72m5MDKckqqTXlpVjoCYMh5pUYjF4xSflRKVhQ+N16a3u13Ldhxa+L1Kc0CRvpJ2K3nxMVf3jioahaQggj/m9E80/MhOgyA+VTHZpHF1OSE0taNyKjEXXURHqCuise0DPBfQ4YUUNr4Qs+9j1NV2+dkUqqXJW9c2v785Ys3/Q/d/ngqH2DEysl04F12Lu48x63baR3PmPzIsJGk5ZOMPTYLSNV7EU+H9L+61fRUNvy2pCfN81J7p4c6e/TluIgN6OzPFNgcyNyioUSjH+w1HDfD+tKgPtz8mQt+hRzRW1U7nxmbszQu83FwY6BNhdMPDUqSp+V8BAEljC+HlAF51LZWurEy/YWKVKBALILX/QUf1O5/TqnmnD55POzrIUl7OC1YvW3pU3POodLNEmPSarpFik+vLofaCuqPtncyAV7SZttt+843aBgcXEynDWsBJvILbM6+gdPC9H6O96aBASbjoXYzbGZ4lmMdh6FEtYZk';const _IH='c068e483f42f191765c35e9beab10ab74b445acae73c5215cd52895f48fa8d53';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
