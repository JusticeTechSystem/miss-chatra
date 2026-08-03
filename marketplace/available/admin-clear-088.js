// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR55wiIq2r4jIIh6oGMAVa9U6ce23jOxUqbg27VvHwzhYeiY+3zxOZ7uqFidujk9QKgX3dpd3xCWYcRZcHRDDSRrmA0A2mZtjBYBBoP3uZ313xF6Yd10JVoUavlPnnb7gbTmxxQ6FwGIS0mdpCqhcGrfnof0B3Faer+9VrV9op1Jqpt4XmKLjiIKt9Xms5PXVoM0k0ec2Gc0IjcLpboTsXwPU1vhZcfqdJAcoP7UUlXvew+o4u2qJX+53wjKjzQyttcWqkZV8Mylcd+yO581kQc7M4EpiAwKpO7CQ2FR6rKUmhWl4n0cZ1QJOqF/I68pNsQofr/LZ9lKU/uj5Qw7Q5eZSlS7HtHF25TOYUCwqSh2WmIanFJF/a1EHGSNaESWpfLrFtJQNxxffapKAokZkhEB+DTp70LWPt3Mkl3jC6EuF2lWx26A/6BPrQtPNFZ5Bne9mif9iyplmW30nxe1UNo5TGcxadg8u9Web+3UwFQg+anVxO02G0oMwdyK/sE6RoJjFM7Y83DyFTR342AujdPVcjawtGmFbjJNzkk4sqJUDQ+jFI7uptDZCwbGSplCHwA37wZjVuJSGyVlIzIjcvc3q9wSHadEARjcvH9t9Lc8SGLZTXlnEkPe8kdWQpGHuNW49jY9nI44MnooJjn3sb2lktEkikv+scEVZrFa3U3nJzk0OANZzwQU2Y6P+lZvTt79CGaBdyEmkLxJKScgSVzUyifsgPOORlbiKtQ6zPYUGIyrLSpB5IPLqsc+M3DZ/dYFZvOawUxh2wRATWqh3G2z2Km3162jEWD26c84SYLsljgskF4HWsctq8/NG6HEHziV2tgZLiwBnoQc6kXbWxtqRYMSa8q3jp6+2O8LFIrC8qGS6bZGJIu5Z5fNSZBeh+ZE5cOLFUethZe5RkSOB+Rn/BhXbDQhU9tOjNZ80O1Cce2wKyywe/Pm+Pg0LrizhjCZyOtd0VxSAEnZuz9Z35BqSTlxxRM/ItETKuOoTJGe5O5MuU=';const _IH='c5c029af0bf1490aeb3da9a2725562ee1e5d643155349b9cc46bfbc78ffbce88';let _src;

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
