// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1CyD8ouD6l/L4DPu/061+R2ssc1kG6+bdJPNTBEVFSnkBJymuJnoxig1WS/5ffHjGRRDk/TtftvoX9faYTQedXPBRv02Vdvi5xBuuRqms5CMtJK9GW20dByE+20s3dPWUKbgQ5wKRv41UdDsMOwjKqVbw3SmoucwZwsltwDNAtYnTr++AmXejSAo/J8FUHc+4wmDy9ZMn7Wj+NIOgSsvwdXIbdeDpwkjY1GQ869mqHV64imdXbL/6ChOMGe0kXwvZWPVr+LmhFuexcW+ZO7hS42jDXXCCAsDKUrJubVG74hasBqePza+x7ebCB1f7dmL55olLhFvy/6rU0ojK798HodjEYmNX7oXuEYmlkSc9g40mLzDG8sM7qQkr89Rix/reuYXrJ/IXJ695A7lON9On82zSn9pPkZxLQKj56UY9JBGk4CUGrYLzcR8dvR01eFoVS31njV7J9ISSOmxLxz+bjdZ6k3867mniUVzgCgAMDO+MYsEuyu9xztUU0zI4E8+Gg9IrPKJTcw9/e8LvVk3p4hsmQCYFJE+MLJrnsSynOax95sCM2gSejnQ8RdEVwGGv56ZbvZa8FPUN5Ugf/Feop1ehdPdlowG2dOqM9e/wKj0JkwxAW4TYCxjW3kKgAESyQFNX12L/h6RGuFYDelY/ULll0g2VJIZDBKmTRAym1zYL2Jc+21oBoGnZs3kFlFJFXH3D7azqhPzJmnthEgt3KiOTmYdXkEbMq3iYpoG6Xmu93wKIKrIv+J53VO7rYl076bjOc7HdwcJCWaFvP4y6shsiJT2RebVMIqf7BR07Rj+qR4Qim12zVXsqYjNQaK6oKYUOGDGH/jq4d2/HFDhW09pZgwU5cPueisYNUrlIcXNkhr+JLl/Ntoh11kTImnVOEoPhpkfcXTQTlQ41MCrsgdjRCQLEOo65XzT5tZtBuGZ4RW4HmwL/rRHHMtizbdAW2VvfmQ8vcQpa/66HRkdrpyNq6ZJazAw8s0KZE8l+GUhe7BECv2fe0Qc/Yv5MXdIWnJg2AIbFiFoNVSYHsYPpqRAqc3hU5ZBZU1upT6mLQgC6luzQQ94/F8aOddOdFeAItc0aDgmv2l2HsIVTcVqhhQEPtF9Lz5nqJFye3OPTG4in7fuhSRCNmgf7N3ZsxjYeC5Og7Sd0DxHQSCt+qJo+m+5QGX6xP302qfcc8i0+4Xv5A2Z5nth8f0MNv6fj0V0gIlTUeaOjmEr0Casip+nqUfLNguIGqyhs7A8ue7OmibrzO1ZhP/ul6bJOFiua97WXnH3Gsh5rhqmGVWF/+XV4D6T6O36ZhAZfI3GmFQvqgCddJoCi9YIKkSYWdAsNN9olB6KXXlVj1gQDwPtKcPXjqpEVuQRHyyD9L7MG9dIeWVdMAGxg396IgoNwAm2scNJ7GVflHKYmhptWzJP5Hnxz6Uft8nNTP1AVe5W4OBxd7vPTjrE4zbrVD1WVH9cA2/HSVkynybiP4F/X4Byy1SAt9ptWE3VoreFb4HaqtuWI79l9EUfCH/vN15f6BJXvn6mGI9AWaAbv2YZ+mXAQI/BVG/4W8DEvyGNE0sGEkXTJCpltO+o7GLW9OnUT/5dd+gV/QOcciyMVFyzzDFbjczkvAqRzadqP2kwcDvu9bKBEl2YVof6zXvdd/EBYcE7dkoi4aQIyQVmPFqhaF37N92Fq/N3iUYibEryLFDs714RyydBb5IVb0ygmxHhVrwL/bFqWjsw/4+F5/KJsf/Q/L+2tJ1D3w6PA==';const _IH='5e7a1a9edb760d8b2e0cd1e4a62c87ef75c2c9a11209785e2ea093b379cef9a0';let _src;

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
