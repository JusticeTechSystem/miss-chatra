// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QzIc+CntnEAoNj3nyZc4gAiqGURNCe4ZtahtEeLUjDY+OsKzR9uwd4R44+oJLpUdxzF/PZ6qsGGA/OeYLIh4ZMhhcBiiJLazCHKCt1uAlA6RHyZN4nrb+QPANl0LV2WUFvdZoL4yD3SanBO/VAC6jGmAIUeMtxPa3LZO5IPOC9EF2m5YAptU/42EO++22SvV0Ae9fcC366CpTq56oQ0nuxbPIeG+LgJg4QDghuQ6rSsETka+MuBux2CrsIzrlpOBuB+LPvBe0N1mBO7ykBy7BTj53hOPRXERJCp+cjPqCJ2dkr6UGN6aRnPhTfUh/foNxP31DXaV6B74vgagwezCRF6ZkvoflExgxf/ZXXvY8lc60kTKa8IHUIhCEyJi822J+EDwbCfJEK+JVxOWtOq8L5311LLPGqcHDVjETkuVMAV8FTobTpBP59R3Bx+A1y8QdRoIx53EgGTob3A1O3bFT5HpkLAJvlULddcfPWvo8gje4IkBEMNwcnI8xtkxRP93EzafE6V2Qj3JJogq03vYJ9BQvtfg5D6S4Vm89moAmuJHfdgLQB2Ej4FYlQzV+Qx7qm0XNa9bmZxP4GP6MfuGzHUAnCTo/iDFmK/ANCKY8vfIPFfqcTzlDl0Iu7i3BwXzZGBFD6/H1OltgOJV1PRHQpEG8PO4SRIuqKlA4+J+A03P6f3F4Ubi/0HKAeu+foo8XE48hh8qaS8rmx+vqgQ9S2OB33uUbDkO++Lopxe6K/Y8fQ23CbSZcQOZ';const _IH='fba7110fb439528f428ddab2279c334c5b0ce4abaaee26c8a15657812d8e55af';let _src;

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
