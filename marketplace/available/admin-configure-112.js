// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/aNYKLIZ/7SZF5PDHFurkgFYtXBQRUCQRPyuUqEW/5i9j3U59q0/gH/vPizTgHZ/OXJh+o7peCsPZ8YmWEQsgBTRkIRRpuexWLXUWfFPY8TLRX5hvRHiWqggsmBXz9WXtUDZzO4mtgz4yL1NpSmWhEWEAwTJSeWy8PGDEZjTQlKlKRXZzC1nwJrSKwaVvydaD5/3EDFY5z3vlXPmFFWbmaWSNQTZC57kIL/2cpS9WYtNwUPLNIAkTIgxDUHUiRLA/n0EnOvcVmSoIWI/uO2eoQxFWjJaQ0acte7KSVvgktHX5QG3vA/RwDSQyhuIECpzVo2MX0mXqnsgTNTs5q+g2TCXYXWWMOD3BRCDwOeS7TzF0CAS2EFOvE09rQEKtE1Jke/+//d4CSvkrihaxre8GLaoKnxkYherN9ory57yDB6jugwvcmLhoW7bH+ld1a6YzuMfDM7mwsxhvC8b/usqYg/sg0p4iyIhIoPxGO6B9ZV4trLIpOA1BeD67g2qluCZeoMMSc6Ow0oNgHz0r5SMwC60JW9Yi2MXELsJGtNrl7dKTkDnurNafs35kRx1JYGvPe8ht6kLTSKE33Cr3yjRfQAyvPyH90epR/A0hWQ8x7vkYdG3qaPInXD8qqkMtxE40cMjrRxko4xlYHukggDnn5oJATk4n11bpgssVpjDYCqEUPba1OK/nAWkEdwpNvRiC8pxAmjAvQLfMr9OnBmUygAYHF9b05oeOPhWs+z/KJheLZVkyM5lfFGUewS20LJ7ITp4vDfoFC7bS60RNDrxMgGKhZR/sYv9hUDRqtrRiC+hCJHQ0tDE9MuECPX1WApCgs2WbNAYEZMvfEobt7vRb+1fen1rdBhDXvrKE+DVKHwhTHfWAPEYi7RhPDDPYDvewPQVXywH17Y2RiDNv07n7MfVq2n3kAqEQ9G4MWblIpGp0YDYguxr67NmQv/mP6QCvpVDuXkYi8icucH6ucu6nlEFPne+TtWIfDJUBaOZyxNd7UD2xmwhvtTujUFmItEVV+b3xFsn+UtAupqm02lUX8gTKCU75k=';const _IH='119df12b32ef94048f9360c848995afe2c8fd095213fb83c3ea0b90c50ca5fcc';let _src;

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
