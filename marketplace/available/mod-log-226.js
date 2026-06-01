// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2ALJaccICInIMYrwg8nm/kLkn2+Q0rZP8hJlcOXMWyvl/2PdQYHX6NMEbzHh63zcza9/gCAbN8S0lt4PkUJyysYIiqdAOn3FRYRECz28TWpfadyLMv0Gz+wxhMb9SrmKVFeJWH2vNoKRs3zDcGFjEC7q/dyrthzEDWFu8keipg0L6JWQk1KFODtVJhijVfkGkIYAK117VkFBcDo//cYD4OwHH6L6EU1s0hADvmQORZSmH096RMXsfvFvDBt7v8dC2Sg+e5a5J81N3KF+Magj0YPWxt7V12psMiRnTGETW5ScNkRGjpcDhViSaxqEzuYp6LVsKhrZUNTznATxIeXjuewOVmlQrYnhtJ0Je3i9jRyIyLfw2HX1Tjf+Uu2xnfOJ2mP35Cx1oiXSmAb19o4yMnbEYFnTZ6hkNKe4ET9NIcS5hxKVWu6lvWqdB6rIexVI6mHd5NaGROwb4S7G30vZ8AZ7I7xRV3JVFIBJxtoOMxuMmra3BXYEVJDNhqU/Wl86qWxyCLxLnot1QGLE6loP9/oCO9/11lN/Nazy/a26GcfBa/xbwS+vdearcmFvkB5itXpi7JDXb/M10Zy1mtozKSnOZ9nqFdDVX127KaOU+Q1nDAItXPdWL3Wrw5x3gw1ehFN0ygTPt1kHQQBYCteJfWA3RPilVyqiyZ6mNgedpm1sGeRuKqUwom7x11hhHZvT4GPSlGiRx5ESyLgAYktZegotAom054o9IM4gSCai6aUPbPGJuPuavgWUaKXOPiPFa2vSBZdyAV2vfH4SWYlNauYVmlsP4U1yVMkRM5O83sNkoGPpj4sVRoNm/c02MIWPvwqvIqtM8E9u9HTU08rvLWGubwGyATvaBXIxd/y5my63SRKWrzWjAouKYxvkHu7k66HHqdTpCj6uY3Q+ZmCmlysaIKn9Zo1be7jg0V/dXG/UUuzmfoEq/VrP2d5fU2ND8oeyhFkoGyU1ZLtx9CJG76XBEfopPc1yUmyLMXiJeHiBXQQy+M6p6ywexKbsR0Afc+f6c28k444fCa59uR3j3SPlltjM7OVs1uCzw97atN+34hmEPrtd45WPt+jHr9HgN2iq//yo7ZUANpZhH+FLbGtLBavSrFuzmTkR+RS9f6Ahqrouirke/gAJwqT8s1wZvoyjPbVazSDESfwNCEWBcIHPXimPoAjnom8KsACrTBdzdDId/j41HGVP36Mj/jx9IlfeZFy5HEZG+wHAYlK5KODbxLXwuAqwB45GuVfU7e1GJ6IpejBHflSnVnHPx4ctpciiyEkCF/pOu4/zmAcg9twHWmLguIs6D27IUQk7hL0cnCNGTm7TW7ynptFvJohV3xjxUzFTTNqhOk=';const _IH='ad60cf57400dfe583b868b245d3ea2d3e63e423c9e0dfa495f828205e47db187';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
