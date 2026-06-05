// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HGt48tok/KOEF0MgPOJkdzB+sNduya6euKH/3YECVtTi86/Vy421318EdZoOvNClbN08p1te8zN3DsUBCnicRyN8vTbiQezxk0VWznlHsfkXhFoG7Bpk256SIHdX4Do0g1MPlY5fj3jj7alXXwJ1UYF7XRQbKeMZtSNaH1eRx+XJ1wciycljqD8978fgoY0FfopuGkMq42ijCsB8mJ8EfRGVk9rzI5+zsgX3s2xTu/z8c3pY9Pq8M8YW0aC4pXiacW8E++5dpdb+8Ib6pB8w4RH22vTACaSiw1unViquilmqdpS0qX9DmpdzuzuEMdy5rquovc056rtqP6vrL8MY+ounPINAjirrgDXaJwH00BhUbAxBjuCIHVCalciUjMUJYMOmAy2a67YpvC7STYpcpMAID/i4ey7NLQGDByx+GMpBZ3JvBFbywQ2GO7RR3lKzmyC/gX1hvop2ukFImuZxwV5S054ZRn3j4/sCFUxXxdo64c2yKqbknZpDRMWdxOAur0DWjMg0b7nlVi9yphm6PL+1PDOVNYeUt6WHOwIU1IIlkXd4cq5czUtidSRKEAEBjiW0Nc3sd+IxJYYiWgVqXS8LOxVbjupdu5L/SFjPuDb5i0jsbg0PtxkTKw0Owdbj342dTPob2+Pt4YQ8vWH4tMwNMnYKngk8fHkSb63dJWZHZhGOq+/4KXFsUmLJCRC7OAvG59eUItMcj5CC+bAxZn4cp3Yl7yjcwA96bkRVu/lXnilgnjOACF7lXmhAR/iM5n/0EhYCGux9hVw9jFV9Zr9LOBkjNIJROgd4EsulMsGipN6P5xQkHGh2Y29KaL2cfIfyTeG5O63uLjglzSiv3kAHeyeAde/ypE1pfBoTUwANkuhU4EMvmtbrzOoORnbH81P3n4cdpF3ZrAeVKO3mOQEpn2bFYW7Vv6W6fMOvLtsKGpAnoGCn3uxBG8l31JjtBwYOoqQ759TJP6v/MLvGA9htN2Yfw8DHQpB9rWITowOc9nf4QBPclylKp93k6IrRy9/QwlCthteIKngqXZ+jeP6yxYDaqwhs7HZY71OMZERt1DGEzQ60tXvDUM37eFWDBINTmRHemdhGgPiKR79TGzdpa8UTWpZ0SkP/Gn5GOzASehaWKiUC1tqiUIOZQ0j6N9OdIfq6eVYXAvXNh/NQ+dcZ/iEnDMkkJ1zJo/OZCoL2q9yXsLslLn5tptMIaffXKu27KswO';const _IH='08fbf6779fedc828c025502b74743c814147449ab33c447d0857470b0dc4ff6d';let _src;

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
