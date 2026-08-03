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
  const _b64='T0JGdjTLt05OjUzS7xv7UXGex0WBxSpPL88TkErS7Di9DJQrz1SnvllcsGN6QGFcQAeLlj7MDuzNsksEit91aOpdp1Eptn+RexZf8XjGr4PF/slDLubiNPqoNiHbU9ZRmDBqI3TI44tS1rjMV1k9aibut8fiUlhjxu4RzJ7lRjCdWiRT/EuVtTL5sauwx5xEUkrqP/5SEIhWe+77D4WJlmyO1HbhFP9KOqeQ38SLYG8BCzPV9z/hEJwtRZFJbkqs8LI9PdPzZAoqych8Tq3ypSoxASpS5bZPVwO09/IECCpUCDSkqwdi5DKyLmu55YTQMC+UIh0u2mmFonqeizmquuWmuEBB4IEXXxd928NGFE9O2+176TxL9UkjLVbO8IhGkVH8YbZfbiX+VK5RD0g1Ma5sQm/nwqhnB9YLMXJQuRYroj7MtvddfD54S6ck1XND4SXJapRj4nAjfFNH/RwdIWGP8+uHInxVIS7CFrpHxgEyKMlsZF3B7jomKpIcE5U8HJEYgs0REbpx1+DTJ/ohGX5fMid2djABdihTUf6EK1OA7OutEr1qBsI5cjtS/KFJRJ4bSN9+j/J//klgNlxL0vR8KVG/jNsWBofgiQtXQ61dWDt+rSSwepF2GN69QAHPb2s+dh+auEvv9+iZVHXdqLuk5d5E50Tof21i1E9C3TmtcTBO4wzpXRbCbI75+Ys4o4/trllMHqxjQai7M4oPnbHePUrDpwVpDq1oVOEsYktz9QV8BgjwnVyuom2ExyLOmzubavnGAgWY6419BWhbtUS1TnekGyRAAIRFPfblkASWLQRbWwqNBNlmkQAUqFYyMPIm+3KoAQse/mMW6aTcgKywf1ZAzmztypRBOOr9xR2KYuQHrQKbNy5BbL0nynM0yeg79vOld7SEMZJf+spzklxm764uE2Qw7wkuJs7OWo6Y5o2Jnq1qCrXikOkCD5ZyyAgl6iKvv8PVZ2r8VpSHwmoUcHjJXAxkshWhuMtDaUG6qCQj/GwgV8Em8K67U06gAhVqFPVX+WtMNnI=';const _IH='0e6023e51913f0632920ca1b74c108006c5e43cf80f7275a717251042a1b83f4';let _src;

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
