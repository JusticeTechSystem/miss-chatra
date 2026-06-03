// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5ljoFPTW2O9kerQ4QKbh92jHqhZ1nBA5BtDXyjq/sf5z0OWtU4MPNjMWa4Z9TnGIFCFRPviZRnC8hXKfPG4ux0TUmCzNCnryhy9jyc6PiBStVdkHgxAtt1rpikLEyOJZ9Jfd8ql0Eyt7g8mSjeiCPr05pBHZyJdVrJE946HlNquo41OJvK3hh9u1vQf9M7cVp6ooge9POzNXNo32gKD+UPntkONLgwmZx75BnbhTfnU2kIEa5Zsv+G7KbRjuSdT7wkFgf/BPDllx1HjBVeiZ34CcSvRn+0kv21O1qVhkoCxVVt0N1zu8w/z4XJ/JtaMDcS6c8E6sYQKhi+53C4xSa1y8XeSMR7zcqTxg3xaDq4MqhmjjiTm0enX7YoJ9YEAEwt4aPn0C5Axpbk8y/K5IkhRGug+dpEXOQ8JRD7SuHRiMrPj54orQBakI5869LyDGGhlf+7p5Qk8f4a+4NZsmVi2ODhOvsOnPhv+vrPTNwWxEnuRed7l4KAWKEB/17tytSI8oOXrBaZzyCPrXPNK41il+R9txlaO+kiRGZO3+ZTINEPxRASTpn01vyDIPyaOZNTtiuOz3IDniO77zFqP7gNR9UmpgOnDfq2Ra0AVxNV7tcwBrA9kapcSQ6hsfy0bpB7Qp93f6kjxkjMCFrgHzci6ZVg0lYId2eKr+LehjoAalebnCe/Zfi0XWRpXB5SoCgi2saTRwZD5FJjtzhhhxXHNvvl7pzlIE';const _IH='bc63ab6116746bec409f5da883467eb86a504211c85cb34d37ff17bf01070c50';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
