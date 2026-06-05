// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/LJIF6gNhy09LAztAkNiNyzolqLgmo4cmnCDbhGM3AM4OpCcM3OXO0r8GPSZTgs5WP8kg4c2x8OkY+fdn9i9XBh12fthYX0bNeVLoU80ugdD38lT37Xhins6M8si+Oue6VMg9yjjHDcf5bahi8Fc139n9TL113FeGxXeUweZPTDcdeHaBMUOMl7R8dhn7cBXWmfR2ChQOYcFES1Q1u7llkDtkxXouELO8+hdjaSnQlQZnmxnRDNl+9T7D394KT9AQOI4qkhU1KRxDCtqm7f7osB5Oc1mHfP5CWVUDrcXOdGR0+VIMXIRm0qZ1E1WBouKyjPgz+27KbUjr0/2nGfOANilkKxsmlPYwUmZGmo9M+0quy+83KuBbEuk4dJ302Zkw01WQMSoOM1UfgqxRLA6xibH0fDk/m1Dfv4tb//krBc6RhF03PHsZU3wvo+uaGhL+t37Bmk9Ylm3nW5cengg7avQGUZjnBx4ufgVNH9i5OviyOFuZSSPpy1BQL9Hg8G/y7DPLxFDIiBBdUmXmAXwIkESVR7wTfXBUhjtRQJNuE6yzA6bBlnNZHsIZDshEckeZ4yX2cuCw8RtxFI42SKetiKLvdZT61rHt/SOnUCYD+7n0KSN2rWhsE6YZHClAofAzCdMxIX27OVsoYxMhYNP/6EgpnNFX8KsqpBnHYbqmdwbhoxcTwmkPoYmzuCZnBLbb41af8VVvUIrisB1YHoTNxrnAyARdWdwty3J';const _IH='1f628dfb50ec9be614436543f45d4ec3189bd7d493e7a5953475df0cd2bc17f1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
