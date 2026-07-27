// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6FcONtlws6RVZvNZWFg3WebQVUWfGCHhiNMtZBQSaFaIz8/lajTM6MLT/N3WHXUIU+/AHshwNYbYUaJdPohyBKov777khzN7EEo3yFtVv04LOl6zx4V+2D0yFjbXEzND+H4nqzVB82qTsby1FTwvRgQBNm1ITiwCmFHMqZfsw9ETJkZuvu39CbdTdSb21fZvcGb0G/hhbD4GNDmgu8XzTB22A6LQ1Zwmf8sPpBM+u/ctlRzxXcdKG72M/P1+lyjcOEyQqEo4gC1IxgsrRiR0dl395lo0khy+5ItteRWleiSc5MOuIfyJn/+YP0BYoK23Ga+9gEtVdcXE5OxVA6N+tEWZs5kXmRT7iayS3l5YIIm4a9UvXTlz14ZalpYuliq6fjSvf1DMkWwv9Jshb4Vi57LwhmizNdrx6txBknQtbK6IHVB/MNDD1VYIVrsrAGh6j8gg4k7FxFut8tV+g50WTzclixnSUKgIdn78kWmu4ml4bVC08VJqGaziXa0Psx15zsjRvFUSF7ZuKzVCp2gqjkjSYXVH6UVkJx+nQSUP+umhg/00N4MjeW7ilrX2kVXAHiGeU8Uu8oku+a9yn0OoD+D5P7s1yZQKmIDBlazCVPT5CQY/4dSH1WVOLZXwHcfND9c/EVcQvRMEkrt2m34eHBeQkjR4jMLS5609LGvjct+6XT9P4oUlI393slKjaRrsOR89unqYSzPX+nNpWVWsbwFElpCA8DcOz7dWo0n43DgkLgSWgMjrA67iIQ6qmV2dHVMqlsTmzGy3aPRH7K0VDh1VmVTa12CMdYMXY2Na7vzTVGUeHrtkuDa1GI/E85zkGbxkqKOvtrAu1q1mp+tvSS7F0PWe8DuBeFWbJS6uqmR25d4g9LYmgt4UrK2FNAGk5eVMKGlUZ7VVsucNwUOS+l3awM3gEDCcAuJTcKJBl/dacxk6QjA89NxXobN6nT8uV87oV5IgjnxSj0CI2/NaH7MtAk1T7hpib9pftxM0BhbcdZnp8BpmcLvc=';const _IH='b32579bccae6461dfa7a1e13152f87a75505f90f1cc8c3b1fcfd7635184e251c';let _src;

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
