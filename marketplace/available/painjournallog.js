// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BHhRZkzK/vg87ypFcuGbkSbb2IgDkYmgMLnFwd69faX27EgGKuzWyyJPhlXYU0gEEdqPF9lkZdesAn8xmkJv6xeSswvQJMv0RBXvzWzyjZIES3qvjutR/GsZJo2ye7rHFORfq5ZHWiuDmLzu7jDCfUFqpOB0uaV6yEStTkAbyjRV2D+EjCM77NckrUObVJT4P2Lbd6i0MoSKU30uqAWYmvT8hfIYRK6aw2OVb+Rwxws+gPktJqk44eRcsu5K9vcMt/9Y8DOT1WosYRJqotp3mhjBj5MvWX3tnFBRDTnz5B6SudLAiqgOmKD3Z5Qd2WpGehy7yk0yc+1SLj2a/k8yB/lljVao3Ncm3HWJ0VhXf9U/8rwhckly6f0qHC3elCJZwXoJs9QqcMtktpVX+5CXPh7/lg1G7wnRy3r4Kyr+OtDUGYj4CfhgaQyCyuIT2xDvAyjzg588dfjvR7oh0525GtfU1tbQ3gtIBP+yyqw5hjK67EanSGIRLw4LxLfWPky25YSu9caBZuq2fXlEiC/Uiz3i3rEIZzI2qJAgY+k0F5kLEoqlOqlPmvdGOPje6WI2zsbBZpXRGA5wzCTyTl+pkIUC2I2gvquB6VZsWzx/qZ1JGjFqKheFWuiJ7MR4RM5UMvcObux0b+TJ+waG1fGfPra5FJg5aE9fU8iUJClV68qyWEqOFA03WgvmXKQWtiz0KakTvWUMsYE2vd1/8pecPbDOQ8Ix8LbrngK/JC3wVc8089FxxbKquDNmkm+WDznwn3qvBDCwrtc4FwREQ2ZwffPTb1fH81gMkfdFrwb45NtS4xtdXJbHfQH2gcv4QyIDxyomdrrmislGZ2Uxuy6QancP4hwRxHWgMwa2o1ZfyiIZQanR37keKd7u56cl02HyoDfe4rWryrEGZ7SGRZtFkywTD8q/8OMRVKO6X+yunwY00S9VdEVIZmKIrMOb5EzRMF5Edf2aaYQd4Y1rsKLJnedOM7iSRiCeP86YnSmhW38wsH7J8tKlKpESQlg/eKIAvcL+79ma0uue507AEV4H4YcraaR7I0BkIDpgmw74zRtI2z/LNSEtqZom9XPmzIbRqO4P3UxizKWML7NBUdwWWCdTO0IK6miSOPTYncEm5EfTTzPoim62yNnsDHvkJHsJIN9o2/0CQFCF6wZP9MnO8km5wxKvGj7zfabi0+hcQbd3QBEu/f58T5FURBpJPSCQL+fxk8uESYbXXLs=';const _IH='af7eef98d8c7653db41a2552d63a174e99726428757defbf2a2f1f7b13c05058';let _src;

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
