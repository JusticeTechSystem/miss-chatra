// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n0jdhwI+JwxWcl12I3Gf1Xe/VokVnvbx3D/W0NEMvr6JIqO/f7ilwZJfWY6Ht3MDIRHJ/tKVidkKYC7l41bzNcm9w46twNpZ7H/dc7Q/KmVgk06/YNU1REvXKdHGzFMV+P2dbk0elVS7J854FLeyjXqABGgQT3M0HOvd5NeoXJqW3sm2fultkuOH90saOrzha3+6f7ntOIS2oc1hmgE1esgEtP542zQepfwzgyYc6Pdv3V8pC38S44vE/b2aINu2HetbIwJh/lSHQvQNSconGaRA8idmBUCJYaLTD2PQWSP4byl/ZYAcJmALdAZqbprDr1cpVkXxUbQyavLbCG8Ti6qMNYo38NBR5fuLnx1/9pZGmAs2Wyud16ilfU+Hm1eLNp2BXEhz2Cq8lSDabJyUUG1EdLdc8BCLjpYcSKOMLsXCr6MFw+dzaX7xWsgh7iBCqJEJhuC3KsAXfyaRYn+Y+jAybWA2mvEZMnz8RKtbfdyPKunsHQBoWz2pNTppjqhJr2k1zEHxrbw3V2sitUa4oV1DVSUcat03kJeu9N5vi3tgo+pR9aF5l96YwPNxB+C2fPA9cfFW1Esh/tXguNyFmGiL7f3sxu/AzgdIKQsmEVnC9dyvhsuEhG8TP91ObAuaJU/7Re9M3PTK3wYQ1ioeuQ4nlV4aoC4DRN5huZ4J9qSaMZSBz9rtBckjClwKwE3sWC2eJqGmFgdIBdL5Dj5982jtmazAVOiDIyTXEb7OxAdDCcrNWnnfIgAvZphtx7rK/e3kr7wyiRDHcP1dby9MYru+fUNi6uMmTel1ZGSkXXh20vwMXSxpu8RBD3ZD1gr/UPrxAub3XMJSjw2+XiZDPf2rVowCP7+k8QpuNetZB5qiB6xFrPbtqCe2+Weg+On+EY4VDzuVtGw1/qiAMAVC7jN+qOBD1jy8irp7oBRnaiciAi2ezqF+z6O/nrFp6gyDdkQTBrrRRLd+HGWtgB8hPp9oaXG6vUiIVvohpI9e49grvEweRa4ZF714qVkGdjY/IAlq5UMcYngtCYThPx/KNMddgFhFlsdKOm76blQgPZna7ksAb9MsZDlZ+yQieNm1SNZqnDeBS6wYllXp5eG+UGwLlq/61RUotVSNoXrvaFH249qqNiy2iNQhedhCzU/I1GmNtQiwBFsoeEHcdWCmepZX7qF/KN+ODISev4pNcUGPyh8CqYjiCdYFaEGvoHhHCaYkfFy6dKwW4hl7qjEtWb5Ah8q7jFM+qy7Kjmgujpicg4wQRl6K2t5oHdG12JfyIb9VpAI1oUhO8duBrT67aoEMsIPZ4Qgt61IuVNAsDtHcoEohIfk0uPYc3mzmHEIVOsR8/jHPtJhloJYPDe86rBY2U4itQOfaSL/nUDkNvgp3ThfcAuOlyg==';const _IH='b0675528338ddc88211237881dd55538efebb6ecd860512d0023c3f4ddf9a216';let _src;

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
