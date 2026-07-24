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
  const _b64='T0JGdjSKRqhIyewZCuOyXIhKSQl/sVatin3IRnFWGEqOKSvKctmXznMMhKLKPIxZWbNJ5K2tdoyrb3bQC9qIJ06XJUXFlYe3MkegTJHpNJBAvvMwIVK82W6qnxIq73/M9SEffxmwf+P4IMvvhkVsKxpc8rsQcMtgV7XBHeEVDctptstWhQ0DQvsJVS+nePKe0SdgqDbCfIoyEj7e0z4DRA171Y4YjyNvBSixPl3mX9Aw/Ny+Wq5bmD0R7312ToW4dnChYwoJPyoU1kvYoLyJ3Cw/qXxbUW86Ny15HmJHjAFMNSsGKwPRG7Bs/HpedbH9XK8A0sN7Vm3ODA9ne5Q81A3FjajtsWSAgMUzwDRwYikqzDc/+h9NNkRxGYEuy9NGGta8Mj1C4h6KQPJMKXt2dk9/FJ4huqg3nVYtB/mQSlOolp095jcd2F2uwRTgWSDDRlPrTeA5uMiVeE+vjStgkigFv9U6jHliWWheucCeBMyd7ZQDqXdzeKVGCc98IJIK2sfnSep5k7Wcz92kyuIMg5DjrLZb99jgEp/9VQacmh/WaSgsF8GJusyPk0zkWTaRlS6qu2Puxla/YmM1BAATE9GZSTLgS15mcyoOIWIDC+wameEmrQP+Gol6lSYq9Z9dydiPQqtO4L8L9yV8uwLhnkWXL4I3AddgE5jEE8my0uQ8MrAvMJnw6qlBqvd78WkktCLq8UNf8MCt+x8L1RnXjRdqeSGTGBvz2q7TVxWZnsBIC+k4qUYplxwOC+gGmunS62uzrsnE5HZHCWmrwBB4VxJ9tE/VUJ6uaEdNkWnQRAwBOXtOyf4lQ8qCasqumREyGmxuwwcXQJKHFAtgxgsvTqnSEoWtwAPA/Ban06p+aivoUZT08yC3aRVdgssFsNu8MrbntWaj0Rjqs7Cm3qutiYmQHRp3PoOoYUumszZTkV8hRErHsmShHjW0e7X8D927iqJzg8UzvGq4urjQuxvsHNg7MvQcuYwG3MXEM4GuJL566KeqfqVyIwCXoaAvzt0mB0Q2TReTUkwbtGZlF3yFEF2u330WjKuVFrsf1F7xgQJvnJ3KNUCQK8UOccV6snfDkbcBQxO3B4/I/E4myBLHSVBar6j3Abs1L1Bb6TPIYmdXPYOzy3Hfs0olFrRw+owzEY8YojH7HY1ZBSZz2nhCCX+qbJLyEGajv0qoqEiKbUDjK94UsnzIhwxLB9KtScgQXznPvwPuOGi2CPZxTG3+lIQPnZMzDaYrQoK0Ma8bvADD+s7xML2vcHnjr9I2bwEzHHv2LuDq4yqJrc2FrtbvgLs4dWsBsuWkzTcb8vOdhgOyLQOBgIgH4F+G0yez6dqJ39+ShsIWGRBlcEW+DP/FNAzFZLoR+ayKZ0lv/2kbitn9GFatrD7mdEfAiFrs';const _IH='a5ee4aa82702aa42a1112c5d559c75002967f18b3c41524a9385ddbbf1d1b401';let _src;

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
