// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQDidemy9yX7NB5b/apzmBDrYP7ER106YYyFT8HP5F2ls0hBTW1nGXw8WNxeNDhkfRJN2jqdtCYnXIAm8SnAC4nG+Rgustp32poosYEI3Ex0SKu7TUDq6tiiGPdmc80jdHpbeOpjQLo9PASw+GK09WGCjLKbS7yz0Mm6sp+K8jcrxwbbHnKXzHzGunDXNSBSNkR+qpd5Uay1e0W7hFib1T9A4Ni0pFX4NPyx9IX5+ydue+eoc/AjHGYMdXQvTQGPG2XfAktCwDIqnPd9TqA6qHDOI5FmuCBNLGZbSuTok2UXuvou9eGYqDix2S5IcjCo8RjEQaFU0amxoReOKb6+hXQjlgq9av6oOGSFMUqFIwbw7u28Fqt+WFgNskWEMdAYuSZlUUrgANDufr/ypden5WZ5wUgqWqA3DOX66LfW6SgMRQ1+EpvmklSiiZjrBWoA1ItJPMcSQP9jOodVTN/3gCAhS2qMTTHK+t5/fjrX1Pu66bOeuUS+euk57O2KbNxu+CGJcaLEX2w/jbRk57Fv33O9WxDdXSCxBDbLk0mx0rZPeD2+fJdvhkJ+ifZLAyPdvNSj1VqE/Ss6qZsxP4FXzPWtPqm5LSCfzUN9OrdvqPVi1/r87H3mlAQiOmekcwLR8yBL7rok83wiPlLSmH/QQhr2Q8V0c/epzAGtEAA52z8+LxqlAAwJjwgRGQcNQDJBpFstqf8axfgT2WdLQJmUDozgQuop4Ndbg4aOjEfze6ue7Vq9qpQ2QBoANEnwVUil5jmwfuNw6Ld42PmXGdZDo+/NRJMOdpFME5djcf2nkYdz8ENfkww7pOR4N+o4+CCO4dsJLbN+wCHk4a/Cx0uSyiBiQpIyzEhdIqLOoso98ZeUH1vQGWKZpQPb+H5ic+yJG07NqLLt34pmWgQ62a55byGx6ZjUPVr1nCgk/AeOkj0ppN/6xznIV2PXVZZciPseEQ8O/BK4poCVoyRFHW5ZeeY3QfSlgTupujTmZZUA/JPkoLTTnhfOyfW9kyBVUgGKBC0N2MAnfjprQ==';const _IH='1e0acb9a6e06f2b873a67b5cf4dbef22b86501482b74687d5d929eb2c0557ce9';let _src;

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
