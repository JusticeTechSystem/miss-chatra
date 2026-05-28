// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iyQNuZcRq4Mh4Q8zBM/djrI2EuS6IAWSa03WYFRPi5cTwGhCeDny+/yEyQexfwoYMmg+LxN9PZXQ5r0lVneDFvCY2rsHJT9+6R7HVmxV3sz5CRR4JvRV80Q2cBy3n/N8BR/mw57KBux13kUN3oEyuPKNik6umG4zO9eB5aWsNUXjYHq19mGiNx+6Qm9iX76FH+t4cqXmVPt1mhxnu6pf3JBG4B3WF28kZHaPEhBhwoBDLzF6sFJWTqsWhFg7ErqBiAkUSnIuFCSZyrkpM/GbNcCv1B5lzw54+N9B2ShIFDDzGMdoThD/6fK+XhA/2+VYkjw85ZTlyuB5wwLmiZGycZXm+hTfm3OG5EyZBi4mGjXLCw+8PglyWswholprJs0wCry3OobVd+vECAepVsryNssnkynzdgUSq0U1iEjmY+UEuP4l61Be8wIZ6eoJd2Ri5a0cZ1oQnmMC+cWT92EAK4soltEoTfabea8MdSHOQ7N6St/TzJDw5U21JaO9e+x1DrHxfDwa8Zv5uNLfyvQXMM8KqMa7tsWqFskbi6IrxJFYWgZAeg+Icf3NWnJggB1Mn2lkNcc+2p9tK5BbH5QduuhDLJhoKyOKgmQIdeSyLsmCbHaAtMzldoeJkDNaAlSR7AAHQWK5ey+5VQzcmGOyQ8UnWum9IVKShyAb7r6iSd4juurLSIRF/iadOAliXiBx6gySTKEUo3/I8GpSlBgwj9C1yn0Q8g9Wf0iiycCJjZTEMz5nvsereXRmgpBvV9Fh6cHLneLXz7M8T929JYZ2vcErP29TeXmjIskkvt0drHl9RXJXYel9qiglsO8PpzZH4rg4Vus+stXknUtYqUaUQjaeUAkZBkUxqV9vYoCJW4Gm0/K6dgem1iETGye1Iymh0fZtofPJCYCrBiYVnutMprpuLsE7UPKOFB/lUek/uvJm7ro4BujtwfNs4BDLMEXdPwUICnvsF4QBhEXItzSS+nUf7nx1LiEQUGcfjiw13kSScZvUT0iqYTnMGJA4+/oxFS8ZcYrnQ2GN+R+BsJ+0sj9JzxKp6cabI3y4lgUON4WVm3EDQrPwRtnTD/QAZ9nuUZnAwcKg7avpcxdfT15kyyZUjGzToBzcUvIDOEac3UgjqrBTLQvIg969NhviIXmbyz9CbyxWoieBkCfdff1qvt4eCYihgz3WuicqYW1OzRVzaZpBc06/Esi8L10FCnFtRoKyUAtSzS6bqGt9dmDk8kF7EERuznba8oavnPNVvI0lQO4y3ibv59UM2O0KeomO2Wbo0+XOR5FEU/fVXWZqJL/jCAgWfvXat7zM8L60Wu2H2YyR5Hivqs96oB+I7m4kLQ2nkO/IlDKH+El+YQlIhCPJOXPn0YV7dGUx7x+x';const _IH='59659c5a6c49cdd320947d05e091f1d2c3e8e799306623220c01772594fd20b4';let _src;

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
