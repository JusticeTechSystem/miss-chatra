// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lfs39+fGPR/HUdA237oAROuFJqzZtmk7wdpHNqePzbKDAKCGdZPFWvqFk7slzlXT2TeqfeVyDuycsP5PTE9qxU+PCjUh8hXlQKAPO7lDPhJySOKjaeuwlQPkEe1MQW10zPtrXkBoS7HRTofBxJTYhoLoESSguDNctK9wCz4sSsJ+e8wL5AS/2M1abkgDbPakZqPLYM5a8bcu5eD6cVvRZQQWnS5P7oNYeiCunSsmO1v9YfdqZVLQjm7N58I4Myxdu4f5gxJCKkKo8nZs+rlt15b18jw6MmaTN7UVFF+P92B5VrKzLLZchJCOA3EmBGDRpoGlRxOy/7vmD9rd4ucuorYpozWBiLm5pQcClA4S67JfteKemObW6EeAMn7hInSIEXo9nwDC0xUjMMroV0jNP83DpbarZh3qGp/q5zltDj+HB1C9LJDsOJ+nJKR/cEc24c7orR8dl7O/oLBT+Zi8YYlzz6/D8IaZWnJfhn5f3xoCMxGfUX4ljug9p17dVCNaD4saC+ohacbbzPuUalt4hbu8clQbdzuwjtVE5KBMlcf7YLk9zPH3okRcz2X4i+Tnh8pUSuwf5nVYN8Y9wpS1hSvZACnxH7u4yNKqQ+0ULcHeLvTcWQKH4ZNWXDK06XE8uDzFl9ThPo9w4qRbXnBQuw1fQY/EioBuokPE+rI08QwaPT4pvKwxh+RbeiwvgOrxeSptLqREA4jHYCPxEEuWy17e/M5/Rvus0OqFSVbkUHfqnqzjtVg=';const _IH='cd4005e6c21ae56ea519d4ff1f226dd87355947f195e3a1334036c5d55339321';let _src;

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
