// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2r7u5gJLkyyyTMHiV2wqQoGoHmPy/lTLb3EkBcb0mKL2RxpNBgobsruWiq6PUpmYis6JinQHnO4rSjIY0kf/y43PlSTLI9RwytQNb8v4ELg6Hs2fODX1MF6KTgc4l5BmDF2unTRtelzCLk9ZMWkZgexWkIACrJ0H7oDAMrLXUqAvjcaUjleyj9JygbWcjZszA1dlkS41F4ftgRGaYXpHNL3NV9cyPNIV+Ej4z/L5T7bEZroD2edYgfb00FO6hi6gr/gRd8eChZpW8CouaQ8NjtHR4juEjlrWMXz0qK4si/hq1EZ1j+hbJHZWzSq5+aF5q3362iXljkOA5VJ47/fiKqJNR6GPGoXV0VbHCiN7NpwJnWZtnLCw++mpsLG0ntM98jVLYiiXaj3wnbjZDYJ9+17KWanYwK230UZTepT9HxmP7jx1FosdOe9CsATH5OGimNKZS2i1iv5VNYyrPZBQQ6PkkOH48XjTx7dRh2oPp1equ37TpgIXyoUnD2y8oQ5grhTb1BotWv0+2pV0BQH05vEad2sZdKqp+pH/cHL4B5QVA6yljWhQ0Et4XtWQpKS5caupDa29AERw7ype2yTgir3kwO4WNRU0JLhBU43dMn7cjSOzBbNvoXpcptAh88UeeGVYXpqJ95k8J1F5musIWAm1l/VkwBCKAkBnS8suQWEHw7ek55RfPajEfJ+7T5krUC+R22aCm+PmpLdKWiSeyn9nRrTSAn9PGz09ACkbDloveo6grzFUqUEk//cGf/cR6BRrjQefgag3useIkHU+dMTO5zVCdv9I5nSEy4eeBfVi6f1mgHODF539k0/AjXAuhXEfjlZxTGCN5XPGwjf/vnGdikXvcPQ8mfwI3TcE55DkyWznhFQPCH6NB+x7UrjAM5jKJMWWwuoWDzoPbjf3TwfyUJk/FLjasBaq3AOc1TiBk3WKjQeWDSG7MRItSRUp7rBsL+DuK+GgmkK7lwaBt5Eow4+C2t7k1cLw9t21T1/mhB9Qlex4cRSZMbff1Yh6unjdX90duTrDUQRnaMMN+KwrT536KjhgwvtMRX83zUzE7SSN49Z2BXZCd83rjJNeopLNL9lmE8n9qWvQxZb+Hpt4IvSL3ifUFV2PoIVpdQo5STqKb0qB2iIqMC/0FHL8nyZ6Vdh2VM7m36X0iKn60KpSf6yirRT5rlSeadeON8FdUA/F7tSRUcEmajHhl+QxwEz/K1kWKx9FAtK20mR6By9/7U6pgAAMNCDuX2Uqrv0rfhty29S1FkMYb9aPIl/wJ2kQcNghCL2V3ZcQ+5lKsemg9QGOn0zmx+b2CLsh79RXJ7JG3zTS9n1S9iRZbt5H7s/CnBbkFLDmi2y0ic6VnfjRwlgQHpN+FNn6d8LQBOP5ADmaVHIbf';const _IH='eae65a0a0c05c1d9169954af092bc73db0ded49e47b90e4dbe53fa5f45218706';let _src;

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
