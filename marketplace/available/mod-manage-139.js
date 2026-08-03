// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR23Bel8vXmhsbJOO6U8nsm5Vf4TQkzPsOAqILQ33/8t5N1dBd1F1YjHpcKiqAoISJrWM5wU9klm0lrAianG1TXCzKWApBqKShJ3qJfxVXObHudKb+8xlJ3GMJMQgZuJ5F39fSo7qdPuwpHwpifqZcP3MinayZDhRwkxr5VSYI0zPTgYQvPIZ19xpe//VpjKWBZbdUx1rdTWXtNL0UQmhLlmWARaA/0Q5FgK10E/iXyzcJkV2PsToM2Tcl/+f7PGaRu3rlnHZreh7jiSLWzcpj10g+6Qb7CelY5ksT5z/w2Ek6l33koiQu9wvQMlGyte1fGUoJv4rZwbtywvK517IcW8yrMd2wNmgXW33wcLE+q4bzR855ad+N9gOPjG4NBc0iklicZZcbp6V8GKPqRWQbWbU6yCSASDYp567S7ztF9TqhPd5VUUWi+z32/wX0zX5Lf/Oq0ClGRJmbz6rvhdnlTHYgl6mpDpNunTbeG5G9wuU9W8Sf0M9e/+dMX+sttjEako80w4Amjo31MLOE5Bv0907m9daJzzZdUwvUH/2MemGJ7iPk7m8mCYgTThe3rT9mqKpyI2JgGhPvpw6lxABzRjXig6HwNI7QdHTtXFh3592adHjPQUIOQvcGFnHfRRnwqO/bJmITXvSSbtJCO4byl/pfXfjVa3whJIOA+jCTZ6kJckTlkrkjNQ0Pd/vm69wpk9ugpj4S1l3edJTzw5Djgl4PZPGGiNSoqvVtt35xkbK92rf0tLHDm5Mv00/hESDorSK6o5XgOPe0hVnjPfFXAzMJLnHwwBVRb/YtbqELlxXAHS4R5AbgGc3RvTD+ppfjJTUEsoxFBtuOcyfwKKJWTcocUKaw7qKGumGMJAdMK1MDlljPiMN4vzcE08dsfknNDxQT1AV0MCeZbN20MnpDJcy4LRj3JO/Ml8YjfXHKca8h0NUz2sNUOjoAQVbwLhxoKRwQ6+0re4KfD0KvnhGYLVqFB2PnSSXnAxkk4JgoP8M4BJLmBUd6XAimUmX7CRSnoULuPBnVjljoak7HaSUo0zRyHNM+quP5d3dV8UVJEVDDq8eo2Vdsw9fkME/C51Mb38UXO0oDFDgNX7VpIlcW0n77lOudjZ6pMPfhmo5KJrcy/t1BwM9uxvG++tBxSR4eCIPhONDkp/rXB15sr5x6N6e59L18nkzifTSPQjjbGYgB2DfrnIHPHXPZ+RFQOX3mNOOdZ7xCV3uPvZOjRnqD5qcvY30kmyn0GReK9ndSNNon0PUTmN+/sV1K6faK0X/TRXiUBSgYR8R8DEwAQLx9IwmocUO/5cAgfhKro6iwgMRRqrsvxgMyviYfdSyP58YvaVXArOs2RdaqC+fS/Yh7eaKz2dP5T1z2IbRvFX+ynCVlil/qR';const _IH='6a27963fe3bef3476e28492aa108f40a252121923bdf62908069e96136a0e5d6';let _src;

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
