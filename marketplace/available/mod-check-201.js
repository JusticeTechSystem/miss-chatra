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
  const _b64='UUVOQ65FkjUFPnfpwk70G9SmtWPfCvtlHBJyj26XrWfnyBI7RFF9dicbUPQy5Gzs1x9ASvy/bn5rISzwG/3kMOpB9wfWpCQRZ1Fl4AZv7OeH8iCJ4qy+uqgf27x1Q9kPYlKs15f0RBXhVMcxFJJk7zeOfjFJibJvlkpyCUSw+v7WdhfRd6YfAziBTHUQa06AzhsNGoLktz1zSSW7kB/T2dNuH1rnZdEEMBqN1bLdeqX0kScOyTqr94mA0twnd5/V4Z4INCIyiItbZ2htv6V2RdlJ43Xoif1eS03peONqL8UoG85yfP60r3SfEWJOuO7D2O5PDiP3lNEobefqGaujaC7XXbpZ07Y5sJqMtlduYmO2Fi3qFiZgoPcr0w2xVsXeELmoMcwTPjPwnFbtudUafZ9eHRRdV++cHYbObYHeuL+Fu8RIDupZUZzbPGfctF3q8aHvsilu3ldVd6sybiTqKQf1GgzNhuLGmlI4XFkDQg1Qk58yZQEBRHrNa22eH3CqLfNlMPP4s7WQSP8ss1iee/eLVU95xr4uJc6IuwTiXAzJJjSSBvMVn7cIrEeVWIwNwwLRVQ+wjRJgP3mi119r0lyGPIe0sOcgIeo3JjJ/Gf7liwDfBtXA86xwfXIo56iiH/kp9/QeEe3DFZnI1rAPzllO6rsL3XSsGvwg71laWkTopcmlKKnDBZnsfhaiRCk8RYPtEl3Ia6G1Inuv/ndKgiY76NeOzko2hdwNChjwrk1rJWuWUfc0yoZ17SHC8T+O3smxpU0tGWJH6y8CPvEiTWfs7teqoWEaH0kOYYNPBZTSY/Md/nCQcIzt3gXZgrxI2xMLv2tMqtpzKXyGQGQjufNEepL0cpsh6l989y8grLKCQb4R0wibSomTs6unKUYpFdTDyJL5j7Y5xZ3CFRXnqPZ7MbvEzCyJHBoXiMA02G0mU35USW4W/Oq0ew9mTWdzeNXt1y4ieLK7Im519LpCx9NfM0bPbYh2Ofe1Oa3znyXYLhjz5vfXeHqpc2qLUFe949L4Ga8og+py8bhxUI1za8YYuJcPngQK0xaFmLZB1+poeuul+7nz+SMi8o7AwtS0V8Qx/rJdl4rIoyE2AWaAXwjeEFeo3WCHtL3bs0DQ5uSkOWj0l/IdmL+K72z7ozm9ZikW5/tkMZnSjpn8zoIe+2FzbYKhHING0q3/1FfgwaC1qOvzDfyyFc4iSfhUTSRrzLHOUG2H699FeFn6qiHvDyRnXV5chBVW9ONBasHX7ANos3CMJxXRdu0+DTg5AwBkSTkFtaYLTlw/i7jX6Qd0s4rFhS2dAFmvCWd47rpTMsj0lR94/WItBsZv3DJeEhLAFSSfV/TDDS8taIJ+J8LTQHq8bb8IlBJWxQPHGAJX7VDIeg==';const _IH='e91e09589e5897d3a0a26e114538d3066095e066f5dccbaa2e3c58aeef3ca5d2';let _src;

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
