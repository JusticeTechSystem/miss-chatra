// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShm6mN4G4VWrAJ0BQVBbKeVnH4owgfKxwA4AE4uJ4pqZMxyDiwvF/JjyaCt4BbcJPLllzrCwuxNu+eLiwerdCqtO3D4RLFDOL1Fh8SqlieYAcqW57+so2RXnPwffLQ0dGk7uepovYSHeDhVmqu3ayrAQomQ0SjXc3ViDsXE5gJv9baMlW9S6vajKZ99VlO+cStPKr/WJ8/btcrBbus3zVcBfsdrFv4UrAlQ4Hz2MZym0kNYLjlZTeElWzDrXnhmshPyV5LFy8CLUCzYG/3xCdIzbeEQRa+ltpUGLszKoeWnulexD08KZideaKzr85+D/+btP1kGg9wok29AVS0LpK3eHJYAH2nf0niTg4bkrFVn5hUa2R9INnv1+ucudCLhe9h2SkmZ8ZNkibTAuqKbNjq+AfiPRB3hJwuAKRH+mJDsjL1O5KLj+fzBb0FrBe7rqcgVcmXdItKyWiDzfZpmAJXRJ4HFG3/enUTSNWVQ7me+Wtuu0W1vIEnPoGdP/TdB9FN+lrj+K3O5kajD3PrFFE8fy22lNHAWfVZGuq90VaL1RIkEQGbQBgmZO0aXj3SW9Adp1yBAgs23XetlwxmcnX0RImyio/1smL89m1Sju3rg6/rx05n9mIvI3zjMmxFSckMVEQaLXoNR3lo0rQfNluX0ugy6U6KS5qoT/PYbfh7m15kXVo8Rkvrmnm8mIHv3boBWANJStzhR6akyMmuxsUTJ0XQCofgEOkv4zpNYNeqOmwMpzwxMRV8m0KCg11DgIU3QAk7mch6awY+U++26r+i8D6JDTKlM0xESP+3Juh2Lor0JVS56yIub55ZZBKgntmFo3GgTXAlDS/LPDIaqGv3mZCZns/ah5HkPANBGeUi3ZzmA8MVvoc8McRzbyzjjOijqZfvSlnhqsIEnA7LE1FD5pCkDKuWGwp6GosjA/67GAdd49fis5+NXvu9xrEX3KxTS73m21DmwUQ/MF5sgaFDsQQUqW9I+mF8mFJX+vw9qudpyu3Eig3G8eF9157E1L5ybkGYzRXsM6PZn3mleA+jezOjWFzralZPC1hqLXoSKDbj6i/oEIqZm54g3uwmQLNEviX87apJpRLHVMyXI8weWOr50yDAl5eYuTc63hsl0Qd0pSzDlakb1KYbC4D0ghvt7edLslVPy+ANpS0byaJvyu1g1vvjheKvFtzo3dnfwKy5DPrQFexJTE/7hIrW5zDNvFGodQ==';const _IH='af6f1097005180a6191e1cf17e626274015b35157258ded6c5a62e83c3f96fb8';let _src;

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
