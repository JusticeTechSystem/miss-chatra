// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvQkaImUTyOPwtWW4UYSbzkDkwiBpVeVO437xv4DU0RBI28fhnTPnib4OLc8tTUhvX1pvKqf2D3nJWfsYe5ontw8n2T1T7qpVtMD3TBX3nqD/75M1Cj+6twOolaVBoj8Wp4c5I6suvWhhPZV8u0PxXoeaGuKfgrhaaqMAAFG1XNhVvAKzhE8PEd2/e+BsjTx9oK4D36jg9be8zr4bM0aJMSgsR5gPpdS2sLGy9Fm7OXrBhZH8RxvhUe5Sh8g6Fl94nB4TQ0n9WkjZ3ifLbjPVt3hqbsMyUxQbPk49N/BnVPI+4W0bzj6nZHZh34KQmHnupWo6OwYj61Fv4z4bS9dgGcL8SuDnCanWMHgBTiDw+SarpFN1ExIMqM6lFYXvlA0o3koBKmS0wzMYFb4MUYBiGEsICJqQx1jI4j9gSLGodUHx/vIJSUFS6BnsDiCf4cSaU95PSmB+l8fydzaQD3rg30N/ZwV1kktnLCbJoSPD2vcsudg5rSsE4U3aJWqrp3QAXvjv9cGNHWJ2wjsp7pjQ/YT4FEhpq166ogu15ulIC5wxHxEfwMhZMjJ6i2/80ZLRuNk0gvSdISL7Qqbv+VA5lj1l9H0olqrO5+VS2p75fODIW1gHsFCqMqUdGgo+sS6Zfg4kVXPbU/to4k3AJJbMdVKDuiRRnL2kSkS/cyj38Y2D/5BK2M9twK8fAcQ2jlm1cGJL1NsJT4Dua/BY5oi1GX6XDtnMz3hPHZXLIl74gkDF9rYyNSYFaDBEdL16HdmOC1sBKx2suCx1m28zjapCYMx2BQ3qK1qogQKOa5Ufnzul+sQQ4QCYI9iyEQrnrN9MSxEeATvwalckPwE3vaeZLL8rEcqymDQ9toMd/WwxSezQeiYFBOFkOvf8OO3l1hu0i+2tIDHqVE/i2aTFAtrV5MmOzcVvNZ4IwO9/votJ+41y4R2uG8DekWsSLotfr/p5KhOM+ihJVbi/O/ec942sxbuDDBO/dyGUu6osc8QsCrDvxZCLq4Kt/ZN2Sz/9bshV1y+Fzcpfof9LZOPB1m8Ls5lY=';const _IH='0861a6f20dd7e0ef25e8a5aa8adf15d9790192496be1e8b22dc6505fb469ecc7';let _src;

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
