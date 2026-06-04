// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+pnRnpPJuWaAcE9hxM0XUA/QIqNQmhOxz0M4HlgbxeVP1tRs9vVFDyMpapKOgeS41OzIRZ8NSvnab7WpEstNwrUPRzpgTThWjqbE0XAL1Whv7aDc8kutEtCj3UDqon7Drlk0q8VZL4p6v09k4GEhfABpBsQoW3cQ78X/MLY6MX9k0OXipE4L4aJUB7qN5WzgYujd/nPUqZNRBQ7yFCVJHgsl4qwqyIuJPD9GRTp8p8nR9X1Li/7obQl6PCuq48Ntu1zVO6l9jjiCHii2TFbSSabMJWyW+d92/hoacfn6eF25AmaZbkRreDpWg4iFSUT4ATXAC4EnNe2WpyfD8fOY1lu/mNsiRWWkwbCrLbBB80knlenCHfnBoaUmC+v+slQForoJjcbFExLrpqVR9WiuppGT47Lo2nxetQae3FGqrbDp86arR+o/PgFNNg6wT1vWFvFudHlb8q1NGDrWh7sgno9coLM3H93IwFbd1d1bFIfbRPupipIvmTXvsfHjl1cJXFhDZGrcKbCQFkoLji3MQbiR7K8R/tqPF2e0gMq2BwZktEfaLeIoiODYNgaS/VZd5NWkuJ9WJ6r4tsKGfIRMvsyi4IbX6Hcf1vvuKCwL99mK5jMmA+rkcnvF/eDYLtoRSEWokCqj2ID7U6UXtxtsq0M2yIddnukfYN0nTDiY6jYdBtGWXzQq0MGo6dHRXKWHlkOEQL+wK7kFttVa4dpXganitbRRsrNHW4oAKhtDFo8at6oSG83H229jWNC7qyurhbNF5Htzr2nn7LyHP4aLoifcxMeMpBndQzlTZxdcislwdg47g+sH6kSzIdqweRaATDqw7QDIKoLOxPq+8Yjfhd9dLP+xwtJUVHvSczDfzpJjzvokeIhgog/G1hWVTsmxoI539XD8mE/i74U7M4MNikH6rZ43/OqSAnDlfXjf0pOePGwIfLQPU7fM+NzagVgJqc4/GFvUV7l44u3t25+1TP8Ya7QXjnecRNmHRkoJ0gaVqS9nvvQiQ1n9qwu0UpffluILsMwWEvp//vrT4qasBjU8dzSI0VL8/RQzkS8vAZlf+Kzr+QyM1ADwO8EUUSlxNqzZrZXwOOAnKL90Ay6L/Bis0KwQqpRghz+HR/XJuW02MC4WMQpo6HkbphinEHFK12cM7V95fAwrV0cPb6ReqHQGot6COqZCYD8qkOgIBGPo71nr2kTCKHuH89HWcO6fWrn1qFMnQ/MZB8x/+Ku9sLoJnMYrUfN/sei2IJzCmHFrAkFk0pqNlwZy/vvgoACevsQue9EbYgl0FqtK+TYRKnGyfJScH+Aw6Dj6go/EwcQ7XJNwCN7/1KowWwOBQF1Q/V22wAbgIn4xtQD76ld9RSYQEl7uelkTLt0vEOTVQQ==';const _IH='fa7708e91fe19f6ef830dac00c1adcf4c354802bbc1b50cde9d899f1997038b3';let _src;

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
