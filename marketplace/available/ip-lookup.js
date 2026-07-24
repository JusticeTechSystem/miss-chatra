// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSI8K/3bidiN2DELT9o344/ByTaLoOBZxGKyb2paGPqn9xHFa4M86HDUfBBdBaDdBMFXixLbjuyKa8zKonkc1DgKnxzYL8AfGU8SKR5t7FEyIKNBDhUM3MwtQFwZL/Q9+kt/MGY5PiYD4JjaCzeTJDPe3NGNraLpLu8qQFrZ9179ZBe6UNfB9sO86im/nc9klHrUKBInWq8n9bM0kShaKVWH++U1Zpq0s2zgGfOUMJdrztdyD1h1CmW94fahuRSnJQ+gQzISqTER0ggkaTpSyjj89pBfHNZiN4Uh3SsemQRoxK5v1VwITB0nA8K+kkareqs6kKbnw2Nr+D0oTyS+9I3eaF/ivn5QF9eBAAlhP7PZ9az70bxcsylcfGIlHWZK53/run4bYsL85z7s+kh4oQZKDkx6vRrppxaccGqcmy1jwjDwIBGJFQf8bHjEoM7JjEziRNWop1zk8QDz6+SAodUj4PmbFzAYQio3J/x080wa8saFcPVw/eHxV6NS8u/xcSXzjNdb6Lxfo/lTwjq5EUaXQPIEWYF4V7bMctNurdhOKm1odFzcoKhu5ajXlkwuVEFagf0jBMQN9LzVIiSKh5rpINwmKCYP/h0dVIhXwzFqG6Pbk0WvlDaGeamnWr8PPTU0PwhrR32ZdRM5hnzzkpUoWFqTrSThm8ev90YRZF7U22YEfO+fuNcRmTIxgZXSEUg6wY3YthFPt7bNK4lbTNix/jizV25wImqG2hhuhpE7gLNq+OY2qFZdRL9f62pCrlVWAKUiKkk4SWpzoIN0ZMubLAV29VQg2cDbIfUIqdJItBdXP3kR76IVTOX4DcjCDypF1lTMi528M1MmUGfZQ6gIijXILR7EyJbNQcvlHc4KNXNkINr50FswYDBuFtBeBBVZoAuy3XszXsbn/LtgqbxmJYQPYyIhrePVrV3Zt45Y+f3qz3v8fXtWtbzwfVm78u0r17EtWAJ078LwdlVTCK8e0pCa2MssfEA443v+XXKSrcaIlgmgUIdehFlUck1kwSD4vGrR+QVNSlynNv7YcXx5HxGIyUk6wOEtB1ZXcYCpKmLaYofuFfcJeuZv8+QX9nhXc8rXKUX1e8F1retrDM69hHa/h2R8GPhDCrTOVZYZzeTgwwpOwRm/R8BKZz8QyIxM9tVVPOcZLM94OzCP4dIYC8hPKxba2UD3/iLjbOgLv27vEfk9DPCYdEqeYlQ/dt5yaiUCfl7b6hTuPn159gQvOD42RX3AOl62sDyqTe2GiXXlFV8MQQ1zK5d2CgbgUIB';const _IH='ec52f8ad04337d7ccb5d032ce30fa78befe23e83d04803f7651a003db18f4915';let _src;

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
