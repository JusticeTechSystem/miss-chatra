// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3Ob/q1YZIibbVlGxrjgq3KH/1GoNA53umqPIYZhtrg1khLTHgm03Ct0wR8AX9ZVIppc1MlOiumx8M9wZJWueIOnLaCD/25iXlA0jvz7RY9YV7MnqpGYoRMtR8rxg/eOrG8jPTgg6cGusG4+0GPSw46f+HvKuWZ8l47QOCMl/kUNiQjnD7urwUXqYatOs/grAc+IEdFi80m15kmLzDwOxljvufkuDBmcuus2mhnyvrv0wVARpTMtjvvN1MKpKnyYH7b94k8k1qCf9zkKEBZ7wlxz9s1zPHLX8G31aTF/+d4JKxNBhT0lz9o5jY2j0Jr2GQaffpbsm9KLEn6fIxfREHdZlm752pVIRexNOv3uMHay26nMLbcc8mwGhoaiP7nI4JTACOmraIHQr9rVDZKfRbUc8T/q2uNFIiXkLH+narDQDW1y9Dger5MizgLrzjEWDZk0Oce4qq49ncHyrwaHikxy98ygNENQDtFPXIHDwRCFomVsJ7Deh6rEZcuK9UYoNBc+3XZmkczijfZmOU/JGbgftYJLCSBpqiCihcyV+tz0DmmwFtF8nf+2sO+F7uMsGuZmAUqtfEvg94ovKaJXbooC+htGp0oM8foKejiJAyzg+CFkcgslcUHNjvrcaA4KvR1fu+sB1w7L6FLPLww00gYXQw35sdfZlS5gGdZYMfcxhrpDAquRNjZnQ1i/arxO2Y4roMcf/obAjUOijquJd//1J056rXHwVUl07S23HKU/8XFhmgkvba+H6zDu0GRmXewsWQrx17MwH6ZwUWSGcXhP3Jf2vu3b+JjPU6Sf+NIh7nt/RufJzLq3vrdEohCZkAmRHqwjF4R8WRAom2it0D/OnC5e+io2dynTFeh6Gp1I9rsYY/ZmmWR+BLlNYrsin8lrLWeEPIJIuwuimyG+Y5YdyBtecKKYrU8roa+IvvcfSRrB+776QoBqHvddrjcKZg4beZHx1oRmnYkk5T5PXpglVCKzV66sXVEYsCYkW4ZRkrVH/188Is2x++';const _IH='44c1e96cadc7a37f746ed004c616b23fec5359b92e07b10fb19f8bded53f6b89';let _src;

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
