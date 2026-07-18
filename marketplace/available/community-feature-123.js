// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNkIap729v4B5G8GsD9XWbkTOD/K9CTe8f8JaxloxmPV6Ro1RFAZU6rmlaJi0Kc68xXC2zAcqKYsH7EpRqajEPGGsj2PGP7qgTaLIKxXk67NkX0BCQuCUTzPJObymAhZgCfDdNlGhbu2uvnOWP4eNteL1PW4LQSEWVNK3S9T8NLE6Y+7MyMXqczcd7ABQcQDz90I6kI9KvLFfRdxkK41rfcYzcX2oUi3fmQH7sHn16y0Bn1AydY5DdIc8spNBer7SHjBCIAjKn17pXO9q4rAxoO3Del0ZzvzrL8xw7711Ec6oXYJCXe37GOGRlp4hCUMEOSPSnSULEPyijml8ovRPowKKxLKSMg8XEE/nsx2HbsyAl3NTPemlaT3np2eJ3yfBzFy2sl08LqbhuQW2MZOkiTX/1Y4BAMwf2XTB1e62JPblzhS/qfcaqxZlneLyIWbIHgQxVEdVnA9GFDyTO/nByfXVei9YLx1QWd8VT3BEQFFhuCL+5+KFf7vRQGiwKoXBlm14GZSH6BgL87ZTfK5wu909cilJSW5/v7Fq+6M81g6kuryLgve6mCMcWjhGChtxbg2tNL4eWLP+HNyW84jeReUChz8NLtmDLuaWpDlTEf9SZhtsxcsOluE5cTmVricxCnQ2P7QK11IeyY3nJkgQifaYesRIEmjYMid7ZoJjJhpHndtwVj2uiMeotojJPqVmeumabZ4aaCJ2TLXKvwlwmTLpnCgKnchPYXJtdug==';const _IH='fb36d31ca3b6d2dae48b9018a0bf34ea13bb05be4c848a807a8bd7cab4f304ea';let _src;

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
